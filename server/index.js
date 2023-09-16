const express = require('express');
const bodyParser = require('body-parser');
const cors=require("cors");
const helmet=require("helmet");
const morgan=require("morgan");
const fs=require("fs")
const db=require("./utlis/database");

const app = express();
const port = process.env.PORT || 3000;

// Parse JSON and URL-encoded data
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.execute("selec * from table");

// Define a sample route to handle POST requests
app.post('/loginData', (req, res) => {
    let arr=[];
    const data = req.body;
    let oldArray = fs.readFileSync("chat.json");
    oldArray = JSON.parse(oldArray);
    
    // Check if the data already exists in the array based on a unique identifier
    const isDuplicate = oldArray.some((item) => item.message === data.message);
    
    if (!isDuplicate) {
      // Push the new data into the array
      oldArray.push(data);
    
      // Write the updated data back to the file
      fs.writeFileSync("chat.json", JSON.stringify(oldArray));
    }

  });

  app.get("/",(req,res)=>{

    let oldArray = fs.readFileSync("chat.json");
    oldArray = JSON.parse(oldArray);
   console.log(oldArray);
    res.json(oldArray);

    
  })

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
