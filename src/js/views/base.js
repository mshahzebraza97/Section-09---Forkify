export const elements = {
    searchForm : document.querySelector('.search'),    
    searchInput : document.querySelector('.search__field'),
    searchRes: document.querySelector('.results'),
    searchResList : document.querySelector('.results__list'),
    searchResPages: document.querySelector('.results__pages'),
    recipe: document.querySelector('.recipe'),
    shoppingList: document.querySelector('.shopping__list'),
    ingredients: document.querySelector('.recipe__ingredients'),
    likesMenu: document.querySelector('.likes__field'),
    likesList: document.querySelector('.likes__panel')
}

// Why do we need to export this object... this wont affect the performance
// export const elementStrings = {
const elementStrings = {
    loader : `loader`
}

// Adds the loader markup in the html
export const renderLoader = parent => {
    const loaderMarkup = `
    <div class="${elementStrings.loader}">
        <svg>
            <use href="img/icons.svg#icon-cw"></use>
        </svg>
    </div>
    `;
    parent.insertAdjacentHTML("afterbegin", loaderMarkup);
    
}

export const clearLoader = ()=>{
    const loader = document.querySelector(`.${elementStrings.loader}`);
    loader.parentElement.removeChild(loader);
    
    // ALternatively
    // const loaders = document.querySelectorAll(`.${elementStrings.loaders}`);
    // loaders.forEach( el => el.parentElement.removeChild(el) )
}