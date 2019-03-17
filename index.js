module.exports = {
  /**
   * Config to allow Blockstack to read the manifest.json file
   * when developing locally
   */
  devServer: devServerConfig => {
    if (!devServerConfig.headers) {
      devServerConfig.headers = {};
    }

    devServerConfig.headers = {
      ...devServerConfig.headers,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    };
    return devServerConfig;
  }
};
