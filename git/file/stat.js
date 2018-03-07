const fs=require('fs');
const array=require('./array');

const stat=()=>{
    const arr=array();
    const json={};
    for( const a of arr ){
	const stat=fs.statSync(a);
	json[a]=stat;
    }
    return json;
}

module.exports=stat;
