require("../src/db/mongoose");
const Task = require("../src/models/task");
/***********************************************************************/
// Task.findByIdAndDelete("5ee0802003637f48a44f446f")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
/************************************/

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  console.log(task);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("5ee0802003637f48a44f446f")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
