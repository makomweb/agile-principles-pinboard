import React, { Component } from 'react';
import './App.css';
import Item from './Item';
import Target from './Target';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

class App extends Component {
  state = {
    items: [
      { id: 1, text: 'Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.' },
      { id: 2, text: 'Welcome changing requirements, even late in development. Agile processes harness change for the customer\'s competitive advantage.' },
      { id: 3, text: 'Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.' },
      { id: 4, text: 'Business people and developers must work together daily throughout the project.' },
      { id: 5, text: 'Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.' },
      { id: 6, text: 'The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.' },
      { id: 7, text: 'Working software is the primary measure of progress.' },
      { id: 8, text: 'Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.' },
      { id: 9, text: 'Continuous attention to technical excellence and good design enhances agility.' },
      { id: 10, text: 'Simplicity--the art of maximizing the amount of work not done--is essential.' },
      { id: 11, text: 'The best architectures, requirements, and designs emerge from self-organizing teams.' },
      { id: 12, text: 'At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly. ' },
    ],
    pinned: null
  }

  deleteItem = (id) => {
    this.setState(prevState => {
      let items = prevState.items;
      const index = items.findIndex(item => item.id === id);
      items.splice(index, 1);
      return { items };
    })
  }

  updatePinned = (id) => {
    this.setState(prevState => {
      const { items } = prevState;
      const newPinnedIndex = items.findIndex(item => item.id === id);
      const newPinnedItem = items[newPinnedIndex];
      return { pinned: newPinnedItem };
    });
  }

  render() {
    return (
      <div className="app-container">
        <section class="items">
          {this.state.items.map((item, index) => (
                <Item key={item.id} item={item} handleDrop={(id) =>
                  this.updatePinned(id)} />
              ))}
        </section>
        <div className="target-container">
          <Target pinned={this.state.pinned}/>
        </div>
        {/* <p className="center">
          I am vertically and horizontally centered.
        </p> */}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
