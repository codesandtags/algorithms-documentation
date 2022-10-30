function tournamentWinner(competitions, results) {
   const points = {}
   const length = competitions.length
   const homeTeam = 1
   let bestTeam = ''
   let bestTeamPoints = 0

   // Sum points
   for (let i = 0; i < length; i++) {
      const teamWinnerIdx = results[i] === homeTeam ? 0 : 1
      const winner = competitions[i][teamWinnerIdx]

      if (!points[winner]) {
         points[winner] = 0
      }

      points[winner] += 3

      if (points[winner] > bestTeamPoints) {
         bestTeamPoints = points[winner]
         bestTeam = winner
      }
   }

   return bestTeam
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner

// Second solution

// time: 0(n)
// space: O(k)
function tournamentWinner(competitions, results) {
   const HOME_TEAM_WON = 1
   const POINTS_WINNER_TEAM = 3
   let currentBestTeam = ''
   const scores = {}
   scores[currentBestTeam] = 0

   for (let index = 0; index < competitions.length; index++) {
      const [homeTeam, awayTeam] = competitions[index]
      const winningTeam = results[index] === HOME_TEAM_WON ? homeTeam : awayTeam

      updateScores(winningTeam, POINTS_WINNER_TEAM, scores)

      if (scores[winningTeam] > scores[currentBestTeam]) {
         currentBestTeam = winningTeam
      }
   }

   return currentBestTeam
}

function updateScores(team, points, scores) {
   if (!scores[team]) {
      scores[team] = 0
   }

   scores[team] += points
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner
