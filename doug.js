var apiEndpointBaseURL = "https://api.harvardartmuseums.org/object";
var queryString = $.param({
    apikey: "4fcb0a30-b68a-11ea-b493-4bc132726a26",
    size: "50",
    classification: "Paintings"
});

$.getJSON(apiEndpointBaseURL + "?" + queryString, function(genpics) {


    let records = genpics.records;
    
    let pictureImg = document.querySelector(".picture");
    pictureImg.setAttribute("src", genpics.records[0].images[0].baseimageurl);
    let currentRecordIndex = 1;
    setInterval(function() {
        let currentRecord = genpics.records[currentRecordIndex];
        pictureImg.setAttribute("src", currentRecord.images[0].baseimageurl);
        currentRecordIndex++;
    }, 90000)

});