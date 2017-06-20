const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

console.log("// Array.prototype.filter()")
console.log("1. Filter the list of inventors for those who were born in the 1500's")
const eighteen_hundred_seventy_nine = inventors.filter(inventor => inventor.year == 1879)
console.log(`${eighteen_hundred_seventy_nine[0].first} ${eighteen_hundred_seventy_nine[0].last} born in ${eighteen_hundred_seventy_nine[0].year} and died in ${eighteen_hundred_seventy_nine[0].passed}`)
const fifteen_hundreds = inventors.filter(inventor => inventor.year >= 1500 && inventor.year <1600)
console.log(fifteen_hundreds)
fifteen_hundreds.forEach(inventor => console.log("1500's: " + inventor.first + " " + inventor.last))

console.log("// Array.prototype.map()")
console.log("2. Give us an array of the inventors' first and last names")

function get_first_and_last_name(inventor) {
  return  `${inventor.first} ${inventor.last}`
}
const first_and_last_name = inventors.map(inventor => get_first_and_last_name(inventor))
console.log(first_and_last_name)

console.log("Array.prototype.sort()")
console.log("// 3. Sort the inventors by birthdate, oldest to youngest")
const oldest_to_youngest = inventors.sort(function(a, b) {return a.year - b.year})
console.log(oldest_to_youngest)

console.log("// Array.prototype.reduce()")
console.log("4. How many years did all the inventors live?")
const how_long_lives = inventors.reduce(function(prev, curr) { // it takes the previous value (initially zero) and the current
  return prev + (curr.passed - curr.year)
}, 0) // FIRST TIME is set to ZERO
console.log(how_long_lives)

const how_long_each = inventors.reduce(function(object, inventor) {
  object[name = `${inventor.first} ${inventor.last}`] = (inventor.passed - inventor.year);
  return object
}, {})
console.log(how_long_each)

// 5. Sort the inventors by years lived
const sort_by_long_lives = inventors.sort(function(a, b) {
  //sorting from old to young
  return ((b.passed - b.year) - (a.passed - a.year))
})
console.log(sort_by_long_lives)

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// 7. sort Exercise
// Sort the people alphabetically by last name
// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
