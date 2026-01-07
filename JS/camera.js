function checkDistance() {
  currentCheckpoint = constrain(currentCheckpoint, 0, 1);

  let cDist = dist(
    blue.position.x,
    blue.position.y,
    orange.position.x,
    orange.position.y
  );

  if (blue.overlap(checkP1) || orange.overlap(checkP1)) {
    currentCheckpoint++; // Increment by 1 (adjust as needed)
  }

  // Check for overlap with checkP2
  if (blue.overlap(checkP2) || orange.overlap(checkP2)) {
    currentCheckpoint--; // Decrement by 1 (adjust as needed)
  }

  // Calculate the distance between blue and orange
  if (cDist > 800) {
    timer = 3;
      gAmmoO =0;
      oAmmoO =0;
      bAmmoO =0;
      ammoO = 0;
      gAmmoB =0;
      oAmmoB =0;
      bAmmoB =0;
      ammoB = 0;
    
    // Determine which car is closer to the next checkpoint (checkP1 or checkP2)
    let distTocheckBlueP1 = dist(
      blue.position.x,
      blue.position.y,
      checkP1.position.x,
      checkP1.position.y
    );
    let distTocheckOrangeP1 = dist(
      orange.position.x,
      orange.position.y,
      checkP1.position.x,
      checkP1.position.y
    );

    let distTocheckBlueP2 = dist(
      blue.position.x,
      blue.position.y,
      checkP2.position.x,
      checkP2.position.y
    );
    let distTocheckOrangeP2 = dist(
      orange.position.x,
      orange.position.y,
      checkP2.position.x,
      checkP2.position.y
    );

    // Update scores based on proximity to the correct checkpoint
    if (currentCheckpoint === 0) {
      if (distTocheckBlueP1 < distTocheckOrangeP1) {
        livesB += 1;
        livesO -= 1;
      } else {
        livesO += 1;
        livesB -= 1;
      }
    } else if (currentCheckpoint === 1) {
      if (distTocheckBlueP2 < distTocheckOrangeP2) {
        livesB += 1;
        livesO -= 1;
      } else {
        livesO += 1;
        livesB -= 1;
      }
    }

    if (currentCheckpoint === 0) {
      // Reset positions for checkpoint 0
      blue.position.x = 390;
      blue.position.y = 1920;
      blueRotation = -90;
      orange.position.x = 480;
      orange.position.y = 1920;
      orangeRotation = -90;
      speedB = 0;
      speedO = 0;
    } else if (currentCheckpoint === 1) {
      // Reset positions for checkpoint 1
      blue.position.x = 1250;
      blue.position.y = 305;
      blueRotation = 90;
      orange.position.x = 1390;
      orange.position.y = 305;
      orangeRotation = 90;
      speedB = 0;
      speedO = 0;
    }
  }

  if (livesB === 0 || livesO === 0) {
    showGameOver();
    dead = true;
  }

  function showGameOver() {
    let winner = livesB > 0 ? "Blue" : "Orange";
    document.getElementById("winnerText").innerText = winner + " wins!";
    document.getElementById("overlay").style.display = "flex";
  }
}
