(function () {
    setInterval(pickRandomCell, 250);

    function pickRandomCell() {
        var randomCellNum = Math.floor((Math.random() * 4) + 1);
        setTimeout((function(){
            document.getElementById(randomCellNum.toString()).style.backgroundColor = getRandomColor();
        }), 2000);
    }


    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
})();
