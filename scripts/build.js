#!/usr/bin/env node

/**
 * Build Script for Quick Order Matrix
 * 
 * Copies source files from src/ to dist/ folder for distribution.
 * Run with: npm run build
 */

const fs = require('fs-extra');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

// Folders to copy from src/ to dist/
const FOLDERS_TO_COPY = ['sections', 'snippets', 'assets'];

async function build() {
    console.log('🔨 Building Quick Order Matrix...\n');

    try {
        // Clean dist folder
        if (await fs.pathExists(DIST_DIR)) {
            console.log('🧹 Cleaning dist folder...');
            await fs.remove(DIST_DIR);
        }

        // Create dist folder
        await fs.ensureDir(DIST_DIR);

        // Copy each folder
        for (const folder of FOLDERS_TO_COPY) {
            const srcPath = path.join(SRC_DIR, folder);
            const destPath = path.join(DIST_DIR, folder);

            if (await fs.pathExists(srcPath)) {
                console.log(`📁 Copying ${folder}/...`);
                await fs.copy(srcPath, destPath);

                // Count files copied
                const files = await fs.readdir(destPath);
                console.log(`   ✓ ${files.length} file(s) copied`);
            } else {
                console.log(`⚠️  Skipping ${folder}/ (not found)`);
            }
        }

        console.log('\n✅ Build complete! Files are in dist/\n');

        // List what was built
        console.log('📦 Distribution contents:');
        for (const folder of FOLDERS_TO_COPY) {
            const folderPath = path.join(DIST_DIR, folder);
            if (await fs.pathExists(folderPath)) {
                const files = await fs.readdir(folderPath);
                console.log(`   ${folder}/`);
                files.forEach(file => console.log(`     └── ${file}`));
            }
        }
        console.log('');

    } catch (error) {
        console.error('❌ Build failed:', error.message);
        process.exit(1);
    }
}

build();
