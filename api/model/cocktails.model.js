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
        collection: 'cocktails',
    },
);

module.exports = mongoose.model('cocktails', dataSchema);
