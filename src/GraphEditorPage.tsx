import React, { useEffect, useState } from "react";
import { Graph } from "@/GraphStructure";
import AlgorithmSteps from "@/ui/AlgorithmSteps";
import ControlCenter from "@/ui/ControlCenter";
import { fromReactState, GlobalVariable, GraphEditorContext } from "@/GraphEditorContext";
import { NewGraphAlgorithm } from "@/GraphAlgorithm";
import MainCanvas from "@/ui/MainCanvas";
import LegendDisplay from "@/ui/LegendDisplay";

const GraphEditor: React.FC = props => {
  const [graph, setGraph] = useState<Graph>();
  const [displayGraph, setDisplayGraph] = useState<Graph>();
  const [algorithm, setAlgorithm] = useState<NewGraphAlgorithm>();
  const [controlStep, setControlStep] = useState<number>(0);
  const [parameters, setParameters] = useState<any[]>();
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const [codePosition, setCodePosition] = useState<number>(-1);
  const context: GlobalVariable = {
    graph: fromReactState<Graph>([graph, setGraph]),
    displayGraph: fromReactState<Graph>([displayGraph, setDisplayGraph]),
    algorithm: fromReactState<NewGraphAlgorithm>([algorithm, setAlgorithm]),
    controlStep: fromReactState<number>([controlStep, setControlStep]),
    parameters: fromReactState<any[]>([parameters, setParameters]),
    currentStep: fromReactState<number>([currentStep, setCurrentStep]),
    codePosition: fromReactState<number>([codePosition, setCodePosition])
  };

  return <GraphEditorContext.Provider value={context}>
    <MainCanvas />
    <ControlCenter />
    <AlgorithmSteps />
    <LegendDisplay />
  </GraphEditorContext.Provider>;
};

export default GraphEditor;