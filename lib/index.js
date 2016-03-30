'use strict';

module.exports = (t, lib) => {
  require('./misc')(t, lib);
  require('./searchStream')(t, lib);
  require('./multiStream')(t, lib);
  require('./constStream')(t, lib);
};
