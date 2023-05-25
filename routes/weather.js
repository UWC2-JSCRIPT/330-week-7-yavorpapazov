const { Router } = require("express");
const router = Router();
const weatherDAO = require('../daos/weather');

router.post("/", async (req, res, next) => {
    const savedItem = await weatherDAO.createItem(req.body);
    res.json(savedItem);
});

router.get("/", async (req, res, next) => {
    res.render('landing');
});

router.get("/location", async (req, res, next) => {
    const { name } = req.query;
    const item = await weatherDAO.getById(name);
    if (name === '') {
        return res.status(302).redirect('/weather')
    }
    if (!item) {
        res.status(404).render('error', { location: name });
    } else {
        const data = {
            location: item.name, temperature: item.temperature
        }
        res.render('index', { locationData: data });
    } 
});

module.exports = router;