<?php
    $username = $_POST['username'];
	$psw = $_POST['psw'];
    $id = $_POST['id'];

    $conn = mysqli_connect('localhost','root','');
    mysqli_select_db($conn,'look');
    mysqli_query($conn,'set names utf8');

    // 插入数据
	// 加密
	$mdPsw = md5(md5($psw));

	$sql = "INSERT INTO lookdata VALUES({$id},'{$username}','{$mdPsw}',{$id},{$id},${id})";

	$result = mysqli_query($conn,$sql);

	if ($result) {
		echo 1;
	}else{
		echo 0;
	}

	mysqli_close($conn);