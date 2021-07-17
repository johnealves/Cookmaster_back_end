const express = require('express');

const app = express()

const PORT = process.env.PORT || 3000;

// app.use(
//   cors({
//     origin: `*`,
//     methods: [GET, POST, PUT, DELETE],
//     allwedHeaders: ['Authorization'],
//   })
// );

app.get('/', (req, res) =>{
  res.send('Vamo que vamo!!!')
})


app.listen(PORT, () => console.log(`liesten at port ${PORT}`));