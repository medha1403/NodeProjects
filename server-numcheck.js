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
    if (num==1)
        res.send("Passed value is 1");
    else
        res.send("Passed value is not 1");

    //res.send("tagId is set to " + req.params.tagId1 + req.params.tagId2);
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})