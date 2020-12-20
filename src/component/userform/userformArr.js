import { render } from "@testing-library/react"
import { Component } from "react"

export class FormSelect extends Component{
     skills = ["JAVA", "JAVA Script", "REACT"];

    //  state = {
    //      selectedOption:'Hello'
    //  }
    //  handleChange= (event) =>{
    //      console.log('event ',event.target.value)
    //     this.setState({
    //        [this.state.selectedOption] : event.target.value
    //     })
    //  }
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
            <select>
                {this.skills.map(skill => <option value={skill}>{skill}</option>)}
            </select>
        )
    }
}