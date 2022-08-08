if(require.main === module) {
    const express = require('express')
    const cors = require('cors')
    const app = express()
    app.use(express.json())
    app.use(cors())
    require('./routes')(app);
    app.listen(2000, () => {
        console.log('API started')
    })
}