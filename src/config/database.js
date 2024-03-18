const mongoose = require('mongoose');
let Grade;

const connectDatabase = async () => {
    try {
        if (!Grade) {
            Grade = mongoose.model('Grade', require('../models/gradeModdel').schema);
        }

        await mongoose.connect('mongodb+srv://sepulvedagiraldocamila:IAw9xmtt7wXcTtIL@db-1.idpnodb.mongodb.net/')
            .then(() => console.log('MongoDB Connected'))
            .catch((err) => console.log(err));

        await initializeData();

    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);
    }
};

const initializeData = async () => {
    try {
        await Grade.deleteMany();

        const gradeData = [
            {
                name: 'pepito',
                grade: 5.0,
                id: 1
            },
            {
                name: 'juan',
                grade: 3.0,
                id: 2
            },
            {
                name: 'romaa',
                grade: 2.0,
                id: 3
            },
        ];


        await Grade.insertMany(gradeData);
        console.log('Data successfully initialized');
    } catch (error) {
        console.error('Data initialization error:', error);
        process.exit(1);
    }
};

module.exports = connectDatabase;