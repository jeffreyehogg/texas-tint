import { forwardRef } from 'react'
import clsx from 'clsx'

const ContainerOuter = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
>((props, ref) => {
  const { className, children, ...otherProps } = props
  return (
    <div
      ref={ref}
      className={clsx('w-full px-4 sm:px-8', className)}
      {...otherProps}
    >
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  )
})

ContainerOuter.displayName = 'ContainerOuter'

const ContainerInner = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
>((props, ref) => {
  const { className, children, ...otherProps } = props
  return (
    <div
      ref={ref}
      className={clsx('relative px-2 sm:px-4 md:px-6', className)}
      {...otherProps}
    >
      <div className="mx-auto max-w-lg md:max-w-2xl lg:max-w-5xl">
        {children}
      </div>
    </div>
  )
})

ContainerInner.displayName = 'ContainerInner'

const Container = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ContainerOuter>
>(function Container(props, ref) {
  const { children, ...otherProps } = props
  return (
    <ContainerOuter ref={ref} {...otherProps}>
      <ContainerInner>{children}</ContainerInner>
    </ContainerOuter>
  )
})

export default Container
