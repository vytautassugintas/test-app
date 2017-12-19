import { add, edit, remove } from "./actions";
import reducer from "./reducer";

describe("reducer", () => {
  it("should add item to state items", () => {
    expect(reducer(undefined, add({ title: "item" }))).toEqual({
      items: [
        {
          id: 0,
          title: "item"
        }
      ]
    });
  });

  it("should edit item by its id", () => {
    expect(
      reducer(
        {
          items: [
            {
              id: 0,
              title: "item"
            }
          ]
        },
        edit({ id: 0, title: "changed title" })
      )
    ).toEqual({
      items: [
        {
          id: 0,
          title: "changed title"
        }
      ]
    });
  });
  
  it("should remove item by given id", () => {
    expect(
      reducer(
        {
          items: [
            {
              id: 0,
              title: "item"
            },
            {
              id: 5,
              title: "item to remove"
            }
          ]
        },
        remove(5)
      )
    ).toEqual({
      items: [
        {
          id: 0,
          title: "item"
        }
      ]
    });
  });
});
