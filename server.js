const corsAnywhere = require('cors-anywhere');

// Listen on a specific host via the HOST environment variable
const host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
const port = process.env.PORT || 8080;

corsAnywhere
  .createServer({
    originWhitelist: [], // Allow all origins
  })
  .listen(port, host, () => {
    console.log(`Server running on ${host}:${port}`);
  });
