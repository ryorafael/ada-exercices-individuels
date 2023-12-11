function drawTree(height) {
  for (let i = 0; i < height; i++) {
    let star = "*";
    let space = " ";
    let branche = "/";

    for (let j = 1; j <= i; j++) {
      star = star + "**";
    }
    let spacesBefore = space.repeat(height - i - 1);
    star = spacesBefore + star;
    console.log(star);
  }
}

drawTree(20);  // No need to log the result of the function
