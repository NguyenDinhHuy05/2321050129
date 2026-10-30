var listFilms = [
    {
        id : 1,
        srcImg : "phim1.jpg"
    },
    {
        id : 2,
        srcImg : "/netflix/phim2.jpg"
    },
    {
        id : 3,
        srcImg : "/netflix/phim3.jpg"
    },
    {
        id : 4,
        srcImg : "/netflix/phim4.jpg"
    },
    {
        id : 5,
        srcImg : "/netflix/phim5.jpg"
    }
]

function selectFilm(id) {
    for(const list of listFilms){
        if(list.id == id) 
            document.getElementsByClassName('replaceImg')[0].src = list.srcImg; 
    }
}