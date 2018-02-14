var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://127.0.0.1:27017/hiboy';
MongoClient.connect(url,(err,db)=>{
    if(err) throw err;
    var thisBase = db.db('hiboy');
    thisBase.createCollection('product',(err,res)=>{
        if(err) throw err;
        insertData(thisBase,(result)=>{
            db.close();
        });
    });
});

//添加数据
var insertData = (db,callback)=>{
    var collection = db.collection("product");
    var data =
        [
            {"pro1":["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"]},
            {"pro2":["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"]},
            {"pro3":["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"]},
            {"pro4":["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"]},
            {"pro5":["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"]},
            {"pro6":["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"]},
            {"pro7":["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"]},
            {"pro8":["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"]},
            {"pro9":["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"]},
        ];
    collection.insert(data,(err,result)=>{
        if(err) throw err;
        callback(result);

    });
}
