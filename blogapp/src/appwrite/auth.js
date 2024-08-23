import conf from "../conf/conf.js"
import {  Client, Account, ID} from "appwrite"

export class AuthService {
    client = new Client()
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}){
        try{
            const userAccount = await this.account.create
            (ID.unique(), email, password, name)
            if (userAccount) {
                return this.login({email, password})

            }else {
                return userAccount
            }

        }catch (error) {
            throw error

        }
        
    }
    async login({email, password}) {
        try {
            return await this.account,createEmailSession(email, password)
        } catch (error) {
            throw error
            
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
            // account can access the end point of the usre so we can use it anywhere to get a user
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser() ::", error);
            // console logging the error should incase the server dosnt work or has any break down then we see from here
     
        }
        return null 
        // return null value if we can not get anything from the system 
    }
    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service :: logout() ::", error);

        }
    }
}

// creatin an abject from the Auth class to be acceces it 

const authService = new AuthService()

export default authService