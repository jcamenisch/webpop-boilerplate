/**
 * Pass in an object, get back an array of title/value pairs
 * The object can be specified in one of three ways:
 * 1. From javascript extension code, pass {obj: myObject} as the first parameter.
 * 2. From a template, the current scope object will be used by default.
 * 3. From a template, you can specify a property of the current scope using
 *    the 'obj' parameter, as in obj="something"
 *
 * Examples: TO-DO
 * 
 * @param  {object} params   recieves any parameters from the pop tag
 * @param  {object} enclosed not used
 * @param  {object} scope    The current template scope object
 * 
 * @return {array}           in the form [{title: 'property1', value: 'something'}, {title: 'propery2', value: 'something'}]
 */
exports.object_property_names = function(params, enclosed, scope) {
  var obj = null
  if (params && params.obj) {
    switch (typeof params.obj) {
      case 'object' : obj = params.obj;         break;
      case 'string' : obj = scope[params.obj];  break;
    }
  }
  obj = obj || scope || params;

  //for dumping some object to the screen for inspection
  var results = [];
  for (var prop in obj) results.push({title: prop, value: obj[prop]});
  return results;
}
