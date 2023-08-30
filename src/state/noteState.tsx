import React, { createContext, Dispatch, useReducer } from 'react';
import { Note } from '../note/Note';

export type Action =
    | { type: 'save'; payload: Note }
    | { type: 'search'; payload: string };

type ContextNotes = {
    notesSaved: Note[];
    dispatch: Dispatch<Action>;
};

const userNotes: Note[] = [];

const reducer = (state: Note[], action: Action): Note[] => {
    switch (action.type) {
      case 'save':
        action.payload.id = state.length + 1;
        return [...state, action.payload];
      case 'search':
        return state.filter(note =>
          note.note.toLowerCase().includes(action.payload.toLowerCase())
        );
      default:
        throw new Error('Unhandled action type');
    }
  };

export const NotesContext = createContext<ContextNotes>({
    notesSaved: userNotes,
    dispatch: () => { return userNotes },
});


export const NoteContextProvider: React.FC<any> = (props: any) => {
    const [notesSaved, dispatch] = useReducer(reducer, userNotes);
    const handleDispatch = (action: Action) => {
        dispatch(action);
      };
    return (
        <NotesContext.Provider value={{ notesSaved, dispatch: handleDispatch }}>
            {props.children}
        </NotesContext.Provider>
    );
};

