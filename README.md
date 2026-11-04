# GPT Chess

GPT Chess is a browser-based chess app with Stockfish 19, legal move handling, move sounds, move highlights, a move list, live evaluation, and PGN export.

## Features

- Play against Stockfish 19 in your browser
- Analysis mode for exploring both sides
- Legal moves, check, checkmate, castling, en passant, and promotion
- Last-move, selected-square, legal-destination, and check highlights
- Click-to-move and drag-and-drop
- Flip the board and toggle move sounds
- Adjustable engine search depth
- Evaluation bar, principal variation, depth, and nodes per second
- Undo, restart, copy PGN, and download PGN
- Responsive desktop and mobile layout
- No account or backend required

## GitHub Pages

The app is a static website. Configure GitHub Pages to deploy from the `main` branch and the repository root.

The public URL is:

https://parsa3323.github.io/gpt-chess/

## Runtime

The page downloads `site.bundle`, a gzip-compressed JSON payload containing the app module, stylesheet, and Stockfish worker bootstrap. The browser unpacks it using the native `DecompressionStream` API. Stockfish and chess.js are loaded from jsDelivr.

The engine runs in a single browser worker. Game positions are not sent to a GPT Chess backend.

## Third-party projects

- [Stockfish.js](https://github.com/nmrugg/stockfish.js), Stockfish 19 lite single-threaded browser build, GPL-3.0
- [chess.js](https://github.com/jhlywa/chess.js), version 1.4.0, MIT

See [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md) for additional attribution and license information.
