const { Router } = require("express");
const router = Router();

router.get("/", (req, res, next) => {
    res.send(`
        <html>
            <body>
                <h1>Hello, World!</h1>
            </body>
        </html>
    `);
});

module.exports = router;