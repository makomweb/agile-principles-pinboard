import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

class Item extends Component {
    render() {
        return (
            <div className="item">
                {this.props.item.name}
            </div>
        );
    }
}

export default DragSource(type, spec, collect)(Item);