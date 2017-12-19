import { INCREASE_DEPTH } from "./constants";

const initialState = {
  structure: [
    {
      name: "Lorem",
      children: [
        {
          name: "Ipsum"
        },
        {
          name: "Dolor",
          children: [
            {
              name: "Orci",
              children: [
                {
                  name: "Quis",
                  children: [
                    {
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
      name: "Sit",
      children: [
        {
          name: "Amet"
        },
        {
          name: "Consectetur"
        }
      ]
    },
    {
      name: "Adipscing",
      children: [
        {
          name: "Elit",
          children: [
            {
              name: "Vestibulum"
            },
            {
              name: "Vitae",
              children: [
                {
                  name: "First one",
                  children: [
                    {
                      name: "First One other one"
                    }
                  ]
                },
                {
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
    default:
      return state;
  }
};

export default containerReducer;
