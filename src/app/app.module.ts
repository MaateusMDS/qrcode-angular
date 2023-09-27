import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QrcodeComponent } from './components/qrcode/qrcode.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, QrcodeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
