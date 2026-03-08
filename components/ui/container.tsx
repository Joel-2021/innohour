import { cn } from '@/lib/utils'
import { ContainerProps } from '@/models/container.model'


export const Container = ({ className, children }: ContainerProps) => {
  return (
    <div className={cn('max-w-7xl mx-auto', className)}>
      {children}
    </div>
  )
}