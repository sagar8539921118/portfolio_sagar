const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

async function run() {
    let browser;
    try {
        // Try to find chrome/edge path or use default
        const chromePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'; // Common path on Windows
        
        browser = await puppeteer.launch({
            executablePath: chromePath,
            headless: true
        });
        
        const page = await browser.newPage();
        const filePath = 'file://' + path.resolve(__dirname, 'invoice.html');
        
        await page.goto(filePath, { waitUntil: 'networkidle0' });
        
        // Hide the actions bar before printing
        await page.evaluate(() => {
            const actions = document.querySelector('.actions');
            if (actions) actions.style.display = 'none';
            const container = document.getElementById('invoice-container');
            if (container) {
                container.style.boxShadow = 'none';
                container.style.border = 'none';
            }
        });

        await page.pdf({
            path: 'sk_handloom_invoice.pdf',
            format: 'A4',
            printBackground: true,
            margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' }
        });

        console.log('PDF generated successfully: sk_handloom_invoice.pdf');
    } catch (err) {
        console.error('Error generating PDF:', err);
        process.exit(1);
    } finally {
        if (browser) await browser.close();
    }
}

run();
