

describe("Example Component", () => {
  test("Debe de ser mayor a 10", () => {
    // arrange
    let value = 8

    // act
    value = value + 3

    // assert
    expect(value).toBeGreaterThan(10)
  })
})