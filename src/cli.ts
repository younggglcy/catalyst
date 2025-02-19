import { cwd } from 'node:process'
import { defineCommand, runMain } from 'citty'

const main = defineCommand({
  meta: {
    name: 'catalyst',
    description: 'A tool that assists in updating pnpm catalogs',
    version: __CATALYST_VERSION__,
  },
  args: {
    cwd: {
      alias: ['c'],
      required: false,
      default: cwd(),
      description: 'The directory to run the command in',
      type: 'string',
      valueHint: '.',
    },
    interactive: {
      alias: ['i'],
      required: false,
      default: false,
      description: 'Whether to run the command interactively, showing package diffs',
      type: 'boolean',
    },
  },
  run({ args }) {
    console.log(args)
    console.log('Hello, Catalyst')
  },
})

runMain(main)
