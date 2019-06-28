import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        hovered: monitor.isOver(),
        item: monitor.getItem()
    }
}

class Target extends Component {
    render() {
        const { connectDropTarget, hovered, pinned } = this.props;
        // const backgroundColor = hovered ? 'lightgreen' : 'white';
        // if (pinned) {
        //     const style = { 
        //         color: hovered ? 'black' : 'white',
        //         backgroundColor: hovered ? 'lightgreen' : 'purple'
        //     };
        //     return connectDropTarget(
        //         <div className="target-pinned" >
        //             <div className="target-pinned" style={style}>
        //                 {pinned.text}
        //             </div>
        //         </div>
        //     );
        // }
        // return connectDropTarget(
        //     <div className="target" style={{ background: backgroundColor }}>
        //         Target
        //     </div>
        // );

        if (pinned) {
            return connectDropTarget(
                <div className="target-container">
                    <div className="target-box">
                        {pinned.text}
                    </div>
                </div>
            );

        }
        return connectDropTarget(
            <div className="target-container">
                <div className="target-box">
                    TARGET
                </div>
            </div>
        );
    }
}

export default DropTarget('card', {}, collect)(Target);