var spans;
var count = 0;
var previous;
var score;
var correctCount;

function initialize() { // adds a "click" action to each image of the table
    spans = document.querySelectorAll("img");
    for (var i = 0; i < spans.length; i ++) {
        spans[i].addEventListener('click', function(i) {
            change(i);
        }.bind(this, i));
    }
    const buttons = document.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i ++) {
        if (i == 0) {
            buttons[i].addEventListener('click', function() {
                randomize();
            });
        }
        if (i == 1) {
            buttons[i].addEventListener('click', function() {
                reset();
            }); 
        }
    }
}

function change(num) {
    if (count == 0) {
        previous = num;
        score++;
        count++;
        spans[num].setAttribute("class", "true");
    } else {
        if (num == previous) {
            spans[previous].setAttribute("class", "false");
            count = 0;
        } else {
            const previousSRC = spans[previous].getAttribute("src");
            spans[previous].setAttribute("src", spans[num].getAttribute("src"));
            spans[num].setAttribute("src", previousSRC);
            spans[previous].setAttribute("class", "false");
            count = 0;
            for (var i = 0; i < spans.length; i ++) {
                if (spans[i].getAttribute("src") == spans[i].getAttribute("key")) {
                    correctCount++;
                } else {
                    correctCount = 0;
                    break;
                }
            }
            if (correctCount >= 16) {
                for (var i = 0; i < spans.length; i ++) {
                    spans[i].setAttribute("src", spans[i].getAttribute("win"));
                }
            }
        }
    }

}

function randomize() {
    console.log("yes");
    if (spans[0].getAttribute("src") == spans[0].getAttribute("win")) {
        array = [];
        for (var i = 0; i < spans.length; i ++ ) {
            var j = Math.floor(Math.random() * (16) + 1);
            while (array.includes(j)) {
                j = Math.floor(Math.random() * (16) + 1);
            }
            array.push(j);
            spans[i].setAttribute("src", "win (" + j + ").jpg"); 
        }
    } else {
        array = [];
        for (var i = 0; i < spans.length; i ++ ) {
            var j = Math.floor(Math.random() * (16) + 1);
            while (array.includes(j)) {
                j = Math.floor(Math.random() * (16) + 1);
            }
            array.push(j);
            spans[i].setAttribute("src", "image " + j + ".jpg"); 
        }
    }
}

function reset() {
    for (var i = 0; i < spans.length; i ++) {
        spans[i].setAttribute("src", spans[i].getAttribute("key"));
    }
}


