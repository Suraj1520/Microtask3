const location=require("express").Router()
const axios=require("axios")

location.get("/getAdd", async (req, res) => {
    const { lat, lon } = req.query;
    axios.get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&zoom=18&addressdetails=1&lat=${lat}&lon=${lon}`)
    .then((resp) => {
        console.log(`Status: ${resp.status}`);
        console.log('Body: ', resp.data);
        const ans=resp.data;
        res.send({ans})
    }).catch((err) => {
        console.error(err);
    });
  });

module.exports = location