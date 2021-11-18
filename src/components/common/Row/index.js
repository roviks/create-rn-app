import React from 'react';
import {View} from 'react-native';
import styles from './styles';

/**
 * Assign the project to an employee.
 * @param {import('./c').IRowViewModel} props - The employee who is responsible for the project.
 */
function Row({style, children, justify = 'flex-start', ...props}) {
  return (
    <View
      style={[
        style,
        {
          justifyContent: justify,
        },
        styles.row,
      ]}>
      {children}
    </View>
  );
}

export default React.memo(Row);
