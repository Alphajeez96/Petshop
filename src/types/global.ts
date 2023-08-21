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
