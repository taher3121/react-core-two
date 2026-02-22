import { use } from "react";
import Friend from "./Friend";

export default function Users({ fetchUsers }){

    const getData = use(fetchUsers);
    console.log(getData)

    return(
        <div>
            <h3>Users: {getData.length} </h3>

            {
                getData.map(friend=> <Friend friend={friend} key={friend.id}></Friend>)
            }
        </div>
    )

}