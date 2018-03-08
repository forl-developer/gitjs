const git=require('git');

console.log(git.commit.all());
console.log(git.push({ u: true }, [ 'github', 'master' ]));


