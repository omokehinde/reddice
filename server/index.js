import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';

let app = express();

app.use(webpackMiddleware(webpack(webpackConfig)));
// app.use('/scripts', express.static(path.join(__dirname, 'scripts')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3030, () => console.log('Localhost running on port:3030'));
