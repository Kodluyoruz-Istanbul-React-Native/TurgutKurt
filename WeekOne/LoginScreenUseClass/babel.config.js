module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathPrefix: '~',
            rootPathSuffix: 'src',
          },
          {
            rootPathPrefix: '~screens',
            rootPathSuffix: 'src/screen/index',
          },
          {
            rootPathPrefix: '~assets',
            rootPathSuffix: 'src/assets/index',
          },
          {
            rootPathPrefix: '~components',
            rootPathSuffix: 'src/components/index',
          },
        ],
      },
    ],
  ],
};
