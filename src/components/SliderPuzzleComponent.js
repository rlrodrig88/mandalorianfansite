import React, { Component } from 'react';
import FormButton from './FormButtonComponent.js'
import './SliderPuzzle.css';

class SliderPuzzle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentImage: 'elsa',
    };
    this.clickTile = this.clickTile.bind(this);
    this.swapTiles = this.swapTiles.bind(this);
    this.reset = this.reset.bind(this);
    this.shuffle = this.shuffle.bind(this);
  }

  componentDidMount() {
    this.setImage('cockpit');
  }

  reset() {
    document.getElementById("cell11").className = "tile1";
    document.getElementById("cell12").className = "tile2";
    document.getElementById("cell13").className = "tile3";
    document.getElementById("cell14").className = "tile4";
    document.getElementById("cell21").className = "tile5";
    document.getElementById("cell22").className = "tile6";
    document.getElementById("cell23").className = "tile7";
    document.getElementById("cell24").className = "tile8";
    document.getElementById("cell31").className = "tile9";
    document.getElementById("cell32").className = "tile10";
    document.getElementById("cell33").className = "tile11";
    document.getElementById("cell34").className = "tile12";
    document.getElementById("cell41").className = "tile13";
    document.getElementById("cell42").className = "tile14";
    document.getElementById("cell43").className = "tile15";
    document.getElementById("cell44").className = "tile16";
    this.setImage(this.state.currentImage);
  }

  shuffle() {
    for (var row = 1; row <= 4; row++) { //For each row of the 4x4 grid
      for (var column = 1; column <= 4; column++) { //For each column in this row
        // Get random location
        var row2 = Math.floor(Math.random() * 4 + 1);
        var column2 = Math.floor(Math.random() * 4 + 1);
        this.swapTiles("cell" + row + column, "cell" + row2 + column2); //Swap the look & feel of both cells
      }
    }
  }

  swapTiles(cell1, cell2) {
    var temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
  }

