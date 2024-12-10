import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines multiple Tailwind CSS classes into a single string.
 * Uses `clsx` to conditionally join the classes and `twMerge` to 
 * merge Tailwind CSS classes, resolving any conflicts.
 * @returns A string with the combined and merged classes.
 */
export const tw = (...classes: ClassValue[]): string =>
{
  return twMerge(clsx(...classes))
}
