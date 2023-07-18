// const express = require("express");
// const app = express();
// app.all("/", (req, res) => {
//   console.log("Just got a request!");
//   res.send("Yo!");
// });
// app.listen(process.env.PORT || 3000);

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const connectDatabase = require("./config/connectDatabase");
const { appendData } = require("./scripts/append");

const YouTubeRouter = require("./routes/youtubes");

const app = express();

app.all("/", (req, res) => {
  console.log("Just got a request!");
  res.send(
    "Hello to get data write /showyoutube and to search with title or description /showyoutube?search=title or description or aplly pagination /showyoutbe/page=page_no for both apply showyoutube?search=title/description&page=page_no"
  );
});

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.get("/hello", (req, res, next) => {
  res.send("Hello there");
  next();
});



app.use("/showyoutube", YouTubeRouter);

const port = process.argv[2] || 3035;

connectDatabase().then(() => {
  app.listen(port, () => {
    setInterval(() => {
      appendData();
    }, 10000);

    console.log(
      `Server listening to http requests on http://localhost:${port}`
    );
  });
});
