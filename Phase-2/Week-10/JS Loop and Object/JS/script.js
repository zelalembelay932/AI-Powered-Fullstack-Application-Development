let dicRoll = 0;
let attempts = 0;

console.log("Rolling the sice unit we go a 6...");


while (dicRoll !== 6) {

    dicRoll = Math.floor(Math.random() *6) + 1;
    attempts++;
    

    console.log(`Attemp ${attempts}: Rolled a ${dicRoll}`);
    
}
console.log(`Success! It look ${attempts} rolls to get a 6.`);