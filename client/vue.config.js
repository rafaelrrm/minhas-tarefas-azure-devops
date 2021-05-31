const path = require('path');

module.exports = {
  devServer: {
    port: 4002,
  },
  outputDir: path.resolve(__dirname, '../server/build/public'),
};
