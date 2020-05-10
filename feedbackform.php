<?php


    //connecting to a database

    $conn1 = mysqli_connect('localhost', 'root', 'adil2190');
    $dataBaseName = 'newsfeedback';
    $dbquery = "CREATE DATABASE ". $dataBaseName;

    if(mysqli_query($conn1, $dbquery)){
        echo 'database created ';
        $conn = mysqli_connect('localhost', 'root', 'adil2190', $dataBaseName);
    } else {
        echo 'database already exists . ';
        $conn = mysqli_connect('localhost', 'root', 'adil2190', $dataBaseName);        
    }

    $tablequery = "CREATE TABLE IF NOT EXISTS feedback (
        id int(11) PRIMARY KEY AUTO_INCREMENT,
        firstname varchar(50),
        lastname varchar(50),
        email varchar(50),
        contact varchar(50),
        message text
        )";


    if(mysqli_query($conn, $tablequery)){
        echo 'table checked ';
    } 

    
    if(isset($_POST['firstname'])){
        // echo 'First Name : ' . $_POST['firstname'];
        // echo 'Last Name : ' . $_POST['lastname'];
        // echo 'Email : ' . $_POST['email'];   
        // echo 'Contact : ' . $_POST['contact'];
        // echo 'Message : ' . $_POST['message'];

        $firstname = mysqli_real_escape_string($conn, $_POST['firstname']);
        $lastname = mysqli_real_escape_string($conn, $_POST['lastname']);
        $email = mysqli_real_escape_string($conn, $_POST['email']);
        $contact = mysqli_real_escape_string($conn, $_POST['contact']);
        $message = mysqli_real_escape_string($conn, $_POST['message']);

        $query = "INSERT INTO feedback(firstname, lastname, email, contact, message) VALUES('$firstname', '$lastname', '$email', '$contact', '$message')";

        if(mysqli_query($conn, $query)){
            echo 'Feedback added';
        } else {
            echo 'Error : ' . mysqli_error($conn);
        }
    }