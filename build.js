const fs = require("node:fs");
const path = require("node:path");

const source = path.join(__dirname, "src", "index.js");
const outputDir = path.join(__dirname, "dist");
const destination = path.join(outputDir, "app.js");

fs.mkdirSync(outputDir, { recursive: true });
fs.copyFileSync(source, destination);

console.log("Application build completed successfully");
