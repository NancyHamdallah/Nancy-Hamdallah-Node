//read file data
// readThisFile.js
module.exports = {readMyFile}
const fs = require ('fs');

function readMyFile(path){
   return fs.readFileSync(path, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.error('File not found:');
      } else {
        console.error('Error reading file:', err);
      }
      return ;
    }
    
    return data;
  });
              
  
}
