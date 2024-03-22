const express = require('express');
const path = requrie('path');
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, '..', 'build')));

// Send index.html for any other requests
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});