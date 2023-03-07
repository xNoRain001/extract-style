const { mkdir, opendir, readFile, writeFile } = require('fs').promises

const genClassName = require('./gen-class-name')
const { styleRegexp, stylePairsRegexp } = require('./regexp')

const extractStyle = async (input, output) => {
  let html = await readFile(input, 'utf-8')
  const res = {}

  html = html.replace(styleRegexp, (_, $1) => {
    const className = genClassName()

    $1.replace(stylePairsRegexp, (_, $1, $2) => {
      (res[className] = res[className] || {})[$1] = $2
    })

    return ` class="${ className }"`
  })

  let css = ''

  for (const className in res) {
    const json = JSON.stringify(res[className])
    const rule = json.replace(/"/g, '').replace(/,/g, ';')

    css += `.${ className } ${ rule }\r`
  }
  
  const linkCss = '<link rel="stylesheet" href="./index.css">'
  html = html.replace('</head>', `\t${ linkCss }\r\n</head>`)

  try {
    await opendir(output)
  } catch (error) {
    await mkdir(output)
  }

  try {
    await writeFile(`${ output }/index.html`, html)
    await writeFile(`${ output }/index.css`, css)
  } catch (error) {
    console.log(error)
  }
}

module.exports = extractStyle
