const exec=require('child_process').execSync;
const status=require('../status.js');
const add=require('../add.js');

const all=(message)=>{
    const modified=status.modified();
    const untracked=status.untracked();

    for( const a of untracked ) add.file(a);

    let msg='';
    if( modified.length>0 ) msg+='[modify]'
    if( untracked.length>0 ) msg+='[add]'
    if( msg.length===0 ){
	console.log('git.commit no updated file');
	return '';
    }
    if( message!=null ) msg+=' '+message;
    else msg+=' auto message by gitjs';
    const out=exec("git commit -a -m '"+msg+"'").toString();
    return out;
}

module.exports=all;
