<!doctype html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!-- Consider adding an manifest.appcache: h5bp.com/d/Offline -->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
  <meta charset="utf-8">

  <!-- Based on http://html5boilerplate.com/ -->
   <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  
  <pop:site>
    <title><pop:title /></title>
    <meta name="description" content="<pop:description />" />
  </pop:site>

  <!-- Mobile viewport optimized: j.mp/bplateviewport -->
  <meta name="viewport" content="width=device-width,initial-scale=1">

  <!-- Place favicon.ico and apple-touch-icon.png in the root directory: mathiasbynens.be/notes/touch-icons -->

  <!-- CSS: implied media=all -->
  <!-- CSS concatenated and minified via ant build script-->
  <link rel="stylesheet" href="css/style.css">
  <!-- end CSS-->

  <!-- More ideas for your <head> here: h5bp.com/d/head-Tips -->

  <!-- All JavaScript at the bottom, except for Modernizr / Respond.
       Modernizr enables HTML5 elements & feature detects; Respond is a polyfill for min/max-width CSS3 Media Queries
       For optimal performance, use a custom Modernizr build: www.modernizr.com/download/ -->
  <script src="js/libs/modernizr-2.0.6.min.js"></script>

  <!-- Auto-discovery for rss feeds -->
  <pop:rss><link rel="alternate" type="application/rss+xml" title="RSS" href="<pop:url />" /></pop:rss>

  <!-- This tag inserts the javascript needed for the preview mode editing and for the end user login.
  -->
  <pop:admin />
</head>

<body>
  <div id="container">
    <header>
      <hgroup>
        <!-- The <pop:site> tag references the fields in the home section. -->
        <pop:site>
          <h1><a href="/"><pop:title /></a></h1>
          <h2><pop:description /></h2>
        </pop:site>
      </hgroup>
      <nav>
        <!-- The <pop:sections> tag refers to the top level sections of the site -->
        <pop:sections wrap="ul" break="li"><a href="<pop:permalink />"><pop:title /></a></pop:sections>
      </nav>
    </header>
    
    <div id="main">
      <!-- The <pop:region> tag indicates a region that templates using this layout can provide content for.
      If the template using the layout doesn't specify a <pop:block> for the region, the default content will
      be displayed.
      -->
      <pop:region name="main">
        <h1>Default content</h1>
      </pop:region>
    </div>
    
    <footer>

    </footer>
  </div> <!--! end of #container -->


  <!-- Javascript at the bottom for fast page loading -->

  <!-- Grab Google CDN's jQuery. fall back to local if necessary -->
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>  
  <script>window.jQuery || document.write("<script src='/js/libs/jquery-1.6.2.min.js'>\x3C/script>")</script>

  <script src="/js/plugins.js"></script>
  <script src="/js/script.js"></script>

  <pop:track/>
  <!-- Change UA-XXXXX-X to be your site's ID -->
  <script>
    window._gaq = [['_setAccount','UAXXXXXXXX1'],['_trackPageview'],['_trackPageLoadTime']];
    Modernizr.load({
      load: ('https:' == location.protocol ? '//ssl' : '//www') + '.google-analytics.com/ga.js'
    });
  </script>

  <pop:development>    
    <!-- Outputs any log(message) statements from extensions to console.log -->
    <pop:log/>
  </pop:development>    
    
  <!-- Prompt IE 6 users to install Chrome Frame. Remove this if you want to support IE 6.
       chromium.org/developers/how-tos/chrome-frame-getting-started -->
  <!--[if lt IE 7 ]>
    <script src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
    <script>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
  <![endif]-->
</body>
</html>