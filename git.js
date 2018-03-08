const branch=require('./git/branch');
const file=require('./git/file');
const config=require('./git/config');
const log=require('./git/log');
const status=require('./git/status');
const remote=require('./git/remote');
const commit=require('./git/commit');
const push=require('./git/push');
const add=require('./git/add');

const git={
    branch: branch,
    file: file,
    config: config,
    log: log,
    status: status,
    remote: remote,
    commit: commit,
    push: push,
    add: add,
}

module.exports=git;
