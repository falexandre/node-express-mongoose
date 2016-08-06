var express = require('express');
var router = express.Router();
var Person = require('./../models/Person');

//find all
router.get('/', function(req, res) {
    Person.find({}, function(err, people) {
       if(err) {
           return;
       }

       res.send(people);
    });
});

//findOne
router.get('/:id', function(req, res) {
   Person.findById(req.params.id, function(err, person) {
      if (err) {
          return;
      }

       res.send(person);
   });

   // Person.findOne({
   //     _id: req.params.id
   //  }, function(err, person) {
   //      if (err) {
   //          return;
   //      }
   //
   //      res.send(person);
   //  });
});

router.post('/', function(req, res) {

    // person.save(person, function(err, person) {
    //     if (err) {
    //         return;
    //     }
    //
    //     res.send(person);
    // });

   // Person.create({
   //  name: {
   //      firstname: 'Wesley',
   //      lastname: 'Willians'
   //  },
   //     age: 23
   // }, function(err, person) {
   //     if (err) {
   //         return;
   //     }
   //     res.send(person);
   // })
});

router.put('/:id', function(req, res) {

    Person.findOneAndUpdate({
        _id: req.params.id
    }, {
        name: {
            firstname: 'Thed',
            lastname: 'Talks'
        }
    }, function(err, person) {
       if (err) {
           return;
       }

        res.send(person);
    });

    // Person.update({
    //     _id: req.params.id
    // }, {
    //     name: {
    //          firstname: 'Bread',
    //          lastname: 'Paints'
    //     }
    // }, function(err, person) {
    //     if (err) {
    //         return;
    //     }
    //
    //     res.send(person);
    // });
});

router.delete('/:id', function(req, res) {
    
    Person.findOneAndRemove({
        _id: req.params.id
    }, function(err) {
        if (err) {
            return;
        }

        res.send(req.params.id);
    });

    // Person.remove({
    //     _id: req.params.id
    // }, function(err) {
    //     if(err) {
    //         return;
    //     }
    //
    //     res.send(req.params.id);
    // });
});

module.exports = router;