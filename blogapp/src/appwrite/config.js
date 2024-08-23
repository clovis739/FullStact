import conf from "../conf/conf"
import { Client, Databases, Storage, Query, ID} from "appwrite"


export class Service {
    client = new Client()
    databases;
    bucket;

    constructor(){
        this,client.setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.databases = Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug )
        } catch (error) {
            console.log("Appwrite service :: getPost() ::", error)
            return false
        }
    }


    async getPosts(querries = [Query.equal("status", "active")]){
        try {
            return await this.databases(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                querries
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts() ::", error)
            return false


        }
    }


    async createPost({title, slug, 
        content, featureImage, 
        status, 
        userId}) {
            try {
                return await this.databases.createDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug,
                    {
                        title,
                        content,
                        featureImage,
                        status,
                        userId
                    }
                )
            } catch (error) {
                console.log("Appwrite service :: createPosts() ::"
                    , error)
                    return false

            }

        }

        async updatePost(slug, {title, content, featureImage, status}){
            try {
                return await this.databases.updateDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug,
                    {
                        title,
                        content,
                        featureImage,
                        status,
                        
                    }
                )
            } catch (error) {
                console.log("Appwrite service :: updateDocument() ::"
                    , error)
                    return false
            }
        }

        async deletePost(slug){
            try {
                await this.databases.deleteDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug,
                )
                return true;
            } catch (error) {
                console.log("Appwrite service ::daleteDocument() ::"
                    , error)
            }
        }



        // storage section here 
async uploadFile(file){
    try {
        return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
        )
    } catch (error) {
        console.log("Appwrite service :: uploadFile() ::"
                    , error)
                    return false
    }
}
        // storage section here 
async deleteFile(fileId){
    try {
        return await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
        )
    } catch (error) {
        console.log("Appwrite service :: deleteFile() ::"
                    , error)
                    return false
    }
}

getFilePreview(fileId){
    return this.bucket.getFileView(
        conf.appwriteBucketId,
        fileId
    ).href
}


}


const service = new Service()
export default service


// const client = new Client()
// const dtatabase = new Databases();