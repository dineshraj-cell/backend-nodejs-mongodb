//all api endpoint shall be defined in this file
let router = require("express").Router();
const restaurantModel = require("./model");

router.get("/restaurants", async(request, response) => {
    const restaurants = await restaurantModel.find({});

    try {
        response.send(restaurants);
    } catch (error) {
        response.status(500).send(error);
    }
});

module.exports = router;