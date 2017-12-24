import * as React from 'react';
import { ILConnection } from '../../../shared/ILConnection';

export interface UIConnectionProps {
    connection: ILConnection;
}

export class UIConnection extends React.Component<UIConnectionProps, any> {
    public render() {
        const { id } = this.props.connection;
        return (
            <div>Connection {id}</div>
        );
    }
}
