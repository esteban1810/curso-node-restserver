const {Router} = require('express');
const router = Router();
const {
    userDelete,
    userGet,
    userPatch,
    userPost,
    userPut
} = require('../controller/user');

router.get('/', userGet)
router.put('/:id', userPut)
router.post('/', userPost)
router.delete('/',userDelete)
router.patch('/', userPatch)

module.exports = router;