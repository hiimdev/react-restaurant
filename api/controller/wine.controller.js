const Wine = require('../model/wine.model.js');

exports.GetWine = async (req, res) => {
    try {
        const wine = await Wine.find();
        res.json(wine);
    } catch (err) {
        res.json(message.err);
    }
};

exports.CreateWine = async (req, res) => {
    const wine = new Wine({
        title: req.body.title,
        price: req.body.price,
        tags: req.body.tags,
    });

    wine.save(function(err, response) {
        if (err) {
            res.status(201).json({
                code: 201,
                message: 'Error Create',
            });
        } else {
            res.status(200).json({
                code: 200,
                message: 'Create success',
                data: response,
            });
        }
    });
};
