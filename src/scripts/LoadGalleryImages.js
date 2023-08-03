var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
    region: "us-east-2"
});

console.log("Writing entries to GalleryImages table.");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var galleryImagesData = 
    JSON.parse(fs.readFileSync('../components/data/gallery_images.json', 'utf8'));

galleryImagesData.forEach(function(galleryImage) {
    //Crab class name, Trim to get rid of empty spaces and compare to empty string. 
    var className = galleryImage.className;
    //If empty string, give it the value of no_class because dynamodb does not lie empty values. 
    if (className.trim() == "")
        className = "no_class";
    
    var params = {
        TableName: "GalleryImages",
        Item: {
            "src": galleryImage.src,
            "alt": galleryImage.alt,
            "className": className
        }
    };

    dynamodb.put(params, function(err, data) {
        if (err)
            console.error("Unable to load data into table for gallery images",
            galleryImage.src, ". Error: ", JSON.stringify(err, null, 2))
        else
            console.log("Added", galleryImage.src, "to table.")
    })
})