var tests = {
  /* Add any custom tests (conditions) here
   * Params can be passed from templates in the form
   * 
   *    <pop:util:render_if my_condition="something special"
   *    
   * to run tests['my_condition']('something special', scope)
   * where scope is the current Webpop template context.
   *
   * The function should return true or false to indicate the
   * verdict of the test.
   */

  /**
   * Checks the current section against the parameter
   * @param  {string} titleOrSlug - the slug or title of the section to compare
   * @return {boolean} - true if the current section matches the parameter.
   */
  section: function(titleOrSlug) {
    return titleOrSlug === section.slug || titleOrSlug === section.title;
  },

  /**
   * Checks a collection for specified quantity of items
   * @param  {string} input - expects a comparison statement
   *   in the form 
   *
   *     '[<operator>][ ]<integer>[ ]<collection_identifier>'
   *
   *   where <operator> is '>', '>=', '=', '<', or '<=' (defaults to '>=' if ommited)
   *   and <collection_identifier> is a collection identifier in the scope of the calling template.
   *
   *
   * @param {object} scope - current Webpop template scope
   *           
   * Example invocation: '<pop:util:render_if contains=">4 photos">...</pop:util:render_if>
   *   
   * @return {boolean} - true if the number of items in the collection matches the given criteria.
   */
  contains: function(input, scope) {
    var
      tokens = input.match(/([^0-9 ]+)? *(\d+) *(.+)/), // e.g.=> ['>= 2 photos', '>=', '2', 'photos' ...]
      comparator = tokens[1],                           // e.g.=> '>='
      number = parseInt(tokens[2]),                     // e.g.=> 2
      collection = scope[tokens[3]]                     // e.g.=> 'photos'
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
  for (var key in params) do_render &= tests[key] && tests[key](params[key], scope);

  return !!do_render && enclosed.render();
}