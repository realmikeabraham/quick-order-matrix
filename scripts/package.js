#!/usr/bin/env node

/**
 * Package Script for Quick Order Matrix
 * 
 * Creates a distributable .zip file containing the theme files.
 * Run with: npm run package
 * 
 * This script will:
 * 1. Run the build process first (if dist/ doesn't exist)
 * 2. Create a .zip file with the theme files
 */

const fs = require('fs-extra');
const path = require('path');
const archiver = require('archiver');
const { execSync } = require('child_process');

const ROOT_DIR = path.join(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const pkg = require(path.join(ROOT_DIR, 'package.json'));

// Output filename includes version
const ZIP_NAME = `quick-order-matrix-v${pkg.version}.zip`;
const ZIP_PATH = path.join(ROOT_DIR, ZIP_NAME);

async function package() {
    console.log('📦 Packaging Quick Order Matrix...\n');

    try {
        // Always run build to ensure dist/ is fresh and complete
        console.log('🔨 Running build to ensure dist/ is fresh...\n');
        execSync('npm run build', { cwd: ROOT_DIR, stdio: 'inherit' });
        console.log('');

        // Remove existing zip if present
        if (await fs.pathExists(ZIP_PATH)) {
            await fs.remove(ZIP_PATH);
        }

        // Create zip file
        console.log(`📝 Creating ${ZIP_NAME}...`);

        await new Promise((resolve, reject) => {
            const output = fs.createWriteStream(ZIP_PATH);
            const archive = archiver('zip', { zlib: { level: 9 } });

            output.on('close', () => {
                const sizeKB = (archive.pointer() / 1024).toFixed(2);
                console.log(`   ✓ Archive created (${sizeKB} KB)`);
                resolve();
            });

            archive.on('error', reject);

            archive.pipe(output);

            // Add the dist folder contents (sections/, snippets/, assets/)
            archive.directory(DIST_DIR, false);

            // Add LICENSE to the zip
            const licensePath = path.join(ROOT_DIR, 'LICENSE');

            if (fs.existsSync(licensePath)) {
                archive.file(licensePath, { name: 'LICENSE' });
            }

            archive.finalize();
        });

        console.log(`\n✅ Package complete!\n`);
        console.log(`📍 Output: ${ZIP_PATH}`);
        console.log(`\nUsers can extract this zip and copy the folders to their Shopify theme.`);
        console.log('');

    } catch (error) {
        console.error('❌ Packaging failed:', error.message);
        process.exit(1);
    }
}

package();
