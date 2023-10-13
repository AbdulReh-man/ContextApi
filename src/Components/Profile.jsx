import { React, useContext } from 'react'
import Usercontext from '../Context/Usercontext'
function Profile() {
    const { user } = useContext(Usercontext);

    if ( !user ) return <div>Please Login</div>

    return <div>Wlcome {user.username} </div>
}

export default Profile