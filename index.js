const movieListEl = document.querySelector(".all_movies")

async function onSearchChange(event) {
    const query = event.target.value;
    const response = await fetch(`http://www.omdbapi.com/?apikey=2ae35b05&s=${query || ""}`);
    const movieData = await response.json();
    const result = movieData.Search
    movieListEl.innerHTML = result.map((movies) => movieHTML(movies)).join("");
    console.log(movieData)
}

async function main(filter) {
    
    
    
    const query = document.getElementById('searchInput').value;
  
    const response = await fetch(`http://www.omdbapi.com/?apikey=2ae35b05&s=${query || ""}`);
    const movieData = await response.json();
    const result = movieData.Search
    movieListEl.innerHTML = result.map((movies) => movieHTML(movies)).join("");
    console.log(movieData)

    const movies = getMovies(); 

    if (filter === "A_TO_Z") {
        movies.sort((a,b)=> (a.movie__tile>b.movie__title)*2-1);
    }
    else if (filter === "Z_TO_A") {
        movies.sort((a,b)=> (b.movie__title>a.movie__title)*2-1);
    }
    else if (filter === "YEAR") {
        movies.sort((a, b) => b.movie__year - a.movie__year);
    }

    }


function filterMovies(event) {
    main(event.target.value)

}

setTimeout (() => {
    main();
});
  




function movieHTML(movies) {
    new Promise ((resolve) => {
        setTimeout(() => {
            resolve([])
        })
    })
    return `<div class="container">
  <div class="row">
    <div class="movie-list">
      <div class="movie">
        <div class="movie-card">
          <div class="movie-card__conatainer">
            <div class="movie__img--wrapper">
              <img class="movie__img" src="${movies.Poster}" />
            </div>
            <h3 class="movie__title">${movies.Title}</h3>
            <p class="movie__year"><b>Year: </b>${movies.Year}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
  }

  


