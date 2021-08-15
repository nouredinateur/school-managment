const models = require('../models/');

function save(req, res){
    const teachers = {
        matricule: req.body.matricule,
        fullName: req.body.fullname,
        inscriptionDate: req.body.inscription_date 
    }
    models.Teacher.create(teachers).then(result => {
        res.status(201).json({
            message: "Teacher Added successfully",
            teacher: result,
        })
    }).catch(error => {
        res.status(500).json({
            message: "something is wrong",
            teacher: error,
        })
    })
}

function show(req, res){
    const id = req.params.id;
    models.Teacher.findByPk(id).then(result => {
        if(result){
            res.status(200).json(result)
        }else{
            res.status(404).json({
                message : "Teacher not found"
            }) 
        }
    }).catch(error => {
        res.status(500).json({
            message : "Something went wrong"
        })
    });
}

function index(req, res){
    models.Teacher.findAll().then(result => {
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
    const updatedTeacher = {
        matricule: req.body.matricule,
        fullName: req.body.fullName,
        inscriptionDate: req.body.inscription_date 
    }
    models.Teacher.update(updatedTeacher, {where: {id: id}}).then(result => {
        res.status(200).json({
            message: "Teacher Updated Successfully",
            Teacher: updatedTeacher
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
    models.Teacher.destroy({where:{id:id}}).then(result => {
        if(result){
            res.status(200).json({
                message: "Teacher Deleted successfully"
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