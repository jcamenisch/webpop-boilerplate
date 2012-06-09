exports.render_if = function(params, enclosed, scope) {
  var tests = {
    section: function(value) {
      return value === section.slug || value === section.title;
    }
    /* Add any additional tests here
     * Params can be passed from templates in the form
     *    <pop:util:render_if [test_name]="[value]"
     * to run the function [test_name], passing [value] as the one
     * parameter.
     *
     * The function should return true or false to indicate the
     * verdict of the test.
     */
  }
  
  var do_render = true;
  for (var key in params) {
    do_render &= tests[key] && tests[key](params[key]);
  }

  return !!do_render && enclosed.render();
}
