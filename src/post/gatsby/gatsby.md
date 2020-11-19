---
title: "The great gatsby Bootcamp"
date: "2020-11-04"
---

### This a tutorial for creating server using [Node.js]() and [Express.js]()
- This will be mainly a code walk through :

<img src="./grass.jpg" height="80" width="100"/>

### Let's jump into it:

```javascript
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
app.get('/',(req,res)={
return res,end("This is my firts server");
})
app.listen(PORT,(err)=>{
    if(err){
        console.log("Error in creating the server :",err.message);
    }
    console.log("Server is running at port:",PORT);
})
```
*Happy Coding 😎*