import React from 'react';
import {GlobalContext} from '~/context/Provider';
import h from './h';

export function useLocalization() {
  const {localizationContext} = React.useContext(GlobalContext);
  const {t} = localizationContext;

  return {t, h};
}
