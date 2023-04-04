
const renderPictures = (hits) => {
    const picturesContainer = document.querySelector(`.gallery`);
    // picturesContainer.innerHTML = '';
    const pictures = hits.map(hit => {
        const photoCard = document.createElement('div');
        photoCard.classList.add('photo-card');

        const img = document.createElement('img');
        img.classList.add('pictures-img');
        img.src = `${hit.webformatURL}`;
      img.alt = hit.tags;
        photoCard.append(img);
        
        const info = document.createElement('div');
        info.classList.add('info');
        photoCard.append(info);

        const pLikes = document.createElement('p');
        pLikes.classList.add('info-item');
        info.append(pLikes);

          const pVievs = document.createElement('p');
        pVievs.classList.add('info-item');
        info.append(pVievs);

          const pComments = document.createElement('p');
        pComments.classList.add('info-item');
        info.append(pComments);

          const pDownloads = document.createElement('p');
       pDownloads.classList.add('info-item');
        info.append(pDownloads);

        

        const picturesLikes = document.createElement('b');
        picturesLikes.classList.add('pictures-likes');
        picturesLikes.textContent = `Likes:${hit.likes}`;
        pLikes.append(picturesLikes);

          const picturesVievs = document.createElement('b');
        picturesVievs.classList.add('pictures-vievs');
        picturesVievs.textContent = `Views:${hit.views}`;
        pVievs.append(picturesVievs);

          const picturesComments = document.createElement('b');
        picturesComments.classList.add('pictures-comments');
        picturesComments.textContent = `Comments:${hit.comments}`;
        pComments.append(picturesComments);

          const picturesDownloads = document.createElement('b');
        picturesDownloads.classList.add('pictures-downloads');
        picturesDownloads.textContent = `Downloads:${hit.downloads}`;
        pDownloads.append(picturesDownloads);

        return photoCard
    }) 
    picturesContainer.append(...pictures)
}


export {renderPictures}