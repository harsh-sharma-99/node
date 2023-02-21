let fs = require("fs")

let data = { 
    title:"harsh",
    info:"dev"
};

// let stringData = JSON.stringify(data);
// let parseData  = JSON.parse(stringData);
// console.log("=========", stringData, parseData);

// fs.writeFileSync('1-json.json',stringData);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJson = dataBuffer.toString();
// const dataParse = JSON.parse(dataJson);
// console.log("-========", dataParse)


const JsonData = fs.readFileSync("1-json.json");
const DataString = JsonData.toString();
const DataParsed = JSON.parse(DataString);
DataParsed.name = "Manju";
DataParsed.age = 70;
console.log("=======", DataParsed);

const mainData = JSON.stringify(DataParsed)

fs.writeFileSync('1-json.json', mainData);
