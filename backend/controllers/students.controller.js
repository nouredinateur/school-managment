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
        res.status(200).json(result)
    }).catch(error => {
        res.status(500).json({
            message : "Something went wrong"
        })
    });
}

function index(req, res){
    models.Student.findAll().then(result => {
        res.status(200).json(result)
    }).catch(error => {
        res.status(500).json({
        message: "Something is wrong"
        })
    });
}

module.exports = {
    save : save,
    show : show,
    index : index
}