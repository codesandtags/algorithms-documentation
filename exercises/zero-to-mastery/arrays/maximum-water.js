/** 
    Steps for solution:

    Step 1: Verify the constraints (Edge cases) 
    
    Step 2: Write out some test cases 

    Step 3: Figure out a solution without code 

    Step 4: Write out solution in code 

    Step 5: Double check for errors 

    Step 6: Test our code with our test cases 

    Step 7: Space and time complexity 

    Step 8: Optimize solution
     - Reduce the time complexity
     - Increase the space complexity
**/

/**
 * You are given an array of positive integers where each integer represents the height of
 * a vertical line on a chart. Find two lines which together with the x-axis forms a container
 * that would hold the greatest amount of water. Return the area of water it would hold.
 */


// Time: O(N^2)
// Space: O(1)
// Really bad solution in time.
const getMaxWaterContainer = (heights) => {
  let maxArea = 0;
  const size = heights.length;

  for (let p1 = 0; p1 < size; p1++) {
    for (let p2 = p1 + 1; p2 < size; p2++) {
      const height = Math.min(heights[p1], heights[p2]);
      const width = p2 - p1;
      const area = height * width;

      maxArea = Math.max(area, maxArea);
    }
  }

  return maxArea;
};

console.log(getMaxWaterContainer([7, 1, 2, 3, 9])); // 28

const getMaxWaterContainerOptimizedSolution = (heights) => {
  let maxArea = 0;
  let p1 = 0;
  let p2 = heights.length - 1;
  const size = heights.length;

  while (p1 < p2) {
    const height = Math.min(heights[p1], heights[p2]);
    const width = p2 - p1;
    const area = height * width;
    maxArea = Math.max(area, maxArea);

    if (heights[p1] <= heights[p2]) {
      p1++;
    } else {
      p2--;
    }
  }

  return maxArea;
};

console.log(getMaxWaterContainerOptimizedSolution([7, 1, 2, 3, 9])); // 28
