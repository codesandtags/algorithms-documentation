function translatePigLatin(str) {
  if (/^[aeiou]/.test(str)) {
    return `${str}way`;
  }
  const clusterStarts = str.match(/(?=[aeiou])/);
  if (clusterStarts) {
    const index = clusterStarts.index;
    return `${str.substr(index)}${str.substr(0, index)}ay`;
  }

  return `${str}ay`;
}

function translatePigLatin2(str) {
  if (str.match(/^[aeiou]/)) return str + "way";

  const consonantCluster = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonantCluster.length) + consonantCluster + "ay";
}

function translatePigLatin3(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

console.log(translatePigLatin("rhythm"));
