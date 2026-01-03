const search = document.getElementById("searchInput")
const searchBtn = document.getElementById("searchBtn")
const displayMovies = document.getElementById("displayMovies")
const wishListBtn = document.getElementById("wishlistBtn")
let imdbIdList = []

async function showMovies() {
    displayMovies.innerHTML = ""

    const res = await fetch(`http://www.omdbapi.com/?s=${search.value}&apikey=36e46c87`)
    const data = await res.json()


    data.Search.forEach(async item => {
        const res = await fetch(`http://www.omdbapi.com/?i=${item.imdbID}&apikey=36e46c87`)
        const data = await res.json()

        displayMovies.innerHTML += `
             <div id="singleMovie">
                    <div id="moviePoster">
                        <img src="${data.Poster}"
                            alt="movie poster">
                    </div>
                    <div id="movieDetails">
                        <div id="movieTitle">
                            <h4>${data.Title}</h4>
                            <p>⭐ ${data.imdbRating}</P>
                        </div>
                        <div id="genre">
                            <p>${data.Runtime}</p>
                            <p>${data.Genre}</p>
                            <button id=${data.imdbID}><span><i class="fa-solid fa-circle-plus"></i></span>Wishlist</button>
                        </div>
                        <div id="movieDesc">
                            <p>${data.Plot}</p>
                        </div>
                    </div>
                </div>
        `
    });

}
