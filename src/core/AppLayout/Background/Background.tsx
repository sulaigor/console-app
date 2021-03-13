import React from 'react';
import classnames from 'classnames';
import bgImage from 'assets/images/white_stripes.jpg';
import css from './background.module.scss';

interface IProps {
  className?: string;
}

const Background = ({ className }: IProps) => {
  return (
    <div style={{ backgroundImage: `url("${bgImage}")` }} className={classnames(css.bgImage, className)} />
  );
};

export default Background;
