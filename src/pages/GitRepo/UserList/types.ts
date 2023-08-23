import { GitRepoProps } from "../type";

export interface UserListProps extends GitRepoProps{
    handleSelectedUser:(id:string)=>void;
}