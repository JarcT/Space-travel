const numContainer = document.querySelector('.num-container');
const num = document.querySelectorAll('.num');
const textContainer = document.querySelector('.text-container');
const imgContainer = document.querySelector('.tech-image');

numContainer.addEventListener('click', (item) => {
    if(item.target.classList.contains('num')) {
        activeNum(item)
        fetchText(item)
    }
})

function activeNum(item) {
    num.forEach((e) => {
        e.classList.remove('num-active')
    })
    item.target.classList.add('num-active');
}
function displayText(text, item) {
        text.forEach((element) => {
            if(item.target.textContent === element.id) {
                textContainer.innerHTML = `<h3>The terminology...</h3>
                <h1>${element.name}</h1>
                <p>${element.description}</p>`;
                imgContainer.innerHTML = `<img src=${element.images.portrait} alt="${element.name}}">`
            }
        });
        };

function fetchText(item) {
    fetch('./data.json').then((resp) => resp.json()).then((data)=>{
        const text = data.technology
        displayText(text, item)  
    });
};