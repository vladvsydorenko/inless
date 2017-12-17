import * as React from 'react';
import { render as renderDOM } from 'react-dom';

export const render = (elementId: string) => {
    renderDOM(
        <div>There will be the application</div>,
        document.getElementById(elementId)
    );
};
