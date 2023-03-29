<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=q, initial-scale=1.0">
    <title>Document</title>
    <Script>
      function DateAndTime(){
        let date =new Date();

        document.getElementById("date&time").innerText=date;
     
      }
    </Script>
    
</head>
<body>
    <h1>WELCOME TO JAVASCRIPT</h1>
    <button onclick="DateAndTime()">"current date and time" </button>
    <h2>current date & Time:</h2>
    <div id="date&time"></div>
    
</body>
</html>
