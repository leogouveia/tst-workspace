import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  HttpCacheInterceptorModule,
  useHttpCacheLocalStorage,
} from '@ngneat/cashew';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { httpInterceptorProviders } from './http-interceptors';
import {
  RequestCache,
  RequestCacheWithMap,
} from './http-interceptors/request-cache.service';
import { MessageService } from './http-interceptors/message.service';
import { StorageService } from './shared/storage.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpCacheInterceptorModule.forRoot(),
  ],
  providers: [
    useHttpCacheLocalStorage,
    httpInterceptorProviders,
    MessageService,
    { provide: RequestCache, useClass: RequestCacheWithMap },
    { provide: StorageService, useClass: StorageService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
