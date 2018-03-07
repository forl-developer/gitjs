const json=require('./json');

const array=()=>{
    const obj=json();
    const arr=[];
    for( const [ key, val ] of Object.entries(obj) ){ arr.push({ ...val, 'commit': key }); }
    return arr;
}

module.exports=array;
