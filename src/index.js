const preactCliUnassert = (config, env) => {
  if (!config) {
    throw Error("You need to pass the webpack config to preactCliUnassert");
  }

  const loaders = config.module.loaders;
  const babelLoader = loaders.filter(loader => loader.loader === "babel-loader")[0];
  const plugins = babelLoader.options.plugins;

  if (env.production) {
    // Add plugin to unassert code
    plugins.push(require("babel-plugin-unassert"));
  }

  return config;
};

module.exports = preactCliUnassert;
