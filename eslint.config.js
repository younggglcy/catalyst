import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'lib',
    typescript: {
      parserOptions: {
        ecmaVersion: 2020,
      },
    },
  },
)
