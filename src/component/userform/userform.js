
//function, arrowfunction to create react component

import { Component, useState } from "react";

//create react component using class

export class UserForm extends Component {   //ECMA6 class
//    users=[
//        {
//            "name":"Ganesha"
//        },
//        {
//            "name":"Shiva"
//        }
//    ];
//     save(){
//        console.log('Save')
//    }
//     render(){
//         return(
//             <div>
//                 <input></input>
//                 <button onClick={this.save}>Save</button>
//                 {this.users.map(user => <div>{user.name}</div>)}
//             </div>
//         )
//     }

    constructor(){
        super();
        this.state = {
            fName:'Krishna',
            lName:'Radha',
            brand:'tata',
            gender:'male'
        };
    }
    handleChange = (event) => {
        const val = event.target.type='checkbox' ? event.target.checked : event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]:val
        })
    }
    
    save = (event) => {
        console.log('curent state of component = ',this.state)
    }

    render(){
        return(     //JSX 
            <form>
                <label>First Name : </label>
                <input value={this.state.fName} name="fName" onChange={this.handleChange}></input>    cant edit because of react. add state management
                <br></br>
                <label>Last Name : </label>
                <input name="lName" value={this.state.lName} onChange={this.handleChange}></input>

                <select name="brand" value={this.state.brand} onChange={this.handleChange}>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                    <option value="Maruthi">Maruthi</option>
                    <option value="tata"> Tata</option>
                </select>

            <br></br>
                <label>
                    <input type="radio" value='male' name='gender'
                        checked={this.state.gender=='male'} onChange={this.handleChange}/>Male
                    
                    <input type="radio" value='female' name='gender'
                        checked={this.state.gender=='female'} onChange={this.handleChange}/>FeMale

                </label>

            <br></br>
                <input name="course" type='checkbox' checked={this.state.isChecked} onChange={this.handleChange}/>JAVA
                <input name="course" type='checkbox' checked={this.state.isChecked} onChange={this.handleChange}/>JAVA SCRIPT
                <input name="course" type='checkbox' checked={this.state.isChecked} onChange={this.handleChange}/>REACT

                <button type='button' onClick={this.save}>SAVE</button>
            </form>
        )
    }

}
