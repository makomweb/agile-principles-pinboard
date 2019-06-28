import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        hovered: monitor.isOver(),
        item: monitor.getItem()
    }
}

class Pinboard extends Component {
    render() {
        const { connectDropTarget, hovered, pinned } = this.props;
        const backgroundColor = hovered ? 'lightgreen' : 'brown';

        if (pinned) {
            return connectDropTarget(
                <div className="grid pinboard" style={{background: backgroundColor}}>
                    <div className="centered">
                        {pinned.text}
                    </div>
                </div>
            );
        }

        return connectDropTarget(
            <div className="grid pinboard" style={{background: backgroundColor}}>
                <div className="centered">
                    Drag a card here.
                </div>
            </div>
        );
    }
}

export default DropTarget('card', {}, collect)(Pinboard);