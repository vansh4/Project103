Webcam.set({
    width: 350,
    height: 300,
    image_format:'png',
    png_quality: 90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("camresult").innerHTML='<img id="gresult" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/9MSGuWV5h/model.json',modelLoaded);
function modelLoaded(){
    console.log("modelLoaded");
}