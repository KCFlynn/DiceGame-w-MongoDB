var express = require('express');
var router = express.Router();

/* POST to adduser. */
router.post('/adduser', function(req, res) {
  var db = req.db;
  var collection = db.get('playerlist');
  collection.insert(req.body, function(err, result){
    res.send(
      (err === null) ? { msg: '' } : { msg: err }
    );
  });
});


/* GET userlist. */
router.get('/userlist', function(req, res) {
  var db = req.db;
   var collection = db.get('playerlist');
   collection.find({},{},function(e,docs){
     res.json(docs);
   });
 });

 /* DELETE to deleteuser. */
 router.delete('/deleteplayer/:id', function(req, res) {
     var db = req.db;
     var collection = db.get('playerlist');
     var userToDelete = req.params.id;
     collection.remove({ '_id' : userToDelete }, function(err) {
       res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
     });
   });


//  router.???('/userlist', function(req, res) {
//  users.update({name: 'foo'}, {name: 'bar'})

  /* Modify a user 
router.put('/modifyuser/:id', function(req, res) {
  var db = req.db;
  collection = db.get('userlist');
  var userToModify = req.params.id;  // split the 1 arg passed up back into 2
  var bothnames = userToModify.split('*');
  var oldName = bothnames[0];
  var newName = bothnames[1];
 
  collection.update( 
    { fullname: oldName },  // query to pick which document to modify
    { $set: { "fullname": newName } }, function (err, doc, next) {  // can do more than one at a time
      res.sendStatus(200);
    })
});*/



module.exports = router;
