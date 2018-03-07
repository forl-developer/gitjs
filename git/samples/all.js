const git=require('git');

// console.log(git.branch.array());
// console.log(git.branch.get());
// console.log(git.file.array());
// console.log(git.file.stat());
console.log(git.config.json());
// console.log(git.log.json());
// console.log(git.log.array());
// console.log(git.status.ignored());
// console.log(git.status.deleted());
// console.log(git.status.modified());
// console.log(git.status.untracked());
console.log(git.remote.json());
console.log(git.remote.name());
console.log(git.commit.all());

