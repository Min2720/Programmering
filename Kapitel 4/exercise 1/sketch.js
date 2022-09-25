// Jeg erklærer alle de variabler jeg vil bruge globalt
let x;
let y;
let a;
let b;
let d;
let speed;
let catx;
let caty;
let cata;
let catb;
let n;
let dist;
let catx2;
let caty2;
let cata2;
let catb2;
let dist2;
let w;

// Jeg laver mit canvas og tildeler nogle variabler værdier, som skal bruges senere i koden.
function setup() {
  createCanvas(500, 500);
  fill(0);
  // Får jeg musen og kattenes spawn steder er tilfældige.
  x = random(0,width);
  y = random(0,height);
  catx = random(0,width);
  caty = random(0,height);
  catx2 = random(0,width);
  caty2 = random(0,height);
  speed = 3;
  a = speed;
  b = 0;
  d = 50;
  cata = speed;
  catb = 0;
  n = 0;
  cata2 = speed;
  catb2 = 0;
}
// Jeg får mine billeder ind jeg skal bruge med funktionen preload.
function preload() {
  img = loadImage('mouse.png');
  cat = loadImage('cat.png');
  gameover = loadImage('gameover.png');
 }

function draw() {
  // Jeg tegner baggrunden og derefter billederne af kattene og musen.
  background(255);
  image(img,x,y,d,d);
  image(cat,catx,caty,d,d);
  image(cat,catx2,caty2,d,d);
  // Her får jeg kattene og musen til at bevæge sig på skærmen.
  x += a;
  y += b;
  catx += cata;
  caty += catb;
  catx2 += cata2;
  caty2 += catb2;

  /*Jeg får n til at tælle op med 1 hver gang og i if funktionen gør jeg når n har talt op til et random tal mellem 150 og 250,
  skal kattene bevæge sig i en anden retning. Jeg sørger også for at resette n, så den starter med at tælle forfra fra 0. */
  n++;
  if (n>random(150,250)){
    n = 0;
    t = catb;
    catb = cata;
    cata = t;
    v = catb2;
    catb2 = cata2;
    cata2 = v;
  }

  // Jeg bruger Pythagoras læresætning til at finde distancen mellem kattene og musen.
  dist = sqrt((x - catx)*(x - catx)+(y - caty)*(y - caty));
  dist2 = sqrt((x - catx2)*(x - catx2)+(y - caty2)*(y - caty2));
  /* Jeg bruger en if funktion til at se hvis distancen mellem en af kattene og musen er under "d",
  som er lig med 50, at alle ting skal stoppe og et stort billede skal fylde det hele, hvor der står "Game over". */
  if(dist<d || dist2<d){
  image(gameover,0,0,500,500);
  cata = 0;
  catb = 0;
  a = 0;
  b = 0;
  cata2 = 0;
  catb2 = 0;
  }
  // Jeg kalder efter funktionen "borderCheck".
 borderCheck();
}

/* Jeg laver en funktion som sørger at når musen eller kattene rammer kanten af canvas'et, at den begynder at gå modsat retning. */
function borderCheck() {
  if (x + d>= width) {
    a = -speed;
    b = 0;
  }
  if (x  <= 0) {
    a = speed;
    b = 0;
  }
  if (y + d>= height) {
    a = 0;
    b = -speed;
  }
  if (y < 0) {
    a = 0;
    b = speed;
  }

  if (catx + d>= width) {
    cata = -speed;
    catb = 0;
  }
  if (catx  <= 0) {
    cata = speed;
    catb = 0;
  }
  if (caty + d>= height) {
    cata = 0;
    catb = -speed;
  }
  if (caty < 0) {
    cata = 0;
    catb = speed;
  }


  if (catx2 + d>= width) {
    cata2 = -speed;
    catb2 = 0;
  }
  if (catx2  <= 0) {
    cata2 = speed;
    catb2 = 0;
  }
  if (caty2 + d>= height) {
    cata2 = 0;
    catb2 = -speed;
  }
  if (caty2 < 0) {
    cata2 = 0;
    catb2 = speed;
  }
 }




/* Her bruger jeg en funktion "keyPressed", så man kan bruge tasterne til at styre musen. */
function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    b = speed;
    a = 0;
  }
  if (keyCode === UP_ARROW) {
    b = -speed;
    a = 0;
  }
  if (keyCode === LEFT_ARROW) {
    b = 0;
    a = -speed;
  }
  if (keyCode === RIGHT_ARROW) {
    b = 0;
    a = speed;
  }
 }
