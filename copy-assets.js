const fs = require('fs');
const path = require('path');

function copyAssets() {
    try {
        // Create dist/assets directory if it doesn't exist
        const distAssetsDir = path.join(__dirname, 'dist', 'assets');
        if (!fs.existsSync(distAssetsDir)) {
            fs.mkdirSync(distAssetsDir, { recursive: true });
            console.log('Created dist/assets directory');
        }

        // Copy all files from src/assets to dist/assets
        const srcAssetsDir = path.join(__dirname, 'src', 'assets');
        if (!fs.existsSync(srcAssetsDir)) {
            console.error('Source assets directory not found:', srcAssetsDir);
            return;
        }

        const files = fs.readdirSync(srcAssetsDir);
        console.log('Found files in src/assets:', files);

        files.forEach(file => {
            const srcPath = path.join(srcAssetsDir, file);
            const destPath = path.join(distAssetsDir, file);

            if (fs.statSync(srcPath).isFile()) {
                fs.copyFileSync(srcPath, destPath);
                console.log(`Copied ${file} to dist/assets`);
            } else {
                console.log(`Skipping directory: ${file}`);
            }
        });

        // Verify files were copied
        const copiedFiles = fs.readdirSync(distAssetsDir);
        console.log('Files in dist/assets:', copiedFiles);
    } catch (error) {
        console.error('Error copying assets:', error);
        process.exit(1);
    }
}

copyAssets();