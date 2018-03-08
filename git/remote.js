const json=require('./remote/json');

const remote={
    json: json,
    name: ()=>{ return Object.keys(json()); },
    url: ()=>{ return Object.values(json()).map(a=>{ return a.url }); },
}

module.exports=remote;
