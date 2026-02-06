const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = 5501;

// Colores para la consola
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    green: '\x1b[32m',
    cyan: '\x1b[36m',
    yellow: '\x1b[33m',
    red: '\x1b[31m',
    magenta: '\x1b[35m'
};

function getBestIP() {
    const interfaces = os.networkInterfaces();
    const allIPs = [];

    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                allIPs.push({ interface: name, ip: iface.address });
            }
        }
    }

    if (allIPs.length === 0) return 'localhost';

    const priorityNames = ['Wi-Fi', 'WiFi', 'Ethernet', 'eth0', 'wlan0', 'en0', 'en1'];

    for (const priorityName of priorityNames) {
        const found = allIPs.find(item =>
            item.interface.toLowerCase().includes(priorityName.toLowerCase())
        );
        if (found) return found.ip;
    }

    const nonVirtual = allIPs.find(item =>
        !item.interface.toLowerCase().includes('virtual') &&
        !item.interface.toLowerCase().includes('vmware') &&
        !item.interface.toLowerCase().includes('vpn')
    );

    return nonVirtual ? nonVirtual.ip : allIPs[0].ip;
}

function printBox(text, width = 70) {
    const line = '='.repeat(width);
    const padding = ' '.repeat(Math.max(0, (width - text.length) / 2));
    console.log(`${colors.cyan}+${line}+${colors.reset}`);
    console.log(`${colors.cyan}|${colors.reset}${padding}${colors.bright}${text}${padding}${colors.reset}${colors.cyan}|${colors.reset}`);
    console.log(`${colors.cyan}+${line}+${colors.reset}`);
}

function printSeparator() {
    console.log(`${colors.cyan}${'-'.repeat(72)}${colors.reset}`);
}

const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    if (req.url === '/api/server-info') {
        const bestIP = getBestIP();
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        res.end(JSON.stringify({
            bestIP: bestIP,
            adminUrl: `http://${bestIP}:${PORT}/admin.html`,
            formUrl: `http://${bestIP}:${PORT}/Sistema_de_peticion_de_favores_fremium.html`
        }));
        return;
    }

    let filePath = '.' + req.url;
    if (filePath === './') filePath = './admin.html';

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 - Not Found / No encontrado</h1>');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

server.listen(PORT, () => {
    const ip = getBestIP();
    
    console.log('\n');
    printBox('  OFFICIAL FAVOR SYSTEM 2026 - SERVER STARTED  ');
    console.log('\n');
    
    printSeparator();
    console.log(`${colors.bright}${colors.yellow}  SERVER INFORMATION / INFORMACION DEL SERVIDOR${colors.reset}`);
    printSeparator();
    console.log();
    console.log(`  ${colors.green}* Network IP:${colors.reset}      http://${ip}:${PORT}`);
    console.log(`  ${colors.green}* Localhost:${colors.reset}       http://localhost:${PORT}`);
    console.log();
    
    printSeparator();
    console.log(`${colors.bright}${colors.yellow}  IMPORTANT LINKS / ENLACES IMPORTANTES${colors.reset}`);
    printSeparator();
    console.log();
    console.log(`  ${colors.cyan}* Admin Panel:${colors.reset}`);
    console.log(`     http://${ip}:${PORT}/admin.html`);
    console.log();
    console.log(`  ${colors.cyan}* Favor Form:${colors.reset}`);
    console.log(`     http://${ip}:${PORT}/Sistema_de_peticion_de_favores_fremium.html`);
    console.log();
    
    printSeparator();
    console.log(`${colors.bright}${colors.yellow}  QUICK START / INICIO RAPIDO${colors.reset}`);
    printSeparator();
    console.log();
    console.log(`  ${colors.magenta}ENGLISH:${colors.reset}`);
    console.log(`     1. Open the Admin URL above in your browser`);
    console.log(`     2. Enter your email address`);
    console.log(`     3. Copy the generated link and share it!`);
    console.log();
    console.log(`  ${colors.magenta}ESPANOL:${colors.reset}`);
    console.log(`     1. Abre la URL de Admin en tu navegador`);
    console.log(`     2. Introduce tu direccion de email`);
    console.log(`     3. Copia el enlace generado y compartelo!`);
    console.log();
    
    printSeparator();
    console.log(`${colors.bright}${colors.yellow}  TIPS / CONSEJOS${colors.reset}`);
    printSeparator();
    console.log();
    console.log(`  ${colors.yellow}* Firewall:${colors.reset} If Windows asks, click "Allow Access"`);
    console.log(`             Si Windows pregunta, haz clic en "Permitir acceso"`);
    console.log();
    console.log(`  * Share the link with your friends on the same WiFi network`);
    console.log(`    Comparte el enlace con tus amigos en la misma red WiFi`);
    console.log();
    
    printSeparator();
    console.log(`${colors.bright}${colors.green}  Server running on port ${PORT} / Servidor ejecutandose en puerto ${PORT}${colors.reset}`);
    printSeparator();
    console.log();
    console.log(`  ${colors.yellow}Press Ctrl+C to stop / Presiona Ctrl+C para detener${colors.reset}`);
    console.log();
});

// Handle port already in use error
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log('\n');
        printBox('  ERROR - PORT ALREADY IN USE / PUERTO YA EN USO  ');
        console.log('\n');
        console.log(`${colors.red}  The port ${PORT} is already being used by another program.${colors.reset}`);
        console.log(`${colors.red}  El puerto ${PORT} ya esta siendo usado por otro programa.${colors.reset}`);
        console.log();
        console.log(`${colors.yellow}  SOLUTIONS / SOLUCIONES:${colors.reset}`);
        console.log();
        console.log(`  1. Stop the other server instance / Detener la otra instancia:`);
        console.log(`     - Close any other command windows running this server`);
        console.log(`     - Cierra cualquier otra ventana de comandos ejecutando este servidor`);
        console.log();
        console.log(`  2. Use a different port / Usar un puerto diferente:`);
        console.log(`     - Edit server.js and change PORT = 5501 to another number`);
        console.log(`     - Edita server.js y cambia PORT = 5501 a otro numero`);
        console.log();
        console.log(`  3. Find and close the process / Encontrar y cerrar el proceso:`);
        console.log(`     - Windows: Open Task Manager and end Node.js or Python processes`);
        console.log(`     - Windows: Abre el Administrador de tareas y finaliza procesos de Node.js o Python`);
        console.log();
    } else {
        console.error(`${colors.red}Server error / Error del servidor:${colors.reset}`, err);
    }
    process.exit(1);
});
