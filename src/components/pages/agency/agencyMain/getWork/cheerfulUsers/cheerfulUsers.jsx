import React, {useState} from 'react'

import CheerfulUser from "./cheerfulUser/cheerfulUser"



const CheerfulUsers = ({users}) =>{
    const [showed,setShowed] = useState(false)
    console.log(showed)
         return (
            <div className='cheerfulUsers'>
                <h2>Our cheerful users</h2>
                <h4>Attention! Sorting users by registration date</h4>
                <div className='cheerfulUsersBlock'>
                    {
                        users && users.map((user,i) => (

                            <CheerfulUser
                                key={user.email+user.name}
                                i={i}
                                img={user.photo}
                                name = {user.name}
                                position={user.position}
                                email={user.email}
                                phone={user.phone}
                                showed = {showed}
                            />
                        ))
                    }
                </div>

                <button onClick={()=>setShowed(!showed)}  className='cheerfulUsersBtn'>Show more</button>
            </div>
        );

}

export default CheerfulUsers;