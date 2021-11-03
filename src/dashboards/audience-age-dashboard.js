import React from 'react'
import Chart from "react-apexcharts";



class AudienceAge extends React.Component{
    constructor(props){
        super(props)
  
        this.state = {
          options: {labels:["19-25","26-35", "36-45", "46-55", "56-65"], 
                    title:{
                        text:"Audience By Age"
                    }},
          series: [0,0],
        
        }
    
      }
      
      componentDidMount(){
      
         fetch('https://my-project-f3769-default-rtdb.firebaseio.com/audiences/age.json')
         .then(res => res.json())
         .then(data => {
               let men = [], women = []
               const arrayOfAge = this.state.options.labels.map(label=> data.men[label] + data.men[label])
                   
       
            
                   
               this.setState(state=> {return {
                    options:state.options,
                    series: arrayOfAge
  
               }})
        })
        .catch(err=> console.log(err.message))
      }
       
        
      
  
      render() {
    
        return (
          <div className="pie">
            <Chart options={this.state.options} series={this.state.series} labels={this.state.labels} type="pie" width="380" />
          </div>
        );
      }
    }
    
export default AudienceAge