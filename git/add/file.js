const exec=require('child_process').execSync;
const includesPrivateKey=require('../../includesPrivateKey');

const file=(filepath)=>{
    if( filepath==null ) return false;
    if( includesPrivateKey(filepath) ){ throw new Error('!!!!! '+filepath+' includes private key !!!!!\n git add command rejected'); }
    
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
