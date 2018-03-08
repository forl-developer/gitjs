const fs=require('fs'), path=require('path');
const isPrivateKey=require('./isPrivateKey');

const includesPrivateKey=(filepath)=>{
    if( !fs.existsSync(filepath) ) return false;
    if( fs.statSync(filepath).isDirectory() ){	
	const files=fs.readdirSync(filepath);
	for( const f of files ){
	    if( fs.statSync(path.join(filepath, f)).isDirectory() ) continue;
	    if( isPrivateKey(path.join(filepath, f)) ) return true;
	}
	return false;
    }

    return isPrivateKey(filepath);
}

module.exports=includesPrivateKey;
