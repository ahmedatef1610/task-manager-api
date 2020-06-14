const mongoose = require("mongoose");
const validator = require("validator");

/***********************************************************************/
mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
/**************************************************/
// const User = mongoose.model("User", {
//   name: {
//     type: String,
//   },
//   age: {
//     type: Number,
//   },
// });

// const User = mongoose.model("User", {
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error("Email is invalid");
//       }
//     },
//   },
//   password: {
//     type: String,
//     required: true,
//     minlength: 7,
//     trim: true,
//     validate(value) {
//       if (value.toLowerCase().includes("password")) {
//         throw new Error('Password cannot contain "password"');
//       }
//     },
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error("Age must be a postive number");
//       }
//     },
//   },
// });

const Task = mongoose.model("Task", {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
/**************************************************/
//1
// const me = new User({ name: "ahmed", age: 21 });
// const me = new User({ name: "   ahmed  ", email: "test@test.com   " });
// const me = new User({
//   name: "   ahmed  ",
//   email: "test@test.COm   ",
//   password: "phone098!",
//   age: 21,
// });
// me.save()
//   .then((res) => {
//     console.log(me);
//     console.log(res); // res===me
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });

//2
// const task = new Task({
//   description: "Learn the Mongoose library",
//   completed: false,
// });
// task
//   .save()
//   .then((res) => {
//     console.log(task);
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
