function titleCase(str) {
  return str
    .split(" ")
    .map((s) => `${s[0].toUpperCase()}${s.substr(1).toLowerCase()}`)
    .join(" ");
}

console.log(titleCase("I'm a little tea pot"));

"habia UNA vez una rana con cara de maga"
  .toLowerCase()
  .replace(/(^|\s)\S/g, (c) => c.toUpperCase());

// Get the first letter for each word
"getting only the first letter for each word".match(/(^|\s)\S/g);

// Get the last letter for each word
"getting only the last letter for each word".match(/\S(\s|$)/g);
