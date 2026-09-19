# 《哲人王》AI 生图提示词包（v8 · 学院派写实油画 · 温润金光 · 基于馍馍两张参考图重写）

> 给馍馍自己用的。莫陌整理。
> 用法一句话：每个画面 = **【风格锚】**（每次都粘，不变）+ **【画面主体】**（只改这里）。
> v8 变更：v7 往「暗黑戏剧性巴洛克」推过头，反而更丑。v8 完全按馍馍上传的**图1（柏拉图肖像）**和**图2（6人议会厅）**重新写：风格 = **19 世纪法国学院派写实油画 + 文艺复兴肖像画**，温润金色光源、平滑细腻、人物俊美、场景明亮庄严。两张参考图绑定使用最稳。
> 生图顺序建议：①定调图（6 人议会厅 · 按图2 重写）→ ②六哲人半身立绘（6×6=36 张表情 · 按图1 重写）→ ③事件/场景图 → ④结局图。

---

## 0. 怎么用（30 秒看懂）

1. **先生成「定调图」**（第 2 节）——直接按图 2 的风格重写，6 人议会厅。
2. **再生成六哲人立绘**（第 3 节）——直接按图 1 的肖像风格重写，每人 6 表情。
3. **最佳做法**：把图 1 和图 2 上传到豆包 / 即梦 / Midjourney 当 **「风格参考图」**，权重 40%–60%，再贴下面的 prompt；这样最稳。
4. 20 张事件/场景图、结局图，全部复用同一个【风格锚】。

---

## 1. 风格锚（固定前缀 · 所有图都用它）

> 同时给场景/定调图/事件图/结局图/哲人立绘用。定位：**19 世纪法国学院派写实油画 + 文艺复兴肖像画**，像图 1 和图 2 那样——温润、明亮、庄严、俊美，不老态、不油腻、不暗黑。

### 英文（推荐，质量最高）
```
Classical academic oil painting, 19th-century French academic realism blended with Renaissance portraiture, smooth refined rendering with subtle visible brushwork, warm natural chiaroscuro, soft single golden light source from upper left, deep but not pitch-black shadows, muted warm palette of ivory, cream, ochre, terracotta, ultramarine blue, sage green, crimson, amber and gold-leaf accents, idealized yet realistic human figures, dignified intellectual and solemn sacred mood, hyper-detailed fabric and skin, luminous warm complexion --no modern objects, no neon, no flat vector, no 3d render, no anime, no cel-shade, no dark moody atmosphere, no ugly, no deformed hands, no watermark, no text
```

### 中文（豆包 / 即梦中文模式用）
```
古典学院派油画，19 世纪法国学院派写实主义融合文艺复兴肖像画，平滑细腻的写实渲染带隐约笔触，温润自然的明暗对照，左上方单一柔和金色光源，深暗但不漆黑的阴影，低饱和暖调：象牙白、奶油色、赭石、赤陶、群青蓝、鼠尾草绿、深红、琥珀与金箔点缀；人物理想化但不失真实感，庄重智性而带有神圣庄严的氛围；衣料与皮肤超精细，肤色莹润温暖 --不要现代物品，不要霓虹，不要扁平矢量，不要3D渲染，不要动画，不要赛璐璐，不要暗黑阴郁氛围，不要丑陋变形，不要畸形手部，不要水印，不要文字
```

---

## 2. 定调图（6 人议会厅 · 按图 2 重写）

完整 prompt = **【风格锚】** + 下面这段。

### 画面分析（对应图 2 的特征）
- **空间**：宏伟的圆形大理石议会厅，古典柱廊与半圆拱门环绕，穹顶中央有天光开口；地面是几何拼花大理石。
- **光线**：穹顶天光如温暖的金色体积光倾泻而下，照亮中央圆桌与王座；阴影柔和、不漆黑，整体明亮庄严。
- **构图**：宽幅电影构图，一点透视向中央王座收束；六哲人各据圆桌一侧，姿态各异；王座空着，象征玩家位置。
- **色彩**：暖色大理石为底，六人衣袍按游戏配色：钢蓝 / 深红 / 鼠尾草绿 / 暗靛 / 琥珀金 / 赭石褐。
- **细节**：圆桌中央有火盆，桌上摊开诏书；拱廊深处有隐约民众剪影；远处墙上可见壁画。
- **尺寸**：**21:9 或 16:9**（当背景用，桌面铺满、移动端取中间裁切）。

