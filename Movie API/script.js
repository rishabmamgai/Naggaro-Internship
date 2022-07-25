document.getElementById('search').onkeyup = clearWindow;

function clearWindow() {
    if(document.getElementById('search').value.length == 0)
        document.getElementById('movie-box').style.display = 'none';
}

function queryMovie() {
    var query = document.getElementById('search').value;
    fetchData(query);
}

function fetchData(query) {
    var req = new XMLHttpRequest();

    req.open('GET', 'http://www.omdbapi.com/?apikey=8d1f96ce&s=' + query + '&plot=full&r=xml');
    
    req.onload = function() {
        if(this.status == 200) {
            var res = this.response;
            parseData(res);
        }
    };

    req.send();
}

function parseData(res) {
    var parser = new DOMParser();
    xml = parser.parseFromString(res, 'text/xml');

    var movie = xml.getElementsByTagName('result')[0];
    
    document.getElementById('movie-box').style.display = 'block';
    document.getElementById('movie').style.display = 'block';

    if(movie == undefined) {
        document.getElementById('image').src = "https://cdn-bbeoo.nitrocdn.com/qmCVQYRCWGzHArsQEaxlonBAyCtBBIUq/assets/static/optimized/rev-b01a0ac/wp-content/uploads/elementor/thumbs/no-result-found-plzjaev368yh9z4dtefdm0dh8ryyv1dn832r9dy1b4.jpg";
        document.getElementById('movie').style.display = 'none';
    }
    
    else {
        document.getElementById('movie-name').innerHTML = movie.attributes.title.value;
        document.getElementById('year').innerHTML = movie.attributes.year.value;
        document.getElementById('image').src = movie.attributes.poster.value;
    }
}
