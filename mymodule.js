const fs = require('fs');
const path = require('path')


module.exports=(dir,err,list)=>{
    ext=`.${ext}`;
    fs.readdir(dir,(err,list)=>{
        if (err) return callback(err);
        const filtred = list.filter(file=> path.extname(file) === ext);
    
        return callback(null,filtred);
    });
}