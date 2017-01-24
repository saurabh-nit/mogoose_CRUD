
var express = require('express');
var router = express.Router();
var Student = require("../models/student");

/* GET home page. */


router.get('/student/add', function(req, res, next) {
  res.render('add');
});


router.post('/student/add',function(req,res){
     var data = req.body;        // data coming from client
     //res.send(std1);          // send response to clint
     //console.log(std1);       // will show on server terminal
     var student = new Student(data);
     student.save(function(err,result){
    //   console.log(err);
             if(err){
                return res.json({
                              error : true,
                              reason : err,
                               });
           }else{
                return res.json({
                              error : false,
                              });
                }
        });
  });

router.get('/student/list', function(req, res, next) {

      Student.find({ }).exec(function(err,students){
        if(err)
            {}
        else {
            res.render('list', { student : students });
        //  return res.json(students);
             }
      })

});

router.get('/student/edit/:studentId', function(req, res, next) {
        //res.send('777777777')
        Student.findOne({_id:req.params.studentId}).exec(function(err,student){
        return res.render("edit",{student : student});
      })
});


router.delete('/student/:studentId', function(req, res) {

        console.log('on server');

        Student.remove({_id:req.params.studentId},function(err){
            if(err){
              console.log("error");
              }
            else{
              return res.redirect('/student/list');
            }
        });
   });






router.put('/student/edit/:studentId', function(req, res, next) {

       var data = req.body;
       Student.findByIdAndUpdate({ _id:req.params.studentId }, data , { multi: false }, function(err) {
       if(err){
        // console.log(err);
        return res.json({error: true, reason: err})
         }
       else{
        //  res.send('Data Updated Successfully.');
        return res.json({error: false})
       }
     });
  });
module.exports = router;
