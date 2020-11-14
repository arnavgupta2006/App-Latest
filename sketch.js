var cities,data1,logo,title,greeting,text;
var database;

var gameState = 0;
var form;

function preload (){
  logo=loadImage("logo.jpg")
}

function setup(){
  database=firebase.database();
  createCanvas(800,400);

  this.greeting = createElement("h3");
  this.input = createInput("Write the city name");
  this.submit = createButton("Submit");
};
  


function draw() {
  background(255,255,255);  
  image(logo,585,30,100,100);
  
  title = createElement("h2");
  title.html("Pollution Tracker");
  title.position(400,30);
  data1=this.input.value();
    
  greeting.html("Greetings. Welcome to Pollution Tracker");
  greeting.position(60,100);

  input.position(250,200);
  submit.position(425,200);
  
  if (submit.mousePressed()) {
    var citiesRef  = database.ref('cities/');
    citiesRef.on("value",function(data){
       cities = data.val();
    })
  if(gameState===0){
    if(data1 === cities){
      if(cities>0 && cities<50){
        good=createElement("Good and Minimal impact");
        good.position(425,230);
      }
      if(cities>100 && cities<51){
        good=createElement("Minor breathing discomfort for sensitive poeple");
        good.position(425,230);
      }
      if(cities>200 && cities<101){
        good=createElement("Breathing discomfort to the people with lungs, asthama and heart diseases, satisfactory remarks");
        good.position(425,230);
      }
      if(cities>300 && cities<201){
        good=createElement("Breathing discomfort to most people on prolonged exposure, moderate remarks");
        good.position(425,230);
      }
      if(cities>400 && cities<301){
        good=createElement("Respiratory illness for proplonged exposure, poor remarks");
        good.position(425,230);
      }
      if(cities>500 && cities<401){
        good=createElement("Affects healthy people and seriously impacts those with existing diseases, severe remarks");
        good.position(425,230);
      }
      if(cities<501){
        good=createElement("Excesive, stay at home. Do not reccomend going out");
        good.position(425,230);
      }
      
    }
   
    
  }
}

push();
text()
drawSprites();
pop();

}

function text(){
  var text
  text = 'good';
  text.position(500,200);
  
}