import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CreditsComponent } from './credits/credits.component';
import { FormsModule } from '@angular/forms';
import { AnalyserComponent } from './analyser/analyser.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CreditsComponent,
    AnalyserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
