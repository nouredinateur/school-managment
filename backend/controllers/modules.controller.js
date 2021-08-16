const models = require('../models/');

function save(req, res){
    const modules = {
        name: req.body.name,
        coeff: req.body.coeff,
        teacherId: models.Teacher.findByPk(req.body.teacher_id),
    }
    models.Module.create(modules).then(result => {
        res.status(201).json({
            message: "Module Added successfully",
            module: result,
        })
    }).catch(error => {
        res.status(500).json({
            message: "something is wrong",
            module: error,
        })
    })
}

function show(req, res){
    const id = req.params.id;
    models.Module.findByPk(id).then(result => {
        if(result){
            res.status(200).json(result)
        }else{
            res.status(404).json({
                message : "Module not found"
            }) 
        }
    }).catch(error => {
        res.status(500).json({
            message : "Something went wrong"
        })
    });
}

function index(req, res){
    models.Module.findAll().then(result => {
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
    const updatedModule = {
        name: req.body.name,
        coeff: req.body.coeff,
        teacherId: 1,
    }
    models.Module.update(updatedModule, {where: {id: id}}).then(result => {
        res.status(200).json({
            message: "Module Updated Successfully",
            Module: updatedModule
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
    models.Module.destroy({where:{id:id}}).then(result => {
        if(result){
            res.status(200).json({
                message: "Module Deleted successfully"
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