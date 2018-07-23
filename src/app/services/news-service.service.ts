import { Injectable } from '@angular/core';
import { NewsArticle } from '../models/news-article';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NewsServiceService {




  private readonly listNewsUrl = 'https://newsapi.org/v2/top-headlines?apiKey=0d3bc83d06f0498ab852d8922fadce01';

  private articles: NewsArticle[] = [
    new NewsArticle(
      'Portsudan City',
      'The Sudan or Sudan also known as North Sudan since South Sudan\'s independence and officially the Republic of the Sudan, is a country in Northeast Africa. Wikipedia Capital: Khartoum Currency: Sudanese pound President: Omar al-Bashir Population: 38.65 million (2016), 39.58 million (2016) World Bank Official languages: Arabic, English',
      'https://www.wikipedia.com',
      'https://mar-rosso.it/images/gazzettino/luoghi/portsudan_luoghi_02.jpg'
    ),
    new NewsArticle(
      'Dinder National Park',
      'Dinder lies approximately 400 kilometers southeast of Khartoum, on either side of the Dinder River bounded to the north by the Rahad River. The town of Dinder (100 kilometres (62 mi) northwest) acts as a gateway for tourists wishing to enter the Park. The area of Dinder was heavily populated when it was first visited by Europeans in 1861. In the 1880s, at the time of the Mahdist War and a famine, the human population vanished.',
      'https://www.wikipedia.com',
      'https://torisuminsudanblog.files.wordpress.com/2017/03/99868474586.jpeg?w=257&h=170'
    ),
    new NewsArticle(
      'Forum River Nile',
      'Khartoum is the capital and largest city of Sudan. It is located at the confluence of the White Nile, flowing north from Lake Victoria, and the Blue Nile, flowing west from Ethiopia. The location where the two Niles meet is known as "al-Mogran". Wikipedia Area: 971.2 km² Weather: 38°C, Wind SW at 16 km/h, 29% Humidity Local time: Monday 11:53 AM Population: 639,598 (2013)',
      'https://www.wikipedia.com',
      'https://i.pinimg.com/736x/78/78/cb/7878cb7f2cbf359e3bc93208ba1cc8cf--sudan-khartoum-blue-and-white.jpg'
    )
  ];

  constructor(
    private http: HttpClient
  ) { this.fetchArticles('us', 'general', ''); }

  getArticles() {
    return this.articles;
  }

  public fetchArticles(
    country: string,
    category: string,
    term: string
  ) {
//&country=COUNTRYCODEHERE&q=SEARCHTERMHERE';
    let url = this.listNewsUrl;

    if (category) {
      url += '&category=' + category;
    }
    if (country) {
      url += '&country=' + country;
    }
    if (term) {
      url += '&q=' + term;
    }

    this.http.get<any>(url).subscribe((data: any) => {
      this.articles.splice(0, this.articles.length);
      for (let r of data.articles) {
        this.articles.push(new NewsArticle(
          r.title,
          r.description,
          r.url,
          r.urlToImage
        ));
      }
    });
  }
}
