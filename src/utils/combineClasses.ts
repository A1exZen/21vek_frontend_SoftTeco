const combineClasses = (...classes: Array<string | undefined | null | boolean>) => {
  return classes.filter(Boolean).join(' ')
}

export { combineClasses as cc }