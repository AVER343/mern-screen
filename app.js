const express = require('express')
const app = express()
const auth = require('./middlewares/auth')
var session = require('express-session');
const cookieParser = require('cookie-parser');
const cors =require('cors')
let activeSessions=[]
const props=[
   {
   "id": "5eaa781456b9935e0b4fbc93",
   "app_name": "ORBIN"
   },
   {
   "id": "5eaa781424060409687ba049",
   "app_name": "ZILCH"
   },
   {
   "id": "5eaa7814ac87f820fa6fcce1",
   "app_name": "ZOXY"
   },
   {
   "id": "5eaa7814d19b4a7ec4ba5c49",
   "app_name": "SUPPORTAL"
   },
   {
   "id": "5eaa781483c7bc55a431f217",
   "app_name": "GONKLE"
   },
   {
   "id": "5eaa7814a9407212d5c74d8d",
   "app_name": "ZENTILITY"
   },
   {
   "id": "5eaa7814af7ae3086119c7dc",
   "app_name": "OBLIQ"
   },
   {
   "id": "5eaa7814a9f8e085c1055f86",
   "app_name": "APPLICA"
   },
   {
   "id": "5eaa781408f38cbe5745d37f",
   "app_name": "LUNCHPAD"
   },
   {
   "id": "5eaa78144bc1d00fa1f0598c",
   "app_name": "SOLGAN"
   }
  ]
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!",resave:true,saveUninitialized:true}));
app.post('/', function(req, res){
     
      const {sessionID,windowID} =req.body
      console.log(sessionID,windowID)
      if(sessionID==null||sessionID==undefined)
      {
         const random = Math.random()
         const ranID =Math.random()
         activeSessions=activeSessions.concat({sessionID,windowID:random})
         res.send({sessionID:ranID,windowID:random})
      }
      if(sessionID!=null&&windowID==null)
      {
         res.sendStatus(400).send({sessionID,windowID})
      }    
 });
app.post('/data/:id',auth,(req,res)=>{
   const id = req.params.id
   const {sessionID}= req.body
   if(sessionID==null)
   {
      res.status(400).send()
      
   }
   if(props.find(elem=>elem.id==id))
      {
         elem = props.filter(elem=>elem.id==id)
         if(elem[0].active==null || elem[0].active==undefined)
         {
            elem[0].active=sessionID
            console.log(elem[0].active + 'active')
            res.status(200).send(elem[0])
         }
         if(elem[0].active!=sessionID){
            console.log(elem[0].active)
            res.sendStatus=400
            res.send({e:"error"})
         
         }
      }
  
})
app.listen(3000,()=>console.log('3000 listening!'))
module.exports=activeSessions