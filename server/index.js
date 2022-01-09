const express = require('express')
const cors = require('cors');
const PORT = 8080
const app = express()
const rowRouter = require('./routes/row.routes')

app.use(cors());
app.use(express.json())
app.use('/api', rowRouter)
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))