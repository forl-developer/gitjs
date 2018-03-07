const exec=require('child_process').execSync;

const get=()=>{
    const out=exec('git branch').toString();
    return out.split('\n').filter(a=>{ return a.indexOf('\*')===0; }).map(a=>{ return a.replace('\*', '').trim(); })[0];
}

module.exports=get;
