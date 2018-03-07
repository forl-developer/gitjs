const exec=require('child_process').execSync;

const array=()=>{ return exec('git ls-files').toString().split('\n').filter(a=>{ return a.length!==0 }); }

module.exports=array;
