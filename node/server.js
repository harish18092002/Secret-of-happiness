// Importing packages

import http from "node:http";
import editJsonFile from "edit-json-file";
import asyn from "asyn";
import stringToJson from "string-to-json";
import { format } from "node:path";
import axios from "axios";
import { title } from "node:process";

// POST method to post the users data

let usersDatabase = []
let userData;
const server = http.createServer(function (req, res) {
  if(req.method === "POST" && req.url === "/create-user" ){
    req.setEncoding("utf8");
   req.on("data",(data)=>{
  userData = data;
});
req.on("end",()=>{
  usersDatabase.push(userData)
  console.log(userData)
})
  

res.end("Your data has been stored successfully")


  }


// Get method to find and display users

  if(req.method==="GET" && req.url==="/find-user"){
    usersDatabase.forEach((item,index)=>{
      if(index===usersDatabase.length-1)
      res.write(item);
      else res.write(item + ",");
          });
           res.end();
  }



// PUT method to update the user data

  if(req.method==="PUT"){
     const path = req.url;
     const parts = path.split('/').slice(1);
     console.log(parts)

  let newDb = usersDatabase.forEach((element =>{
    if(element.id===parts){
      req.on("datas",(datas)=>{
        element.id = datas;
        element.name = datas;
        element.year = datas;
      });
      req.on("end",()=>{
        usersDatabase.push(newDb)
        console.log(usersDatabase)
      })
      res.end("Your data is updated")
    }
  }))


    
  
  
  }
  
});

server.listen(1080);

/* const arr = [
    {
        id: 1,
        firstName: 'Abin',
        lastName: 'Wc',
        role: 'Software Engineer',
    },
    {
        id: 2,
        firstName: 'Siva',
        lastName: 'Raman',
        role: 'Software Engineer',
    },
    {
        id: 3,
        firstName: 'Harish',
        lastName: 'A',
        role: 'Software Engineer',
    },
    {
        id: 4,
        firstName: 'Harish',
        lastName: 'Kumar',
        role: 'Software Engineer',
    },
];
const newarray= arr.forEach((element=>{

if(element.id===3){
   element.firstName= "Surya"
    element.lastName= "prasad"
    console.log(element)
}
}))
 */
