// add lib function to exports, so all can be accessed under <pop:util:... />
var
  lib = require('lib'),
  _ = lib._
;

_(exports).extend(lib);
