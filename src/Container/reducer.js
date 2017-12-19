import { INCREASE_DEPTH } from "./constants";

const initialState = {
  structure: [
    {
      id: 0,
      name: "Lorem",
      children: [
        {
          id: 1,
          name: "Ipsum"
        },
        {
          id: 2,
          name: "Dolor",
          children: [
            {
              id: 3,
              name: "Orci",
              children: [
                {
                  id: 4,
                  name: "Quis",
                  children: [
                    {
                      id: 5,
                      name: "Odio"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 6,
      name: "Sit",
      children: [
        {
          id: 7,
          name: "Amet"
        },
        {
          id: 8,
          name: "Consectetur"
        }
      ]
    },
    {
      id: 9,
      name: "Adipscing",
      children: [
        {
          id: 10,
          name: "Elit",
          children: [
            {
              id: 11,
              name: "Vestibulum"
            },
            {
              id: 12,
              name: "Vitae",
              children: [
                {
                  id: 13,
                  name: "First one",
                  children: [
                    {
                      id: 14,
                      name: "First One other one"
                    }
                  ]
                },
                {
                  id: 15,
                  name: "Second one"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const containerReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_DEPTH:
      return {
        ...state,
        structure: findParentByIdAndUpdate(
          action.child,
          action.parent.id,
          state.structure
        )
      };
    default:
      return state;
  }
};

export function findParentByIdAndUpdate(newObject, parentId, data) {
  return data.map(o => {
    if (o.id === parentId) {
      if (o.children) {
        return { ...o, children: [newObject, ...o.children] };
      }
      return Object.assign(o, { children: [newObject] });
    }
    if (o.children) {
      return Object.assign(o, {
        children: findParentByIdAndUpdate(newObject, parentId, o.children)
      });
    }
    return o;
  });
}

export default containerReducer;
