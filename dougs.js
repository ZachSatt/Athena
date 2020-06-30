var apiEndpointBaseURL = "https://api.harvardartmuseums.org/object";
var queryString = $.param({
    apikey: "4fcb0a30-b68a-11ea-b493-4bc132726a26",
    title: "sheep",
    classification: "Paintings"
});

$.getJSON(apiEndpointBaseURL + "?" + queryString, function(genpics) {
    let arr = ["https://nrs.harvard.edu/urn-3:HUAM:77074_dynmc", "https://nrs.harvard.edu/urn-3:HUAM:VRS43900_dynmc", "https://nrs.harvard.edu/urn-3:HUAM:CARP10455_dynmc"];
    let counter = -1;
    setInterval(function() {
        counter++;
        cycleImg(counter);
        if (counter == arr.length) {
            counter = -1
        };
        // if counter == length of array then reset counter
    }, 10000);

    function cycleImg(i) {
        console.log(arr[i]);
        $("#picture").empty();
        // swap out img src
        // swap out artist info
    }

    let records = genpics.records;

    for (let index = 0; index < records.length; index++) {
        const element = records[index];
        console.log(element);
        let pictureImg = document.querySelector("#picture");
        pictureImg.setAttribute("src", genpics.records[index].images[0].baseimageurl);
        console.log(genpics);

        let artistName = document.querySelector("#artist");
        //artistName.setAttribute("src", genpics.records[0].people[0].alphasort);

        //let artDate = document.querySelector("#date");
        //artDate.setAttribute("src", genpics.records[0].period);


        console.log(genpics.records[index].images[0].baseimageurl);
        console.log(genpics.records[index].people[0].alphasort);
        console.log(genpics.records[index].period);

    }




});