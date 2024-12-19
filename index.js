const movieListEl = document.querySelector(".all_movies")

async function main() {
    
    
    const query = document.getElementById('searchInput').value;
  
    const response = await fetch(`http://www.omdbapi.com/?apikey=2ae35b05&s=${query || ""}`);
    const movieData = await response.json();
    const result = movieData.Search
    movieListEl.innerHTML = result.map((movies) => movieHTML(movies)).join("");
    console.log(movieData)
}
  


function showMovie(id) {
    localStorage.setItem("id", id);
    window.location.href = `${window.location.origin}/user.html`
}




function movieHTML(movies) {
    return `<div class="movie__card">
            <div class="movie__card--container">
              <h3>${movies.Title}</h3>
              <p><b>Year:</b>${movies.Year}</p>
              <p><b>Rating:</b>${movies.Rating}</p>
              <p><b>Runtime:</b>${movies.Runtime}</p>
              <p><b>Genre:</b>${movies.Genre}</p>
            </div>
          </div>`;
  }

  async function searchMovies() {
    const query = document.getElementById('searchInput').value;
    const response = await fetch(`http://www.omdbapi.com/?apikey=2ae35b05&t=${query}`);

    if (!response.ok) {
        console.error('Network response was not okay:', response.statusText);
        return;
  }

  const data = await response.json();
  displayResults(data);
}
