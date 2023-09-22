//variáveis da bolinha 
let xBolinha = 300;
let yBolinha = 200;
let diametro =20
let raio = diametro /2;

// velociade da bolinha 
let velocidadeXBolinha = 6;
let velociadeYBolinha = 6;
let raquteComprimento = 10;
let raqueteAltura = 90;

//variáveis da raquete 
let xRaquete = 5;
let yRaquete = 150;

//variáveis do oponente 
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velociadeYOponrntr;

let colidiu = false;

//placlar do jogo 
let meuPonto = 0;
let pontosDoOponente = 0;

function setup() {
   createCanvas(600, 400);
}

function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete(xRaquete, yRaquete);
    movimentaMinhaRaquete();
    //verificaColisaoRaquete();
    verificaColisaoRaquete(xRaquete, yRaquete);
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);
    movimentaRaquete();
    verificColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
    incluiPlacar();
    marcaPonto();
}

function mostraBolinha(){
   circle(xBolinha, yBolinha, diametro)
}

fuction movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
} 

function veriicaColisaoBorda() {
    if (xBolinha + raio > width ||
        xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height ||
        yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;
    }
}

function mostraRaquete(x,y) {
     rect(x, y, raqueteComprimento, raqueteAltura);
}

fuction movimentaMinhaRaquete() {
  if (keyIsDon(UP_ARROW)) {
      yRaquetee -= 10;
  {
  if   