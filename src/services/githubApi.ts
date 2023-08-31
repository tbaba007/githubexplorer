import { apiBaseURL, apiKey } from "../config";


export const searchRepositories=async(param:string)=>{
    try {
        const response=await fetch(`${apiBaseURL}/search/users?q=${param}`,{
            headers:{
                Authorization: `Bearer ${apiKey}`, 
            }
        });
        const result=await response.json();
        return result;
    } catch (error) {
        if(error instanceof Error){
            console.error('Error occured while searching for repositories',error.message);
            return []
        }
    }
}

export const getUserRepositories = async (username:string) => {
    try {
      const response = await  fetch(`${apiBaseURL}/users/${username}/repos`,{
        headers:{
            Authorization: `Bearer ${apiKey}`, 
        }
    });
    const result=await response.json();
    return result;
    } catch (error) {
      console.error('Error getting user repositories:', error);
      return [];
    }
  };