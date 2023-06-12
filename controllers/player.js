var Player=require('../models/Player');

// Add  Player POST 
exports.Addplayer= async(req,res,next) => {
    var player= await Player.create(req.body);
    res.status(201).json({success:true, data: player, msg:"Added new Player"});
}

// List ALL Players GET
exports.Listplayer= async (req,res,next) => {
        var players=await Player.find();
        res.status(200).json({success:true, data: players, msg:"List of Players"});
   
    
}

// List Player GET
exports.Singleplayer= async (req,res,next) => {
        var player=await Player.findById(req.params.id);
        res.status(200).json({success:true, data: player, msg:"Requested Player Details"});
    
    
}
// Update player PUT
exports.Update= async (req,res,next) => {
    var user=await Player.findByIdAndUpdate(req.params.id);
    res.status(200).json({success:true, data:user});
}
// Delete Player DELETE

exports.Removeplayer= async (req,res,next) => {
    var user=await Player.findByIdAndDelete(req.params.id);
    res.status(200).json({success: "Player removed", data:user});
}


