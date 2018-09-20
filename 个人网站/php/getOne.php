<?php 

    $conn = mysqli_connect('localhost','root','');
	mysqli_select_db($conn,'look');
    mysqli_query($conn,'set names utf8');
    
    $sql = "SELECT max(ID) FROM lookdata";

    $result = mysqli_query($conn,$sql);

	$arr = mysqli_fetch_array($result);
	
	echo $arr[0];

	mysqli_close($conn);