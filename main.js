function preload(){
}





function setup(){
    //use  createCanvas(700, 600)
    canvas = createCanvas(700, 600);
    //set the position of the canvas--  position(110, 250)
    canvas.position(110, 250) ;
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}


function draw(){
    //use image function  image(video,70,70,550,400);

    tint(tint_color);
    image(video,70,70,550,400);

    stroke("orangered");
    fill("orangered");
    //add 
    rect(27,30,55,450);
    rect(607,30,55,450);
    rect(55,25,570,55);
    rect(55,460,570,55);

    stroke("yellowgreen");
    fill("yellowgreen");
    circle(55,50,85);
    circle(635,50,85);
    circle(635,490,85);
    circle(55,490,85);
 
}

function take_snapshot(){
    //add  save('image_tint.png');
    save('image_tint.png');
}

function filter_tint(){
    //get the value of color using-  document.getElementById("color_name").value
    tint_color = document.getElementById("color_name").value;
}

