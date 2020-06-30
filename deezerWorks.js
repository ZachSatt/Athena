let button = document.querySelector(".submit");
let input = document.querySelector("#input_text");
let audioElement = document.querySelector("#soundy");

button.addEventListener("click", function () {
    console.log(input.value)
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + input.value,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "c9bd4e5d03msh72842d4012c3b12p16ffd6jsn73fccb1b289b"
        }
    }

    $.ajax(settings).done(function (response) {
        input.value = "";
        console.log("API Response:")
        console.log(response.data);
        // console.log(response.data[i].preview);
        // setInterval
        var count = 0
        var IntervalId = setInterval(audioTimer, 32000);
        audioElement.setAttribute("src", response.data[0].preview)
        var data = response.data

        function audioTimer() {
        if (count < data.length){
            audioElement.setAttribute("src", response.data[count].preview) 
            audioElement.addEventListener("canplay", event => {
            audioElement.play();
            })
            count++;
        }
        }   
    });
});
