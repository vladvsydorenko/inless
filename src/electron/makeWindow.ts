import * as urlUtil from 'url';
import { App, BrowserWindow } from 'electron';

export interface IMakeWindowOptions {
    path: string;
    isRemote?: boolean;
    isHidden?: boolean;
    isMenuHidden?: boolean;
    isFrameless?: boolean;
    showDevTools?: boolean;
    width?: number;
    height?: number;
};

const makePath = (path: string, isRemote: boolean) => {
    return urlUtil.format({
        pathname: path,
        protocol: isRemote ? 'http:' : 'file:',
        slashes: true,
    });
};

export const makeWindow = (config: IMakeWindowOptions): BrowserWindow => {
    const {
        path,
        isRemote,
        isHidden,
        isMenuHidden,
        isFrameless,
        showDevTools,
        width,
        height
    } = config;
    const pagePath = makePath(path, isRemote);
    const options: any = {
        show: !isHidden,
        width: width || 800,
        height: height || 600,
        frame: !isFrameless,
    };

    const window = new BrowserWindow(options);

    if (isMenuHidden) window.setMenu(null);
    if (showDevTools) (window as any).toggleDevTools();

    window.loadURL(pagePath);

    return window;
};
