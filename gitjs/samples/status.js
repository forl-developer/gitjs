const git=require('git');

console.log(git.status.ignored());
console.log(git.status.deleted());
console.log(git.status.modified());
console.log(git.status.untracked());
