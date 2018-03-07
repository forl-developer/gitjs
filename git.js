const branch=require('./git/branch');
const file=require('./git/file');
const config=require('./git/config');
const log=require('./git/log');
const status=require('./git/status');

const git={
    branch: branch,
    file: file,
    config: config,
    log: log,
    status: status,
}

module.exports=git;
