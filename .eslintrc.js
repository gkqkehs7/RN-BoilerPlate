// .eslintrc.js
module.exports = {
  root: true,
  plugins: ['perfectionist'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  ignorePatterns: [
    '.eslintrc.js',
    'babel.config.js',
    'jest.config.js',
    'metro.config.js',
    'tailwind.config.js',
    'react-native.config.js',
  ],
  rules: {
    'no-unused-vars': 'error',
    'perfectionist/sort-imports': [
      'error',
      {
        order: 'asc',
        type: 'line-length',
        newlinesBetween: 'always',
        groups: [
          'react',
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling', 'index'],
          'customScreens',
          'customLayouts',
          'customComponents',

          'customRoutes',
          'customRecoil',
          'customAxios',
          'customServer',
          'customHooks',
          'customUtils',
          'customType',
          'customAssets',
          'object',
          'unknown',
        ],
        customGroups: {
          value: {
            react: ['react', 'react-*', '@react-*'],
            customScreens: ['@screens/**'],
            customLayouts: ['@layouts/**'],
            customComponents: ['@components/**'],
            customRoutes: ['@routes/**'],
            customRecoil: ['@recoil/**'],
            customAxios: ['@axios/**'],
            customServer: ['@server/**'],
            customHooks: ['@hooks/**'],
            customUtils: ['@utils/**'],
            customType: ['@type/**'],
            customAssets: ['@assets/**'],
          },
        },
      },
    ],
  },
};
