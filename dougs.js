var apiEndpointBaseURL = "https://api.harvardartmuseums.org/object";
var queryString = $.param({
    apikey: "4fcb0a30-b68a-11ea-b493-4bc132726a26",
    title: "sheep",
    classification: "Paintings"
});

$.getJSON(apiEndpointBaseURL + "?" + queryString, function(genpics) {


    let records = genpics.records;
    for (let index = 0; index < records.length; index++) {
        const element = records[index];
        //console.log(element);
        // let pictureImg = document.querySelector("#picture");
        // pictureImg.setAttribute("src", genpics.records[index].images[0].baseimageurl);
        //console.log(genpics);

        let artistName = document.querySelector("#artist");
        //artistName.setAttribute("src", genpics.records[0].people[0].alphasort);

        //let artDate = document.querySelector("#date");
        //artDate.setAttribute("src", genpics.records[0].period);


        console.log(genpics.records[index].images[0].baseimageurl);
        // console.log(genpics.records[index].people[0].alphasort);
        // console.log(genpics.records[index].period);

    }
    let pictureImg = document.querySelector(".picture");
    pictureImg.setAttribute("src", genpics.records[0].images[0].baseimageurl);
    let currentRecordIndex = 1;
    setInterval(function() {
        let currentRecord = genpics.records[currentRecordIndex];
        pictureImg.setAttribute("src", currentRecord.images[0].baseimageurl);
        currentRecordIndex++;
    }, 10000)







});