<!DOCTYPE html>
<html>
    <head>
        <title>
            TBFair
        </title>
        <link rel="icon" type="image/x-icon" href="imagini/icon.png"/>
        <link rel="stylesheet" href="TBF.css"/>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="TBF.js"></script>
    </head>

    <body>
        
    <header class="navbar" id="navbar">
            
            <a href="index.html"><img src="Imagini/TBFAIR.png" id="logo"/></a>
            <div class="space">
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                    <none class="dropdown">
                        <a href="offers.html" class="dropbtn">OFFERS</a>
                        <div class="dropdown-content">
                        <a href="offers.html">ITALY</a>
                        <a href="offers.html">TURKEY</a>
                        <a href="offers.html">SPAIN</a>
                        </div>
                    </none> 
                <a href="contact.html" class="contact">Contact</a></div>
        </header>



        <div class="mainimg">
          <img src="Imagini/Contact/contactimg.png"/>
            <div class="maintxt">
              <a href="contact.html">THANK YOU FOR CONTACTING US</a>
            </div>
      </div>

<footer class="footer">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="social-icon">
      <li class="social-icon__item"><a class="social-icon__link" href="https://www.facebook.com/ovidiu.ene29/">
          <ion-icon name="logo-facebook"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="https://twitter.com/Ovidiuene29">
          <ion-icon name="logo-twitter"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="https://www.linkedin.com/in/ene-ovidiu-36a996287/">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="https://www.instagram.com/ovi.ene29/">
          <ion-icon name="logo-instagram"></ion-icon>
        </a></li>
    </ul>
    <ul class="menu">
      <li class="menu__item"><a class="menu__link" href="index.html">Home</a></li>
      <li class="menu__item"><a class="menu__link" href="about.html">About</a></li>
      <li class="menu__item"><a class="menu__link" href="offers.html">Offers</a></li>
      <li class="menu__item"><a class="menu__link" href="contact.html">Contact</a></li>

    </ul>
    <p>&copy;2021 Travelling Becomes Fair | All Rights Reserved</p>
  </footer>

  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

    </body>
</html>



<?php
$nume = $_POST["nume"]; $prenume = $_POST["prenume"]; $telefon = $_POST["telefon"]; $email=$_POST["email"]; $message=$_POST["message"];

$db = mysqli_connect("localhost", "eovidiu", "1234", "eovidiu");
if (!$db) {
 exit('Conectare esuata: ' . mysqli_connect_error ());
}

$succes = mysqli_select_db($db, "eovidiu");
if (!$succes) {
 exit('<br>Nu se poate selecta baza de date: ' . mysqli_error($db));
} 

$interogare2 = "SELECT * FROM tabel1";
$raspuns = mysqli_query($db, $interogare2);
if (mysqli_errno($db))
 exit('<br>'.mysqli_errno($db).": ".mysqli_error($db)."<br>");
$N = mysqli_affected_rows($db);
for($i=0; $i<$N; $i++){
 $linie = mysqli_fetch_row($raspuns);
 
}

$interogare = "INSERT INTO tabel1 (Nume, Prenume, Telefon, Email, Mesaj) VALUES ('$nume' , '$prenume' , '$telefon', '$email', '$message')";
mysqli_query($db,$interogare);



if (mysqli_errno($db))
 exit('<br>Adaugare esuata: '.mysqli_errno($db).": ".mysqli_error($db)."<BR>");



mysqli_close($db);
?> 
