const url = 'http://www.omdbapi.com/?apikey=7f24bbc7';


let getPoster = fetch(`${url}&t=titanic`);
getPoster
.then((resp) => resp.json())
.then((data) => {
    let bigPoster = 
    `<a href="#"><img src=${data.Poster} class="big_img" alt="movie_poster"></a>`

    let poster = document.getElementById('poster');
    poster.innerHTML = bigPoster;
    
})
.catch((err) => {
    console.log("error");
    console.log(err);
})


let smallPoster = fetch(`${url}&t=kiss+and+kill`);
smallPoster
.then((resp) => resp.json())
.then((data) => {
    let smallPoster = 
    `<a href="#"><img src=${data.Poster} class="small_img" alt="movie_poster"></a>`

    let sidePoster = document.getElementById('side-img');
    sidePoster.innerHTML = smallPoster;

})
.catch((err) => {
    console.log("error");
    console.log(err);
})


let getMovies = fetch(`${url}&s=gun`);
getMovies
.then((res) => res.json())
.then((data) => {
    for (i = 0; i < data.Search.length; i++){
        let movieLoop = 
        `<div class="col-6 col-md-4 col-lg-3 mt-3">
            <a href="#">
                <div class="card">
                    <div class="img_card">
                        <img src=${data.Search[i].Poster} class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                        <div class="movie_name fw-bold"> ${data.Search[i].Title}</div>
                        <div class="movieType"> ${data.Search[i].Type}</div>
                        <div class="movieYear"> ${data.Search[i].Year}</div>
                    </div>
                </div>
            </a>
        </div>`

        let sample = document.getElementById('sample');
        sample.innerHTML += movieLoop;
    }
})
.catch((err) => {
    console.log("error");
    console.log(err);
})


function getValue(){
    let input = document.getElementById('input');
    inputValue = input.value;
    let getMovies = fetch(`${url}&s=${inputValue}`);
    getMovies
    .then((resp) => resp.json())
    .then((data) => {
        sample.innerHTML = "";
        for(let info of data.Search){
            let continueData = 
            `<div class="col-3 mt-2">
                <a href="#">
                    <div class="card">
                        <div class="img_card">
                            <img src=${info.Poster} class="card-img-top" alt="...">
                        </div>
                        <div class="card-body">
                            <div class="movie_name fw-bold"> ${info.Title}</div>
                            <div class="movieType"> ${info.Type}</div>
                            <div class="movieYear"> ${info.Year}</div>
                        </div>
                    </div>
                </a>
            </div>`

            let sample = document.getElementById('sample');
            sample.innerHTML += continueData;
            
        }
    })
    .catch((err) => {
        console.log("error");
        console.log(err);
    })
    
}
