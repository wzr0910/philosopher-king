#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""压图：立绘缩尺寸、场景降质量。原图已在 _bak/ 备份。"""
import os, sys
from PIL import Image

ROOT = os.path.dirname(os.path.abspath(__file__))
before = after = 0

def walk(folder, rule):
    global before, after
    for fn in os.listdir(folder):
        fp = os.path.join(folder, fn)
        if not os.path.isfile(fp):
            continue
        ext = os.path.splitext(fn)[1].lower()
        if ext not in (".png", ".jpg", ".jpeg"):
            continue
        b0 = os.path.getsize(fp)
        try:
            im = Image.open(fp)
            im.load()
            rule(im, fp, ext)
            a0 = os.path.getsize(fp)
            before += b0; after += a0
            print(f"  {fn:36s} {b0/1024:7.0f}KB -> {a0/1024:7.0f}KB")
        except Exception as e:
            print(f"  [跳过] {fn}: {e}")

def portrait_rule(im, fp, ext):
    # 立绘：高最大 1100px，保持比例；PNG optimize
    w, h = im.size
    max_h = 1100
    if h > max_h:
        nw = int(w * max_h / h)
        im = im.resize((nw, max_h), Image.LANCZOS)
    im.save(fp, "PNG", optimize=True)

def scene_rule(im, fp, ext):
    # 场景/结局/成就图：宽最大 1200px，JPG quality 82
    w, h = im.size
    max_w = 1200
    if w > max_w:
        nh = int(h * max_w / w)
        im = im.resize((max_w, nh), Image.LANCZOS)
    if im.mode in ("RGBA", "P"):
        im = im.convert("RGB")
    im.save(fp, "JPEG", quality=82, optimize=True, progressive=True)

print("=== 压立绘 portraits/ ===")
walk(os.path.join(ROOT, "assets", "portraits"), portrait_rule)
print("=== 压场景 scenes/ ===")
walk(os.path.join(ROOT, "assets", "scenes"), scene_rule)
print(f"\n合计: {before/1024/1024:.1f}MB -> {after/1024/1024:.1f}MB (省 {(after-before)/1024/1024:.1f}MB)")
