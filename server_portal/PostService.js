import Post from "./Post.js";

class PostService{
    async create(post) {
        const createdPost = await Post.create(post);
        return createdPost
    }
    async getAll(){
        const posts = await Post.find();
        return posts
    }
    async update(post){
        if(!post._id) {
            throw new Error ("Id не указан")
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
        return updatedPost;
    }
    async getOne(id){
        if (!id)
        {
            throw new Error("Id не указан")
        }
        const post  = await Post.findById(id)
        return post;
    }
    async delete(id){
        if (!id){
            throw new Error("Id не указан")
        }
        const post = await Post.findByIdAndDelete(id);
        return post

    }
}
export default new PostService();