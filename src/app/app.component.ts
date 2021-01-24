import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) {}

  title = 'myFirstApp';

  ngOnInit(): void {

    // * no change language
    this.document.documentElement.lang = 'es-ES'
  }

}
