const express = require('express')
const app = express()
const fs = require('fs');




app.get('/', async (req, res) => {
    fs.readFile('car.json', (err, data) => {
        if (err) throw err;
        let cars = JSON.parse(data);

        const page = req.query.page
        const limit = req.query.limit
    
        const startIdx = (page - 1) * limit
        const endIdx = page * limit

        let result = {}

        result.next = {
            page: page + 1,
            limit: limit
        }

        result.previous = {
            page: page -1 ,
            limit: limit
        }

        result = cars.slice(startIdx, endIdx)
    
        res.json(result)


    }); 
}) 

app.listen(3000, () => {
    console.log('running');
})
// lookkaew 