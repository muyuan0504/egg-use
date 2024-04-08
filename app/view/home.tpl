<!-- app/view/home.tpl -->

<!DOCTYPE html>
<html>
  <head>
    <title>Hacker News</title>
    <!-- public 目录读取静态资源文件 -->
    <link rel="stylesheet" href="./public/css/index.css" type="text/css" />
  </head>
  <body>
    <ul class="news-view view">
      {% for item in list %}
        <li class="item">
          <a href="{{ item.url }}">{{ item.title }}</a>
          {{ helper.relativeTime(item.time) }}
        </li>
      {% endfor %}
    </ul>
    <script src="./public/js/util.js"></script>
  </body>
</html>