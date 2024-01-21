import React from 'react';
class Square extends React.Component {
  constructor(squareId) {
    console.log("frank");
    console.log(squareId);
    super(undefined);
    this.id = squareId;
  }

  render() {
    return (
      <div key={this.id}>
        <img src='../assets/square.png' className='square' alt='Game Square'/>
      </div>
    );
  }
}


export default Square;