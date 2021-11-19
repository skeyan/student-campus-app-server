//import database setup utils
const createDB = require('./database/utils/createDB');
const seedDB = require('./database/utils/seedDB');

// Instantiate express application
const express = require("express");
const app = express();

// Our database instance
const db = require('./database');

// Express router
const apiRouter = require('./routes/index');


const syncDatabase = async () => {
  // Sync and seed
  try {
    await db.sync({force: true}); // TO-DO: Remove {force: true} when project is complete
    console.log('------Synced to db--------');
    await seedDB(); // TO-DO: Remove seedDB() when project is complete
    console.log('--------Successfully seeded db--------');
  } catch (err) {
    console.error('syncDB error:', err);
  }
}

const configureApp = async () => {
  // Handle request data
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // Mount apiRouter
  app.use("/api", apiRouter);

  // Handle page not found:
  // gets triggered when a request is made to
  // an undefined route
  app.use((req, res, next) => {
    const error = new Error("Not Found, Please Check URL!");
    error.status = 404;
    next(error);
  });

  // Error-handling middleware:
  // all express errors get passed to this
  // when next(error) is called
  app.use((err, req, res, next) => {
    console.error(err);
    console.log(req.originalUrl);
    res.status(err.status || 500).send(err.message || "Internal server error.");
  });

};

const bootApp = async () => {
  await createDB();
  await syncDatabase();
  await configureApp();
};

bootApp();


const PORT = 5000;
app.listen(PORT, console.log(`Server started on ${PORT}`));