var div = document.getElementsByClassName("movie-details")[0]
// console.log();
var id = window.location.search.slice(4);
// console.log(id);
axios.get(`https://api.tvmaze.com/shows/${id}`)
    .then(response => {

        div.innerHTML =
    `
    <div class="header d-flex justify-content-start">
    <div class="medium">
    <img class="image pt-2 " src="${response.data.image.medium}">
   
    <div class="p-1">
    <button type="button" class="trailer">
    <a href="${response.data.officialSite}">
    official site
    </a>
    </button>
    </div>
   
    </div>
    <div class="col-8 p-3 pt-5">
    <div class="name">Name: ${response.data.name}</div>
    <div class="country">Country: ${response.data.network.country.name}</div>
    <div class="premiered">Premiered: ${response.data.premiered}</div>
    <div class="status">Status: ${response.data.status}</div>
    <div class="language">Language: ${response.data.language}</div>
    <div class="rating">  IMDb: ${response.data.rating.average}</div>
    <div class="genre">Genre: ${response.data.genres}</div>
    <div class="time">Time: ${response.data.averageRuntime}</div>
    </div>
    </div>
    <div class="pt-2">${response.data.summary}</div>
    
    
    
    `
    }
    )