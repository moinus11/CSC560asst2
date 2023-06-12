var express=require('express');
var {Addplayer,Listplayer, Singleplayer, Update, Removeplayer}=require('../controllers/player');

var router=express.Router();
router
.route('/')
.post(Addplayer);

router
.route('/')
.get(Listplayer);

router
.route('/:id')
.get(Singleplayer);

router
.route('/:id')
.put(Update);

router
.route('/:id')
.delete(Removeplayer);

module.exports= router;