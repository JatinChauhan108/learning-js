const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)                                                  // complete array dc_heros is inserted as an element in the array marvel_heros

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)                                  // elements of dc_heros are added in marvel_heros
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]                            // spread operator(...) expands the array (or any iterable like string) into pieces     

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]                    // multiple subarrays exist and there are subarrays inside subarrays   

const real_another_array = another_array.flat(Infinity)                          // flat() method creates a new array with all the subarray elements concatenated into it recursively upto the specified depth  
                                                                                 // depth can be given as a parameter and it should be given a required non-infinite number, but using Infinity opens up the elements of all the subarrays within subarrays
console.log(real_another_array);


// Below methods are used for data scraping
// Sometimes we receive data in some form other than the array (eg . string or object)
// So we need to convert that data into array

console.log(Array.isArray("Hitesh"))                                              // Used to check whether the passed argument is an array or not  
console.log(Array.from("Hitesh"))                                                 // used to create an array from the given iterable object
console.log(Array.from({name: "hitesh"}))                                         // objects given as such can't be converted into array directly without specifying whether we want to convert keys or the values in form of array(interesting topic from interview perspective)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));                                    // of() method returns a new array containing the given set of elements  