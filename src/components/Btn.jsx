
export default function Btn({bgcolor, text, bodyColor}) {
  return (
    <button className="text-white px-2 py-1 rounded-lg outline-none shadow-md" style={{backgroundColor:bgcolor}} onClick={()=> bodyColor(bgcolor)}>{text}</button>
  )
}
