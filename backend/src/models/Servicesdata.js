const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:<userone>@cluster0.06h36.mongodb.net/gethired?retryWrites=true&w=majority')
const schema=mongoose.Schema;

var serviceSchema=new schema({
    name:String,
    details:String
});

var servicesData=mongoose.model('services',serviceSchema);
module.exports=servicesData;
