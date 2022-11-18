export interface IStoreAction {
  type: string;
  payload?: Record<string, any>;
}

export type BlankActionUtil = () => Pick<IStoreAction, 'type'>;
export type ReducerUtil<State> = (state: State | undefined, action: IStoreAction) => State;
