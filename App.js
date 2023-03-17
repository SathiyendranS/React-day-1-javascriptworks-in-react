console.log("message to developer");
function Alertmessage()
{ 
 const Hi=()=>{alert("Message from Javascript alert!")}
  return <div><button onClick ={Hi}>click</button></div>
}
ReactDOM.render(<Alertmessage/>,document.getElementById('mydiv'))