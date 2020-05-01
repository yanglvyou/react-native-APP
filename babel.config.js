// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
// };

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    'react-native-classname-to-style',
    'react-native-classname-to-dynamic-style',
    [
      'react-native-stylename-to-style',
      {
        extensions: ['less', 'scss', 'sass', 'pcss', 'css'],
      },
    ],
    [
      'react-native-platform-specific-extensions',
      {
        extensions: ['less', 'scss', 'sass', 'pcss', 'css'],
      },
    ],
    ['import', { libraryName: '@ant-design/react-native' }],
  ],
};
