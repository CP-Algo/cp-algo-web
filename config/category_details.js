module.exports = [
  {
    id: 'DATA_STRUCTURES',
    name: 'Data Structures',
    subCategories: []
  },
  {
    id: 'DIVIDE_AND_CONQUER',
    name: 'Divide & Conquer',
    subCategories: []
  },
  {
    id: 'DATABASE',
    name: 'Database',
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
            description: 'Search sorted data in O(log(N))',
            inputFormat: 'N\nA_1, A_2, \\cdots, A_{N}',
            inputDefinition: 'N \\eq Array size\nA \\eq Sorted array',
            inputConstraints: '1 \\le N \\le 100\n0 \\le A_i \\le 1',
            outputFormat: 'FirstOne',
            outputDefinition:
              'FirstOne \\eq Index of the first element that equals to 1, -1 if none exists. More formally, the smallest index, FirstOne, satisfying A_{FirstOne} = 1. And -1 if no such index exists.',
            outputConstraints: '0 \\le FirstOne \\lt N',
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
    id: 'GREEDY',
    name: 'Greedy',
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