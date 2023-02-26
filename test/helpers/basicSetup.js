const mongooseConnect = require('../../helpers/dbConnect');

let basicSetup = () => {
  beforeAll((done)=>{
    mongooseConnect.dbconnect()
        .once('open', ()=>done())
        .on('error',(error) => done(error))
  })
  // beforeEach((done)=>{
  //   mongoose.connection.db.listCollections({name: "bookStore"})
  //     .next((error,collection)=>{
  //       if(collection){
  //         mongoose.connection.db.dropCollection("bookStore")
  //         .then(() => done())
  //         .catch((err) => done(err))
  //       }
  //       else{
  //         done(error)
  //       }
  //     })
  // })

  afterAll((done)=>{
    mongooseConnect.dbclose()
        .then(()=>done())
        .catch((err)=>done(err))
  })
}

module.exports = basicSetup;
