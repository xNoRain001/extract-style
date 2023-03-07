const regexps = {
  styleRegexp: / style=["']?([a-zA-Z0-9 :\-#()._;',\s\n\r&]+);?["']?|<\s*font[^>]*>/g,
  stylePairsRegexp: /\s*([a-z\-]+)\s*:\s*([^;]+);?/g
}

module.exports = regexps
