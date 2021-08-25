import Router from 'express'
import Post from "./Post.js";
import PostController from "./PostController.js";

const router = new Router()

//router.post('/countries', PostController.create)
router.get('/countries', PostController.getAll)
router.get('/countries/:id', PostController.getOne)
//router.put('/countries', PostController.update)
//router.delete('/countries/:id', PostController.delete)

export default router;