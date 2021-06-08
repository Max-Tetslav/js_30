const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log("hello world");
// Interpolated
console.log("Hello nice to meet %s", "you");
// Styled
console.log("%c FUCK YOU", "font-size: 30px; background: red;");
// warning!
console.warn("OH NO, OH NO, NO NO NO NO NO NO");
// Error :|
console.error("FUCK");
// Info
console.info('What a wonderful world');
// Testing
const p = document.querySelector("p");

console.assert(p.classList.contains("poo"), "No such class");
// clearing
console.clear();
// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together  
dogs.forEach(dog => {
    console.group(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});
// counting
console.count("Wes");
console.count("Wes");
console.count("fill");
console.count("fill");
console.count("Wes");
console.count("Wes");

// timing
console.time("fething data");
fetch("https://api.github.com/users/wesbos")
    .then(data => data.json())
    .then(data => {
        console.timeEnd("fething data");
        console.log(data);
    });

//table

console.table(dogs);