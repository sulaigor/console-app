import css from './modalBody.module.scss';

const ModalBody = () => {
  return (
    <main>
      <h4 className={css.headline}>Admin privileges required for this action.</h4>
      <p className={css.text}>Enter the password to continue.</p>
    </main>
  );
};

export default ModalBody;
