
export interface GitRepoProps{
    login:string;
    id:bigint;
    items?:[{
        login:string;
        id:bigint;
    }]
}