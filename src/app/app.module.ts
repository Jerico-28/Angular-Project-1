import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// Components
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SampleComponent } from './sample/sample.component';


@NgModule({
  declarations: [ // Components
    AppComponent,
    TestComponent,
    NavbarComponent,
    SampleComponent
  ],
  imports: [   // Modules
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
