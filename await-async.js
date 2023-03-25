let apiKey = "3b5c72";
let btnSearch = document.getElementById("movie-search");
let result = document.getElementById("result");

async function movieLookup(movieTitle) {
    result.innerHTML="";
    try {
        const data = await fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`);
        const jsonData = await data.json();
        if(jsonData.Error){
            //console.log(jsonData)
            throw new Error(jsonData.Error);
        }
        console.log(jsonData.Ratings[0].Value);
        let Poster = jsonData.Poster;
        let title =jsonData.Title;
        let year =jsonData.Released;
        let rating = jsonData.Ratings[0].Value;
        result.innerHTML+=`<img src="${Poster}">`;
        result.innerHTML+=`<h2>${title}</h2>`;
        result.innerHTML+=`<p>Year: ${year}<br>IMDb-Ratings: ${rating}</p>`;
        
    }
    catch(error){
        console.log(error);
        result.innerHTML+=`<h2>Movie Not Found Try Again</h2>`
    }
}

btnSearch.addEventListener("click", () => {
    let movieTitle = document.getElementById("movie-title").value;
    movieLookup(movieTitle);
})