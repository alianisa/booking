type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
}

export const Tag = ({ children, ...props }: Props) => {
  return (
    <div
      className="cursor-pointer rounded-md bg-gray-100 p-1 text-sm text-gray-500 hover:text-gray-700 hover:underline"
      {...props}
    >
      {children}
    </div>
  )
}
