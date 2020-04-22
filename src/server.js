const http = require("http");
router = require("./router.js")
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;


const PORT = process.env.PORT || 3000;
var creatCon = http.createServer(router)


creatCon.listen(PORT, () => {
    console.log(`Magic happens on http://localhost:${PORT}`);
})