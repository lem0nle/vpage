import { ComponentOptions } from 'vue'

export async function resolveLayoutComponent(
  name: string,
  pageId: string,
): Promise<ComponentOptions> {
  let dirs = pageId.split('/')
  dirs = dirs.slice(1, dirs.lastIndexOf('pages'))
  // we have to statically find layout dirs due to dynamic import limitations of rollup
  // see https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
  switch (dirs.length) {
    case 0:
      return (await import(`../../layouts/${name}.layout.vue`)).default
    case 1:
      return (await import(`../../${dirs[0]}/layouts/${name}.layout.vue`))
        .default
    case 2:
      return (
        await import(`../../${dirs[0]}/${dirs[1]}/layouts/${name}.layout.vue`)
      ).default
    case 3:
      return (
        await import(
          `../../${dirs[0]}/${dirs[1]}/${dirs[2]}/layouts/${name}.layout.vue`
        )
      ).default
    case 4:
      return (
        await import(
          `../../${dirs[0]}/${dirs[1]}/${dirs[2]}/${dirs[3]}/layouts/${name}.layout.vue`
        )
      ).default
    case 5:
      return (
        await import(
          `../../${dirs[0]}/${dirs[1]}/${dirs[2]}/${dirs[3]}/${dirs[4]}/layouts/${name}.layout.vue`
        )
      ).default
    default:
      throw new Error('cannot assign layout to page with depth more than 5')
  }
}
