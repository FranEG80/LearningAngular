import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy  } from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {
  @Input('name') nombre;
  changes: Array<string> = [''];

  // Ejecución
  // (si hay una entrada de datos primero el ngOnChanges) -> constructor -> ngOnChanges -> ngOnInit -> etc

  constructor() {
    // Esto es lo primero que se ejecuta
  }

  ngOnInit() {
    // se ejecuta despues del ngOnChanges antes de renderizar
  }

  ngOnChanges(changes: SimpleChanges) {
    // cuando hay un cambio en el input del binding, y la primera vez despues del constructor

    // changes tiene este json {"nombre":{"currentValue":"","firstChange":true}}
    this.changes.push(JSON.stringify(changes.nombre.currentValue));
  }
  ngDoCheck(){
    // se ejecuta o se dispara cuando se lanza el changeDetection
  }
  ngAfterContentInit() {
    // despues de que el contenido inicia su visualizacion
  }
  ngAfterContentChecked() {
    // cada vez que angular verifica la información o el contenido de un componente
  }
  ngAfterViewInit() {
    // se dispara despues de que ha inicializado la vista
  }
  ngAfterViewChecked() {
    // comprueba si hay cambios una vez se ha inciado la vista
  }
  ngOnDestroy() {
    // cuando desmontamos el componente
  }
}
