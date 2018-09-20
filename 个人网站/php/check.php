<?php

    $conn = mysqli_connect('localhost','root','');
    mysqli_select_db($conn,'look');
    mysqli_query($conn,'set names utf8');

    // 动态添加 最大ID
    $s="SELECT max(ID) FROM lookdata";
    $r=mysqli_query($conn,$s);
	$a=mysqli_fetch_array($r);
	if(empty($a[0])){
		$id=1;
	}else{
		$id=$a[0]+1;
    }
    
    echo $id;

    mysqli_close($conn);