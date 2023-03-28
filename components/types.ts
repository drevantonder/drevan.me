import { ReactNode, JSXElementConstructor } from 'react'

export type ReactTag = keyof JSX.IntrinsicElements | JSXElementConstructor<any>

export type PropsOf<TTag extends ReactTag> = TTag extends React.ElementType
  ? React.ComponentProps<TTag>
  : never

type PropsWeControl = 'as' | 'children' | 'className'

// Resolve the props of the component, but ensure to omit certain props that we control
type CleanProps<
  TTag extends ReactTag,
  TOmitableProps extends PropertyKey = never
> = Omit<PropsOf<TTag>, TOmitableProps | PropsWeControl>

// Add certain props that we control
type OurProps<TTag extends ReactTag> = {
  as?: TTag
  className?: string
  children?: ReactNode
}

// Provide clean TypeScript props, which exposes some of our custom API's.
export type Props<
  TTag extends ReactTag,
  TOmitableProps extends PropertyKey = never,
  Overrides = {}
> = CleanProps<TTag, TOmitableProps | keyof Overrides> &
  OurProps<TTag> &
  Overrides
