//jshint esversion:6

const express=require("express");
const bodyParser=require("body-parser");
const ejs = require('ejs');

var items=[ ];

const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs"); // to check the ejs folder by engine
app.use(express.static("public"));
app.get("/",function(req,res) {

  var today = new Date();
  var options = {
    weekday:"long",
    year:'numeric',
    month:'long',
    day:'numeric'
  };
  var day = today.toLocaleDateString("en-IN",options);

      res.render("list",{kindofDay:day,newItemList:items});
});

app.post('/',function(req,res){
  var item= req.body.newItemList;
  items.push(item);
  res.render("list",{newItemList:items});
  res.redirect("/");
});

app.listen(3000,function(){
  console.log("server is running on port 3000");
});


// var currentday=today.getDay();
// var day =" ";
// if(currentday===0){
//   day="Sunday"
// }else if(currentday==1){
//   day="Monday"
// }else if(currentday==2){
//   day="Tuesday"
// }else if(currentday==3){
//   day="Wednesday"
// }else if(currentday==4){
//   day="Thrusday"
// }else if(currentday==5){
//   day="Friday"
// }else{
//   day="Saturday";
// }
//
// res.render('list',{kindofday:day});
//   if(currentday === 0 || currentday=== 6)
//   {
//     day="weekend";
//   }   else{
//     day="weekday";
//   }
//
