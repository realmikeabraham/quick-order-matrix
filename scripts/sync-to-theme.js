const fs = require("fs-extra");
const path = require("path");
const chokidar = require("chokidar");
const SRC_DIR = path.join(__dirname, "..", "src");
const THEME_DIR = path.join(__dirname, "..", "test-theme");
const MAPPINGS = {
  sections: "sections",
  snippets: "snippets",
  assets: "assets",
  locales: "locales",
  templates: "templates",
};
function syncFile(srcPath) {
  try {
    const relativePath = path.relative(SRC_DIR, srcPath);
    const parts = relativePath.split(path.sep);
    const srcFolder = parts[0];
    if (MAPPINGS[srcFolder]) {
      const destPath = path.join(
        THEME_DIR,
        MAPPINGS[srcFolder],
        ...parts.slice(1)
      );
      fs.copySync(srcPath, destPath);
      console.log(`✓ Synced: ${relativePath}`);
    }
  } catch (error) {
    console.error(`✗ Error syncing ${srcPath}:`, error.message);
  }
}
function syncAll() {
  console.log("Syncing all files...");
  Object.keys(MAPPINGS).forEach((folder) => {
    const srcFolder = path.join(SRC_DIR, folder);
    if (fs.existsSync(srcFolder)) {
      // Recursively sync all files and directories
      function syncRecursive(dir) {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        entries.forEach((entry) => {
          const fullPath = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            syncRecursive(fullPath);
          } else {
            syncFile(fullPath);
          }
        });
      }
      syncRecursive(srcFolder);
    }
  });
  console.log("Initial sync complete!");
}
// Initial sync
syncAll();
// Watch mode
if (process.argv.includes("--watch")) {
  console.log("Watching for changes...");
  chokidar
    .watch(SRC_DIR, { ignoreInitial: true })
    .on("change", syncFile)
    .on("add", syncFile);
}
