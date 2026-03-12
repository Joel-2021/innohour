import { HTMLAttributes, ReactNode } from "react"

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode
}