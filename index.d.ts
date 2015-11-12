import { Promise } from 'es6-promise'

interface Callback <T> {
  (err: any, value?: T): any
}

declare function thenify <T> (fn: (cb: Callback<T>) => any): () => Promise<T>
declare function thenify <A, T> (fn: (a: A, cb: Callback<T>) => any): (a: A) => Promise<T>
declare function thenify <A, B, T> (fn: (a: A, b: B, cb: Callback<T>) => any): (a: A, b: B) => Promise<T>
declare function thenify <A, B, C, T> (fn: (a: A, b: B, c: C, cb: Callback<T>) => any): (a: A, b: B, c: C) => Promise<T>
declare function thenify <A, B, C, D, T> (fn: (a: A, b: B, c: C, d: D, cb: Callback<T>) => any): (a: A, b: B, c: C, d: D) => Promise<T>

declare namespace thenify {
  export function withCallback <T> (fn: (cb: Callback<T>) => any): (cb?: Callback<T>) => Promise<T>
  export function withCallback <A, T> (fn: (a: A, cb: Callback<T>) => any): (a: A, cb?: Callback<T>) => Promise<T>
  export function withCallback <A, B, T> (fn: (a: A, b: B, cb: Callback<T>) => any): (a: A, b: B, cb?: Callback<T>) => Promise<T>
  export function withCallback <A, B, C, T> (fn: (a: A, b: B, c: C, cb: Callback<T>) => any): (a: A, b: B, c: C, cb?: Callback<T>) => Promise<T>
  export function withCallback <A, B, C, D, T> (fn: (a: A, b: B, c: C, d: D, cb: Callback<T>) => any): (a: A, b: B, c: C, d: D, cb?: Callback<T>) => Promise<T>
}

export = thenify
