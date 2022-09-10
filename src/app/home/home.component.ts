import { keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';

class BoardComponent {
  key:string;
  status!:string;
  value!:string

  constructor(key:string) {   
    this.key = key;
    this.status = 'default';
  }

  assignValue(value:string){
    this.value = value;
  }

  isSuccess():boolean{
    return this.status == 'success';
  }

  isClose():boolean{
    return this.status == 'close'
  }

  setSuccess() {
    this.status = 'success';
  }

  setClose(){
    this.status = 'close';
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  word:string;
  score:BoardComponent[][];
  board:BoardComponent[][];
  column:number;
  index:number;

  availableWords:string[] = [
    'algoz',
    'inato',
    'fazer'
  ];

  constructor() {
    this.word = this.randomWord();
    this.score = [];
    this.board = [];
    this.column = 0;
    this.index = 0;
    }

  ngOnInit(): void {
    this.populateScore();
    this.populateBoard();
  }

  addLetter(letter:string){

    if(letter === "Delete")
      return this.deleteLetter();

    if(letter === "Enter")
      return this.submitAttempt();

    this.score[this.column][this.index].assignValue(letter);
    if(this.index !== 4)
    this.index++;
  }

  submitAttempt(){
    if(this.index != 5)
      return;

    if(this.column > 5)
      return this.endGame(false);

    let win:boolean = this.validateWin(this.column);
    
    if(win)
      this.endGame(win);
    else{
      this.column++;
      this.index = 0;
    }
  }

  validateWin(column:number):boolean{
    var line = this.score[column];
    this.validateCorrectPosition(line);
    this.validateCorrectLetter(line);

    line.forEach(element => {
      
    });

    return true;
  }

  validateCorrectPosition(line:BoardComponent[]){
    let characters = this.word.split('');
    for (let i = 0; i < line.length; i++) {
      let letter = line[i];

      if(!letter.isSuccess() && characters[i] === letter.value){
          letter.setSuccess();
      }
    }
  }

  validateCorrectLetter(line:BoardComponent[]){
    let characters = this.word.split('');
    for (let i = 0; i < line.length; i++) {
      let letter = line[i];

      if(!letter.isSuccess() && !letter.isClose()){
        var res = characters.findIndex(f => f === letter.value);

        if(res !== -1)
          letter.setClose();
      }
    }
  }

  deleteLetter(){
    this.score[this.column][this.index].assignValue("");

    if(this.index != 0)
      this.index--;
  }

  endGame(win:boolean){
    win ? alert("Você ganhou!") : alert("Você perdeu.");
  }
  
  randomWord():string{
    let max = this.availableWords.length;
    let number = Math.trunc(Math.random() * (max));
    return this.availableWords[number];
  }

  populateScore(): void{
    this.score = [
      [ new BoardComponent('A1'), new BoardComponent('B1'),new BoardComponent('C1'),new BoardComponent('D1'),new BoardComponent('E1') ],
      [ new BoardComponent('A2'), new BoardComponent('B2'),new BoardComponent('C2'),new BoardComponent('D2'),new BoardComponent('E2')],
      [ new BoardComponent('A3'), new BoardComponent('B3'),new BoardComponent('C3'),new BoardComponent('D3'),new BoardComponent('E3')],
      [ new BoardComponent('A4'), new BoardComponent('B4'),new BoardComponent('C4'),new BoardComponent('D4'),new BoardComponent('E4')],
      [ new BoardComponent('A5'), new BoardComponent('B5'),new BoardComponent('C5'),new BoardComponent('D5'),new BoardComponent('E5')],
      [ new BoardComponent('A6'), new BoardComponent('B6'),new BoardComponent('C6'),new BoardComponent('D6'),new BoardComponent('E6')]
    ] 
  }

  populateBoard(): void{
    this.board = [
      [ 
        new BoardComponent('Q'), new BoardComponent('W'),new BoardComponent('E'),new BoardComponent('R'),new BoardComponent('T'), 
        new BoardComponent('Y'), new BoardComponent('U'),new BoardComponent('I'),new BoardComponent('O'),new BoardComponent('P')
      ],
      [ 
        new BoardComponent('A'), new BoardComponent('S'),new BoardComponent('D'),new BoardComponent('F'),new BoardComponent('G'),
        new BoardComponent('H'), new BoardComponent('J'),new BoardComponent('K'),new BoardComponent('L'),new BoardComponent('Delete')],
      [ 
        new BoardComponent('Z'), new BoardComponent('X'),new BoardComponent('C'),new BoardComponent('V'),new BoardComponent('B'),
        new BoardComponent('N'), new BoardComponent('M'),new BoardComponent('Enter'),
      ]
    ] 
  }

}