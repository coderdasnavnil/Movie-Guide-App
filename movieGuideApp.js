//Search box elements
let searchInp = document.getElementById("userInput");
let searchBtn = document.getElementById("searchBtn");

//Parts to showcase
let msgBox = document.querySelector(".msg");
let result = document.querySelector(".result");

//Movie Details
let moviePoster = document.querySelector("#moviePoster");
let movieTitle = document.querySelector("#movieTitle");
let movieIMDBRating = document.querySelector("#movieIMDBRating");
let movieViewingAge = document.querySelector("#movieViewingAge");
let movieRuntime = document.querySelector("#movieRuntime");
let movieYear = document.querySelector("#movieYear");
let moviePlot = document.querySelector("#moviePlot");
let movieCast = document.querySelector("#movieCast");
let movieGenreBox = document.querySelector(".movieGenreContainer");




searchBtn.addEventListener('click', async ()=>{
    if(searchInp.value.length <= 0)
    {
        msgBox.classList.add("visible");
    }
    else{
        result.classList.remove('hidden');
        result.classList.add('visible');

        let url =  `http://www.omdbapi.com/?t=${searchInp.value}&apikey=${key}`;

        let response = await fetch(url);
        let data = await response.json();
        console.log(data);

        moviePoster.src = data.Poster;
        movieTitle.textContent = data.Title;
        movieIMDBRating.textContent = data.imdbRating;
        movieViewingAge.textContent = data.Rated;
        movieRuntime.textContent = data.Runtime;
        movieYear.textContent = data.Year;
        moviePlot.textContent = data.Plot;
        movieCast.textContent = data.Actors;
        // movieGenreBox.textContent = data.Genre;
        movieGenreBox.innerHTML = "";

        data.Genre.split(",").forEach(g =>{
            let div = document.createElement("div");
            div.textContent = g;
            movieGenreBox.classList.add('genreBoxStyle');
            div.classList.add("genreStyle");
            movieGenreBox.appendChild(div);
        });
    }
});