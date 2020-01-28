const express = require('express');
const multer = require('multer');
const fs = require('fs');

const upload = multer({ dest: '/tmp' });

const router = express.Router();

router.post('/upload',
  upload.single('DOCUMENT'),
  async (req, res) => {
    console.log(req.file);
    fs.readFile(req.file.path, 'utf8', (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err)
            return
        }
        console.log('File data:', jsonString) 
        const temp = JSON.parse(jsonString);
        console.log(temp.name);
    })
    res.send("got it");
  });

router.get('/', (req, res) => {
  res.render(
    'index',
    {
      title: 'hello',
    }
  );
});

module.exports.router = router;
