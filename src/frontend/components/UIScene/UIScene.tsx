import * as React from 'react';
import { LApplication } from '../../../shared/LApplication';
import { ILNode } from '../../../shared/ILNode';
import { ILConnection } from '../../../shared/ILConnection';
import { UINode } from '../UINode/UINode';
import { UIConnection } from '../UIConnection/UIConnection';

export interface UISceneProps {
    nodes: ILNode[];
    connections: ILConnection[];
}

export class UIScene extends React.Component<UISceneProps, any> {
    public render() {
        const { nodes, connections } = this.props;
        const nodesUI = nodes.map(node => <UINode key={node.id} node={node} />);
        const connectionsUI = connections.map(connection => <UIConnection key={connection.id} connection={connection} />);
        
        return (
            <div>
                { nodesUI }
                { connectionsUI }
            </div>
        );
    }
}
