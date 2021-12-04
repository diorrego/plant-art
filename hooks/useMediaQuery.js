import { useState, useEffect } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config';

const useMediaQuery = (size) => {
  const [matches, setMatches] = useState(false);
  const {
    theme: { screens },
  } = resolveConfig(tailwindConfig);
  const query = `(min-width: ${screens[size]})`;

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const updateMatches = () => {
      setMatches(media.matches);
    };
    media.addEventListener('change', updateMatches);
    return () => {
      media.removeEventListener('change', updateMatches);
    };
  }, [query, matches]);
  return matches;
};

export default useMediaQuery;
