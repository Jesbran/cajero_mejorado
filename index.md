<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Cajero Automatico</title>
    <style media="screen">
      body
      {
        background-color: #ed850e;
      }
      .boton
      {
        background-color: #0eedcc;
      }
      .texto
      {
        background-color: #abeced;
        color: #787878;
      }
    </style>
  </head>
  <body>
    <p><img src="cajero.gif"></p>
    <p>
      <input type="text" class="texto" id="dinero">
      <input type="button" value="Retirar" class="boton" id="extraer">
    </p>
    <p id="resultado"></p>
    <script src="caj.js" charset="utf-8"></script>
  </body>
</html>
