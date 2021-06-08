module.exports = {
  title: "图编辑器",
  ui: {
    parameters: "算法参数",
    select_algorithm: "选择算法",
    select_code_type: "选择代码类型",
    start: "启动",
    restart: "重新启动",
    no_algorithm: "选择算法",
    no_codetype: "请选择算法与代码类型",
    check_parameters: "检查参数",
    autorun: "自动运行",
    pause: "暂停",
    previous_step: "上一步",
    next_step: "下一步",
    runner_stop: "未运行",
    runner_running: "正在运行",
    runner_done: "已完成",
    step: "步",
    input_panel: "输入图",
    algorithm_control: "算法控制中心",
    extra_data: "算法附加数据",
    code_display: "代码显示器",
    graph_display: "图渲染器"
  },
  graph: {
    random: {
      name: "随机图"
    },
    edge_list: {
      name: "边列表"
    },
    adjmat: {
      name: "邻接矩阵",
      error: {
        non_square: "邻接矩阵应为方阵",
        asymmetric: "无向图的邻接矩阵应对称",
        multiple_edges: "邻接矩阵不允许有重边"
      }
    },
    adjlist: {
      name: "邻接链表"
    },
    bipartite: {
      name: "二分图",
      error: {
        not_bipartite: "非二分图"
      }
    },
    bipmat: {
      name: "二分图矩阵",
      error: {
        multiple_edges: "边矩阵不允许有重边"
      }
    },
    incmat: {
      name: "关联矩阵",
      error: {
        non_matrix: "输入非矩阵",
        invalid_edge_directed: "有向图中，每一列应有且只有一个1和-1",
        invalid_edge_undirected: "无向图中，每一列应有且只有两个1"
      }
    },
    fwd_list: {
      name: "前向表"
    },
    network: {
      name: "网络流图",
      error: {
        non_matrix: "输入非矩阵"
      }
    }
  },
  input: {
    error: {
      nan: "输入并不能转化为数字",
      not_an_integer: "输入不是整数",
      zero_or_one: "无向图的边中只允许0或1",
      out_of_range: "输入超出有效区间",
      invalid_row_count: "输入矩阵的函数无效",
      non_matrix: "输入非矩阵",
      empty: "输入不能为空",
      not_square: "输入不是方阵",
      not_matrix: "输入不是矩阵",
      asymmetric: "输入不是对称矩阵",
      edge_count_incorrect: "输入边数不合法",
      edge_format_incorrect: "输入边格式不合法",
      no_weight: "输入没有权值",
      non_increment: "输入不递增",
      invalid_format: "输入格式非法",
      self_loop: "输入存在自环",
      multiple_edges: "输入存在重边",
      network: {
        no_flow: "输入没有流量",
        no_cost: "输入没有权值"
      }
    },
    props: {
      node_count: "节点数",
      edge_count: "边数",
      max_weight: "最大边权",
      directed: "有向图？",
      weighted: "加权图？",
      self_loop: "允许自环？",
      multiple_edges: "允许重边？",
      have_cost: "费用流图？"
    }
  },
  algo: {
    category: {
      BfsDfs: "图的遍历",
      CriticalPath: "关键路径",
      EulerPath: "欧拉回路",
      HamiltonPath: "哈密顿回路",
      MST: "最小生成树",
      SSSP: "单源最短路",
      TravelingSalesmanProblem: "旅行商问题",
      Grid: "网格图",
      Matching: "匹配",
      NetworkFlow: "网络流",
      PlanarGraph: "平面图"
    },
    GridBfs: {
      name: "网格BFS算法",
      para: {
        start: "起始点",
        end: "结束点"
      }
    },
    Bfs: {
      name: "图的遍历：BFS算法",
      para: {
        start_point: "起始点"
      }
    },
    Dfs: {
      name: "图的遍历：DFS算法",
      para: {
        start_point: "起始点"
      }
    },
    CriticalPath: {
      name: "关键路径",
      para: {}
    },
    EulerPath: {
      name: "欧拉回路",
      para: {}
    },
    HamiltonPath: {
      name: "哈密顿回路",
      para: {}
    },
    Kruskal: {
      name: "最小生成树：Kruskal算法",
      para: {}
    },
    Prim: {
      name: "最小生成树：Prim算法",
      para: {}
    },
    Dijkstra: {
      name: "单源最短路：Dijkstra算法",
      para: {
        start_point: "起始点"
      }
    },
    Ford: {
      name: "单源最短路：Ford算法",
      para: {
        start_point: "起始点"
      }
    },
    TravelingSalesmanProb: {
      name: "旅行商问题：分支限界法",
      para: {}
    },
    SalesmanCheaperAlgo: {
      name: "旅行商问题：便宜算法",
      para: {}
    },
    mf_ff: {
      name: "最大流：Ford-Fulkerson算法",
      para: {
        source_vertex: "源点",
        target_vertex: "汇点"
      }
    },
    mf_ek: {
      name: "最大流：Edmonds-Karp算法",
      para: {
        source_vertex: "源点",
        target_vertex: "汇点"
      }
    },
    mf_dinic: {
      name: "最大流：Dinic算法",
      para: {
        source_vertex: "源点",
        target_vertex: "汇点"
      }
    },
    mcf_classic: {
      name: "最小费用最大流：经典算法",
      para: {
        source_vertex: "源点",
        target_vertex: "汇点",
        flow_limit: "最大流量"
      }
    },
    mcf_zkw: {
      name: "最小费用最大流：Zkw算法",
      para: {
        source_vertex: "源点",
        target_vertex: "汇点",
        flow_limit: "最大流量"
      }
    },
    mbm_hungarian: {
      name: "二分图最大匹配：匈牙利算法",
      para: {}
    },
    mwbm_km: {
      name: "二分图最大权匹配：Kuhn-Munkres算法",
      para: {}
    },
    mm_gabow: {
      name: "一般图最大匹配：带花树算法",
      para: {}
    },
    pt_dmp: {
      name: "平面性检测：Demoucron-Malgrange-Pertuiset算法",
      para: {}
    },
    code_type: {
      pseudo: "伪代码",
      pseudo_en: "Pseudocode"
    }
  }
};
