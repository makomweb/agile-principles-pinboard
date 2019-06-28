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

        if (pinned) {
            return connectDropTarget(
                <div className="grid pinboard">
                    <div className="centered">
                        {pinned.text}
                    </div>
                </div>
            );
        }
        
        return connectDropTarget(
            <div className="grid pinboard">
                <div className="centered">
                    Drag a card here.
                </div>
            </div>
        );
    }
}

export default DropTarget('card', {}, collect)(Pinboard);