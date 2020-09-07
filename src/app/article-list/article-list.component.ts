import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ARTICLES } from '../mock-articles';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService:ArticlesService) {

  }

  ngOnInit(): void {
  this.getArticles()
  }

  getArticles():void{
    this.articleService.getArticles().subscribe(
      article=>this.articles=article
    )
  }
}
