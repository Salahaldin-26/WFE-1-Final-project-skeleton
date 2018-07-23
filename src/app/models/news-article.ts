export class NewsArticle {
    constructor(
        private title: string,
        private description: string,
        private url: string,
        private urlToImage: string
    ) {

    }

    getTitle() { return this.title; }
    getDescription() { return this.description; }
    getUrl() { return this.url; }
    getUrlToImage() { return this.urlToImage; }
}
