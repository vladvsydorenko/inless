import * as urlUtil from 'url';
import { App, BrowserWindow } from 'electron';

export interface IMakeWindowOptions {
    path: string;
    isRemote?: boolean;
    isHidden?: boolean;
    isMenuHidden?: boolean;
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

export const makeWindow = ({ path, isRemote, isHidden, isMenuHidden, showDevTools, width, height }: IMakeWindowOptions): BrowserWindow => {
    const pagePath = makePath(path, isRemote);
    const options: any = {
        show: !isHidden,
        width: width || 800,
        height: height || 600,
    };

    const window = new BrowserWindow(options);

    if (isMenuHidden) window.setMenu(null);
    if (showDevTools) (window as any).toggleDevTools();

    window.loadURL(pagePath);

    return window;
};
