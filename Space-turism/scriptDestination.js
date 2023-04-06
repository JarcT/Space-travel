
//selectors
const img = document.querySelector('.image-planet');
const container = document.querySelector('.planet-container');
const planetNames = document.querySelectorAll('.planet');
const distance = document.querySelector('#distance');
const time = document.querySelector('#time');
const textContainer = document.querySelector('.text-contianer');
const imgContainer = document.querySelector('.section-left');


const names = [...planetNames] 

//event listener
container.addEventListener('click', (item) => {
    if(item.target.classList.contains('planet')) {
        activePlanet(item)
        fetchText(item)
    }
})
// functions
function activePlanet(item) {
    names.forEach((e) => {
        e.classList.remove('planet-active')
    })
    item.target.classList.add('planet-active');
}

function displayText(text, item) {
        text.forEach((element) => {
            if(element.name.toUpperCase() === item.target.textContent) {
                const mainContent = `<h1>${element.name.toUpperCase()}</h1>
                <p>${element.description}</p>`
                textContainer.innerHTML = mainContent;
                distance.textContent = `${element.distance.toUpperCase()}`;
                time.textContent = `${element.travel.toUpperCase()}`;
                const img = `<div class="subtitle">
                <h2>01</h2>
                <h2>Pick your destination</h2>
                </div>
                <img src=${element.images.png} alt="img-${element.name}"            class="img-planet">`
                imgContainer.innerHTML = img;};
        });
};

function fetchText(item) {
    fetch('./data.json').then((resp) => resp.json()).then((data)=>{
        const text = data.destinations
        displayText(text, item)  
    });
};


