//Rörelser för bilarna

function move(sprite, speed) {
  // Hämta den aktuella rotationsvinkeln på sprite.
  let angle = sprite.rotation;
  // Skapa en 2D-vektor "velocity" baserad på vinkeln i radianer.
  // Denna vektor representerar riktningen som spriten ska röra sig i.
  let velocity = p5.Vector.fromAngle(radians(angle));
  // Skala hastighetsvektorn med den angivna "speed" för att bestämma rörelsehastigheten.
  velocity.mult(speed);
  // Uppdatera spritens position genom att lägga till hastighetsvektorn till dess nuvarande position.
  sprite.position.add(velocity);
}

// Ökar farten för orange.
function moveO() {

  //ifall upp trycks ner så ska värdet för speedO öka med 0.1 varje draw. Maxvärdet är 7
  if (kb.pressing(UP_ARROW)) {
    //För att tillåta boosten att öka farten utöver 7 så ökar endast hastigheten ifall speedO är lika eller mindre än 7
    if (speedO <= 6) {
      speedO = min(speedO + 0.03, 6);
    }
    //ifall ner trycks ner så ska värdet för speedO minska med 0.1 varje draw. Värdet för hastighet kan inte gå under 0
  } else if (kb.pressing(DOWN_ARROW)) {
        if (speedO > 0) {
      speedO = max(speedO - 0.09);
       }
      else {
        speedO = max(speedO - 0.02, -3); // Decrease speedO more gradually when 'DOWN_ARROW' is pressed
}
  } else {
    if (speedO >= 0) {
      speedO = max(speedO - decreaseRate, 0);
       }
      else {
        speedO = max(speedO + decreaseRate, -3);
  }
  }
          if (speedO >= 6) {
      speedO = max(speedO - decreaseRate);
    }
    move(orange, speedO);
    let rotationsHO = map(speedO, 0, 7, 0, 3) * 1.7;
    rotationsHO = constrain(rotationsHO, -3, 3);
    if (kb.pressing(LEFT_ARROW)) {
      orangeRotation -= rotationsHO;
    } else if (kb.pressing(RIGHT_ARROW)) {
      orangeRotation += rotationsHO;
  }
}
  
  
  
  
//Samma kod som över bara att den hanterar blues värden
function moveB() {

  //ifall upp trycks ner så ska värdet för speedO öka med 0.1 varje draw. Maxvärdet är 7
  if (kb.pressing('w')) {
    //För att tillåta boosten att öka farten utöver 7 så ökar endast hastigheten ifall speedO är lika eller mindre än 7
    if (speedB <= 6) {
      speedB = min(speedB + 0.03, 6);
    }
    //ifall ner trycks ner så ska värdet för speedO minska med 0.1 varje draw. Värdet för hastighet kan inte gå under 0
  } else if (kb.pressing('s')) {
        if (speedB > 0) {
      speedB = max(speedB - 0.09);
       }
      else {
        speedB = max(speedB - 0.02, -3); // Decrease speedO more gradually when 'DOWN_ARROW' is pressed
}
  } else {
    if (speedB >= 0) {
      speedB = max(speedB - decreaseRate, 0);
       }
      else {
        speedB = max(speedB + decreaseRate, -3);
  }
  }
          if (speedB >= 6) {
      speedB = max(speedB - decreaseRate);
    }
    move(blue, speedB);
    let rotationsHB = map(speedB, 0, 7, 0, 3) * 1.7;
    rotationsHB = constrain(rotationsHB, -3, 3);
    if (kb.pressing('a')) {
      blueRotation -= rotationsHB;
    } else if (kb.pressing('d')) {
      blueRotation += rotationsHB;
  }
}

