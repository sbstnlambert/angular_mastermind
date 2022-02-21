import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RulesComponent } from './rules/rules.component';
import { HeaderComponent } from './header/header.component';
import { MastermindPageComponent } from './mastermind-page/mastermind-page.component';
import { SecretCodeComponent } from './secret-code/secret-code.component';
import { ColorPaletteComponent } from './color-palette/color-palette.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    RulesComponent,
    HeaderComponent,
    MastermindPageComponent,
    SecretCodeComponent,
    ColorPaletteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
