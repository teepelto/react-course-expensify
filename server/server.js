const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(process.env.PORT, process.env.IP, () => {
    console.log(`Server up at ${process.env.IP}:${process.env.PORT}`);
});