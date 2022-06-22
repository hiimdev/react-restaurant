const Cocktails = require('../model/cocktails.model.js');

exports.GetCocktails = async (req, res) => {
    try {
        const cocktails = await Cocktails.find();
        res.json(cocktails);
    } catch (err) {
        res.json(message.err);
    }
};

exports.CreateCocktails = async (req, res) => {
    const cocktails = new Cocktails({
        title: req.body.title,
        price: req.body.price,
        tags: req.body.tags,
    });

    cocktails.save(function(err, response) {
        if (err) {
            res.status(201).json({
                code: 201,
                message: 'Error Create cocktails',
            });
        } else {
            res.status(200).json({
                code: 200,
                message: 'Create success cocktails',
                data: response,
            });
        }
    });
};
