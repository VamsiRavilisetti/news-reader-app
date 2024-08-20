import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../../models/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent {
  @Input() article!: Article;

  constructor(private router: Router, private newsService: NewsService) { }

  onCardClick(): void {
    this.newsService.selectArticle(this.article);
    this.router.navigate(['/news-detail']);
  }
}
