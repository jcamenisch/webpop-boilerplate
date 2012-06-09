<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><pop:content.title /></title>
    <description><pop:content.description /></description>
    <link><pop:content.url /></link>
    <atom:link href="<pop:content.url/>.rss" rel="self" type="application/rss+xml" />
    <pop:entries order="created_at DESC" limit="50">
      <item>
        <title><pop:title /></title>
        <description><pop:description /></description>
        <guid><pop:url /></guid>
        <pubDate><pop:created_at format="date" mask="ddd, dd mmm yyyy HH:MM:ss"/> UT</pubDate>
        <link><pop:url /></link>
      </item>
    </pop:entries>
  </channel>
</rss>