<?php

    $conn = mysqli_connect('localhost','root','');
    mysqli_select_db($conn,'look');
    mysqli_query($conn,'set names utf8');

    $id = $_POST['id'];

	$sql = "SELECT * FROM lookData where ID = {$id}";

	$result = mysqli_query($conn,$sql);
	$row = mysqli_fetch_array($result);
	 
		$data = array();
		$data['id'] = $row['ID'];
		$data['username'] = $row['username'];
	$json = json_encode($data);

	echo $json;

	mysqli_close($conn);