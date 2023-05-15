<?php

$con = mysqli_connect("localhost", "root", "", "pclp"); 

if(mysqli_connect_errno()) {  
    die("Failed to connect with MySQL: ". mysqli_connect_error());  
}  else {
    $value = rand(1,23);
    $sql = "select * from citate where id = '$value'";
    $result = mysqli_query($con,$sql);
    $row = mysqli_fetch_array($result);
    $string = file_get_contents('index.html');
    
    if($row) {
        echo str_replace('<p class="text"></p>', '<p class="text">'.$row["text"].'</p>' , $string);
        echo str_replace('<p class="autor"></p>', '<p class="autor"> - '.$row["autor"].'</p>' , $string);
        
    }
}

?>  
