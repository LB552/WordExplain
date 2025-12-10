<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>WordExplain</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Agdasima:wght@400;700&family=Encode+Sans:wght@100..900&display=swap" rel="stylesheet">
</head>

<header>
    <p class="headerText">
        Word<span class="explain">Explain</span>
    </p>
</header>

<body>
    <h1>Find the meaning behind your favorite word!</h1>

    <label for="wordInput">Enter an English word:</label>
    <input type="text" id="wordInput" placeholder="Type a word...">

    <div class="generatorButton" id="generateButton">
        <p>Explain!</p>
    </div>

    <div id="results"></div>

    <script src="script.js"></script>
</body>

</html>