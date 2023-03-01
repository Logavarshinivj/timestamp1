const fs=require("fs");
const quote="BE YOUR OWN COMPETITION"
const timestamp = Date.now();
 
const dateObject = new Date(timestamp);
const date = dateObject.getDate();
const month = dateObject.getMonth() +1;
const year = dateObject.getFullYear();
const hours = dateObject.getHours();
const minutes = dateObject.getMinutes();
const seconds = dateObject.getSeconds();
const res1=`${year}-${month}-${date} ${hours}:${minutes}:${seconds}`

    
    fs.writeFile(`./timestamp/${date}-${month}-${year}.html`,res1,(err)=>{
        console.log("done writing sample")
    })

 

