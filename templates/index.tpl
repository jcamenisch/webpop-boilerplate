<pop:layout name="default" />
<pop:block region="main">
  <!-- This template uses the layout "default" found in /layouts/default.tpl -->
  
  <!-- Everything inside <pop:block region="main"> will replace the contents of the <pop:region name="main">
       in the default.tpl layout. -->
  
  <!-- The <pop:content> tag refers to the current content displayed by the template. It can also be used to
  refer to a specific content by using the from attribute: <pop:content from="/about-us" />
  -->
  <pop:content>
    <article>
      <h1><pop:title /></h1>
      <div class="body"><pop:body /></div>
    </article>
  </pop:content>
  
  <!--The <pop:categories> tag refers to the categories for the section currently displayed. All tags can use the
  wrap and break attributes. A from attribute can be used to refer to the categories of a specific section:
  <pop:categories from="/blog">
   -->
  <pop:categories wrap="ul" break="li">
    <a href="<pop:permalink />"><pop:title /></a>
  </pop:categories>
  
  <!-- The <pop:entries> tag will iterate over all the entries for the current content. As with the content tag
  it can be used to refer to a specific section or category by using the from attribute: <pop:entries from="/blog"> 
  -->
  <pop:entries limit="10" order="created_at DESC">
    <article>
      <h1><a href="<pop:permalink />"><pop:title /></a></h1>
      <div class="body"><pop:body /></div>
    </article>
  </pop:entries>
</pop:block>