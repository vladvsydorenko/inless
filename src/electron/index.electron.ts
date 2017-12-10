import * as path from 'path';
import { app, BrowserWindow } from 'electron';
import { makeWindow } from './makeWindow';

const FRONTEND_PAGE_URL = path.join(process.cwd(), 'src/frontend/index.frontend.html');
const BACKEND_PAGE_URL = path.join(process.cwd(), 'src/backend/index.backend.html');

let frontendWindow: BrowserWindow;
let backendWindow: BrowserWindow;

app.on('ready', () => {

    frontendWindow = makeWindow({
        path: FRONTEND_PAGE_URL,
        showDevTools: true,
        isMenuHidden: true,
    });

    backendWindow = makeWindow({
        path: BACKEND_PAGE_URL,
        isHidden: false,
        showDevTools: true,
    });

    frontendWindow.on('closed', () => { frontendWindow = null; });
    backendWindow.on('closed', () => { backendWindow = null; });

});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
