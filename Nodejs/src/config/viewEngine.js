import express from 'express';

let configViewEngine = (app) => {
  app.use(express.static('./src/public'));
  app.set('view engine', 'ejs');
  app.set('views', './src/view');
  app.use(express.static('./src/view'));
  app.set('layout', 'layout/layout');
};

module.exports = configViewEngine;
