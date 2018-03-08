const exec=require('child_process').execSync;
const isPrivateKey=require('../../isPrivateKey');

const file=(filepath)=>{
    if( filepath==null ) return false;
    if( isPrivateKey(filepath) ){ throw new Error('!!!!! '+filepath+' is private key !!!!!'); }
    
    try{ exec('git add '+filepath); }
    catch(e){
	console.log('git.add.file catch exception');
	if( e.stdout.toString().length>0 ){ console.log('std out : ', e.stdout.toString()); }
	console.log('std err : ', e.stderr.toString());
	return false;
    }
    return true;
}

module.exports=file;
