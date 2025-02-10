const { validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'kashvi-creation',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

// Validate arguments using validateArgs function
validateArgs(connectorConfig);

