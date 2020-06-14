// CRUD create read update delete
// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID, ObjectId } = require("mongodb");

/*******************************************************/
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id = new ObjectID(); //12-byte
// console.log(id);
// console.log(id.length); //undefined
// console.log(id.id);
// console.log(id.id.length); //12
// console.log(id.toHexString());
// console.log(id.toHexString().length); //24

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);

    //1 insertOne
    // db.collection("users").insertOne(
    //   {
    //     name: "Andrew",
    //     age: 27,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    //2 insertMany
    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "ahmed",
    //       age: 21,
    //     },
    //     {
    //       name: "atef",
    //       age: 60,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert documents!");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    //3 insertMany
    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "Clean the house",
    //       completed: true,
    //     },
    //     {
    //       description: "Renew inspection",
    //       completed: false,
    //     },
    //     {
    //       description: "Pot plants",
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert tasks!");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    //4 findOne
    // db.collection("users").findOne(
    //   { _id: new ObjectID("5edfbd4986e7670e902d7fc9") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Unable to fetch");
    //     }
    //     console.log(user);
    //   }
    // );

    //5 findOne
    // db.collection("users").findOne({ name: "ahmed", age: 1 }, (error, user) => {
    //   if (error) {
    //     return console.log("Unable to fetch");
    //   }
    //   console.log(user);
    // });

    //6 find
    // db.collection("users")
    //   .find({ age: 21 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    //7 findOne
    // db.collection("tasks").findOne(
    //   { _id: new ObjectID("5edfc099cefe40677c3f8af1") },
    //   (error, task) => {
    //     console.log(task);
    //   }
    // );
    
    //8 find - toArray
    // db.collection("tasks")
    //   .find({ completed: false })
    //   .toArray((error, tasks) => {
    //     console.log(tasks);
    //   });

    //9 find - count
    // db.collection("tasks")
    //   .find({ completed: false })
    //   .count((error, count) => {
    //     console.log(count);
    //   });

    //10 updateOne
    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectId("5edfbd4986e7670e902d7fc9"),
    //     },
    //     {
    //       $inc: {
    //         age: 1,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    //11 updateOne
    // const updatePromise = db.collection("users").updateOne(
    //   {
    //     _id: new ObjectId("5edfbd4986e7670e902d7fc9"),
    //   },
    //   {
    //     $set: {
    //       name: "ahmed atef",
    //     },
    //   }
    // );

    // updatePromise
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    //12 updateMany
    // db.collection("tasks")
    //   .updateMany(
    //     {
    //       completed: false,
    //     },
    //     {
    //       $set: {
    //         completed: true,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result.modifiedCount);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    //13 deleteMany
    // db.collection("users")
    //   .deleteMany({
    //     age: 60,
    //   })
    //   .then((result) => {
    //     console.log(result.deletedCount);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    //14 deleteOne
    // db.collection("tasks")
    //   .deleteOne({
    //     description: "Clean the house",
    //   })
    //   .then((result) => {
    //     console.log(result.deletedCount);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    //15
  }
);
