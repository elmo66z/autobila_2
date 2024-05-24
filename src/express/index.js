const express = require("express");
const Port = 3090;
const app = express();
const cors = require("cors");
const connection = require("./db");

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

app.listen(Port, () => {
  connection(app).then(() => {
    console.log("Start .....");
  });
});

app.get("/", async (req, res) => {
  try {
    const collection = await app.locals.db.collection("Engine");
    const data = await collection.find().toArray();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal server error");
  }
});

// app.post("/", async (req, res) => {
//   try {
//     const user = req.body;
//     // user.id = data[data.length-1].id +1
//     const collection = await app.locals.db.collection("Engine");
//     const newd = await collection.insert_one(user);
//     res.status(200).json(newd);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json("Internal server error");
//   }
// });



//insert
// app.post('/', async (req, res)=> {
//     const Engine = req.body
//     try {
//         const result = await app.locals.db.collection("Engine").insertOne(Engine);
//         console.log("User inserted:", Engine);
//         res.status(200).json(result);
//       } catch (error) {
//         console.error("Error inserting Engine:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
// })

//insert
app.post('/', async (req, res) => {
  const en = req.body;
  const collection = await app.locals.db.collection("Engine");

  try {
    const result = await collection.insertOne(en);
    const insertedDocument = result;

    console.log("Engine inserted:", insertedDocument);
    res.status(200).json(insertedDocument);
  } catch (error) {
    console.error("Error inserting Engine:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

