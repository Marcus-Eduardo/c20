var rato,ratoImg1,ratoImg2,ratoImg3,ratoImg4;
var gato,gatoImg1,gatoImg2,gatoImg3,gatoImg4;
var gardenImg;
function preload() {
    //carregue as imagens aqui
    ratoImg1 = loadImage("images/mouse1.png");
    ratoImg2 = loadImage("images/mouse2.png");
    ratoimg3 = loadImage("images/mouse3.png");
    ratoImg4 = loadImage("images/mouse4.png");
    gatoImg1 = loadImage("images/cat1.png");
    gatoImg2 = loadImage("images/cat2.png");
    gatoImg3 = loadImage("images/cat3.png");
    gatoImg4 = loadImage("images/cat4.png");
    gardenImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    rato = createSprite(200,650,20,20);
    rato.addImage(ratoImg2);
    rato.scale = 0.2
    rato.debug = true;
    rato.setCollider("rectangle",50,50,500,500)
    

    gato = createSprite(800,650,20,20);
    gato.addImage(gatoImg1);
    gato.scale = 0.2

}

function draw() {

    background(gardenImg);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    
    rato.display();
    gato.display();
    
    if(keyDown("left")){
        rato.addImage(ratoImg1)
        gato.velocityX = -2.5;
        gato.addImage(gatoImg2);
        gato.scale = 0.3
    }
    gato.collide(rato);
    if(gato.isTouching(rato)){
        gato.addimage(gatoImg2);
    }

    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui


}
