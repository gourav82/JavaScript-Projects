const fs = require("fs");

function problem1() {
    const data = [1,2,3,4,5,6,7,8,9,10];

    data.forEach(element => {
        fs.writeFile(`./problem${element}.json`, "hello Gourav", (err)=>{
            if(err){
                console.log(err);
            }else{
                console.log(`the file problem${element}.json creared successfully`);
            }
        });
    
    });

   
   
}
module.exports = problem1;


