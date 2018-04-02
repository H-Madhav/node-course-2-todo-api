const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongoDb server');
    const db = client.db('TodoApp');
    //
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'madhav',
        age: 25,
        location: 'Gurugram'
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert User', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    })
    client.close();
})
