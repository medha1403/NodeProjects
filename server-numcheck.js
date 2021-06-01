const express = require('express')
const app = express()
const port = 8779
//var num=inputs(2)

app.get('/numcheck', (req, res) => {
    res.send('<HTML><BODY><H1>Go to /number/:num to check if :num is odd or even</H1></BODY></HTML>')
})

app.get('/numcheck/:num1', (req, res) => {
    //console.log(req.query);
    //req.
    var num = req.params.num1;
    
    if (num%2==0){
        res.send("The number :num is even");
    }
    else{
        res.send("The number :num is odd");
    }
    //res.send("tagId is set to " + req.params.tagId1 + req.params.tagId2);
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})