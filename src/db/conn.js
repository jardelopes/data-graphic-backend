const mongoose = require("mongoose");

async function main(){
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect("mongodb+srv://carlosjardel:ZekJBb5Zy4KHYXaQ@cotabox.lxbdpeu.mongodb.net/?retryWrites=true&w=majority")
        console.log("conectado ao banco")
    } catch (error) {
        console.log("erro no banco")
        console.log(error)
    }
}

module.exports = main;