const exec=require('child_process').execSync;

const array=()=>{
    const out=exec('git branch').toString();
    return out.split('\n').map(a=>{ return a.replace('\*', '').trim(); }).filter(a=>{ return a.length!==0; });
}

module.exports=array;
