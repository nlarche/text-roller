(function () {

    var liste = [
        'un test',
        'un autre test',
        'autre chose',
        'bleu',
    ];

    function init() {

        console.log('init');

        var elt = document.getElementById("roller");

        elt.textroller = new TextRoller({
            el: elt,
        });

        var btn = document.getElementById("roll");
        var i = 0;
        btn.addEventListener('click', function () {
            if (i === liste.length) {
                i = 0;
            }
            elt.innerHTML = liste[i]
            i++;
        });
    }

    document.addEventListener('DOMContentLoaded', init);

})();