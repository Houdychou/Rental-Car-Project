const gridWrapper = document.querySelector('.grid_vehicle_wrapper');
let sumMin = 0;

fetch("/assets/json/cars.json")
.then((res) => {
    return res.json();
})
.then((data) => {
    console.log(data);
    for(let i = 0; i < data.cars.length; i++) {
        let sumMax = data.cars[i].carsImg.length;
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

        rightArrow.addEventListener('click', () => {
            sumMin++;
            if(sumMin === 3) {
                carsImg.src = data.cars[i].carsImg[sumMin].img;
            }
            if (sumMin >= 4) {
                sumMin = 0;
                carsImg.src = data.cars[i].carsImg[sumMin].img;
            } else {
                console.log(sumMin);
                carsImg.src = data.cars[i].carsImg[sumMin].img;
            }
        });

        leftArrow.addEventListener('click', () => {
            sumMax--;
            if(sumMax === 0) {
                carsImg.src = data.cars[i].carsImg[sumMax].img;
            }
            if (sumMax <= 0) {
                sumMax = 4;
                carsImg.src = data.cars[i].carsImg[sumMax].img;
            } else {
                console.log(sumMax);
                carsImg.src = data.cars[i].carsImg[sumMax].img;
            }
        })

        const carStats = document.createElement('div');
        carsWrapper.appendChild(carStats);
        carStats.classList.add('car-stats');

        const carBrand = document.createElement('div');
        carStats.appendChild(carBrand);
        carBrand.classList.add('car-brand');

        const carLogo = document.createElement('img');
        carBrand.appendChild(carLogo);
        carLogo.src =  data.cars[i].logo;
    }
})
.catch((err) => {
    console.log(err);
})