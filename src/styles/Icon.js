import React from 'react';
// import T from 'prop-types';
import { iconsConfig } from './iconsConfig';

export const Icon = ({ name, ...props }) => {
  console.log('name icon = ', name);
//   console.log('name ...props = ', JSON.stringify({ ...props }));
  const IconComponent = iconsConfig[name];
  console.log('name IconComponent = ', IconComponent);
  return <IconComponent {...props} />;
};

// Icon.propTypes = {
//   name: T.string.isRequired,
//   stroke: T.string,
//   color: T.string,
// };

// Icon.defaultProps = {
//   stroke: 'none',
// };

// export default Icon;