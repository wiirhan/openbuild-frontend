export default function Layout({ children }) {
  return (
    <>
      <div className="sticky top-[73px] h-9 bg-gray-1000 hidden md:block"></div>
      {children}
    </>
  )
}
