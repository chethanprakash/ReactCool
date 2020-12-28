import { event } from "jquery";
import { Component, useState } from "react";
import { ApiService } from "../../service/service";
import './userformcss.css'

// function, arrow function
export class Userform extends Component {//ECMA6 class
    skills = ["java", 'javascript', 'React'];

    constructor() {
        super();
        this.state = {
            users: [], formdata: {
                fname: 'Ramesh1',
                carBrand: 'audi',
                isChecked: {},
                gender: 'male'
            }
        }
    }
    createSelectItems = () => {
        let items = [];
        for (let i = 0; i < this.skills.length; i++) {
            items.push(<option key={i} value={this.skills[i]}>{this.skills[i]}</option>);
        }
        return items;
    }
    handleChange = (event) => {
        const value = event.target.type == 'checkbox' ? event.target.checked : event.target.value;
        this.setState({
            ...this.state,
            formdata: { ...this.state.formdata, [event.target.name]: event.target.value }
        })
    }
    save = () => {//button click
        console.log('current state of component=', this.state);
        console.log(ApiService.post(this.state.formdata, (response) => {
            console.log(response);
            this.setState({
                users: [...this.state.users, response]
            })
        }));;
    }

    handleKey = (event) => {
        console.log('key '+event.target.value)
        if(!event.target.value.trim()){
            ApiService.get((response) => {
                console.log('users '+response)
                this.setState({
                    users: response
                })
            });
        } else {
        this.getAllUsers()
    }
    }

    handleKeylast = (event) => {
        console.log('key '+event.target.value)
        ApiService.getkeylast(event.target.value, (response) => {
            console.log(response)
            this.setState({
                users: response
            })
        })
    }
    handleKeycar = (event) => {
        console.log('key '+event.target.value)
        ApiService.getkeycar(event.target.value, (response) => {
            console.log(response)
            this.setState({
                users: response
            })
        })
    }
    handleKeygender = (event) => {
        console.log('key '+event.target.value)
        ApiService.getkeygender(event.target.value, (response) => {
            console.log(response)
            this.setState({
                users: response
            })
        })
    }


    delete = (user, index) => {
        ApiService.delete(user.id, (response) => {
            console.log('res '+response)
            this.state.users.splice(index,1)
            this.setState({
                users : this.state.users
            })    
        })
    }

    componentWillMount(){
        console.log('mounting')
        this.getAllUsers();
        
    }
    getAllUsers() {
        ApiService.get((response) => {
            console.log('users ' + response);
            this.setState({
                users: response
            });
        });
    }

    render() {
        return (
            <form>
                <label>First Name:
                   <input value={this.state.formdata.fname} name='fname' onChange={this.handleKey}></input>
                </label>
                <label>Last Name:
                   <input value={this.state.formdata.lastname} name='lastname' onChange={this.handleKeylast}></input>
                </label>
                <select name='carBrand' onChange={this.handleChange} value={this.state.formdata.carBrand}>
                    <option value='mercedes'>Mercedes</option>
                    <option value='bmw'>bmw</option>
                    <option value='audi'>Audi</option>
                    <option value='Hyundai'>Hyundai</option>
                </select>
                <label><input type='radio' value='male' name='gender' checked={this.state.formdata.gender == 'male'}
                    onChange={this.handleChange} /> Male</label>
                <label><input type='radio' value='female' name='gender' checked={this.state.formdata.gender == 'female'}
                    onChange={this.handleChange} /> Female</label>

                <label><input type='checkbox' name='domestic' checked={this.state.formdata.isChecked[0]}
                    onChange={this.handleChange} /> domestic</label>
                <label><input type='checkbox' name='international' checked={this.state.formdata.isChecked[1]}
                    onChange={this.handleChange} /> International</label>
                <select name='skills' value={this.state.formdata.skills} onChange={this.handleChange}>
                    {this.skills.map((skill, index) => <option key={index} value={skill}>{skill}</option>)}
                </select>
                <button type='button' onClick={this.save}>Save</button>
                <table>
                    <thead>
                        <th>First Name <input onChange={this.handleKey}></input></th>
                        <th>Last Name <input onChange={this.handleKeylast}></input></th>
                        <th>Car <input onChange={this.handleKeycar}></input></th>
                        <th>Gender <input onChange={this.handleKeygender}></input></th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        
                            {this.state.users.map((user, index) => <tr key={index} >
                                <td>{user.fname}</td>
                                <td>{user.lastname}</td>
                                <td>{user.carBrand}</td>
                                <td>{user.gender}</td>
                            <button type="button" onClick={this.delete.bind(this,user,index)}>Delete</button></tr>)}
                       
                    </tbody>
                    {/* {this.state.users.map((user, index) => <li key={index} >{user.fname}
                    <button type="button" onClick={this.delete.bind(this,user,index)}>Delete</button></li>)} */}
                </table>
            </form>
        )
    }
}