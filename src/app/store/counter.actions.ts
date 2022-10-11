import { createAction } from '@ngrx/store';

/**
 * createActionはActionCreator型を返します。第一引数がtypeになります。
 * createAction([])の[]はアクションのカテゴリ記述します。その後ろにはこのアクションのイベント
 * 名を記述するとわかりやすいです。
 */
export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
