function mTiles(){

  //De olika blocken som banan är byggd av.
  wall = new Group();
  wall.layer = 0;
  //wall är solid och går inte köra igenom. Spelar kan inte lämna banan.
  wall.collider = "s";
  wall.tile = "w";
  wall.color= 'black'


  grind = new Group();
  grind.collider = "s";
  grind.layer = 0;
  grind.tile = "v";
  //  grind.img = wallImg;
 // grind.visible = false;
  grind.color= '#9E9E9E'

  boost = new Group();
  boost.layer = 1;
  boost.tile = "b";
  boost.img = boostImg;
  boost.overlaps(allSprites);
 // boost.visible = false;
  boost.color= 'yellow'

  oil = new Group();
  oil.layer = 1;
  oil.tile = "s";
  oil.img = oilSImg;
  oil.overlaps(allSprites);
  //oil.visible = false;
  oil.color= 'rgb(255,108,0)'

  road = new Group();
  road.layer = 1;
  road.tile = "r";
  //    oil.img = oilBImg;
  road.overlaps(allSprites);
  road.scale = 1;
  //road.visible = false;
  road.color= 'grey'

 /* slow = new Group();
  slow.layer = 1;
  slow.tile = "m";
  //  slow.img = oilBImg;
  slow.overlaps(allSprites);
  slow.scale = 0.5;
  //slow.visible = false;
  slow.color= 'blue'*/
  
  grass = new Group();
  grass.layer = 1;
  grass.tile = "g";
  grass.overlaps(allSprites);
  grass.color= 'green'


//ALL AMMO
  
  oAmmo = new Group();
  oAmmo.collider = 'none'
  oAmmo.tile = 'o'
  oAmmo.img = oilBImg;

  
  gAmmo = new Group();
  gAmmo.collider = 'none'
  gAmmo.tile = 'm'
  gAmmo.img = gunBImg;
  
  bAmmo = new Group();
  bAmmo.collider = 'none'
  bAmmo.tile = 'q'
  bAmmo.img = barrelBImg;
  

  
}

//Skapar kartan med hjälp av tiles
function karta(){
  	new Tiles(
  	// Skapar en ny insättning tiles med en 2d array 
		[

 // Kartans layout representeras som en array av strängar där varje bokstav motsvarar en viss bricka
       
      // 'w' = vägg (wall)
      // 'v' = vägg för bilar men inte skott
      // 'm' = slowblock (liten slow)
      // 'g' = gräs (stor slow)
      // 'r' = vägen (road)
  
      // 'b' = boostblock
      // 's' = oljeblock
      // 'o' = olja-ammo
      // 'g' = gun-ammo
      // 'q' = barrel-ammo

'wwwwwwwwwwwwwwwwwwwwwwwwwwww',
'gggggggggggggggggggggggggggg',
'gg           o   b          g ',
'g                            g',
'g     m           q           g',
'g   vvvvvvvvvvvvvvvvv s        g',
'g       g     v     g          g',
'g        g    v     g          g',
' g        g   v      g         g',
' ggggg    g   v       g        g',
'      g    g  v       g        g',
'      g    g  v       g        g',
'      g    g  v      g    b    g',
'       g  g   v      g    s    g',
'       g  g   v      g    g    g',
'       g  g   v     g    ggg    g',
'      g    g  v    g    ggggg    g',
'      g    g  v   g    ggggggg    g',
'      g    g  v  g    ggggggggg    g',
'     g      g v  g    ggggggggg    g',
'     g      g v  gm   ggggggggg   mg',
'    gq      qgv  g    ggggggggg    g',
'     g      g v  g    ggggggggg    g',
'     g      g v  g    ggggggggg    g',
'      g    g  v   g    ggggggg    g',
'      g    g  v    g    ggggg    g',
'      g    g  v     g    ggg    g',
'      g    g  v      g    g    g',
'      g    g  v       g       g',
'      g    g  v        g     g',
'      g    g  v       g     g',
'      g    g  v     ggg     g',
'      g    g  v    g       g',
'      g    g  v   g        g',
'      g    g  v  g    s   g',
'      g    g  v g      vvvvv',
'      g    g  v g m         gggg',
'      g    g  v g              gggg',
'      g    g  v g             o    ggg',
'      g    g  v gggg  q             gg',
'      g    g  v  gggg               gg',
'      g    g  v      ggggggg         g',
'      g   bg  vv            gggg      g',
'      g     g   vv             gg      g',
'      gb     g   vvvvvvvvvvv   g       g',
'      g       gg             gg        g',
'      g       s gggggggggggggg        g',
'      g                      o       g',
'       g                          m ggg',
'       g                           ggg',
'        gg          q            ggg',
'    gggggggggggggggggggggggggggggggggg',
'    gggggggggggggggggggggggggggggggggg',
'    gggggggggggggggggggggggggggggggggg',
],
10, // Bredden på varje bricka 
10, // Höjden på varje bricka (i pixlar)
50, // Startpositionens x-koordinat (i pixlar)
50 // Startpositionens y-koordinat (i pixlar)
	);
  
  }