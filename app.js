require("dotenv").config();

const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo");
const expressLayouts = require("express-ejs-layouts");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const methodOverride = require("method-override");
const session = require("express-session");

const connectDB = require("./server/config/db");
connectDB();

const { isActiveRoute } = require("./server/helpers/routeHelpers");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride("_method"));

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
    }),
    // cookie: {maxAge:new Date(Date.now() + 3600000)}
    // Date.now() - 30 * 24 * 60 * 60 * 1000
  })
);

app.use(expressLayouts);
app.use(express.static("public"));
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.locals.isActiveRoute = isActiveRoute;

app.use("/", require("./server/routes/main"));
app.use("/", require("./server/routes/admin"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));