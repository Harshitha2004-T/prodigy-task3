@@ -0,0 +1,29 @@
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic-Tac-Toe Game</title>
    <link rel="stylesheet" href="stle.css">
</head>
<body>
    <div class="container">
        <h1>Tic-Tac-Toe Game</h1>
        <div id="board" class="board">
            <div class="cell" id="cell-0"></div>
            <div class="cell" id="cell-1"></div>
            <div class="cell" id="cell-2"></div>
            <div class="cell" id="cell-3"></div>
            <div class="cell" id="cell-4"></div>
            <div class="cell" id="cell-5"></div>
            <div class="cell" id="cell-6"></div>
            <div class="cell" id="cell-7"></div>
            <div class="cell" id="cell-8"></div>
        </div>
        <div id="status" class="status">Player X's Turn</div>
        <button id="resetBtn">Reset Game</button>
    </div>

    <script src="script.js"></script>
</body>
</html>