import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// import the GridModule for the Grid component
import { GridModule, PageService } from '@syncfusion/ej2-angular-grids';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents

  ],
  imports: [
    BrowserModule, HttpClientModule, GridModule, FormsModule,
    AppRoutingModule
  ],
  providers: [PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
