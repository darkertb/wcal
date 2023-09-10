import { create } from 'zustand';
import { InputHandler } from '../common/calculator/inputHandler';

interface APIStoreState {
  inputHandler: InputHandler
}

export const useAPIStore = create<APIStoreState>(
  (set) => ({
    inputHandler: new InputHandler(),
  }),
);
