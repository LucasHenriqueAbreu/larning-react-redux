import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

// Aqui é definido um tipo para o estado da parte que queremos do app
interface ConterState {
    value: number;
}

// Aqui é inicializado um valor para o estado inicial a partir do tipo.
const initialState: ConterState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    // `createSlice` vai ler o tipo de estado do argumento `initialState`
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        // Use o tipo PayloadAction para declarar o conteúdo de `action.payload
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Outros códigos, como seletores, podem usar o tipo `RootState` importado
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer