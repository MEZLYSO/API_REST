const express = require("express");
const app = express();
const { route } = require("./views/userRoute.js");
const PORT = 3001;
app.use(express.json());
app.use(express.urlencoded({ export: true }));

app.route("/", (req, res) => {
  res.render("index", { title: "Home", message: "Hola" });
});

app.use("/user", route);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en ${PORT}`);
});
