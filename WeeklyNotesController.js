//описываем, что будем делать
//создаем модель, как требует EXPRESS (описано в документации)

const WeeklyNotesModel = require("./WeeklyNotesModel");

//соединяем с POSTMAN
//GET
module.exports.getNote = async(req,res) => {
    const myNote = await WeeklyNotesModel.find();
    res.send(myNote)
}
//POST
module.exports.saveNote = async (req,res) =>{
    const {title} = req.body;
    await WeeklyNotesModel.create({title})
    .then((data) => {console.log("Note added")
    res.send(data)
})
}
//DELETE
module.exports.deleteNote = async (req,res) =>{
    const {_id} = req.body;
    WeeklyNotesModel.findByIdAndDelete(_id)
    .then(()=> res.send("Delete a Note"))
}
//EDIT
module.exports.editNote = async (req,res) =>{
    const { _id, title} =req.body;
    WeeklyNotesModel.findByIdAndUpdate(_id, {title})
    .then(() =>res.send("Edited a note"))
}
