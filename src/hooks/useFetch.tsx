import { Service } from '../../types';

export default async function useFetch(): Promise<Service[]> {
  const res = await fetch('https://teste-server.vercel.app/api/services-list');

  if (!res.ok) throw new Error('failed to fetch data');

  return res.json();
}
