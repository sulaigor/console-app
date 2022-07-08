export interface IReducerAction {
  type: string;
  payload?: Record<string, any>;
}

export type ReducerType<State> = (state: State | undefined, action: IReducerAction) => State;
