const users = [
    { id: 1, name: "Alice", age: 25, isActive: true, scores: [85, 92, 88] },
    { id: 2, name: "Bob", age: 30, isActive: false, scores: [70, 75, 80] },
    { id: 3, name: "Charlie", age: 35, isActive: true, scores: [95, 90, 93] },
    { id: 4, name: "Diana", age: 28, isActive: true, scores: [60, 65, 70] },
    { id: 5, name: "Eve", age: 40, isActive: false, scores: [80, 85, 88] }
];

function processUsers(){

// ============================== Filter Active Users Start ============================ //
let activeUsers = [];

users.map((user)=>{
    if(user.isActive){
        activeUsers.push(user)
    }
    
})
console.log(activeUsers);


activeUsers.map((item)=>{
    
    activeUsersName = document.querySelector('.activeUsersName');
    activeUsersName.innerHTML +=`
    <tr>
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.age}</td>
    <td>${item.isActive}</td>
    <td>${item.scores}</td>
    </tr>
    `
// ============================== Filter Active Users End ============================ //


// =========================================== Calculate Average Score start ======================================== //
let elementsArr = Array.from(item.scores);

let averageNumbers = 0;

for(let i = 0 ; i <elementsArr.length ; i++){
    averageNumbers += elementsArr[i] / item.scores.length;
}

console.log(averageNumbers);

item.averageScore = averageNumbers;
let AvScore = document.querySelector('.AvScore');

AvScore.innerHTML += `
<tr>
<td>${item.id}</td>
<td>${item.name}</td>
<td>${item.scores}</td>
<td>${item.averageScore}</td>
</tr>
`

})

// =========================================== Calculate Average Score End ======================================== //



//  ============================================= Find Top Performer Start ================================================== //

const topPerformer = activeUsers.reduce((top, user) => {
    return !top || user.averageScore > top.averageScore ? user : top;
}, 0);
console.log(topPerformer);


let greatPerformer = document.querySelector('.greatPerformer');
greatPerformer.innerHTML +=`
                <tr>
                    <td>${topPerformer.id}</td>
                    <td>${topPerformer.name}</td>
                    <td>${topPerformer.age}</td>
                    <td>${topPerformer.scores}</td>
                    <td>${topPerformer.averageScore}</td>
                </tr>
`
//  ============================================= Find Top Performer End ================================================== //

// ===================================================== Group Users by Age Range start ============================================== //
let ageGroups = {'Under30':[], 'above30': []}

users.map((AgeGroup)=>{
    if(AgeGroup.age < 30){
        ageGroups.Under30.push(AgeGroup)
    }
    else{
        ageGroups.above30.push(AgeGroup)
        
    }
})

// ===================================================== Group Users by Age Range End ============================================== //



let  OutputFormat = {
    activeUsers : [activeUsers],
    topPerformer: [topPerformer],
    ageGroups: [ageGroups]
}

console.log( OutputFormat);

return( OutputFormat)


}

processUsers();