export default class AutoComplete {
    constructor() {
        this.movieListCount = 0;
        this.movieArr = [];
    }

    init() {
        this.addEvent();
    }

    addEvent() {
        const searchBar = document.querySelector(".search-bar")
        searchBar.addEventListener("keyup", e => this.checkInput(e));
        searchBar.addEventListener("keydown", e => this.checkKey(e));
    }

    checkInput(e) {
        const searchBar = document.querySelector(".search-bar");
        const inputValue = document.querySelector(".search-bar").value;
        const searchResultBox = document.querySelector(".search-result");

        if (inputValue.length > 1 && e.key !== "ArrowDown" && e.key !== "ArrowUp") {
            return fetch(`https://api.themoviedb.org/3/search/movie?query=${inputValue}&api_key=9807a4a2993670f5c3ae590c1d60d650&language=ko-KR`)
                .then(response => response.json())
                .then(json => {
                    if (searchBar.classList.contains('fly')) return searchResultBox.innerHTML = "";
                    this.movieArr = json.results;
                    let titleArr = json.results.map(movie => movie.title);
                    searchResultBox.innerHTML = this.templateMovieTitle(titleArr);
                    this.initMovieListCount();
                })
                .catch(err => console.log(err))
        } else if (inputValue < 2 && e.key === "Backspace") searchResultBox.innerHTML = "";
    }

    templateMovieTitle(titleArr) {
        let tags = "";
        titleArr.forEach(title => {
            tags += `<li class="movie-result"><span>${title}</span></li>`
        });
        return tags;
    }

    initMovieListCount() {
        this.movieListCount = 0;
    }

    checkKey(e) {
        const movieList = document.querySelectorAll(".movie-result");
        if (e.key === "ArrowDown") this.moveArrowDown(movieList);
        else if (e.key === "ArrowUp") this.moveArrowUp(movieList);
        else if (e.key === "Enter") {
            this.renderSelectedMovie();
            this.flySearchBox();
        }
    }

    moveArrowDown(movieList) {
        if (this.movieListCount === movieList.length) this.initHighlight(movieList);
        this.addhighlight(movieList);
        this.movieListCount++;
    }

    moveArrowUp(movieList) {
        if (this.movieListCount === 1) return this.initReverseHighlight(movieList);
        this.reverseAddhighlight(movieList);
    }

    renderSelectedMovie() {
        let selectedMovie = this.movieArr[this.movieListCount - 1];
        const poster = document.querySelector(".poster");
        const mainWrapper = document.querySelector(".main-wrapper");
        const movieName = document.querySelector(".movie-name");
        // const score = document.querySelector(".score");
        const searchResultBox = document.querySelector(".search-result");
        const summary = document.querySelector(".poster-summary");
        const ratingContainer = document.querySelector(".rating-container");
        const releaseDate = document.querySelector(".release-date");


        console.log(selectedMovie)


        poster.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${selectedMovie.poster_path})`;
        mainWrapper.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${selectedMovie.backdrop_path})`;
        movieName.innerHTML = selectedMovie.title;
        // score.innerHTML = `평점 ${selectedMovie.vote_average}`;
        searchResultBox.value = selectedMovie.title;
        summary.innerHTML = selectedMovie.overview;
        ratingContainer.innerHTML = this.templateRating(selectedMovie.vote_average);
        releaseDate.innerHTML = `${selectedMovie.release_date} 개봉`
    }

    addhighlight(movieList) {
        movieList[this.movieListCount].classList.add("highlighted");
        if (this.movieListCount !== 0) movieList[this.movieListCount - 1].classList.remove("highlighted");
    }

    reverseAddhighlight(movieList) {
        movieList[this.movieListCount - 1].classList.remove("highlighted");
        this.movieListCount--;
        movieList[this.movieListCount - 1].classList.add("highlighted");
    }

    initHighlight(movieList) {
        this.movieListCount = 0;
        movieList[movieList.length - 1].classList.remove("highlighted");
    }

    initReverseHighlight(movieList) {
        movieList[this.movieListCount - 1].classList.remove("highlighted");
        this.movieListCount = movieList.length;
        movieList[this.movieListCount - 1].classList.add("highlighted");
    }

    templateRating(rating) {
        const star = `<i class="fa fa-star" aria-hidden="true"></i>`;
        const halfStar = `<i class="fa fa-star-half-o" aria-hidden="true"></i>`;
        let tags = "";

        for (let i = 0; i < Math.floor(rating / 2); i++) {
            tags += star;
        }

        if (rating % 2) tags += halfStar;

        return tags;
    }

    flySearchBox() {
        const logo = document.querySelector(".logo");
        const search = document.querySelector(".search-form");
        const searchBox = document.querySelector(".search-box");
        const resultBox = document.querySelector(".result-box");
        const searchBar = document.querySelector(".search-bar");
        const searchBtn = document.querySelector(".btn-search");

        logo.classList.add("fly");
        search.classList.add("fly");
        searchBox.classList.add("fly");
        resultBox.classList.add("shown");
        searchBar.classList.remove("first");
        searchBar.classList.add("fly");
        searchBtn.classList.add("fly");
    }
}