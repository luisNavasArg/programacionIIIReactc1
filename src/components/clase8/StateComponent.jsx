import React from 'react'
class StateComponent extends React.Component{
   constructor(props){
      super(props)
      this.state ={
         color: props.color
      }
   }
   cambiarEstado(){
      // this.state.color="blue" de esta forma no se hace
      this.setState({color:"yellow",fondo:"black"})
   }
   render(){
      return(
         <h1 onClick={()=>this.cambiarEstado()} 
         style={{color:this.state.color, backgroundColor:this.state.fondo}}>
            Soy el componente de clase</h1>
      )
   } 
}
export default StateComponent