import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { SvgLoadingComponent } from './svg-loading/svg-loading.component';
import { FormsModule } from '@angular/forms';
import { VisionTitleComponent } from './vision-title/vision-title.component';

@NgModule({
  declarations: [
    AppComponent,
    SvgLoadingComponent,
    VisionTitleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
