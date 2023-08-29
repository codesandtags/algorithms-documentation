// time: 0(n)
// space: O(k)
function tournamentWinner(competitions, results) {
   const points = {}
   const length = competitions.length
   const HOME_TEAM_WON = 1
   let winnerTeam = ''
   let winnerTeamPoints = 0

   // Sum points
   for (let i = 0; i < length; i++) {
      const [homeTeam, awayTeam] = competitions[i]
      const winner = results[i] === HOME_TEAM_WON ? homeTeam : awayTeam

      if (!points[winner]) {
         points[winner] = 0
      }

      points[winner] += 3

      if (points[winner] > winnerTeamPoints) {
         winnerTeamPoints = points[winner]
         winnerTeam = winner
      }
   }

   return winnerTeam
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner
