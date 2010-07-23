<html>

<head>
<title>AuthSub demo</title>
<!--<link rel="stylesheet" type="text/css" href="css/google.css">-->
<!--<link rel="stylesheet" type="text/css" href="css/frameless.css">-->
<!--[if IE]>
  <link rel="stylesheet" type="text/css" href="css/ieonly.css" />
<![endif]-->
</head>


<body>

<%
    StringBuffer continueUrl = request.getRequestURL();
    int index = continueUrl.lastIndexOf("/");
    continueUrl.delete(index, continueUrl.length());
    continueUrl.append("/LoginServlet");
%>

<FORM NAME=index METHOD=POST ACTION="<%=continueUrl.toString()%>">
<div class="rightcontent">
<div class="content">
<h1>Google AuthSub Demo</h1>
<p>
This page demonstrates a basic version of AuthSub in action.</p>
<p>
The AuthSub token is first retrieved from Google and then used to retrieve your Calendar entries.
</p>
  <input type="checkbox" name="secure" value="true">Use secure connection to retrieve calendar feed.
  <p><input type=submit value="Authenticate">
</p>
</div>
</div>
</FORM>
</body>
</html>
