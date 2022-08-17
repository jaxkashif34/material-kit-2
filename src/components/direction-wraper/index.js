import React, { useMemo, useEffect } from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import stylisRTLPlugin from 'stylis-plugin-rtl';
import { useConfig } from 'context';
export default function DirectionWraper({ children }) {
  const {
    controller: { direction },
  } = useConfig();
  const rtlCache = useMemo(() => {
    const cacheRtl = createCache({
      key: 'rtl',
      stylisPlugins: [stylisRTLPlugin],
    });
    return cacheRtl; // return the cache object
  }, []);
  useEffect(() => {
    document.body.setAttribute('dir', direction); // set the dir attribute for the body element
  }, [direction]); // eslint-disable-line react-hooks/exhaustive-deps

  return direction === 'rtl' ? <CacheProvider value={rtlCache}>{children}</CacheProvider> : children;
}
