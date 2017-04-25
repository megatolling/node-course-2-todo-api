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

    /*    db.collection('Todos').findOneAndUpdate({
            _id: new ObjectId('58fe9e721f02d0e062e482b2')
        }, {
            $set: {
                completed: true
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });*/

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectId('58f958d9ca35d00c2e205f8b')
    }, {
        $set: {
            name: 'Tony'
        },
        $inc: {
            age: 5
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //    db.close();
});
