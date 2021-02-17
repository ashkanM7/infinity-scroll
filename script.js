const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey= 'H4AlmDbQswo8NGgdbzE31D7ChdEEjUIHy19OXusl8xY';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


// Helper function to Set Attributes on DOM Elements
function setAttributes(elements, attributes){
    for(const key in attributes){
        elements.setAttribute(key, attributes[key]);
    }
}



// Create Elements for Links & photos, Add to DOM
function displayPhotos(){
    // Run function for each object in photosArray
    photosArray.forEach((photo)=>{
        // Create <a> to link to unsplash
        const item = document.createElement('a');
        // item.setAttribute('href', photo.links.html);
        // item.setAttribute('target','_blank');
        setAttributes(item,{
            href: photo.links.html,
            target: '_blank',
        });
        // Create <img> for photo
        const img = document.createElement('img');
        // img.setAttribute('src', photo.urls.regular);
        // img.setAttribute('alt', photo.alt_description);
        // img.setAttribute('title', photo.alt_description);
        setAttributes(img , {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });

        // Put img inside <a>, then put both inside imageContainer
        item.appendChild(img);
        imageContainer.appendChild(item);
        
    });
}

// Get photos from unsplash API
async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        //console.log(photosArray);
        displayPhotos();

    } catch(error){
        // Catch error here
    }
}

// on Load
getPhotos()