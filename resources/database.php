<?php

$handle = @fopen("quotes.txt", "r");

$conn = mysqli_connect("localhost","root","","pclp"); 

while (!feof($handle)) // Loop til end of file.
{
    $i=0;
$buffer = fgets($handle, 4096);
 // Read a line.
list($a,$b)=explode("-",$buffer);

$sql = "INSERT INTO citate (text,autor) VALUES('".$a."','".$b."')"; 

mysqli_query($conn,$sql);

}

?>