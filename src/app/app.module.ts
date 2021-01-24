import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PrimeroComponent } from './primero/primero.component';
import { ListComponent } from './components/list/list.component';
import { MaterialUIComponent } from './components/material-ui/material-ui.component';
import { BootstrapDemoComponent } from './components/bootstrap-demo/bootstrap-demo.component';
import { ChartJSdemoComponent } from './components/chart-jsdemo/chart-jsdemo.component';


import { MaterialModule } from './material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    PrimeroComponent,
    ListComponent,
    MaterialUIComponent,
    BootstrapDemoComponent,
    ChartJSdemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgbModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
