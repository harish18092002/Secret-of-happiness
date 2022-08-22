// Importing packages

import http from "node:http";


// POST method to post the users data

let usersDatabase =[];
let userData;
const server = http.createServer(function (req, res) {
  if(req.method === "POST" && req.url === "/create-user" ){
    req.setEncoding("utf8");
   req.on("data",(data)=>{
    data = JSON.parse(data)
  userData = data;
});
req.on("end",()=>{

(usersDatabase.push(userData))

console.log(usersDatabase)
   res.end("Your data has been stored successfully")
})
   }


// Get method to find and display users

  if(req.method==="GET" && req.url==="/find-user"){
    usersDatabase.forEach((item,index)=>{
 item = JSON.stringify(item)
      if(index===usersDatabase.length-1)
      res.write(item);
      else res.write(item + ",");
          });
          console.log("Datas has been sent to users")
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
    d = JSON.parse(d)
     datas = d
 });
    req.on("end",()=>{
      part = parts[0]
        usersDatabase.forEach((element) =>{
     if (element.id == part){
           element.name = datas.name
             element.year = datas.year
              console.log(usersDatabase)
              console.log(element)

     console.log("The updated data is", usersDatabase)
           }
       
        }
        )
  res.end("Your data is updated")
      }
      )
     
    
    }
 });

server.listen(1080);

