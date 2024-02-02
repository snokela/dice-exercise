document.querySelector('#dice').addEventListener('click',() => {
   
    // arvotaan satunnaisluku väliltä 1-6
    const randomNumber =  Math.floor(Math.random() * 6) + 1;

    // muodostetaan kuvan tiedostonimi-polku
    const imagePath = './img/' + randomNumber + '.png';

    // päivitetään kuvan src-ominaisuus dice-img -elementille
    const imageElement = document.querySelector('#dice > img');
    imageElement.src = imagePath;
});


