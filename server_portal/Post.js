import mongoose from 'mongoose';

const Country = new mongoose.Schema({
    _id: {type:String, required:true},
    title: {type:String, required:true},
    image:{type:String, required:true},
    sights:{type:Array, required:true},
    films:{type:Array, required:true},
    music:{type:Array, required:true},
    items:{type:Array, required:true}
})

export default mongoose.model('Country',Country)