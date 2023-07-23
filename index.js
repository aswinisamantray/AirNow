// const http=require('http');
// const fs=require('fs');
// const requests=require('requests');
// // e6017ae1ece368f466e3744bef784516 API KEY
// // http://api.openweathermap.org/geo/1.0/direct?q=Pune,IN&appid=e6017ae1ece368f466e3744bef784516

// function replaceVal(tempVal,orgVal){
//     console.log(tempVal)
//     console.log(orgVal[0].name)
//     console.log(orgVal[0].country)
//     let location=tempVal.replace('{%location%}',orgVal[0].name);
//     location=location.replace('{%country%}',orgVal[0].country);
//     return location;
// }
// const homeFile=fs.readFileSync('home.html','utf-8');
// console.log(homeFile);
// const server=http.createServer((req,res)=>{
//     if(req.url==='/'){
//         // .on('data',(chunk)=> {
//             const objData=JSON.parse(chunk);
//             const arrData=[objData];
//                 const realTimedata= arrData.map((val)=>replaceVal(homeFile,val)).join("");
//                 console.log(realTimedata);
//             })
//         .on('end',(err)=> {
//             if (err) return console.log('connection closed due to errors', err);
//                  console.log('end');
//             });
//     }
// })

// server.listen(8000,'127.0.0.1')


