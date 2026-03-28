<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $accounts = [
        "admin" => "N9FHENN9EF",
        "user1" => "pass123"
    ];

    $username = $_POST["username"] ?? '';
    $password = $_POST["password"] ?? '';

    if (isset($accounts[$username]) && $accounts[$username] === $password) {
        header("Location: home.html?username=" . urlencode($username));
        exit();
    }

    header("Location: invalid.html");
    exit();
}


//http://localhost:8000/login.html
?>