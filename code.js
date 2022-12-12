var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b","ae39a304-5a7a-447d-8da5-aabc8587b79d","36cdae59-adca-4718-91ce-e2c56920d9a9","4dfe2d85-cc95-497c-ac84-195a14fd2e18","5292ae53-ba84-401f-b46b-0a8f416752c9","7a0680e8-b430-4d34-9626-dcd3093e6be2","c7fce902-fa3e-4976-9444-d3ebb5ad5f8e","877f6e94-83c9-4e84-b3aa-d112d523ed1d","ac54dff1-6937-4b6e-84d1-679ad565e84f","bf6dafa1-d3c4-437e-b82f-7360ffb4538a"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"7VBWgZmxN3Gt.KvyeKsv1NS5cG2eIdTN","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"TZwfhFjn0Wz45PqizR1rOhM.5qtao6xk","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png","frameSize":{"x":355,"y":241},"frameCount":1,"looping":true,"frameDelay":2,"version":"dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":241},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png","frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"YSis4_lex43su6FLaL__bhoag4eHAl8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":null,"frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":12,"version":"FGOiiJL32ju3j4K5PnEv0dgtAUyjyR8X","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/c26b6449-0b6c-4483-8486-107c0091c26e.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"QzsHBF9dK2bml_4FPF1MQiIuCGU4jHUe","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"ae39a304-5a7a-447d-8da5-aabc8587b79d":{"name":"mlk ass","sourceUrl":null,"frameSize":{"x":167,"y":398},"frameCount":1,"looping":true,"frameDelay":12,"version":"SZdzJSCwLPFURl7dlts.RFb9RoSJn.G8","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":167,"y":398},"rootRelativePath":"assets/ae39a304-5a7a-447d-8da5-aabc8587b79d.png"},"36cdae59-adca-4718-91ce-e2c56920d9a9":{"name":"mlk ass5","sourceUrl":null,"frameSize":{"x":167,"y":398},"frameCount":1,"looping":true,"frameDelay":12,"version":"N9IzYgxXNvWbMJnAZbAoNdIQiB4WLo9l","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":167,"y":398},"rootRelativePath":"assets/36cdae59-adca-4718-91ce-e2c56920d9a9.png"},"4dfe2d85-cc95-497c-ac84-195a14fd2e18":{"name":"mlk ass2","sourceUrl":null,"frameSize":{"x":167,"y":398},"frameCount":1,"looping":true,"frameDelay":12,"version":"zYvDIS0a6kLUPMDvyCTZGUH5nhbFw7NO","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":167,"y":398},"rootRelativePath":"assets/4dfe2d85-cc95-497c-ac84-195a14fd2e18.png"},"5292ae53-ba84-401f-b46b-0a8f416752c9":{"name":"mlk ass1","sourceUrl":null,"frameSize":{"x":167,"y":398},"frameCount":1,"looping":true,"frameDelay":12,"version":"4UNeplNby70vgYwgiPE4d7rkllAvpxOw","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":167,"y":398},"rootRelativePath":"assets/5292ae53-ba84-401f-b46b-0a8f416752c9.png"},"7a0680e8-b430-4d34-9626-dcd3093e6be2":{"name":"mlk ass4","sourceUrl":null,"frameSize":{"x":167,"y":398},"frameCount":1,"looping":true,"frameDelay":12,"version":"CGtd_TM_xhN4VGqleoIn4cYb1xyNyIhV","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":167,"y":398},"rootRelativePath":"assets/7a0680e8-b430-4d34-9626-dcd3093e6be2.png"},"c7fce902-fa3e-4976-9444-d3ebb5ad5f8e":{"name":"dart_1","sourceUrl":null,"frameSize":{"x":393,"y":163},"frameCount":1,"looping":true,"frameDelay":12,"version":"jLgiBD4eTmUQFHseNafIMLILqn8AAsYD","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":163},"rootRelativePath":"assets/c7fce902-fa3e-4976-9444-d3ebb5ad5f8e.png"},"877f6e94-83c9-4e84-b3aa-d112d523ed1d":{"name":"dart_1_copy_1","sourceUrl":null,"frameSize":{"x":393,"y":163},"frameCount":1,"looping":true,"frameDelay":12,"version":"NHFKvdn2jgQ1feQekfHH_YSOPImrhFM7","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":163},"rootRelativePath":"assets/877f6e94-83c9-4e84-b3aa-d112d523ed1d.png"},"ac54dff1-6937-4b6e-84d1-679ad565e84f":{"name":"sc","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"Y8entS0cbLyqUNJVl4FhrQSbggQcrciV","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/ac54dff1-6937-4b6e-84d1-679ad565e84f.png"},"bf6dafa1-d3c4-437e-b82f-7360ffb4538a":{"name":"mlk brabo","sourceUrl":null,"frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":12,"version":"zIH21dOaU0GqBLWCCBTO170X8FgdO__r","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/bf6dafa1-d3c4-437e-b82f-7360ffb4538a.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var fim = createSprite(200, 0, 200, 100);
fim.shapeColor = "brown";

var f1 = createSprite(385, 180);
f1.setAnimation("mlk brabo");
f1.scale = 0.2;
var f2 = createSprite(15, 100);
f2.setAnimation("mlk brabo");
f2.scale = 0.2;
var life = 0;

var c = createSprite(71, 260);
c.setAnimation("dart_1");
c.scale = 0.1;
c.velocityX = 6;


var f = createSprite(15, 260);
f.setAnimation("mlk brabo");
f.scale = 0.2;


var c2 = createSprite(350, 180);
c2.setAnimation("dart_1_copy_1");
c2.scale = 0.1;
c2.velocityX = -8;



var c3 = createSprite(71, 100);
c3.setAnimation("dart_1");
c3.scale = 0.1;
c3.velocityX = 15;









var b = createSprite(30, 390);
b.setAnimation("mlk ass");
b.scale = 0.10;
function draw() {
  background("green");
  fill("black");
  text("vidas: "+life, 305, 45);
  b.collide(f);
  b.collide(f1);
  b.collide(f2);
  if (b.isTouching(fim)) {
    c.velocityX = 0;
    c3.velocityX = 0;
    c2.velocityX = 0;
    text("parabens e obrigado por jogar", 200, 200);
  }
  if (life==3) {
    c.velocityX = 0;
    c3.velocityX = 0;
    c2.velocityX = 0;
    fill("black");
    text("fim de jogo!", 200, 200);
  }
  if (b.isTouching(c)) {
    b.x = 200;
    b.y = 350;
    life = life+1;
  }
  if (b.isTouching(c2)) {
    b.x = 200;
    b.y = 350;
    life = life+1;
  }
  if (b.isTouching(c3)) {
    b.x = 200;
    b.y = 350;
    life = life+1;
  }
  if(c.x > 420) {
    c.x = 71;
  }
  if(c3.x > 420) {
    c3.x = 71;
  }
  if(c2.x < 0) {
    c2.x = 350;
  }
  if (keyDown("up")) {
    b.y = b.y-4;
    b.setAnimation("mlk ass2");
  }
  if (keyDown("right")) {
    b.x = b.x+4;
    b.setAnimation("mlk ass1");
  }
  if (keyDown("left")) {
    b.setAnimation("mlk ass4");
    b.x = b.x-4;
  }
  if (keyDown("down")) {
    b.y = b.y+4;
    b.setAnimation("mlk ass5");
  }
  createEdgeSprites();
  b.collide(edges);
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
