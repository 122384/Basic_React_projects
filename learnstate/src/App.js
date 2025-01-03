import React,{ useState } from 'react'
import Counter from './Counter';
export default function App() {
  // let name =''
  //state:
  const [name, setName] = useState('Krishna')

const handleclick = ()=>{
//name = 'Keshava';
// alert(name);
setName('Keshava');
}
return(
  <div>
    {/*<h1>Hare{name}</h1>
    <button onClick={handleclick}>Click</button>*/}
    <Counter />
  </div>
)
}