import { keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

class BoardComponent {
  key:string;
  status!:string;
  value!:string

  constructor(key:string) {   
    this.key = key;
  }

  assignValue(value:string){
    this.value = value;
  }

  success() {
    this.status = 'success';
  }

  wrong(){
    this.status = 'default';
  }

  close(){
    this.status = 'warning';
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  score:BoardComponent[][];
  board:BoardComponent[][];

  constructor() {
    this.score = [];
    this.board = [];
  }

  ngOnInit(): void {
    this.populateScore();
    this.populateBoard();
  }

  populateScore(){
    this.score = [
      [ new BoardComponent('A1'), new BoardComponent('B1'),new BoardComponent('C1'),new BoardComponent('D1'),new BoardComponent('E1') ],
      [ new BoardComponent('A2'), new BoardComponent('B2'),new BoardComponent('C2'),new BoardComponent('D2'),new BoardComponent('E2')],
      [ new BoardComponent('A3'), new BoardComponent('B3'),new BoardComponent('C3'),new BoardComponent('D3'),new BoardComponent('E3')],
      [ new BoardComponent('A4'), new BoardComponent('B4'),new BoardComponent('C4'),new BoardComponent('D4'),new BoardComponent('E4')],
      [ new BoardComponent('A5'), new BoardComponent('B5'),new BoardComponent('C5'),new BoardComponent('D5'),new BoardComponent('E5')],
      [ new BoardComponent('A6'), new BoardComponent('B6'),new BoardComponent('C6'),new BoardComponent('D6'),new BoardComponent('E6')]
    ] 
  }

  populateBoard(){
    this.board = [
      [ 
        new BoardComponent('A1'), new BoardComponent('B1'),new BoardComponent('C1'),new BoardComponent('D1'),new BoardComponent('E1'),
        new BoardComponent('A2'), new BoardComponent('B2'),new BoardComponent('C2'),new BoardComponent('D2'),new BoardComponent('E2')
      ],
      [ 
        new BoardComponent('A3'), new BoardComponent('B3'),new BoardComponent('C3'),new BoardComponent('D3'),new BoardComponent('E3'),
        new BoardComponent('A4'), new BoardComponent('B4'),new BoardComponent('C4'),new BoardComponent('D4'),new BoardComponent('E4'],
      [ 
        new BoardComponent('A5'), new BoardComponent('B5'),new BoardComponent('C5'),new BoardComponent('D5'),new BoardComponent('E5'),
        new BoardComponent('A6'), new BoardComponent('B6'),new BoardComponent('C6'),
      ]
    ] 
  }

}