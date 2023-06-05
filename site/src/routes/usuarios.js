var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})


router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});


// Rotas dos personagens//

router.post("/likeJoel", function (req, res) {
    usuarioController.CurtirJoel(req, res);
    
})

router.post("/likeInfectados", function (req, res) {
    usuarioController.CurtirInfectados(req, res);
})

router.post("/likeBill", function (req, res) {
    usuarioController.CurtirBill(req, res);
})

router.post("/likeTess", function (req, res) {
    usuarioController.CurtirTess(req, res);
})

router.post("/likeEllie", function (req, res) {
    usuarioController.CurtirEllie(req, res);
})




module.exports = router;