### 英文（直接复制）
```
[STYLE ANCHOR]
A vast circular marble council chamber of the Philosopher King, towering classical Corinthian columns and rounded arches receding in perfect one-point perspective toward a grand domed skylight at the center; warm golden volumetric light streams down from the oculus, softly illuminating a circular carved marble table and an empty throne at the vanishing point. Six idealized philosopher advisors stand around the table in distinct robes — from left to right: Plato in flowing steel-blue chiton with gold trim, right hand raised pointing skyward, calm visionary gaze; Machiavelli in dark crimson Renaissance doublet with black trim, holding a closed book, a small dagger at his belt, sharp composed expression; Laozi in pale sage-green Taoist robe with a small taiji emblem on the sleeve, holding a Daoist scroll, serene detached posture; Hobbes in somber dark-indigo coat with white collar, hand resting on a sword hilt, stern unblinking gaze; Rousseau in warm amber-gold robe, raising a lit torch with fiery passionate eyes; Confucius in earthy sienna russet robe, long white beard, holding a wooden tablet inscribed with the character 礼, gentle composed expression. At the center of the table, a lit bronze brazier and an unfurled decree scroll; beyond the colonnade, faint silhouettes of citizens gathered in shadow. Symmetrical cinematic framing, low heroic angle, soft god-rays from the dome, warm ivory and gold ambience, cool blue shadows only at the edges. Hyper-detailed marble veining, embroidered robe patterns, flickering firelight, aged parchment fibers, geometric mosaic floor, distant fresco murals.
```

### 中文（豆包 / 即梦中文）
```
[风格锚]
一座宏伟的圆形大理石哲人王议会厅，高大的古典科林斯柱与半圆拱廊以完美的一点透视向中央穹顶天窗收束；温暖的金色体积光自穹顶开口倾泻而下，柔和照亮中央的圆形大理石雕花桌与灭点处的空王座。六位理想化的哲学家顾问各据圆桌一侧，从左至右：柏拉图身着飘逸钢蓝长袍配金边，右手高举指天，目光平静而有远见；马基雅维利身穿深红文艺复兴短上衣配黑边，怀抱合起的书、腰间一柄短匕首，神情锐利而镇定；老子身穿素净鼠尾草绿道袍，袖口绣小太极，手持道经卷轴，姿态超然宁静；霍布斯身穿肃暗靛蓝长外套配白领，手按剑柄，目光冷峻不眨；卢梭身穿暖金琥珀色长袍，高举一支燃火炬，目光炽热；孔子身着赭石褐袍、白须飘逸，手捧写有「礼」字的木笏，神情温和从容。圆桌中央立着青铜火盆，桌上摊开一道诏书；拱廊阴影深处有隐约的民众剪影。对称的电影构图，略低的英雄视角，穹顶洒下柔和神光，象牙白与暖金主调，边缘仅有淡蓝阴影。超精细：大理石纹理、刺绣衣纹、跃动火光、陈旧羊皮纸纤维、几何马赛克地面、远处壁画。
```

---

## 3. 哲学家立绘（6 人 · 6×6=36 张表情 · 按图 1 重写）

每张 = **【风格锚】** + 下面对应段落（人物主体）+ **【表情修饰】**（第 3.7 节选一个）。
半身、四分之三侧面、主体略偏右、目光向上或向远方，**竖版 3:4**。
人物标准：像图 1 那样——**写实但不老态，俊美但不娘气，庄严但不暗黑**，肤色温润，衣料厚重，手势有记忆点。
配色按游戏 data.js 对齐：柏拉图 钢蓝 / 马基雅维利 深红 / 老子 鼠尾草绿 / 霍布斯 暗靛 / 卢梭 琥珀金 / 孔子 赭石褐。

### 3.1 柏拉图（Plato）· 钢蓝 · 指天
```
[STYLE ANCHOR]
Half-body realistic oil portrait of Plato as a handsome idealized Greek philosopher, late 30s to early 40s, wavy dark brown hair, neatly trimmed beard, refined symmetrical features, warm intelligent eyes gazing upward to the right, flawless warm complexion, wearing flowing steel-blue chiton with delicate gold trim along the collar and sleeves, right hand raised with index finger pointing upward toward an unseen ideal, left hand resting on a large open book on a wooden lectern, three-quarter view from the left, soft golden side-lighting from upper left, deep warm brown background fading to shadow, serene visionary expression, dignified and sacred mood, hyper-detailed fabric folds and skin texture.
```

