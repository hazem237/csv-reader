/* 
    Object maker function , will take the array of user and make an object from it
*/
let objmaker = (arr) => {
    let keyArr = ['UserName', 'BirthDate', 'Address', 'MobileNumber', 'Gender'];
    let objArray = [];

    for (let i = 0; i < arr.length; i++) {
        let indexArray = [];
        indexArray.push(keyArr[i]);
        indexArray.push(arr[i]);
        objArray.push(indexArray);
    }
    return objArray;
}

var data = require("fs").readFileSync("./users.csv", "utf8");
data = data.split("\r\n");
for (let i in data) { data[i] = data[i].split(","); }

let users = [];
for (let i = 1; i < data.length; i++) {
    let obj = Object.fromEntries(objmaker(data[i]));
    users.push(obj);
}

console.log(users[1].UserName); // will print shaymaa , it worked !