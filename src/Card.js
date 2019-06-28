import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

const cardSource = {
    beginDrag(props) {
        return props.card;
    },
    endDrag(props, monitor, component) {
        if (!monitor.didDrop()) {
            return;
        }

        return props.handleDrop(props.card.id);
    }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    }
}

class Card extends Component {
    render() {        
        const { isDragging, connectDragSource, card } = this.props;
        const opacity = isDragging ? 0 : 1;
        return connectDragSource(
            <div className="card" style={{opacity}}>
                <span>{card.text}</span>
            </div>
        )
    }
}

export default DragSource('card', cardSource, collect)(Card);