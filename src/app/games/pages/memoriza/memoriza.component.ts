import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memoriza',
  templateUrl: './memoriza.component.html',
  styleUrls: ['./memoriza.component.css']
})
export class MemorizaComponent implements OnInit {

  public display: string = '540398503475603458';
  public respuesta: string = '043750347504375';
  public list = [];

  constructor() {
    this.list = [7,8,9,4,5,6,1,2,3];
   }

  public pressKey(number){
    
  }

  public allClear(){}

  ngOnInit(): void {
  }

}
