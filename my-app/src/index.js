import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './tictactoe.css';


class Square extends React.Component {
  //value={this.state.squares[i]}
  //onClick={() => this.handleClick(i)}
  //클라스에서 this  인스턴스
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    }
  }
  render() {
    return (
      <button className="square" onClick={() => {
        this.props.onClick()
        console.log(this.props.value)
      }
      } >
        {this.props.value}
      </button>
    );

  }
}

class Board extends React.Component {
  //constructor  인스턴스 객체 생성, 초기화 메서드
  constructor(props) {
    //부모 클래스 호출할려면 super() 로 호출 , 
    super(props);//부모클래스 props 없어도 this 사용하기전에 super() 반드시 호출
    this.state = {//this state 객체 생성 
      squares: Array(9).fill(null),// squares 키 값에  배열 초기화 
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    console.log('squares1', squares)
    console.log(`squares[${i}]`, squares[i])
    squares[i] = 'X';
    console.log('squares2', squares)
    this.setState({ squares: squares })
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
    />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}          {/*renderSquare 함수 호출  */}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
