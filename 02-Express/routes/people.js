const express = require("express")
const router = express.Router();

const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require("../controllers/people")

// router.get("/", getPeople)
// router.post("/", createPerson)
// router.post("/postman", createPersonPostman)
// router.put("/:id", updatePerson)
// router.delete("/:id", deletePerson) 

router.route("/").get(getPeople)
router.route("/").post(createPerson)
router.route("/").post(createPersonPostman)
router.route("/").update(updatePerson)
router.route("/").delete(deletePerson)

module.exports = router