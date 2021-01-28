import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  /** para detectar los changes
   * changeDetection: ChangeDetectionStrategy.... (importarlo),
   * animations: []
   */
})

export class AppComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) {}

  title = 'myFirstApp';
  name = '';
  ciudades: Array<object> = [
    {nombre: 'Sevilla'},
    {nombre: 'Granada'},
    {nombre: 'Madrid'}
  ];

  ngOnInit(): void {
    this.document.documentElement.lang = 'es-ES';
  }

  onHola($event) {
    console.log('Evento Recibido', $event);
  }

}
