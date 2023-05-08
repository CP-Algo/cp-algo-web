module.exports = [
  {
    id: 'DATA_STRUCTURES',
    name: 'Data Structures',
    subCategories: [
      {
        id: 'ADVANCED_DATA_STRUCTURES',
        name: 'Advanced',
        algorithms: [
          {
            id: 'SEGMENT_TREE',
            name: 'Segment Tree',
            description:
              'Task description',
            inputFormat:
              'Task input format',
            inputDefinition:
              'Task input definition',
            inputConstraints:
              'Task input constraints',
            outputFormat: 'Task output format',
            outputDefinition:
              'Task output definition',
            outputConstraints: 'Task output constraints',
          },
        ],
      },
    ]
  },
  {
    id: 'DATABASE',
    name: 'Database',
    subCategories: []
  },
  {
    id: 'DIVIDE_AND_CONQUER',
    name: 'Divide & Conquer',
    subCategories: []
  },
  {
    id: 'DYNAMIC_PROGRAMMING',
    name: 'Dynamic Programming',
    subCategories: []
  },
  {
    id: 'EFFICIENT_SEARCH_ALGORITHMS',
    name: 'Efficient Search Algorithms',
    subCategories: [
      {
        id: 'ADVANCED_SEARCH_ALGORITHMS',
        name: 'Advanced',
        algorithms: [
          {
            id: 'BINARY_SEARCH',
            name: 'Binary Search',
            description:
              'Search sorted data in $O(\\log(N))$',
            inputFormat:
              '$N$\n' +
              '$A_1, A_2, \\cdots, A_{N}$',
            inputDefinition:
              '$N \\eq$ Array size' +
              '$A \\eq$ Sorted array',
            inputConstraints:
              '$1 \\le N \\le 10^6$' +
              '$0 \\le A_i \\le 1$',
            outputFormat: '$\\texttt{FirstOne}$',
            outputDefinition:
              '$\\texttt{FirstOne} \\eq$ Index of the first element that equals to $1$, $-1$ if none exists.' +
              'More formally, the smallest index, $\\texttt{FirstOne}$, satisfying $A_{\\textttt{FirstOne}} = 1$. And $-1$ if no such index exists.',
            outputConstraints: '$-1 \\le \\texttt{FirstOne} < N$',
          },
        ],
      },
    ],
  },
  {
    id: 'FAST_FOURIER_TRANSFORM',
    name: 'Fast Fourier Transform',
    subCategories: []
  },
  {
    id: 'FLOW_MATCHING',
    name: 'Flow Matching',
    subCategories: []
  },
  {
    id: 'GAME_THEORY',
    name: 'Game Theory',
    subCategories: []
  },
  {
    id: 'GEOMETRY',
    name: 'Geometry',
    subCategories: []
  },
  {
    id: 'GRAPH_THEORY',
    name: 'Graph Theory',
    subCategories: []
  },
  {
    id: 'GREEDY',
    name: 'Greedy',
    subCategories: []
  },
  {
    id: 'INPUT_OUTPUT',
    name: 'Input Output',
    subCategories: []
  },
  {
    id: 'MATH',
    name: 'Math',
    subCategories: []
  },
  {
    id: 'MATRIX',
    name: 'Matrix',
    subCategories: []
  },
  {
    id: 'PARSING_GRAMMAR',
    name: 'Parsing Grammar',
    subCategories: []
  },
  {
    id: 'RECURSION',
    name: 'Recursion',
    subCategories: []
  },
  {
    id: 'STRING',
    name: 'String',
    subCategories: []
  },
  {
    id: 'WARMUP',
    name: 'Warmup',
    subCategories: []
  },
]