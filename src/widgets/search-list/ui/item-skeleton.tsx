import { cn } from 'shared/lib/utils'

type Props = {
  variant: 'list' | 'grid'
}

export const ItemSkeleton = ({ variant }: Props) => {
  return (
    <div
      className={cn(
        'flex w-full cursor-pointer flex-col rounded-md border border-gray-300 shadow-sm transition-all hover:border-gray-400 hover:shadow-md md:flex-row md:p-4',
        variant === 'grid' && 'md:flex-col md:p-0'
      )}
    >
      <div
        className={cn('h-72 w-full animate-pulse md:mr-4 md:h-48 md:w-48', variant === 'grid' && 'md:h-72 md:w-full')}
      >
        <div className="h-full w-full rounded-md bg-gray-200"></div>
      </div>

      <div className={cn('flex flex-1 flex-col p-2 md:flex-row md:p-0', variant === 'grid' && 'md:p-2')}>
        <div className="flex flex-1 flex-col">
          <div
            className={cn(
              'mb-2 h-8 w-3/4 animate-pulse rounded bg-gray-200 lg:w-2/4',
              variant === 'grid' && 'lg:w-3/4'
            )}
          ></div>
          <div
            className={cn(
              'mb-1 h-6 w-3/5 animate-pulse rounded bg-gray-200 lg:w-1/4',
              variant === 'grid' && 'lg:w-3/5'
            )}
          ></div>
          <div
            className={cn('h-6 w-2/5 animate-pulse rounded bg-gray-200 lg:w-1/5', variant === 'grid' && 'lg:w-2/5')}
          ></div>
          <div
            className={cn(
              'mt-2 flex flex-1 items-end justify-between gap-4',
              variant === 'grid' && 'items-start md:flex-col'
            )}
          >
            <div
              className={cn(
                'hidden max-w-md basis-3/4 flex-wrap gap-x-1 self-start overflow-hidden md:flex',
                variant === 'grid' && 'w-full'
              )}
            >
              <div className="mb-1 h-6 w-4/5 animate-pulse rounded bg-gray-200"></div>
              <div className="h-6 w-2/4 animate-pulse rounded bg-gray-200"></div>
            </div>
            <div className={cn('flex flex-col md:basis-1/4 md:items-end', variant === 'grid' && 'md:items-start')}>
              <div className="my-2 h-8 w-24 animate-pulse rounded bg-gray-200"></div>
              <div className="h-6 w-32 animate-pulse rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
