const exec=require('child_process').execSync;
const status=require('../status.js');
const fs=require('fs');

const all=(message)=>{
    const modified=status.modified();
    const untracked=status.untracked().filter(a=>{
	if( a.indexOf('~')!==a.length-1 ) return true;
	fs.unlinkSync(a);
	return false;
    }).filter(a=>{
	if( a.indexOf('#')!==0 ) return true;
	fs.unlinkSync(a);
	return false;
    });

    for( const a of untracked ) exec('git add '+a);

    let msg='';
    if( modified.length>0 ) msg+='[modify]'
    if( untracked.length>0 ) msg+='[add]'
    if( msg.length===0 ){
	conole.log('git.commit no updated file');
	return '';
    }
    if( message!=null ) msg+=' '+message;
    else msg+=' auto message by gitjs';
    const out=exec("git commit -a -m '"+msg+"'").toString();
    return out;
}

module.exports=all;
