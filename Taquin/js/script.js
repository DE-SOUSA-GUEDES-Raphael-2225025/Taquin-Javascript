document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('taquin-container');
    let tiles = Array.from({ length: 16 }, (_, i) => i + 1).sort(() => Math.random() - 0.5);

    // Fonction pour dessiner la grille
    function drawGrid() {
        container.innerHTML = '';
        tiles.forEach(number => {
            const tile = document.createElement('div');
            tile.className = 'taquin-tile';
            tile.textContent = number === 16 ? '' : number; // La tuile 16 est la tuile vide
            tile.addEventListener('click', () => moveTile(number));
            container.appendChild(tile);
        });
    }
    function shuffleTiles() {
        for (let i = tiles.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
        }
    }

    // Fonction pour déplacer une tuile
    function moveTile(number) {
        const index = tiles.indexOf(number);
        const emptyIndex = tiles.indexOf(16);

        // Vérifie si la tuile cliquée est adjacente à la tuile vide
        if ([1, -1, 4, -4].includes(emptyIndex - index)) {
            tiles[index] = 16;
            tiles[emptyIndex] = number;
            drawGrid();
        }
    }
    function checkWin() {
        if (tiles.every((tile, i) => i === tile - 1)) {
            alert("Félicitations ! Vous avez gagné !");
        }
    }

    shuffleTiles();
    drawGrid();
});
