import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
let bandname = ""; // Changed var to let

app.use(express.urlencoded({ extended: true })); // Only using express.urlencoded

function bandnamegenerator(req, res, next) {
    console.log(req.body);
    bandname = req.body.name + req.body.streetName; // Changed () to []
    next();
}

app.use(bandnamegenerator);

app.get("/", (req, res) => {
    console.log(__dirname + "/public/bandname.html");
    res.sendFile(__dirname + "/public/bandname.html");
});

app.post("/submit", (req, res) => {
    res.send(`<h1>Your band name is  ${bandname}</h1>`);
});

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// import express from "express";
// import bodyParser from "body-parser";
// import {dirname} from "path";
// import { fileURLToPath } from "url";
// import morgan from "morgan";
// const __dirname = dirname(fileURLToPath(import.meta.url));
// const app = express();
// const port = 3000;
// var bandname = "";

// app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.urlencoded({ extended: true }));
// app.use(morgan("combined"));

// function bandnamegenerator(req, res , next){
//     console.log(req.body);
//     bandname = req.body("name")+req.body("streetName");
//     next();
// }

// app.use(bandnamegenerator);


// app.get("/" ,(req,res)=>{
//     console.log(__dirname + "public/bandname.html");
//     res.sendFile(__dirname + "/public/bandname.html");
// });

// app.post("/submit" , (req,res)=>{
//    // console.log(req.body);
//    res.send(`<h1>Your band name is  ${bandname}</h1>`);
// });

// app.listen(port , ()=>{
//     console.log(`app is listening on port ${port}`);
// });