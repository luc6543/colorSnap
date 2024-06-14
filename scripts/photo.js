const video = document.querySelector("#videoElement");
const imgBtn = document.querySelector('#makeImage');
const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
let imgId = 0;
var img;
if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            video.srcObject = stream;
        })
        .catch(function (err0r) {
            console.log("Something went wrong!");
        });
}

imgBtn.addEventListener('click', () => {
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    var dataURL = canvas.toDataURL();
    img = new Image()
    img.src = dataURL;


    fillImgNormal(dataURL);
});

function fillImgNormal(dataURL) {

    img = new Image()
    img.src = dataURL;

    let arr = {"img": dataURL, "query": "Self made", "orientation": "Landscape", "color": "All", "url": dataURL};
    saveToLocal(arr);
        // Loadsaved() word na het opslaan aangeroepen om de saved image tab te refreshen
        loadSaved();
}