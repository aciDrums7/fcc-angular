import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import '@angular/common/locales/global/it';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';

@NgModule({
  declarations: [AppComponent, RoomsComponent, RoomsListComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [{ provide: LOCALE_ID, useValue: 'it' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
