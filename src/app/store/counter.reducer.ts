import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';
// 初期値をインポート
import { initialState } from '../shared/states/counter.state';

// アクションを下記のように記述するとアクションをまとめてインポートできる
// import * as CounterActions from './counter.actions';
// この場合はCounterActions.アクションメソッド名でアクセス可能

// Reducer関数を定義
/**
 * createReducerはReducerを定義する関数です。第一引数引数は初期値を指定。
 * 第二引数のonメソッドでActinoメソッドと処理を記述します。
 */
export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({...state, countNum: state.countNum + 1})),
  on(decrement, (state) => ({...state, countNum: state.countNum - 1})),
  on(reset,reset, (state) => ({...state, countNum: 0}))
);