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

(usersDatabase.push(userData))







 console.log(usersDatabase,typeof usersDatabase)
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
     datas = d
   });
    req.on("end",()=>{
  
        usersDatabase.forEach(() =>{
          part = parts[0]
           datas= JSON.parse(datas)
        usersDatabase =  JSON.parse(usersDatabase)
     if (usersDatabase.id == part){
              usersDatabase.name = datas.name
              usersDatabase.year = datas.year
              console.log(usersDatabase)

              // Here converting object to array

              // let entries = Object.entries(usersDatabase)
              // console.log(entries,typeof entries)
              // entries = JSON.stringify(entries)
              // usersDatabase.push(entries)
//  usersDatabase = [usersDatabase]
              // console.log(usersDatabase)
            //  usersDatabase =  JSON.stringify(usersDatabase)
            //  console.log(usersDatabase)
           }
       
        }
        )

    
        res.end("Your data is updated")
      }
      )
     
    
    }
 });

server.listen(1080);

