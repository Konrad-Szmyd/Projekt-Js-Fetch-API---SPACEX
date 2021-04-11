const apiUrl = 'https://api.spacexdata.com/v4/roadster/';

const tesla = document.querySelector('.tesla');
const img1 = document.querySelector('.tesla__image1');
const img2 = document.querySelector('.tesla__image2');
const img3 = document.querySelector('.tesla__image3');
const img4 = document.querySelector('.tesla__image4');

fetch(apiUrl)
    .then(res => {
        if (res.ok) {
            return res.json()
        } else {
            return Promise.reject(`Http error: ${res.status}`);
            //lub rzucając błąd
            //throw new Error(`Http error: ${res.status}`);
        }
    })
    .then(res => {
        p = document.createElement('p');
        p.innerHTML = `Nazwa : ${res.name}`;
        tesla.appendChild(p);
        p = document.createElement('p');
        p.innerHTML = `Odległość od Ziemii : ${res.earth_distance_km}km`;
        tesla.appendChild(p);
        p = document.createElement('p');
        p.innerHTML = `Odległość od Marsa : ${res.mars_distance_km}km`;
        tesla.appendChild(p);
        p = document.createElement('p');
        p.innerHTML = `Opis : ${res.details}`;
        tesla.appendChild(p);

        imageUrl1 = res.flickr_images[0];
        imageUrl2 = res.flickr_images[1];
        imageUrl3 = res.flickr_images[2];
        imageUrl4 = res.flickr_images[3];

        img1.style.background = `url(${imageUrl1}) center/cover`;
        img2.style.background = `url(${imageUrl2}) center/cover`;
        img3.style.background = `url(${imageUrl3}) center/cover`;
        img4.style.background = `url(${imageUrl4}) center/cover`;
        
        console.log(res);
    })
    .catch(error => {
        console.error(error)
    });