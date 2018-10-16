const express = require('express') // require è una sorta in import
const app = express() // app è il nostro server

const PORT = process.env.PORT || 3000 // porta ha due valori : process.env.PORT (variabile definata dal sistema di HEROKU di solito 80) e 3000 porta locale


var courses_offered = [{id: 21, name: 'HCI'}, {id: 28, name:'sweng'}]

//root
app.get('/', (req, res) => res.send('Hello World!')) 
 
app.get('/courses', (req, res) => {
   res.json(courses_offered)
})

// fuzione 
app.listen(PORT, () => console.log('Example app listening on port'+ PORT))
