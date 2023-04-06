const dotContainer = document.querySelector('.dot-container');
const dot = document.querySelectorAll('.dot');
const textContainer = document.querySelector('.text-container');
const imgContainer = document.querySelector('.crew-image');

dotContainer.addEventListener('click', (item) => {
    if(item.target.classList.contains('dot')) {
        activeDot(item)
        fetchText(item)
    }
})

function activeDot(item) {
    dot.forEach((e) => {
        e.classList.remove('dot-active')
    })
    item.target.classList.add('dot-active');
}

function displayText(text, item) {
        text.forEach((element) => {
            if(item.target.id === element.id) {
                textContainer.innerHTML = "";
                const role = document.createElement('h3');
                role.textContent = `${element.role}`;
                const name = document.createElement('h1');
                name.textContent = `${element.name}`;
                const bio = document.createElement('p');
                bio.textContent = `${element.bio}`;
                imgContainer.innerHTML = `<img src=${element.images.png} alt="${element.name}" class="img-crew">`;
                textContainer.appendChild(role);
                textContainer.appendChild(name);
                textContainer.appendChild(bio);
            }
        })
        };

function fetchText(item) {
    fetch('./data.json').then((resp) => resp.json()).then((data)=>{
        const text = data.crew
        displayText(text, item)  
    });
};