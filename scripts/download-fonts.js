const fs = require('fs');
const path = require('path');
const https = require('https');

async function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
    }).on('error', reject);
  });
}

async function fetchCss(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/119.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  const geistDir = path.join(__dirname, '../raqmilabs/assets/fonts/geist');
  const cairoDir = path.join(__dirname, '../raqmilabs/assets/fonts/cairo');
  fs.mkdirSync(geistDir, { recursive: true });
  fs.mkdirSync(cairoDir, { recursive: true });

  console.log('Fetching Google Fonts CSS for Geist & Cairo...');
  const css = await fetchCss('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800&family=Cairo:wght@400;600;700&display=swap');

  // Parse font-face rules
  const fontFaceRegex = /@font-face\s*\{([^}]+)\}/g;
  let match;
  let fontIndex = 0;
  let localCssRules = [];

  while ((match = fontFaceRegex.exec(css)) !== null) {
    const block = match[1];
    const familyMatch = block.match(/font-family:\s*['"]?([^'";]+)['"]?/);
    const weightMatch = block.match(/font-weight:\s*([^;]+);/);
    const styleMatch = block.match(/font-style:\s*([^;]+);/);
    const urlMatch = block.match(/url\((https:\/\/[^)]+\.woff2)\)/);

    if (familyMatch && weightMatch && urlMatch) {
      const family = familyMatch[1].trim();
      const weight = weightMatch[1].trim();
      const style = styleMatch ? styleMatch[1].trim() : 'normal';
      const remoteUrl = urlMatch[1].trim();

      const isGeist = family.toLowerCase().includes('geist');
      const prefix = isGeist ? 'geist' : 'cairo';
      const targetDir = isGeist ? geistDir : cairoDir;
      const filename = `${prefix}-${weight}-${style}-${fontIndex++}.woff2`;
      const filePath = path.join(targetDir, filename);

      console.log(`Downloading ${family} weight ${weight} -> ${filename}...`);
      await downloadFile(remoteUrl, filePath);

      localCssRules.push(`@font-face {
  font-family: '${family}';
  font-style: ${style};
  font-weight: ${weight};
  font-display: swap;
  src: url('/assets/fonts/${prefix}/${filename}') format('woff2');
}`);
    }
  }

  const generatedCssPath = path.join(__dirname, '../src/fonts.css');
  fs.writeFileSync(generatedCssPath, localCssRules.join('\n\n') + '\n', 'utf8');
  console.log(`Fonts downloaded and @font-face CSS generated at ${generatedCssPath}`);
}

run().catch(err => {
  console.error('Font download error:', err);
  process.exit(1);
});
