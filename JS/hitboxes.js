function hitBox(){
   //hitbox för den blåa
  	hitB = new Sprite(100, 500, 130, 80);
	hitB.visible = true;
    hitB.color='green';
	hitB.mass = 0;
   hitB.layer = 1;
	hitB.overlaps(wall);
    hitB.overlaps(blue);
    hitB.overlaps(orange);

  
  //hitbox för den orangea
    hitO = new Sprite(700, 300, 130, 80);
	hitO.visible = false;
    hitO.color='purple';
	hitO.mass = 0;
	hitO.overlaps(wall);
    hitO.overlaps(blue);
    hitO.overlaps(orange);
  
 // new GlueJoint(hitO, orange);
   // new GlueJoint(hitB, blue);
}