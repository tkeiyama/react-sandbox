import {ReactFlowProvider} from 'reactflow'

export default function App({Component, pageProps }) {
  return <ReactFlowProvider><Component {...pageProps} /></ReactFlowProvider>
}