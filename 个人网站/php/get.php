<?php 
	
	$username = $_GET['user'];

    $conn = mysqli_connect('localhost','root','');
	mysqli_select_db($conn,'look');
	mysqli_query($conn,'set names utf8');
    
    $sql = "SELECT count(*) FROM lookdata where username = '{$username}'";

	$result = mysqli_query($conn,$sql);

	$arr = mysqli_fetch_array($result);
	
	if ($arr[0] != 0) {
		echo 1;
	}else{
		echo 0;
	}

	mysqli_close($conn);