/**
 * <pop:render_if:render_if [test]="value" /> (and inverse <pop:render_if:render_if_not [test]="value" />)
 * @string {test}  Can name a property of the tests object (below--which must indicate match or
 *                 not by returning a boolean value).
 *                 Otherwise, it must be a property of the current section in template scope.
 *
 * @string {value} The value for {test} to compare against
 *                 For a custom test function, the value will passed in to the function.
 *                 For a section property, will be checked for exact match
 */

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
    titleOrSlug = titleOrSlug.split(',');
    var section = site.content().section;
    return titleOrSlug.indexOf(section.slug) > -1 || titleOrSlug.indexOf(section.title) > -1;
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
  var ret = true;
  for (var key in params) {
    if (ret) {
      if (tests[key]) ret &= tests[key](params[key], scope);
      else if (section[key]) ret &= (section[key] === params[key]);
      else ret = false;
    }
  }

  return !!ret;
}

exports.render_unless = function(params, enclosed, scope) {
  return !exports.render_if(params, enclosed, scope);
};

exports.render_if_not = exports.render_unless;
