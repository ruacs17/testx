const mqtt = require("mqtt");
const conn = require('./db');
var client = mqtt.connect('mqtt://127.0.0.1:1883');

let curdt = new Date();
let year = curdt.getFullYear();
console.log(curdt.getHours()+" "+curdt.getMinutes());
//testssss
client.on("connect",function(){
    client.subscribe("exampl");
    console.log("Subscription OK!");
});

client.on("message",function(topic,message){
    // conn.execute("SELECT * FROM users WHERE user_id=? LIMIT 2",[message.toString()], function(err, result, fields){
    //     if(err)throw err;
    //     var lastnme = result[0].lname; 

    //     conn.execute("SELECT * FROM users WHERE lname=?",[lastnme],function(err, result, fields){
    //         if(err)throw err;
    //         console.log(result.length)
    //         client.publish('respns',lastnme);
    //     });
    // });
    
    console.log(topic.toString()+" "+message.toString());
});

