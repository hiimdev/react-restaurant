const mongoose = require('mongoose');

const dataSchema = mongoose.Schema(
    {
        title: {
            type: String,
        },
        price: {
            type: Number,
        },
        tags: {
            type: String,
        },
    },
    {
        collection: 'wines',
    },
);

module.exports = mongoose.model('wine', dataSchema);
