<?php 
   $username = $_POST['user'];  
   $password = $_POST['pass'];  
   
    $con = mysqli_connect("localhost", "root", "", "pclp"); 

    if(mysqli_connect_errno()) {  
        die("Failed to connect with MySQL: ". mysqli_connect_error());  
    }  else {
        $sql = "select * from users where username = '$username' and password = '$password'";  
        $result = mysqli_query($con, $sql);  
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);  
        $count = mysqli_num_rows($result);  
          
        if($count == 1){  
            echo "<script> window.location.assign('index.html'); </script>";  
        }  
        else{  
            echo "<h1> Login failed. Invalid username or password.</h1>";  
        }     
    }
    mysqli_close($con);
?>  