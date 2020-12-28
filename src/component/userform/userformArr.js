import { render } from "@testing-library/react"
import { Component } from "react"
import { ApiService } from "../../service/service";

export class FormSelect extends Component{
     skills = ["JAVA", "JAVA Script", "REACT"];
    users=[{'name':'Ganesha','name':'Shiva'}];
   
     constructor(){
         super();
        this.state = {
            users:[]
        }
     }
     handleChange= (event) =>{
         console.log('event ',event.target.value)
        this.setState({
            ...this.state,
           [this.state.name] : event.target.value
        })
      }
      save = ()=>{
          console.log(this.state)
          ApiService.post(this.state, function(respnse){
            console.log(respnse)
            this.users.push(respnse)
        });
      }
    // render(){
    //     return(
    //         <label>Select Skill : 
    //             <select  name='selectedOption' onChange={this.handleChange}>
    //                 {this.skills.map((skill, index) =>
    //                     <option value={skill}>{skill}</option>
    //                 )}
    //             </select>
    //         </label>
    //     )
    // }

    render(){
        return (
            <div>
            <select name='name' onChange={this.handleChange}>
                {this.skills.map(skill => <option value={skill}>{skill}</option>)}
            </select>
            <button onClick={this.save}>SAVE</button>

            <ol>
                {this.users.map(user => <li>{user.name}</li>)}               
            </ol>
            </div>
        )
    }
}