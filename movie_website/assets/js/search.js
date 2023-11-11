// const api = `https://api.tvmaze.com/shows`;
// const movies = [];
// const cardWrapper=document.querySelector(".movies");
// console.log("hello");

// fetch(api)
// .then(res => res.json())
// .then(data => {
//     console.log(data);

// // for (let i = 0; i < data.length; i++) {
// //      movies.push(data[i].name);    
// // }
// data.forEach((moviename)=>{
// var input=document.querySelector("#search");
//  input.addEventListener("keyup",()=>{

//     console.log(input.value);
//     cardWrapper.innerHTML=""
//     if(moviename.name.toLowerCase().trim().includes(input.value.toLowerCase().trim())){

     
//         cardWrapper.innerHTML+=
//         `
//         <div class="card col-3 m-2" style="width: 16rem;">
//         <img class="img pt-2" src="${moviename.image.medium}" class="card-img-top" alt="${moviename.name}">
        
//         <div class="card-body">
//           <h5 class="card-title fw-bold">${moviename.name}</h5>
//           <p class="card-text fw-bold">${moviename.rating.average}</p>
         
//           <a href="details.html?id=${moviename.id}"><button>View details</button></a>

//         </div>
//         </div>
//         `
//     }
// })
// }
// )
// })



// function getOptions(word, movies){
//     return movies.filter(s=>{
//         var regex = new RegExp(word, 'gi');
//         return s.namege(regex);
//     })
// }


// function search() {

// const searchbox = document.getElementById("search").value.toUpperCase();
// const movieitems = document.getElementsById("movies")

// const film = document.querySelectorAll(".movies")

// const mname=movieitems.getElementsByTagName("h5")

// for(var i=0; i< mname.length; i++){
//     let match = film[i].getElementsByTagName('h5')[0];

//     if(match){
//       let textvalue =  match.textContent || match.innerHTML
//       if(textvalue.toUpperCase().indexOf()>-1){
//         film[i].computedStyleMap.display = "";

//       }
//       else{
//         film[i].computedStyleMap.display = "none";
//       }
//     }
// }
// }


