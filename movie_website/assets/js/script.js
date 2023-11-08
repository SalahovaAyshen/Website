

var row = document.getElementsByClassName("movies")[0]

function FillHtml(data) {
    data.forEach(movie => {
        row.innerHTML += `
        <div class="card col-3 m-2" style="width: 18rem;">
        <img class="img pt-1" src="${movie.image.medium}" class="card-img-top" alt="${movie.name}">
        <div class="card-body">
          <h5 class="card-title fw-bold">${movie.name}</h5>
          <p class="card-text fw-bold">${movie.rating.average}</p>
        
        </div>
        </div>
        `
    })
}

$.ajax({
    method: "GET",
    url: "https://api.tvmaze.com/shows"
}).done(data => FillHtml(data))


