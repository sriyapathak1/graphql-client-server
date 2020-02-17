import { RestDataSource } from "apollo-datasource-rest";
import MockData from '../../lib/MockData';

console.log('---emailjhjsfhj---------', email);
class User extends RestDataSource{
    constructor(){
        super();
        // this.baseURL = "http://localhost:5000";
    }
    // async getUser(id){
    //     return this.getUser(`/api/user/${id}`);
    // }
    // async getUser(email) {
        
    //     try{
    //         const MockData =await this.get()
    //     }
    // }
}

export default User;
//https://www.youtube.com/watch?v=v0t42xBIYIs