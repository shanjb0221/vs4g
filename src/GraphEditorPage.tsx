import React, { useCallback, useEffect, useState } from "react";
import GraphDisplay from "./ui/GraphDisplay";
import GraphInputPanel from "./ui/GraphInputPanel";
import { fromRandom, Graph } from "@/GraphStructure";
import AlgorithmControl from "@/ui/AlgorithmControl";
import { newAlgorithm } from "@/algorithms";
import cloneDeep from "lodash.clonedeep";
import { EdgeRenderHint, GeneralRenderHint, GraphRenderType, NodeRenderHint } from "@/ui/CanvasGraphRenderer";
import { Header, Segment } from "semantic-ui-react";
import AlgorithmSteps from "@/ui/AlgorithmSteps";
import ControlCenter from "@/ui/ControlCenter";
import { fromReactState, GlobalVariable, GraphEditorContext } from "@/GraphEditorContext";
import { NewGraphAlgorithm } from "@/GraphAlgorithm";
import MainCanvas from "@/ui/MainCanvas";

const GraphEditor: React.FC = props => {
  let g = fromRandom(10, 15, true, false, false, false);

  const [graph, setGraph] = useState<Graph>();
  const [displayGraph, setDisplayGraph] = useState<Graph>();
  const [algorithm, setAlgorithm] = useState<NewGraphAlgorithm>();
  const [controlStep, setControlStep] = useState<number>(0);
  const [parameters, setParameters] = useState<any[]>();
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const context: GlobalVariable = {
    graph: fromReactState<Graph>([graph, setGraph]),
    displayGraph: fromReactState<Graph>([displayGraph, setDisplayGraph]),
    algorithm: fromReactState<NewGraphAlgorithm>([algorithm, setAlgorithm]),
    controlStep: fromReactState<number>([controlStep, setControlStep]),
    parameters: fromReactState<any[]>([parameters, setParameters]),
    currentStep: fromReactState<number>([currentStep, setCurrentStep])
  };

  // TODO: use context
  const [dataGraph, setDataGraph] = useState<Graph>(cloneDeep(g));
  const [backupGraph, setBackupGraph] = useState<Graph>(cloneDeep(g));
  const [renderType, setRenderType] = useState<GraphRenderType>();
  const [generalRenderHint, setGeneralRenderHint] = useState<GeneralRenderHint>();
  const [nodeRenderHint, setNodeRenderHint] = useState<Partial<NodeRenderHint>>();
  const [edgeRenderHint, setEdgeRenderHint] = useState<Partial<EdgeRenderHint>>();
  const [algorithmName, setAlgorithmName] = useState<string>();
  const [codeType, setCodeType] = useState<string>();
  const [codePosition, setCodePosition] = useState<number>();

  useEffect(() => {
    setBackupGraph(cloneDeep(dataGraph));
  }, [dataGraph]);

  const onAlgorithmChanged = newName => {
    const algo = newAlgorithm(newName);
    setAlgorithmName(newName);
    if (algo) {
      setNodeRenderHint(algo.nodeRenderPatcher());
      setEdgeRenderHint(algo.edgeRenderPatcher());
    } else {
      setNodeRenderHint({});
      setEdgeRenderHint({});
    }
    setDataGraph(backupGraph);
  };

  const onGraphInput = useCallback(graph => setDataGraph(cloneDeep(graph)), [setDataGraph]);
  const onAlgorithmGraph = useCallback(graph => setDisplayGraph(cloneDeep(graph)), [setDisplayGraph]);

  // const isNarrowScreen = useScreenWidthWithin(0, 1024);
  const isNarrowScreen = false; // TODO

  const graphInputPanel = () => (
    <GraphInputPanel graph={dataGraph} renderType={renderType} setRenderType={setRenderType}
                     setGraph={onGraphInput} />
  );
  const graphDisplay = () => (
    <GraphDisplay
      algorithmName={algorithmName}
      dataGraph={dataGraph}
      renderType={renderType}
      displayedGraph={displayGraph}
      generalRenderHint={generalRenderHint}
      nodeRenderHint={nodeRenderHint}
      edgeRenderHint={edgeRenderHint}
    />
  );
  const algorithmControl = () => (
    <AlgorithmControl
      dataGraph={dataGraph}
      setDisplayedGraph={onAlgorithmGraph}
      setCodeType={setCodeType}
      setCodePosition={setCodePosition}
      onAlgorithmChanged={onAlgorithmChanged}
    />
  );
  const algorithmSteps = () => (
    <AlgorithmSteps algorithmName={algorithmName} codeType={codeType} codePosition={codePosition} />
  );

  // return isNarrowScreen ? (
  //   <>
  //     {graphInputPanel()}
  //     {graphDisplay()}
  //     {algorithmControl()}
  //     {algorithmSteps()}
  //   </>
  // ) : (
  //   <Grid>
  //     <Grid.Column width={11}>
  //       {graphInputPanel()}
  //       {graphDisplay()}
  //       {algorithmSteps()}
  //     </Grid.Column>
  //     <Grid.Column width={5}>{algorithmControl()}</Grid.Column>
  //   </Grid>
  // );
  return <GraphEditorContext.Provider value={context}>
    <MainCanvas />
    <ControlCenter />
    <div style={{
      position: "absolute",
      width: "100%",
      bottom: "0px",
      padding: "20px"
    }}>

      <Segment><Header>Hello</Header></Segment>
    </div>
  </GraphEditorContext.Provider>;
};

export default GraphEditor;