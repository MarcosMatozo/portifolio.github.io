var ghpages = require('gh-pages');

ghpages.publish('build', function(err) {
  if (err) {
    console.error('Erro ao publicar:', err);
  } else {
    console.log('Publicação bem-sucedida!');
  }
});