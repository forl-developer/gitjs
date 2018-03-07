const exec=require('child_process').execSync;

const deleted=()=>{
    const out=exec('git status -s').toString();
    return arr=out.split('\n').map(a=>{ return a.split(' ').filter(a=>{ return a.length!==0 }) })
	.filter(a=>{ return a[0]==='D' }).map(a=>{ return a[1] }); 
    
}

module.exports=deleted;
