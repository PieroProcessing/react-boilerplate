import React, { ReactElement } from 'react';

interface Props {}

function Text({}: Props): ReactElement {
  return <input type="text" onChange={onChange} value={value} />;
}

export default Text;
