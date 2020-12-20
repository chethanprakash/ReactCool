function DisplayList(props){
    return(
        
        props.list.map(element => <div>{element.name}</div>)
        
    )
}
export default DisplayList