<<<<<<< HEAD
        if (tile!=="tile9") { 
           //Check if empty to right
           if (column<3) {
             if ( document.getElementById("cell"+row+(column+1)).className==="tile9") {
               this.swapTiles("cell"+row+column,"cell"+row+(column+1));
               return;
             }
           }
           //Check if empty to left
           if (column>1) {
             if ( document.getElementById("cell"+row+(column-1)).className==="tile9") {
               this.swapTiles("cell"+row+column,"cell"+row+(column-1));
               return;
             }
           }
             //Check if empty above
           if (row>1) {
             if ( document.getElementById("cell"+(row-1)+column).className==="tile9") {
               this.swapTiles("cell"+row+column,"cell"+(row-1)+column);
               return;
             }
           }
           //Check if empty below
           if (row<3) {
             if ( document.getElementById("cell"+(row+1)+column).className==="tile9") {
               this.swapTiles("cell"+row+column,"cell"+(row+1)+column);
               return;
             }
           } 
=======
  clickTile(row, column, e) {
    var cell = document.getElementById("cell" + row + column);
    var tile = cell.className;

    if (tile !== "tile16") {
      //Check if empty to right
      if (column < 4) {
        if (document.getElementById("cell" + row + (column + 1)).classList.contains("tile16")) {
          this.swapTiles("cell" + row + column, "cell" + row + (column + 1));
          return;
        }
      }
      //Check if empty to left
      if (column > 1) {
        if (document.getElementById("cell" + row + (column - 1)).classList.contains("tile16")) {
          this.swapTiles("cell" + row + column, "cell" + row + (column - 1));
          return;
        }
      }
      //Check if empty above
      if (row > 1) {
        if (document.getElementById("cell" + (row - 1) + column).classList.contains("tile16")) {
          this.swapTiles("cell" + row + column, "cell" + (row - 1) + column);
          return;
        }
      }
      //Check if empty below
      if (row < 4) {
        if (document.getElementById("cell" + (row + 1) + column).classList.contains("tile16")) {
          this.swapTiles("cell" + row + column, "cell" + (row + 1) + column);
          return;
>>>>>>> dc10c53f856e059c53b2fddbd26d74b81bd400f9
        }
      }
    }
  }

  setImage(newImage) {
    let i;
    const tiles = document.getElementsByName("tile");
    for (i = 0; i < tiles.length; i++) {
      tiles[i].classList.remove(this.state.currentImage)
      tiles[i].classList.add(newImage);
    }
    this.setState({ currentImage: newImage });
  }

  render() {

    return (
      <div className="slider-container">
        <h3 className="text">Slider Puzzle</h3>
        <div id="table">
          <div id="row1" style={{ display: 'table-row' }}>
            <div id="cell11" className="tile1" name="tile" style={{ display: 'table-cell' }} onClick={this.clickTile.bind(this, 1, 1)}></div>
            <div id="cell12" className="tile2" name="tile" style={{ display: 'table-cell' }} onClick={this.clickTile.bind(this, 1, 2)}></div>
            <div id="cell13" className="tile3" name="tile" style={{ display: 'table-cell' }} onClick={this.clickTile.bind(this, 1, 3)}></div>
            <div id="cell14" className="tile4" name="tile" style={{ display: 'table-cell' }} onClick={this.clickTile.bind(this, 1, 4)}></div>
          </div>
          <div id="row2" style={{ display: 'table-row' }}>
            <div id="cell21" className="tile5" name="tile" style={{ display: 'table-cell' }} onClick={this.clickTile.bind(this, 2, 1)}></div>
            <div id="cell22" className="tile6" name="tile" style={{ display: 'table-cell' }} onClick={this.clickTile.bind(this, 2, 2)}></div>
            <div id="cell23" className="tile7" name="tile" style={{ display: 'table-cell' }} onClick={this.clickTile.bind(this, 2, 3)}></div>
            <div id="cell24" className="tile8" name="tile" style={{ display: 'table-cell' }} onClick={this.clickTile.bind(this, 2, 4)}></div>
          </div>
          <div id="row3" style={{ display: 'table-row' }}>
            <div id="cell31" className="tile9" name="tile" style={{ display: 'table-cell' }} onClick={this.clickTile.bind(this, 3, 1)}></div>
            <div id="cell32" className="tile10" name="tile" style={{ display: 'table-cell' }} onClick={this.clickTile.bind(this, 3, 2)}></div>
            <div id="cell33" className="tile11" name="tile" style={{ display: 'table-cell' }} onClick={this.clickTile.bind(this, 3, 3)}></div>
            <div id="cell34" className="tile12" name="tile" style={{ display: 'table-cell' }} onClick={this.clickTile.bind(this, 3, 4)}></div>
          </div>
          <div id="row4" style={{ display: 'table-row' }}>
            <div id="cell41" className="tile13" name="tile" style={{ display: 'table-cell' }} onClick={this.clickTile.bind(this, 4, 1)}></div>
            <div id="cell42" className="tile14" name="tile" style={{ display: 'table-cell' }} onClick={this.clickTile.bind(this, 4, 2)}></div>
            <div id="cell43" className="tile15" name="tile" style={{ display: 'table-cell' }} onClick={this.clickTile.bind(this, 4, 3)}></div>
            <div id="cell44" className="tile16" name="tile" style={{ display: 'table-cell' }} onClick={this.clickTile.bind(this, 4, 4)}></div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-2 offset-3 mt-4 d-flex justify-content-center">
            <FormButton
              onClick={this.shuffle}
              color="hsl(213, 12%, 15%)"
              colorBg="hsl(221, 97%, 88%)"
              margin='.5rem'
              padding='.5rem'
              fontSize='1.2rem'
              text='Shuffle'
            />
          </div>
          <div className="col-2 offset-2 mt-4 d-flex justify-content-center">
            <FormButton
              onClick={this.reset}
              color="hsl(213, 12%, 15%)"
              colorBg="hsl(221, 97%, 88%)"
              margin='.5rem'
              padding='.5rem'
              fontSize='1.2rem'
              text='Reset'
            />
          </div>
        </div>
        <div>
          <ul id="imageList">
            <div className="row d-flex justify-content-center">
              <li className="p-4">
                <div onClick={() => this.setImage("cockpit")}>
                  <img className="thumbnail" src="/assets/images/cockpit.jpg" height="100px" alt="cockpit" />
                </div>
              </li>
              <li className="p-4">
                <div onClick={() => this.setImage("ship")}>
                  <img className="thumbnail" src="/assets/images/ship.jpg" height="100px" alt="ship" />
                </div>
              </li>
              <li className="p-4">
                <div onClick={() => this.setImage("outside")}>
                  <img className="thumbnail" src="/assets/images/outside.jpg" height="100px" alt="outside" />
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default SliderPuzzle;