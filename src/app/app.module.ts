import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { NewsComponent } from './components/news/news.component';
import { NewsServiceService } from './services/news-service.service';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NewsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
