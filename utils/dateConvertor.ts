import { format } from 'date-fns'

export function dateConvertor(str: string, output: string = 'MMM d, yyyy'): string {
  if (str?.length) {
    return format(str, output)
  }

  return 'No date provided'
}
