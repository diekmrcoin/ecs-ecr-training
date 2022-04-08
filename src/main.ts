import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send({ message: 'Hello World!' });
});

app.listen(port, () => {
  console.log(`Server running in the port ${port}`);
});
