import { Provider } from 'react-redux';
import { IChildrenProps as IProps } from 'types/props';
import store from 'store';

const StoreProvider = ({ children }: IProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
