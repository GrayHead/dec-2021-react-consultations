import './App.css';
import {Users} from "./components/users/Users";
import {useState} from "react";
import {getUser} from "./services/user.service";

function App() {

    let [user, setUser] = useState(null);
    const choseUserFn = (id) => {
        getUser(id).then(value => setUser(value));
    }

    return (
        <div className={'wrap'}>

            <div className={'users'}>
                <Users choseUserFn={choseUserFn}/>
            </div>
            {user && <h2>{user.name}</h2>}
        </div>
    );
}


export default App;
