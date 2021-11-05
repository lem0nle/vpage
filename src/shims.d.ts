declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const component: ComponentOptions
  export default component
}

type ImportMetaEnv = Readonly<Record<string, string>>

interface ImportMeta {
  readonly env: ImportMetaEnv
}
