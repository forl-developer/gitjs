const branch=require('./git/branch');
const file=require('./git/file');
const config=require('./git/config');
const log=require('./git/log');
const status=require('./git/status');
const remote=require('./git/remote');
const commit=require('./git/commit');

const git={
    branch: branch,
    file: file,
    config: config,
    log: log,
    status: status,
    remote: remote,
    commit: commit,
}

module.exports=git;
