import { useEffect,useState } from "react";
import { UserService } from "../services/user.service";
interface data {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
export default function User() {


//data state management
 const [users,setUsers]=useState<data[]>([])
 useEffect(()=>{
    UserService.getAllUsers().
    then((data)=>setUsers(data))

 },[])


 console.log(users)

  return (
    <>
      <div>
        {users.map((user,index)=>(<div key={index}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>

        </div>))}
    
      </div>
    </>
  );
}
