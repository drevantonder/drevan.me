import { Props } from './types'
import clsx from 'clsx'
import { ElementType } from 'react'

export function Container<TTag extends ElementType = 'div'>({
  as,
  ...props
}: Props<TTag>) {
  const Wrapper = as || 'div'

  return (
    <Wrapper
      {...props}
      className={clsx('px-4 md:px-6 lg:px-8', props.className)}
    >
      <div className="container mx-auto">{props.children}</div>
    </Wrapper>
  )
}