### 3.2 马基雅维利（Machiavelli）· 深红 · 书与匕首
```
[STYLE ANCHOR]
Half-body realistic oil portrait of Niccolò Machiavelli as a handsome idealized Italian Renaissance statesman, refined sharp features, dark wavy hair and trimmed beard, warm penetrating eyes with a calculating glint, flawless warm complexion, wearing a dark crimson velvet doublet with black trim and a high white collar, holding a small bound book close to his chest with one hand, a slender dagger discreetly at his belt, three-quarter view, soft golden side-lighting from upper left, deep warm brown background with faint suggestion of a fox-and-lion emblem, thin ironic half-smile, dignified and cunning mood, hyper-detailed velvet fabric and hands.
```

### 3.3 老子（Laozi）· 鼠尾草绿 · 道卷
```
[STYLE ANCHOR]
Half-body realistic oil portrait of Laozi as a handsome idealized venerable Chinese sage, long flowing silver-white beard and hair tied simply, serene otherworldly beauty, refined gentle features, soft wise eyes gazing downward, flawless porcelain-like warm complexion, wearing a pale sage-green flowing Taoist robe with simple hem and a small taiji emblem on the sleeve, holding a scroll of the Dao De Jing in both hands, three-quarter view from the right, soft golden side-lighting from upper left, deep warm brown background fading into misty ink-wash mountains, calm detached expression, dignified and transcendent mood, hyper-detailed silk folds and beard strands.
```

### 3.4 霍布斯（Hobbes）· 暗靛 · 利维坦
```
[STYLE ANCHOR]
Half-body realistic oil portrait of Thomas Hobbes as a handsome idealized stern English philosopher, refined sharp features, dark hair combed back, trimmed beard, intense clear eyes, flawless warm complexion, wearing a somber dark-indigo coat with white collar and gold buttons, holding a large book titled Leviathan in his left hand, right hand resting on the hilt of a sword, rigid composed posture, three-quarter view, soft golden side-lighting from upper left, deep cool brown background with faint sovereign-sword motif, serious unyielding expression, dignified and authoritative mood, hyper-detailed wool fabric and leather.
```

### 3.5 卢梭（Rousseau）· 琥珀金 · 火炬
```
[STYLE ANCHOR]
Half-body realistic oil portrait of Jean-Jacques Rousseau as a handsome idealized passionate French philosopher, refined expressive features, wavy auburn hair slightly unkempt in an elegant way, warm fervent eyes looking upward, flawless warm complexion, wearing a warm amber-gold frock coat over simple white linen, one hand raising a lit torch upward, the other hand at his side, three-quarter view, soft golden side-lighting from upper left amplified by the torch glow, deep warm brown background with faint rising sun, fiery yet composed expression, dignified and inspiring mood, hyper-detailed coat fabric and flame light on skin.
```

### 3.6 孔子（Confucius）· 赭石褐 · 礼
```
[STYLE ANCHOR]
Half-body realistic oil portrait of Confucius as a handsome idealized venerable Chinese sage, long dense silver-white beard, hair tied under a simple cap, warm benevolent eyes, refined dignified features, flawless porcelain-like warm complexion, wearing an earthy sienna russet robe with restrained embroidery and a wide sleeve, holding a wooden tablet inscribed with the character 礼 (ritual propriety) in both hands, three-quarter view from the left, soft golden side-lighting from upper left, deep warm brown background with faint classical columns, gentle composed expression, dignified and compassionate mood, hyper-detailed robe folds and wooden tablet texture.
```

### 3.7 表情修饰（每人 6 张：calm / happy / serious / angry / mock / worry）
> 在每个哲学家主体段后面，追加下面**对应一个**的英文/中文短句。一套人物靠「主体不变 + 只换表情词」保持同一张脸。

