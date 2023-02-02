import Theme from 'vitepress/theme'
import { enhanceAppWithTabs } from '@elonehoo/vitepress-plugin-tabs/client'
import './style/var.css'
import 'uno.css'

export default {
  ...Theme,
  enhanceApp({ app }) {
    enhanceAppWithTabs(app)
  }
}
