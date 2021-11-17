module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['react-native-reanimated/plugin'],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
      },
    ],
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathSuffix: 'src/components',
            rootPathPrefix: '~/components',
          },
          {
            rootPathSuffix: 'src/assets',
            rootPathPrefix: '~/assets',
          },
          {
            rootPathSuffix: 'src/config',
            rootPathPrefix: '~/config',
          },
          {
            rootPathSuffix: 'src/constants',
            rootPathPrefix: '~/constants',
          },
          {
            rootPathSuffix: 'src/context',
            rootPathPrefix: '~/context',
          },
          {
            rootPathSuffix: 'src/helpers',
            rootPathPrefix: '~/helpers',
          },
          {
            rootPathSuffix: 'src/localization',
            rootPathPrefix: '~/localization',
          },
          {
            rootPathSuffix: 'src/navigation',
            rootPathPrefix: '~/navigation',
          },
          {
            rootPathSuffix: 'src/screens',
            rootPathPrefix: '~/screens',
          },
          {
            rootPathSuffix: 'src/utils',
            rootPathPrefix: '~/utils',
          },
        ],
      },
    ],
  ],
};
