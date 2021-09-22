const fs = require('fs');
const { promisify } = require('util');
const ghpages = require('gh-pages');

const writeFile = promisify(fs.writeFile);


const publish = async () => {
  try {
    console.log('@@@@@@Try publish');
    await writeFile('build/.nojekyll', '',);
    await writeFile('build/_next/.nojekyll', '',)
    ghpages.publish('build', {
      repo: 'git@github.com:antonino-tocco/build.git',
      dotfiles: true,
    }, (err) => {
      if (err) {
        console.log('@@@@@@@There was an error');
        console.log(err);
      }
      console.log('@@@@@@@Site published');
    });
  } catch (error) {
    console.log('@@@@@@@error on publish');
    console.log(error);
  }
}

publish();
