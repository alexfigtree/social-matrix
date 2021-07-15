import express from 'express';

import { 
	getPosts, 
	getPost, 
	createPost, 
	updatePost, 
	likePost, 
	deletePost,
	getMatrix,
	createMatrix,
	updateMatrix
} from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

router.post('/', createMatrix);
router.get('/:id', getMatrix);
router.patch('/:id', updateMatrix);

export default router;