const { GENESIS_DATA, MINE_RATE } = require("../config");
const { cryptoHash } = require("../utils");

class Block {
  constructor({ timestamp, lastHash, hash, data, nonce, difficulty }) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
    this.nonce = nonce;
    this.difficulty = difficulty;
  }

  static genesis() {
    return new Block(GENESIS_DATA);
  }

  static mineBlock({ lastBlock, data }) {
    let hash, timestamp;
    const lastHash = lastBlock.hash;
    let nonce = 0;
    const { difficulty } = lastBlock;

    do {
      nonce++,
        (timestamp = Date.now()),
        (hash = cryptoHash(timestamp, lastHash, data, nonce, difficulty));
    } while (hash.substring(0, difficulty) != "0".repeat(difficulty));

    return new Block({
      timestamp,
      lastHash,
      data,
      nonce,
      difficulty,
      hash
    });
  }

  static adjustDifficulty({ originalBlock, timestamp }) {
    const { difficulty } = originalBlock;

    const difference = timestamp - originalBlock.timestamp;

    if (difference > MINE_RATE) return difficulty - 1;

    return difficulty + 1;
  }

}

module.exports = Block;
