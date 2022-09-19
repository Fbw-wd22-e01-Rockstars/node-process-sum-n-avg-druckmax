const { promisify } = require('util')
const { exec } = require('child_process')

const asyncExec = promisify(exec);

async function runCommand(command) {
  const out = await asyncExec(command)
  return out.stdout.replace(/(\r\n|\n|\r)/gm, "") // remove line breaks
}

describe("1. Calculating the sum", () => {
  test("program outputs sum when passed 'sum' and number arguments", async () => {
    const randNums = Array.from({length: 4}, () => Math.floor(Math.random() * 10))
    const result = await runCommand(`node solution.js sum ${randNums.join(" ")}`)

    expect(result).toBe(randNums.reduce((sum, n) => sum + n, 0).toString())
  })
});

describe("2. Calculating the average", () => {
  test("program outputs average when passed 'avg' and number arguments", async () => {
    const randNums = Array.from({length: 4}, () => Math.floor(Math.random() * 10))
    const result = await runCommand(`node solution.js avg ${randNums.join(" ")}`)

    expect(result).toBe((randNums.reduce((sum, n) => sum + n, 0) / randNums.length).toString())
  })
});

describe("3. Wrong operation name", () => {
  test("program outputs warning when passed non-existent operation name", async () => {
    const randNums = Array.from({length: 4}, () => Math.floor(Math.random() * 10))
    const result = await runCommand(`node solution.js oops ${randNums.join(" ")}`)

    expect(result).toBe('I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)')
  })
});

describe("4. Wrong type", () => {
  test("program outputs warning when passed a non-number as subsequent argument", async () => {
    const result = await runCommand('node solution.js sum 1 hello 3 4')

    expect(result).toBe("Sorry, the argument 'hello' is not a number, please try again")
  })
});