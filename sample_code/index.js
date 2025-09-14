// DCX Client Sample Code
console.log('Hello from DCX Client Sample!');

// Basic sample function
function greetUser(name = 'Developer') {
    return `Welcome to DCX Client Sample, ${name}!`;
}

// Demo the function
console.log(greetUser());
console.log(greetUser('DCX User'));

// Export for potential future use
module.exports = {
    greetUser
};