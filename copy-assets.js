const fs = require('fs');
const path = require('path');

// Create dist/assets directory if it doesn't exist
const distAssetsDir = path.join(__dirname, 'dist', 'assets');
if (!fs.existsSync(distAssetsDir)) {
    fs.mkdirSync(distAssetsDir, { recursive: true });
}

// Copy all files from src/assets to dist/assets
const srcAssetsDir = path.join(__dirname, 'src', 'assets');
fs.readdirSync(srcAssetsDir).forEach(file => {
    const srcPath = path.join(srcAssetsDir, file);
    const destPath = path.join(distAssetsDir, file);

    if (fs.statSync(srcPath).isFile()) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${file} to dist/assets`);
    }
});