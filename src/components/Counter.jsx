/**
 * Counter component
 * @param {Object} props
 * @param {Number} props.currentPage
 * @param {Number} props.total
 * @returns {JSX.Element}
 *
 * @example
 * <Counter currentPage={1} total={10} />
*/

export function Counter(props) {
  return (
    <div className="fixed bottom-4 left-4 flex items-center justify-center w-14 h-14 text-[10px] font-bold bg-white shadow-md border border-gray-100 rounded-full">{props.currentPage} / {props.total}</div>
  )
}
