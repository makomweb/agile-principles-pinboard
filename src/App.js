import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import Pinboard from './Pinboard';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

class App extends Component {
  state = {
    cards: [
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

  deleteCard = (id) => {
    this.setState(prevState => {
      let cards = prevState.cards;
      const index = cards.findIndex(card => card.id === id);
      cards.splice(index, 1);
      return { cards };
    })
  }

  updatePinned = (id) => {
    this.setState(prevState => {
      const { cards } = prevState;
      const newPinnedIndex = cards.findIndex(card => card.id === id);
      const newPinned = cards[newPinnedIndex];
      return { pinned: newPinned };
    });
  }

  render() {
    return (
      <div className="container">
        <div className="cards">
          <div className="row">
            {this.state.cards.map((card, index) => (
                  <Card key={card.id} card={card} handleDrop={(id) =>
                    this.updatePinned(id)} />
                ))}
          </div>
        </div>
        <Pinboard pinned={this.state.pinned}/>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
