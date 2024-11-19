const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 3000;

app.get('/data.txt', async (req, res) => {
    const response = await fetch('https://raw.githubusercontent.com/thdennis/PowerShellGitHubPage/main/data.txt');
    const data = await response.text();
    res.send(data);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
