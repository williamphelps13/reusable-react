type ButtonProps = {
  children: React.ReactNode
  purpose: 'primary' | 'secondary'
  size: 'sm' | 'md' | 'lg'
  type: 'button' | 'reset' | 'submit'
}

export default function Button({
  children,
  purpose = 'primary',
  size = 'md',
  type = 'button',
}: ButtonProps) {
  return (
    <button
      className="rounded data-[size=sm]:px-2 data-[size=sm]:py-1 data-[size=md]:px-4 data-[size=md]:py-2 data-[size=lg]:px-4 data-[size=lg]:py-2 data-[purpose=primary]:bg-blue-500 data-[purpose=secondary]:bg-white-500 data-[purpose=primary]:text-white data-[purpose=secondary]:text-black data-[purpose=secondary]:border-2 data-[purpose=secondary]:border-black"
      data-purpose={purpose}
      data-size={size}
      type={type}
    >
      {children}
    </button>
  )
}
