<!DOCTYPE html>
<html>
<head>
	<title>My Discount Calc</title>
	<link rel="stylesheet" href="styling.css">
	<script src="javascript.js"></script>
</head>
<body>
<h1>Discount Calculator</h1>
<form id="form">
  Enter the cost of the product:<br>
  <input id="price" type="number" name="productPrice"><br>
  <br>
  Enter the percent discount of the product:<br>
  <input id="discount" type="number" name="discountPrice"><br>
</form>
<br>
<button id="button" onclick="myFunction()">Calculate</button>
<br><br>
<input id="total" readonly id="total">

<!--read only means it cannot be modified-->

</body>
</html>
