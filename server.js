const app = require('./app');
const multer = require('multer');


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}...`);
});