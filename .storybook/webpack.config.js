const path = require("path");
function getAbsolutePath(p) {
  return path.resolve(__dirname, p);
}
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("awesome-typescript-loader")
      },
      // Optional
      {
        loader: require.resolve("react-docgen-typescript-loader")
      },
    ]
  });
  // config.module.rules.push({
  //   test: /\.stories.(ts|tsx)$/,
  //   loaders: [require.resolve('@storybook/addon-storysource/loader')],
  //   enforce: 'pre',
  // });
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      {
        loader: "style-loader"
      },
      {
        loader: "css-loader",
        options: {
          modules: true,
          sourceMap: true,
          localIdentName: "[local]"
        }
      },
      {
        loader: "sass-loader"
      }
    ]
  });


  config.resolve.extensions.push(".ts", ".tsx");
  config.resolve.alias = {
    ...config.resolve.alias,
    "@storyRoot": getAbsolutePath(`../stories`)
  };
  return config;
};
