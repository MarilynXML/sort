var http = require('http')
  , fs = require('fs')
  , options
options = {
    host: 'camo.githubusercontent.com'
  , port: 80
  , path: '/feafe5e969d341a4045a93ef225187750f844850/687474703a2f2f736661756c742d696d6167652e62302e7570616979756e2e636f6d2f31322f31622f31323162613064333737393864366432333232376432646434396430653538635f61727469636c6578'
}

var request = http.get(options, function(res){
    var imagedata = ''
    res.setEncoding('binary')

    res.on('data', function(chunk){
        imagedata += chunk
    })

    res.on('end', function(){
        fs.writeFile('logo.png', imagedata, 'binary', function(err){
            if (err) throw err
            console.log('File saved.')
        	request.end();
        })
    })

})