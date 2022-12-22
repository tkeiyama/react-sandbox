import * as V from 'next/package.json'

export default function Index() {
  console.log(V)
  return <div>{V.version}</div>;
}
