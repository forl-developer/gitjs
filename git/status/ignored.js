const exec=require('child_process').execSync;

const ignored=()=>{
    const out=exec('git status -s --ignored').toString();
    return arr=out.split('\n').map(a=>{ return a.split(' ').filter(a=>{ return a.length!==0 }) })
	.filter(a=>{ return a[0]==='!!' }).map(a=>{ return a[1] }); 
    
}

module.exports=ignored;
