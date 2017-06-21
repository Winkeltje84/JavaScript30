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

console.log("// Array.prototype.filter()")
console.log("1. Filter the list of inventors for those who were born in the 1500's")
const eighteen_hundred_seventy_nine = inventors.filter(inventor => inventor.year == 1879)
console.log(`${eighteen_hundred_seventy_nine[0].first} ${eighteen_hundred_seventy_nine[0].last} born in ${eighteen_hundred_seventy_nine[0].year} and died in ${eighteen_hundred_seventy_nine[0].passed}`)

const fifteen_hundreds = inventors.filter(inventor => inventor.year >= 1500 && inventor.year <1600)
console.table(fifteen_hundreds)
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
console.table(oldest_to_youngest)

console.log("// Array.prototype.reduce()")
console.log("4. How many years did all the inventors live?")
const how_long_lives_total = inventors.reduce(function(total, curr) { // it takes the previous (total) value (initially zero) and the current
  return total + (curr.passed - curr.year)
}, 0) // total FIRST TIME is set to ZERO
console.log(how_long_lives_total)

const how_long_each = inventors.reduce(function(object, inventor) {
  object[name = `${inventor.first} ${inventor.last}`] = (inventor.passed - inventor.year);
  return object
}, {})
console.table(how_long_each)

console.log("5. Sort the inventors by years lived")
const sort_by_long_lives = inventors.sort((a, b) => {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  return lastGuy > nextGuy ? 1 : -1;
})
  //sorting from old to young
console.table(sort_by_long_lives)
console.log("below is ordered by years lived")
sort_by_long_lives.forEach(each => console.log(`${each.first} ${each.last}: ${each.passed - each.year} years`))

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    // USE BELOW CODE IN THE DEV-TOOLS ON THE WIKIPEDIA WEBSITE:
// console.log("BELOW CODE CAN ONLY BEEN PERFORMED IN CONSOLE DEV-TOOLS ON WIKIPEDIA SITE, SEE COMMENTS")
// const category = document.querySelector('.mw-category')
    // ABOVE finds the DOM element with class "mw-category which hass all links including names"
// const links = [...category.querySelectorAll('a')]
    //using the ES6 SPREAD OPERATOR to change NodeList into Array on which we can use .map()
    // ABOVE finds all 'a' elements within the category constant found earlier
// links[0].textContent
    // ABOVE finds the textContent of the first 'a'
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));
// console.log(de)


// 7. sort Exercise
// Sort the people alphabetically by last name
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

const alphabetically = people.sort(function(prev, next) {

  const [prev_last, prev_first] = prev.split(', ') //splits each string into two parts which are assigned to two constants
  const [next_last, next_first] = next.split(', ')
  // console.log(prev_last, prev_first, " & ", next_last, next_first);
  return prev_last < next_last ? -1 : 1;
})
console.log(alphabetically);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'motorbike', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
const transportation = data.reduce((obj, item) => {
  // console.log(item)
  if (!obj[item])
    obj[item] = 0;  // if the empty object doesn't have this item yet: create it with initial value of zero
  obj[item]++  // add one to this item
  return obj
}, {})
console.log(transportation)
