import React from 'react'
import { withRouter } from 'react-router-dom';
class ScreenThree extends React.Component{
   constructor(props)
   {
       super(props)
       this.state={
           name:'',
           identifier:''
       }
   }
   componentDidMount(){
    setInterval(async () => {
        const options = { method:'POST', headers: { "Content-Type": "application/json" }}
        options.body=JSON.stringify({sessionID:sessionStorage.getItem('windowID')})
        console.log(options.body)
        const res=await fetch('http://localhost:3000/data/'+this.props.match.params.id,options)
        const response = await res.json()
        console.log(response)
        await this.setState({name:response.app_name,identifier:response.id})
    }, 1000);
   }
   render(){ 
    
       return(<div>
           {this.state.identifier}<br/>
           {this.state.name}
         </div>)
         }
}
export default withRouter(ScreenThree)