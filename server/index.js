import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import webpackMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';
import users from './routes/users';

let app = express();

app.use(bodyParser.json());


const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));
app.use(webpackHotMiddleware(compiler));
// app.use('/scripts', express.static(path.join(__dirname, 'scripts')));

app.use('/api/users', users);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});


app.listen(3030, () => console.log('Localhost running on port:3030'));
