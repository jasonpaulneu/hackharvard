import app from "./api/app.js";

const port = process.env.PORT || 9000;

app.listen(port, () => {
    console.log(`Server running at PORT ${port}`);
  });