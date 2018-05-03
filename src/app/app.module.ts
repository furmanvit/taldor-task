import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ImageListComponent } from './components/image-list/image-list.component';
import { HeaderComponent } from './components/header/header.component';
import { ImageService } from './services/image/image.service';
import { NetService } from './services/net/net.service';

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ImageService, NetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
