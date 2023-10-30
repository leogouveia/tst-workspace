import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestCache } from './request-cache.service';
import { Observable, of, startWith, tap } from 'rxjs';

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
  constructor(private cache: RequestCache) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (!isCacheable(req)) {
      return next.handle(req);
    }
    const cachedResponse = this.cache.get(req);

    // cache-then-refresh
    if (req.headers.get('x-refresh')) {
      const results$ = this.sendRequest(req, next, this.cache);
      if (
        cachedResponse &&
        'body' in cachedResponse &&
        cachedResponse.body.length > 0 &&
        cachedResponse.body[0]['name']
      ) {
        cachedResponse.body[0]['name'] = 'cacheosaur';
      }

      return cachedResponse
        ? results$.pipe(startWith(cachedResponse))
        : results$;
    }

    // cache-or-fetch
    if (cachedResponse) {
      return of(cachedResponse).pipe(
        tap((response) => {
          console.log('CachingInterceptor cachedResponse', response);
        })
      );
    }

    return next.handle(req).pipe(
      tap((event) => {
        // There may be other events besides the response.
        if (event instanceof HttpResponse) {
          console.log('CachingInterceptor sendRequest event', event);
          this.cache.put(req, event); // Update the cache.
        }
      })
    );
  }

  sendRequest(
    req: HttpRequest<any>,
    next: HttpHandler,
    cache: RequestCache
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event) => {
        // There may be other events besides the response.
        if (event instanceof HttpResponse) {
          console.log('CachingInterceptor sendRequest event', event);
          cache.put(req, event); // Update the cache.
        }
      })
    );
  }
}

function isCacheable(req: HttpRequest<any>) {
  // Only GET requests are cacheable
  return req.method === 'GET' && req.headers.get('x-cache') == 'true';
}
