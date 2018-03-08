const exec=require('child_process').execSync;

const reflog=()=>{
    const arr2D=exec('git reflog --all').toString().split('\n').filter(a=>{ return a.length!==0 })
	  .map(a=>{ return a.split(' ').filter(a=>{ return a.length!==0 }); })
      
    const result=new Array(arr2D.length);
    for( const arr of arr2D ){
	const num=parseInt(arr[1].slice(arr[1].lastIndexOf('{')+1, arr[1].lastIndexOf('}')));
	const branch=arr[1].slice(arr[1].lastIndexOf('/')+1, arr[1].lastIndexOf('@'));
	
	result[num]={
	    hash: arr[0],
	    'branch': branch,
	    type: arr[2].replace(':', ''),
	}
	if( result[num].type==='commit' ){
	    if( arr[3]==='(initial):' ){
		result[num].isInitial=true;
		result[num].comment=arr.slice(4).reduce((a, b)=>{ return a+' '+b; });
	    }
	    else{
		result[num].moveTo=0;
		result[num].comment=arr.slice(3).reduce((a, b)=>{ return a+' '+b; });
	    }
	}
	else if( result[num].type==='reset' ){
	    result[num].moveTo=arr.pop().replace('HEAD', '').length;
	}
	else throw new Error('m(_ _)m '+result[num].type+' is not supported\nPlease ask us.'); 
//	console.log(result[num]);
    }
    return result;
}

module.exports=reflog;
