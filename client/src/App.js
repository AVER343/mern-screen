import React from 'react';
import './App.css';
import {Switch,Route, withRouter} from 'react-router-dom'
import Screen2 from './components/screen2/scree2.component';
import ScreenThree from './components/screen3/screen3.component';
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      data:null,
      sessionID:localStorage.getItem('sessionID'),windowID:sessionStorage.getItem('windowID')
    }
    if(this.state.sessionID!=null &&this.state.windowID==null)
    {
      alert("LOGGED INTO ANOTHER TAB!")
    }
  }
  fetchData=async ()=>{
   try{ 
        const options = { method:'POST', headers: { "Content-Type": "application/json" }}
        options.body = JSON.stringify({ sessionID:this.state.sessionID,windowID:this.state.windowID})
        const res=await fetch('http://localhost:3000',options)
        const response = await res.json()
        console.log(response)
        await localStorage.setItem('sessionID',response.sessionID)
        await sessionStorage.setItem('windowID',response.windowID)
        await this.setState({sessionID:response.sessionID,windowID:response.windowID})
        console.log("Changed values " + this.state.sessionID +""+this.state.windowID)
       this.props.history.push('/screen2')

      } 
 catch(e){
   console.log(this.state.sessionID+""+this.state.windowID)
       this.getConfirmation()
      }
}
getConfirmation=async ()=>{
  var retVal = window.confirm("Do you want to continue ?");
  if( retVal == true ) {
    console.log('is it running?')
localStorage.clear()
sessionStorage.clear()
    this.setState({sessionID:null,windowID:null})
        const options = { method:'DELETE', headers: { "Content-Type": "application/json" }}
        await fetch('http://localhost:3000',options)
              
  } else {
    window.sessionStorage.clear()
  }
}
  render(){

    return (<Switch>
        <Route exact path='/' render={()=>{return (<div><button onClick={this.fetchData}>LOGIN</button>
              <button onClick={this.logout} >LOGOUT</button></div>)}}></Route>
              <Route path='/screen3/:id' render={()=><ScreenThree/>}/>
              <Route path='/screen2' render={()=><Screen2 />}/>
    </Switch>);
  }
}

export default withRouter(App);
