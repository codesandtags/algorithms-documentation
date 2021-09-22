// Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun. Your regex should use the wildcard character.

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);

console.log(result);

`I'm using somethingin`.match(/\w*ing\b/gi);

song.match(/(\w*ito)/gi).reduce((words, next) => {
  if (!words.includes(next.toLowerCase())) {
    words.push(next.toLowerCase());
  }

  return words;
}, []);
