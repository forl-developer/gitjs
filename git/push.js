const exec=require('child_process').execSync;

const optParse=(json)=>{
    let opt='';
    for( const [ key, val ] of Object.entries(json) ){
	if( typeof val==='boolean' ) opt+='-'+key+' ';
	else opt='-'+key+'='+val;
    }
    return opt;
}

const argsParse=(...args)=>{
    if( args.length===1 && Array.isArray(args[0]) && args[0].length==2 && typeof args[0][0]==='string' && typeof args[0][1]==='string' ){
	return [ '', args[0][0], args[0][1] ];
    }
    if( args.length===2 ){
	if( typeof args[0]==='object' && Array.isArray(args[1]) ) return [ optParse(args[0]), args[1][0], args[1][1] ];
	if( typeof args[1]==='object' && Array.isArray(args[0]) ) return [ optParse(args[1]), args[0][0], args[0][1] ];
	if( typeof args[0]==='string' && Array.isArray(args[1]) ) return [ args[0], args[1][0], args[1][1] ];
	if( typeof args[1]==='string' && Array.isArray(args[0]) ) return [ args[1], args[0][0], args[0][1] ];
    }
    throw new Error('!!!!! git.push invailed arguments!!!!!');
}

const push=(...args)=>{
    const [ opt, remote, local ]=argsParse(...args);
    console.log('git push '+opt+' '+remote+' '+local);
    return exec('git push '+opt+' '+remote+' '+local).toString();
}

module.exports=push;
