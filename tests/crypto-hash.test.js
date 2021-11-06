const cryptoHash = require("../crypto-hash");

describe("crypto-hash()", () => {
  it("generates a SHA-256 hashed output", () => {
    expect(cryptoHash("JOBBY")).toEqual(
      "6C4148DA8AB8AD34318720D00CB2F9A3D3D8FADB26A8DFEC198DC706D9791451".toLocaleLowerCase()
    );
  });
  it("produces the same hash with the same input arguments in any order", () => {
    expect(cryptoHash("one", "two", "three")).toEqual(cryptoHash("three", "one", "two"));
  });
});
