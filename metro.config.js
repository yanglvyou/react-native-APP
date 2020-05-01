/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

// module.exports = {
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: false,
//       },
//     }),
//   },
// };

const { getDefaultConfig } = require('metro-config');
const blacklist = require('metro-config/src/defaults/blacklist');

module.exports = (async () => {
  const {
    resolver: { sourceExts },
  } = await getDefaultConfig();
  return {
    resolver: {
      sourceExts: [...sourceExts, 'less', 'scss', 'sass', 'pcss', 'css'],
      blacklistRE: blacklist([/node_modules\/.*\/node_modules\/react-native\/.*/, /node_modules_local\/.*\/node_modules\/react-native\/.*/]),
    },
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
      babelTransformerPath: require.resolve('./rn-transformer.js'),
    },
  };
})();
