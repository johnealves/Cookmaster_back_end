const app = require('./src/api/app');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`liesten at port ${PORT}`));