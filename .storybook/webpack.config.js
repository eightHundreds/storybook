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
