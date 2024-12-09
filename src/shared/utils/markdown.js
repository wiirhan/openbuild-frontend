import TurndownService from 'turndown'
import { getProcessor } from 'bytemd'
import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight'
import breaks from '@bytemd/plugin-breaks'
import math from '@bytemd/plugin-math'
import mermaid from '@bytemd/plugin-mermaid'
import gemoji from '@bytemd/plugin-gemoji'

const plugins = [gfm(), breaks(), highlight(), math(), mermaid(), gemoji()]

function getPlugins() {
  return plugins.slice()
}

function sanitize(sch) {
  const allowedMap = {
    iframe: ['src', 'width', 'height', 'title', 'frameBorder', 'allow', 'allowFullScreen'],
    video: ['autoPlay', 'controls', 'controlsList'],
    source: ['src', 'type'],
  }

  sch.attributes = {
    ...sch.attributes,
    ...allowedMap,
  }
  sch.tagNames = sch.tagNames ? [...sch.tagNames, ...Object.keys(allowedMap)] : sch.tagNames

  return sch
}

function renderMarkdown(htmlContent) {
  return new TurndownService().turndown(htmlContent)
}

function renderHtml(markdownContent) {
  return getProcessor({ sanitize, plugins }).processSync(markdownContent).toString()
}

export { getPlugins, sanitize, renderMarkdown, renderHtml }
