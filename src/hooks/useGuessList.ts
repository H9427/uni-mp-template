import type { GuessInstance } from '@/types/component'

export const useGuessList = () => {
  const guessRef = ref<GuessInstance>()

  const onScrolltolower = () => {
    guessRef.value?.getMore()
  }

  return {
    guessRef,
    onScrolltolower
  }
}
