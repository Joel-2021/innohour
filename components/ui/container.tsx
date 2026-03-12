import { cn } from '@/lib/utils'
import { ContainerProps } from '@/models/container.model'

export const Container = ({ className, children, ...props }: ContainerProps) => {
  return (
    <div className={cn('max-w-7xl mx-auto', className)} {...props}>
      {children}
    </div>
  )
}