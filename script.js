const url = 'https://myanimelist.p.rapidapi.com/anime/top/all';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '900e1f51c1msh1ec28bb0b23d920p1c06f0jsn8855f72f1731',
        'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
    }
};
let animes = async () => {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        showAnime(result);
    } catch (error) {
        console.error(error);
        return false;
    }
}



let showAnime = (arr) => {
    arr.forEach(anime => {
        console.log(anime.title);
        
    });
    
}


animes();