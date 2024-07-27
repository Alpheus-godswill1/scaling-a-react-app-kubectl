const express = require('express');
const promClient = require('prom-client');
const app = express();

// Collect default metrics
promClient.collectDefaultMetrics();

app.get('/metrics', (req, res) => {
  res.setHeader('Content-Type', promClient.register.contentType);
  res.end(promClient.register.metrics());
});

app.listen(5056, () => {
  console.log('Metrics server listening on port 5056');
});
