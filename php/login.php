<?php
include 'db-connectivity.php';
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $email = trim($_POST['email']);
    $password = trim($_POST['password']);

    // Prepare the SQL statement to select user
    // Prepare the SQL statement to select user
    // Prepare the SQL statement to select user
    $stmt = $pdo->prepare("SELECT * FROM user-registration WHERE email = ? AND password = ?");
    $stmt->execute([$email, $password]);


    $user = $stmt->fetch();

    if ($user) {

        session_start();
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['email'] = $user['email'];
        echo 'Login successful!';
    } else {
        echo 'Invalid credentials. Please try again.';
    }
}
?>