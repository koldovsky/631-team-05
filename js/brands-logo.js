const brands = [
    {
        id: 6,
        img: "img/logo-apple.svg"
    },
    {
        id: 5,
        img: "img/logo-jbl.svg" 
    },
    {
    id: 4,
        img: "img/logo-beyerdynamic.svg"
    },
    {
        id: 3,
        img: "img/logo-marshal.svg" 
    },
    {
        id: 2,
        img: "img/logo-panasonic.svg" 
    },
    {
        id: 5,
        img: "img/logo-samsung.svg" 
    },
    {
        id: 5,
        img: "img/logo-sennheiser.svg" 
    },
    {
        id: 5,
        img: "img/logo-sony.svg" 
    }
    function renderBrands(logo) {
        const brand = document.querySelector('.cards-container');
        for (const logos of brands) {
            cards-container.innerHTML +=