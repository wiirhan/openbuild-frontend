function resolvePathWithSearch(pathname, params) {
  const queryStr = params ? params.toString() : ''

  return `${pathname || '/'}${queryStr ? '?' + queryStr : ''}`
}

export { resolvePathWithSearch }
