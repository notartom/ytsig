let oldHref = document.location.href;

let observer = new MutationObserver(function(mutations) {

    let newHref = document.location.href;

    if (newHref != oldHref && newHref.includes("shorts")) {

        oldHref = newHref;

        const phrases = [
            "Don't rot your brain.",
            "Why not do something productive, like take a nap?",
            "You could disable me, but you're better than that."
        ];
        let phrase = phrases[Math.floor(Math.random() * phrases.length)];

        document.head.textContent = "";
        let style = document.createElement("style");
        style.textContent = `
            div {
                background-color: #3A643E;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            h1 {
                font: sans-serif;
                letter-spacing: .1em;
                font-size: 4em;
                color: #E0E0CA;
                text-align: center;
            }`;
        document.head.appendChild(style);

        document.body.textContent = "";
        let header = document.createElement("h1");
        header.textContent = phrase;
        let content = document.createElement("div");
        content.appendChild(header);
        document.body.appendChild(content);
    };
});
observer.observe(document.body, { childList: true, subtree: true });
