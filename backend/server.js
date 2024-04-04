require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const copper200Routes = require('./copper/routes/copper200');
const cu200PureRoutes = require('./copper/routes/cu200Pure');
const copper01Routes = require('./copper/routes/copper01');
const copper05Routes = require('./copper/routes/copper05');
const copper09Routes = require('./copper/routes/copper09');
const copper09DHRoutes = require('./copper/routes/copper09DH');
const cuChemXRoutes = require('./copper/routes/cuChemX');
const cuEbaraRoutes = require('./copper/routes/cuEbara');
const sn_nexxRoutes = require('./tin/routes/sn_nexx');
const wedgesRoutes = require('./tin/routes/wedges');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/copper200', copper200Routes);
app.use('/cu200Pure', cu200PureRoutes);
app.use('/copper01', copper01Routes);
app.use('/copper05', copper05Routes);
app.use('/copper09', copper09Routes);
app.use('/copper09DH', copper09DHRoutes);
app.use('/cuChemX', cuChemXRoutes);
app.use('/cuEbara', cuEbaraRoutes);
app.use('/sn_nexx', sn_nexxRoutes);
app.use('/wedges', wedgesRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connect to db and listening on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });