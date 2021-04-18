const express = require("express")
const router = express.Router()

router.get("/", (req, res)=>{
    res.send('Hello Solomon your first App')
})

module.exports = router