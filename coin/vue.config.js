const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
  },
  transpileDependencies: ["quasar"],

  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: false,
    },
  },
});
