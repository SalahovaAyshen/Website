var row = document.getElementsByClassName("movies")[0]

function FillHtml(data) {
    data.forEach(movie => {
        row.innerHTML += 
        `
        <div class="card col-3 m-2" style="width: 16rem;">
        <img class="img pt-2" src="${movie.image.medium}" class="card-img-top" alt="${movie.name}">
        
        <div class="card-body">
          <h5 class="card-title fw-bold">${movie.name}</h5>
          <p class="card-text fw-bold">${movie.rating.average} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg></p>
          
         
          <a href="details.html?id=${movie.id}"><button>View details</button></a>

        </div>
        </div>
        `
        
    })
}

$.ajax({
    method: "GET",
    url: "https://api.tvmaze.com/shows"
}).done(data => FillHtml(data))


// function getOptions(word, movie){
//     return movie.filter(s =>{

//         const regex = new RegExp(word, 'gi');
//         return s.movie.name.match(regex);
//     })
// }

const ball=document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".body,header,.flix,.input_search input,.toggle");

ball.addEventListener("click",()=>{

  items.forEach(item=>{
    item.classList.toggle("active")
  })
  ball.classList.toggle("active")
})