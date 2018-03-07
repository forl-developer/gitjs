const exec=require('child_process').execSync;

const json=()=>{
    const out=exec("git log --date=format:'%Y-%m-%dT%H:%M:%S'").toString().split('\n');
    const json={};
    let obj;
    for( const l of out ){
	if( l.indexOf('commit')===0 ){
	    const key=l.split(' ').filter(a=>{ return a.length!==0 })[1];
	    json[key]={};
	    obj=json[key];
	    continue;
	}
	console.log(l);
	if( l.indexOf(' ')===0 ) obj['message']=l.trim();

	const arr=l.split(' ').filter(a=>{ return a.length!==0 });
	if( arr.length===0 ) continue;
	console.log(arr);
	if( arr[0].indexOf(':')===arr[0].length-1 ){	    
	    const key=arr[0].replace(':', '');
	    if( key==='Date' ) obj[key]=new Date(arr[1]);
	    else  obj[key]=arr[1];
	}
    }
    return json;    
}

module.exports=json;
