const fs = require("fs");
const path = require("path");

function getCommandFiles() {
  const base = path.join(__dirname, "..", "commands");
  const files = [];
  function walk(dir) {
    for (const item of fs.readdirSync(dir)) {
      const full = path.join(dir, item);
      if (fs.statSync(full).isDirectory()) walk(full);
      else if (item.endsWith(".js")) files.push(full);
    }
  }
  walk(base);
  return files;
}
module.exports = { getCommandFiles };
