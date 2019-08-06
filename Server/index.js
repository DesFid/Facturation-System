;
const app = require('./app/app');
const bodyParser = require('body-parser');

// app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}));


process.env.PORT = process.env.PORT || 3001;

app.listen(process.env.PORT, () => {
    console.log(`The service is working in the port: ${process.env.PORT}`)
});