

function checkDogs(dogsJulia, dogsKate) {
    const updatedDogsJulia = dogsJulia.slice(1, -2);

    const joined = [...updatedDogsJulia, ...dogsKate];

    console.log(`${joined}  ${updatedDogsJulia}`);

    joined.forEach((joined) => {
        // if (joined > 3) {
        //     (`Dog number#1's an adult, and is ${joined} years old`);
        // }
        // else {
        //     console.log(`Dog number#1's still a puppy, and is ${joined} years old`);
        // }
        console.log(joined > 3 ? `Dog number#1's an adult, and is ${joined} years old` : `Dog number#${1}s still a puppy, and is ${joined} years old`);
    });
}

let juliasDogs = [3, 5, 2, 12, 7];
let katesDogs = [4, 1, 15, 8, 3];

checkDogs(juliasDogs, katesDogs);