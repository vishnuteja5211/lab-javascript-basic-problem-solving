// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

var prograd1 = "yashwanth";
console.log(prograd1);
var prograd2 = "vishnu";
console.log(prograd2);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
if (prograd1.length > prograd2.length) {
    console.log("prograd1 has longest name");
} else {
    console.log("prograd2 has longest name");
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 

function checkvowels(str) {
    var vowels = "aeiouAEIOU";
    var vowelAlphabhets = "";
    var vowelIndex = "";
    for (i = 0; i < str.length; i++) {
        for (j = 0; j < vowels.length; j++) {
            if (str[i] == vowels[j]) {
                vowelAlphabhets = vowelAlphabhets + str[i] + " ";
                vowelIndex = vowelIndex + i + " ";
            }
        }
    }
    if (vowelIndex.length == 0) {
        console.log("no vowels");
    } else {
        var output = vowelAlphabhets + vowelIndex;
        //var output22 = " ";
        //for (i = 0; i < output.length; i++) {
        //  output22 = output22 + output.shift();
        // }
        console.log(str + " " + output);
    }
}
checkvowels("Yaswanth");
checkvowels("Vishnu");



// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
var strings = 'abCD12$#!';
var i = 0;
var character = '';
while (i < strings.length) {
    character = strings.charAt(i);
    if (!isNaN(character * 1)) {
        console.log('character is numric');
        alert(strings.charAt(i));
    } else {
        if (character == character.toUpperCase()) {

            alert(strings.charAt(i));
        }
        if (character == character.toLowerCase()) {

            console.log(strings.charAt(i));
        }
    }
    i++;
}


// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
let drivername = "yashwanth";
console.log(drivername.toLocaleUpperCase());

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"

function reverse(s) {
    return s.split("").reverse().join("");

}
reverse("vishnu")

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
var str1 = "Hello ";
var str2 = "world!";
var res = str1.concat(str2);
console.log(res);

var rev = str2.concat(str1);
console.log(rev);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
var str1 = ("yashwanth", "vishnu");

var n = str1.sort();
console.log(n);

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.


var lorem = [Lorem ipsum dolor sit amet consectetur adipisicing elit.Laudantium ullam eos laboriosam labore magnam beatae qui hic modi et, quae nisi obcaecati deserunt voluptate sed iusto officiis dolorem cupiditate harum!
 Magnam, voluptatum praesentium voluptatibus ipsam sit voluptates reiciendis consequuntur pariatur, quisquam culpa maiores laborum libero nisi earum porro facilis.Fugiat incidunt odio deleniti voluptate saepe hic commodi, dolore laboriosam ipsum.
 Pariatur similique amet nobis error blanditiis architecto ex tempora repellat quia.Veniam, veritatis nisi, ipsam deserunt sunt obcaecati soluta reprehenderit, ab iure natus fugiat.Unde facere dolor cumque debitis similique!];

// Make your program count the number of words in the string.
function WordCount(str) {
    return str.split(" ").length;
}

console.log(WordCount("Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ullam eos laboriosam labore magnam beatae qui hic modi et, quae nisi obcaecati deserunt voluptate sed iusto officiis dolorem cupiditate harum! Magnam, voluptatum praesentium voluptatibus ipsam sit voluptates reiciendis consequuntur pariatur, quisquam culpa maiores laborum libero nisi earum porro facilis. Fugiat incidunt odio deleniti voluptate saepe hic commodi, dolore laboriosam ipsum.Pariatur similique amet nobis error blanditiis architecto ex tempora repellat quia. Veniam, veritatis nisi, ipsam deserunt sunt obcaecati soluta reprehenderit, ab iure natus fugiat. Unde facere dolor cumque debitis similique! "));

// Make your program count the number of times the Latin word et appears.

var sentence = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ullam eos laboriosam labore magnam beatae qui hic modi et, quae nisi obcaecati deserunt voluptate sed iusto officiis dolorem cupiditate harum! Magnam, voluptatum praesentium voluptatibus ipsam sit voluptates reiciendis consequuntur pariatur, quisquam culpa maiores laborum libero nisi earum porro facilis. Fugiat incidunt odio deleniti voluptate saepe hic commodi, dolore laboriosam ipsum.Pariatur similique amet nobis error blanditiis architecto ex tempora repellat quia. Veniam, veritatis nisi, ipsam deserunt sunt obcaecati soluta reprehenderit, ab iure natus fugiat. Unde facere dolor cumque debitis similique!';
var word = 'et';
var pattern = new RegExp('\\b' + word + '\\b', 'ig');
var count = (sentence.match(pattern) || []).length;

console.log(count);

// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".
function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}
palindrome("A man, a plan, a canal. Panama");

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 

