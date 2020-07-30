<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>Boiler Plat Admin</title>
  <!-- favicons for all devices -->
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta content="telephone=yes" name="format-detection">
  <meta name="x5-fullscreen" content="true">
  <meta name="apple-touch-fullscreen" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="#7E71EA">
  <link rel="apple-touch-icon" sizes="57x57" href="/icon/apple-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="/icon/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="/icon/apple-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="/icon/apple-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="/icon/apple-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="/icon/apple-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="/icon/apple-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="/icon/apple-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="192x192" href="/icon/android-icon-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="/icon/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png">
  <link rel="manifest" href="/manifest.json">
  <meta name="msapplication-TileColor" content="#7E71EA">
  <meta name="msapplication-TileImage" content="/icon/ms-icon-144x144.png">
  <meta name="theme-color" content="#7E71EA">
  <meta name="csrf-token" content="{{ csrf_token() }}">
</head>

<body>
  <noscript>
    <strong>
     
    </strong>
  </noscript>
  
    <div id="app"></div>
    
    <link rel="stylesheet" href="{{mix('css/app.css')}}">
    <script src="{{mix('js/manifest.js')}}"></script>
    <script src="{{mix('js/vendor.js')}}"></script>
    <script src="{{mix('js/app.js')}}"></script>
</body>

</html>
