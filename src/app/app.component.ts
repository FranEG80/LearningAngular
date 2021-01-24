import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /** para detectar los changes
   * changeDetection: ChangeDetectionStrategy.... (importarlo),
   * animations: []
   */
})

export class AppComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) {}

  title = 'myFirstApp';
  name = '';

  ngOnInit(): void {
    this.document.documentElement.lang = 'es-ES';
  }
}
