f = open('./docs/index.html')
lines2 = f.readlines()
f.close()
for i, line in enumerate(lines2):
    assert i==0, "2行以上あるようです"
    line
print

