const originalString = "asuntokionapajaa";
const searchTerm = "paja";

// Part a: Search for "paja"
if (originalString.includes(searchTerm)) {
  const newString = searchTerm;
  console.log("Origin string: " + originalString);
  console.log("New string: " + newString);
} else {
  console.log("String not found");
}

// Part b: Extract every 3rd character
let newStringPartB = "";
for (let i = 2; i < originalString.length; i += 3) {
  let char = originalString[i];
  if (char === "a") {
    char = "*";
  }
  newStringPartB += char;
}
const resultUppercase = newStringPartB.toUpperCase();
console.log("Every 3 letter from " + originalString + " = " + resultUppercase);
