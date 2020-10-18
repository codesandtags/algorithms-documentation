function jumpingOnClouds(clouds) {
  let jumps = 0;

  for (let i = 0; i < clouds.length - 1; i++) {
    if (i + 2 < clouds.length && clouds[i + 2] !== 1) i++;
    jumps++;
  }

  return jumps;
}

jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]); // 4
