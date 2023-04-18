import createStore from "zustand";
import userStore from "./userStore";
import postStore from "./postStore";

const useStore = createStore((set) => ({
  ...userStore(set),
  ...postStore(set),
}));

export default useStore;
