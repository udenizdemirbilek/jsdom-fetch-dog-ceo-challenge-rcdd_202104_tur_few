console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {

    //Challenge 1
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
    .then(Response => Response.json())
    .then(json => imageDOM (json));

    //Challenge 2
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    fetch(breedUrl)
    .then(Response => Response.json())
    .then(json => displayBreeds(json));

    //Challenge 3
    document.querySelector("#dog-breeds").addEventListener("click", function(e) {
        e.target.style.color = "magenta";
    });

    //Challenge 4 
    document.querySelector("#breed-dropdown").addEventListener("change", () => {
        let dropDown = document.querySelector("#breed-dropdown").value;
        const breedUrl = 'https://dog.ceo/api/breeds/list/all';
        fetch(breedUrl)
        .then(Response => Response.json())
        .then(json => filterBreeds (json, dropDown));
    })    
})

//Both ways work Challenge 1
function imageDOM (obj){
    const imagesHere = document.querySelector("#dog-image-container");
    // const messageLength = obj.message.length;
    // for (let i=0; i< messageLength; i++){
    //     console.log(`${obj.message[i]}`);
    //     const imgUrl = obj.message[i];
    //     imagesHere.innerHTML += `<img src=${imgUrl}> </img>`
    // }

    // for ... in method
    for (const key in obj.message){
        const imgUrl = obj.message[key];
        imagesHere.innerHTML += `<img src=${imgUrl}> </img>`;  
    }
}
//Challenge 2
function displayBreeds(obj){
    const breedsHere = document.querySelector("#dog-breeds");
    for (const key in obj.message){
        const li = document.createElement("li");
        li.setAttribute("class","toggle");
        li.innerText = `${key}`;
        breedsHere.appendChild(li);
    }
}

//Challenge 4
function filterBreeds(obj, keyword) {
    const breeds = document.querySelector("#dog-breeds");
    breeds.innerHTML = "";
    const messages = obj.message;
    let container = {};    
    for (const key in obj.message) {
        //If first letter matches, copy the key/value to container and display them in list
        if (key.toLowerCase().startsWith(keyword.toLowerCase())){
            container[key] = messages[key];
            const li = document.createElement("li");
            li.setAttribute("class","toggle");
            li.innerText = `${key}`;
            breeds.appendChild(li);            
        }   
    }    
}