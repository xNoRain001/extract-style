## Introduction

Extract stlye.

## Start

npm install -g extract-style

## Example

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div style="width: 100px; height: 100px; background-color: red"></div>
</body>
</html>
```

run

```
extract-style -i ./index.html -o ./target
```

result

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
	<link rel="stylesheet" href="./index.css">
</head>
<body>
  <div class="LvSrfUQYSuDYoMKBgHfJuZJVhlPgTLyK"></div>
</body>
</html>
```

```css
/* index.css */
.LvSrfUQYSuDYoMKBgHfJuZJVhlPgTLyK {width:100px;height:100px;background-color:red}
```
