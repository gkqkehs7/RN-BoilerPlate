module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    'react-native-reanimated/plugin',
    // alias
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        alias: {
          '@screens': './src/screens',
          '@layouts': './src/layouts',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@routes': './src/routes',
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@recoil': './src/recoil',
          '@server': './src/server',
          '@axios': './src/axios',
        },
      },
    ],
  ],
};
