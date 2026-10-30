var listMusic = [
    {
        id: 1,
        nameMusic: "âm thầm bên em",
        imgMusic: "music1.jpg",
        linkMusic: "https://www.youtube.com/embed/30KI5SuECuc?si=VVlcYG8_eFCRLctK"
    },
    {
        id: 2,
        nameMusic: "hãy trao cho anh",
        imgMusic: "music2.jpg",
        linkMusic: "https://www.youtube.com/embed/knW7-x7Y7RE?si=qw9yB30J13Qtuogd"
    },
    {
        id: 3,
        nameMusic: "chạy ngay đi",
        imgMusic: "music3.jpg",
        linkMusic: "https://www.youtube.com/embed/32sYGCOYJUM?si=4_QUA5p6Z0AbAMFm"
    },
    {
        id: 4,
        nameMusic: "nơi này có anh",
        imgMusic: "music4.jpg",
        linkMusic: "https://www.youtube.com/embed/FN7ALfpGxiI?si=1vWgItA7SW4lTK2p"
    }
]

function music(id){
    for(const list of listMusic){
        if(list.id == id) 
            document.querySelector('iframe.video_main').src = list.linkMusic ;
    }
}