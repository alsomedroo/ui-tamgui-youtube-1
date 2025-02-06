// tamagui.config.ts
import { createTamagui } from '@tamagui/core'

export const config = createTamagui({
  themes: {
    light: {
      background: '#fff',
      text: '#000',
    },
    dark: {
      background: '#000',
      text: '#fff',
    },
  },
  fonts: {
    //@ts-ignore
    body: 'System',
    //@ts-ignore
    heading: 'System',
  },
})

export default config
