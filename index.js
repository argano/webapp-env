const fs = require("fs");
const dotenv = require("dotenv");

(() => {
  if (process.argv.length !== 4) {
    console.error("webapp-env <input> <output>");
    return;
  }
  const input = process.argv[2];
  const output = process.argv[3];
  const dotenvConfig = dotenv.config({ path: input});

  const appEnvVars = dotenvConfig.parsed;
  Object.keys(appEnvVars).forEach((key) => {
    if (key.match(/^__.*/)) {
      delete appEnvVars[key];
    }
  });
  const body = "window.envVars = " + JSON.stringify(appEnvVars) + ";";
  fs.writeFileSync(output, Buffer.from(body));
})();
