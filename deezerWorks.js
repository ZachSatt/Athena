let button=document.querySelector(".submit");
let input=document.querySelector("#input_text");

button.addEventListener("click", function(){
    console.log(input.value)
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://deezerdevs-deezer.p.rapidapi.com/search?q="
        +input.value,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "c9bd4e5d03msh72842d4012c3b12p16ffd6jsn73fccb1b289b"
        }

    }
$.ajax(settings).done(function (response) {
    input.value ="";
    console.log(response);
    console.log(response.data[i].preview);
    

    for (let i = 0; i < response.length; i++) {
        console.log(response, i)
        if(response[i]<25){
            var audioElement = new Audio(response.data[i].preview);  
            audioElement.play();
        }
});
})