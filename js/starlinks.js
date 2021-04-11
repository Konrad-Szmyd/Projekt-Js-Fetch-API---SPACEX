
const apiUrl = 'https://api.spacexdata.com/v4/starlink/';


    const starlinks = document.querySelector('.starlinks');
    const tab = document.querySelector('.tab');
    const tableBody = document.querySelector('.tableBody');

    fetch(apiUrl)
    .then(res => {
        if (res.ok) {
            isConnect = true;
            return res.json();
        } else {
            return Promise.reject(`Http error: ${res.status}`);
        }
    })
    .then(res => {
        i = 1;
        res.forEach(element => {
            tr = document.createElement('tr');

            td1 = document.createElement('td');
            td1.innerHTML = element.spaceTrack.OBJECT_NAME;
            tr.appendChild(td1);

            td2 = document.createElement('td');
            td2.innerHTML = element.spaceTrack.OBJECT_ID;
            tr.appendChild(td2);

            td3 = document.createElement('td');
            td3.innerHTML = element.spaceTrack.LAUNCH_DATE;
            tr.appendChild(td3);

            tableBody.appendChild(tr);
            tab.appendChild(tableBody);
            

        });
    })
    .catch(error => {
        console.error(error)
    });

    $(document).ready( function () {
        setTimeout(() => { 
             $('.tab').DataTable();
             }, 3000);
     });


