let wishListMovies = JSON.parse(localStorage.getItem("myWatchList"))

function showWishList() {

    displayMovies.innerHTML = ""

    if (wishListMovies.length === 0) {
        displayMovies.innerHTML = `
            <div id="startExploringWishlist">
                <p>Your watchlist is looking a little empty...</p>
                <button>
                    <a href="index.html">
                        <i class="fa-solid fa-circle-plus"></i> Let's add some movies
                    </a>
                </button>
            </div>
        `
        return
    }

    wishListMovies.forEach(async item => {


        const res = await fetch(`http://www.omdbapi.com/?i=${item}&apikey=36e46c87`)
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
                            <button id=${data.imdbID}><span><i class="fa-solid fa-circle-minus"></i></span>Wishlist</button>
                        </div>
                        <div id="movieDesc">
                            <p>${data.Plot}</p>
                        </div>
                    </div>
                </div>
        `
    });


}

showWishList()

displayMovies.addEventListener("click", function (e) {
    const index = wishListMovies.indexOf(e.target.id);
    if (index > -1) { // only splice array when item is found
        wishListMovies.splice(index, 1);
    }
    localStorage.setItem("myWatchList", JSON.stringify(wishListMovies))
    showWishList()

})