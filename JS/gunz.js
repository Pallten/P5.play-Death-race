function blueOilF() {
  if (blue.overlaps(oAmmo, bRemoveAmmoO) && ammoB < 1 && oAmmo.visible) {
  }
  function bRemoveAmmoO(blue, oAmmo) {
    if (ammoB < 1) {
    oAmmo.visible = false; // Hide gAmmo
    setTimeout(function () {
      // Make gAmmo visible after 2 seconds
      oAmmo.visible = true;
    }, 2000);
    oAmmoB++;
    ammoB++;
    console.log(oAmmoB);
  }}

  if (blue.overlaps(gAmmo, bRemoveAmmoB) && gAmmoB < 3 && gAmmo.visible) {
  }
    function bRemoveAmmoB(blue, gAmmo) {
    if (ammoB < 1) {
      gAmmo.visible = false; // Hide gAmmo
      setTimeout(function () {
        // Make gAmmo visible after 2 seconds
        gAmmo.visible = true;
      }, 2000);
      gAmmoB += 3;
      ammoB += 3;
    }
  }

  // Check for overlapping with bAmmo
  if (blue.overlaps(bAmmo, bRemoveAmmoG) && ammoB < 1 && bAmmo.visible) {
  }
  function bRemoveAmmoG(blue, bAmmo){
    if (ammoB < 1) {
      bAmmo.visible = false; // Hide bAmmo
      setTimeout(function () {
        // Make bAmmo visible after 2 seconds
        bAmmo.visible = true;
      }, 2000);
      bAmmoB++;
      ammoB++;
    }
  }

  if (kb.presses("e") && ammoB > 0) {
    //console.log("Current value of ammoB:", ammoB);

    if (oAmmoB > 0) {
      oilSpillB();
    }
    if (bAmmoB > 0) {
      tSkottB();
    }
    if (gAmmoB > 0) {
      shootBulletB();
    }
  }

  //OIL STUFF
  function oilSpillB() {
    ammoB--;
    oAmmoB--;

    // Calculate the position for oljeF
    let distance = 50; // 100 pixels away
    let oljeF_x = blue.position.x - distance * cos(blueRotation);
    let oljeF_y = blue.position.y - distance * sin(blueRotation);

    // Create oljeF sprite
    oljeF = createSprite(oljeF_x, oljeF_y);
    oljeF.img = oilSImg;
    oljeF.layer = 1;
    oljeF.collider = "none";

    // Calculate the rotation for oljeF (opposite direction)
    oljeF.rotation = blueRotation + PI; // 180 degrees from blue

    // Add the oil sprite to the oil group
    oilGroup.add(oljeF);
  }
  //Explosiv tunna
  function tSkottB() {
    if (!blueTA) {
      ammoB--;
      bAmmoB--;
      let barrel_x = blue.position.x;
      let barrel_y = blue.position.y;

      barrel = new Sprite(barrel_x, barrel_y);
      barrel.img = barrel1;
      barrel.collider = "none";
      // barrel.debug = true;
      blueTA = true;

      barrel.rotation = blueRotation + PI; // 180 degrees from blue
      //   (distance, direction, speed)

      barrel.move(550, blueRotation, 7);
    }
  }
  //skott

  function shootBulletB() {
    if (canShootB && blueBullets.length < 3) {
      ammoB--;
      gAmmoB--;
      // Calculate the position for the bullet
      let distance = -50; // 100 pixels away
      let bullet_x = blue.position.x - distance * cos(blueRotation);
      let bullet_y = blue.position.y - distance * sin(blueRotation);

      let bullet = new Sprite(bullet_x, bullet_y, 20);

      // Calculate the direction for the bullet
      let bulletDirection = blueRotation;

      // Set the bullet's properties
      bullet.speed = 16;
      bullet.direction = bulletDirection;
      bullet.life = 120;
      bullet.bounciness = 1;
      bullet.mass = 0;
      bullet.color = "blue"; // Set the color to red

      bullets.add(bullet);
      blueBullets.add(bullet);

      // Set a delay before allowing the next shot (e.g., 500 milliseconds)
      canShootB = false;
      setTimeout(function () {
        canShootB = true;
      }, 500); // 500 milliseconds = 0.5 seconds
    }
  }
  
  
  
  
  
  
  
    if (orange.overlaps(oAmmo, OremoveAmmoO) && ammoO < 1 && oAmmo.visible) {
  }
    function OremoveAmmoO(orange, gAmmo) {
    if (ammoO < 1) {
      gAmmo.visible = false; // Hide gAmmo
      setTimeout(function () {
        // Make gAmmo visible after 2 seconds
        gAmmo.visible = true;
      }, 2000);
      gAmmoO += 3;
      ammoO += 3;
    }
  }

  if (orange.overlaps(gAmmo, oRemoveAmmoO) && gAmmoO < 3 && gAmmo.visible) {
  }
    function oRemoveAmmoO(orange, gAmmo) {
    if (ammoO < 1) {
      gAmmo.visible = false; // Hide gAmmo
      setTimeout(function () {
        // Make gAmmo visible after 2 seconds
        gAmmo.visible = true;
      }, 2000);
      gAmmoO += 3;
      ammoO += 3;
    }
  }

  // Check for overlapping with bAmmo
  if (orange.overlaps(bAmmo, oRemoveAmmoG) && ammoO < 1 && bAmmo.visible) {
  }  function oRemoveAmmoG(orange, bAmmo){
    if (ammoO < 1) {
      bAmmo.visible = false; // Hide bAmmo
      setTimeout(function () {
        // Make bAmmo visible after 2 seconds
        bAmmo.visible = true;
      }, 2000);
      bAmmoO++;
      ammoO++;
    }
  }


  if (kb.presses("å") && ammoO > 0) {
    //console.log("Current value of ammoO:", ammoO);

    if (oAmmoO > 0) {
      oilSpillO();
    }
    if (bAmmoO > 0) {
      tSkottO();
    }
    if (gAmmoO > 0) {
      shootBulletO();
    }
  }

  //OIL STUFF
  function oilSpillO() {
    ammoO--;
    oAmmoO--;

    // Calculate the position for oljeF
    let distance = 50; // 100 pixels away
    let oljeF_x = orange.position.x - distance * cos(orangeRotation);
    let oljeF_y = orange.position.y - distance * sin(orangeRotation);

    // Create oljeF sprite
    oljeF = createSprite(oljeF_x, oljeF_y);
    oljeF.img = oilSImg;
    oljeF.layer = 1;
    oljeF.collider = "none";

    // Calculate the rotation for oljeF (opposite direction)
    oljeF.rotation = orangeRotation + PI; // 180 degrees from orange

    // Add the oil sprite to the oil group
    oilGroup.add(oljeF);
  }
  //Explosiv tunna
  function tSkottO() {
    if (!orangeTA) {
      ammoO--;
      bAmmoO--;
      let barrel_x = orange.position.x;
      let barrel_y = orange.position.y;

      barrel = new Sprite(barrel_x, barrel_y);
      barrel.img = barrel1;
      barrel.collider = "none";
      // barrel.debug = true;
      orangeTA = true;

      barrel.rotation = orangeRotation + PI; // 180 degrees from orange
      //   (distance, direction, speed)

      barrel.move(550, orangeRotation, 7);
    }
  }
  //skott

  function shootBulletO() {
    if (canShootB && orangeBullets.length < 3) {
      ammoO--;
      gAmmoO--;
      // Calculate the position for the bullet
      let distance = -50; // 100 pixels away
      let bullet_x = orange.position.x - distance * cos(orangeRotation);
      let bullet_y = orange.position.y - distance * sin(orangeRotation);

      let bullet = new Sprite(bullet_x, bullet_y, 20);

      // Calculate the direction for the bullet
      let bulletDirection = orangeRotation;

      // Set the bullet's properties
      bullet.speed = 16;
      bullet.direction = bulletDirection;
      bullet.life = 120;
      bullet.bounciness = 1;
      bullet.mass = 0;
      bullet.color = "orange"; // Set the color to red

      bullets.add(bullet);
      orangeBullets.add(bullet);

      // Set a delay before allowing the next shot (e.g., 500 milliseconds)
      canShootB = false;
      setTimeout(function () {
        canShootB = true;
      }, 500); // 500 milliseconds = 0.5 seconds
    }
  }
  
}


