const esbuild = require("esbuild");
const fs = require("fs");

const outDir = "dist";

// Ensure output directory exists
fs.mkdirSync(outDir, { recursive: true });

// Copy static files
["popup.html", "styles.css"].forEach(file => {
  fs.copyFileSync(`src/${file}`, `${outDir}/${file}`);
});

// Copy manifest.json from root
fs.copyFileSync("manifest.json", `${outDir}/manifest.json`);

// Build TypeScript files
esbuild.build({
  entryPoints: ["src/background.ts", "src/content.ts", "src/popup.ts"],
  bundle: true,
  outdir: outDir,
  minify: true,
  sourcemap: true,
  target: ["chrome58", "firefox57"],
  platform: "browser"
}).catch(() => process.exit(1));
