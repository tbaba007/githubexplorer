import Accordion from "../../../components/Accordion"
import { UserListProps } from "./types";


const UserList=(data:UserListProps)=>{
    const {login,id,handleSelectedUser}=data;

    return <Accordion
    key={login}
    isOpen={false}
    title={login}
    id={id}
    onOpen={() => handleSelectedUser(login)}
  />
}

export default UserList;