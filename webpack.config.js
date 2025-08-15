const ModuleFederationPlugin = require("@angular-architects/module-federation/webpack");

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: "shell",
      remotes: {
        "customer-mf": "http://localhost:4201/remoteEntry.js",
        "product-mf": "http://localhost:4202/remoteEntry.js", 
        "order-mf": "http://localhost:4203/remoteEntry.js",
        "dashboard-mf": "http://localhost:4204/remoteEntry.js"
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true },
        "@angular/common": { singleton: true, strictVersion: true },
        "@angular/router": { singleton: true, strictVersion: true },
        "@ngrx/store": { singleton: true, strictVersion: true },
        "@e-commerce/common-auth": { singleton: true, strictVersion: true },
        "@e-commerce/common-ui": { singleton: true, strictVersion: true }
      }
    })
  ]
};
