import * as React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {FC} from 'react';
import Toast from 'react-native-toast-message';

export const ReactQueryConfigurationProvider: FC = ({children}) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      mutations: {
        onError: (e: any) => {
          if ('message' in e) {
            Toast.show({
              text1: 'QueryError',
              text2: e?.message,
              type: 'error',
            });
          }
        },
      },
      queries: {
        refetchOnWindowFocus: true,
        retry: false,
        staleTime: 60 * 1000 * 5, /// 5 mins
        onError: (e: any) => {
          if ('message' in e) {
            Toast.show({
              text1: 'QueryError',
              text2: e?.message,
              type: 'error',
            });
          }
        },
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
