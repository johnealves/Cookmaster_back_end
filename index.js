const app = require('./api/app');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.listen(PORT, () => console.log(`liesten at port ${PORT}`));