const deleted=require('./status/deleted');
const modified=require('./status/modified');
const ignored=require('./status/ignored');
const untracked=require('./status/untracked');

const status={
    deleted: deleted,
    modified: modified,
    ignored: ignored,
    untracked: untracked,
}

module.exports=status;
