import { Header } from '../';

/**
 * Default layout component
 * @param props
 * @param {JSX.Element} props.children
 * @returns {JSX.Element}
 */
export function DefaultLayout(props) {
  return (
    <>
      <Header />
      {props.children}
    </>
  )
}
