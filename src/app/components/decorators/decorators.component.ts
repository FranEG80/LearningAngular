import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrls: ['./decorators.component.scss']
})
export class DecoratorsComponent implements OnInit {
  ciudad: string = 'Málaga';
  @Input() city: object = {nombre: 'Mallorca'};
  @Output() mySalida = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
   // this.mySalida.emit(); // dentro se le puede pasar algo
  }

  onClickDecorators() {
    this.mySalida.emit('prueba');
  }

}
