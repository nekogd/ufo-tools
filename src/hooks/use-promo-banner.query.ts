import { gql, request } from 'graphql-request';
import { useQuery } from '@tanstack/react-query';

const PromoBannerQuery = gql`
  query NewQuery {
    promoBanner(id: "12", idType: DATABASE_ID) {
      id
      title
      promoBannerCustomFields {
        title
        backgroundImage {
          srcSet
        }
      }
    }
  }
`;

export const usePromoBannerQuery = () => {
  return useQuery({
    queryKey: ['promo-banner'],
    queryFn: async () => request('https://loewiufo.kinsta.cloud/graphql', PromoBannerQuery),
  });
};
