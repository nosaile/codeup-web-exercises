const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const filterUsers = users.filter(function (n){
    return n.languages.length >= 3
});
console.log(filterUsers);


//Use .map to create an array of strings where each element is a user's email address
const mapUsers = users.map(n => n.email );
console.log(mapUsers);


//Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
const xpMap = users.map(n => n.yearsOfExperience);
console.log(xpMap);

const reduceUsers = xpMap.reduce((total, cumulative) =>{
    return total + cumulative;
}, 0);
console.log(reduceUsers)

const reduceEmails = mapUsers.reduce(
    function (x, y) {
        return x.length > y.length ? x : y;
    }
);
console.log(reduceEmails);


const mapNames = users.map(n => n.name );
console.log(mapNames);




