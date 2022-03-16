var axios = require('axios');
var data = JSON.stringify({
    "dataSource": "Integrationsseminar",
    "database": "Integrationsseminar",
    "collection": "produkte"
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-iqgne/endpoint/data/beta/action/find',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'IeZWWp5mZE8GuTj1RNChF3SPK8rMbTssSkPJT6Bx3hEHUVe3X0AYpCIKc5M4DOta'
    },
    data : data
};
    
export default function ProductRequestSrc() {
    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
} 

/* axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        }); */