#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
哲人王 · 资源完整性校验

用法（在本文件所在目录执行）：
    python check_assets.py

作用：解析 data.js，逐一断言以下内容所需的图片是否存在：
  1. 每个事件 id         → assets/scenes/<id>.jpg
  2. 每个结局 id         → assets/scenes/ending_<id>.jpg
  3. 每个成就 id         → assets/scenes/achv_<映射名>.jpg
  4. 每个哲人 id         → assets/portraits/<id>.png
缺失的直接列出清单；全部通过则退出码 0，有缺失退出码 1。
新增内容后跑一遍，就能从根上杜绝「漏图」。
"""

import json
import os
import sys

BASE = os.path.dirname(os.path.abspath(__file__))
SCENES = os.path.join(BASE, "assets", "scenes")
PORTRAITS = os.path.join(BASE, "assets", "portraits")

# 成就 id → 图片文件名（与 game.js 内 achvBgMap 保持一致）
ACHV_BG_MAP = {
    "first_council": "achv_first_crown.jpg",
    "iron_fist": "achv_iron_fist.jpg",
    "free_wind": "achv_free_wind.jpg",
    "fickle": "achv_fickle.jpg",
    "polymath": "achv_polymath.jpg",
    "virtuous_rule": "achv_virtuous_rule.jpg",
    "six_sages": "achv_six_sages.jpg",
}


def load_data():
    path = os.path.join(BASE, "data.js")
    with open(path, encoding="utf-8") as f:
        src = f.read()
    # data.js 形如：window.GAME_DATA = { ... };
    body = src.split("=", 1)[1].strip().rstrip(";")
    return json.loads(body)


def main():
    data = load_data()
    problems = []

    scene_files = set(os.listdir(SCENES)) if os.path.isdir(SCENES) else set()
    portrait_files = set(os.listdir(PORTRAITS)) if os.path.isdir(PORTRAITS) else set()

    # 1. 事件图
    miss_events = [e["id"] for e in data.get("events", [])
                   if e["id"] + ".jpg" not in scene_files]
    # 2. 结局图
    miss_endings = [e["id"] for e in data.get("endings", [])
                    if "ending_" + e["id"] + ".jpg" not in scene_files]
    # 3. 成就图
    miss_achv = []
    for a in data.get("achievements", []):
        img = ACHV_BG_MAP.get(a["id"], "achv_" + a["id"] + ".jpg")
        if img not in scene_files:
            miss_achv.append(a["id"] + " (期望 " + img + ")")
    # 4. 哲人立绘（已转 JPG 以减小体积）
    miss_portraits = [p["id"] for p in data.get("philosophers", [])
                      if p["id"] + ".jpg" not in portrait_files]

    # 反向检查：找出没有被任何数据引用的孤儿图（疑似命名不一致）
    used = {e["id"] + ".jpg" for e in data.get("events", [])}
    used |= {"ending_" + e["id"] + ".jpg" for e in data.get("endings", [])}
    used |= set(ACHV_BG_MAP.values())
    orphans = sorted(f for f in scene_files
                     if f.endswith(".jpg")
                     and f.startswith("ending_")
                     and f not in used)

    print("=" * 56)
    print("哲人王 · 资源完整性校验")
    print("=" * 56)
    print("事件 %d 个，缺图 %d 个" % (len(data.get("events", [])), len(miss_events)))
    if miss_events:
        print("  缺：" + ", ".join(miss_events))
    print("结局 %d 个，缺图 %d 个" % (len(data.get("endings", [])), len(miss_endings)))
    if miss_endings:
        print("  缺：" + ", ".join(miss_endings))
    print("成就 %d 个，缺图 %d 个" % (len(data.get("achievements", [])), len(miss_achv)))
    if miss_achv:
        print("  缺：" + ", ".join(miss_achv))
    print("哲人 %d 位，缺立绘 %d 个" % (len(data.get("philosophers", [])), len(miss_portraits)))
    if miss_portraits:
        print("  缺：" + ", ".join(miss_portraits))
    if orphans:
        print("疑似孤儿结局图（数据里没有对应 id）：" + ", ".join(orphans))
    print("=" * 56)

    if miss_events or miss_endings or miss_achv or miss_portraits:
        print("结论：存在缺失资源，请按上面清单补齐。")
        sys.exit(1)
    print("结论：全部资源齐备。")
    sys.exit(0)


if __name__ == "__main__":
    main()
