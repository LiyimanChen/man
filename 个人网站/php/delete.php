<?php
        $conn = mysqli_connect('localhost','root','');
        mysqli_select_db($conn,'look');
        mysqli_query($conn,'set names utf8');

        $id = $_POST['nb'];

        $sql = "DELETE FROM lookdata WHERE ID = {$id}";

        $res = mysqli_query($conn,$sql);

        if ($res) {
            echo 1;
        }else{
            echo 0;
        }

        mysqli_close($conn);