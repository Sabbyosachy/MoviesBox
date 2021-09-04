const loadMovie = () => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=3423455f987792fb8ee9f09ffdf3483b")
        .then(res => res.json())
        .then(data => Displaydata(data.results));
}
loadMovie();

const Displaydata = data => {
    const PostContainer = document.getElementById('PostContainer');
    const First20 = data.slice(0, 20);
    for (const post of First20) {
        // console.log(data);
        const div = document.createElement('div');
        div.classList.add('col');
        const img = "https://image.tmdb.org/t/p/original" + post.poster_path
        div.innerHTML = `<div class="card shadow">
        <img src="${img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">${post.overview.slice(0,150)}</p>
            <h6>${post.vote_average}</h6>
            <button onclick="SingleDetails(${post.id})">See More</button>
        </div>
    </div>`;
        PostContainer.appendChild(div);
    }
}
const SingleDetails = id => {
    fetch(`https://api.themoviedb.org/3/movie/${id}api_key=3423455f987792fb8ee9f09ffdf3483b`)
        .then(res => res.json())
        .then(data => Displaysingle(data));
}
const Displaysingle = single => {
    const container = document.getElementById('Container');
    const div = document.createElement('div');
    div.classList.add('col');
    const img = "https://image.tmdb.org/t/p/original" + single.poster_path
    div.innerHTML = `<div class="card shadow">
        <img src="${img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${single.title}</h5>
            <p class="card-text">${single.overview.slice(0,150)}</p>
            <h6>${single.vote_average}</h6>
        </div>
    </div>`;
    container.appendChild(div);

}