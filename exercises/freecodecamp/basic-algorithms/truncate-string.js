function truncateString(str, num) {
  if (str.length > num) {
    return str.substr(0, num) + "...";
  }

  return str;
}

// Should return A-tisket....
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
