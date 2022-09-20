var data = require("fs").readFileSync("./users.csv", "utf8");
data = data.split("\r\n");
for (let i in data) { data[i] = data[i].split(","); }

let objmaker = (arr) => {
    let keyArr = ['UserName', 'BirthDate', 'Address', 'MobileNumber', 'Gender'];
    let BigArray = [];

    for (let i = 0; i < arr.length; i++) {
        let objArray = [];
        objArray.push(keyArr[i]);
        objArray.push(arr[i]);
        BigArray.push(objArray);
    }
    return BigArray;
}

let users = [];
for (let i = 1; i < data.length; i++) {
    let obj = Object.fromEntries(objmaker(data[i]));
    users.push(obj);
}

