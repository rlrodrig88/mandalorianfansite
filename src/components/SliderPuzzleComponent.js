import React, { Component } from 'react';
import './SliderPuzzle.css';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class SliderPuzzle extends Component {
  constructor(props) {
      super(props);
        this.state = {
        
        };
      this.clickTile = this.clickTile.bind(this);
      this.swapTiles = this.swapTiles.bind(this);      
      this.reset = this.reset.bind(this);        
      this.shuffle = this.shuffle.bind(this);        
    }

    reset() {
        document.getElementById("cell11").className = "tile1";                    
        document.getElementById("cell12").className = "tile2";                    
        document.getElementById("cell13").className = "tile3";                    
        document.getElementById("cell21").className = "tile4";                    
        document.getElementById("cell22").className = "tile5";                    
        document.getElementById("cell23").className = "tile6";                    
        document.getElementById("cell31").className = "tile7";                    
        document.getElementById("cell32").className = "tile8";                    
        document.getElementById("cell33").className = "tile9";                    
    }
    
    shuffle() {
        for (var row=1;row<=3;row++) { //For each row of the 3x3 grid
            for (var column=1;column<=3;column++) { //For each column in this row
            // Get random location
            var row2=Math.floor(Math.random()*3 + 1); 
            var column2=Math.floor(Math.random()*3 + 1); 
             
            this.swapTiles("cell"+row+column,"cell"+row2+column2); //Swap the look & feel of both cells
            } 
        }     
    }

    swapTiles(cell1, cell2) {
        var temp = document.getElementById(cell1).className;
        document.getElementById(cell1).className = document.getElementById(cell2).className;
        document.getElementById(cell2).className = temp;        
    }
    
    clickTile(row, column, e) {
        var cell = document.getElementById("cell"+row+column);
        var tile = cell.className;

        if (tile!="tile9") { 
           //Check if empty to right
           if (column<3) {
             if ( document.getElementById("cell"+row+(column+1)).className=="tile9") {
               this.swapTiles("cell"+row+column,"cell"+row+(column+1));
               return;
             }
           }
           //Check if empty to left
           if (column>1) {
             if ( document.getElementById("cell"+row+(column-1)).className=="tile9") {
               this.swapTiles("cell"+row+column,"cell"+row+(column-1));
               return;
             }
           }
             //Check if empty above
           if (row>1) {
             if ( document.getElementById("cell"+(row-1)+column).className=="tile9") {
               this.swapTiles("cell"+row+column,"cell"+(row-1)+column);
               return;
             }
           }
           //Check if empty below
           if (row<3) {
             if ( document.getElementById("cell"+(row+1)+column).className=="tile9") {
               this.swapTiles("cell"+row+column,"cell"+(row+1)+column);
               return;
             }
           } 
        }
    }

    render() {

        return(
          <div class="slider-container">
            <h3 class="text">Slider Puzzle</h3>
            <div id="table">
               <div id="row1" style={{display: 'table-row'}}>
                  <div id="cell11" class="tile1" style={{display: 'table-cell'}} onClick={this.clickTile.bind(this,1,1)}></div>
                  <div id="cell12" class="tile2" style={{display: 'table-cell'}} onClick={this.clickTile.bind(this,1,2)}></div>
                  <div id="cell13" class="tile3" style={{display: 'table-cell'}} onClick={this.clickTile.bind(this,1,3)}></div>
              </div>
              <div id="row2" style={{display: 'table-row'}}>
                  <div id="cell21" class="tile4" style={{display: 'table-cell'}} onClick={this.clickTile.bind(this,2,1)}></div>
                  <div id="cell22" class="tile5" style={{display: 'table-cell'}} onClick={this.clickTile.bind(this,2,2)}></div>
                  <div id="cell23" class="tile6" style={{display: 'table-cell'}} onClick={this.clickTile.bind(this,2,3)}></div>
              </div>
              <div id="row3" style={{display: 'table-row'}}>
                  <div id="cell31" class="tile7" style={{display: 'table-cell'}} onClick={this.clickTile.bind(this,3,1)}></div>
                  <div id="cell32" class="tile8" style={{display: 'table-cell'}} onClick={this.clickTile.bind(this,3,2)}></div>
                  <div id="cell33" class="tile9" style={{display: 'table-cell'}} onClick={this.clickTile.bind(this,3,3)}></div>
              </div>
            </div>
            <div className="row mb-4">
                <div className="col-2 offset-3 mt-4 d-flex justify-content-center">
                    <Button onClick={this.shuffle}>Shuffle</Button>
                </div>
                <div className="col-2 offset-2 mt-4 d-flex justify-content-center">
                    <Button onClick={this.reset}>Reset</Button>
                </div>
            </div>
          </div>
        ); 
      }
}

export default SliderPuzzle;