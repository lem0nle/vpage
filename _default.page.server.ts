import { setupServerRenderer } from 'vpage/server'
import html from './index.html?raw'
export const { render, passToClient } = setupServerRenderer(html)
