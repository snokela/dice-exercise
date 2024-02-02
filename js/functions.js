document.querySelector('#dice').addEventListener('click',() => {
    // console.log("toimii");

    // arvotaan satunnaisluku väliltä 1-6
    const randomNumber =  Math.floor(Math.random() * 6) + 1;

    // console.log("randomNumber:" + randomNumber);

    // muodostetaan kuvan tiedostonimi-polku
    const imagePath = './img/' + randomNumber + '.png';

    // console.log("imagePath:" + imagePath);

    // päivitetään kuvan src-ominaisuus dice-img -elementille
    const imageElement = document.querySelector('#dice > img');
    imageElement.src = imagePath;
});


