const Grade = require('../models/gradeModdel');

const gradesController = {

    getAllGrades: async (req, res) => {
        try {
            const grades = await Grade.find();
            res.json(grades);
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    getGradeById: async ( req, res) => {
        const { id } = req.params;
        console.log(id);
        try {
            const gradeId = await Grade.findOne({ id: id });
            res.json(gradeId); 
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
};

module.exports = gradesController;