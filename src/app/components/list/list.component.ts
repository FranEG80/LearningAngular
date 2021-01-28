import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }

  lista: string[] = ['Angular', 'React'];
  nuevoLenguaje: string = '';

  ngOnInit(): void {
  }

  onAddNew(e: any): void {
    this.lista.push(this.nuevoLenguaje);
  }
}
