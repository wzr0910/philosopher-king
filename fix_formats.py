#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""修复：crown.png 转 crown.jpg；立绘 PNG 转 JPG。"""
import os
from PIL import Image

ROOT = os.path.dirname(os.path.abspath(__file__))

# 1) crown.png -> crown.jpg
cp = os.path.join(ROOT, "assets", "scenes", "crown.png")
cj = os.path.join(ROOT, "assets", "scenes", "crown.jpg")
im = Image.open(cp).convert("RGB")
im.save(cj, "JPEG", quality=85, optimize=True)
os.remove(cp)
print("crown.png -> crown.jpg")

# 2) 立绘 PNG -> JPG（代码里 .png 引用由 game.js 统一改成 .jpg）
pd = os.path.join(ROOT, "assets", "portraits")
for fn in os.listdir(pd):
    if not fn.endswith(".png"):
        continue
    fp = os.path.join(pd, fn)
    im = Image.open(fp)
    # 保持当前 1100px 高，转 JPG q85
    if im.mode != "RGB":
        im = im.convert("RGB")
    out = fp[:-4] + ".jpg"
    im.save(out, "JPEG", quality=85, optimize=True, progressive=True)
    old_kb = os.path.getsize(fp)/1024
    new_kb = os.path.getsize(out)/1024
    os.remove(fp)
    print(f"  {fn}: {old_kb:.0f}KB -> {new_kb:.0f}KB (jpg)")
print("done")
