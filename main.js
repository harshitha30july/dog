function start()
{
    navigator.mediaDevices.getUserMedia({
        audio:true
    });

    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/B1vmRzLXh/model.json',modelready);
}


function modelready()
{
    console.log("Model ready");
    classifier.classify(gotResults);
}
function gotResults(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        random_num_r=Math.floor(Math.random()*255)+1;
        random_num_g=Math.floor(Math.random()*255)+1;
        random_num_b=Math.floor(Math.random()*255)+1;

        var result_label=results[0].label;
        var result_accuracy=(results [0].confidence*100).toFixed(2);
        document.getElementById("result_label").innerHTML="I can hear : "+result_label;
        document.getElementById("result_confidence").innerHTML="Accuracy : "+result_accuracy;
        document.getElementById("result_label").style.color="rgb("+random_num_r+","+random_num_g+","+random_num_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_num_r+","+random_num_g+","+random_num_b+")";

        var img1=document.getElementById("cat-01");
        var img2=document.getElementById("dog-02");

        if(result_label=="meow")
        {
            img1.src="cat-01.gif";
            img2.src="dog-02.png";
        }
        else 
        if(result_label=="dog")
        {
            img1.src="cat-01.png";
            img2.src="dog-02.gif";
        }
    }

}