<?php 

    $conn = mysqli_connect('localhost','root','');
	mysqli_select_db($conn,'look');
    mysqli_query($conn,'set names utf8');

    $username=$_POST['username'];
	$psw=$_POST['psw'];
	$sex=$_POST['sex'];
	$phone=$_POST['phone'];
    $msn=$_POST['msn'];
    
    $s="SELECT max(ID) FROM lookdata";
    $r=mysqli_query($conn,$s);
	$a=mysqli_fetch_array($r);
	if(empty($a[0])){
		$id=1;
	}else{
		$id=$a[0]+1;
	}
	$pwd=md5($psw);
    
    $sql="INSERT INTO lookdata VALUES({$id},'{$username}','{$pwd}','{$sex}','{$phone}','{$msn}')";
    $res=mysqli_query($conn,$sql);
	if($res){
		echo 1;
	}else{
		echo 0;
	}

	mysqli_close($conn);