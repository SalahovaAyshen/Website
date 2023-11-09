var id=window.location.search.slice(4);
// console.log(id);
axios.get(`https://api.tvmaze.com/shows/${id}`)
.then(response=>console.log(response))