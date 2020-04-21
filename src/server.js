const http=require("http");
router= require("./router.js")


const PORT = process.env.PORT || 3000;
var creatCon=http.createServer(router)


creatCon.listen(PORT,() =>
{
console.log(`Magic happens on http://localhost:${PORT}`);
})