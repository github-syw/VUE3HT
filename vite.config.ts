import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'

// mock
import { viteMockServe } from 'vite-plugin-mock'
import { UserConfigExport, ConfigEnv } from 'vite'
// svg
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      vue(),
      // mock
      viteMockServe({
        mockPath: './src/mock',
        enable: command === 'serve',
      }),
      // svg
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      }),
    ],
    // 全局使用scss变量
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/style/variable.scss";',
        },
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
}
