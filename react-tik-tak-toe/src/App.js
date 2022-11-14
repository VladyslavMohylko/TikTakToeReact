import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      squares: Array(9).fill(null),
      count: 0
    }
  }

  isDraw = () => {
    alert('Нічия!');
    setTimeout(() => {
      this.setState({ squares: Array(9).fill(null) });
      this.setState({ count: 0 });
    }, 2000);
  }

  isWinner = () => {
    const winnerLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    const elem = (this.state.count % 2 === 0) ? 'X' : '0';
    for (let i = 0; i < 8; i++) {
      const line = winnerLines[i];
      if (this.state.squares[line[0]] === elem
        && this.state.squares[line[1]] === elem
        && this.state.squares[line[2]] === elem) {
        alert('Це Перемога!');
        setTimeout(() => {
          this.setState({ squares: Array(9).fill(null) });
          this.setState({ count: 0 });
        }, 2000);
        return true;
      }
    }
    return false;
  }

  clickHandler = (event) => {
    const data = event.target.getAttribute('data');
    const currentSquares = this.state.squares;

    if (currentSquares[data] === null) {
      currentSquares[data] = (this.state.count % 2 === 0) ? 'X' : '0';
      this.setState({ count: this.state.count + 1 });
      this.setState({ squares: currentSquares });
    }

    let result = this.isWinner();
    console.log(result)
    
    if (this.state.count === 8 && !result) {
      this.isDraw();
    }
  }

  render() {
    return (
      <div className='tik-tak'>
        <div className='ttt-grid' data="0" onClick={this.clickHandler}>{this.state.squares[0]}</div>
        <div className='ttt-grid' data="1" onClick={this.clickHandler}>{this.state.squares[1]}</div>
        <div className='ttt-grid' data="2" onClick={this.clickHandler}>{this.state.squares[2]}</div>
        <div className='ttt-grid' data="3" onClick={this.clickHandler}>{this.state.squares[3]}</div>
        <div className='ttt-grid' data="4" onClick={this.clickHandler}>{this.state.squares[4]}</div>
        <div className='ttt-grid' data="5" onClick={this.clickHandler}>{this.state.squares[5]}</div>
        <div className='ttt-grid' data="6" onClick={this.clickHandler}>{this.state.squares[6]}</div>
        <div className='ttt-grid' data="7" onClick={this.clickHandler}>{this.state.squares[7]}</div>
        <div className='ttt-grid' data="8" onClick={this.clickHandler}>{this.state.squares[8]}</div>
      </div>
    );
  }
}

export default App;
