const auth =(req,res,next)=>{
    const {sessionID,windowID} =req.body
    if(sessionID!=null&&windowID!=null)
    {
       for(i=0;i<activeSessions.length;i++)
       {
          if(sessionID==activeSessions[i].sessionID)
          {
            if(windowID!=activeSessions[i].windowID)
            {
                res.sendStatus(400)
            }
          }
       }
    }
    next()
}
module.exports=auth