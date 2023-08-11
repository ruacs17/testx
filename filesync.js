const {readFile, writeFile} = require('fs');

readFile('./txsamp.txtx','utf8',(err, result)=>{
    if(err)
        console.log(err)
    else{
        console.log(result)   
    }
});