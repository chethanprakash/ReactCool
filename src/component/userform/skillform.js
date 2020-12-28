import { Component } from "react"

export class SkillForm extends Component{

    langs = ["JAVA", "JAVASCRIPT", "REACT"]
    res = ["hi"];
    constructor(){
        super()
        this.state={}
        // this.res=[]
    }

    handleChange(event){
        this.res.push(event.target.value)
        
    }

    render(){
        return(
            <form>
                <label>Pick your favourite language : </label>
                <select onChange={this.handleChange}>
                    {this.langs.map(lang => <option value={lang}>{lang}</option>)}
                </select>
                {/* <div>Selected value : {this.res}</div> */}
            </form>
        )
    }
}