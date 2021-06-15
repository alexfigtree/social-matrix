import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';
import MatrixData from '../models/matrixData.js';
import FootnotesData from '../models/footnotesData.js';

const router = express.Router();

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;

    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostMessage.findById(id);

    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(updatedPost);
}


export const getMatrix = async (req, res) => { 

    try {
        const matrixData = await MatrixData.find();
                
        res.status(200).json(matrixData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
/*

    const { id } = req.params;

    try {
        const matrix = await MatrixData.findById(id);
        
        res.status(200).json(matrix);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }*/
}

export const createMatrix = async (req, res) => {
    const { matrixData } = req.body;

    const newMatrixData = new MatrixData({ matrixData })

    try {
        await newMatrixData.save();

        res.status(201).json(newMatrixData);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateMatrix = async (req, res) => {
    const { id } = req.params;
    const { matrixData } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No matrix with id: ${id}`);

    const updatedMatrixData= { matrixData, _id: id };

    await MatrixData.findByIdAndUpdate(id, updatedMatrixData, { new: true });

    res.json(updatedMatrixData);
}



export const getFootnotes = async (req, res) => { 
    try {
        const footnotes = await FootnotesData.find();
                
        res.status(200).json(footnotes);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getFootnote = async (req, res) => { 
    const { id } = req.params;

    try {
        const footnote = await FootnotesData.findById(id);
        
        res.status(200).json(footnote);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createFootnotes = async (req, res) => {
    const { footnotes } = req.body;

    const newFootnotesData = new FootnotesData({ footnotesData })

    try {
        await newFootnotesData.save();

        res.status(201).json(newFootnotesData );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const updateFootnotes = async (req, res) => {
    const { id } = req.params;
    const { footnotesData } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedFootnotes = { footnotesData, _id: id };

    await FootnotesData.findByIdAndUpdate(id, updatedFootnotes, { new: true });

    res.json(updatedFootnotes);
}

export default router;