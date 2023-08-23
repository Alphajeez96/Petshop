export interface Blob {
  title: string
  content?: string
  metadata: {
    image: string
  }
}

export interface Breadcrumb {
  title: string
  path: string
}

export interface Column {
  prop: string
  label: string
}
