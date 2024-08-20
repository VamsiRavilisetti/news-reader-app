import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';
import { Article } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&';
  private apiKey = '9796efc5243443308cf1ddadac4ebdac';

  private selectedArticleSource = new BehaviorSubject<Article | null>(null);
  selectedArticle$ = this.selectedArticleSource.asObservable();

  selectArticle(article: Article): void {
    this.selectedArticleSource.next(article);
  }
  constructor(private http: HttpClient) { }

  getNews(country: string, from: string, to: string, search: string): Observable<any> {
    const url = `${this.apiUrl}?country=${country}&from=${from}&to=${to}&q=${search}&apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }


}
