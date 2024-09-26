const gridWrapper = document.querySelector('.grid_vehicle_wrapper');
let sumMin = 0;

fetch("/assets/json/cars.json")
.then((res) => {
    return res.json();
})
.then((data) => {
    console.log(data);
    for(let i = 0; i < data.cars.length; i++) {
        const carsWrapper = document.createElement('div');
        gridWrapper.appendChild(carsWrapper);
        carsWrapper.classList.add('car-wrapper');

        const carouselVehicle = document.createElement('div');
        carsWrapper.appendChild(carouselVehicle);
        carouselVehicle.classList.add('carousel-vehicle');

        const rightArrow = document.createElement('i');
        carouselVehicle.appendChild(rightArrow);
        rightArrow.classList.add('ri-arrow-right-line', 'next');

        const leftArrow = document.createElement('i');
        carouselVehicle.appendChild(leftArrow);
        leftArrow.classList.add('ri-arrow-left-line', 'prev');

        const carsImg = document.createElement('img');
        carouselVehicle.appendChild(carsImg);

        carsImg.src = data.cars[i].carsImg[0].img;

        const imgWrapper = document.createElement('div');
        imgWrapper.classList.add('img-wrapper');
        carsWrapper.appendChild(imgWrapper);

        for(let j = 0; j < data.cars[i].carsImg.length; j++) {
            const allCarsImg = document.createElement('img');
            imgWrapper.appendChild(allCarsImg);
            allCarsImg.src = data.cars[i].carsImg[j].img;
        }

        const carStats = document.createElement('div');
        carsWrapper.appendChild(carStats);
        carStats.classList.add('car-stats');

        const carBrand = document.createElement('div');
        carStats.appendChild(carBrand);
        carBrand.classList.add('car-brand');

        const carLogo = document.createElement('img');
        carBrand.appendChild(carLogo);
        carLogo.src = data.cars[i].logo;

        rightArrow.addEventListener('click', () => {
            sumMin++;
            if(sumMin === 3) {
                carsImg.src = data.cars[i].carsImg[sumMin].img;
            }
            if (sumMin >= 4) {
                sumMin = 0;
                carsImg.src = data.cars[i].carsImg[sumMin].img;
            } else {
                carsImg.src = data.cars[i].carsImg[sumMin].img;
            }
        });

        leftArrow.addEventListener('click', () => {
            if(sumMin === 0) {
                carsImg.src = data.cars[i].carsImg[sumMin].img;
            }
            if (sumMin <= 0) {
                sumMin = 3;
                carsImg.src = data.cars[i].carsImg[sumMin].img;
            } else {
                sumMin--;
                carsImg.src = data.cars[i].carsImg[sumMin].img;
            }
        })
    }
})
.catch((err) => {
    console.log(err);
})