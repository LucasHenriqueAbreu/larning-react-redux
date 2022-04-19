import { useAppDispatch, useAppSelector } from '../../app/hooks'



export function Counter() {
  // O argumento `state` já está escrito corretamente como `RootState`
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  // omit rendering logic
}