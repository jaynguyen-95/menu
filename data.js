/* Vegas Club – Menu data (local catalogue).
   Live mode: the order system returns ids, availability and (optionally) prices;
   names, translations, icons and images below are merged in by id.
   Langs: vi · en · ko · zh · ja */
window.MENU_DATA = (function () {
  const TIERS = ['P', 'I', 'I+', 'V', 'V+', 'V SIG', 'ONE', 'ONE+', 'ONE SIG', 'EC'];

  // Menu categories, in display order. minTier = index into TIERS.
  const CATEGORIES = [
    { id: 'vip',     minTier: 6, icon: 'crown',  name: { vi: 'VIP', en: 'VIP', ko: 'VIP', zh: 'VIP', ja: 'VIP' } },
    { id: 'club',    minTier: 1, icon: 'bowl',   name: { vi: 'Club', en: 'Club', ko: '클럽', zh: '会所', ja: 'クラブ' } },
    { id: 'snack',   minTier: 0, icon: 'snack',  name: { vi: 'Ăn nhẹ', en: 'Snack', ko: '스낵', zh: '小食', ja: 'スナック' } },
    { id: 'outside', minTier: 6, icon: 'store',  name: { vi: 'Nhà hàng ngoài', en: 'Outside restaurant', ko: '외부 레스토랑', zh: '外部餐厅', ja: '外部レストラン' } },
    { id: 'wine',    minTier: 3, icon: 'wine',   name: { vi: 'Rượu vang', en: 'Wine', ko: '와인', zh: '葡萄酒', ja: 'ワイン' } },
    { id: 'drinks',  minTier: 0, icon: 'cup',    name: { vi: 'Đồ uống', en: 'Drinks', ko: '음료', zh: '饮品', ja: 'ドリンク' } },
    { id: 'liquor',  minTier: 6, icon: 'liquor', name: { vi: 'Rượu mạnh', en: 'Liquors', ko: '양주', zh: '烈酒', ja: 'リカー' } }
  ];

  // Shorthand item builder: n = [vi, en, ko, zh, ja], d = same for description
  const L = (a) => ({ vi: a[0], en: a[1], ko: a[2], zh: a[3], ja: a[4] });
  const item = (id, cat, n, d, tags, extra) => Object.assign({ id, cat, img: id, name: L(n), desc: d ? L(d) : null, tags: tags || [] }, extra || {});

  const ITEMS = [
    /* ---------------- VIP ---------------- */
    item('vip-kagoshima-japanese-wagyu', 'vip', ['Bò Wagyu Kagoshima', 'Kagoshima Japanese Wagyu', '가고시마 와규', '鹿儿岛和牛', '鹿児島和牛'], ['Thăn bò Wagyu Nhật nướng, vân mỡ mềm tan', 'Seared Japanese Wagyu with rich, melting marbling', '마블링이 풍부한 일본산 와규 구이', '入口即化的日本和牛', 'とろける霜降りの鹿児島和牛'], ['beef']),
    item('vip-nha-trang-lobster', 'vip', ['Tôm hùm Nha Trang', 'Nha Trang Lobster', '나트랑 랍스터', '芽庄龙虾', 'ニャチャン産ロブスター'], ['Tôm hùm tươi Nha Trang chế biến theo yêu cầu', 'Fresh Nha Trang lobster, cooked to your liking', '신선한 나트랑 랍스터, 원하시는 방식으로 조리', '新鲜芽庄龙虾，按您喜好烹制', '新鮮なニャチャン産ロブスターをお好みの調理で'], ['shellfish']),
    item('vip-seared-hokkaido-scallop-foie-gras', 'vip', ['Sò điệp Hokkaido áp chảo & gan ngỗng', 'Seared Hokkaido Scallop & Foie Gras', '홋카이도 관자 & 푸아그라', '香煎北海道带子配鹅肝', '北海道帆立とフォアグラのソテー'], null, ['shellfish', 'dairy']),
    item('vip-beef-tenderloin-grilled-tiger-prawn', 'vip', ['Thăn bò & tôm sú nướng', 'Beef Tenderloin & Grilled Tiger Prawn', '소안심 & 타이거새우 구이', '牛里脊配烤虎虾', '牛ヒレと車海老のグリル'], null, ['beef', 'shellfish', 'dairy']),
    item('vip-black-garlic-sesame-toothfish', 'vip', ['Cá tuyết sốt tỏi đen mè', 'Black Garlic Sesame Toothfish', '흑마늘 참깨 메로구이', '黑蒜芝麻银鳕鱼', '黒にんにく胡麻のメロ焼き'], null, ['fish', 'soy', 'nuts']),
    item('vip-xo-wok-fried-hokkaido-scallop', 'vip', ['Sò điệp Hokkaido xào sốt XO', 'XO Wok-Fried Hokkaido Scallop', 'XO 홋카이도 관자 볶음', 'XO酱爆炒北海道带子', '北海道帆立のXO醤炒め'], ['Kèm cơm trắng và canh', 'Served with steamed rice and soup', '공깃밥과 국이 함께 제공됩니다', '配白饭及汤', 'ご飯とスープ付き'], ['shellfish', 'soy'], { spicy: 1 }),
    item('vip-hong-kong-sweet-sour-grouper-fish', 'vip', ['Cá mú sốt chua ngọt kiểu Hồng Kông', 'Hong Kong Sweet & Sour Grouper Fish', '홍콩식 탕수 우럭바리', '港式糖醋石斑鱼', '香港式ハタの甘酢あんかけ'], ['Kèm cơm trắng và canh', 'Served with steamed rice and soup', '공깃밥과 국이 함께 제공됩니다', '配白饭及汤', 'ご飯とスープ付き'], ['fish', 'gluten']),
    item('vip-hk', 'vip', ['Cơm sườn Iberico đút lò kiểu Hồng Kông', 'Hong Kong Style Baked Iberico Pork Chop with Rice', '홍콩식 이베리코 포크찹 오븐 라이스', '港式焗伊比利亚猪扒饭', '香港式イベリコポークチョップのオーブンライス'], null, ['pork', 'dairy', 'egg']),
    item('vip-iberico-pork-rack', 'vip', ['Sườn cốt lết heo Iberico', 'Iberico Pork Rack', '이베리코 포크랙', '伊比利亚猪肋排', 'イベリコ豚のラック'], null, ['pork']),
    item('vip-honey-siracha-black-angus-beef-flap-meat', 'vip', ['Bò Black Angus sốt mật ong sriracha', 'Honey Sriracha Black Angus Beef Flap Meat', '허니 스리라차 블랙앵거스 소고기', '蜂蜜是拉差酱安格斯牛腹肉', 'ハニーシラチャ ブラックアンガスビーフ'], null, ['beef'], { spicy: 1 }),
    item('vip-marinated-boneless-chicken-leg', 'vip', ['Đùi gà rút xương tẩm ướp', 'Marinated Boneless Chicken Leg', '양념 순살 닭다리구이', '腌制去骨鸡腿', '骨なし鶏ももの漬け焼き'], null, ['chicken', 'soy']),
    item('vip-double-boiled-nutritious-soup', 'vip', ['Súp tiềm bổ dưỡng', 'Double Boiled Nutritious Soup', '보양 중탕 수프', '炖盅滋补汤', '薬膳蒸しスープ'], null, ['chicken', 'mushroom']),
    item('vip-tooth-fish-congee-with-fresh-lotus-seed-mung-bean', 'vip', ['Cháo cá tuyết hạt sen đậu xanh', 'Toothfish Congee with Fresh Lotus Seed & Mung Bean', '연자·녹두 메로죽', '莲子绿豆银鳕鱼粥', 'メロと蓮の実・緑豆のお粥'], null, ['fish']),
    item('vip-xo-fried-rice', 'vip', ['Cơm chiên XO', 'XO Fried Rice', 'XO 볶음밥', 'XO酱炒饭', 'XO醤チャーハン'], ['Cơm chiên tôm trong thố đá nóng', 'Prawn fried rice in a hot stone bowl', '뜨거운 돌솥에 담은 새우 볶음밥', '石锅虾仁炒饭', '石鍋で供する海老チャーハン'], ['shellfish', 'egg'], { spicy: 1 }),
    item('vip-kimchi-beef-fried-rice', 'vip', ['Cơm chiên kim chi bò', 'Kimchi Beef Fried Rice', '김치 소고기 볶음밥', '泡菜牛肉炒饭', 'キムチ牛肉チャーハン'], null, ['beef', 'egg'], { spicy: 1 }),
    item('vip-nasi-goreng', 'vip', ['Cơm chiên Nasi Goreng', 'Nasi Goreng', '나시고렝', '印尼炒饭', 'ナシゴレン'], null, ['chicken', 'shellfish', 'egg'], { spicy: 1 }),
    item('vip-wok-fried-egg-noodles-with-seafood', 'vip', ['Mì trứng xào hải sản', 'Wok-Fried Egg Noodles with Seafood', '해산물 에그누들 볶음', '海鲜炒蛋面', '海鮮焼きそば'], null, ['shellfish', 'egg', 'gluten']),
    item('vip-spicy-linguine-pasta-with-tiger-prawn', 'vip', ['Mì linguine tôm sú cay', 'Spicy Linguine Pasta with Tiger Prawn', '타이거새우 매운 링귀니', '虎虾香辣意面', '車海老のスパイシーリングイネ'], null, ['shellfish', 'gluten'], { spicy: 2 }),
    item('vip-miso-potato-gnocchi-with-cremini-mushroom', 'vip', ['Gnocchi khoai tây sốt miso & nấm nâu', 'Miso Potato Gnocchi with Cremini Mushroom', '미소 감자 뇨끼와 크리미니 버섯', '味噌土豆团子配褐菇', '味噌ポテトニョッキ ブラウンマッシュルーム'], null, ['veg', 'mushroom', 'dairy', 'gluten', 'soy']),
    item('vip-banh-mi-bbq-pork-char-siu', 'vip', ['Bánh mì xá xíu', 'Banh Mi BBQ Pork Char Siu', '차슈 반미', '叉烧越南法棍', 'チャーシューのバインミー'], ['Kèm khoai tây chiên', 'Served with French fries', '감자튀김이 함께 제공됩니다', '配薯条', 'フライドポテト付き'], ['pork', 'gluten']),
    item('vip-vietnamese-bbq-pork-skewer-and-fresh-rice-noodle-sheets', 'vip', ['Heo Iberico xiên nướng & bánh ướt', 'Iberico Pork Skewer', '이베리코 돼지꼬치', '伊比利亚猪肉串', 'イベリコ豚の串焼き'], ['Ăn kèm bánh ướt và rau sống', 'Vietnamese BBQ pork skewer with fresh rice noodle sheets', '베트남식 돼지꼬치와 생 라이스페이퍼', '越南烤猪肉串配鲜粉皮', 'ベトナム風豚串と生ライスシート'], ['pork']),
    item('vip-vietnamese-chao-tom', 'vip', ['Chạo tôm', 'Vietnamese Chao Tom', '베트남식 사탕수수 새우', '越南甘蔗虾', 'チャオトム（さとうきび海老）'], null, ['shellfish']),
    item('vip-grilled-chicken-satay', 'vip', ['Sa tế gà nướng', 'Grilled Chicken Satay', '치킨 사테', '沙爹烤鸡串', 'チキンサテ'], ['Kèm sốt đậu phộng', 'With peanut sauce', '땅콩 소스 곁들임', '配花生酱', 'ピーナッツソース添え'], ['chicken', 'nuts']),
    item('vip-fried-chicken-soft-bones', 'vip', ['Sụn gà chiên', 'Fried Chicken Soft Bones', '닭 연골 튀김', '椒盐鸡软骨', '鶏軟骨の唐揚げ'], null, ['chicken', 'gluten'], { spicy: 1 }),

    /* ---------------- CLUB ---------------- */
    // Korean
    item('club-k1', 'club', ['Canh sườn bò Galbitang', 'Galbi Tang', '갈비탕', '牛排骨汤', 'カルビタン'], ['Sườn bò hầm lâu trong nước dùng thanh ngọt', 'Large chunks of short ribs deliciously boiled in soup', '오랜 시간 끓여낸 육수에 부드러운 갈비', '大块的排骨在汤中煮熟', '長時間煮込んだスープと柔らかいカルビ'], ['beef']),
    item('club-k2', 'club', ['Cơm trộn Bibimbap', 'Bibimbap', '비빔밥', '韩国拌饭', 'ビビンバ'], ['Cơm, rau trộn và thịt ướp trong thố đá nóng', 'Rice, vegetables and marinated meat in a sizzling stone pot', '뜨끈한 돌솥에 밥과 나물, 조린 고기', '米饭、蔬菜与腌肉盛于铁板烧锅', '熱々の石鍋にご飯、ナムル、味付け肉'], ['beef', 'egg', 'soy'], { spicy: 1 }),
    item('club-k3', 'club', ['Thịt heo xào cay Jeyuk', 'Jeyuk Bokkeum', '제육볶음', '韩式辣炒猪肉', 'チェユクポックム（豚肉の辛味炒め）'], ['Ba chỉ nướng than xào sốt BBQ cay', 'Fire-grilled samgyeopsal stir-fried in spicy barbecue sauce', '직화로 구운 삼겹살을 매콤한 바비큐 소스에', '炭烤五花肉配香辣烧烤酱', '直火焼きサムギョプサルを辛いBBQソースで'], ['pork', 'soy'], { spicy: 1 }),
    item('club-k4', 'club', ['Lẩu bulgogi bò', 'So Bulgogi Jjigae', '소불고기 찌개', '牛肉烤肉锅', 'プルコギチゲ'], ['Bulgogi bò, trứng, miến và rau', 'Bulgogi stew with egg, vegetables and glass noodles', '불고기, 계란, 당면과 야채', '牛肉、鸡蛋、粉丝与蔬菜', 'プルコギ、卵、春雨と野菜'], ['beef', 'egg', 'soy']),
    item('club-k5', 'club', ['Canh đuôi bò hầm', 'Ggori Gom Tang', '꼬리곰탕', '牛尾汤', 'コリコムタン（テールスープ）'], ['Đuôi bò hầm trong nước xương bò', 'Oxtail simmered in long-boiled beef bone broth', '사골 육수에 소꼬리를 넣고 끓인 탕', '牛骨汤炖牛尾', '牛骨スープで煮込んだテール'], ['beef']),
    item('club-k6', 'club', ['Canh rong biển bò', 'Sogogi Miyeokguk', '소고기미역국', '牛肉海带汤', '牛肉わかめスープ'], ['Rong biển tươi nấu cùng thịt bò', 'Fresh seaweed and beef in a rich broth', '신선한 미역과 소고기로 끓인 국', '新鲜海带和牛肉煮成的浓汤', '新鮮なわかめと牛肉のスープ'], ['beef']),
    item('club-k7', 'club', ['Lẩu kim chi', 'Kimchi Jjigae', '김치찌개', '泡菜汤', 'キムチチゲ'], ['Kim chi lên men kỹ và thịt heo', 'Spicy stew with well-fermented kimchi and pork', '잘 익은 김치와 돼지고기', '辣炖泡菜和猪肉', '熟成キムチと豚肉の辛い鍋'], ['pork', 'soy'], { spicy: 1 }),
    item('club-k8', 'club', ['Bạch tuộc xào cay', 'Nakji Bokkeum', '낙지볶음', '香辣炒章鱼', 'ナクチポックム（タコの辛味炒め）'], ['Bạch tuộc nhỏ xào rau sốt cay', 'Stir-fried baby octopus with vegetables', '매콤한 양념의 낙지 야채 볶음', '小章鱼炒蔬菜', '手長ダコと野菜の炒め'], ['shellfish'], { spicy: 2 }),
    item('club-k9', 'club', ['Canh giải rượu Yangpyeong', 'Yangpyeong Haejangguk', '양평 해장국', '杨平解酒汤', 'ヤンピョン・ヘジャンクク'], ['Canh cay với tiết bò', 'Spicy hangover soup with beef blood curd', '선지를 넣고 끓인 얼큰한 해장국', '牛血辣汤', '牛の血の塊入りピリ辛スープ'], ['beef'], { spicy: 1 }),
    item('club-k10', 'club', ['Mì tương đen Jjajangmyeon', 'Jjajangmyeon', '짜장면', '韩式炸酱面', 'ジャージャー麺'], ['Mì trộn sốt tương đen, thịt heo và rau', 'Noodles with stir-fried vegetables and black soybean sauce', '돼지고기와 야채를 춘장에 볶아 비벼 먹는 면', '炸酱、猪肉与蔬菜拌面', '豚肉と野菜の黒味噌和え麺'], ['pork', 'gluten', 'soy']),
    item('club-k11', 'club', ['Mì hải sản cay Jjamppong', 'Jjamppong', '짬뽕', '韩式海鲜辣汤面', 'チャンポン'], ['Mì nước cay với hải sản và thịt heo', 'Noodles with vegetables, pork, clam and squid in spicy broth', '오징어, 모시 조개와 돼지고기 얼큰한 국물', '蔬菜、猪肉、蛤蜊和鱿鱼辣汤面', 'イカ、アサリ、豚肉の辛いスープ麺'], ['pork', 'shellfish', 'gluten'], { spicy: 3 }),
    item('club-k12', 'club', ['Heo chiên sốt chua ngọt', 'Tangsuyuk', '탕수육', '糖醋炸猪肉', 'タンスユク（韓国式酢豚）'], ['Thịt heo chiên giòn với sốt chua ngọt và rau', 'Deep-fried pork with vegetables in sweet and sour sauce', '바삭하게 튀긴 돼지고기와 새콤달콤 소스', '美味的油炸猪肉配糖醋酱', 'カリッと揚げた豚肉と甘酢あん'], ['pork', 'gluten']),
    item('club-k13', 'club', ['Bánh xếp kim chi', 'Kimchi Dumpling', '김치만두', '泡菜饺子', 'キムチ餃子'], ['Bánh xếp kim chi làm thủ công', 'Korean handmade kimchi dumplings', '손으로 직접 빚은 김치만두', '手工泡菜饺子', '手作りキムチ餃子'], ['pork', 'gluten']),
    item('club-k14', 'club', ['Ba chỉ heo nướng nguyên miếng', 'Tong Samgyeopsal', '통삼겹살', '整块五花肉', 'トンサムギョプサル（塊焼き）'], ['Nướng lò, giòn ngoài mềm trong', 'Oven-baked pork belly, crispy outside and moist inside', '겉은 바삭하고 속은 촉촉한 통삼겹살', '外酥里嫩的烤五花肉', '外はカリッと中はしっとり'], ['pork'], { spicy: 1 }),
    item('club-k15', 'club', ['Canh gân bò Dogani', 'Dogani Tang', '도가니탕', '牛膝骨汤', 'トガニタン（牛膝スープ）'], ['Gân khuỷu bò hầm trong nước xương', 'Ox knee simmered in beef bone broth', '사골 육수에 도가니를 넣고 끓인 탕', '牛骨汤中加入牛膝骨', '牛骨スープで煮込んだ牛膝'], ['beef']),
    item('club-k16', 'club', ['Cơm canh bò cay', 'Sogogi Gukbap', '소고기 국밥', '辣牛肉汤饭', 'ソゴギクッパ（牛肉スープご飯）'], ['Canh bò cay nhẹ ăn kèm cơm', 'Mildly spicy beef soup with rice', '사골 육수에 소고기를 넣은 국밥', '牛骨汤加牛肉的汤饭', '牛肉入りピリ辛クッパ'], ['beef'], { spicy: 1 }),
    item('club-k17', 'club', ['Cơm canh heo', 'Dwaeji Gukbap', '돼지국밥', '猪肉汤饭', 'テジクッパ（豚スープご飯）'], ['Canh xương heo với thịt và lòng heo', 'Pork bone soup with boiled pork and intestines', '돼지 뼈 육수에 수육과 내장', '猪骨汤配猪肉和猪肚', '豚骨スープに豚肉とホルモン'], ['pork']),
    item('club-k18', 'club', ['Canh cá minh thái khô', 'Hwangtae Haejangguk', '황태해장국', '干明太鱼汤', 'ファンテヘジャンクク'], ['Canh cá minh thái khô nấu rau', 'Dried pollack soup with vegetables', '황태와 각종 채소로 끓인 시원한 국', '干明太鱼和蔬菜清汤', '干しスケトウダラと野菜のスープ'], ['fish', 'egg']),
    item('club-k19', 'club', ['Chân giò heo Jokbal', 'Jokbal', '족발', '猪蹄', 'チョッパル（豚足）'], ['Chân giò hầm dai mềm', 'Braised pork trotters with a chewy, soft texture', '쫄깃하고 부드러운 족발', '有筋道柔软口感的猪蹄', 'もちもち柔らかな豚足'], ['pork', 'soy']),
    item('club-k20', 'club', ['Bulgogi bò nướng vỉ', 'Seoksoe Bulgogi', '석쇠불고기', '铁网烤牛肉', 'ソクセプルコギ（網焼き）'], ['Bò ướp xì dầu nướng than trên vỉ', 'Soy-marinated beef bulgogi grilled over charcoal', '간장 양념 소불고기를 석쇠에 숯불로', '酱油腌牛肉炭火铁网烤', '醤油ダレの牛肉を炭火で網焼き'], ['beef', 'soy']),
    // Japanese
    item('club-j1', 'club', ['Mì soba', 'Soba Noodles', '냉모밀', '荞麦面', 'そば'], ['Mì kiều mạch với nước chấm đậm vị', 'Buckwheat noodles with savory sauce', '메밀면과 감칠맛 나는 소스', '荞麦面配香浓酱汁', '蕎麦と香ばしいつゆ'], ['gluten', 'soy']),
    item('club-j2', 'club', ['Mì udon', 'Udon Noodles', '우동', '乌冬面', 'うどん'], ['Sợi udon dai trong nước dùng đậm', 'Noodle soup with chewy udon and garnish', '진한 육수에 쫄깃한 우동면', '浓汤配劲道乌冬', '歯ごたえのあるうどんと麺つゆ'], ['fish', 'gluten', 'soy']),
    item('club-j3', 'club', ['Cơm cà ri Nhật', 'Japanese Curry', '일식카레', '日式咖喱饭', 'カレーライス'], ['Cà ri kiểu Nhật với cơm trắng', 'Japanese curry with steamed rice', '맛있는 일본식 카레와 밥', '日式咖喱配白饭', '美味しい和風カレーとライス'], ['beef', 'gluten']),
    // Chinese – Dim Tu Tac
    item('club-c1', 'club', ['Há cảo tôm', 'Dim Sum – Har Gow', '딤섬 (하가우)', '点心（虾饺）', '点心（海老餃子）'], null, ['shellfish', 'gluten']),
    item('club-c2', 'club', ['Xíu mại tôm thịt nấm hương', 'Steamed Pork & Prawn Dumpling', '표고버섯 샤오마이', '香菇烝烧卖', '椎茸焼売'], null, ['pork', 'shellfish', 'mushroom']),
    item('club-c3', 'club', ['Bánh bao hình nấm', 'Steamed Pictographic Mushroom Buns', '표고버섯 찐빵', '象形花菇包', 'きのこ形まんじゅう'], null, ['mushroom', 'gluten', 'veg']),
    item('club-c4', 'club', ['Bánh tart trứng', 'Baked Egg Tart', '에그타르트', '酥皮蛋挞', 'エッグタルト'], null, ['egg', 'dairy', 'gluten']),
    item('club-c5', 'club', ['Chân gà hấp tàu xì', 'Steamed Chicken Claws with Black Bean Sauce', '발효 검은콩 소스 닭발찜', '豉汁蒸凤爪', '鶏足の豆豉蒸し'], null, ['chicken', 'soy'], { spicy: 1 }),
    item('club-c6', 'club', ['Súp cua bong bóng cá', 'Fish Maw Crab Meat Soup', '어교 게살수프', '蟹肉鱼肚羹', '蟹肉と魚の浮き袋のスープ'], null, ['shellfish', 'fish', 'egg']),
    item('club-c7', 'club', ['Mì hoành thánh', 'Wonton Noodles', '완탕면', '鲜虾云吞面', 'ワンタン麺'], null, ['pork', 'shellfish', 'egg', 'gluten']),
    item('club-c8', 'club', ['Mì bò nạm kho', 'Noodles with Stewed Beef Brisket', '홍콩식 소고기 조림 국수', '柱侯牛腩面', '牛バラ煮込み麺'], null, ['beef', 'egg', 'gluten']),
    item('club-c9', 'club', ['Sườn heo xào tỏi ô liu', 'Spare Ribs with Garlic & Olive', '올리브 마늘 돼지갈비 볶음', '榄角蒜香骨', 'スペアリブのにんにくオリーブ炒め'], null, ['pork', 'soy']),
    item('club-c10', 'club', ['Cơm chiên rau xanh sò điệp', 'Wok-Fried Vegetable Purée Rice with Scallop', '채소 관자 볶음밥', '脆贝菜汁带子炒饭', '帆立と青菜ピュレの炒飯'], null, ['shellfish', 'egg']),
    item('club-c11', 'club', ['Đậu hũ Ma Bà nấm thập cẩm', 'Spicy Mapo Beancurd with Assorted Mushrooms', '사천식 마파두부와 모둠버섯', '杂菌麻婆豆腐', 'きのこ入り麻婆豆腐'], null, ['soy', 'mushroom'], { spicy: 2 }),

    /* ---------------- WINE ---------------- */
    // profile: body(light→bold), tannin(smooth→tannic), sweet(dry→sweet), acid(soft→acidic) 0..1
    wine('wine-r1', 'Carpineto Chianti Classico Riserva DOCG', 'IT', 'red', [.5, .6, .08, .65], ['beef', 'veal', 'pasta']),
    wine('wine-r2', 'Château Poujeaux Moulis-en-Médoc', 'FR', 'red', [.88, .82, .1, .72], ['beef', 'lamb', 'game']),
    wine('wine-r3', 'Ruffino Modus Toscana IGT', 'IT', 'red', [.6, .45, .1, .5], ['beef', 'lamb', 'veal']),
    wine('wine-r4', 'Carpineto Molin Vecchio Toscana IGT', 'IT', 'red', [.55, .45, .1, .5], ['beef', 'lamb', 'veal']),
    wine('wine-r5', 'Raymond Reserve Selection Cabernet Sauvignon Napa Valley', 'US', 'red', [.88, .55, .15, .6], ['beef', 'lamb', 'poultry']),
    wine('wine-r6', 'Petaluma Evans Vineyard Cabernet Merlot Coonawarra', 'AU', 'red', [.8, .55, .2, .5], ['beef', 'lamb', 'game']),
    wine('wine-r7', 'Donnafugata Tancredi Edizione Limitata Dolce & Gabbana', 'IT', 'red', [.88, .5, .22, .38], ['beef', 'lamb', 'pasta']),
    wine('wine-r8', 'Joseph Drouhin Côte de Beaune', 'FR', 'red', [.42, .25, .1, .75], ['beef', 'veal', 'poultry']),
    wine('wine-r9', 'Tenuta Luce Lucente', 'IT', 'red', [.6, .55, .15, .55], ['beef', 'lamb', 'veal']),
    wine('wine-w1', 'Joseph Drouhin Vaudon Chablis Réserve de Vaudon', 'FR', 'white', [.45, null, .1, .8], ['pork', 'fish', 'shellfish']),
    wine('wine-w2', 'Henri Bourgeois Pouilly-Fumé La Demoiselle de Bourgeois', 'FR', 'white', [.35, null, .1, .85], ['pork', 'shellfish', 'veg']),
    wine('wine-w3', 'Château Olivier Blanc Pessac-Léognan', 'FR', 'white', [.7, null, .2, .5], ['pork', 'veg', 'poultry']),
    wine('wine-w4', 'Cloudy Bay Sauvignon Blanc 2019', 'NZ', 'white', [.4, null, .1, .9], ['cheese', 'veg', 'shellfish']),
    wine('wine-w5', 'Donnafugata Dolce & Gabbana Isolano', 'IT', 'white', [.75, null, .2, .45], ['snacks', 'veg', 'shellfish']),
    wine('wine-w6', 'Château Haut Selve Graves Blanc', 'FR', 'white', [.7, null, .15, .5], ['pork', 'veg', 'poultry']),
    wine('wine-w7', 'Mouton Cadet Réserve Sauternes', 'FR', 'sweet', [.9, null, .9, .85], ['dessert', 'cheese']),

    /* ---------------- SAMPLE (no artwork yet) ---------------- */
    sample('snack-fries', 'snack', ['Khoai tây chiên', 'French Fries', '감자튀김', '炸薯条', 'フライドポテト'], ['veg', 'gluten']),
    sample('snack-wings', 'snack', ['Cánh gà chiên nước mắm', 'Fish Sauce Chicken Wings', '피시소스 치킨윙', '鱼露炸鸡翅', '鶏手羽のヌクマム揚げ'], ['chicken']),
    sample('snack-springroll', 'snack', ['Chả giò', 'Vietnamese Spring Rolls', '짜조 (베트남 스프링롤)', '越南炸春卷', '揚げ春巻き'], ['pork', 'shellfish', 'gluten']),
    sample('snack-nuts', 'snack', ['Hạt tổng hợp', 'Mixed Nuts', '믹스넛', '什锦坚果', 'ミックスナッツ'], ['nuts', 'veg']),
    sample('snack-fruit', 'snack', ['Đĩa trái cây', 'Fresh Fruit Platter', '과일 플래터', '鲜果拼盘', 'フルーツ盛り合わせ'], ['veg']),
    sample('snack-sandwich', 'snack', ['Bánh mì kẹp Club', 'Club Sandwich', '클럽 샌드위치', '公司三明治', 'クラブサンドイッチ'], ['chicken', 'egg', 'gluten', 'dairy']),
    sample('out-pho', 'outside', ['Phở bò đặc biệt', 'Special Beef Pho', '스페셜 소고기 쌀국수', '特色牛肉河粉', '特製牛肉フォー'], ['beef']),
    sample('out-sushi', 'outside', ['Sushi & sashimi tổng hợp', 'Sushi & Sashimi Platter', '모둠 초밥 & 사시미', '寿司刺身拼盘', '寿司と刺身の盛り合わせ'], ['fish', 'shellfish', 'soy']),
    sample('out-pizza', 'outside', ['Pizza Margherita', 'Pizza Margherita', '마르게리타 피자', '玛格丽特披萨', 'マルゲリータピザ'], ['veg', 'dairy', 'gluten']),
    sample('out-comtam', 'outside', ['Cơm tấm sườn bì chả', 'Broken Rice with Grilled Pork Chop', '껌땀 (돼지갈비 덮밥)', '越南碎米饭配烤猪排', 'コムタム（豚スペアリブご飯）'], ['pork', 'egg']),
    sample('drk-espresso', 'drinks', ['Espresso', 'Espresso', '에스프레소', '意式浓缩咖啡', 'エスプレッソ'], []),
    sample('drk-cappuccino', 'drinks', ['Cappuccino', 'Cappuccino', '카푸치노', '卡布奇诺', 'カプチーノ'], ['dairy']),
    sample('drk-vncoffee', 'drinks', ['Cà phê sữa đá', 'Vietnamese Iced Milk Coffee', '베트남 연유 아이스커피', '越南冰炼乳咖啡', 'ベトナム式アイスミルクコーヒー'], ['dairy']),
    sample('drk-orange', 'drinks', ['Nước cam tươi', 'Fresh Orange Juice', '생오렌지 주스', '鲜榨橙汁', 'フレッシュオレンジジュース'], ['veg']),
    sample('drk-coconut', 'drinks', ['Nước dừa tươi', 'Fresh Coconut', '생 코코넛', '新鲜椰子水', 'フレッシュココナッツ'], ['veg']),
    sample('drk-tea', 'drinks', ['Trà chanh đá', 'Iced Lemon Tea', '아이스 레몬티', '冰柠檬茶', 'アイスレモンティー'], ['veg']),
    sample('drk-water', 'drinks', ['Nước suối', 'Mineral Water', '생수', '矿泉水', 'ミネラルウォーター'], []),
    sample('liq-jwblue', 'liquor', ['Johnnie Walker Blue Label', 'Johnnie Walker Blue Label', '조니워커 블루라벨', '尊尼获加蓝牌', 'ジョニーウォーカー ブルーラベル'], ['alcohol']),
    sample('liq-macallan', 'liquor', ['The Macallan 12 Double Cask', 'The Macallan 12 Double Cask', '맥캘란 12년 더블캐스크', '麦卡伦12年双桶', 'ザ・マッカラン12年 ダブルカスク'], ['alcohol']),
    sample('liq-hennessy', 'liquor', ['Hennessy XO', 'Hennessy XO', '헤네시 XO', '轩尼诗XO', 'ヘネシーXO'], ['alcohol']),
    sample('liq-martell', 'liquor', ['Martell Cordon Bleu', 'Martell Cordon Bleu', '마르텔 코르동 블루', '马爹利蓝带', 'マーテル コルドンブルー'], ['alcohol']),
    sample('liq-greygoose', 'liquor', ['Grey Goose Vodka', 'Grey Goose Vodka', '그레이구스 보드카', '灰雁伏特加', 'グレイグース ウォッカ'], ['alcohol']),
    sample('liq-patron', 'liquor', ['Patrón Silver', 'Patrón Silver', '패트론 실버', '培恩银樽', 'パトロン シルバー'], ['alcohol'])
  ];

  function wine(id, name, country, type, profile, pair) {
    return { id, cat: 'wine', img: id, name: { vi: name, en: name, ko: name, zh: name, ja: name }, desc: null, tags: ['alcohol'], wine: { country, type, profile, pair } };
  }
  function sample(id, cat, n, tags) {
    return { id, cat, img: null, sample: true, name: L(n), desc: null, tags };
  }

  // Demo members (used only in Demo mode; Live mode calls GET /members/{no})
  const DEMO_MEMBERS = {
    '100001': { name: 'Nguyễn Văn An', tier: 'P' },
    '100002': { name: 'Trần Thị Bích', tier: 'I' },
    '100003': { name: 'Kim Min-jun', tier: 'V' },
    '100004': { name: 'Li Wei', tier: 'ONE' },
    '100005': { name: 'Tanaka Hiroshi', tier: 'ONE SIG' },
    '100006': { name: 'Lê Hoàng Long', tier: 'EC' }
  };

  // Demo stock: these start as out of stock so the dimmed state is visible
  const DEMO_OUT = ['vip-nha-trang-lobster', 'club-k19', 'wine-r7', 'liq-jwblue'];

  return { TIERS, CATEGORIES, ITEMS, DEMO_MEMBERS, DEMO_OUT };
})();
