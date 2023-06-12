import { Service } from '../../types';

import useFetch from '@/hooks/useFetch';

const { data } = useFetch<Service[]>(
  'https://teste-server.vercel.app/api/services-list'
);

const services = data?.map((service) => {
  return {
    id: service.id,
    title: service.title,
    smalldesc: service.smalldesc,
    largedesc: service.largedesc,
    icon: service.icon
  };
});

export default services;
