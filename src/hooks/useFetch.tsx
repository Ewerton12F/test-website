import React, { useEffect, useState } from 'react';

export default function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | unknown>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return { data };
}
