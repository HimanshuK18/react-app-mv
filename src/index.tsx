import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import './index.css';
import { NoteContextProvider } from './state/noteState';
import SetRoutes from "./routes/routes";
import { client } from './ApolloClient/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<>
  <ApolloProvider client={client}>
    <NoteContextProvider>
      <SetRoutes />
    </NoteContextProvider>
  </ApolloProvider>
</>);
