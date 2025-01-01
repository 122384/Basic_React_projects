import Home from './Home'
import Contact from './Contact'
import About from './About'
import Greeting from './Greeting';


function App() {
  return (
    <div>
   <h1>hello from ReactJs</h1>
   <Greeting name = {'Krishna'} />
   <Greeting name = {'Sri hari'} />
   { /*<Home name = {'Raj'} age = {23} />
   <About />
   <Contact /> */}

   </div>
  );
}

export default App;
