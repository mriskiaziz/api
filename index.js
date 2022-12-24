const express = require("express");
const product = require("../api/product")

const app = express();

const PORT = process.env.PORT || 5050;

app.use("/coba", product)

app.listen(PORT, () => console.log(`Server running in port ${PORT}`));