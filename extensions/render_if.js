var tests = {
  /* Add any additional tests here
   * Params can be passed from templates in the form
   *    <pop:util:render_if [test_name]="[input]"
   * to run the function [test_name], passing [input] as the one
   * parameter.
   *
   * The function should return true or false to indicate the
   * verdict of the test.
   */

  section: function(input) {
    return input === section.slug || input === section.title;
  },

  contains: function(input) {
    var
      input = input.split(' '),                            // e.g.=> ['>=2', 'photos']
      condition_words = input[0].match(/([^0-9]+)?(\d+)/), // e.g.=> ['>=2', '>=', '2', ...]
      comparator = condition_words[1],                     // e.g.=> '>='
      number = parseInt(condition_words[2]),               // e.g.=> 2
      collection = scope[input[1]]                         // e.g.=> 'photos'
    ;

    if (!(number && collection && collection.length)) return false;
    switch (comparator) {
      case '>' : return collection.length  >  number;
      case '=' : return collection.length === number;
      case '<=': return collection.length  <= number;
      case '<' : return collection.length  <  number;
      default  : return collection.length  >= number;
    }
  }
}

exports.render_if = function(params, enclosed, scope) {
  var do_render = true;
  for (var key in params) do_render &= tests[key] && tests[key](params[key]);

  return !!do_render && enclosed.render();
}