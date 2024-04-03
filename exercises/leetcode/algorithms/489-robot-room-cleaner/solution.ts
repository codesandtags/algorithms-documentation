/**
 * class Robot {
 *      // Returns true if the cell in front is open and robot moves into the cell.
 *      // Returns false if the cell in front is blocked and robot stays in the current cell.
 * 		move(): boolean {}
 *
 *      // Robot will stay in the same cell after calling turnLeft/turnRight.
 *      // Each turn will be 90 degrees.
 * 		turnRight() {}
 *
 *      // Robot will stay in the same cell after calling turnLeft/turnRight.
 *      // Each turn will be 90 degrees.
 * 		turnLeft() {}
 *
 * 		// Clean the current cell.
 * 		clean(): {}
 * }
 */

interface Robot {
   move(): boolean
   turnRight()
   turnLeft()
   clean()
}

enum RobotDirection {
   UP,
   LEFT,
   DOWN,
   RIGHT,
}

type Point = [x: number, y: number]

function cleanRoom(robot: Robot) {
   const visited: Set<string> = new Set()

   let currentDirection: RobotDirection = RobotDirection.UP

   const getPossibleNextPoint = ([x, y]: Point): Point => {
      switch (currentDirection) {
         case RobotDirection.UP:
            return [x, y - 1]
         case RobotDirection.DOWN:
            return [x, y + 1]
         case RobotDirection.LEFT:
            return [x - 1, y]
         case RobotDirection.RIGHT:
            return [x + 1, y]
      }
   }

   const turnLeft = () => {
      robot.turnLeft()
      currentDirection = (currentDirection + 1) % 4
   }

   const goBack = () => {
      robot.turnLeft()
      robot.turnLeft()
      robot.move()
      robot.turnLeft()
      robot.turnLeft()
   }

   const backtrack = (currentPoint: Point = [0, 0]) => {
      visited.add(currentPoint.join())
      robot.clean()

      let dirCount = 0
      while (dirCount < 4) {
         const newPoint = getPossibleNextPoint(currentPoint)

         if (!visited.has(newPoint.join()) && robot.move()) {
            backtrack(newPoint)

            goBack()
         }

         turnLeft()
         dirCount++
      }
   }

   return backtrack()
}
