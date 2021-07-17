const app = require('./api/app');

const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: `*`,
    methods: [GET, POST, PUT, DELETE],
    allwedHeaders: ['Authorization'],
  })
);

app.listen(PORT, () => `liesten at port ${PORT}`);