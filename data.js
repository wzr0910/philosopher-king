window.GAME_DATA = {
  "config": {
    "maxRounds": 12,
    "initialStats": {
      "民心": 50,
      "财富": 50,
      "稳定": 50,
      "自由": 50
    }
  },
  "philosophers": [
    {
      "id": "plato",
      "name": "柏拉图",
      "symbol": "洞穴",
      "color": "#4a6fa5",
      "personality": "理想主义，热切，略显天真",
      "tagline": "理想国、哲人统治、正义",
      "quote": "除非哲人成为王，或王成为哲人，否则城邦永无宁日。",
      "expressions": [
        "calm",
        "happy",
        "serious",
        "angry",
        "mock",
        "worry"
      ],
      "portrait": {
        "calm": "assets/philosophers/plato_calm.png",
        "happy": "assets/philosophers/plato_happy.png",
        "serious": "assets/philosophers/plato_serious.png",
        "angry": "assets/philosophers/plato_angry.png",
        "mock": "assets/philosophers/plato_mock.png",
        "worry": "assets/philosophers/plato_worry.png"
      }
    },
    {
      "id": "machiavelli",
      "name": "马基雅维利",
      "symbol": "匕首",
      "color": "#8b1a1a",
      "personality": "务实、腹黑、冷笑",
      "tagline": "君主论、权力、结果导向",
      "quote": "被人爱戴不如被人畏惧，二者兼得固然好，不能兼得时，畏惧更可靠。",
      "expressions": [
        "calm",
        "happy",
        "serious",
        "angry",
        "mock",
        "worry"
      ],
      "portrait": {
        "calm": "assets/philosophers/machiavelli_calm.png",
        "happy": "assets/philosophers/machiavelli_happy.png",
        "serious": "assets/philosophers/machiavelli_serious.png",
        "angry": "assets/philosophers/machiavelli_angry.png",
        "mock": "assets/philosophers/machiavelli_mock.png",
        "worry": "assets/philosophers/machiavelli_worry.png"
      }
    },
    {
      "id": "laozi",
      "name": "老子",
      "symbol": "太极",
      "color": "#2f4f2f",
      "personality": "玄妙、淡定、神色内敛",
      "tagline": "无为而治、顺其自然",
      "quote": "治大国，若烹小鲜。",
      "expressions": [
        "calm",
        "happy",
        "serious",
        "angry",
        "mock",
        "worry"
      ],
      "portrait": {
        "calm": "assets/philosophers/laozi_calm.png",
        "happy": "assets/philosophers/laozi_happy.png",
        "serious": "assets/philosophers/laozi_serious.png",
        "angry": "assets/philosophers/laozi_angry.png",
        "mock": "assets/philosophers/laozi_mock.png",
        "worry": "assets/philosophers/laozi_worry.png"
      }
    },
    {
      "id": "hobbes",
      "name": "霍布斯",
      "symbol": "利维坦",
      "color": "#2f2f4f",
      "personality": "阴沉、强硬、重视秩序",
      "tagline": "利维坦、绝对秩序、安全",
      "quote": "在没有共同权力的地方，便是每个人对每个人的战争。",
      "expressions": [
        "calm",
        "happy",
        "serious",
        "angry",
        "mock",
        "worry"
      ],
      "portrait": {
        "calm": "assets/philosophers/hobbes_calm.png",
        "happy": "assets/philosophers/hobbes_happy.png",
        "serious": "assets/philosophers/hobbes_serious.png",
        "angry": "assets/philosophers/hobbes_angry.png",
        "mock": "assets/philosophers/hobbes_mock.png",
        "worry": "assets/philosophers/hobbes_worry.png"
      }
    },
    {
      "id": "rousseau",
      "name": "卢梭",
      "symbol": "火炬",
      "color": "#b8860b",
      "personality": "浪漫、激情、信任人民",
      "tagline": "社会契约、公意、自由",
      "quote": "人生而自由，却无往不在枷锁之中。",
      "expressions": [
        "calm",
        "happy",
        "serious",
        "angry",
        "mock",
        "worry"
      ],
      "portrait": {
        "calm": "assets/philosophers/rousseau_calm.png",
        "happy": "assets/philosophers/rousseau_happy.png",
        "serious": "assets/philosophers/rousseau_serious.png",
        "angry": "assets/philosophers/rousseau_angry.png",
        "mock": "assets/philosophers/rousseau_mock.png",
        "worry": "assets/philosophers/rousseau_worry.png"
      }
    },
    {
      "id": "confucius",
      "name": "孔子",
      "symbol": "礼",
      "color": "#a0522d",
      "personality": "温和、重礼、循循善诱",
      "tagline": "仁政、礼治、德治",
      "quote": "道之以德，齐之以礼，有耻且格。",
      "expressions": [
        "calm",
        "happy",
        "serious",
        "angry",
        "mock",
        "worry"
      ],
      "portrait": {
        "calm": "assets/philosophers/confucius_calm.png",
        "happy": "assets/philosophers/confucius_happy.png",
        "serious": "assets/philosophers/confucius_serious.png",
        "angry": "assets/philosophers/confucius_angry.png",
        "mock": "assets/philosophers/confucius_mock.png",
        "worry": "assets/philosophers/confucius_worry.png"
      }
    }
  ],
  "events": [
    {
      "id": "food_crisis",
      "title": "粮食危机",
      "type": "tutorial",
      "order": 1,
      "requires": null,
      "description": [
        "城邦连续数月干旱，粮仓见底，街头已经有人开始抱怨。",
        "面包的价格翻了三倍，神庙前的祭司说，再这样下去，神也救不了我们。",
        "你坐在王座上，感到一阵胃疼——不知道是因为担心子民，还是因为今天的晚宴可能没有面包了。",
        "你走进哲人议会厅，几位哲人的思想投影已经等候多时。"
      ],
      "advice": [
        {
          "philosopher": "plato",
          "expression": "happy",
          "text": "陛下！这正是考验我们是否接近理想国的时刻。粮食不应是商品，而应被公平分配。打开所有粮仓，按需发放。让每个人都能得到他应得的一份！",
          "option": "开仓放粮，公平分配",
          "effects": {
            "民心": 2,
            "财富": -1,
            "稳定": 1,
            "自由": 1
          }
        },
        {
          "philosopher": "machiavelli",
          "expression": "mock",
          "text": "正义不能填饱肚子，也不能让暴民不冲进王宫。陛下，发一部分，再让士兵上街巡逻。顺便处决几个哄抬粮价的商人，既平民愤，又立君威。",
          "option": "限量发粮，镇压奸商",
          "effects": {
            "民心": 2,
            "财富": -1,
            "稳定": 3,
            "自由": -2
          }
        },
        {
          "philosopher": "laozi",
          "expression": "calm",
          "text": "万物自有其道。粮价高，是因为粮少；粮少，是因为干旱。强行干预，不过是扬汤止沸。不如静观其变，让商人从邻国买粮，让百姓学会节俭。",
          "option": "不强行干预，静待市场调节",
          "effects": {
            "财富": 1,
            "自由": 2,
            "稳定": -1,
            "民心": -1
          }
        },
        {
          "philosopher": "hobbes",
          "expression": "serious",
          "text": "陛下，请想一想：如果没有强大的统治，饥饿的人会变成暴徒。立即征用全国余粮，由军队统一分配。谁敢私藏，以叛国论处。唯有绝对秩序，才能避免一切人反对一切人的战争。",
          "option": "军队征粮，严酷管控",
          "effects": {
            "稳定": 3,
            "财富": -2,
            "民心": -2,
            "自由": -3
          }
        }
      ],
      "results": {
        "0": {
          "text": [
            "你下令打开所有粮仓。百姓排起蜿蜒的长队，有人捧着粮袋落泪，也有人趁乱多抓了两把。",
            "当夜，城中少了些哭声，多了些米香。"
          ],
          "council": [
            {
              "philosopher": "plato",
              "expression": "happy",
              "line": "欣慰地点头：“看啊，城邦因公正而安稳。这不正是理想国的雏形吗？"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "冷笑：“仁慈是好，陛下。只是那多抓两把的人，您打算何时同他们算账？"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "垂眸：“人心能吃饱，世道就还不太坏。"
            },
            {
              "philosopher": "hobbes",
              "expression": "calm",
              "line": "低声说：“理想很美，但愿它撑得到明天。"
            }
          ]
        },
        "1": {
          "text": [
            "你在全城张贴告示：国家发放部分粮食，同时士兵开始巡逻。",
            "三名最贪婪的粮商被当众逮捕，广场上响起一片欢呼。",
            "人民暂时平静了，但城里的商人开始悄悄把粮食藏得更深。"
          ],
          "council": [
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "摇头叹息：“你这样只是在利用恐惧，不是正义。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "耸肩：“而你的正义，会让王宫变成粮仓。"
            },
            {
              "philosopher": "laozi",
              "expression": "happy",
              "line": "在一旁微笑：“你们都在说话，只有粮食不说话。"
            },
            {
              "philosopher": "hobbes",
              "expression": "calm",
              "line": "低声说：“至少秩序暂时维持了。"
            }
          ]
        },
        "2": {
          "text": [
            "你按兵不动，任市集自生自灭。",
            "邻国的粮船终于靠岸，粮价缓缓回落。",
            "只是那些饿过肚子的人，看你的眼神里，记下了一笔。"
          ],
          "council": [
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "微微颔首：“您瞧，粮船自己来了。少折腾，天道自会还您一个安稳。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "挑眉：“什么都没做，倒落了个‘无为’的美名。划算。"
            },
            {
              "philosopher": "hobbes",
              "expression": "mock",
              "line": "冷冷地说：“饿过的人只记得您什么都没做，不记得粮船。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "轻轻一叹：“顺其自然，自然也会有代价。"
            }
          ]
        },
        "3": {
          "text": [
            "军队挨家挨户登记余粮，连粮缸底都要刮净。",
            "秩序是稳住了，可人人自危，连孩子都不敢在门口大声笑。"
          ],
          "council": [
            {
              "philosopher": "hobbes",
              "expression": "serious",
              "line": "面色铁青：“在饥饿变成暴徒之前，我已把它按回笼里。冷，但稳。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "长叹一声：“用恐惧喂饱的城邦，迟早要反噬。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "闭着眼：“强扭的瓜不甜，硬按的火不灭。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "耸肩：“别急着当圣人。先把城守住，再去想别的。"
            }
          ]
        }
      }
    },
    {
      "id": "border_clash",
      "title": "邻国进犯",
      "type": "tutorial",
      "order": 2,
      "requires": null,
      "description": [
        "边境的烽火连烧了三夜，邻国的骑兵踏破了界河上的石桥。",
        "将军在城外擂鼓请战，元老院却为“战还是和”吵得掀翻了案几。",
        "你望着沙盘上那道被朱笔圈红的边界，忽然觉得那不是国界，是你今夜难以入眠的缘由。",
        "你走进哲人议会厅，几位哲人的思想投影已经争论起来。"
      ],
      "advice": [
        {
          "philosopher": "hobbes",
          "expression": "serious",
          "text": "陛下，请想一想：若任由邻骑踏破国门，明日他们的铁蹄便会碾过每一座村庄。立即集结全军，正面迎头痛击。唯有以血还血，才能让豺狼记住何为敬畏。",
          "option": "集结大军，正面迎战",
          "effects": {
            "稳定": 3,
            "财富": -2,
            "民心": 1,
            "自由": -1
          }
        },
        {
          "philosopher": "machiavelli",
          "expression": "mock",
          "text": "战争这笔账，得先算清。几万士兵的命，抵不过几袋金币。花重金收买敌方主将，让他临阵倒戈。边境不战自解，还省下满城寡妇的眼泪。",
          "option": "重金收买敌将",
          "effects": {
            "财富": -2,
            "稳定": 2,
            "民心": 1,
            "自由": 0
          }
        },
        {
          "philosopher": "plato",
          "expression": "happy",
          "text": "若人民真把这城邦当作自己的家，自会为它拿起武器。唤起民众保卫家园吧！别去依赖那群只为军饷卖命的雇佣军，他们随时会把后背卖给敌人。",
          "option": "号召全民卫国",
          "effects": {
            "民心": 3,
            "自由": 2,
            "稳定": -1,
            "财富": -1
          }
        },
        {
          "philosopher": "laozi",
          "expression": "calm",
          "text": "兵者，不祥之器。与其以硬碰硬，不如深沟高垒，以守为攻。邻国远来，粮草难继，不消多日自会退去。不争，而天下莫能与之争。",
          "option": "坚守城池，以守为攻",
          "effects": {
            "稳定": 1,
            "财富": 1,
            "民心": -1,
            "自由": 0
          }
        }
      ],
      "results": {
        "0": {
          "text": [
            "大军出征，旗开得胜，敌骑溃退三十里。",
            "可凯旋的号角里，国库也为之一空。你望着账单，第一次懂了“胜仗的价钱”。"
          ],
          "council": [
            {
              "philosopher": "hobbes",
              "expression": "serious",
              "line": "铁青的面孔终于松动：“邻国记住了代价。和平，是用剑锋写下的。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "挑眉：“大胜。可惜国库也跟着打了大胜仗——空了。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "轻叹：“战争赢了，但理想国的路又远了一些。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "在一旁闭目：“胜而不美，美之者，是乐杀人。"
            }
          ]
        },
        "1": {
          "text": [
            "你暗中送出的金币，买动了敌将的副将。",
            "边境不战而解。百姓不知内情，只当君王又英明了一回。只有你知道，这安宁是用钱袋垫着的。"
          ],
          "council": [
            {
              "philosopher": "machiavelli",
              "expression": "happy",
              "line": "得意地摊手：“几袋金币买下边境安宁，比几万士兵便宜多了。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "皱眉：“不战而屈人之兵，本是上策。只是这‘屈’字里，藏着几分诡诈。"
            },
            {
              "philosopher": "hobbes",
              "expression": "mock",
              "line": "冷冷说：“花钱买来的和平，比纸还薄。"
            },
            {
              "philosopher": "laozi",
              "expression": "happy",
              "line": "微笑：“能用钱解决的，暂时还不是最坏的事。"
            }
          ]
        },
        "2": {
          "text": [
            "征兵的鼓声一响，青壮年扛着锄头也上了城头。",
            "你第一次感到这城邦真的属于他们。可元老们却私下嘀咕：刀把子怕是要握不稳了。"
          ],
          "council": [
            {
              "philosopher": "plato",
              "expression": "happy",
              "line": "热切地握拳：“您看！当人民相信自己保卫的是自己的城邦，何须雇佣军？"
            },
            {
              "philosopher": "hobbes",
              "expression": "serious",
              "line": "低声警告：“欢呼的民众，也是潜在的暴民。刀把子要攥在您手里。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "冷笑：“民心是有了，可军饷呢？靠锄头打胜仗，想得美。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "垂眸：“民不畏死，奈何以死惧之。您给了他们一个值得为之生死的理由。"
            }
          ]
        },
        "3": {
          "text": [
            "你下令紧闭城门，任凭敌骑在城外叫骂。",
            "半月之后，敌军粮尽，悻悻而退。城是守住了，可百姓觉得你连出城的勇气都没有。"
          ],
          "council": [
            {
              "philosopher": "laozi",
              "expression": "happy",
              "line": "微微点头：“不争而善胜。敌自退去，这便是天道。"
            },
            {
              "philosopher": "hobbes",
              "expression": "mock",
              "line": "冷笑一声：“闭门不出，虽未流血。可邻国下次再来，还会怕您吗？"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "耸肩：“倒是省了军费。只是百姓会觉得，王者连出城的胆子都没有。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "摇头：“坚守不是懦弱，可若失去了勇气，城邦便只剩躯壳。"
            }
          ]
        }
      }
    },
    {
      "id": "tax_reform",
      "title": "税收改革",
      "type": "tutorial",
      "order": 3,
      "requires": null,
      "description": [
        "国库吃紧，连宫墙的裂缝都没钱补了，道路更是坑洼连着坑洼。",
        "财政大臣捧着一摞改革方案，跪在案前等你朱批。",
        "商人盼着少交税，穷人盼着少挨饿，每个人都把眼睛黏在你的笔尖上。",
        "你转着那支笔，想：这笔落下，到底是画了一道线，还是割了一刀？"
      ],
      "advice": [
        {
          "philosopher": "plato",
          "expression": "serious",
          "text": "税收本该为公益而设，不是为王库填金。按能力公平课征，富者多担，贫者少负。如此，方近正义之实。",
          "option": "累进税，劫富济贫",
          "effects": {
            "民心": 2,
            "财富": 1,
            "稳定": 1,
            "自由": 1
          }
        },
        {
          "philosopher": "laozi",
          "expression": "calm",
          "text": "政苛则民散，法密则心违。不如轻徭薄赋，与民休息。府库虽一时空虚，却会随民生丰足而自然充盈。",
          "option": "减免赋税，与民休息",
          "effects": {
            "民心": 2,
            "财富": -1,
            "稳定": 0,
            "自由": 2
          }
        },
        {
          "philosopher": "machiavelli",
          "expression": "mock",
          "text": "陛下，钱袋比人心可靠。广开税源，严查逃税，把每一枚铜板都收进王库。百姓骂两句，总好过国库见底。",
          "option": "严查逃税，广开税源",
          "effects": {
            "财富": 3,
            "民心": -1,
            "稳定": 1,
            "自由": -2
          }
        },
        {
          "philosopher": "hobbes",
          "expression": "serious",
          "text": "税收，即秩序的价格。统一税率，强制征缴，抗拒者以法严惩。治理这种事，容不得讨价还价。",
          "option": "统一税率，强制征缴",
          "effects": {
            "财富": 2,
            "稳定": 2,
            "民心": -2,
            "自由": -2
          }
        },
        {
          "philosopher": "confucius",
          "expression": "calm",
          "text": "百姓足，君孰与不足？薄赋敛，用之于民——兴教化、养老恤孤。税不是敛财，是养民。民富则君安。",
          "option": "薄赋敛，用之于民",
          "effects": {
            "民心": 3,
            "稳定": 1,
            "财富": -1,
            "自由": 0
          },
          "hidden": true,
          "condition": { "stats": { "稳定": { "min": 60 } } }
        }
      ],
      "results": {
        "0": {
          "text": [
            "富商嘟囔着掏钱，穷人松了长长一口气。",
            "街市上久违的笑声多了起来。只是商队悄悄把货往邻国挪了挪。"
          ],
          "council": [
            {
              "philosopher": "plato",
              "expression": "happy",
              "line": "欣慰地点头：“富者多担，贫者少负。这正是‘各得其所’的正义。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "在旁冷笑：“穷人的笑声很好听。可富人的钱袋，正悄悄挪去邻国。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "垂眸：“均富虽好，若过了度，便成了新的不均。"
            },
            {
              "philosopher": "hobbes",
              "expression": "calm",
              "line": "低声说：“富人会跑，穷人会要。这平衡，您还得拿刀按着。"
            }
          ]
        },
        "1": {
          "text": [
            "赋税一减，商旅如云般涌来。",
            "可道路依旧坑洼，财政大臣的眉头比税改前拧得更紧了。"
          ],
          "council": [
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "垂眸：“与民休息，府库自会随民生充盈。路，急不得。"
            },
            {
              "philosopher": "hobbes",
              "expression": "mock",
              "line": "哼了一声：“税减了，路也塌了。软弱的管理，连石头都看不起您。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "耸耸肩：“百姓念您的好，可士兵的军饷从哪来？"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "叹道：“先养民，是对的。可若连公共事务都荒废了，善政也难持久。"
            }
          ]
        },
        "2": {
          "text": [
            "税吏如蛛网般撒向四方，国库渐丰。",
            "只是市井之间，多了几分噤若寒蝉的安静。"
          ],
          "council": [
            {
              "philosopher": "machiavelli",
              "expression": "happy",
              "line": "露出满意的笑：“每一枚铜板都进了王库。这就是‘治理’二字的真意。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "长叹：“国库满了，市井却静得可怕。您收上来的，怕不只是税。"
            },
            {
              "philosopher": "hobbes",
              "expression": "happy",
              "line": "点头：“逃税者罚，没罚错。只有贼才怕警察。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "轻声说：“政令太密，民心就散了。"
            }
          ]
        },
        "3": {
          "text": [
            "税率划一，征缴雷厉风行。",
            "钱是收上来了，可百姓看你的眼神，悄悄冷了几分。"
          ],
          "council": [
            {
              "philosopher": "hobbes",
              "expression": "happy",
              "line": "点头：“划一、强制，抗拒者罚。秩序，不需要商量。"
            },
            {
              "philosopher": "plato",
              "expression": "mock",
              "line": "冷冷说：“把人当数字征收，您治的是城邦，还是羊圈？"
            },
            {
              "philosopher": "machiavelli",
              "expression": "calm",
              "line": "笑：“羊圈有什么不好？至少羊不会造反。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "闭目：“法令滋彰，盗贼多有。"
            }
          ]
        },
        "4": {
          "text": [
            "税降了三成，收上来的钱，全花在了学堂、医馆和孤老院上。",
            "百姓路过医馆，看见里面躺着的是隔壁的王阿公；路过学堂，听见里面读的是自己家的孩子。他们觉得，这税交得值。"
          ],
          "council": [
            {
              "philosopher": "confucius",
              "expression": "calm",
              "line": "点头：“百姓足，君孰与不足？税不是敛财，是养民。民富则君安。"
            },
            {
              "philosopher": "plato",
              "expression": "happy",
              "line": "微笑：“税收用于公益，才近正义之实。"
            },
            {
              "philosopher": "hobbes",
              "expression": "worry",
              "line": "皱眉：“国库空了。真要打仗，您拿什么发军饷？"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "笑：“少收点，多花点在看得见的地方。百姓觉得你是好王，这买卖不亏。"
            }
          ]
        }
      }
    },
    {
      "id": "merchant_price",
      "title": "商人哄抬物价",
      "type": "random",
      "order": 99,
      "requires": null,
      "description": [
        "仗刚打完，粮商们却比敌军还会趁火打劫，囤货抬价，市集怨声几乎掀翻了棚顶。",
        "你听见王宫外有人扯着嗓子喊：“陛下到底管不管商人的良心？”",
        "你捏着那封百姓递来的陈情，指节发白。这良心，怕是不在商人的账本上。"
      ],
      "advice": [
        {
          "philosopher": "machiavelli",
          "expression": "mock",
          "text": "定下最高限价，违者没收家产。让商人看清楚，君王的手能伸进任何一只钱袋。",
          "option": "限价令，重罚奸商",
          "effects": {
            "民心": 2,
            "财富": -1,
            "稳定": 2,
            "自由": -2
          }
        },
        {
          "philosopher": "laozi",
          "expression": "calm",
          "text": "高价自会引来外埠商贩，供给一多，价自然就落了。顺其自然罢，莫要逆着水势去堵。",
          "option": "放开市场，静待回落",
          "effects": {
            "财富": 1,
            "自由": 2,
            "稳定": -1,
            "民心": -1
          }
        },
        {
          "philosopher": "plato",
          "expression": "serious",
          "text": "商人的贪婪，源于城邦对公益的遗忘。打开国家粮仓，以公价售粮。让市价回归正义，而不是用暴力压制。",
          "option": "开仓平售，以公价粮",
          "effects": {
            "民心": 2,
            "财富": -1,
            "稳定": 1,
            "自由": 0
          }
        },
        {
          "philosopher": "hobbes",
          "expression": "serious",
          "text": "囤积居奇，是叛乱的温床。派兵查封私仓，粮食统一调配。谁敢私藏，以法严办。",
          "option": "查封私仓，统一调配",
          "effects": {
            "稳定": 3,
            "财富": -1,
            "民心": -1,
            "自由": -3
          }
        }
      ],
      "results": {
        "0": {
          "text": [
            "限价令一下，物价应声而落，百姓拍手叫好。",
            "可货架也空了大半。商人把货藏进了地窖，等这阵风过去。"
          ],
          "council": [
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "得意地冷笑：“限价令一下，商人终于懂了谁才是真正的主人。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "摇头：“价是压下去了，货也藏起来了。您治的是表象，不是根本。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "叹道：“恐惧能压住价格，压不住人心。"
            },
            {
              "philosopher": "hobbes",
              "expression": "calm",
              "line": "低声说：“至少今天没有人饿死在街头。"
            }
          ]
        },
        "1": {
          "text": [
            "你按兵不动，任市集自生自灭。",
            "外埠粮船果然到来，价格慢慢松动。只是那些饿过肚子的人，记下了你的“不闻不问”。"
          ],
          "council": [
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "微微颔首：“外埠粮船自己来了。顺其自然，比一道令强。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "耸耸肩：“您什么都没做，倒落了个‘无为’美名。划算。"
            },
            {
              "philosopher": "hobbes",
              "expression": "mock",
              "line": "冷冷说：“饿过的人只记得您什么都没做，不记得粮船。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "轻叹：“市场有市场的道，可城邦不能只靠运气。"
            }
          ]
        },
        "2": {
          "text": [
            "国家粮仓打开，以公价售粮，市价应声而落。",
            "百姓买得起粮，商人也未亏本。只是国库的粮堆，矮了一半。"
          ],
          "council": [
            {
              "philosopher": "plato",
              "expression": "happy",
              "line": "欣慰地说：“以公益平市价，不伤民，亦不逼商。这才是正义。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "calm",
              "line": "在旁小声说：“公价售粮，国库空了一半。您这正义，有点贵。"
            },
            {
              "philosopher": "laozi",
              "expression": "happy",
              "line": "微笑：“国库空了，民心满了。祸福相倚。"
            },
            {
              "philosopher": "hobbes",
              "expression": "mock",
              "line": "哼道：“下次灾难来了，您拿什么开仓？"
            }
          ]
        },
        "3": {
          "text": [
            "军队查封私仓，粮食统一发放。",
            "秩序是稳了，可商人们怨声载道。有人在半夜把粮食烧了，也不肯交出来。"
          ],
          "council": [
            {
              "philosopher": "hobbes",
              "expression": "serious",
              "line": "面色铁青：“查封私仓，统一调配。囤积者再难作乱，秩序已定。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "长叹：“用恐惧逼出粮食，商人在夜里烧仓。这样的秩序，能撑多久？"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "挑眉：“烧了就烧了，他们烧的是自己的货。您正好立威。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "闭眼：“以力服人者，非心服也。"
            }
          ]
        }
      }
    },
    {
      "id": "religion_conflict",
      "title": "宗教冲突",
      "type": "random",
      "order": 99,
      "requires": null,
      "description": [
        "新城邦涌来一批异教祭司，旧神庙的信众聚在广场上抗议，火气一触即发。",
        "两派人马都拍着胸脯声称“真理只在己方”，等你一句话裁断。",
        "你揉着太阳穴想：真理若是唯一的，为何争它的人，嗓门都那么大？"
      ],
      "advice": [
        {
          "philosopher": "plato",
          "expression": "happy",
          "text": "信仰之事，当以理性引导。城邦的真理在于共同的善。只要异教不毁公益，便容它共存。让哲学之光照亮迷途。",
          "option": "以理性引导，容其共存",
          "effects": {
            "民心": 1,
            "自由": 2,
            "稳定": 1,
            "财富": 0
          }
        },
        {
          "philosopher": "hobbes",
          "expression": "serious",
          "text": "一邦不可有二主。定下国教，禁绝异端，以铁腕止息纷争。含糊与宽容，只会养出更大的乱子。",
          "option": "定国教，禁异端",
          "effects": {
            "稳定": 3,
            "自由": -3,
            "民心": -1,
            "财富": -1
          }
        },
        {
          "philosopher": "laozi",
          "expression": "calm",
          "text": "信仰本无高下，人心自扰。你越禁，它越旺；你越容，它越安。不如两不相干，各拜各神，相安无事。",
          "option": "不加干涉，任其自安",
          "effects": {
            "自由": 2,
            "稳定": 0,
            "民心": 0,
            "财富": 0
          }
        },
        {
          "philosopher": "machiavelli",
          "expression": "mock",
          "text": "冲突的根源不是神，是权力。让两派祭司当众辩论，胜者留下，败者闭嘴。您只当裁判，却收了人心。",
          "option": "组织辩论，以胜定论",
          "effects": {
            "民心": 1,
            "稳定": 2,
            "自由": 0,
            "财富": -1
          }
        },
        {
          "philosopher": "confucius",
          "expression": "calm",
          "text": "君子和而不同。不必强同其神，只需同其礼。共行一套礼，同拜天地祖先——礼同了，人心就和了。",
          "option": "和而不同，以礼化争",
          "effects": {
            "稳定": 2,
            "民心": 1,
            "自由": 1,
            "财富": 0
          },
          "hidden": true,
          "condition": { "stats": { "稳定": { "min": 60 } } }
        }
      ],
      "results": {
        "0": {
          "text": [
            "你召集双方，以哲学探讨代替街头对骂。",
            "虽未彻底化解分歧，但至少不再流血。年轻人开始追问：真理，是否只在一座庙里？"
          ],
          "council": [
            {
              "philosopher": "plato",
              "expression": "happy",
              "line": "眼睛发亮：“以理性引导，容其共存。哲学之光正在驱散盲从。"
            },
            {
              "philosopher": "hobbes",
              "expression": "calm",
              "line": "低声说：“理性？暴民只认刀剑。今天他们没打，明天呢？"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "冷笑：“辩论再精彩，不如一人给一袋粮。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "垂眸：“思想之争，越争越明，也越争越暗。"
            }
          ]
        },
        "1": {
          "text": [
            "异端被逐，神庙重归肃穆。",
            "秩序稳了，可空气里多了点连祈祷都化不开的压抑。"
          ],
          "council": [
            {
              "philosopher": "hobbes",
              "expression": "happy",
              "line": "满意地点头：“异端已清，神庙重归肃穆。秩序容不得旁门左道。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "轻轻说：“您禁得了人，禁不了心。那压抑，迟早会从地底冒出来。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "长叹：“用刀剑守护神，神也会脸红。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "耸肩：“至少今晚不会打起来。先睡个安稳觉。"
            }
          ]
        },
        "2": {
          "text": [
            "你什么也没做，广场上的火气倒慢慢散了。",
            "两派人各回各家，骂声渐息。只是谁也没服谁。"
          ],
          "council": [
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "垂眸：“越禁越旺，越容越安。您看，事自平了。"
            },
            {
              "philosopher": "hobbes",
              "expression": "calm",
              "line": "皱眉：“今日是自平，明日呢？您的不作为，会让所有人觉得您没有立场。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "calm",
              "line": "笑：“没有立场，也是一种立场。只要不引火烧身。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "摇头：“不干涉是智慧，但若无引导，愚昧会生根。"
            }
          ]
        },
        "3": {
          "text": [
            "你让两派祭司在广场公开辩论，胜者得庙，败者离城。",
            "百姓看得热闹，宗教争端变成了嘴皮子官司，刀兵不兴。"
          ],
          "council": [
            {
              "philosopher": "machiavelli",
              "expression": "happy",
              "line": "露出精明的笑：“胜者留下，败者闭嘴。您只当裁判，便收了人心。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "摇头：“真理不在嗓门里。您这是把信仰交给了口才。"
            },
            {
              "philosopher": "hobbes",
              "expression": "mock",
              "line": "哼道：“嘴皮子赢了，心里不服。迟早还要打。"
            },
            {
              "philosopher": "laozi",
              "expression": "happy",
              "line": "微笑：“辩者不善，善者不辩。热闹过后，还剩什么？"
            }
          ]
        },
        "4": {
          "text": [
            "你没有让他们争论谁的神更真，而是让两派共行同一套礼仪。",
            "同拜天地，同祭祖先。庙里的神不一样，可庙外的礼是一样的。渐渐的，连最固执的老祭司，也不再骂对方是异端了。"
          ],
          "council": [
            {
              "philosopher": "confucius",
              "expression": "calm",
              "line": "点头：“君子和而不同。礼同了，人心便和了。神不同，又何妨？"
            },
            {
              "philosopher": "plato",
              "expression": "happy",
              "line": "微笑：“超越具体的神，指向共同的善。这才是真正的智慧。"
            },
            {
              "philosopher": "hobbes",
              "expression": "calm",
              "line": "点头：“统一了礼仪，就统一了行为标准。稳。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "笑：“您不辩真假，只统行为。这一手，比定国教高明。"
            }
          ]
        }
      }
    },
    {
      "id": "free_speech",
      "title": "言论自由问题",
      "type": "random",
      "order": 99,
      "requires": {
        "自由": {
          "min": 40
        }
      },
      "description": [
        "市集里冒出一首讽刺你的歌谣，调子轻快，传唱得比官文还快。",
        "卫兵请示：要不要禁？墙上有人用炭笔写：“哲人王，听得进笑话吗？”",
        "你摸了摸那行字，竟有点想笑，又有点发毛。笑的是机智，发毛的是，它戳到了某处。"
      ],
      "advice": [
        {
          "philosopher": "plato",
          "expression": "happy",
          "text": "让歌谣飞吧！一个能公开批评的城邦，才有真正的活力。笑话不可怕，可怕的是没有人敢笑。听听人民的声音，哪怕是刺耳的。",
          "option": "放任讽喻，笑纳批评",
          "effects": {
            "民心": 2,
            "自由": 3,
            "稳定": -2,
            "财富": 0
          }
        },
        {
          "philosopher": "hobbes",
          "expression": "serious",
          "text": "笑话，是叛乱的序曲。禁歌、查墙、惩首恶，把火星掐在变成野火之前。今日纵容一首歌，明日就可能纵容一场暴动。",
          "option": "禁歌查墙，严惩首恶",
          "effects": {
            "稳定": 3,
            "自由": -3,
            "民心": -2,
            "财富": -1
          }
        },
        {
          "philosopher": "machiavelli",
          "expression": "mock",
          "text": "与其费力封口，不如收编。养几个御用文人，把刺人的笑话，改写成颂扬的调子。让笔，变成另一种士兵。",
          "option": "收编文人，化讽为颂",
          "effects": {
            "民心": 0,
            "稳定": 2,
            "自由": -2,
            "财富": -1
          }
        },
        {
          "philosopher": "laozi",
          "expression": "calm",
          "text": "嘴长在别人身上，歌谣又杀不了人。您越禁，它越响。不如随它去，等人们唱腻了，自然就停了。",
          "option": "不闻不问，任其自灭",
          "effects": {
            "自由": 2,
            "稳定": -1,
            "民心": 0,
            "财富": 0
          }
        },
        {
          "philosopher": "rousseau",
          "expression": "serious",
          "text": "歌谣不是冒犯，是人民在说话。一个连笑话都听不得的王，谈什么公意？让人民说。刺耳的话，才是真话。",
          "option": "放任批评，笑纳直言",
          "effects": {
            "自由": 4,
            "民心": 2,
            "稳定": -3,
            "财富": 0
          },
          "hidden": true,
          "condition": { "stats": { "自由": { "min": 60 } } }
        }
      ],
      "results": {
        "0": {
          "text": [
            "你哈哈一笑，任那歌谣越传越广。",
            "百姓觉得你是个有意思的王。只是卫兵队长，从此夜夜睡不安稳。"
          ],
          "council": [
            {
              "philosopher": "plato",
              "expression": "happy",
              "line": "热切地鼓掌：“能嘲笑君主的城邦，才是自由的城邦！您笑纳了，便得了民心。"
            },
            {
              "philosopher": "hobbes",
              "expression": "mock",
              "line": "冷冷说：“笑话是叛乱的序曲。您今天纵容的调子，明天就有人配上刀。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "耸肩：“至少您现在看起来像个好王。形象也是资产。"
            },
            {
              "philosopher": "laozi",
              "expression": "happy",
              "line": "微笑：“笑声能治病，也能藏刀。听其自然便好。"
            }
          ]
        },
        "1": {
          "text": [
            "歌谣戛然而止，墙被刷得雪白。",
            "安静了，也空了。连议论声，都躲进了门缝里。"
          ],
          "council": [
            {
              "philosopher": "hobbes",
              "expression": "happy",
              "line": "点头：“墙刷白了，歌禁了。安静，才是治理应有的底色。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "挑眉：“堵得住墙上的字，堵不住心里的念。您只是听不见了而已。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "长叹：“您不让人民说话，人民便在心里说。那声音更可怕。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "闭目：“民之难治，以其上之有为。您管得越多，怨越多。"
            }
          ]
        },
        "2": {
          "text": [
            "不久后，市集里只剩赞美诗。",
            "你渐渐分不清，那些歌声里，哪句是真心的。"
          ],
          "council": [
            {
              "philosopher": "machiavelli",
              "expression": "happy",
              "line": "露出满意的笑：“把笔变成另一种士兵，讽刺就成了颂歌。妙。"
            },
            {
              "philosopher": "plato",
              "expression": "mock",
              "line": "冷冷说：“满耳颂歌，却再无真话。陛下，您把自己关进了一面回音壁。"
            },
            {
              "philosopher": "hobbes",
              "expression": "happy",
              "line": "点头：“只要统治稳固，真话假话无所谓。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "轻声说：“美言不信，信言不美。您自己信吗？"
            }
          ]
        },
        "3": {
          "text": [
            "你当那首歌不存在，日子照过。",
            "唱的人见没人接茬，慢慢也乏了。只是有人觉得，你这王太没脾气。"
          ],
          "council": [
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "微微颔首：“您看，没人唱了。风不来，浪自平。"
            },
            {
              "philosopher": "hobbes",
              "expression": "calm",
              "line": "摇头：“没人唱，不代表没人想。压抑久了，下次就是刀。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "calm",
              "line": "笑：“省了力气，赢了从容。不过该防的，还是要防。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "轻叹：“沉默不一定平静，也可能是死水。"
            }
          ]
        },
        "4": {
          "text": [
            "歌不但没禁，反而越唱越响。",
            "市集上有人公开议论政事，甚至有人敢指着王宫的墙说——这墙该刷成什么颜色。自由是有了，只是秩序开始晃。"
          ],
          "council": [
            {
              "philosopher": "rousseau",
              "expression": "happy",
              "line": "眼睛发亮：“这才对。人民敢说话，城邦才是活的。"
            },
            {
              "philosopher": "plato",
              "expression": "happy",
              "line": "点头：“直言进谏，比颂歌值钱多了。"
            },
            {
              "philosopher": "hobbes",
              "expression": "worry",
              "line": "皱眉：“再这么下去，他们就该议论谁来当王了。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "冷笑：“您换了个法子收买人心——让他们说个够，他们就忘了饿。"
            }
          ]
        }
      }
    },
    {
      "id": "plague",
      "title": "瘟疫爆发",
      "type": "random",
      "order": 99,
      "requires": null,
      "description": [
        "港口归来的一艘商船，带来了说不清的怪病，街上开始有人走着走着就倒了下去。",
        "医师束手，百姓恐慌，谣言比病毒传得还快，连空气里都是草木灰的味道。",
        "你站在窗前，看着城外升起的烟，不知道那是焚香，还是焚尸。"
      ],
      "advice": [
        {
          "philosopher": "hobbes",
          "expression": "serious",
          "text": "封城！断绝一切往来，病患集中隔离。宁可错关千人，不可漏放一个。犹豫，就是给死神开门。",
          "option": "铁腕封城隔离",
          "effects": {
            "稳定": 3,
            "自由": -3,
            "民心": -1,
            "财富": -2
          }
        },
        {
          "philosopher": "plato",
          "expression": "serious",
          "text": "贤者治国，当以公益为先。征召医师、公费施治，护佑每一个公民。哪怕耗尽府库，人心不能丢。",
          "option": "公费施治，护佑公民",
          "effects": {
            "民心": 3,
            "财富": -2,
            "稳定": 1,
            "自由": 0
          }
        },
        {
          "philosopher": "laozi",
          "expression": "calm",
          "text": "瘟疫自有消长，强求不得。清净隔离，顺应天时，莫要过度惊扰。草木灰的味道，越扇越浓。",
          "option": "清净隔离，顺应天时",
          "effects": {
            "自由": 1,
            "财富": 0,
            "稳定": 0,
            "民心": 0
          }
        },
        {
          "philosopher": "machiavelli",
          "expression": "mock",
          "text": "瘟疫是危机，危机也是机会。派士兵送药、登记病户，让百姓看清楚，只有您能救他们。至于药够不够，先顾着听话的人。",
          "option": "送药登记，收揽人心",
          "effects": {
            "民心": 2,
            "稳定": 2,
            "自由": -2,
            "财富": -1
          }
        }
      ],
      "results": {
        "0": {
          "text": [
            "城门紧闭，病势终被掐断。",
            "可城外日夜响起的哭声，你听了许久，很久都睡不沉。"
          ],
          "council": [
            {
              "philosopher": "hobbes",
              "expression": "serious",
              "line": "面色铁青：“城门紧闭，病势掐断。代价是哭声，可活下来的人，会记得您。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "长叹：“您护住了城，却把哭声关在了门外。正义不该如此冰冷。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "耸肩：“人命不算账，王位就是账本。这一笔，不亏。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "闭眼：“天道有常，过刚易折。疫气能防，怨气难防。"
            }
          ]
        },
        "1": {
          "text": [
            "医师走街串巷，病患一一得救。",
            "百姓说，这才像理想国之王该有的模样。只是财政大臣拿着账单，手在抖。"
          ],
          "council": [
            {
              "philosopher": "plato",
              "expression": "happy",
              "line": "眼睛发亮：“贤者治国，当以公益为先。您护住了每一个公民，这才像理想国。"
            },
            {
              "philosopher": "hobbes",
              "expression": "calm",
              "line": "低声说：“公费施治得民心，也空了国库。下次瘟疫，这钱从哪来？"
            },
            {
              "philosopher": "machiavelli",
              "expression": "calm",
              "line": "摇头：“医好了人，饿死了兵。您这善心，太贵。"
            },
            {
              "philosopher": "laozi",
              "expression": "happy",
              "line": "微笑：“救人一命，胜过筑一座城。"
            }
          ]
        },
        "2": {
          "text": [
            "你未大动干戈，只让百姓各自调养。",
            "疫情竟也慢慢退去，像它来时一样，没打招呼。"
          ],
          "council": [
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "微微颔首：“未大动干戈，疫情自退。清净顺应，便是医道。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "挑眉：“您几乎什么都没做，倒显出几分定力。运气也是本事。"
            },
            {
              "philosopher": "hobbes",
              "expression": "mock",
              "line": "冷哼：“运气不能护国。下次来的若不是疫，是兵呢？"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "轻声说：“顺应是智慧，可若失去担当，王位便只是摆设。"
            }
          ]
        },
        "3": {
          "text": [
            "士兵挨户送药，登记造册。",
            "百姓感激涕零，觉得王比神明更近。可暗地里，有人把病人藏了起来，怕被拉走。"
          ],
          "council": [
            {
              "philosopher": "machiavelli",
              "expression": "happy",
              "line": "露出精明的笑：“送药登记，百姓只记得是您救了他们。民心，就是这么收的。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "皱眉：“登记之后呢？被记下的人，会安心养病吗？"
            },
            {
              "philosopher": "hobbes",
              "expression": "happy",
              "line": "点头：“顾全大局，不能只顾一人。您做得对。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "轻声说：“以医为政，善中藏刀。但愿您别把药变成枷锁。"
            }
          ]
        }
      }
    },
    {
      "id": "people_petition",
      "title": "民众请愿",
      "type": "random",
      "order": 99,
      "requires": {
        "民心": {
          "max": 35
        }
      },
      "description": [
        "民心低落，一群百姓跪在王宫前，把血书高高举过头顶，喊着要减赋、要公道、要一个说法。",
        "你站在廊下，望着那片跪伏的黑压压的人。心里忽然一软，又忽然一紧。",
        "他们跪的是王，还是命？"
      ],
      "advice": [
        {
          "philosopher": "plato",
          "expression": "happy",
          "text": "陛下，走下王座吧。面对面听他们说，看看那些眼睛。民心如水，可以载舟，也可以煮了您这锅汤。",
          "option": "亲自接见，倾听民怨",
          "effects": {
            "民心": 3,
            "稳定": 1,
            "自由": 1,
            "财富": -1
          }
        },
        {
          "philosopher": "hobbes",
          "expression": "serious",
          "text": "跪着递书，便是胁迫。驱散人群，杀一儆百。今日他们敢跪，明日他们就敢冲。莫让请愿变成叛乱的引信。",
          "option": "驱散人群，杀一儆百",
          "effects": {
            "稳定": 2,
            "民心": -3,
            "自由": -2,
            "财富": 0
          }
        },
        {
          "philosopher": "machiavelli",
          "expression": "mock",
          "text": "先满口答应，好言安抚，转身再暗中记下领头者的名字。软硬皆施，才是王术。",
          "option": "假意安抚，暗记领头",
          "effects": {
            "民心": 0,
            "稳定": 1,
            "自由": -1,
            "财富": 0
          }
        },
        {
          "philosopher": "laozi",
          "expression": "calm",
          "text": "水满则溢，怨深则发。他们能跪着说话，说明还信您。若连跪都不愿意了，那才是真的完了。减些赋吧，别等水漫过堤。",
          "option": "减赋安民，不加追责",
          "effects": {
            "民心": 2,
            "财富": -1,
            "稳定": 0,
            "自由": 1
          }
        },
        {
          "philosopher": "rousseau",
          "expression": "angry",
          "text": "他们不是在求，是在提醒。权力来自人民，不是你的恩赐。他们跪着，是因为你让他们只能跪。让他们站起来。这不是仁慈，是他们应得的。",
          "option": "倾听民怨，予民自主",
          "effects": {
            "自由": 3,
            "民心": 3,
            "稳定": -2,
            "财富": -2
          },
          "hidden": true,
          "condition": { "stats": { "自由": { "min": 60 } } }
        }
      ],
      "results": {
        "0": {
          "text": [
            "你走下王座，亲手扶起请愿者。",
            "那一日的阳光似乎格外暖，连风都轻了些。可宫里有人小声说：王太心软了。"
          ],
          "council": [
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "热切地说：“走下王座扶起他们，这便是‘仁’字的写法。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "冷笑：“亲民戏演得动人。只是别让他们以为，您真会一直低头。"
            },
            {
              "philosopher": "hobbes",
              "expression": "serious",
              "line": "低声警告：“今天扶起一个，明天就跪下一百个。王座不能太低。"
            },
            {
              "philosopher": "laozi",
              "expression": "happy",
              "line": "微笑：“弯得下身，才立得起国。"
            }
          ]
        },
        "1": {
          "text": [
            "血被水冲去，请愿者散了。",
            "可暗处的火，谁也看不见，只在夜里烧得更旺。"
          ],
          "council": [
            {
              "philosopher": "hobbes",
              "expression": "happy",
              "line": "点头：“跪着递书便是胁迫。杀一儆百，怨气便烂在肚里。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "长叹：“您洗去的是血，洗不掉的是恨。这把火只会转到地下烧。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "耸肩：“至少明面上没人再敢跪了。暗地里的事，再说。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "闭眼：“以杀止怨，怨复生怨。"
            }
          ]
        },
        "2": {
          "text": [
            "你满口应承，转身却记下名字。",
            "风波暂平，可人心比从前更冷了。"
          ],
          "council": [
            {
              "philosopher": "machiavelli",
              "expression": "happy",
              "line": "得意地笑：“满口答应，暗记名字。软硬皆施，风波自平。"
            },
            {
              "philosopher": "plato",
              "expression": "mock",
              "line": "冷冷说：“您用谎言换了安稳。可坐在王座上的，还是哲人吗？"
            },
            {
              "philosopher": "hobbes",
              "expression": "happy",
              "line": "点头：“谎言若能保命，那就说。王不需要像圣人一样说话。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "轻声说：“信不足焉，有不信焉。您骗过一次，下次就没人信了。"
            }
          ]
        },
        "3": {
          "text": [
            "你免了部分赋税，让他们先回去。",
            "人群散了，骂声也小了。只是财政大臣在一旁算账，脸色不太好看。"
          ],
          "council": [
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "微微颔首：“轻徭薄赋，民自安。堤不溃，水自流。"
            },
            {
              "philosopher": "hobbes",
              "expression": "mock",
              "line": "哼道：“减了赋，士兵吃什么？他们不会感恩，只会想要更多。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "calm",
              "line": "笑：“买一时的安静，也不亏。只是别让他们成了习惯。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "轻叹：“减赋是善，可若没有后续，善也会变成软弱的代名词。"
            }
          ]
        },
        "4": {
          "text": [
            "你走下王座，亲手扶起最前面的老人。",
            "人群先是静了一瞬，然后爆发出哭声——不是悲，是惊。他们跪了一辈子，第一次有人来扶。"
          ],
          "council": [
            {
              "philosopher": "rousseau",
              "expression": "happy",
              "line": "声音发颤：“这就对了。他们不是臣民，是主人。"
            },
            {
              "philosopher": "plato",
              "expression": "happy",
              "line": "点头：“以人待人，比以权压人重得多。"
            },
            {
              "philosopher": "hobbes",
              "expression": "worry",
              "line": "皱眉：“您今天扶他们起来，明天他们就敢站起来要更多。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "冷笑：“扶一次，他们就记一辈子。您这人情，做得值。"
            }
          ]
        }
      }
    },
    {
      "id": "diplomatic_marriage",
      "title": "外交联姻",
      "type": "random",
      "order": 99,
      "requires": null,
      "description": [
        "邻国愿以公主联姻，缔结百年和平。可这位公主信着异教，民众颇有微词。",
        "元老院分成两派：联姻派拍案，拒婚派跺脚，争执得几乎要掀了屋顶。",
        "你坐在中间，忽然想起自己还没见过那位公主。政治里的婚姻，从来不问长相。"
      ],
      "advice": [
        {
          "philosopher": "plato",
          "expression": "serious",
          "text": "联姻若能消弭兵祸，何乐不为？以礼相待，以公心相待。只要她为城邦带来和平，异教之论，不攻自破。",
          "option": "接受联姻，以礼相待",
          "effects": {
            "民心": 1,
            "稳定": 2,
            "财富": 1,
            "自由": 0
          }
        },
        {
          "philosopher": "hobbes",
          "expression": "serious",
          "text": "婚姻不可信，盟誓更不可信。先扣下对方王室人质，控住边境。这场婚礼，不过是另一种占领。",
          "option": "联姻但扣人质控边",
          "effects": {
            "稳定": 3,
            "民心": -1,
            "财富": -1,
            "自由": -2
          }
        },
        {
          "philosopher": "machiavelli",
          "expression": "mock",
          "text": "娶了她，再让她‘意外’早逝。土地与同盟，便尽归您手。干净利落。",
          "option": "联姻后谋夺其国",
          "effects": {
            "稳定": 2,
            "财富": 3,
            "民心": -3,
            "自由": -2
          }
        },
        {
          "philosopher": "laozi",
          "expression": "calm",
          "text": "联姻是两个人的事，却是两邦人的命。若为和平而婚，和平本身便成了交易。不如先问一句：这公主，愿不愿意？",
          "option": "先见公主，再定婚约",
          "effects": {
            "民心": 0,
            "稳定": 0,
            "财富": 0,
            "自由": 1
          }
        }
      ],
      "results": {
        "0": {
          "text": [
            "公主入城，礼炮齐鸣，两邦使者把酒言欢。",
            "边贸渐渐通了，钱粮流通，连市集都热闹了几分。"
          ],
          "council": [
            {
              "philosopher": "plato",
              "expression": "happy",
              "line": "欣慰地说：“以礼相待，以公心相待。和平，比神像更值得供奉。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "calm",
              "line": "在旁小声说：“联姻换和平，不费一兵。只是这‘姻亲’，夜里睡得安稳吗？"
            },
            {
              "philosopher": "hobbes",
              "expression": "calm",
              "line": "提醒：“和平很好。但别把士兵撤了。"
            },
            {
              "philosopher": "laozi",
              "expression": "happy",
              "line": "微笑：“以婚止戈，终是好事。只是别让女人承担太多。"
            }
          ]
        },
        "1": {
          "text": [
            "人质入狱，边境增兵。",
            "和平是有了，却冷得像铁。连喜宴都透着寒意。"
          ],
          "council": [
            {
              "philosopher": "hobbes",
              "expression": "happy",
              "line": "点头：“人质在手，边境增兵。这和平，是用铁链拴住的。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "长叹：“把婚姻变成人质，您出卖的是信义，买来的是提防。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "calm",
              "line": "笑：“信义不能吃，铁链可以。我觉得这买卖不亏。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "摇头：“以力维和，力衰则战起。"
            }
          ]
        },
        "2": {
          "text": [
            "邻国君主暴毙，领土易主。",
            "史官掩卷长叹，不知该用哪一个字落下这笔。"
          ],
          "council": [
            {
              "philosopher": "machiavelli",
              "expression": "happy",
              "line": "露出冷酷的笑：“娶她，再让她‘意外’早逝。土地与同盟，尽归陛下。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "声音发颤：“史官会怎么写？一笔毒姻，换一座染血的城。"
            },
            {
              "philosopher": "hobbes",
              "expression": "calm",
              "line": "低声说：“成王败寇。史官从来只写赢家。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "闭目：“以杀取国，终将以杀失国。"
            }
          ]
        },
        "3": {
          "text": [
            "你屏退左右，与公主见了一面。",
            "谁也不知道谈了什么。只是三天后，公主自愿留下，婚事成了。"
          ],
          "council": [
            {
              "philosopher": "laozi",
              "expression": "happy",
              "line": "微微点头：“先问人心，再定婚约。这才是活人该走的路。"
            },
            {
              "philosopher": "plato",
              "expression": "happy",
              "line": "欣慰：“您给了公主选择的余地。理想国的王，先要尊重人的尊严。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "挑眉：“见了一面就成了？这公主倒是比盟约还好说话。"
            },
            {
              "philosopher": "hobbes",
              "expression": "mock",
              "line": "哼道：“若她本不愿呢？您会为了一个女人，放弃和平吗？"
            }
          ]
        }
      }
    },
    {
      "id": "arts_science",
      "title": "艺术与科学资助",
      "type": "random",
      "order": 99,
      "requires": null,
      "description": [
        "一批学者与匠人递上陈情，说要造观星仪、写史诗，让城邦也有自己的星空。",
        "可国库捉襟见肘，财政大臣在一旁直皱眉。笔尖悬着，等你一句话。",
        "你想起小时候，也曾在夜里数过星星。只是现在，你满眼都是账本。"
      ],
      "advice": [
        {
          "philosopher": "plato",
          "expression": "happy",
          "text": "观星仪丈量的是天，喂养的却是城邦的灵魂。史诗里若没有英雄，后世便不懂何谓高尚。陛下，钱能买来面包，但买不来让年轻人抬头仰望的理由。",
          "option": "重金资助学院",
          "effects": {
            "民心": 1,
            "财富": -2,
            "自由": 2,
            "稳定": 1
          }
        },
        {
          "philosopher": "machiavelli",
          "expression": "mock",
          "text": "资助可以，但学者须颂扬君王。把笔变成另一种听令的士兵。让每首诗里，都有您的名字。",
          "option": "资助但要求歌功",
          "effects": {
            "民心": -1,
            "财富": -1,
            "稳定": 2,
            "自由": -2
          }
        },
        {
          "philosopher": "laozi",
          "expression": "calm",
          "text": "技多则巧生，巧生则朴散。少些雕琢与干预，顺民自化便好。真正的星空，不在观星仪里。",
          "option": "不干预，任其自发",
          "effects": {
            "财富": 0,
            "自由": 2,
            "民心": 0,
            "稳定": -1
          }
        },
        {
          "philosopher": "hobbes",
          "expression": "serious",
          "text": "观星仪有什么用？不能吃，不能打。要资助，先资助武器和城墙。活下来的人，才有资格写诗。",
          "option": "改拨军资，放弃学术",
          "effects": {
            "财富": 0,
            "稳定": 2,
            "自由": -1,
            "民心": -2
          }
        }
      ],
      "results": {
        "0": {
          "text": [
            "学院落成，少年诵读声不绝于耳。",
            "城邦第一次有了自己的星空图。只是饥肠辘辘的百姓，未必欣赏得了。"
          ],
          "council": [
            {
              "philosopher": "plato",
              "expression": "happy",
              "line": "眼睛发亮：“学院落成，真理之光普照。治国者，先要懂得何为‘善’。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "哼道：“星空图很美。只是饿着肚子的百姓，未必欣赏得了。"
            },
            {
              "philosopher": "hobbes",
              "expression": "mock",
              "line": "冷着脸：“钱该花在刀刃上。刀不能缺，星可以晚点看。"
            },
            {
              "philosopher": "laozi",
              "expression": "happy",
              "line": "微笑：“仰望星空的人，至少不会只盯着泥里。不过泥里也得有人看路。"
            }
          ]
        },
        "1": {
          "text": [
            "颂歌遍野，史官的字里行间，却多了几分刻意。",
            "你听着赞词，竟有点分不清真假。"
          ],
          "council": [
            {
              "philosopher": "machiavelli",
              "expression": "happy",
              "line": "满意地点头：“学者颂扬君王，笔成了士兵。这钱花得值。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "长叹：“颂歌遍野，真知却哑了。您养的不是学院，是喇叭。"
            },
            {
              "philosopher": "hobbes",
              "expression": "calm",
              "line": "说：“只要能稳，真知假知都无所谓。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "轻声说：“美言不信。您自己信吗？"
            }
          ]
        },
        "2": {
          "text": [
            "你未拨一文，匠人却自筹资金。",
            "悄悄间，竟造出了一架能引水的水车。"
          ],
          "council": [
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "微微颔首：“您未拨一文，匠人自造出水车。少些雕琢，民自化。"
            },
            {
              "philosopher": "hobbes",
              "expression": "calm",
              "line": "皱眉：“任其自发，便无人统领。无序的聪明，迟早成患。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "耸肩：“没花钱还得了水车，白捡的便宜。不过别让他们骑到您头上。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "轻叹：“民间智慧可贵，可若没有方向，终难成大事。"
            }
          ]
        },
        "3": {
          "text": [
            "学者的陈情被退回，军费多了。",
            "城墙更厚了，可城里的夜晚，没人再数星星。"
          ],
          "council": [
            {
              "philosopher": "hobbes",
              "expression": "happy",
              "line": "满意地说：“城墙厚了，刀利了。活下来的人，才有资格谈诗。"
            },
            {
              "philosopher": "plato",
              "expression": "mock",
              "line": "冷冷道：“您用银子把星星埋了。城邦只剩下一种颜色。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "calm",
              "line": "笑：“先活着，再风雅。这笔账，您算得对。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "闭目：“兵者不祥。可若连命都没了，诗也写不成。只是别让刀成为唯一的信仰。"
            }
          ]
        }
      }
    },
    {
      "id": "rebellion_plot",
      "title": "叛乱阴谋",
      "type": "random",
      "order": 99,
      "requires": null,
      "description": [
        "密探跪报：一支禁卫军，已密谋在祭典上发难。",
        "消息若走漏半字，全城都会听见。你盯着那封密信，指尖发凉。",
        "上面没有一个名字，只有一句：“他们会在舞狮经过王座时动手。”"
      ],
      "advice": [
        {
          "philosopher": "hobbes",
          "expression": "serious",
          "text": "不用等舞狮了。今晚就动手。先把带头的抓了，再一个个审。宁可错抓十个，也不能漏过一个。你现在不是哲人王，是一城之主的命悬一线。",
          "option": "夜半收网，铁腕清洗",
          "effects": {
            "稳定": 3,
            "自由": -3,
            "民心": -2,
            "财富": -1
          }
        },
        {
          "philosopher": "machiavelli",
          "expression": "mock",
          "text": "全杀了？那明天你拿什么守王宫？只杀领头的几个，枭首示众。剩下的，当众赦了。让他们知道你的刀快，也知道你的手松。这样的人，往后比狗还听话。",
          "option": "杀首领，赦余党",
          "effects": {
            "稳定": 2,
            "民心": 0,
            "自由": -1,
            "财富": 0
          }
        },
        {
          "philosopher": "plato",
          "expression": "happy",
          "text": "这封密信里没有名字。没有名字，就可能是任何一个。你拿着它去抓人，只会把无辜的也推成敌人。不如查清楚，再决定。哪怕是死罪，也要给人一个被看见的机会。",
          "option": "先查清楚，再行处置",
          "effects": {
            "民心": 1,
            "稳定": -1,
            "自由": 2,
            "财富": 0
          }
        },
        {
          "philosopher": "laozi",
          "expression": "calm",
          "text": "你越怕，他们越敢。舞狮还没来，刀还没出鞘。先把王宫的乐声停了，让卫兵歇一歇。让那些人看见，你已经知道了，只是不动。不动，反而深不可测。",
          "option": "按兵不动，以静制动",
          "effects": {
            "稳定": -2,
            "自由": 1,
            "民心": 0,
            "财富": 0
          }
        },
        {
          "philosopher": "rousseau",
          "expression": "worry",
          "text": "叛乱的不是人，是被当成臣民的人。他们不觉得这城邦是自己的，才想掀翻它。给他们一份做主的权，比抓一百个叛党有用。",
          "option": "予民主权，化叛为安",
          "effects": {
            "自由": 3,
            "民心": 2,
            "稳定": -2,
            "财富": 0
          },
          "hidden": true,
          "condition": { "stats": { "自由": { "min": 60 } } }
        }
      ],
      "results": {
        "0": {
          "text": [
            "一夜之间，牢狱满溢。",
            "秩序是稳了，可人人噤若寒蝉。连酒馆里最会讲故事的人，都只敢说天气。"
          ],
          "council": [
            {
              "philosopher": "hobbes",
              "expression": "calm",
              "line": "站在阴影里：“夜半收网，血洗叛党。乱源已清，余者噤声。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "长叹：“您清的是人，不是怨。恐惧里长不出忠诚，只长得出伪装。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "冷笑：“至少明天他们还怕你。怕，就是秩序。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "闭眼：“重刑之下，只剩沉默。沉默不是平安。"
            }
          ]
        },
        "1": {
          "text": [
            "首领身首异处，余党叩谢不杀之恩。",
            "风波暂息，朝堂上无人再敢多言。只是没人知道，那叩谢的人里，有几个把牙咬碎了。"
          ],
          "council": [
            {
              "philosopher": "machiavelli",
              "expression": "happy",
              "line": "露出赞赏的笑：“枭首示众，余者感恩。杀得少，威慑却足。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "轻叹：“赦免是仁，可这仁里裹着恐惧。他们叩谢的是活命，不是您。"
            },
            {
              "philosopher": "hobbes",
              "expression": "happy",
              "line": "点头：“没杀光，还得了人心。你已经比大多数人会做王了。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "摇头：“首恶已除，余党心寒。寒处最易再生火。"
            }
          ]
        },
        "2": {
          "text": [
            "你压下密信，派人暗查。",
            "三天后，真正的首谋被拿下，几个受牵连的只被免职。朝堂松了口气，也冷了些。"
          ],
          "council": [
            {
              "philosopher": "plato",
              "expression": "happy",
              "line": "欣慰地点头：“你给了每个人一个被看见的机会。正义，就是不放过恶，也不冤枉善。"
            },
            {
              "philosopher": "hobbes",
              "expression": "mock",
              "line": "冷冷说：“查清了又怎样？那三天里，你可是在刀尖上睡觉。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "耸肩：“结果还行。不过下次若再来一封没有名字的信，你还能这么从容吗？"
            },
            {
              "philosopher": "laozi",
              "expression": "happy",
              "line": "微笑：“慢下来的人，往往比急着挥刀的人更让对手害怕。"
            }
          ]
        },
        "3": {
          "text": [
            "你什么也没做，只让人放出风：王已经知道了。",
            "祭典那天，舞狮经过王座，什么也没发生。但你看见，有几个人悄悄把手从袖子里抽了出来。"
          ],
          "council": [
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "微微颔首：“你看，舞狮过去了，什么也没发生。不动，有时是最重的刀。"
            },
            {
              "philosopher": "hobbes",
              "expression": "mock",
              "line": "冷哼：“这次是你命大。下次若他们真从袖子里抽出刀，你连后悔的时间都没有。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "calm",
              "line": "若有所思：“让他们知道你看见了，又不抓。这手牌打得漂亮。只是别玩脱了。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "轻叹：“你赌了一次人心。赢了。但别把每次治国都当成赌局。"
            }
          ]
        },
        "4": {
          "text": [
            "你没有抓人，反而在王宫门口摆了一张长桌，让百姓把不满都写下来。",
            "三天后，那封密信的主人自己来了。他说：我们不是要反，是想让您知道，这城邦里还有我们。"
          ],
          "council": [
            {
              "philosopher": "rousseau",
              "expression": "happy",
              "line": "声音发颤：“你看。叛乱不是天生的，是被逼出来的。"
            },
            {
              "philosopher": "plato",
              "expression": "happy",
              "line": "点头：“从根源上解决，比事后清洗高明得多。"
            },
            {
              "philosopher": "hobbes",
              "expression": "worry",
              "line": "皱眉：“你放他们一马，他们下次就敢提更过分的要求。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "冷笑：“你没花一分钱，就把一场叛乱变成了民心。这笔账，算得精。"
            }
          ]
        }
      }
    },
    {
      "id": "education",
      "title": "兴办学府",
      "type": "random",
      "order": 99,
      "requires": null,
      "description": [
        "孩童多失学，元老提议办官学，却担忧耗费国力、养出不好管的人。",
        "一封童谣般的请愿书被悄悄递到你案头，墨迹还没干。",
        "上面歪歪扭扭写着一句话：“我们想识字。”"
      ],
      "advice": [
        {
          "philosopher": "plato",
          "expression": "happy",
          "text": "每个孩子都该有书读。你若不信，就去看看那些在田埂上识字的孩子——他们用树枝写字，写得比有些元老还认真。广设学园，不论贵贱。愚昧，才是城邦真正的敌人。",
          "option": "广设官学，有教无类",
          "effects": {
            "民心": 2,
            "财富": -2,
            "自由": 2,
            "稳定": 1
          }
        },
        {
          "philosopher": "hobbes",
          "expression": "serious",
          "text": "学校，要教的第一件事是服从。统一课本，只颂王法与秩序。规矩要从娃娃抓起。不然书读得越多，越会问‘凭什么’。",
          "option": "统一课本，教服从",
          "effects": {
            "稳定": 3,
            "自由": -3,
            "民心": -2,
            "财富": -1
          }
        },
        {
          "philosopher": "laozi",
          "expression": "calm",
          "text": "识字的人多了，心思也就多了。这话你听听就好。小孩子在田埂上认星星、追蜻蜓，学得比谁都快。你非要办十个学府，把他们关进同一间屋，教同一本书。天地之间，本来就有一所学校。",
          "option": "顺其自然，减教化",
          "effects": {
            "财富": 0,
            "自由": 2,
            "民心": 0,
            "稳定": -1
          }
        },
        {
          "philosopher": "machiavelli",
          "expression": "mock",
          "text": "书可以读，但要读我们编的书。让学者编几本忠君爱国的课本，再把学费压到最低。百姓觉得您给他们开了路，其实路通向哪儿，您说了算。",
          "option": "设官定教材，笼络人心",
          "effects": {
            "民心": 1,
            "稳定": 2,
            "自由": -1,
            "财富": -1
          }
        },
        {
          "philosopher": "confucius",
          "expression": "calm",
          "text": "道之以政，齐之以刑，民免而无耻；道之以德，齐之以礼，有耻且格。办学府，不是教识字，是教做人。有教无类，以德化人。",
          "option": "有教无类，以德化人",
          "effects": {
            "稳定": 2,
            "民心": 2,
            "自由": 0,
            "财富": -2
          },
          "hidden": true,
          "condition": { "stats": { "稳定": { "min": 60 } } }
        }
      ],
      "results": {
        "0": {
          "text": [
            "学堂钟声响起，连农家的孩子也背起了书简。",
            "你望着那些摇头晃脑的小脑袋，第一次觉得未来有了形状。"
          ],
          "council": [
            {
              "philosopher": "plato",
              "expression": "happy",
              "line": "眼睛发亮：“不论贵贱皆可入学，哲人便从教育中诞生。善哉！"
            },
            {
              "philosopher": "hobbes",
              "expression": "mock",
              "line": "冷冷说：“人人读书，便人人会问‘为何’。读书人是最难管的百姓。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "calm",
              "line": "笑：“管他呢。读书人越多，以后朝里可用的人就越多。反正学校是您开的。"
            },
            {
              "philosopher": "laozi",
              "expression": "happy",
              "line": "微笑：“读书识字，开的是眼。至于看见什么，看各人造化。"
            }
          ]
        },
        "1": {
          "text": [
            "课本划一，童子诵读如出兵阵。",
            "整齐，却也单一。像一片只长一种草的园子。"
          ],
          "council": [
            {
              "philosopher": "hobbes",
              "expression": "happy",
              "line": "满意地点头：“统一课本，只颂王法。学校，便是最早的军营。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "长叹：“教孩子只知服从，您养的不是国民，是顺民。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "闭眼：“教人千言，不如留人一念。念断了，人便成了回声。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "calm",
              "line": "笑：“顺民有什么不好？至少上阵不乱，收税不闹。"
            }
          ]
        },
        "2": {
          "text": [
            "你未办一所学堂，孩子们却在田埂上认得了星斗。",
            "大自然的课，不花一文。"
          ],
          "council": [
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "垂眸：“未办一学堂，孩童却在田埂认得星斗。自然之教，足矣。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "calm",
              "line": "摇头：“不花分文，倒显得您洒脱。只是国家靠‘洒脱’守得住吗？"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "轻叹：“自然能养出灵气，可不能只靠运气。总得有人告诉他们，做人还有别的路。"
            },
            {
              "philosopher": "hobbes",
              "expression": "mock",
              "line": "冷笑：“等他们长大，连字都不识。您让他们拿什么跟邻国争？"
            }
          ]
        },
        "3": {
          "text": [
            "学校开了，书本也发了。",
            "孩子们念着“王与城邦”，眼里有光。只是那光，是朝着一个方向的。"
          ],
          "council": [
            {
              "philosopher": "machiavelli",
              "expression": "happy",
              "line": "得意地笑：“教材是您的，学校是您的，未来的官员也是您的。这买卖划算。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "皱眉：“书页里若只有一种声音，孩子便学不会质疑。不会质疑的人，也成不了真正的哲人。"
            },
            {
              "philosopher": "hobbes",
              "expression": "happy",
              "line": "点头：“学成之后能为国所用，总比放养强。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "轻声说：“教之以术，不如养之以道。方向太早，翅膀就硬不起来。"
            }
          ]
        },
        "4": {
          "text": [
            "学堂里不仅教识字，还教孝悌、教礼义。",
            "几年后，乡里争端少了，年轻人见了长者会让路。你站在城外，看见一个放牛娃在田埂上读诗——那画面，比任何战功都长久。"
          ],
          "council": [
            {
              "philosopher": "confucius",
              "expression": "happy",
              "line": "欣慰：“道之以德，齐之以礼，有耻且格。这才是教化的根本。"
            },
            {
              "philosopher": "plato",
              "expression": "happy",
              "line": "点头：“教育不只是识字，是塑造灵魂。您做对了。"
            },
            {
              "philosopher": "hobbes",
              "expression": "calm",
              "line": "点头：“懂礼义的百姓，比不懂的好管。这钱花得值。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "笑：“教他们孝，他们就不会反父；教他们忠，他们就不会反君。您这是在养顺民。"
            }
          ]
        }
      }
    },
    {
      "id": "festival",
      "title": "节庆与娱乐",
      "type": "random",
      "order": 99,
      "requires": null,
      "description": [
        "连年征劳，百姓面有菜色，连笑都成了奢侈品。",
        "有人提议办一场盛大祭典，振奋人心。可钱，又要从哪出？",
        "你想起自己已经很久没听见纯粹的笑了。王座上，只有回声。"
      ],
      "advice": [
        {
          "philosopher": "plato",
          "expression": "happy",
          "text": "不止办祭典，还要让每个人都有资格参加。哪怕是城西的乞丐，也该有一天不觉得自己是多余的人。节庆的意义不是热闹，是让所有人想起，我们是一个城邦。",
          "option": "举办公益祭典，全民共享",
          "effects": {
            "民心": 3,
            "财富": -2,
            "稳定": 1,
            "自由": 1
          }
        },
        {
          "philosopher": "machiavelli",
          "expression": "mock",
          "text": "面包与马戏。花小钱买安稳，比派兵镇压便宜得多。人吃饱了，看高兴了，就懒得造反。",
          "option": "面包与马戏",
          "effects": {
            "民心": 2,
            "财富": -1,
            "稳定": 2,
            "自由": -1
          }
        },
        {
          "philosopher": "laozi",
          "expression": "calm",
          "text": "笑是装不出来的。你办得再热闹，百姓心里苦，散场后还是一样的黑。不如把税减一点，让粮价落一点。日子好过了，笑自己会来。",
          "option": "减税让利，让笑容自然来",
          "effects": {
            "民心": 2,
            "财富": -1,
            "自由": 1,
            "稳定": 0
          }
        },
        {
          "philosopher": "hobbes",
          "expression": "serious",
          "text": "聚众易生乱。尤其是这种年景，一群人凑在一起，最容易出祸。要办可以，限时限地，军队监督。不能让狂欢失控，变成骚乱。",
          "option": "限时限地，军管庆典",
          "effects": {
            "稳定": 2,
            "自由": -2,
            "民心": -1,
            "财富": -1
          }
        },
        {
          "philosopher": "rousseau",
          "expression": "happy",
          "text": "人民不是臣民，是城邦的主人。节庆不是恩赐，是他们的权利。让他们自己办，自己笑。那一天他们才会觉得，这城邦是他们的。",
          "option": "人民主办，共享节庆",
          "effects": {
            "自由": 3,
            "民心": 3,
            "稳定": -1,
            "财富": -2
          },
          "hidden": true,
          "condition": { "stats": { "自由": { "min": 60 } } }
        }
      ],
      "results": {
        "0": {
          "text": [
            "祭典那天，城门大开，连乞丐都领到一份热食。",
            "你站在高台上，第一次听见那么多人一起笑。那声音像浪，拍得你眼眶发热。"
          ],
          "council": [
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "热切地说：“连乞丐都笑了。您让所有人看见，城邦没有忘记他们。"
            },
            {
              "philosopher": "hobbes",
              "expression": "calm",
              "line": "低声说：“钱花了不少。但愿他们记恩，别只记那一顿饭。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "calm",
              "line": "摇头：“太大方了。下次预算不够，他们不会记得今天，只会怪你给少了。"
            },
            {
              "philosopher": "laozi",
              "expression": "happy",
              "line": "微笑：“让人笑一次，比让人怕一年更难。你做到了。"
            }
          ]
        },
        "1": {
          "text": [
            "角斗与宴席俱全，百姓满足而归。",
            "他们暂时忘了赋税，也忘了愁。可散场后，巷子里又有人因为半块饼打了起来。"
          ],
          "council": [
            {
              "philosopher": "machiavelli",
              "expression": "happy",
              "line": "满意地说：“面包与马戏，花小钱买安稳。百姓满足了，便不想别的。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "轻叹：“您用娱乐堵住了嘴，也堵住了他们思考何为‘好’。"
            },
            {
              "philosopher": "hobbes",
              "expression": "happy",
              "line": "点头：“只要不闹事，娱乐也是治理。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "闭眼：“欢娱能忘忧，也能忘志。三天热闹之后，日子照旧。"
            }
          ]
        },
        "2": {
          "text": [
            "你没办祭典，只把粮税降了半成。",
            "有人笑骂：“这王太抠，连台戏都舍不得搭。”可骂完，还是笑了。"
          ],
          "council": [
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "微微颔首：“税一降，骂声里都带着笑。你看，不用搭台也能收场。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "挑眉：“省了钱，还得了民心。这买卖，您做得漂亮。"
            },
            {
              "philosopher": "plato",
              "expression": "happy",
              "line": "欣慰：“给他们真实的好日子，比给一天假更重要。"
            },
            {
              "philosopher": "hobbes",
              "expression": "mock",
              "line": "冷哼：“可国库不会笑。明年若打仗，你拿什么发军饷？"
            }
          ]
        },
        "3": {
          "text": [
            "庆典被哨声切割成段落。",
            "欢乐里，多了几分拘束与不安。"
          ],
          "council": [
            {
              "philosopher": "hobbes",
              "expression": "happy",
              "line": "点头：“限时限地，军队监督。欢乐可控，便不会酿成骚乱。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "长叹：“哨声把庆典切成段落，欢乐里全是拘束。这叫节庆？"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "耸肩：“至少安全。百姓觉得少了点自由，可自由能当饭吃吗？"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "轻声说：“强扭的欢不欢，您心里知道。"
            }
          ]
        },
        "4": {
          "text": [
            "城门大开，百姓自己搭台、自己唱戏。",
            "没人维持秩序，却也没人闹事。他们笑了一整晚，那笑声里没有感恩，只有尽兴——这是他们的城邦，他们的夜。"
          ],
          "council": [
            {
              "philosopher": "rousseau",
              "expression": "happy",
              "line": "眼眶发红：“这才是节庆。不是恩赐，是他们自己的。"
            },
            {
              "philosopher": "plato",
              "expression": "happy",
              "line": "微笑：“人民主办，才是真正的共享。"
            },
            {
              "philosopher": "hobbes",
              "expression": "worry",
              "line": "皱眉：“没人管，迟早出乱子。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "冷笑：“让他们乐一晚上，他们就忘了今年税涨了多少。"
            }
          ]
        }
      }
    },
    {
      "id": "veterans",
      "title": "老兵安置",
      "type": "random",
      "order": 99,
      "requires": null,
      "description": [
        "战争结束，伤老兵士还乡，却无田无俸，怨声像暗火一样慢慢积起来。",
        "他们在城门口静坐，不吵不闹。可这沉默，最令人心惊。",
        "你走过城门时，有个老兵抬头看了你一眼，又低下头，像在看一把钝了的刀。"
      ],
      "advice": [
        {
          "philosopher": "plato",
          "expression": "serious",
          "text": "他们用身体挡过箭，如今不该坐在尘土里。授田赐俸，让他们像人一样活着。不是施舍，是城邦欠他们的。",
          "option": "授田赐俸，体面安置",
          "effects": {
            "民心": 3,
            "财富": -2,
            "稳定": 2,
            "自由": 0
          }
        },
        {
          "philosopher": "hobbes",
          "expression": "serious",
          "text": "兵者，双刃也。给薄田安其身，分而居之，勿令聚啸。聚，便是祸。尤其是一群打过仗的人。",
          "option": "薄田安置，分散居住",
          "effects": {
            "稳定": 2,
            "民心": -1,
            "财富": -1,
            "自由": -1
          }
        },
        {
          "philosopher": "laozi",
          "expression": "calm",
          "text": "他们最想要的不是赏赐，是别再被当作刀。少给多放，令其归田自给，不添负担，也免生怨。日子是过出来的，不是赏出来的。",
          "option": "轻给归田，任其自给",
          "effects": {
            "民心": 1,
            "财富": 0,
            "自由": 2,
            "稳定": -1
          }
        },
        {
          "philosopher": "machiavelli",
          "expression": "mock",
          "text": "老兵最危险。他们见过血，也知道怎么让人流血。许以虚衔，实则遣散监视。省下真金白银，还落个体面。别等他们先开口，您就没了讨价还价的余地。",
          "option": "虚衔遣散，暗中监视",
          "effects": {
            "财富": 1,
            "民心": -2,
            "稳定": 1,
            "自由": -2
          }
        },
        {
          "philosopher": "confucius",
          "expression": "calm",
          "text": "老兵不是负担，是教化的榜样。授田之外，再尊以礼，岁时存问，乡里敬之。让年轻人看见：为国效力，老有所终。",
          "option": "授田尊礼，养老示范",
          "effects": {
            "稳定": 2,
            "民心": 2,
            "财富": -2,
            "自由": 0
          },
          "hidden": true,
          "condition": { "stats": { "稳定": { "min": 60 } } }
        }
      ],
      "results": {
        "0": {
          "text": [
            "老兵领到土地与年金，纷纷解甲归田。",
            "路不拾遗，乡里安宁。你看着他们离去的背影，觉得这钱花得值。"
          ],
          "council": [
            {
              "philosopher": "plato",
              "expression": "happy",
              "line": "欣慰地说：“授田赐俸，彰其忠勇。将士卫国，自当有所养。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "calm",
              "line": "摇头：“厚赏老兵，暖了人心，也空了库房。陛下，您太慷慨了些。"
            },
            {
              "philosopher": "hobbes",
              "expression": "mock",
              "line": "哼道：“钱花了，人心也买了。只要他们别回头，就是好买卖。"
            },
            {
              "philosopher": "laozi",
              "expression": "happy",
              "line": "微笑：“以德报功，功者安。剑归犁下，田自丰。"
            }
          ]
        },
        "1": {
          "text": [
            "他们被分散到各村，再难聚首。",
            "安稳，却也孤零。故乡，只剩一个地名。"
          ],
          "council": [
            {
              "philosopher": "hobbes",
              "expression": "happy",
              "line": "点头：“分而居之，再难聚啸。安稳，比感恩实在。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "长叹：“把卫国老兵拆散到各村，您防的不是敌，是自己人。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "calm",
              "line": "笑：“自己人打过来的才最疼。防着点，没错。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "闭眼：“散了人，散不了心。心若不服，十里之外也是营。"
            }
          ]
        },
        "2": {
          "text": [
            "你未厚赏，却免了他们的徭役。",
            "老兵们反倒念你的好。人啊，最记得那份体谅。"
          ],
          "council": [
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "微微颔首：“未厚赏，却免了徭役。老兵们反倒念您的好。少即是多。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "轻叹：“轻给是善，可他们曾以命相托。‘少给’，会不会成了亏待？"
            },
            {
              "philosopher": "hobbes",
              "expression": "mock",
              "line": "冷冷说：“不花钱还想安稳。他们若哪天觉得你不把命当命，你就知道什么叫贵了。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "耸肩：“能省则省。你什么也没给，他们倒念你好。这是本事。"
            }
          ]
        },
        "3": {
          "text": [
            "虚衔到手，粮饷却无。",
            "老兵看穿了把戏，暗自咬牙。那咬痕，留在心里。"
          ],
          "council": [
            {
              "philosopher": "machiavelli",
              "expression": "happy",
              "line": "露出精明的笑：“虚衔到手，粮饷却无。省下真金白银，还落个‘体面’。"
            },
            {
              "philosopher": "hobbes",
              "expression": "calm",
              "line": "低声说：“老兵看穿了把戏。被耍的人，下次会不会先动手？"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "长叹：“用虚名打发卖命之人。王座下的土地，会越来越松。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "摇头：“失信于兵，如抽梁换柱。一时便宜，终有大患。"
            }
          ]
        },
        "4": {
          "text": [
            "老兵不仅领到了田，每年岁时还有人上门慰问。",
            "乡里的孩子路过老兵的家，都要鞠躬。年轻人看见：为国效力，老有所终。于是征兵的时候，不用催，自己就来了。"
          ],
          "council": [
            {
              "philosopher": "confucius",
              "expression": "happy",
              "line": "欣慰：“老兵是教化的榜样。授田尊礼，让年轻人看见——为国效力，老有所终。"
            },
            {
              "philosopher": "plato",
              "expression": "happy",
              "line": "微笑：“他们以命护过城邦，城邦当以礼待之。这才是各得其所。"
            },
            {
              "philosopher": "hobbes",
              "expression": "calm",
              "line": "点头：“厚待老兵，新兵就敢拼命。这钱花得值。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "笑：“您这是在给下一代做广告。征兵不用催了，省多少事。"
            }
          ]
        }
      }
    },
    {
      "id": "canal",
      "title": "水利工程",
      "type": "random",
      "order": 99,
      "requires": null,
      "description": [
        "洪涝与干旱交替着来，百姓跪在堤坝上恳请修渠引水，以绝水患。",
        "你望着那片被水泡过、又被晒裂的土地，想起祖父说过：治水，即治邦。",
        "可堤下跪着的百姓，已经把额头磕出了泥。"
      ],
      "advice": [
        {
          "philosopher": "laozi",
          "expression": "calm",
          "text": "水往低处流，这是它唯一的性子。你顺着它，它便是渠；你逆着它，它便是灾。修渠不在多，在对。因势利导，别让百姓白费力气。",
          "option": "因势利导，顺水性修渠",
          "effects": {
            "民心": 2,
            "财富": -1,
            "稳定": 1,
            "自由": 0
          }
        },
        {
          "philosopher": "hobbes",
          "expression": "serious",
          "text": "征发民夫，限时完工。以军法督工，方见效率。仁慈的工地，出不了快活的水渠。现在多流汗，来年才不流血。",
          "option": "军法征夫，限期完工",
          "effects": {
            "稳定": 2,
            "民心": -2,
            "财富": -1,
            "自由": -2
          }
        },
        {
          "philosopher": "plato",
          "expression": "happy",
          "text": "水患不认人。它冲的是城邦，是每一片田、每一张吃饭的嘴。告诉大家，这不是为某个人修渠，是所有人救所有人。万众一心，渠成则万民共利。",
          "option": "举国协力，共建水利",
          "effects": {
            "民心": 3,
            "财富": -1,
            "稳定": 1,
            "自由": 1
          }
        },
        {
          "philosopher": "machiavelli",
          "expression": "mock",
          "text": "修渠要钱，钱从税来。要快，就别跟百姓商量。先把渠修起来，再修几个碑，刻上您的名字。后人只会记得是谁给他们留了水，不会问渠底有多少双磨破的脚。",
          "option": "强征劳役，立碑纪功",
          "effects": {
            "稳定": 1,
            "财富": 1,
            "民心": -2,
            "自由": -2
          }
        }
      ],
      "results": {
        "0": {
          "text": [
            "水顺渠行，旱涝皆安。",
            "百姓说，这才是无为而治的真意。你几乎没费劲，倒落了美名。"
          ],
          "council": [
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "微微颔首：“因势利导，水自归渠。不争不堵，便是无为而治。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "挑眉：“您几乎没费劲，倒落了‘顺应天道’美名。便宜。"
            },
            {
              "philosopher": "hobbes",
              "expression": "mock",
              "line": "冷哼：“渠是修了，可雨水不等人。下回若洪水先来，你还能这么慢吗？"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "轻叹：“顺势是智慧，可也要有人站出来。否则人人都顺着水走，谁去挖第一锹？"
            }
          ]
        },
        "1": {
          "text": [
            "工期虽短，鞭痕却多。",
            "渠成之日，无人喝彩。只有民夫低头揉着伤处。"
          ],
          "council": [
            {
              "philosopher": "hobbes",
              "expression": "happy",
              "line": "点头：“征发民夫，军法督工，工期最短。效率就是道理。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "长叹：“鞭痕之下渠成了。可百姓眼里，您是治水，还是治人？"
            },
            {
              "philosopher": "machiavelli",
              "expression": "calm",
              "line": "笑：“只要渠通水，骂声会散的。您给的是水，不是鞭子。至少明年有水喝了。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "闭眼：“强拧的劲，能成一时，不能成一世。"
            }
          ]
        },
        "2": {
          "text": [
            "万众一心，渠成如画。",
            "田地连年丰熟，仓廪终于有了底气。"
          ],
          "council": [
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "热切地说：“举国协力，万民共利。公益之心，正是理想国之基。"
            },
            {
              "philosopher": "hobbes",
              "expression": "calm",
              "line": "低声说：“他们今日肯来，是因为水淹到了自己家。别把民力想得太高尚。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "耸肩：“不管来的是为了什么，渠成了。这才是最重要的。"
            },
            {
              "philosopher": "laozi",
              "expression": "happy",
              "line": "微笑：“万人同心，水也得让路。好。"
            }
          ]
        },
        "3": {
          "text": [
            "渠通了，碑也立了。",
            "可石碑上的名字，有人在夜里用石头刮花了。"
          ],
          "council": [
            {
              "philosopher": "machiavelli",
              "expression": "happy",
              "line": "满意地点头：“渠通了，碑立了。后人只记得您的名字。"
            },
            {
              "philosopher": "plato",
              "expression": "mock",
              "line": "冷冷道：“碑上刻着您的名字，也刻着百姓的恨。您真以为后人不会问？"
            },
            {
              "philosopher": "hobbes",
              "expression": "calm",
              "line": "说：“让人怕比让人爱更可靠。您至少有了水。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "轻声说：“碑是死的，水是活的。石头的字，拦不住水的流向。"
            }
          ]
        }
      }
    },
    {
      "id": "trade_route",
      "title": "边境贸易",
      "type": "random",
      "order": 99,
      "requires": null,
      "description": [
        "异域商队请求开放边境互市，带来香料与骏马，也带来陌生的神与陌生的眼睛。",
        "你摩挲着那枚通商印，想：开门，是财路，也是漏洞。"
      ],
      "advice": [
        {
          "philosopher": "laozi",
          "expression": "calm",
          "text": "通商则物通，物通则民富。开市任其往来，不征苛税。自然的流，堵不住。",
          "option": "开市免税，任其往来",
          "effects": {
            "民心": 1,
            "财富": 2,
            "自由": 2,
            "稳定": -1
          }
        },
        {
          "philosopher": "machiavelli",
          "expression": "mock",
          "text": "开门迎客，也开门收税。设关立卡，雁过拔毛。客气归客气，钱要进袋。",
          "option": "设关重税，雁过拔毛",
          "effects": {
            "财富": 3,
            "民心": -1,
            "自由": -2,
            "稳定": 1
          }
        },
        {
          "philosopher": "plato",
          "expression": "serious",
          "text": "贸易能带来财富，也能带来欺骗。开放互市可以，但要定下公正的规矩。不缺斤短两，不以次充好。让外邦人看见，我们不只是买得起，还守得住一个‘信’字。",
          "option": "立公正市规，以信通商",
          "effects": {
            "民心": 1,
            "财富": 1,
            "稳定": 2,
            "自由": 1
          }
        },
        {
          "philosopher": "hobbes",
          "expression": "serious",
          "text": "商队，亦是间谍。限定时地，严加盘查，方保无虞。信任是奢侈品，城门不是。",
          "option": "限时盘查，严控互市",
          "effects": {
            "稳定": 3,
            "财富": 0,
            "自由": -3,
            "民心": -1
          }
        }
      ],
      "results": {
        "0": {
          "text": [
            "市集昼夜不歇，异域奇货云集。",
            "百姓腰包渐鼓，连饭桌都多了几样滋味。"
          ],
          "council": [
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "微微颔首：“通商则物通，物通民富。开市任往来，不征苛税，善。"
            },
            {
              "philosopher": "hobbes",
              "expression": "calm",
              "line": "低声说：“市集昼夜不歇，也意味着耳目昼夜不绝。关防松了。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "耸肩：“不要税，就图个热闹。您可真大方。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "轻叹：“自由是好事，可若无规矩，久了必生乱。"
            }
          ]
        },
        "1": {
          "text": [
            "关税充盈国库，可商队渐少。",
            "嫌税重的，绕道走了。留下的，是更精明的。"
          ],
          "council": [
            {
              "philosopher": "machiavelli",
              "expression": "happy",
              "line": "满意地笑：“雁过拔毛，关税充盈国库。商队绕道？自有更蠢的来。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "摇头：“钱袋满了，市集却冷了。您收的是税，还是商人的心？"
            },
            {
              "philosopher": "hobbes",
              "expression": "happy",
              "line": "点头：“有税总比没税强。穷，才最危险。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "闭眼：“重税之下，货不走，人走。路会越来越窄。"
            }
          ]
        },
        "2": {
          "text": [
            "你派人立下市规，违者罚。",
            "起初商人不惯，后来发现生意反而好做。外邦人愿意来，因为这里不骗人。"
          ],
          "council": [
            {
              "philosopher": "plato",
              "expression": "happy",
              "line": "欣慰地说：“外邦人愿意来，因为这里不骗人。信，比金子还难攒。"
            },
            {
              "philosopher": "hobbes",
              "expression": "mock",
              "line": "哼道：“规矩是好，就怕执行起来打折扣。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "calm",
              "line": "笑：“守信用，有时候也能变成武器。您这是用名声挣钱。"
            },
            {
              "philosopher": "laozi",
              "expression": "happy",
              "line": "点头：“不欺不诈，民自归之。好。"
            }
          ]
        },
        "3": {
          "text": [
            "盘查森严，走私却兴。",
            "秩序是有了，市面却冷清得像冬日的河。"
          ],
          "council": [
            {
              "philosopher": "hobbes",
              "expression": "serious",
              "line": "铁青着脸：“限定时地，严加盘查，方保无虞。秩序不容侥幸。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "轻声说：“盘查越严，货越少。您防住了细作，也防住了生计。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "耸肩：“市面冷清？那就让他们走私去。反正您还能再罚一笔。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "长叹：“用怀疑做成的门，挡住的往往是朋友。"
            }
          ]
        }
      }
    },
    {
      "id": "currency",
      "title": "货币改革",
      "type": "random",
      "order": 99,
      "requires": null,
      "description": [
        "铜钱私铸泛滥，物价乱成一团。财政大臣捧着一摞旧钱请铸新币，统一钱法。",
        "你掂着那枚分量不足的旧钱，心想：钱轻了，民心也跟着钱一起轻了。"
      ],
      "advice": [
        {
          "philosopher": "machiavelli",
          "expression": "mock",
          "text": "旧币换新，暗藏减值。百姓手里的钱，悄悄少了分量。神不知，鬼不觉。",
          "option": "新币减值，暗取民财",
          "effects": {
            "财富": 3,
            "民心": -2,
            "稳定": 1,
            "自由": -1
          }
        },
        {
          "philosopher": "hobbes",
          "expression": "serious",
          "text": "币值，即王权。统一官铸，私铸者死，绝其乱源。钱的法度，不容含糊。",
          "option": "统一官铸，禁绝私铸",
          "effects": {
            "稳定": 3,
            "财富": 1,
            "民心": -1,
            "自由": -2
          }
        },
        {
          "philosopher": "plato",
          "expression": "serious",
          "text": "钱是信物，不是王库的魔术。公铸足值，禁囤积居奇。让每一枚钱都像它自己。人民信了钱，才会信管钱的人。",
          "option": "公铸足值，取信于民",
          "effects": {
            "民心": 2,
            "财富": -1,
            "稳定": 1,
            "自由": 1
          }
        },
        {
          "philosopher": "laozi",
          "expression": "calm",
          "text": "钱之所以乱，是因为心乱。你越急着改，市越慌。先稳下人心，让旧钱再流一阵。待民自安，再慢慢议铸新钱。",
          "option": "暂不改制，先稳人心",
          "effects": {
            "民心": 1,
            "财富": 0,
            "稳定": 0,
            "自由": 1
          }
        }
      ],
      "results": {
        "0": {
          "text": [
            "新钱轻盈，国库却沉了。",
            "百姓捏着轻币，半信半疑。分量，他们掂得出来。"
          ],
          "council": [
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "得意地冷笑：“旧币换新，暗藏减值。百姓手里的钱，悄悄轻了分量。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "长叹：“您用轻币偷走了百姓的信赖。这‘财’，来得不义。"
            },
            {
              "philosopher": "hobbes",
              "expression": "calm",
              "line": "说：“只要能稳住国库，骂就骂。总比饿着士兵强。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "闭眼：“钱轻一分，心冷十分。这账，早晚要还。"
            }
          ]
        },
        "1": {
          "text": [
            "私铸绝迹，市价渐稳。",
            "只是钱法太严，商旅惧罚，连讨价都低了声。"
          ],
          "council": [
            {
              "philosopher": "hobbes",
              "expression": "happy",
              "line": "点头：“私铸者死，币值即王权。乱源已绝，市价渐稳。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "轻声说：“法严则民惧。您镇住了钱，也镇住了气。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "耸肩：“怕死就不敢铸假钱。等他们习惯了，就不会觉得法严。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "皱眉：“秩序有了，可商贾的脖子都缩着。这稳，代价不小。"
            }
          ]
        },
        "2": {
          "text": [
            "足值官钱通行，囤积者被查。",
            "市井称一声“公道”。这声，比金子难得。"
          ],
          "council": [
            {
              "philosopher": "plato",
              "expression": "happy",
              "line": "欣慰地点头：“公铸足值，禁囤积居奇。货币为公益，非为王库。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "calm",
              "line": "摇头：“足值足值，国库却瘪了。理想很美，账本很诚实。"
            },
            {
              "philosopher": "hobbes",
              "expression": "mock",
              "line": "哼道：“钱是真的，可军饷不够怎么办？理想不能当刀使。"
            },
            {
              "philosopher": "laozi",
              "expression": "happy",
              "line": "微笑：“民信则市安。您这‘轻’，轻的是份量，重的是信誉。"
            }
          ]
        },
        "3": {
          "text": [
            "你按兵不动，只让人安抚市面。",
            "过了一阵，乱象竟自己消减了些。"
          ],
          "council": [
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "微微颔首：“先稳人心，再议钱法。您不折腾，市面就少受惊。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "冷笑：“拖着不改，私铸照样混。您这是把脓包盖着。"
            },
            {
              "philosopher": "hobbes",
              "expression": "calm",
              "line": "说：“拖久了，更乱。现在不动，以后动刀子更疼。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "轻叹：“稳是稳了，可问题还在。王座不能一直靠着‘先等等’。"
            }
          ]
        }
      }
    },
    {
      "id": "witch_trial",
      "title": "巫术审判",
      "type": "random",
      "order": 99,
      "requires": null,
      "description": [
        "大旱不愈，有人指称巫婆作祟，跪请王令搜捕，以平民愤。",
        "你望着干裂的河床，想：要平息的，是旱，还是人心里的慌？"
      ],
      "advice": [
        {
          "philosopher": "hobbes",
          "expression": "angry",
          "text": "谣言杀人，更杀人于恐惧。搜捕示众，以安人心。混乱里，最需要的是一根稻草。",
          "option": "搜捕巫者示众",
          "effects": {
            "稳定": 2,
            "民心": 0,
            "自由": -3,
            "财富": 0
          }
        },
        {
          "philosopher": "plato",
          "expression": "serious",
          "text": "找几个老妇人烧死，天就会下雨吗？先把闹得最凶的人带来，问问他可有证据。火把不是雨具，烧人救不了地。",
          "option": "拒绝猎巫，彻查诬告",
          "effects": {
            "民心": 1,
            "自由": 2,
            "稳定": -1,
            "财富": -1
          }
        },
        {
          "philosopher": "laozi",
          "expression": "calm",
          "text": "旱涝有常，何来巫魅。不搜不捕，省下力气抗旱。折腾鬼神，不如掘一口井。",
          "option": "不搜捕，专心抗旱",
          "effects": {
            "民心": 1,
            "财富": 0,
            "自由": 1,
            "稳定": 0
          }
        },
        {
          "philosopher": "machiavelli",
          "expression": "mock",
          "text": "百姓要的不是真相，是出气。抓几个最招人恨的，当众认罪。旱是老天的事，可民愤总得有人接着。别让那火，烧到王宫来。",
          "option": "抓替罪羊，平民愤",
          "effects": {
            "民心": 0,
            "稳定": 2,
            "自由": -2,
            "财富": 0
          }
        }
      ],
      "results": {
        "0": {
          "text": [
            "火光冲天，人心暂安。",
            "可干旱依旧。灰烬里，没有半点雨星。"
          ],
          "council": [
            {
              "philosopher": "hobbes",
              "expression": "happy",
              "line": "点头：“搜捕示众，人心暂安。恐惧，是最快的镇静剂。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "长叹：“火里烧的是无辜者。您用谎言止了恐慌，也烧掉了良知。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "冷笑：“只要您自己不慌，烧几个巫婆算什么。雨，总有一天下。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "闭眼：“烧人若能下雨，天下早无旱了。"
            }
          ]
        },
        "1": {
          "text": [
            "你挡下了火把。",
            "百姓嘟囔，却也无人再敢妄指邻居。那根指头，收回去了。"
          ],
          "council": [
            {
              "philosopher": "plato",
              "expression": "happy",
              "line": "欣慰地说：“您挡下了火把。替罪羊救不了旱情，却会烧毁人心。"
            },
            {
              "philosopher": "hobbes",
              "expression": "mock",
              "line": "冷冷道：“旱还在。百姓要的不只是‘不杀’，是活路。您只挡了一半。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "耸肩：“勇敢是勇敢，可民愤得有人接。您别接不住。"
            },
            {
              "philosopher": "laozi",
              "expression": "happy",
              "line": "微笑：“不冤枉人，已是德。天不因火而雨，因静而应。"
            }
          ]
        },
        "2": {
          "text": [
            "你不动刑，只带人挖井抗旱。",
            "井成之时，天竟落了雨，像是在应和。"
          ],
          "council": [
            {
              "philosopher": "laozi",
              "expression": "happy",
              "line": "微微点头：“不搜不捕，只带人挖井。井成，天竟落了雨。顺天时。"
            },
            {
              "philosopher": "hobbes",
              "expression": "calm",
              "line": "说：“雨是运气。若挖了井还不下呢？你拿什么安人心？"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "挑眉：“运气也是本事。至少井里有水，比火里有人强。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "轻叹：“务实是最好的祭师。您用井，给了城邦一口活气。"
            }
          ]
        },
        "3": {
          "text": [
            "几个倒霉鬼被带走，广场上喊声震天。",
            "旱没解，但你看见，那些喊得最响的人，脸上有一瞬间的空洞。"
          ],
          "council": [
            {
              "philosopher": "machiavelli",
              "expression": "happy",
              "line": "露出精明的笑：“抓几个最招人恨的，当众认罪。民愤有了出口，王宫就凉了。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "声音发冷：“您用无辜的血，给暴民浇火。这不是王，是泥瓦匠。"
            },
            {
              "philosopher": "hobbes",
              "expression": "calm",
              "line": "说：“政权要稳，有时候就得有人被牺牲。您没做错。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "摇头：“替罪者易找，天道难欺。旱不因你杀人而解。"
            }
          ]
        }
      }
    },
    {
      "id": "embassy",
      "title": "外交使团",
      "type": "random",
      "order": 99,
      "requires": null,
      "description": [
        "远邦遣使来朝，礼单厚重，意在结盟，也难说没有刺探虚实的心思。",
        "你看着那队风尘仆仆的使者，想：笑脸背后，是朋友，还是账本？"
      ],
      "advice": [
        {
          "philosopher": "machiavelli",
          "expression": "mock",
          "text": "盛礼相待，暗查虚实。摸清底细，再定亲疏。礼数，是铠甲也是陷阱。",
          "option": "盛礼暗查虚实",
          "effects": {
            "稳定": 1,
            "财富": -1,
            "民心": 0,
            "自由": -1
          }
        },
        {
          "philosopher": "plato",
          "expression": "happy",
          "text": "远来是客，可客也要看见我们是什么样的人。以诚相待，不卑不亢。让他们看见城邦的善与秩序。真正的同盟，靠的不是密探，是信任。",
          "option": "以诚相待，展示善治",
          "effects": {
            "民心": 1,
            "稳定": 1,
            "自由": 1,
            "财富": -1
          }
        },
        {
          "philosopher": "hobbes",
          "expression": "serious",
          "text": "使团，亦是耳目。严密监视，礼毕即送，不使其久留。客，不能住成主人。",
          "option": "监视礼毕即送",
          "effects": {
            "稳定": 2,
            "自由": -2,
            "民心": 0,
            "财富": 0
          }
        },
        {
          "philosopher": "laozi",
          "expression": "calm",
          "text": "来者自来，去者自去。何必如临大敌？你越防，他越要探。坦坦荡荡，反而没什么可看。",
          "option": "不加设防，任其往来",
          "effects": {
            "自由": 2,
            "民心": 0,
            "稳定": -1,
            "财富": 0
          }
        }
      ],
      "results": {
        "0": {
          "text": [
            "宴席奢华，密探却已记下使团每一句醉话。",
            "你笑着举杯，眼底却冷。这笑，是算计过的。"
          ],
          "council": [
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "得意地冷笑：“盛礼相待，暗查虚实。摸清底细，结盟才有底气。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "长叹：“满桌珍馐底下是密探的耳朵。这‘礼’，裹着算计。"
            },
            {
              "philosopher": "hobbes",
              "expression": "happy",
              "line": "点头：“防人之心不可无。你做得对，只是别让他们看出来。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "闭眼：“以伪待客，客亦以伪还之。两假之间，能结什么盟。"
            }
          ]
        },
        "1": {
          "text": [
            "你以诚待使，远邦感念。",
            "岁岁遣使修好，边境的狼烟淡了。"
          ],
          "council": [
            {
              "philosopher": "plato",
              "expression": "happy",
              "line": "欣慰地说：“以诚待客，远邦感念。这才是城邦该有的气度。"
            },
            {
              "philosopher": "hobbes",
              "expression": "mock",
              "line": "冷冷道：“你给他们看了善，也给他们看了底。下次来的是商队还是军队，谁知道。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "耸肩：“天真，但也许有用。至少今晚他们不会拔刀。"
            },
            {
              "philosopher": "laozi",
              "expression": "happy",
              "line": "微笑：“真者，不设防而人自不害。"
            }
          ]
        },
        "2": {
          "text": [
            "使团被看得紧，匆匆离去。",
            "平安，却也疏淡。情谊，一并被送走了。"
          ],
          "council": [
            {
              "philosopher": "hobbes",
              "expression": "happy",
              "line": "点头：“严密监视，礼毕即送。使团是耳目，不可久留。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "calm",
              "line": "笑：“看得紧、送得快。平安是平安，只是情谊也一并送走了。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "轻叹：“您防住了细作，也错过了朋友。邦交，有时也是一场豪赌。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "闭眼：“送客如送风，莫留尘埃。"
            }
          ]
        },
        "3": {
          "text": [
            "你只派了礼官相迎，其余一概不问。",
            "使团住了几日，自己走了。没少什么，也没多什么。"
          ],
          "council": [
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "微微颔首：“来者自去，了无痕迹。你若不把他当贼，他便不好下手。"
            },
            {
              "philosopher": "hobbes",
              "expression": "mock",
              "line": "冷哼：“这次没出事，是运气。下次若他们在城里画了地图，你连哭都晚了。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "挑眉：“不花钱也不费力，倒显得您从容。不过，该看的还是得看。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "轻叹：“坦荡是好，可国家不是独居的哲人。总要有人替您盯着暗处。"
            }
          ]
        }
      }
    },
    {
      "id": "census",
      "title": "户籍普查",
      "type": "random",
      "order": 99,
      "requires": null,
      "description": [
        "人口流散，赋税无据。大臣请行户籍普查，厘清民数。",
        "可清查，也是一把双刃的尺。",
        "你望着那本糊涂的户籍册，想：数清了民，是治，还是缠？"
      ],
      "advice": [
        {
          "philosopher": "hobbes",
          "expression": "serious",
          "text": "知民方能治民。逐户登记，编入什伍，秩序自明。看不见的，才最危险。",
          "option": "编户什伍，严加管控",
          "effects": {
            "稳定": 3,
            "自由": -3,
            "民心": -1,
            "财富": 0
          }
        },
        {
          "philosopher": "plato",
          "expression": "serious",
          "text": "户籍，为公器。清册公示，使各得其所，正义可见。暗箱里，长不出公正。",
          "option": "清册公示，公开透明",
          "effects": {
            "民心": 1,
            "稳定": 1,
            "自由": 2,
            "财富": -1
          }
        },
        {
          "philosopher": "laozi",
          "expression": "calm",
          "text": "多一事不如少一事。任民自徙，不必穷究。糊涂些，反倒自在。",
          "option": "不究流散，任民自徙",
          "effects": {
            "自由": 2,
            "稳定": -1,
            "民心": 0,
            "财富": 0
          }
        },
        {
          "philosopher": "machiavelli",
          "expression": "mock",
          "text": "借着普查，把逃税的人一个个揪出来。顺便看看谁家藏了壮丁。账册越清楚，您的刀越稳。",
          "option": "借普查清税清丁",
          "effects": {
            "财富": 2,
            "稳定": 1,
            "民心": -2,
            "自由": -2
          }
        }
      ],
      "results": {
        "0": {
          "text": [
            "什伍相连，民数尽知。",
            "征税有据，却也少了流动。人，被钉进了格子。"
          ],
          "council": [
            {
              "philosopher": "hobbes",
              "expression": "happy",
              "line": "满意地点头：“逐户登记，编入什伍。知民方能治民，秩序自明。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "轻声说：“把人钉进格子，您数清了民数，也数丢了自由。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "calm",
              "line": "笑：“有了名册，往后抓谁都不难。这刀柄，更顺手了。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "皱眉：“名册是工具。若只用来管人，终会变成枷锁。"
            }
          ]
        },
        "1": {
          "text": [
            "清册公示于众，谁多谁少一目了然。",
            "公道在目。这目，比任何朱批都亮。"
          ],
          "council": [
            {
              "philosopher": "plato",
              "expression": "happy",
              "line": "欣慰地说：“清册公示，使各得其所。正义可见，暗箱便无用。"
            },
            {
              "philosopher": "hobbes",
              "expression": "mock",
              "line": "哼道：“公示？你连底都给人看了。往后谁还怕你。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "耸肩：“透明好，出了事，谁也赖不掉。不过您自己的账，也得经看。"
            },
            {
              "philosopher": "laozi",
              "expression": "happy",
              "line": "点头：“阳光下的册子，灰尘少。"
            }
          ]
        },
        "2": {
          "text": [
            "你未强查，百姓自由迁徙。",
            "市井活了，账册却糊涂。糊涂，有时也是种宽容。"
          ],
          "council": [
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "微微颔首：“任民自徙，不必穷究。市井活了，账册糊涂些无妨。"
            },
            {
              "philosopher": "machiavelli",
              "expression": "mock",
              "line": "冷笑：“账册糊涂，才好动手脚。您这‘不究’，倒便宜了能吏。"
            },
            {
              "philosopher": "hobbes",
              "expression": "calm",
              "line": "说：“税都不知从何收。等国库空了，你再想去查，人都跑光了。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "轻叹：“自由可贵，可城邦若无人口与财赋，如何守住这份自由。"
            }
          ]
        },
        "3": {
          "text": [
            "税吏趁机揪出不少隐匿户。",
            "国库多了一笔，可巷子里的骂声，直到半夜才散。"
          ],
          "council": [
            {
              "philosopher": "machiavelli",
              "expression": "happy",
              "line": "得意地笑：“借着普查，把逃税的人一个个揪出来。账册越清楚，刀越稳。"
            },
            {
              "philosopher": "plato",
              "expression": "calm",
              "line": "长叹：“您把普查变成了搜捕。民不是敌，是邦本。"
            },
            {
              "philosopher": "hobbes",
              "expression": "happy",
              "line": "点头：“税是国家的血。该清的，就得清。"
            },
            {
              "philosopher": "laozi",
              "expression": "calm",
              "line": "闭眼：“清得过头，民如惊鸟。下次再查，更藏得深。"
            }
          ]
        }
      }
    }
  ],
  "endings": [
    {
      "id": "people_overthrow",
      "name": "人民推翻哲人王",
      "priority": 1000,
      "condition": {
        "stats": {
          "民心": {
            "max": 30
          }
        },
        "behavior": null
      },
      "description": "民心归零，愤怒的民众涌入王宫。你提着袍角，从后门仓皇离去——哲人王，终究没能哲人到底。"
    },
    {
      "id": "civil_war",
      "name": "城邦陷入内战",
      "priority": 1000,
      "condition": {
        "stats": {
          "稳定": {
            "max": 42
          }
        },
        "behavior": null
      },
      "description": "秩序崩塌，派系拔刀相向。你坐在空荡的王座上，听见城外此起彼伏的喊杀声。"
    },
    {
      "id": "utopia",
      "name": "狂欢之城",
      "priority": 1000,
      "condition": {
        "stats": {
          "自由": {
            "min": 68
          }
        },
        "behavior": null
      },
      "description": "自由满溢到极致，每个人都是自己的王。城邦像一场永不落幕的狂欢。"
    },
    {
      "id": "absolute_order",
      "name": "绝对秩序",
      "priority": 1000,
      "condition": {
        "stats": {
          "稳定": {
            "min": 74
          }
        },
        "behavior": null
      },
      "description": "秩序臻于极致，连风都按规矩吹。没有叛乱，也没有意外——更没有惊喜。"
    },
    {
      "id": "wealth_ruin",
      "name": "国库破产",
      "priority": 1000,
      "condition": {
        "stats": {
          "财富": {
            "max": 30
          }
        },
        "behavior": null
      },
      "description": "国库早已空得能跑过老鼠。军饷发不出，商队绕道而行，最后一座青铜祭器也被熔了抵债。你坐在堆满空账簿的王座上，听见城下第一个市集悄悄落了闸。"
    },
    {
      "id": "golden_cage",
      "name": "黄金囚笼",
      "priority": 1000,
      "condition": {
        "stats": {
          "财富": {
            "min": 62
          }
        },
        "behavior": null
      },
      "description": "财富堆到极致，城邦的每一寸地面都闪着金光。你坐拥天下最厚的库藏，却再分不清——跪在你脚下的，是臣民，还是标了价的人。"
    },
    {
      "id": "wuwei",
      "name": "无为而治",
      "priority": 110,
      "condition": {
        "stats": {
          "民心": {
            "min": 40
          },
          "财富": {
            "min": 40
          },
          "稳定": {
            "min": 40
          },
          "自由": {
            "min": 40
          }
        },
        "behavior": {
          "philosopher": "laozi",
          "count": 5
        }
      },
      "description": "你一次次选择顺应自然，城邦竟在『不折腾』中安稳度日。老子在投影里微微一笑：善。"
    },
    {
      "id": "machiavelli_win",
      "name": "马基雅维利式的胜利",
      "priority": 110,
      "condition": {
        "stats": {
          "稳定": {
            "min": 70
          }
        },
        "behavior": {
          "philosopher": "machiavelli",
          "count": 5
        }
      },
      "description": "你五次采纳了他的权谋。目的确实证明了手段——至少，你还在王座上。"
    },
    {
      "id": "confucian_harmony",
      "name": "礼乐之治",
      "priority": 108,
      "condition": {
        "stats": {
          "民心": {
            "min": 68
          },
          "稳定": {
            "min": 62
          },
          "自由": {
            "min": 45
          },
          "财富": {
            "min": 45
          }
        },
        "behavior": {
          "philosopher": "confucius",
          "count": 4
        }
      },
      "description": "你以仁心行礼治，城邦路不拾遗、老安少怀。孔子抚须颔首：斯可谓小康矣。"
    },
    {
      "id": "platonist_republic",
      "name": "哲人共和国",
      "priority": 108,
      "condition": {
        "stats": {
          "民心": {
            "min": 62
          },
          "稳定": {
            "min": 58
          },
          "自由": {
            "min": 62
          },
          "财富": {
            "min": 52
          }
        },
        "behavior": {
          "philosopher": "plato",
          "count": 4
        }
      },
      "description": "哲人执掌公器，正义与自由并行。柏拉图在投影中难得地露出骄傲的神色。"
    },
    {
      "id": "hobbes_leviathan",
      "name": "利维坦铁壁",
      "priority": 108,
      "condition": {
        "stats": {
          "稳定": {
            "min": 78
          },
          "自由": {
            "max": 35
          },
          "民心": {
            "min": 42
          }
        },
        "behavior": {
          "philosopher": "hobbes",
          "count": 4
        }
      },
      "description": "你筑起坚不可摧的秩序之墙，外敌与内乱皆不能撼。霍布斯低声：这，才是利维坦。"
    },
    {
      "id": "rousseau_liberte",
      "name": "自由之子",
      "priority": 108,
      "condition": {
        "stats": {
          "自由": {
            "min": 72
          },
          "民心": {
            "min": 58
          },
          "稳定": {
            "min": 35
          }
        },
        "behavior": {
          "philosopher": "rousseau",
          "count": 4
        }
      },
      "description": "你让人民做了自己的主人，城邦处处是自发的热情。卢梭眼含热泪：公意，终究胜利了。"
    },
    {
      "id": "ideal_king",
      "name": "理想哲人王",
      "priority": 100,
      "condition": {
        "stats": {
          "民心": {
            "min": 70
          },
          "稳定": {
            "min": 70
          },
          "自由": {
            "min": 60
          },
          "财富": {
            "min": 50
          }
        },
        "behavior": null
      },
      "description": "民心所向，秩序井然，自由而生生不息。你的城邦，成了邻国口中的理想国典范。"
    },
    {
      "id": "utopia_normal",
      "name": "乌托邦",
      "priority": 95,
      "condition": {
        "stats": {
          "自由": {
            "min": 90
          },
          "民心": {
            "min": 70
          },
          "财富": {
            "min": 60
          }
        },
        "behavior": null
      },
      "description": "极度的自由裹着繁荣，城邦像一首人人即兴的诗。只是，没人知道下一句往哪写。"
    },
    {
      "id": "philosopher_tyrant",
      "name": "哲人暴君",
      "priority": 90,
      "condition": {
        "stats": {
          "稳定": {
            "min": 80
          },
          "自由": {
            "max": 30
          },
          "民心": {
            "max": 40
          }
        },
        "behavior": null
      },
      "description": "你在铁序中稳坐王座，可人民活在恐惧里。史书会争论：这究竟是治理，还是驯服。"
    },
    {
      "id": "chaotic_democracy",
      "name": "失控的民主",
      "priority": 85,
      "condition": {
        "stats": {
          "自由": {
            "min": 90
          },
          "稳定": {
            "max": 40
          },
          "民心": {
            "min": 60
          }
        },
        "behavior": null
      },
        "description": "自由泛滥成灾，议事厅日夜喧哗。秩序崩了，可每个人都在理直气壮地争吵。"
      },
      {
      "id": "theocracy",
      "name": "神权秩序",
      "priority": 75,
      "condition": {
        "stats": {
          "稳定": {
            "min": 75
          },
          "民心": {
            "min": 55
          },
          "自由": {
            "max": 45
          },
          "财富": {
            "min": 40
          }
        },
        "behavior": null
      },
      "description": "神庙的钟声统摄一切，祭司与君王同坐高位。城邦安宁而虔诚，异见则藏于暗处。"
    },
    {
      "id": "merchant_republic",
      "name": "商业共和",
      "priority": 70,
      "condition": {
        "stats": {
        "财富": {
          "min": 55
        },
        "自由": {
          "min": 58
        },
        "民心": {
          "min": 45
        }
        },
        "behavior": null
      },
      "description": "市集昼夜不息，商旅与思潮一同涌动。你的城邦，成了地中海最富庶的自由港。"
    },
    {
      "id": "total_war",
      "name": "穷兵黩武",
      "priority": 65,
      "condition": {
        "stats": {
          "稳定": {
            "min": 75
          },
          "财富": {
            "max": 35
          },
          "民心": {
            "max": 55
          }
        },
        "behavior": null
      },
      "description": "铁甲常备，烽烟不绝。你赢了每一场战争，却把城邦打成了空壳。"
    },
    {
      "id": "golden_mean",
      "name": "中庸之道",
      "priority": 15,
      "condition": {
        "stats": {
          "民心": {
            "min": 45,
            "max": 65
          },
          "财富": {
            "min": 45,
            "max": 65
          },
          "稳定": {
            "min": 45,
            "max": 65
          },
          "自由": {
            "min": 45,
            "max": 65
          }
        },
        "behavior": null
      },
      "description": "不偏不倚，四者皆稳。没有惊天动地，却有细水长流。百姓说：这样的王，最让人安心。"
    },
    {
      "id": "mediocre",
      "name": "平庸之治",
      "priority": 0,
      "condition": null,
      "description": "不算英明，也不算昏庸。城邦不功不过地延续着，像大多数日子一样。"
    }
  ],
  "achievements": [
    {
      "id": "first_council",
      "name": "首次倾听哲人议会",
      "type": "process",
      "trigger": {
        "event": "complete_event"
      },
      "description": "完成第一个事件。"
    },
    {
      "id": "iron_fist",
      "name": "铁腕统治",
      "type": "process",
      "trigger": {
        "behavior": {
          "philosopher": "hobbes",
          "count": 5
        }
      },
      "description": "一局中选择霍布斯思想 5 次。"
    },
    {
      "id": "free_wind",
      "name": "自由之风",
      "type": "process",
      "trigger": {
        "behavior": {
          "philosopher": "rousseau",
          "count": 5
        }
      },
      "description": "一局中选择卢梭思想 5 次。"
    },
    {
      "id": "fickle",
      "name": "反复无常",
      "type": "process",
      "trigger": {
        "behavior": {
          "streak": 3
        }
      },
      "description": "同一局中连续三次选择不同哲学家的建议。"
    },
    {
      "id": "polymath",
      "name": "博学多闻",
      "type": "process",
      "trigger": {
        "behavior": {
          "viewedAll": true
        }
      },
      "description": "查看过所有已解锁哲学家的简介。"
    },
    {
      "id": "virtuous_rule",
      "name": "仁政德治",
      "type": "process",
      "trigger": {
        "behavior": {
          "philosopher": "confucius",
          "count": 3
        }
      },
      "description": "一局中选择孔子思想 3 次。"
    },
    {
      "id": "six_sages",
      "name": "六哲齐聚",
      "type": "process",
      "trigger": {
        "behavior": {
          "allUnlocked": true
        }
      },
      "description": "解锁全部六位哲人。"
    }
  ]
};
