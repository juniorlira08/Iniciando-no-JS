const axios = require('axios')

axios.get('https://google.com').then(function(result){
    console.log(result.data)
})