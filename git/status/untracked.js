const exec=require('child_process').execSync;

const untracked=()=>{
    const out=exec('git status -s').toString();
    return arr=out.split('\n').map(a=>{ return a.split(' ').filter(a=>{ return a.length!==0 }) })
	.filter(a=>{ return a[0]==='??' }).map(a=>{ return a[1] }); 
    
}

module.exports=untracked;
