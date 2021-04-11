
const apiUrl = 'https://api.spacexdata.com/v4/rockets/';

const rockets = document.querySelector('.rockets');

fetch(apiUrl)
.then(res => {
    if (res.ok) {
        return res.json()
    } else {
        return Promise.reject(`Http error: ${res.status}`);
    }
})
.then(res => {
    console.log(res);
    res.forEach(element => {
        div = document.createElement('div');
        div.classList.add("rocketContainer");

        p = document.createElement('p');
        p.innerHTML = `<b>Nazwa:</b> ${element.name}`;
        div.appendChild(p);

        p = document.createElement('p');
        p.innerHTML = `<b>Wymiary:</b> Średnica - ${element.diameter.meters}m, Wysokość - ${element.height.meters}m, Waga - ${element.mass.kg}kg`;
        div.appendChild(p);

        p = document.createElement('p');
        p.innerHTML = `<b>Opis:</b> ${element.description}`;
        div.appendChild(p);

        p = document.createElement('p');
        p.innerHTML = `<b>Data pierwszego lotu :</b> ${element.first_flight}`;
        div.appendChild(p);

        p = document.createElement('p');
        p.innerHTML = `<b>Koszt wystrzału  :</b> ${element.cost_per_launch}`;
        div.appendChild(p);

        p = document.createElement('p');
        if(element.active){
            p.innerHTML = `<b>Aktywność  :</b> Aktywna`;
        } else{
            p.innerHTML = `<b>Aktywność  :</b> Nieaktywna`;
        }
        div.appendChild(p);

        divEngine = document.createElement('div');
        divEngine.classList.add("divEngine");
        p = document.createElement('p');
        p.innerHTML = `<b>Informacje o silniku  :</b> `;

        divEngine.appendChild(p);
        divEngineDetails = document.createElement('div');
        divEngineDetails.classList.add("divEngineDetails");
        divEngineDetails.innerHTML = `Typ: ${element.engines.type} <br> Siła ciągu: ${element.engines.thrust_vacuum.kN} <br> Stosunek ciągu do wagi: ${element.engines.thrust_to_weight}`;

        divEngine.appendChild(divEngineDetails);
        div.appendChild(divEngine);
        

        img1 = element.flickr_images[0];
        img2 = element.flickr_images[1];

        divImg = document.createElement('div');
        divImg.classList.add("divImg");

        divImg1 = document.createElement('div');
        divImg1.classList.add("rocketImage");
        divImg1.style.background = `url(${img1}) center/cover`;

        divImg2 = document.createElement('div');
        divImg2.classList.add("rocketImage");
        divImg2.style.background = `url(${img2}) center/cover`;

        divImg.appendChild(divImg1);
        divImg.appendChild(divImg2);
        
        div.appendChild(divImg);
        rockets.appendChild(div);

        

    });
})
.catch(error => {
    console.error(error)
});


