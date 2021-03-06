/**
 * Copyright (c) 2018 Uncharted Software Inc.
 * http://www.uncharted.software/
 */

const os = require('os');
const path = require('path');
const exec = require('child_process').execSync;

function openCertFile() {
    const certPath = path.join(process.cwd(), 'certs/PowerBICustomVisualTest_public.crt');
    const openCmds = {
        linux: 'xdg-open',
        darwin: 'open',
        win32: 'powershell start'
    };
    const startCmd = openCmds[os.platform()];
    if (startCmd) {
        try {
            exec(`${startCmd} "${certPath}"`);
        } catch (e) {
            console.info('Certificate path:', certPath);
        }
    } else {
        console.info('Certificate path:', certPath);
    }
}

openCertFile();