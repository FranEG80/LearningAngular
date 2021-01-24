import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.css']
})
export class PrimeroComponent implements OnInit {

  constructor() { }

/**
 *  DATA BINDING ANGULAR
 */

 /**
  * ONE WAY
  */
  name: string = 'Paco';

  /**
   * TWO WAY
   */
  color = '#fff';
  colorBg = '#000';
  habilitar: boolean = true;

  result: string = '';
  resultMinusculas: string = '';
  ngOnInit(): void {
  }

  /**
   * EVENT BINDING
   */
  onSave(): void {
    console.log('click')
  }

  onInput(e: any): void {
    this.result = e.target.value.toUpperCase();
    this.resultMinusculas = e.target.value.toLowerCase();
  }
}
