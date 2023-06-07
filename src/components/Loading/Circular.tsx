'use client';

import styled from './Loading.module.scss';

interface Props {
  inComponent?: boolean;
  test?: boolean;
}

const Circular = ({ inComponent, test }: Props) => {
  return (
    <div className="text-center">
      loading...
    </div>
  );
}

export default Circular;