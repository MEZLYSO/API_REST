const express = require("express");
const app = express();
const userRoute = require("./views/userRoute.js");

const PORT = 3000;

app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en ${PORT}`);
});
