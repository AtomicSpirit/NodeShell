const fs = require('fs')
module.exports = function (arg){
    console.log(arg)
fs.readFile(arg,function(err, data){
    process.stdout.write(data)
})
process.stdout.write('\nprompt > ');
}