import {userstate} from 'react'
import './App.css'

function Count(){
  const [count,setCount]=useState(0)
  return(<div className="App">
    <h2>Counter:{count}</h2>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
    );

}


export default Count;
