function handler1(event) {
    switch (event.key) {
        case 'A':
        case 'S':
        case 'D':
        case 'F':
        case 'G':
        case 'H':
        case 'J':
        case 'a':
        case 's':
        case 'd':
        case 'f':
        case 'g':
        case 'h':
        case 'j':
        case 'E':
        case 'T':
        case 'U':
        case 'W':
        case 'Y':
        case 'e':
        case 't':
        case 'u':
        case 'w':
        case 'y':
            let audio = new Audio(`whiteKeys/${event.key}.mp3`);
            audio.play();
            console.log(`The '${event.key}' key is pressed.`);
            break;
        default:
            console.log(`Please press the right key!`);
    }
};

document.addEventListener("keydown", handler1);

