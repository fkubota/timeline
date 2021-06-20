sq = "'"
t = 'aadd<head><hoghoge/><aa/></hoge>'
s = f'<head><meta property="og:description" content="最近やったことなどが簡単に時系列でまとめられています。" /><meta property="og:image" content="https://github.com/fkubota/timeline/blob/main/src/images/design.png?raw=true" /><meta property="twitter:site" content="@fkubota_" /><meta property="twitter:card" content="summary_large_image" /><meta property="twitter:title" content="fkubota{sq}s timeline"/>'
print(t)
print(s)
print(t.replace('<head>', s))
