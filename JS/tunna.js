function tunna() {
  if (blueTA) {
    barrel.scale += sizeChange;

    // Check if the barrel has reached a certain size
    if (barrel.scale > 3.3 || barrel.scale < 1) {
      // Reverse the direction of size change
      sizeChange *= -1;

      if (barrel.scale <= 1) {
        blueTA = false;

        if (!tCollisionCalledB) {
          tCollision();
          tCollisionCalledB = true; // Set the flag to true after calling tCollision
        }
        barrel.remove();
      }
    }
  }

  if (tCollisionCalledB && explosion) {
    if (millis() - tryckVåg < 400) {

      // Calculate the direction from blue to the center of explosion
      let directionToexplosion = createVector(
        explosion.position.x - orange.position.x,
        explosion.position.y - orange.position.y
      );
      directionToexplosion.normalize();

      // Calculate the distance between blue and explosion
      let distance = dist(
        orange.position.x,
        orange.position.y,
        explosion.position.x,
        explosion.position.y
      );

      // Adjust the movement speed based on distance
      let maxSpeed = 15; // Maximum speed when close to the center
      let minSpeed = 0; // Minimum speed at the outer edge
      let moveSpeed = map(distance, 10, 150, maxSpeed, minSpeed); // Adjust the range based on your requirements

      // Constrain the moveSpeed between 0 and 10
      moveSpeed = constrain(moveSpeed, 0, 15);

      // Move the blue away from the center of explosion
      orange.position.x -= directionToexplosion.x * moveSpeed;
      orange.position.y -= directionToexplosion.y * moveSpeed;
    }
    if (millis() - tryckVåg > 800) {
      tCollisionCalledB = false;
    }
  }

  if (kb.presses("i") && !orangeTA) {
    let barrel_x = orange.position.x;
    let barrel_y = orange.position.y;

    barrel = new Sprite(barrel_x, barrel_y);
    barrel.img = barrel1;
    barrel.collider = "none";
    orangeTA = true;

    barrel.rotation = orangeRotation + PI; // 180 degrees from blue
    //   (distance, direction, speed)

    //SKA ÄNDRAS TILLBALKA FÖR ATT SKICKA SKITEN
    barrel.move(550, orangeRotation, 7);
  }

  if (orangeTA) {
    barrel.scale += sizeChange;

    // Check if the barrel has reached a certain size
    if (barrel.scale > 3.3 || barrel.scale < 1) {
      // Reverse the direction of size change
      sizeChange *= -1;

      if (barrel.scale <= 1) {
        orangeTA = false;

        if (!tCollisionCalledO) {
          tCollision();
          tCollisionCalledO = true; // Set the flag to true after calling tCollision
        }
        barrel.remove();
      }
    }
  }

  if (tCollisionCalledO && explosion) {
    if (millis() - tryckVåg < 400) {
      // Calculate the direction from blue to the center of explosion
      let directionToexplosion = createVector(
        explosion.position.x - blue.position.x,
        explosion.position.y - blue.position.y
      );
      directionToexplosion.normalize();

      // Calculate the distance between blue and explosion
      let distance = dist(
        blue.position.x,
        blue.position.y,
        explosion.position.x,
        explosion.position.y
      );

      // Adjust the movement speed based on distance
      let maxSpeed = 15; // Maximum speed when close to the center
      let minSpeed = 0; // Minimum speed at the outer edge
      let moveSpeed = map(distance, 10, 150, maxSpeed, minSpeed); // Adjust the range based on your requirements

      // Constrain the moveSpeed between 0 and 10
      moveSpeed = constrain(moveSpeed, 0, 15);

      // Move the blue away from the center of explosion
      blue.position.x -= directionToexplosion.x * moveSpeed;
      blue.position.y -= directionToexplosion.y * moveSpeed;
    }
    if (millis() - tryckVåg > 800) {
      tCollisionCalledO = false;
    }
  }
}
function tCollision() {
  explosion = new Sprite();
  explosion.addAni(explosionA);
  explosionA.play(0);
  explosion.position.x = barrel.position.x;
  explosion.position.y = barrel.position.y;
  // explosion.debug = true;
  explosion.diameter = 300;
  explosion.life = 100;
  explosion.collider = "none";

  tryckVåg = millis(); // Start the timer when tCollision is called
  expoGroup.add(explosion);

}
