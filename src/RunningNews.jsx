import { Component, createElement } from "react";



import  Test  from "./components/Test";
import Run from "./components/Run";
import "./ui/RunningNews.css";

export default class RunningNews extends Component {
    constructor(props){
        super(props);
        this.state = {name:"alex"};
    }
    render() {
        const array = ['alex','boris'];
       

        console.dir("Hello")
        const {RoleName,data} = this.props;
        if(!data.items) return <div>Nothing to show</div>
        const myItems = data.items.map(item=>{
            return RoleName.get(item).value;
        })
        return (
            

            
                  <div>
                      
                  
                        <Test/>
                        <Run/>
                      <div>{myItems[0]}</div>
                      {array.map(el=><div>{el}</div>)}
                      




                  </div>
                
            
               
              
                
                
            
        );
        
        
    }
}
