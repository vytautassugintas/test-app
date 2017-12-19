import { increaseDepth } from "./actions";
import reducer from "./reducer";

describe("reducer", () => {
  it("should add new entry to the parent node by its id", () => {
    expect(
      reducer(
        {
          structure: [
            {
              id: 0,
              name: "Lorem",
              children: [
                {
                  id: 1,
                  name: "Ipsum"
                }
              ]
            }
          ]
        },
        increaseDepth({ id: 1 }, { name: "new child" })
      )
    ).toEqual({
      structure: [
        {
          id: 0,
          name: "Lorem",
          children: [
            {
              id: 1,
              name: "Ipsum",
              children: [
                {
                  id: 100,
                  name: "new child"
                }
              ]
            }
          ]
        }
      ]
    });
  });
});
