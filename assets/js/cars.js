const carouselWrapper = document.querySelector('.carousel');
fetch("../assets/json/cars.json")
    .then((res) => res.json())
    .then((data) => {
        const imgCar = data.cars[0].carsImg;
        const flickitySlider = document.querySelector('.flickity-slider');
        
        // Boucle pour ajouter les images
        imgCar.forEach(imageData => {
            const carouselCell = document.createElement('div');
            carouselCell.classList.add("carousel-cell");
            
            const carouselImg = document.createElement('img');
            carouselImg.src = imageData.img;
            carouselCell.appendChild(carouselImg);
            
            flickitySlider.appendChild(carouselCell);
        });

        const flkty = Flickity.data('.carousel');
        flkty.reloadCells();
        flkty.resize(); 
    })
    .catch((error) => {
        console.log(error);
    });