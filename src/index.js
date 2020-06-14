const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
/********************************************************/
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
/**************************************/
// app.use((req, res, next) => {
//   res.status(503).send("Site is currently down. Check back soon!");
// });

/**************************************/
const multer = require("multer");
const upload = multer({
  dest: "images",
  limits: {
    fileSize: 1000000, //1mb to 1m byte
  },
  fileFilter(req, file, cb) {
    // if (!file.originalname.endsWith(".pdf")) {
    //   return cb(new Error("Please upload a PDF"));
    // }
    if (!file.originalname.match(/\.(doc|docx)$/)) {
      return cb(new Error("Please upload a Word document"));
    }
    cb(undefined, true); // true for upload
  },
});

app.post(
  "/upload",
  upload.single("upload"),
  (req, res) => {
    res.send({ msg: "file uploaded" });
  }
  //,
  // (error, req, res, next) => {
  //   res.status(400).send({ error: error.message });
  // }
);
/**************************************/
app.use(userRouter);
app.use(taskRouter);
app.use((error, req, res, next) => {
  res.status(500).send({ error: error.message });
});
/********************************************************/
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Server is up on port " + port);
});

// const Task = require("./models/task");
// const User = require("./models/user");
// const main = async () => {
//   // const task = await Task.findById('5c2e505a3253e18a43e612e6')
//   // await task.populate('owner').execPopulate()
//   // console.log(task.owner)

//   const user = await User.findById("5ee2da18e10ff86ca86db696");
//   await user.populate("tasks").execPopulate();
//   console.log(user.tasks);
// };

// main();