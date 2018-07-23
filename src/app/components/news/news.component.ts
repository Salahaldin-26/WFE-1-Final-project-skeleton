import { Component, OnInit } from '@angular/core';
import { NewsArticle } from '../../models/news-article';
import { NewsServiceService } from '../../services/news-service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  // private singleArticle: NewsArticle = new NewsArticle(
  //   'Portsudan City',
  //   'The Sudan or Sudan also known as North Sudan since South Sudan\'s independence and officially the Republic of the Sudan, is a country in Northeast Africa. Wikipedia Capital: Khartoum Currency: Sudanese pound President: Omar al-Bashir Population: 38.65 million (2016), 39.58 million (2016) World Bank Official languages: Arabic, English',
  //   '"https://www.wikipedia.com',
  //   'https://mar-rosso.it/images/gazzettino/luoghi/portsudan_luoghi_02.jpg'
  // );

  private articles: NewsArticle[];

private countrycode: string;
private category: string;
private searchtext: string = '';

  constructor(
    private newsService: NewsServiceService
  ) {
    this.articles = this.newsService.getArticles();
  }

  ngOnInit() {
  }

  refreshNews() {
    this.newsService.fetchArticles(this.countrycode, this.category, this.searchtext)
  }
}
