const engineBase = "https://cdn.jsdelivr.net/npm/stockfish@19.0.1/bin/";
self.Module = {
  locateFile(path) {
    return new URL(path, engineBase).href;
  }
};
importScripts(`${engineBase}stockfish-19-lite-single.js`);
