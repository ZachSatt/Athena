$.ajax({
    url:"https://api.soundcloud.com/tracks?client_id=client_id",
    method:"GET"
}).then(function(response)){
    console.log("response", response);
};