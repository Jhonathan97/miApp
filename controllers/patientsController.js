const fetch = require("node-fetch");
const { Patients } = require("../dataBase");


exports.getPatients = (req, res) => {
    let url = "https://www.datos.gov.co/resource/gt2j-8ykr.json";
    fetch(url)
        .then((req) => req.json())
        .then(function(data) {
            var men20 = [];
            var men40 = [];
            var menOlder40 = [];
            var women20 = [];
            var women40 = [];
            var womenOlder40 = [];
            data.forEach(function(element) {
                var age = parseInt(element.edad);
                if (element.sexo == "M") {
                    if (age < 20) {
                        men20.push(element);
                    } else if (age > 20 && age < 40) {
                        men40.push(element);
                    } else {
                        menOlder40.push(element);
                    }
                } else {
                    if (age < 20) {
                        women20.push(element);
                    } else if (age > 20 && age < 40) {
                        women40.push(element);
                    } else {
                        womenOlder40.push(element);
                    }
                }
            });
            var dataCount = {
                men: { minos20: men20, range20_40: men40, older40: menOlder40 },
                women: { minos20: women20, range20_40: women40, older40: womenOlder40 },
            };
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(dataCount);
        });
};