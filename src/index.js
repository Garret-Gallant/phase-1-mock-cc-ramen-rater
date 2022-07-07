// establish necessary serverside JSON functions
// function for GET request
const ramenMenu = document.getElementById('ramen-menu')
const ramenName = document.getElementsByClassName('name')
const wholeForm = document.getElementById('new-ramen')

function getRamen(){
    return fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    .then(ramen => renderRamen(ramen))
}

const renderRamen = (data) => {
    data.forEach(ramenBowl => {
        const image = document.createElement('img')
        image.src = ramenBowl.image
        ramenMenu.append(image)

         image.addEventListener("click", function(){
            const bigImage = document.querySelector('.detail-image')
            bigImage.src = ramenBowl.image
            
            const bigName = document.querySelector('.name')
            bigName.textContent = ramenBowl.name

            const bigRestaurant = document.querySelector('.restaurant')
            bigRestaurant.textContent = ramenBowl.restaurant

            const rating = document.getElementById('rating-display')
            rating.textContent = ramenBowl.rating

            const comment = document.getElementById('comment-display')
            comment.textContent = ramenBowl.comment
         })
    })
}

function createNewRamen(){
    
    wholeForm.addEventListener('submit', function(e){
        e.preventDefault();
        
        const newObject = {}
        newObject.name = document.getElementById('new-name').value
        newObject.restaurant = document.getElementById('new-restaurant').value
        newObject.image = document.getElementById('new-image').value
        newObject.rating = document.getElementById('new-rating').value
        newObject.comment = document.getElementById('new-comment').value

        renderRamen([newObject]);
    })
}

createNewRamen();
getRamen();




