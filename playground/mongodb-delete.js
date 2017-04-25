//const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectId
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany

    /*    db.collection('Todos').deleteMany({
            name: 'Eat Lunch'
        }).then((result) => {
            console.log(result);
        });*/

    // deleteOne
    /*    db.collection('Todos').deleteOne({
            name: 'Eat Lunch'
        }).then((result) => {
            console.log(result);
        });*/

    // findOneAndDelete
    /*    db.collection('Todos').findOneAndDelete({
            completed: false
        }).then((result) => {
            console.log(result);
        });*/

    /*    db.collection('Users').findOneAndDelete({
            _id: ObjectId("58fcd731323e850e3b98d561")
        }).then((result) => {
            console.log(result);
        });*/

    /*    db.collection('Users').deleteMany({
            name: 'Tony'
        }).then((result) => {
            console.log(result);
        });*/

    //    db.close();
});
