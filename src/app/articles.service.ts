import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from './article';
import { ARTICLES } from './mock-articles';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor() { }

  getArticles(): Observable<Article[]>{
    const articles:Article[]= ARTICLES;
    return of(articles);
  }

  getArticle(key:string): Observable<Article>{
    const article:Article[]=ARTICLES.filter(a=>a.key===key);
    return of(article[0])
  }


}
