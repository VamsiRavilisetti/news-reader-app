import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Article } from '../../models/news.model';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  article?: Article | null;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.selectedArticle$.subscribe(article => {
      this.article = article;
    });
  }
}
