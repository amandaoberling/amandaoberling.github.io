$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);



    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    // drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    //createPlatform(x,y,width,height)
    createPlatform(200, 320, 100, 10)
    createPlatform(600, 450, 100, 10)
    createPlatform(30,600,100,10)
    createPlatform(389,440,20,10)
    createPlatform(600,400,10,100)
    createPlatform(600,650,10,300)
    createPlatform(700,601,300,10)
    createPlatform(500,300,10,700)
    createPlatform(700,130,10,500)
    createPlatform(500, 300,100,10)
    createPlatform(840,710,10,200)
    createPlatform(790,610,10,30)
    createPlatform(990,300,10,200)
    createPlatform(740,710,10,200)
    createPlatform(1130,130,10,500)
    createPlatform(1070,450,10,760)
    createPlatform(890,610,10,30)
    createPlatform(940,710,10,50)
    createPlatform(990,610,10,30)
    createPlatform(300,180,970,10)
    createPlatform(948,300,50,10)
    createPlatform(1000,490,80,10)
    createPlatform(850,450,10,10)
    createPlatform(820,320,10,10)
    createPlatform(1085,350,50,10)
    createPlatform(1300,600,10,10)
    createPlatform(1200,486,10,10)
    createPlatform(1337,360,10,10)
    createPlatform(1300,230,10,10)
    createPlatform(1200,360,10,10)
    createPlatform(300,180,10,150)


    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("database", 830, 900,1,1)
    createCollectable("diamond", 1190, 400,1,1)
    createCollectable("steve", 500, 80,1,1)
    createCollectable("database",59,299,1,1)
    createCollectable("grace",70,300,1,1)
    

  
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

    createCannon("right", 480, 2900)
    createCannon("left",240,2500)
    createCannon("left",665,3200)

    
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
