function StartIdentification() {
    navigator.mediaDevices.getUserMedia({audio:true});

    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/nUoDuoAEa/model.json', modelready );
}

function modelready() {
    classifier.classify(gotresults);
}


function gotresults(error, results) {
    if(error) {
        console.error(error);
    }

    
    else {
        console.log(results);
        r = Math.floor(Math.random()*255)+1;
        g = Math.floor(Math.random()*255)+1;
        b = Math.floor(Math.random()*255)+1;

        document.getElementById("i_can_hear_-").innerHTML = "I can hear "+results[0].label;
        document.getElementById("accuracy_result").innerHTML = "Accuracy "+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("i_can_hear_-").style.color = "rgb("+r+", "+g+", "+b+")";
        document.getElementById("accuracy_result").style.color = "rgb("+r+", "+g+", "+b+")";


        if(results[0].label=="Barking"){
         document.getElementById("img").innerHTML = "barking.gif"


        }

        else if(results[0].label=="Meowing"){
            document.getElementById("img").innerHTML = "barking.gif"
        }

        else if(results[0].label=="Roaring"){
            document.getElementById("img").innerHTML = "barking.gif"
        }

        else if(results[0].label=="Mooing"){
            document.getElementById("img").innerHTML = "barking.gif"
        }

        else{
           

        }


    }

}
