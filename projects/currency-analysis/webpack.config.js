const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

const mfConfig = withModuleFederationPlugin({
  name: "currency-analysis",

  exposes: {
    "./routes": "./projects/currency-analysis/src/app/currency.routes.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});

// liberar cors
mfConfig.devServer = {
  port: 4201,        // mesma porta do ng serve
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,OPTIONS,HEAD",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  },
};

module.exports = mfConfig;