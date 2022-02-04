
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}



let x = ''

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                x = allText
            }
        }
    }
    rawFile.send(null);
}

readTextFile("izlaz.json");

const json = x;
const obj = JSON.parse(json);




let movieName = ''
let movieYear = ''
let certificate = ''
let movieTime = ''
let category = ''
let rating = ''
let metascore = ''
let description = ''
let actors = ''
let votes = ''

console.log(obj.imeFilma.length)








genreList = []
function getValue(clicked_id){
    genreID = clicked_id


    if (genreList == []) {
        genreList.push(genreID)
        document.getElementById(genreID).style.background = "green";
    }

    else if (genreList.includes(genreID)) {
        genreList.pop(genreID)
        document.getElementById(genreID).style.background = "#444";
    }
    else {
        genreList.push(genreID)
        document.getElementById(genreID).style.background = "green";
    }
    
    console.log(genreList);
    
}



listaIndexa1 = []
listaIndexa2 = []
let index = ''
let index2 = ''
counter = -1
//Printovanje
function show() {

    listaIndexa1 = []
    listaIndexa2 = []

    year = slider.value
    for (let i = 0; i < obj.godinaFilma.length; i++) {
        if (parseInt(obj.godinaFilma[i]) > year){
            listaIndexa1.push(i)
        }
    }

    for(let i = 0; i < listaIndexa1.length; i++) {
        index2 = listaIndexa1[i]

        if (genreList.includes("All") || genreList == '') {
            listaIndexa2 = listaIndexa1
        }

        for (let l = 0; l < genreList.length; l++) {

            if (obj.zanr[index2].includes(genreList[l])) {
                listaIndexa2.push(i)
            }


        }

        
    }

    


    document.getElementById("form").style.display = "none";
    document.getElementById("next").innerHTML = "NEXT";

    document.getElementById("moviesFound").innerHTML ="Found: " + listaIndexa2.length + " movies."


    counter += 1

    if (counter < listaIndexa2.length) {

        index = listaIndexa2[counter]

        movieName = obj.imeFilma[index]        
        movieYear = obj.godinaFilma[index]
        certificate = obj.certificate[index]
        rating = obj.ocena[index]
        zanr = obj.zanr[index]
        time = obj.vremeFilma[index]
        metascore = obj.metascore[index]
        description = obj.description[index]
        actors = obj.actors[index]
        votes = obj.votes[index]


        document.getElementById("movieName").innerHTML = movieName
        document.getElementById("movieDate").innerHTML ="Year: " + movieYear
        document.getElementById("certificate").innerHTML ="Certificate: " +  certificate
        document.getElementById("rating").innerHTML ="Rate: " + rating
        document.getElementById("category").innerHTML ="Genre: " + zanr
        document.getElementById("time").innerHTML ="Duration: " + time
        document.getElementById("metascore").innerHTML ="Metascore: " + metascore
        document.getElementById("description").innerHTML ="Description: " + description
        document.getElementById("actors").innerHTML ="Cast: " + actors
        document.getElementById("votes").innerHTML ="Info: " +  votes
    }

    else {
        console.log("Nismo pronasli ovakav film.")
        document.getElementById("next").innerHTML = "No More Movies";
    }
} 


