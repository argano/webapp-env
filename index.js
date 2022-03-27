const fs = require("fs");
const dotenv = require("dotenv");

function parse(input) {
  const dotenvConfig = dotenv.config(input ? { path: input } : undefined);
  const appEnvVars = dotenvConfig.parsed;
  Object.keys(appEnvVars).forEach((key) => {
    if (key.match(/^__.*/)) {
      delete appEnvVars[key];
    }
  });
  const body = "window.envVars = " + JSON.stringify(appEnvVars) + ";";
  return body;
}

function cmd() {
  if (process.argv.length !== 4) {
    console.error("webapp-env <input> <output>");
    return;
  }
  const input = process.argv[2];
  const output = process.argv[3];
  const body = parse(input);
  fs.writeFileSync(output, Buffer.from(body));
};

module.exports = {
  parse,
  cmd
};
