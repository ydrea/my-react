import create from "zustand";

export const useStore = create((set) => ({
  item: [],
  filter: "",
  selected: null,

  setItem: (item) =>
    set((state) => ({
      ...state,
      item,
    })),

  setFilter: (filter) =>
    set((state) => ({
      ...state,
      filter,
    })),

  setSelected: (selected) =>
    set((state) => ({
      ...state,
      selected,
    })),
}));

if (typeof window !== undefined) {
fetch("http://localhost:3000/items.json")
  .then((resp) => resp.json())
  .then((item) =>
    useStore.setState((state) => ({
      ...state,
      item,
    }))
  );}
