const summaryStats = {
    "gamesPlayed": 24,
    "winRate": 75,
    "currentStreak": 3,
    "bestStreak": 7
}

const sportStats = [
    {"sport": "Football", "wins": 6, "total": 7},
    {"sport": "Basketball", "wins": 4, "total": 6},
    {"sport": "Baseball", "wins": 5, "total": 5},
    {"sport": "Hockey", "wins": 1, "total": 3},
    {"sport": "All Sports", "wins": 2, "total": 3}
]

const recentStats = [
    {
        "date": "Sep 24",
        "sport": "Football",
        "author": null,
        "solved": true,
        "mistakes": 1,
        "guesses": [[1,1,1,1], [2,3,2,2], [2,2,2,2], [3,3,3,3], [4,4,4,4]]
    },
    {
        "date": "Sep 24",
        "sport": "Football",
        "author": "teambrendanhaggerty",
        "solved": true,
        "mistakes": 0,
        "guesses": [[2,2,2,2], [1,1,1,1], [3,3,3,3], [4,4,4,4]]
    },
    {
        "date": "Sep 24",
        "sport": "Hockey",
        "author": null,
        "solved": false,
        "mistakes": 4,
        "guesses": [[1,1,1,1], [2,4,2,3], [3,2,3,3], [4,2,4,4], [2,3,2,4]]
    }
]

function makeSummary(stats) {
    document.getElementById("gamesPlayed").textContent = stats.gamesPlayed
    document.getElementById("winRate").textContent = stats.winRate + '%'
    document.getElementById("currentStreak").textContent = stats.currentStreak
    document.getElementById("bestStreak").textContent = stats.bestStreak
}

function makeBySport(stats) {
    const section = document.getElementById("bySport")
    for (const sport of stats) {
        const row = document.createElement("div");
        row.className = "infoResult sportRow";
        const label = document.createElement("p");
        label.textContent = sport.sport;
        const bar = document.createElement("meter");
        bar.className = "winBar";
        bar.max = sport.total;
        bar.value = sport.wins;
        const record = document.createElement("p");
        record.textContent = sport.wins + " of " + sport.total + " wins";
        row.appendChild(label);
        row.appendChild(bar);
        row.appendChild(record);
        section.appendChild(row);
    }
}

function makeRecentGames(stats) {
    const section = document.getElementById("recentGames")
    for (const game of stats) {
        const row = document.createElement("div");
        row.className = "infoResult gameRow";

        const grid = document.createElement("div");
        grid.className = "miniGrid";
        for (const guess of game.guesses) {
            for (const category of guess) {
                const square = document.createElement("span");
                square.className = "sq c" + category;
                grid.appendChild(square);
            }
        }
        const info = document.createElement("p");
        if (game.author == null) {
            info.textContent = game.date + " · " + "Daily " + game.sport;
        }
        else {
            info.textContent = game.date + " · " + "Community " + game.sport + " by " + game.author;
        }

        if (game.mistakes === 1) {
            mistakeText = "1 mistake"
        }
        else {
            mistakeText = game.mistakes + " mistakes"
        }
        const result = document.createElement("p");
        if (game.solved) {
            result.className = "solved";
            result.textContent = "Solved · " + mistakeText;
        } else {
            result.className = "failed";
            result.textContent = "Failed · " + mistakeText;
        }

        row.appendChild(grid);
        row.appendChild(info);
        row.appendChild(result);
        section.appendChild(row);
    }
}

makeSummary(summaryStats);
makeBySport(sportStats);
makeRecentGames(recentStats);