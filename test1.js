const lightingHash = (data) => {
  return data + "*";
};

class Block {
  constructor(data, hash, lastHash) {
    this.data = data;
    this.hash = hash;
    this.lastHash = lastHash;
  }
}

class Blockchain {
  constructor() {
    const genesis = new Block(
      "genesis-data",
      "genesis-hash",
      "genesis-lastHash"
    );
    this.chain = [genesis];
  }
  addBlock(data) {
    const lastHash = this.chain[this.chain.length - 1].hash;

    const hash = lightingHash(data + lastHash);

    const block = new Block(data, hash, lastHash);

    this.chain.push(block);
  }
}

const testChain = new Blockchain();

testChain.addBlock("one");
testChain.addBlock("two");
testChain.addBlock("three");

console.log(testChain);
