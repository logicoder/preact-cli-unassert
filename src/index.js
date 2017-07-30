const preactCliUnassert = (config, env) => {
  if (!config) {
    throw Error("You need to pass the webpack config to preactCliUnassert");
  }
  if (!env.production) {
    return;
  }

  const loaders = config.module.loaders;
  const babelLoader = loaders.filter(loader => loader.loader === "babel-loader")[0];
  const plugins = babelLoader.options.plugins;

  // Add plugin to unassert code
  plugins.push(require("babel-plugin-unassert"));
};

module.exports = preactCliUnassert;
