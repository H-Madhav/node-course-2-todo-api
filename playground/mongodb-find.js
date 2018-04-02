const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongoDb server');
    const db = client.db('TodoApp');

    db.collection('Todos').find({completed: true}).toArray().then((docs)=> {
        console.log("Todos");
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch docs', err);
    });
    // client.close();
})
