const express = require('express');
const bodyParser = require('body-parser');
const cors=require("cors");
const helmet=require("helmet");
const morgan=require("morgan");
const contactRoute=require("./routes/contact");


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



app.use("/info",contactRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
