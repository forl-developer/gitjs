const exec=require('child_process').execSync;

const setValue=(json, arr, val)=>{
    if( arr.length===1 ) json[arr.shift()]=val;
    else{
	const key=arr.shift()
	if( json[key]==null ) json[key]={};
	setValue(json[key], arr, val);
    }
}

const json=()=>{
    const out=exec('git config -l').toString();
    const arr=out.split('\n').filter(a=>{ return a.length!==0; }).map(a=>{ return a.split('='); });
    
    const json={};
    for( const [ key, val ] of arr ){
	const keyChain=key.split('.');
	setValue(json, keyChain, val);
    }
    return json;
}

module.exports=json;
