<?php 

    $conn = mysqli_connect('localhost','root','');
	mysqli_select_db($conn,'look');
    mysqli_query($conn,'set names utf8');
    
    $on=$_POST['o'];
    $num = 5;
    $s = "SELECT count(ID)as count FROM lookdata";
    $r = mysqli_query($conn,$s);
    $p = mysqli_fetch_assoc($r);
    $z = $p["count"];
    $max = ceil($z/$num);//数据总数

    if($on > $z){
        $on = $z;
    }
    if($on < 0){
        $on = 0;
    }

    $sql = "SELECT * FROM lookdata ORDER BY ID LIMIT $on,$num";

    $res=mysqli_query($conn,$sql);

    $arr = array();

	while($row = mysqli_fetch_array($res)){
		$data = array();
		$data['ID'] = $row['ID'];
		$data['username'] = $row['username'];
		$data['psw'] = $row['psw'];
		$data['sex'] = $row['sex'];
		$data['phone'] = $row['phone'];
		$data['msn'] = $row['msn'];
		array_push($arr,$data);
	}

	$json = json_encode(array("data"=>$arr));

	echo $json;

	mysqli_close($conn);