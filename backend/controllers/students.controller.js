const models = require('../models/');

function save(req, res){
    const student = {
        fullName: req.body.fullname,
        cin: req.body.cin,
        birthday: req.body.birthday,
        field: req.body.field,
        inscriptionDate: req.body.inscription_date 
    }
    models.Student.create(student).then(result => {
        res.status(201).json({
            message: "Student Added successfully",
            student: result,
        })
    }).catch(error => {
        res.status(500).json({
            message: "something is wrong",
            student: error,
        })
    })
}

function show(req, res){
    const id = req.params.id;
    models.Student.findByPk(id).then(result => {
        if(result){
            res.status(200).json(result)
        }else{
            res.status(404).json({
                message : "Student not found"
            }) 
        }
    }).catch(error => {
        res.status(500).json({
            message : "Something went wrong"
        })
    });
}

function index(req, res){
    models.Student.findAll().then(result => {
        if(result){
            res.status(200).json(result)
        }else{
            res.status(404).json({
                message : "Nothing yet"
            }) 
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something is wrong"
        })
    });
}

function update(req, res){
    const id = req.params.id;
    const updatedStudent = {
        fullName: req.body.fullname,
        cin: req.body.cin,
        birthday: req.body.birthday,
        field: req.body.field,
        inscriptionDate: req.body.inscription_date 
    }
    models.Student.update(updatedStudent, {where: {id: id}}).then(result => {
        res.status(200).json({
            message: "Student Updated Successfully",
            Student: updatedStudent
        })
    }).catch(error => {
        res.status(500).json({
            message : "Something went wrong",
            error: error
        })
    });
}

function destroy(req, res){
    const id = req.params.id;
    models.Student.destroy({where:{id:id}}).then(result => {
        if(result){
            res.status(200).json({
                message: "Student Deleted successfully"
            })
        }else{
            res.status(404).json({
                message : "not found"
            }) 
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        })
    });
}

module.exports = {
    save : save,
    show : show,
    index : index,
    update : update,
    destroy : destroy
}