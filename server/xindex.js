const express = require('express');
const path = require('path');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const morgan = require('morgan');
const db = require('../database');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload({
  createParentPath: true
}))
app.use(cors());
app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.post('/picture', async (req, res) => {
  try {
    if(!req.files) {
      res.send({
        status: false,
        message: 'No files'
      })
    } else {
        const { picture } = req.files
        console.log(picture.mv, picture.name);
        picture.mv('./uploads/' + picture.name, function(err) {
          if (err) {
            console.log(err);
          }
        })

        res.send({
          status: ture,
          message: 'File is uploaded'
        })
      }
    } catch (e) {
      res.status(500).send(e)
    }
})


app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
