const exec=require('child_process').execSync;

const json=()=>{
    const out=exec('git remote -v').toString();
    const lines=out.split('\n').filter(a=>{ return a.length!==0 });
    const arr=[];
    for( const l of lines ){
	const [ a, bc ] = l.split('\t');
	const [ b, c ]=bc.split(' ');
	arr.push([ a, b, c.replace('(', '').replace(')', '') ]);
    }

    const json={};
    for( const l of arr ){
    	if( json[l[0]]==null ) json[l[0]]={};
    	if( json[l[0]]['options']==null ) json[l[0]]['options']=[ l[2] ];
	else json[l[0]]['options'].push(l[2]);
    	json[l[0]]['url']=l[1];
    }
    return json;
}

module.exports=json;
