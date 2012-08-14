/**
 * Broadly useful (not site-specific) utility extensions defined here
 * Add site-specific functions to site_util.js. They will be added on
 * to the exports from util for convenience (so <pop:util:...> will be
 * as verbose as template authors need to get).
 */

var _ = exports._ = require('underscore')._;

// Uncomment to use convenience libraries in extensions:
_(exports).extend(
//  { Mustache: require('mustache') },
  require('render_if'),
  require('site_util')
)

exports.parent_category = function(options, enclosed, scope) {
  var path = request.path.replace(/\/[^\/]+$/, '');
  var categories = site.categories({from: scope.lookup('section').id});

  for (var i = 0, l = categories.length; i < l; i++) {
    if (path === categories[i].permalink) {
      return categories[i];
    }
  }

  return null;
}
