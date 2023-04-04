
export default class PicturesApiServise{
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
    async fetchArticles(searchQuery) {
        const url = `https://pixabay.com/api/?key=34850803-a728da3cec220ddd15679bd1c&q=${this.searchQuery}&image_type=photo$orientation&safesearch&page=${this.page}&per_page=40`;
        const r = await fetch(url);
        const data = await r.json();
        this.incrementPage();
        // data.hits;
        // data.totalHits;
        return data;
       
    }
    incrementPage() {
         this.page += 1;   
    }
    resetPage() {
        this.page = 1;
    }
    get query() {
        return this.searchQuery;
    }
    set query(newSearchQuery) {
        this.searchQuery = newSearchQuery
    }
}