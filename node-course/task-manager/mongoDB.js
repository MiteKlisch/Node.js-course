//CRUD create read update delete

const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectId();

// console.log(id.id.length);
// console.log(id.toHexString().length);

MongoClient.connect( connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
       return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName);
    
    // db.collection('users').deleteMany({
    //     age: 19
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error)
    // })
    db.collection('tasks').deleteOne({
        _id: new ObjectId("5daf723701a46c1ab85f9947")
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error)
    })
})