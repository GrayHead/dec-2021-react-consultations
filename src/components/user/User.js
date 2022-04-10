import './User.css'

export function User({item, choseUserFn}) { /*{}.item*/

    return <div>
        <h2>{item.id} - {item.name}</h2>
        <p>{item.username} {item.email}</p>
        <button onClick={() => {
            choseUserFn(item.id);
        }}>user details
        </button>
    </div>
}
