var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended : true}));

app.use(express.static(("public")));
var ms = require("./math");

app.set("view engine", "ejs");

app.set("port", process.env.PORT || 3000);

app.get("/", getData);
app.post("/", postData);

function getData(req, res)
{
    console.log("getting data");
    res.render("result", { var1 : "2", var2 :"2", sign : "+", result: 4 });
    res.end();
}

function postData(req, res)
{
    console.log("posting data");
    var variable1 = req.body.var1;
    var operator = req.body.sign;
    var variable2 = req.body.var2;

    console.log(variable1);
    console.log(operator);
    console.log(variable2);

    var result = ms.compute(variable1, operator, variable2)

    res.render("result", { var1 : variable1, sign : operator, var2 : variable2, result: result });
}

app.listen(app.get("port"), () => console.log("server is listening on port " + app.get("port")));