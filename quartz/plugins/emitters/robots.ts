import { FilePath, joinSegments } from "../../util/path"
import { QuartzEmitterPlugin } from "../types"
import { GlobalConfiguration } from "../../cfg"
import fs from "fs"
import DepGraph from "../../depgraph"

// Well-known AI/scraper crawlers that publicly document respecting robots.txt.
// This is a polite ask, not enforcement — bots that ignore robots.txt ignore this too.
const knownBotsToBlock = [
  "GPTBot",
  "ChatGPT-User",
  "CCBot",
  "anthropic-ai",
  "ClaudeBot",
  "Claude-Web",
  "Google-Extended",
  "Applebot-Extended",
  "Bytespider",
  "PerplexityBot",
  "Amazonbot",
  "Diffbot",
  "ImagesiftBot",
  "Omgili",
  "Omgilibot",
  "FacebookBot",
  "cohere-ai",
  "YouBot",
]

export function generateRobotsTxt(cfg: GlobalConfiguration): string {
  const disallowBlocks = knownBotsToBlock
    .map((bot) => `User-agent: ${bot}\nDisallow: /`)
    .join("\n\n")

  const sitemapLine = cfg.baseUrl ? `\nSitemap: https://${cfg.baseUrl}/sitemap.xml\n` : ""

  return `${disallowBlocks}\n\nUser-agent: *\nAllow: /\n${sitemapLine}`
}

export const Robots: QuartzEmitterPlugin = () => ({
  name: "Robots",
  getQuartzComponents() {
    return []
  },
  async getDependencyGraph(_ctx, _content, _resources) {
    return new DepGraph<FilePath>()
  },
  async emit({ argv, cfg }, _content, _resources): Promise<FilePath[]> {
    const path = joinSegments(argv.output, "robots.txt")
    fs.writeFileSync(path, generateRobotsTxt(cfg.configuration))
    return [path] as FilePath[]
  },
})
