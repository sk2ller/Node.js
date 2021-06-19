const myModule = require('./mymodule');

const directory = process.argv[2];
const extension = process.argv[3];
myModule(directory,extension,(err,filterdList)=>{
    if(err)return console.error(err);
    filterdList.foreach(file=>{
        console.log(file);
    });
});