const express = require("express");
const app = express();
const { route } = require("./views/userRoute.js");
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ export: true }));

app.use("/user", route);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en ${PORT}`);
});
