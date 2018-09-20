<?php
    $username = $_POST['username'];
	$psw = $_POST['psw'];

    $conn = mysqli_connect('localhost','root','');
	mysqli_select_db($conn,'look');
    mysqli_query($conn,'set names utf8');

   // 加密
	$mdPsw = md5(md5($psw));

	$sql = "SELECT count(*) FROM lookdata where username = '{$username}' and psw = '{$mdPsw}'";

	$result = mysqli_query($conn,$sql);

	$arr = mysqli_fetch_array($result);

	if ($arr[0]) {
		echo 1;
	}else{
		echo 0;
	}

	mysqli_close($conn);