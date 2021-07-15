function setup() 
{
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() 
{
  background(0);
  translate(width / 2, height / 2);

  let h = hour();
  let m = minute();
  let s = second();
  let d = day();

  //text
  fill(255);
  noStroke();
  textAlign(CENTER);
  text(h + ':' + m + ':' + s, 0, 200);
  textSize(20);
  text(d,75,0);

  if (h >=0 && h <12)
  {
    textAlign(CENTER);
    text("Good Morning", 0, -200);
  }
  else if(h >=12 && h<16)
  {
    textAlign(CENTER);
    text("Good Afternoon", 0, -200);
  }
  else if(h>=16 && h <20)
  {
    textAlign(CENTER);
    text("Good Evening", 0, -200);
  }
  else
  {
    textAlign(CENTER);
    text("Good Night", 0, -200);
  }

  rotate(-90);
  strokeWeight(4);
  stroke('#DA0037');
  noFill();

  //Arcs
  //Seconds
  let seconds = map(s , 0, 60, 0, 360)
  arc(0, 0, 300, 300, 0, seconds);


  //Minutes
  stroke('#DA0037');
  let minutes = map(m, 0, 60, 0, 360) + map(seconds, 0, 360, 0, 6);
  arc(0, 0, 280, 280, 0, minutes);


  //Hours
  stroke('#DA0037');
  let hours = map(h % 12, 0, 12, 0, 360) + map(minutes, 0, 360, 0, 30);
  arc(0, 0, 260, 260, 0, hours);
 
  //Hands
  //Seconds
  push();
  rotate(seconds);
  stroke(255,100);
  line (0, 0, 100, 0);
  pop();

  //Minutes
  push();
  rotate(minutes);
  stroke(255);
  line (0, 0, 80, 0);
  pop();

  //Hours
  push();
  rotate(hours);
  stroke(255);
  line (0, 0, 50, 0);
  pop();
}
