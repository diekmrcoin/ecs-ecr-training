import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;
const manualCount = 2;
app.get('/', function (req, res) {
  res.send({ message: `Hello Random World[${manualCount}]: ${Math.floor(Math.random() * 100)}` });
});

app.listen(port, () => {
  console.log(`Server running in the port ${port}`);
});
