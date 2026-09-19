#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""立绘/皇冠转 WebP（保留透明通道），替换黑底 JPG。"""
import os
from PIL import Image

ROOT = os.path.dirname(os.path.abspath(__file__))

# 1) 立绘：从 _bak 原始透明 PNG 转 WebP
bak = os.path.join(ROOT, "assets", "portraits", "_bak")
out_dir = os.path.join(ROOT, "assets", "portraits")
for fn in sorted(os.listdir(bak)):
    if not fn.endswith(".png"):
        continue
    pid = fn[:-4]
    im = Image.open(os.path.join(bak, fn))
    w, h = im.size
    if h > 1100:
        im = im.resize((int(w*1100/h), 1100), Image.LANCZOS)
    if im.mode != "RGBA":
        im = im.convert("RGBA")
    out = os.path.join(out_dir, pid + ".webp")
    im.save(out, "WEBP", quality=85, method=6)
    # 删掉黑底 jpg
    jpg = os.path.join(out_dir, pid + ".jpg")
    if os.path.exists(jpg):
        os.remove(jpg)
    print(f"  {pid}.webp  {os.path.getsize(out)//1024}KB")

# 2) crown.png -> crown.webp
cp = os.path.join(ROOT, "assets", "scenes", "crown.png")
cw = os.path.join(ROOT, "assets", "scenes", "crown.webp")
im = Image.open(cp)
if im.mode != "RGBA":
    im = im.convert("RGBA")
im.save(cw, "WEBP", quality=88, method=6)
os.remove(cp)
cj = os.path.join(ROOT, "assets", "scenes", "crown.jpg")
if os.path.exists(cj):
    os.remove(cj)
print(f"  crown.webp  {os.path.getsize(cw)//1024}KB")
print("done")
