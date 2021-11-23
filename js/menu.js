const cardsMenu = document.querySelector('.cards-menu');

const changeTitle = (restourant) => {
    const restaurantTitle = document.querySelector('.restaurant-title');
    const rating = document.querySelector('.rating');
    const price = document.querySelector('.price');
    const category = document.querySelector('.category');

    restaurantTitle.textContent = restourant.name;
    rating.textContent = restourant.stars;
    price.textContent = restourant.price;
    category.textContent = restourant.kitchen;
}

const renderItem = (date) => {
    date.forEach(({description, id, image, name, price}) => {
        const card = document.createElement('div');
        
        card.classList.add('card');
        card.innerHTML = `
            <img src="${image}" alt="${name}" class="card-image"/>
            <div class="card-text">
                <div class="card-heading">
                    <h3 class="card-title card-title-reg">${name}</h3>
                </div>
                <div class="card-info">
                    <div class="ingredients">
                        ${description}
                    </div>
                </div>
                <div class="card-buttons">
                    <button class="button button-primary button-add-cart">
                        <span class="button-card-text">В корзину</span>
                        <span class="button-cart-svg"></span>
                    </button>
                    <strong class="card-price-bold">${price} ₽</strong>
                </div>
            </div>
        `;
        cardsMenu.append(card);
    })
}

if (localStorage.getItem('restourant')){
    const restourant = JSON.parse(localStorage.getItem('restourant'));
    
    changeTitle(restourant);
    console.log(restourant);
    fetch(`./db/${restourant.products}`)
        .then((responce) => responce.json())
        .then((date) => renderItem(date))
        .catch((error) => {
            console.log(error);
        });
} else {
    window.location.href = '/'
}
