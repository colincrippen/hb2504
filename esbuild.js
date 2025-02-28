const esbuild = require("esbuild");
const path = require("path");
const fs = require("fs");

const outDir = "dist";
const srcDir = "src";

// Ensure the output directory exists
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir);
}

// Copy static files (manifest, popup.html, styles) from `src/`
const staticFiles = ["manifest.json", "popup.html", "styles.css"];

staticFiles.forEach(file => {
  const srcPath = path.join(srcDir, file);
  const destPath = path.join(outDir, file);

  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
  } else {
    console.warn(`Warning: ${file} not found in ${srcDir}`);
  }
});

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
