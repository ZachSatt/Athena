var apiEndpointBaseURL = "https://api.harvardartmuseums.org/object";
var queryString = $.param({
    apikey: "4fcb0a30-b68a-11ea-b493-4bc132726a26",
    title: "bird",
    classification: "Paintings"
});

$.getJSON(apiEndpointBaseURL + "?" + queryString, function(genpics) {

    let records = genpics.records;

    let pictureImg = document.querySelector(".picture");
    pictureImg.setAttribute("src", genpics.records[0].images[0].baseimageurl);



    for (let index = 0; index < records.length; index++) {
        const element = records[index];




        console.log(genpics.records[index].images[0].baseimageurl);



    }




});