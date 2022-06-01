'use strict';

const express = require('express');
const app = express();

app.use('/health', require('./routes/health_checker'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server has started at port ${PORT}`));
