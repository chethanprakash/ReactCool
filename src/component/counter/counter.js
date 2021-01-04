import { Component } from "react"

export function Counter(props){
    return(
        <span>{props.count}</span>
    )
}

export class Counter2 extends Component{
    render(){
        return(
            <span>{this.props.count}</span>
        )
    }
}