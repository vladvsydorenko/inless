import * as React from 'react';
import { ILNode } from '../../../shared/ILNode';

export interface UINodeProps {
    node: ILNode;
}

export class UINode extends React.Component<UINodeProps, any> {
    public render() {
        const { id } = this.props.node;
        return (
            <div>Node {id}</div>
        );
    }
}
