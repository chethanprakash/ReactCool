
const MyButton =  (props)=>{    //Stateless component
    return(
        <button onClick={(event)=>{
            fetch('http://localhost:4000/users')
            .then(data=>{
                data.json().then(res => alert(res))
            })
        }}>{props.text}</button>
    )
}
// function MyButton(props){
//     return(
//         <button>{props.text}</button>
//     )
// }
export default MyButton;