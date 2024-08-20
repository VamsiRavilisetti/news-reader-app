import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Article } from '../../models/news.model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  articles: Article[] = [];
  country: string = 'us'; // default value
  from: string = '';
  to: string = '';
  search: string = '';

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.fetchNews();
  }

  fetchNews(filterData?: { country: string, from: string, to: string }): void {
    if (filterData) {
      this.country = filterData.country;
      this.from = filterData.from;
      this.to = filterData.to;
    }
    this.newsService.getNews(this.country, this.from, this.to, this.search)
      .subscribe(response => {
        this.articles = response.articles;
      });
  }

  onFilterChange(filterData: { country: string, from: string, to: string }): void {
    this.fetchNews(filterData);
  }

  onSearch(searchValue: string): void {
    this.search = searchValue;
    this.fetchNews(); // You may pass filterData if necessary
  }
}
