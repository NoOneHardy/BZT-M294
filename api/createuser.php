<?php

header("Access-Control-Allow-Origin: *");

$method = $_SERVER["REQUEST_METHOD"];

if ($method === "POST") {
    echo $_POST["user"];
/*     if (!isset($_GET["username"])) {
        $servername = "napatodi.mysql.db.internal";
        $sqluser = "napatodi_main";
        
        $connection = new mysqli($servername, $sqluser, ",H}',6Cp%-)lRfEX@l%PnC*V&\\507A", "napatodi_tippspiel");

        if ($connection->connect_error) {
            http_response_code(500);
            $response = [
                "error" => "Internal Server Error"
            ];

            echo json_encode($response);
        } else {
            $sql = "INSERT INTO user VALUES (null, '', 'Silas', 'Hardegger', 'silas.hardegger@outlook.com', 'admin123', null, null);";
            $result = $connection->query($sql);

            if ($result->num_rows > 0) {
                $response = [
                    "emailExists" => true
                ];
            } else {
                $response = [
                    "emailExists" => false
                ];
            }
            $connection->close();
            echo json_encode($response);
        }
    } else {
        http_response_code(400);
        echo json_encode(["error" => "Missing Parameter 'email'"]);
    } */
} else {
    http_response_code(405);
    echo json_encode(["error" => "Method Not Allowed"]);
}

?>