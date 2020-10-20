"use strict";

const express = require("express");
const app = express();
app.use(express.json());

// Your code starts here. Placeholders for .get and .post are provided for
//  your convenience.
const database = [];

app.post("/candidates", function (req, res) {
  const candidate = req.body;

  if (
    candidate.skills.length === 0 ||
    !candidate.id.length === 0 ||
    !candidate.name.length === 0
  ) {
    return res.sendStatus(400);
  }

  database.push(candidate);
  res.sendStatus(200);
});

app.get("/candidates/search", function (req, res) {
  const skills =
    req.query.skills !== undefined ? req.query.skills.split(",") : [];
  // console.log(' Search candidate with ', skills);
  // console.log(' Candidates available ', database);

  // Bad request when there is not skills defined
  if (skills.length === 0) {
    return res.sendStatus(400);
  }

  // There is not candidates defined
  if (database.length === 0) {
    return res.sendStatus(404);
  }

  // Intersection for candidates skills vs skills
  const possibleCandidates = database.filter((candidate) => {
    return candidate.skills.some((skill) => {
      return skills.includes(skill);
    });
  });

  // After search there is not suitable candidates
  if (possibleCandidates.length === 0) {
    return res.sendStatus(404);
  }

  if (possibleCandidates.length === 1) {
    return res.status(200).json(possibleCandidates[0]);
  }

  // Amount of skills matched and best candidate
  const bestCandidate = possibleCandidates
    .map((candidate) => {
      return {
        ...candidate,
        skillsMatched: candidate.skills.filter((skill) => {
          return skills.includes(skill);
        }).length,
      };
    })
    .sort((a, b) => {
      if (a.skillsMatched === b.skillsMatched) return 0;
      return a.skillsMatched < b.skillsMatched ? 1 : -1;
    })[0];

  delete bestCandidate.skillsMatched;

  // console.log('Candidates foound  => ', bestCandidate);

  return res.status(200).json(bestCandidate);
});

app.listen(process.env.HTTP_PORT || 3000);