| 情绪 | 英文（追加） | 中文（追加） |
|---|---|---|
| calm 平静 | `, calm and composed expression` | ，神情平静从容 |
| happy 欣喜 | `, faint warm smile, eyes crinkled with gentle approval` | ，嘴角微扬、眼含温和赞许 |
| serious 凝重 | `, grave solemn expression, brows slightly drawn` | ，神色凝重、眉头微蹙 |
| angry 愠怒 | `, stern furrowed brow, jaw tightened, controlled displeasure` | ，眉头紧锁、下颌绷紧、克制不悦 |
| mock 揶揄 | `, wry mocking half-smile, one eyebrow raised` | ，讽意浅笑、挑眉 |
| worry 忧切 | `, anxious concerned look, slight frown` | ，面露忧色、微蹙 |

> 中文工具（豆包/即梦）直接用「中文（追加）」那列即可。

---

## 4. 事件 / 场景图 与 结局图（复用风格锚）

### 事件图（20 张，挑需要的生成）
每张 = **【风格锚】** + 画面主体（事件名 + 关键物 + 氛围）。宽幅 **16:9**。
示例（饥荒事件）：
```
[STYLE ANCHOR]
A marble council antechamber during famine, empty grain baskets overturned on the floor, a thin queue of worried citizens seen through an arched window, soft golden dusk light through the colonnade, tense solemn mood, warm ivory and ochre palette, rich oil glazes, hyper-detailed stone and woven basket texture.
```

### 结局图（挑需要的生成，宽幅 16:9）
- **哲人王（理想结局）**：圆形议会厅归于平和，六哲人就座围桌、王座有冷静明君剪影，穹顶洒下温暖金光，和谐睿智。
- **乌托邦 · 狂欢之城**：阳光广场，各年龄民众在飘旗下载歌载舞，大理石喷泉与花树，明亮温暖但不失油画质感。
- **暴君（反面）**：燃烧的王座厅，空王座碎裂，烟烬充斥拱廊，惊惶民众遁入阴影，火光对深棕背景，不滑向恐怖片。

---

## 5. 保持六人同一张脸 + 统一气质的技巧

1. **先跑「定调图」作为风格基准**：把图 2 当主参考，跑一张 v8 的 6 人议会厅。
2. **再跑 6 张 calm 基准**：柏拉图/马基雅维利/老子/霍布斯/卢梭/孔子各一张平静表情，把图 1 当肖像参考。
3. **用「风格参考图」功能**：
   - 豆包 / 即梦：上传图 1 作为「风格参考」，权重 50% 左右；再上传图 2 作为「构图/场景参考」跑定调图。
   - Midjourney：`--sref <图1链接> <图2链接> --sw 80` 可以吸到整体气质。
4. **保持一致的关键**：同一个【风格锚】不要改；人物只改「姓名 + 衣服颜色 + 手持物 + 表情词」。
5. **跑丑了怎么修**：如果某张脸显老/显油/不够俊美，在主体段加 `more youthful, more refined features, warmer complexion`；不要加 `anime` 或 `game character`。

---

## 6. 响应式 · 桌面优先（生图尺寸 / 用法提示）

游戏是单网页（single.html），自适应即可，不用分两个版本。

- **桌面端**：议会厅背景铺满，六张哲人半身立绘**常驻**环绕王座/底部顾问席，谁说话谁亮（金边增强 + 轻微放大）。
- **移动端**：空间小，只让**当前说话的那张**立绘从一侧滑入（竖版 3:4 刚好），其余收起；选项按钮占满宽度、字号加大、点按区 ≥ 44px。
- **生图尺寸约定**：定调图/场景图/结局图 = **16:9（或 21:9）**；哲人立绘 = **3:4 竖版**。统一比例，前端裁切不畸变。

---

## 7. 给馍馍的两句提醒
- **图 1 是人物标准，图 2 是场景标准**。跑任何图都把这两张绑在一起当风格参考，人物才不掉队。
- v8 不再追求暗黑巴洛克，而是**明亮温润的学院派写实油画**；如果跑出来还是暗/丑/老，检查一下有没有把 v7 的 `Baroque` / `deep shadows` / `dramatic` 残留词带进来。
- 先跑 6 张 calm 基准，对味了再批量补 5 种表情。
- 先不推 GitHub（你定的）。图都跑完、确认对味，再告诉我接进 `portraits-data.js` / `scenes-data.js`。
