# index.htmlに追加
sq = "'"
s = f'<head><meta property="og:description" content="最近やったことなどが時系列で簡単にまとめられています。" /><meta property="og:image" content="https://github.com/fkubota/timeline/blob/main/src/images/design.png?raw=true" /><meta property="twitter:site" content="@fkubota_" /><meta property="twitter:card" content="summary_large_image" /><meta property="twitter:title" content="fkubota{sq}s timeline"/>'


path = './docs/index.html'
with open(path) as f:
    text = f.read()
    text_new = text.replace('<head>', s)


with open(path, mode='w') as f:
        f.write(text_new)
