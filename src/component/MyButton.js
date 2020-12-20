import DisplayList from "./listcomponent/list"

const MyButton =  (props)=>{    //Stateless component
    return(
        <button onClick={(event)=>{
            fetch('http://localhost:4000/users')
            .then(data=>{
                data.json().then(res => {
                    console.log(res);
                    res.map(element => {
                     <div>element.name</div>
                     console.log(element.name)
                    });
                    <DisplayList list= {res}></DisplayList>
                })
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