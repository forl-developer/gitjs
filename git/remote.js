const json=require('./remote/json');

const remote={
    json: json,
    name: ()=>{ return Object.keys(json()); },
}

module.exports=remote;
