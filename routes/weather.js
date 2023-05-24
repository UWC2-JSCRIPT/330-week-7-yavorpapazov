const { Router } = require("express");
const router = Router();
const weatherDAO = require('../daos/weather');

router.post("/", async (req, res, next) => {
    const savedItem = await weatherDAO.createItem(req.body);
    res.json(savedItem);
});

router.get("/", async (req, res, next) => {
    res.send(`
        <html>
            <body>
                <form action="/weather/location">
                    <input type="text" placeholder='Name', name="name">
                    <input type="submit" value="Submit">
                </form>
            </body>
        </html>
    `);
});

router.get("/location", async (req, res, next) => {
    const { name } = req.query;
    const item = await weatherDAO.getById(name);
    const data = {
        location: item.name, temperature: item.temperature
    }
    res.render('index', { locationData: data });
});

module.exports = router;