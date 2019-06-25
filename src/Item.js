import React from 'react';

function Preview(props) {
    return (
        <div className="item">
            {props.item.name}
        </div>
    );
}

export default Preview;