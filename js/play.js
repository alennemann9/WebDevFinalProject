
// What a saved game JSON Object would look like
const savedGame = {
    "puzzleId": 1010,
    "solved": true,
    "mistakes": 1,
    "guesses": [[1,1,1,1], [2,3,2,2], [2,2,2,2], [3,3,3,3], [4,4,4,4]]
}


const puzzle = {
    "id": 1010,
    "author": null,
    "categories": [
        { "name": "2026 Dodgers Starting Pitchers", "players": ["Blake Snell", "Tarik Skubal", "Tyler Glasnow", "Roki Sasaki"]},
        { "name": "Rookies of the Year", "players": ["Blake Griffin", "Buster Posey", "Sauce Gardner", "Cooper Flagg"]},
        { "name": "Olympians", "players": ["Jason Giambi", "Herschel Walker", "Stephen Curry", "Jim Thorpe"]},
        { "name": "Junipero Serra High School Alumni", "players": ["Tom Brady", "Lynn Swann", "Barry Bonds", "Murph Lennemann"]}
    ]
}

// Fisher–Yates shuffle gotten from stack overflow
function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
}

function makeBoard(puzzle) {
    const board = document.getElementById("board")
    board.innerHTML = ""
    const players = []
    for (category of puzzle.categories) {
        players.push(category.players[0], category.players[1], category.players[2], category.players[3]);
    }
    shuffle(players);
    for (player of players) {
        const tile = document.createElement("button")
        tile.type = "button"
        tile.className = "card"
        const name = document.createElement("span")
        name.className = "name"
        name.textContent = player
        tile.appendChild(name)
        board.appendChild(tile)
    }
}

makeBoard(puzzle);