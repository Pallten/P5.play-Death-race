// Hanterar skotten av bollarna eller bullets som vi har döpt det till
function bullet123() {
  if (kb.pressed("ä")) {
    shootBullet();
    // Om du trycker på ä så skjuts ett skott för den orange bilen
  }


  // Hanterar skotten för den blåa bilen
  function shootBullet() {
    if (orangeBullets.length < 3) {
      // Calculate the position for the bullet
      let distance = -40; // 100 pixels away
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
      bullet.color = "red"; // Set the color to blue

      bullets.add(bullet);
      orangeBullets.add(bullet);
    }
  }

  for (let i = bullets.length - 1; i >= 0; i--) {
    let bullet = bullets[i];

    if (orange.overlaps(bullet)) {
      bullet.remove();
      speedO *= 0.5;
    }
  }

  // Samma kod fast för den andra spelaren


  for (let i = bullets.length - 1; i >= 0; i--) {
    let bullet = bullets[i];

    if (blue.overlaps(bullet)) {
      bullet.remove();
      speedB *= 0.5;
    }
  }
}

// funktion som hanterar powerups för den blåa bilen
function puB() {
  if (blue.overlap(boost)) {
    // Om bilen åker över ett boost block

    speedB *= 1.8;
    // sätts hastiheten till 10, alltså högre än orginal hastigheten
  } else if (blue.overlap(oil)) {
    // Om bilen åker över ett oilblock
    speedB *= 0.3;
  } else if (blue.overlapping(grass)) {
    if (speedB > 2) {
      // Gradually decrease speedB until it reaches 0
      speedB = max(speedB - 0.15, 0);
    } else {
      // Constrain speedB to be between 0 and 2
      speedB = constrain(speedB, 0, 2);
    }
  }
}

//Samma fast för den andra spelaren
function puO() {
  if (orange.overlap(boost)) {
    speedO *= 1.8;
  } else if (orange.overlap(oil)) {
    speedO *= 0.3;
  } else if (orange.overlapping(grass)) {
    // Gradually decrease speedO
    if (speedO > 2) {
      // Gradually decrease speedB until it reaches 0
      speedO = max(speedO - 0.15, 0);
    } else {
      // Constrain speedB to be between 0 and 2
      speedO = constrain(speedO, 0, 2);
    }
  }
}
