import { format } from 'date-fns'

export function dateConvertor(str: string, output: string = 'MMM d, yyyy'): string {
  return format(str, output)
}
