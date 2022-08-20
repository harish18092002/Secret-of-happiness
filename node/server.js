// Importing packages

import http from "node:http";


// POST method to post the users data

let usersDatabase =[];
let userData;
const server = http.createServer(function (req, res) {
  if(req.method === "POST" && req.url === "/create-user" ){
    req.setEncoding("utf8");
   req.on("data",(data)=>{
  userData = data;
  // console.log(userData)
});
req.on("end",()=>{

(usersDatabase.push(JSON.parse(userData)))







 console.log(usersDatabase, typeof usersDatabase)
//  console.log(userData)
  
  res.end("Your data has been stored successfully")
})
  




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
     let datas ;
     let part;
     req.setEncoding("utf8")
    
  req.on("data",(d)=>{
       datas=d;
       console.log(datas)
      });
      req.on("end",()=>{
        console.log(usersDatabase)
        usersDatabase.forEach((element) =>{
          part = parts[0]
          console.log( part,typeof part)
          console.log(element.id,typeof element.id)
          
  
          if (element.id == part){
console.log("hi")
            element.name = datas.name

           }
      
        })
      
        res.end("Your data is updated")
      }
      )
     
    
    }
 });

server.listen(1080);

