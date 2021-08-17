import Student from '../components/Students';
import Module from '../components/Modules';
import Teacher from '../components/Teachers';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";


function Nav(){
    return(
        <Router>
        <div className="nav" class="w-auto h-20 bg-white shadow text-purple-400">
                <ul class="mx-40 py-4 flex justify-around">
                    <li class="my-2">
                      <Link class=" bg-white text-black p-4 rounded-lg hover:bg-purple hover:text-white " to="/students">Students</Link>
                    </li>
                    <li class="my-2">
                      <Link class=" bg-white text-black p-4 rounded-lg hover:bg-purple hover:text-white " to="/modules">Modules</Link>
                    </li>
                    <li class="my-2">
                      <Link class=" bg-white text-black p-4 rounded-lg hover:bg-purple hover:text-white " to="/teachers">Teachers</Link>
                    </li>
                  </ul>
                
        </div>
        <div>
                <Route path='/students' component={Student} />
                <Route path='/modules' component={Module} />
                <Route path='/teachers' component={Teacher} />
        </div>
        </Router>
    )
}

export default Nav;