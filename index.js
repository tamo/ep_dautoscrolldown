'use strict';
const eejs = require('ep_etherpad-lite/node/eejs/');
const settings = require('ep_etherpad-lite/node/utils/Settings');

exports.eejsBlock_editbarMenuLeft = (hookName, args, cb) => {
  args.content += eejs.require('ep_dautoscrolldown/templates/separator.ejs');
  args.content += eejs.require('ep_dautoscrolldown/templates/auto-scroll-to-down.ejs');
  args.content += eejs.require('ep_dautoscrolldown/templates/scroll-to-down.ejs');
  return cb();
};
exports.clientVars = (hook, context, callback) => {
  if (settings.ep_dautoscrolldown) {
    callback({dAutoScrollDownSettings: settings.ep_dautoscrolldown});
  } else {
    callback({dAutoScrollDownSettings: {}});
  }
};
