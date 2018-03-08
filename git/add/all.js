const status=require('../status');
const file=require('./file');

const all=()=>{
    const untracked=status.untracked();

    const arr=[];
    for( const a of untracked ){ if( file(a) ) arr.push(a); }
    return arr;
}

module.exports=all;
