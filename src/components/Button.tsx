import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'bg-brand-700 font-semibold text-zinc-100 hover:bg-brand-600 active:bg-brand-800 active:text-zinc-100/70 dark:bg-brand-600 dark:hover:bg-brand-500 dark:active:bg-brand-700 dark:active:text-zinc-100/70 shadow-sm hover:shadow-md',
  secondary:
    'bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70',
}

type ButtonProps = {
  variant?: keyof typeof variantStyles
} & (
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
  | React.ComponentPropsWithoutRef<typeof Link>
)

export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-lg py-2.5 px-4 text-sm outline-offset-2 transition-all duration-200 hover:scale-[1.02] active:transition-none',
    variantStyles[variant],
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}