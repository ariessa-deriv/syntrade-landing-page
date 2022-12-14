import clsx from 'clsx'

export function Container({ className, ...props }) {
  return (
    <div
      id="container-main"
      className={clsx('bg mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  )
}
