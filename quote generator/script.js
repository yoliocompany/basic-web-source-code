

let list = [

    'A website without visitors is like a ship lost in the horizon.',
    'If debugging is the process of removing software bugs, then programming must be the process of putting them in',
    'If you think math is hard, try web design.',
    'A user interface is like a joke. If you have to explain it, it’s not that good.',
    'I don’t care if it works on your machine! We are not shipping your machine!',
    'The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with. The new becomes threatening, the old reassuring.'

]



let index = Math.floor( Math.random() * 5 );


let myQuote = document.getElementById('quote');

myQuote.innerText = list[index];
