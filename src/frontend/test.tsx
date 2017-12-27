import * as React from 'react';
import { render } from 'react-dom';
import { UIList } from 'inless-ui/src/components/UIList';

const props = {
    nodes: [
        {
            id: 1,
            renderer: 'test'
        },
        {
            id: 2,
            renderer: 'test2'
        }
    ],
    renderers: {
        test: (props: any) => {
            return <div>Node made by Test</div>;
        },
        test2: (props: any) => {
            return <div>And node renderer by Test2</div>;
        },
    },
    rendererRef: (node: any, renderers: any) => node.renderer,
    defaultRendererRef: () => 'test',
    keyRef: (node: any): string => 'id',
    className: 'bubi',
};

render(<UIList {...props} />, document.getElementById('app'));
