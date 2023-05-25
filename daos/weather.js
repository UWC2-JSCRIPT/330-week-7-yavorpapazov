const Weather = require('../models/weather');

module.exports = {};

module.exports.createItem = async (item) => {
    const created = await Weather.create(item);
    return created
}

module.exports.getById = async (name) => {
    const item = await Weather.findOne({ name }).lean();
    return item
}