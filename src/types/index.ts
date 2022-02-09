export interface Category {
  categoryId: number,
  categoryName: string,
  categoryChild: Category[]
}

export interface Schema {
  id: number,
  text: string
}

export interface Attr {
  id: number,
  text: string,
  children?: Attr[]
}