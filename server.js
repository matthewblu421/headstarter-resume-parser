const express = require('express');
const multer = require('multer');

const app = express();

const fileStorageEngine = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './resumes');
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + '--' + file.originalname);
	}
});

const upload = multer({ storage: fileStorageEngine });

app.post('/single', upload.single('resume'), (req, res) => {
	console.log(req.file);
	res.send('Single Resume Upload success');
});

app.post('/multiple', upload.array('resumes', 3),(req,res) => {
    res.send('Multiple File Upload Success');
    console.log(req.files);
})
app.listen(5000);
