export function resolveLayoutComponent(name: string, pageId: string) {
  const dirs = pageId.split('/')
  dirs.splice(0, 1)
  dirs.splice(-2, 2)
  // we have to statically find layout dirs due to dynamic import limitations of rollup
  // see https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
  switch (dirs.length) {
    case 0:
      return import(`../../layouts/${name}.layout.vue`)
    case 1:
      return import(`../../${dirs[0]}/layouts/${name}.layout.vue`)
    case 2:
      return import(`../../${dirs[0]}/${dirs[1]}/layouts/${name}.layout.vue`)
    case 3:
      return import(
        `../../${dirs[0]}/${dirs[1]}/${dirs[2]}/layouts/${name}.layout.vue`
      )
    case 4:
      return import(
        `../../${dirs[0]}/${dirs[1]}/${dirs[2]}/${dirs[3]}/layouts/${name}.layout.vue`
      )
    case 5:
      return import(
        `../../${dirs[0]}/${dirs[1]}/${dirs[2]}/${dirs[3]}/${dirs[4]}/layouts/${name}.layout.vue`
      )
    default:
      throw new Error('cannot assign layout to page with depth more than 5')
  }
}
