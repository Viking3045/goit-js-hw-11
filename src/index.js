import './css/styles.css';
import { renderPictures } from './pictures';
import PicturesApiServise from './fetchPictures';
import LoadMoreBtn from './loadMoreBtn';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.6.min.css';
// import axios from 'axios';
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";


const refs = {
    searchForm: document.querySelector('.search-form'),
    list: document.querySelector('.gallery'),
    // loadMoreBtn: document.querySelector('.load-btn')
}
const picturesApiServise = new PicturesApiServise();
const loadMoreBtn = new LoadMoreBtn({
    selector: '.load-btn',
    hidden: true
});

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', feachHits);
// loadMoreBtn.disable() 

function onSearch(event) {
    event.preventDefault();
    const input = document.querySelector('#search-box')
    clearHitsContainer()
    picturesApiServise.query = input.value;

    if (picturesApiServise.query === '') {
        return alert('введіть щось нормальне')
    }
    loadMoreBtn.show()
    picturesApiServise.resetPage();
    feachHits()
}


function clearHitsContainer() {
    refs.list.innerHTML = '';
}

function feachHits(){
    // loadMoreBtn.disable();
    picturesApiServise.fetchArticles().then(data => { 
        const hits = data.hits;
        const totalHits = data.totalHits;
        if (totalHits === 0) {
             loadMoreBtn.hide();
            return Notify.failure("Sorry, there are no images matching your search query. Please try again.")
        }
      
        renderPictures(hits);
    
        // loadMoreBtn.enable();
        if (hits.length === 0) {
             loadMoreBtn.hide();
           return Notify.info("We're sorry, but you've reached the end of search results.")
        };
               
    })
   
}
 

// let lightbox = new SimpleLightbox('.photo-card a', {
//     captionsData: 'alt',
//     captionDelay: 250,
//     enableKeyboard: "Escape",
// });


//   lightbox.refresh();