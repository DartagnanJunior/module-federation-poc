const path = require("path");
const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

require("dotenv").config({
  path: path.resolve(
    __dirname,
    "../../env/.env." + (process.env.NODE_ENV || "development")
  ),
});

module.exports = withModuleFederationPlugin({
  remotes: {
    currencyAnalysis: process.env.CURRENCY_REMOTE_URL,
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
