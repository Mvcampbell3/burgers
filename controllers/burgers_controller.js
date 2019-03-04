const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const router = express.Router()

const burger = require("../models/burger")

//you will be getting data from the require burgers.js which makes use or orm??


router.get("/", (req, res) => {
    burger.all((data) => {
        let sendObj = {
            burgers: data
        }
        res.render("index", sendObj)
    })
})

router.post("/api/burger", (req, res) => {
    burger.create(req.body.name, (result)=> {
        res.json({ id:result.insertId });
    })
})

router.delete("/api/burger/:id", (req, res) => {
    burger.delete(req.params.id, (result) => {
        res.json(true);
    })
})

router.put("/api/burger/:id", (req,res) => {
    burger.change(req.body.devoured, req.params.id, (result) => {
        res.json({ok:true})
    })
    
})



module.exports = router;