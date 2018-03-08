const fs=require('fs'), path=require('path');

const isPrivateKey=(filepath)=>{
    console.log(process.cwd());
    if( filepath==='isPrivateKey.js' ) return false;
    if( !fs.existsSync(filepath) ) return false;
    if( fs.statSync(filepath).isDirectory() ) return false;

    
    return fs.readFileSync(filepath, 'utf-8').includes('RSA PRIVATE KEY');
}

module.exports=isPrivateKey
