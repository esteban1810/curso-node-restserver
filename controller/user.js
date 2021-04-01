const {response:res,request:req, request, query} = require('express');

const userGet = (req, res) => {    
    const {nombre,apellido} = req.query;

    res.json({
        msg:'get api',
        nombre,
        apellido
    })
}

const userPut = (req, res) => {
    const {id} = req.params;
    res.json({
        msg:'put api',
        id
    })
}

const userPost = (req, res) => {
    const {body} = req
    
    res.json({msg:'post api',body})
}

const userDelete = (req, res) => {
    res.json({msg:'delete api'})
}

const userPatch = (req,res)=>{
    res.json({msg:'patch api'})
}

module.exports = {
    userGet,
    userPut,
    userPatch,
    userPost,
    userDelete
}