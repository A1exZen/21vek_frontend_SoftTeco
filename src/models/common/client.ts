export type Jsonable =
  | string
  | number
  | boolean
  | null
  | undefined
  | readonly Jsonable[]
  | { readonly [key: string]: Jsonable }
  | { toJSON(): Jsonable };

export enum ToastAlertType {
  ERROR = 'error',
  WARNING = 'warning',
  SUCCESS = 'success',
}
