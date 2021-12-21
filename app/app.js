class Media {
    constructor(url) {
        this._url = url
    }
 
    play() {
        console.log(this._url)
    }
 }

class Movie extends Media {
    constructor(url, title, releasedDate, duration) {
        super(url)
        this._title = title
        this._releasedDate = releasedDate
        this._duration = duration
    }
 }
 
 class TvShow extends Media {
    constructor(url, title, numberOfEpisodePerSeason, numberOfSeasons) {
        super(url)
        this._title = title
        this._numberOfEpisodePerSeason = numberOfEpisodePerSeason
        this._numberOfSeasons = numberOfSeasons
    }
 }

// Instanciation de film en renseignant l'url
const Predator = new Movie("https://www.youtube.com/watch?v=d7Vwm3vlcBU&ab_channel=MorganeMoncade", "Predator", 1987, 107)
const Terminator = new Movie("https://www.youtube.com/watch?v=QaagRs5pX_E&ab_channel=FilmsActu", "Terminator", 1984, 107)
const Alien = new Movie("https://www.youtube.com/watch?v=LjLamj-b0I8&ab_channel=HitmonTom", "Alien", 1979, 117)

// Instanciation de série
const Friends = new TvShow("https://www.youtube.com/watch?v=9p48Q1t8BsA&ab_channel=LeHuffPost", "Friends", 23, 10)
const Scrubs = new TvShow("https://www.youtube.com/watch?v=237KUhKwv1Y&ab_channel=NO", "Scrubs", 20, 9)
const CougarTown = new TvShow("https://www.youtube.com/watch?v=zneZR7llxNM&ab_channel=DisneyFR", "Cougar Town", 13, 5)

Predator.play()