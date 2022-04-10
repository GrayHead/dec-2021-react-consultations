import {useEffect, useState} from "react";
import {User} from "../user/User";
import './Users.css';
import {getUsers} from "../../services/user.service";

export function Users({choseUserFn}) {

    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => setUsers(value));


    }, [])
    return <div>
        {
            users
                .map(
                    (value, index) => <User
                        choseUserFn={choseUserFn} key={value.id} item={value}/>)
        }
    </div>
}
