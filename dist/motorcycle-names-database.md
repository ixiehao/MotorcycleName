# 多语言摩托车车名资料库(Multilingual Motorcycle Name Database)

> 更新日期: 2026-10-16<br>
> 数据库版本: v1.1.1<br>
> 许可证: CC BY-SA 4.0

---

## 0. 覆盖概览

- 品牌: **90**
- 车型: **1592**
- 级别分类子类: **41**
- 术语条目: **116**
- 跨市场异名: **77**
- 支持语言: en, zh-CN, zh-TW, ja

---

## 1. 级别分类 (Motorcycle Classes / Categories)

### 1.1 排量分级 Displacement

| id | en | zh-CN | zh-TW | ja | standard |
| --- | --- | --- | --- | --- | --- |
| class:disp:50cc | Moped | 轻便摩托车(50cc) | 輕機車(50cc) | 原付一種 | Displacement ≤ 50cc |
| class:disp:125cc | 125cc Entry Class | 入门级(125cc) | 入門級(125cc) | 125ccクラス | 50cc < Displacement ≤ 125cc |
| class:disp:250cc | Lightweight (250cc) | 轻量级(250cc) | 輕量級(250cc) | 250ccクラス | 125cc < Displacement ≤ 250cc |
| class:disp:400cc | Mid-entry (400cc) | 中入门(400cc) | 中入門(400cc) | 400ccクラス | 250cc < Displacement ≤ 400cc |
| class:disp:600cc | Middleweight (600cc) | 中量级(600cc) | 中量級(600cc) | 600ccクラス(ミドルクラス) | 400cc < Displacement ≤ 600cc |
| class:disp:750cc | Liter-class Entry (750cc) | 准公升级(750-900cc) | 準公升級(750-900cc) | リッタークラス準備級 | 600cc < Displacement < 1000cc |
| class:disp:1000cc | Liter-class / Superbike | 公升级(1000cc+) | 公升級(1000cc+) | リッタークラス/スーパーバイク | Displacement ≥ 1000cc |

### 1.2 欧盟驾照 EU License

| id | en | zh-CN | zh-TW | ja | standard |
| --- | --- | --- | --- | --- | --- |
| class:eu:AM | AM license | AM驾照 | AM駕照 | AM免許(欧州) | Two/three wheels ≤ 50cc or ≤ 4kW, max speed ≤ 45km/h |
| class:eu:A1 | A1 license | A1驾照 | A1駕照 | A1免許(欧州) | ≤ 125cc, ≤ 11kW, power/weight ≤ 0.1kW/kg |
| class:eu:A2 | A2 license | A2驾照 | A2駕照 | A2免許(欧州) | ≤ 35kW, power/weight ≤ 0.2kW/kg |
| class:eu:A | A license (Unrestricted) | A驾照(不限) | A駕照(不限) | A免許(無制限/欧州) | Unrestricted - any power and displacement |

### 1.3 日本自動車区分 Japanese

| id | en | zh-CN | zh-TW | ja | standard |
| --- | --- | --- | --- | --- | --- |
| class:jp:gentuki1 | Moped Class 1 | 原付一种 | 原付一種 | 原付一種 | 排気量 ≤ 50cc |
| class:jp:gentuki2 | Moped Class 2 | 原付二种 | 原付二種 | 原付二種 | 50cc < 排気量 ≤ 125cc |
| class:jp:shogai | Small Motorcycle | 小型二轮 | 小型二輪 | 小型二輪(軽二輪) | 125cc < 排気量 ≤ 250cc |
| class:jp:futsu | Ordinary Motorcycle | 普通二轮 | 普通二輪 | 普通二輪(中型バイク) | 250cc < 排気量 ≤ 400cc |
| class:jp:ogata | Heavy Motorcycle | 大型二轮 | 大型二輪 | 大型二輪(大型バイク) | 排気量 > 400cc |

### 1.4 车身形式 Body Style

| id | en | zh-CN | zh-TW | ja | examples |
| --- | --- | --- | --- | --- | --- |
| body:naked | Naked / Streetfighter | 街车 | NK車/街車 | ネイキッド(無整流罩) | Honda CB1000R, Yamaha MT-09, Kawasaki Z1000, Suzuki GSX-S1000 |
| body:sport | Sport / Supersport | 跑车(仿赛) | 跑車(仿賽) | スーパースポーツ(フルカウル) | Honda CBR1000RR-R, Yamaha YZF-R1, Kawasaki Ninja ZX-10R, Suzuki GSX-R1000 |
| body:sport-touring | Sport Touring / GT | 运动旅行 | 運動旅行 | スポーツツアラー | Honda VFR1200X, Yamaha FJR1300, Kawasaki Ninja 1000SX, Suzuki GSX-S1000GT |
| body:touring | Touring | 旅行车 | 旅行車 | ツアラー(フルカウル大型) | Honda Gold Wing, BMW K 1600 GTL, Yamaha Star Venture, Harley-Davidson Ultra Limited |
| body:cruiser | Cruiser | 巡航车(太子车) | 巡航車(太子車) | クルーザー | Harley-Davidson Street Glide, Honda Rebel, Yamaha XV950, Kawasaki Vulcan S, Suzuki Boulevard |
| body:chopper | Chopper / Custom | 改装定制车 | 改裝定制車 | チョッパー/カスタム | Custom-built choppers, Harley-Davidson based customs, Orange County Choppers |
| body:cafe-racer | Cafe Racer | 咖啡赛车 | 咖啡賽車 | カフェレーサー | Triumph Thruxton, BMW R nineT Racer, Honda CB1100RS Custom, Yamaha XSR900 Cafe |
| body:scrambler | Scrambler | 攀爬者 | 攀爬者 | スクランブラー | Ducati Scrambler, Triumph Street Scrambler, BMW R nineT Scrambler, Yamaha XSR700 XTribute |
| body:bobber | Bobber | 鲍勃 | 鮑勃 | ボバー | Triumph Bobber, Harley-Davidson Street Bob, Indian Scout Bobber, Yamaha XV950 Bolt |
| body:bagger | Bagger | 袋式旅行车 | 袋式旅行車 | バガー | Harley-Davidson Road Glide, Indian Chieftain, Honda Gold Wing Bagger, BMW R 18 Transcontinental |
| body:motocross | Dirt / Motocross | 越野摩托(场地) | 越野摩托(場地) | モトクロス(オフロード) | Honda CRF450R, Yamaha YZ450F, Kawasaki KX450, Suzuki RM-Z450, KTM 450 SX-F |
| body:enduro | Enduro | 林道耐力赛 | 林道耐力賽 | エンデューロ(公道可) | Honda CRF450L, Yamaha WR450F, Kawasaki KLX450R, KTM 450 EXC-F, Husqvarna FE 450 |
| body:supermoto | Supermoto | 超级摩托滑胎 | 超級摩托滑胎 | スーパーモト | Honda CRF450SM, Yamaha WR250X, Kawasaki D-Tracker X, Suzuki DR-Z400SM, KTM 690 SMC R |
| body:adventure | Adventure / ADV | 探险车(拉力) | 探險車(拉力) | アドベンチャー | BMW R 1250 GS, Africa Twin, Yamaha Tenere 700, KTM 1290 Super Adventure, Suzuki V-Strom |
| body:dual-sport | Dual Sport / Trail | 两用(公路越野) | 兩用(公路越野) | オフロード併用車 | Honda XR650L, Yamaha XT250, Kawasaki KLR650, Suzuki DR650, KTM 690 Enduro R |
| body:scooter | Scooter | 踏板车 | 機車(踏板) | スクーター | Honda PCX, Yamaha NMAX, Suzuki Address, Vespa Primavera, Kymco Like |
| body:maxi-scooter | Maxi Scooter | 大绵羊(大踏板) | 大綿羊(大踏板) | ビッグスクーター | Honda Forza 750, Yamaha TMAX 560, Suzuki Burgman 650, BMW C 650 GT, Kymco AK550 |
| body:underbone | Underbone / Cub | 弯梁 | 彎梁 | アンダーボーン/カブ | Honda Super Cub, Yamaha Spark, Suzuki Smash, Wave series, EX5 Dream |
| body:mini | Monkey / Mini Bike | 迷你车 | 迷你車 | ミニバイク | Honda Monkey 125, Honda Grom/MSX125, Kawasaki Z125 Pro, Yamaha Minarelli, Suzuki VanVan |
| body:trike | Trike / Sidecar | 三轮/边三轮 | 三輪/邊三輪 | トライク/サイドカー | Can-Am Spyder, Harley-Davidson Freewheeler, Ural Sidecar, BMW R 18 Sidecar, Piaggio MP3 |

### 1.5 动力类型 Powertrain

| id | en | zh-CN | zh-TW | ja | note |
| --- | --- | --- | --- | --- | --- |
| pt:ice | ICE / Gasoline | 燃油内燃机 | 燃油內燃機 | ガソリンエンジン(ICE) | 传统汽油发动机，四冲程或二冲程 |
| pt:hybrid | Hybrid | 混合动力 | 混合動力 | ハイブリッド | 内燃机+电机辅助，提高燃油效率 |
| pt:bev | Battery EV | 纯电动 | 純電動 | バッテリーEV(BEV) | 纯电池驱动，零排放，即时扭矩 |
| pt:fuel-cell | Fuel Cell | 燃料电池 | 燃料電池 | 燃料電池車 | 氢气+氧气发电，排放仅水 |
| pt:h2-ice | Hydrogen ICE | 氢内燃机 | 氫內燃機 | 水素エンジン(H2-ICE) | 以氢为燃料的内燃机，近零CO2排放 |

---

## 2. 专业术语 (Glossary)

共 12 个分类,116 条术语。

### 2.发动机与动力

| ID | English | 简体中文 | 繁體中文 | 日本語 | Abbr | 说明 |
|----|---------|----------|----------|--------|------|------|
| glossary:engine_powertrain:01 | Engine | 发动机 | 引擎 | エンジン |  | 摩托车的动力核心，通过燃烧燃油产生机械能驱动车辆行驶。 |
| glossary:engine_powertrain:02 | Cylinder | 气缸 | 汽缸 | シリンダー |  | 发动机内活塞往复运动的空间，气缸数量和排列形式影响动力特性。 |
| glossary:engine_powertrain:03 | Displacement | 排量 | 排氣量 | 排気量 |  | 发动机所有气缸工作容积之和，单位通常为cc（立方厘米），是衡量发动机大小的重要指标。 |
| glossary:engine_powertrain:04 | Bore x Stroke | 缸径x行程 | 缸徑x衝程 | ボア×ストローク |  | 气缸内径（Bore）与活塞上下运动距离（Stroke）的乘积关系，影响发动机转速特性和扭矩输出。 |
| glossary:engine_powertrain:05 | Compression Ratio | 压缩比 | 壓縮比 | 圧縮比 |  | 气缸总容积与燃烧室容积的比值，高压缩比可提升效率但对燃油标号要求更高。 |
| glossary:engine_powertrain:06 | Torque | 扭矩 | 扭力 | トルク |  | 发动机曲轴输出的旋转力矩，决定车辆的加速能力和爬坡能力，单位为N·m或kg·m。 |
| glossary:engine_powertrain:07 | Horsepower | 马力 | 馬力 | 馬力 (PS/HP) |  | 衡量发动机功率的单位，公制马力(PS)与英制马力(HP)略有差异，反映车辆的极速潜力。 |
| glossary:engine_powertrain:08 | Turbocharger | 涡轮增压器 | 渦輪增壓器 | ターボチャージャー | Turbo | 利用发动机废气驱动涡轮压缩进气，小排量发动机可获得大功率输出，存在涡轮迟滞现象。 |
| glossary:engine_powertrain:09 | Supercharger | 机械增压器 | 機械增壓器 | スーパーチャージャー | SC | 通过曲轴直接驱动压缩机压缩进气，无涡轮迟滞，动力响应直接，但会消耗部分发动机功率。 |
| glossary:engine_powertrain:10 | Throttle Body | 节气门体 | 節流閥體 | スロットルボディ |  | 控制发动机进气量的阀体装置，传统为拉线式，现代多为电子油门（Ride-by-Wire）控制。 |

### 2.传动与驱动

| ID | English | 简体中文 | 繁體中文 | 日本語 | Abbr | 说明 |
|----|---------|----------|----------|--------|------|------|
| glossary:transmission_drivetrain:01 | Clutch | 离合器 | 離合器 | クラッチ |  | 连接或切断发动机与变速器之间动力传递的装置，换挡时需捏离合切断动力。 |
| glossary:transmission_drivetrain:02 | Transmission | 变速器 | 變速箱 | トランスミッション | Gearbox | 通过变换齿轮比调节发动机输出转速和扭矩的装置，常见有手动、双离合、无级等形式。 |
| glossary:transmission_drivetrain:03 | Manual 5/6-speed | 手动5/6挡 | 手動5/6檔 | マニュアル5/6速 | MT | 传统手动变速器，通过脚踩换挡杆配合离合器切换挡位，街车跑车多为6挡。 |
| glossary:transmission_drivetrain:04 | Dual Clutch Transmission | 双离合自动变速器 | 雙離合器自動變速箱 | デュアルクラッチトランスミッション | DCT | 本田首创的摩托车双离合器技术，两组离合器分别控制奇数和偶数挡，可自动或手动换挡，无顿挫感。 |
| glossary:transmission_drivetrain:05 | Continuously Variable Transmission | 无级变速器 | 無段變速器 | 無段変速機 | CVT | 通过皮带/钢带与可变直径滑轮实现连续变速比，踏板车常用，换挡平顺无顿挫。 |
| glossary:transmission_drivetrain:06 | Chain Drive | 链条传动 | 鏈條傳動 | チェーンドライブ |  | 通过链条将动力从链轮传递至后轮，效率高、成本低，需要定期保养调整松紧和润滑。 |
| glossary:transmission_drivetrain:07 | Belt Drive | 皮带传动 | 皮帶傳動 | ベルトドライブ |  | 通过同步皮带传递动力，运转安静、免润滑、维护简单，哈雷等巡航车和踏板车常用。 |
| glossary:transmission_drivetrain:08 | Shaft Drive | 轴传动 | 軸傳動 | シャフトドライブ |  | 通过传动轴和锥形齿轮传递动力，耐久可靠、几乎免维护，多用于旅行车和大排量巡航车。 |

### 2.底盘与悬挂

| ID | English | 简体中文 | 繁體中文 | 日本語 | Abbr | 说明 |
|----|---------|----------|----------|--------|------|------|
| glossary:chassis_suspension:01 | Frame | 车架 | 車架 | フレーム |  | 摩托车的骨架结构，承载发动机、悬挂、车身等部件，常见形式有钢管桁架、铝合金双翼梁等。 |
| glossary:chassis_suspension:02 | Swingarm | 后摇臂 | 後搖臂 | スイングアーム |  | 连接车架与后轮的摆动臂组件，允许后轮上下运动，单摇臂（Single-sided）便于快速换胎。 |
| glossary:chassis_suspension:03 | Front Fork | 前叉 | 前叉 | フロントフォーク |  | 摩托车前轮的悬挂组件，连接车架与前轮，负责缓冲路面冲击并支撑转向。 |
| glossary:chassis_suspension:04 | Telescopic Fork | 正立式前叉 | 正立式前叉 | テレスコピックフォーク |  | 传统前叉形式，套筒在下、内管在上，结构简单成本低，多数小排量和实用车型采用。 |
| glossary:chassis_suspension:05 | Upside Down Fork | 倒立式前叉 | 倒立式前叉 | 倒立フォーク | USD | 内管在下、套筒在上的前叉设计，刚性更高、簧下质量更轻，运动和越野车型普遍采用。 |
| glossary:chassis_suspension:06 | Monoshock | 单枪后避震 | 單槍後避震 | モノショック |  | 单支后中央避震器设计，通常配备多连杆机构，可调节预载和阻尼，运动车型主流配置。 |
| glossary:chassis_suspension:07 | Twin Shock | 双枪后避震 | 雙槍後避震 | ツインショック |  | 左右各一支后避震器的传统设计，复古车、巡航车和越野车常见，结构简单维护方便。 |

### 2.制动系统

| ID | English | 简体中文 | 繁體中文 | 日本語 | Abbr | 说明 |
|----|---------|----------|----------|--------|------|------|
| glossary:braking:01 | Disc Brake | 碟刹 | 碟煞 | ディスクブレーキ |  | 通过卡钳夹紧刹车盘产生制动力的制动系统，散热好、制动力强、不受雨水影响，现代摩托车主流。 |
| glossary:braking:02 | Drum Brake | 鼓刹 | 鼓煞 | ドラムブレーキ |  | 通过制动蹄片向外扩张压紧鼓内壁产生制动力，结构封闭耐用，小排量车和后轮常用。 |
| glossary:braking:03 | Anti-lock Braking System | 防抱死制动系统 | 防鎖死煞車系統 | アンチロックブレーキシステム | ABS | 紧急制动时自动调节刹车压力，防止车轮抱死打滑，大幅提升骑行安全性，已成为多数新车标配。 |
| glossary:braking:04 | Combined Brake System | 联动刹车系统 | 連動煞車系統 | 前後連動ブレーキ | CBS | 踩后刹或捏前刹时系统自动分配前后轮制动力，避免单一车轮制动不足或抱死，适合新手和踏板车。 |
| glossary:braking:05 | Radial Caliper | 径向卡钳 | 輻射卡鉗 | ラジアルマウントキャリパー |  | 卡钳安装螺栓与刹车盘径向平行的大排量刹车卡钳，刚性更高、制动力更直接，运动车型标配。 |
| glossary:braking:06 | Brake Master Cylinder | 刹车总泵 | 煞車總泵 | ブレーキマスターシリンダー |  | 将手指/脚部的机械力通过液压转化为制动压力的部件，分手泵（上泵）和脚泵（下泵）。 |

### 2.电气与电子系统

| ID | English | 简体中文 | 繁體中文 | 日本語 | Abbr | 说明 |
|----|---------|----------|----------|--------|------|------|
| glossary:electrical_electronics:01 | Engine Control Unit | 发动机控制单元 | 引擎控制單元 | エンジンコントロールユニット | ECU | 摩托车的大脑，实时采集传感器数据并控制喷油、点火等，决定发动机的工作状态和动力输出。 |
| glossary:electrical_electronics:02 | Traction Control System | 牵引力控制系统 | 循跡控制系統 | トラクションコントロール | TCS | 检测到后轮打滑时自动减小动力输出或制动，防止轮胎空转侧滑，湿滑路面和大排量车非常有用。 |
| glossary:electrical_electronics:03 | Ride-by-Wire | 电子油门 | 電子節流閥 | ライドバイワイヤ | RBW | 油门把手与节气门之间无机械拉线，通过ECU电子信号控制，实现多种骑行模式和精准控制。 |
| glossary:electrical_electronics:04 | Full LED Lighting | 全LED照明 | 全LED照明 | フルLED |  | 全车灯具均采用LED光源，包括大灯、转向灯、尾灯等，亮度高、寿命长、功耗低。 |
| glossary:electrical_electronics:05 | Electronic Fuel Injection | 电子燃油喷射 | 電子燃油噴射 | 電子燃料噴射装置 | EFI | 通过喷油嘴精确控制燃油喷入量的供油系统，取代传统化油器，排放更低、油耗更省、响应更快。 |
| glossary:electrical_electronics:06 | Ignition System | 点火系统 | 點火系統 | イグニッション |  | 产生高压电火花点燃气缸内混合气的系统，现代多为晶体管数字点火（TCI/CDI），正时精确。 |

### 2.骑行安全与辅助

| ID | English | 简体中文 | 繁體中文 | 日本語 | Abbr | 说明 |
|----|---------|----------|----------|--------|------|------|
| glossary:safety_riding_aids:01 | Slipper Clutch | 滑动离合器 | 滑動離合器 | スリッパークラッチ |  | 快速降挡时离合器会轻微打滑，减轻发动机制动造成的后轮弹跳锁死，运动车型和大排量车标配。 |
| glossary:safety_riding_aids:02 | Quick Shifter | 快速换挡系统 | 快速換檔系統 | クイックシフター | QS | 无需捏离合和收油即可直接换挡的装置，分升挡单向和升降双向两种，赛道和激烈驾驶必备。 |
| glossary:safety_riding_aids:03 | Wheelie Control | 防翘头控制系统 | 防孤輪控制系統 | ウィリーコントロール |  | 通过传感器检测前轮抬起并自动减小动力输出，防止大油门起步时前轮过度翘起翻倒。 |
| glossary:safety_riding_aids:04 | Launch Control | 弹射起步控制系统 | 彈射起步控制系統 | ローンチコントロール |  | 限制起步转速和动力输出，使车辆以最佳牵引力起步，用于直线加速赛和专业赛道起步。 |
| glossary:safety_riding_aids:05 | Cornering ABS | 弯道防抱死制动 | 彎道防鎖死煞車 | コーナリングABS |  | 配备惯性测量单元（IMU）的进阶ABS，在车辆倾斜过弯刹车时也能精准防抱死，避免失控。 |
| glossary:safety_riding_aids:06 | Engine Brake Control | 发动机制动控制 | 引擎煞車控制 | エンジンブレーキコントロール | EBC | 可调节发动机制动强度的电子系统，避免过弯收油时后轮因强引擎制动而打滑锁死。 |

### 2.轮胎与车轮

| ID | English | 简体中文 | 繁體中文 | 日本語 | Abbr | 说明 |
|----|---------|----------|----------|--------|------|------|
| glossary:tires_wheels:01 | Tire / Tyre | 轮胎 | 輪胎 | タイヤ |  | 摩托车与地面唯一接触的部件，其抓地力、磨损、气压直接影响骑行安全和操控。 |
| glossary:tires_wheels:02 | Tubeless Tire | 真空胎 | 無內胎輪胎 | チューブレスタイヤ | TL | 无内胎轮胎，扎钉后漏气缓慢，可临时修补继续行驶，现代摩托车主流配置。 |
| glossary:tires_wheels:03 | Tyre Compound | 轮胎配方 | 輪胎配方 | タイヤコンパウンド |  | 轮胎橡胶的材料配方，硬配方耐磨但抓地差，软配方抓地强但磨损快，赛道胎多为双/多配方。 |
| glossary:tires_wheels:04 | Rim / Wheel | 轮毂 | 輪框 | ホイール (リム) |  | 安装轮胎的金属轮圈部分，材质有铝合金、镁合金、碳纤维等，尺寸以英寸为单位。 |
| glossary:tires_wheels:05 | Spoke Wheel | 辐条轮 | 輻條輪 | スポークホイール |  | 由多根钢丝辐条连接轮毂和轮圈的车轮，韧性好可缓冲冲击，越野车、复古车、ADV常用。 |
| glossary:tires_wheels:06 | Alloy Wheel | 铝合金轮毂 | 鋁合金輪框 | アルミホイール |  | 一体铸造或锻造铝合金轮毂，刚性好、精度高、免调辐条，公路运动和踏板车标配。 |

### 2.车身车架与外壳

| ID | English | 简体中文 | 繁體中文 | 日本語 | Abbr | 说明 |
|----|---------|----------|----------|--------|------|------|
| glossary:body_frame_fairing:01 | Fairing | 整流罩 | 車殼 | カウル |  | 覆盖车身的外壳组件，分为全包、半包、无罩等，作用是降低风阻、保护发动机和外观造型。 |
| glossary:body_frame_fairing:02 | Fuel Tank | 油箱 | 油箱 | 燃料タンク |  | 储存汽油的容器，容量一般在10-20升左右，长途旅行车可达25升以上。 |
| glossary:body_frame_fairing:03 | Seat | 坐垫 | 坐墊 | シート |  | 骑手和乘客乘坐的座椅，分体座、高低座、连体座等多种形式，材质和形状影响骑行舒适度。 |
| glossary:body_frame_fairing:04 | Handlebar | 车把 | 車把 | ハンドル |  | 控制转向的部件，分手把（街车）、分离把（跑车）、高把（巡航）、蝴蝶把（旅行）等多种形式。 |
| glossary:body_frame_fairing:05 | Clip-on Handlebars | 分离式车把 | 分離式車把 | クリップオン |  | 夹紧在前叉上的两段分离式低车把，前倾战斗姿态有助于降低重心，跑车和运动街车采用。 |
| glossary:body_frame_fairing:06 | Windshield | 风挡 | 風鏡 | スクリーン (風防) |  | 车头前方的透明挡风玻璃，可降低高速时风压对骑手的冲击，旅行车多为可调高度式。 |

### 2.骑行与舒适

| ID | English | 简体中文 | 繁體中文 | 日本語 | Abbr | 说明 |
|----|---------|----------|----------|--------|------|------|
| glossary:riding_comfort:01 | Cruise Control | 定速巡航系统 | 定速巡航系統 | クルーズコントロール | CC | 自动保持设定车速行驶的电子系统，长途高速巡航时可解放右手减少疲劳。 |
| glossary:riding_comfort:02 | Heated Grips | 加热手把 | 加熱握把 | グリップヒーター |  | 内置电热丝的握把，可多档调温，冬季或高海拔骑行时防止手指冻僵，旅行车和大排量车常见。 |
| glossary:riding_comfort:03 | Adjustable Windscreen | 可调式风挡 | 可調式風鏡 | 可変スクリーン |  | 可电动或手动调节高度和角度的风挡，不同车速和身高的骑手均可找到舒适的风阻位置。 |
| glossary:riding_comfort:04 | Riding Ergonomics | 骑行三角 | 騎乘三角 | ライディングポジション |  | 车把、脚踏、坐垫三者相对位置决定的骑行姿势，街车直立、跑车战斗、巡航舒展、旅行舒适。 |
| glossary:riding_comfort:05 | Luggage Panniers | 边箱 | 馬鞍箱 | パニアケース |  | 安装在车辆两侧的储物箱，分硬箱和软包，旅行和长途骑行必备，容量一般20-30升/侧。 |

### 2.赛事与竞技

| ID | English | 简体中文 | 繁體中文 | 日本語 | Abbr | 说明 |
|----|---------|----------|----------|--------|------|------|
| glossary:racing_terms:01 | MotoGP | 世界摩托车锦标赛 | 世界摩托車錦標賽 | MotoGP |  | 摩托车公路赛最高级别赛事，FIM主办，分MotoGP/Moto2/Moto3三个组别，使用原型赛车。 |
| glossary:racing_terms:02 | World Superbike Championship | 世界超级摩托车锦标赛 | 世界超級摩托車錦標賽 | スーパーバイク世界選手権 | WSBK | FIM主办的量产改装摩托车公路赛，赛车须以市售车为基础改装，竞争激烈观赏性强。 |
| glossary:racing_terms:03 | Isle of Man TT | 曼岛TT | 曼島TT | TTマン島 | TT | 世界最危险最古老的公路摩托车赛事，在英国曼岛封闭街道计时赛，单圈60公里平均时速超200km/h。 |
| glossary:racing_terms:04 | Pikes Peak International Hill Climb | 派克峰国际爬山赛 | 派克峰國際爬山賽 | パイクスピーク |  | 美国科罗拉多州派克峰举行的年度爬山赛，赛程约20公里爬升1440米，终点海拔4302米。 |
| glossary:racing_terms:05 | Dakar Rally | 达喀尔拉力赛 | 達卡拉力賽 | ダカールラリー |  | 世界最艰苦的越野拉力赛，原巴黎到达喀尔，现移师沙特阿拉伯，摩托车组全程超7000公里以沙漠为主。 |
| glossary:racing_terms:06 | Suzuka 8 Hours | 铃鹿8小时耐力赛 | 鈴鹿8小時耐力賽 | 鈴鹿8時間耐久ロードレース | 8耐 | 日本铃鹿赛道举行的8小时耐力赛，FIM EWC分站之一，1978年创办。四大日厂倾巢出动，本田常年统治，被誉为耐力赛之王。 |
| glossary:racing_terms:07 | FIM Endurance World Championship | 世界耐力锦标赛 | 世界耐力錦標賽 | FIM世界耐久選手権 | EWC | FIM主办的摩托车公路耐力赛，每场6-24小时，骑手轮换驾驶，包含铃鹿8小时、斯帕24小时等经典分站。 |
| glossary:racing_terms:08 | FIM Motocross World Championship | 世界摩托车越野锦标赛 | 世界摩托車越野錦標賽 | FIMモトクロス世界選手権 | MXGP | FIM主办的场地越野摩托车赛，分MXGP（450cc）和MX2（250cc）两个组别，泥地赛道+跳跃，KTM、Yamaha、Honda争雄。 |
| glossary:racing_terms:09 | FIM Enel MotoE World Championship | MotoE电动摩托车世锦赛 | MotoE電動摩托車世錦賽 | MotoE世界選手権 | MotoE | FIM主办的纯电动摩托车单品牌赛事，2019年创办，使用Ducati V21L原型车（2023年起），是MotoGP赛事周末的 supporting 项。 |
| glossary:racing_terms:10 | British Superbike Championship | 英国超级摩托车锦标赛 | 英國超級摩托車錦標賽 | ブリティッシュスーパーバイク選手権 | BSB | 英国国家级超级摩托赛，技术规则比WSBK更开放，无电控禁令，培养出众多MotoGP/WSBK车手，竞争激烈。 |
| glossary:racing_terms:11 | Macau Grand Prix | 澳门格兰披治大赛车 | 澳門格蘭披治大賽車 | マカオグランプリ |  | 中国澳门每年11月举行的街道赛，东望洋赛道6.2公里，摩托车组与F3同场，是亚洲最知名的公路街道赛事之一。 |
| glossary:racing_terms:12 | AMA Superbike Championship | 美国超级摩托车锦标赛 | 美國超級摩托車錦標賽 | AMAスーパーバイク選手権 | AMA | 美国MotoAmerica主办的超级摩托赛，1976年创办，是北美最高级别公路摩托赛，King of the Baggers近年备受关注。 |
| glossary:racing_terms:13 | FIM Speedway World Championship | 世界场地摩托车锦标赛 | 世界場地摩托車錦標賽 | FIMスピードウェイ世界選手権 | SGP | FIM主办的场地沙地赛，无刹车、无变速、单缸500cc甲醇燃料车，椭圆土道逆时针绕圈，欧洲尤其是波兰和瑞典极流行。 |

### 2.安全驾驶知识

| ID | English | 简体中文 | 繁體中文 | 日本語 | Abbr | 说明 |
|----|---------|----------|----------|--------|------|------|
| glossary:safety_riding_skills:01 | Counter-steering | 推胎转向/逆操舵 | 推胎轉向/逆操舵 | カウンターステアリング |  | 摩托车转向的核心技巧：要向左转，先向右轻推车把使车身向左倾斜，再利用车身倾斜完成转向。所有速度下都适用，是安驾必备技能。 |
| glossary:safety_riding_skills:02 | Defensive Riding | 防御性驾驶 | 防禦性駕駛 | ディフェンシブライディング |  | 主动预判其他道路使用者可能犯错的骑行方式，保持视野、距离、逃生路径，提前减速，避免进入危险位置。 |
| glossary:safety_riding_skills:03 | All The Gear All The Time | 全装备骑行原则 | 全裝備騎乘原則 | ATGATT(常時全装備) | ATGATT | 英文俗语，意为'每次骑行都穿全套装备'，包括头盔、骑行服、手套、骑行裤、骑行靴，是安驾文化的核心准则。 |
| glossary:safety_riding_skills:04 | Apex | 入弯点/弯心 | 入彎點/彎心 | クリッピングポイント |  | 弯道中最靠近内侧的点，是过弯路线的关键参考。合理选择Apex能获得更直的出弯线路和更高的出弯速度。 |
| glossary:safety_riding_skills:05 | Slow In, Fast Out | 慢进快出 | 慢進快出 | スローイン・ファストアウト |  | 过弯的基本原则：入弯前充分减速稳定入弯，弯中保持油门平稳，出弯时全力加速。比'快进慢出'更安全且出弯速度更高。 |
| glossary:safety_riding_skills:06 | Outside-Inside-Outside | 外-内-外路线 | 外-內-外路線 | アウト・イン・アウト | O-I-O | 过弯基本走线：从外缘入弯，到Apex贴近内侧，再回到外缘出弯，可最大化转弯半径、提高通过速度。 |
| glossary:safety_riding_skills:07 | Target Fixation | 目标凝视 | 目標凝視 | ターゲットフィクセーション |  | 骑手盯着前方障碍物不放，导致车辆不自觉驶向该障碍的心理现象。安驾训练核心是'看向你要去的地方，而不是你想避开的地方'。 |
| glossary:safety_riding_skills:08 | Visual Targeting | 视线引导 | 視線引導 | ビジョン(視線誘導) |  | 通过主动看向远方和出弯方向来引导车辆行驶的技巧，眼睛看向哪里车就会往哪里走，是高级骑行的基础。 |
| glossary:safety_riding_skills:09 | Threshold Braking | 极限制动 | 極限制動 | スレッショルドブレーキング |  | 在不抱死轮胎的前提下施加最大制动力的技术，是缩短制动距离的核心技巧，需要在安全场地反复练习。 |
| glossary:safety_riding_skills:10 | Trail Braking | 拖刹入弯 | 拖煞入彎 | トレイルブレーキング |  | 入弯时持续保持一定刹车压力使前叉下沉、轮胎贴地，至Apex附近逐渐释放。能压缩前叉提高前轮抓地力，使转向更精准。 |
| glossary:safety_riding_skills:11 | Swerve | 紧急避让 | 緊急避讓 | スウェーブ(急回避) |  | 在保持速度的情况下快速变向避开障碍的技术，先反推车把快速倾倒，避开后立即回正，配合Counter-steering完成。 |
| glossary:safety_riding_skills:12 | Body Position | 骑行姿势/身位 | 騎乘姿勢/身位 | ライディングポジション(体) |  | 通过身体重心移动辅助转向和稳定的技术，包括内侧挂腰、车顶压、油箱夹紧、外脚踩踏等，影响车辆平衡和抓地力分配。 |
| glossary:safety_riding_skills:13 | Two-Second Rule | 两秒法则 | 兩秒法則 | 2秒ルール |  | 跟车时与前车保持至少2秒时间间隔的安全距离，雨雪等恶劣天气应延长至4秒以上，给反应和制动留出余量。 |
| glossary:safety_riding_skills:14 | Slow Speed Control | 慢速控车 | 慢速控車 | 低速コントロール |  | 在堵车、停车场、U型掉头等低速场景下保持平衡和稳定的技术，要点是后刹微踩、油门恒定、视线远望、身体放松。 |
| glossary:safety_riding_skills:15 | Counterweight | 配重转向 | 配重轉向 | カウンターウェイト |  | 低速小半径转向时身体向外侧偏移以平衡车身倾斜的技术，与高速弯的反向配重相反，是慢速控车的进阶技巧。 |

### 2.品牌电控技术

| ID | English | 简体中文 | 繁體中文 | 日本語 | Abbr | 说明 |
|----|---------|----------|----------|--------|------|------|
| glossary:brand_rider_aids:01 | Ducati Traction Control | 杜卡迪牵引力控制 | 杜卡迪循跡控制 | ドゥカティ・トラクションコントロール | DTC | 杜卡迪电控系统，基于IMU六轴传感器检测后轮打滑并自动调节点火喷油降低动力，多级可调，Panigale系列标配8级。 |
| glossary:brand_rider_aids:02 | Ducati Wheelie Control | 杜卡迪防翘头控制 | 杜卡迪防孤輪控制 | ドゥカティ・ウィリーコントロール | DWC | 杜卡迪防止前轮过度抬起的系统，通过IMU检测前轮离地高度并调节动力输出，5级可调。 |
| glossary:brand_rider_aids:03 | Ducati Slide Control | 杜卡迪滑移控制 | 杜卡迪滑移控制 | ドゥカティ・スライドコントロール | DSC | 杜卡迪允许后轮在出弯时可控侧滑的系统，由MotoGP技术下放，2级可调，让高水平骑手实现漂移出弯。 |
| glossary:brand_rider_aids:04 | Ducati Power Launch | 杜卡迪弹射起步 | 杜卡迪彈射起步 | ドゥカティ・パワーランチ | DPL | 杜卡迪弹射起步控制系统，限制起步转速和动力输出曲线，3级可调，让骑手实现最佳起步加速。 |
| glossary:brand_rider_aids:05 | Ducati Quick Shift | 杜卡迪快速换挡 | 杜卡迪快速換檔 | ドゥカティ・クイックシフト | DQS | 杜卡迪双向快速换挡系统，升降挡均无需捏离合和收油，DQS EVO 2版本响应更敏捷，赛道激烈驾驶利器。 |
| glossary:brand_rider_aids:06 | BMW Automatic Stability Control | 宝马自动稳定控制 | 寶馬自動穩定控制 | BMW・アンステリティコントロール | ASC | 宝马摩托基础牵引力控制系统，通过对比前后轮转速检测打滑并减小动力，是DTC出现前的标配系统。 |
| glossary:brand_rider_aids:07 | BMW Dynamic Traction Control | 宝马动态牵引力控制 | 寶馬動態循跡控制 | BMW・ダイナミックトラクションコントロール | DTC | 宝马基于IMU的高级牵引力控制，可感知车身倾角，弯道中也能精准控制打滑，Pro版本支持漂移模式。 |
| glossary:brand_rider_aids:08 | BMW Motor Slipping Regulation | 宝马发动机滑移调节 | 寶馬引擎滑移調節 | BMW・モータースリッピングレギュレーション | MSR | 宝马防止急收油或降挡时后轮因强发动机制动锁死的系统，自动补油维持后轮稳定，与滑动离合器配合使用。 |
| glossary:brand_rider_aids:09 | BMW Hill Start Control Pro | 宝马坡道起步控制 | 寶馬坡道起步控制 | BMW・ヒルスタートコントロールPro | HSC Pro | 宝马坡道辅助系统，上坡起步时自动保持制动2秒，Pro版支持下坡也工作，让骑手从容操作油门离合。 |
| glossary:brand_rider_aids:10 | BMW Shift Assistant | 宝马换挡辅助 | 寶馬換檔輔助 | BMW・シフトアシスタント |  | 宝马快速换挡系统，Pro版支持双向（升降挡）无离合换挡，无需收油，长途旅行和激烈驾驶都能减轻疲劳。 |
| glossary:brand_rider_aids:11 | Inertial Measurement Unit | 惯性测量单元 | 慣性測量單元 | IMU(慣性計測装置) | IMU | 六轴惯性传感器，检测车身三轴加速度和角速度，是现代电控的基础。Yamaha YZF-R1 2015款率先在量产摩托上搭载IMU。 |
| glossary:brand_rider_aids:12 | Yamaha Motorcycle Stability Control | 雅马哈摩托车稳定控制 | 山葉摩托車穩定控制 | YMSC(ヤマハ・モータサイクルスタビリティコントロール) | YMSC | 雅马哈基于IMU整合ABS+TCS+SCS+LIF的全方位稳定控制系统，能在车身倾角下协同工作，是YZF-R1的核心电控。 |
| glossary:brand_rider_aids:13 | Yamaha Slide Control System | 雅马哈滑移控制系统 | 山葉滑移控制系統 | YSC(ヤマハ・スライドコントロール) | SCS | 雅马哈允许后轮侧滑的电控系统，由MotoGP M1技术下放，可调节允许侧滑角度，过度时自动介入恢复抓地。 |
| glossary:brand_rider_aids:14 | Yamaha Lift Control | 雅马哈防翘头控制 | 山葉防孤輪控制 | LIF(ヤマハ・リフトコントロール) | LIF | 雅马哈防止前轮过度翘起的系统，基于IMU检测前轮离地并自动调整动力输出，4级可调。 |
| glossary:brand_rider_aids:15 | Kawasaki Traction Control | 川崎牵引力控制 | 川崎循跡控制 | KTRC(カワサキ・トラクションコントロール) | KTRC | 川崎牵引力控制系统，分全介入模式（防止任何打滑）和允许一定打滑的运动模式，多级可调，Ninja ZX-10R标配。 |
| glossary:brand_rider_aids:16 | Kawasaki Launch Control Mode | 川崎弹射控制模式 | 川崎彈射控制模式 | KLCM(カワサキ・ローンチコントロール) | KLCM | 川崎弹射起步系统，限制1-3挡的输出功率和转速曲线，3级可调，让ZX-10R/ZX-14R获得最佳起步加速度。 |
| glossary:brand_rider_aids:17 | Kawasaki Intelligent Anti-lock Brake System | 川崎智能ABS | 川崎智能ABS | KIBS(カワサキ・インテリジェントABS) | KIBS | 川崎高精度ABS系统，由Bosch合作开发，每秒监测车轮速度200+次，配合IMU可实现弯道ABS，ZX-10R/Z900等搭载。 |
| glossary:brand_rider_aids:18 | Kawasaki Engine Brake Control | 川崎发动机制动控制 | 川崎引擎煞車控制 | KEBC(カワサキ・エンジンブレーキコントロール) | KEBC | 川崎可调发动机制动强度系统，关闭时滑行更顺畅，开启时降挡入弯更稳定，赛道驾驶必备调节项。 |
| glossary:brand_rider_aids:19 | Kawasaki Quick Shifter | 川崎快速换挡 | 川崎快速換檔 | KQS(カワサキ・クイックシフター) | KQS | 川崎快速换挡系统，标准版支持升挡，双向版支持升降挡无离合操作，Ninja ZX-6R以上车型标配。 |
| glossary:brand_rider_aids:20 | Honda Selectable Torque Control | 本田可选扭矩控制 | 本田可選扭力控制 | HSTC(ホンダ・セレクタブルトルクコントロール) | HSTC | 本田牵引力控制系统，通过检测前后轮速差调节点火提前角降低动力，多级可调并可完全关闭，Africa Twin/CB系列搭载。 |
| glossary:brand_rider_aids:21 | Honda Combined ABS | 本田联动ABS | 本田連動ABS | C-ABS(ホンダ・コンバインドABS) | C-ABS | 本田前后轮联动刹车+ABS系统，捏前刹或踩后刹均会按比例分配前后制动力，提升新手和紧急情况下的制动效果。 |
| glossary:brand_rider_aids:22 | Suzuki Drive Mode Selector | 铃木驱动模式选择器 | 鈴木驅動模式選擇器 | SDMS(スズキ・ドライブモードセレクター) | SDMS | 铃木骑行模式切换系统，一键切换A/B/C三种动力输出特性（A全功率、B柔和、C雨地），SDMS-α还支持自定义各电控参数。 |
| glossary:brand_rider_aids:23 | Suzuki Motion Track ABS | 铃木运动轨迹ABS | 鈴木運動軌跡ABS | スズキ・モーショントラックABS |  | 铃木搭载IMU的弯道ABS系统，可在车身倾斜状态下精准防抱死，配合TCS和HSC实现全方位稳定控制，GSX-R1000/V-Strom搭载。 |
| glossary:brand_rider_aids:24 | KTM Motor Traction Control | KTM牵引力控制 | KTM循跡控制 | MTC(KTM・モータートラクションコントロール) | MTC | KTM牵引力控制系统，配合IMU可实现倾角感知的TCS，多级可调（含Sport漂移模式），1290 Super Duke R/Super Adventure标配。 |
| glossary:brand_rider_aids:25 | KTM Motorcycle Stability Control | KTM摩托车稳定控制 | KTM摩托車穩定控制 | MSC(KTM・モータサイクルスタビリティコントロール) | MSC | KTM与Bosch联合开发的整车稳定系统，整合弯道ABS+TCS+MTC+HHC，可在所有倾角下协同工作防止失控。 |
| glossary:brand_rider_aids:26 | Aprilia Performance Ride Control | 阿普利亚性能骑行控制 | 阿普利亞性能騎乘控制 | APRC(アプリリア・パフォーマンスライドコントロール) | APRC | 阿普利亚电控套件总称，由WSBK赛车技术下放，整合ATC(牵引力)、AWC(防翘头)、ALC(弹射)、AQS(快排)、ACC(巡航)等子系统。 |
| glossary:brand_rider_aids:27 | Triumph Traction Control | 凯旋牵引力控制 | 凱旋循跡控制 | TTC(トライアンフ・トラクションコントロール) | TTC | 凯旋摩托牵引力控制系统，配合IMU实现弯道感知TCS，Bonneville T120/Tiger 900等车型搭载，可关闭以适配越野路段。 |
| glossary:brand_rider_aids:28 | Harley-Davidson Reflex Defensive Rider Systems | 哈雷反射式防御骑手系统 | 哈雷反射式防禦騎士系統 | RDRS(ハーレー・リフレックスディフェンシブライダーシステム) | RDRS | 哈雷戴维森基于IMU的电子套件，整合弯道ABS、TCS、HSTC(防翘头)、Drag-Torque Slip Control等，Sport S/America/RA 1250以上标配。 |

---

## 3. 品牌名录 (Brands)

### 3.中国

| ID | English | 简体中文 | 繁體中文 | 日本語 | 备注 |
|----|---------|----------|----------|--------|------|
| brand:cn:benda | Benda | 奔达 | 奔達 | ベンダ | 创立于浙江，以复古巡航车见长，代表作金吉拉300、LFC700燎等，在国内掀起小排量巡航热潮 |
| brand:cn:cfmoto | CFMoto | 春风 | 春風 | CFMoto | 1989年创立于浙江杭州，中国最大的水冷发动机和大排量摩托制造商，与KTM合资在华生产 |
| brand:cn:dayang | Dayang | 大阳 | 大陽 | ダーヤン | 洛阳北方易初摩托车有限公司旗下品牌，由泰国正大集团与洛阳北方企业集团合资组建，以经典弯梁车和V锐系列ADV踏板闻名 |
| brand:cn:dayun | Dayun | 大运 | 大運 | ダーユン | 1987年创立，大运集团旗下，总部位于山西，以摩托车和重型卡车制造为主业 |
| brand:cn:hanway | Hanway | 汉威 | 漢威 | ハンウェイ | 汉威机车，主打英式复古巡航与Bobber风格，代表作B50/YP500，曾发布国内首款中量级软尾Bobber |
| brand:cn:haojue | Haojue | 豪爵 | 豪爵 | ホージュ | 1992年创立于广东江门，与铃木合资成立常州豪爵铃木，中国产销量领先的摩托车品牌 |
| brand:cn:hengjian | Hengjian | 恒舰 | 恒艦 | ホウジエン | 创立于重庆江津，创始人税宗才，专注越野与拉力车型，代表作大海道500续航里程达1000公里 |
| brand:cn:jialing | Jialing | 嘉陵 | 嘉陵 | ジャリン | 前身为1875年成立的江南制造总局龙华分局，1979年生产出中国第一辆民用摩托嘉陵CJ50 |
| brand:cn:jianshe | Jianshe | 建设 | 建設 | ジェンシー | 中国兵器装备集团旗下，1992年与日本雅马哈合资成立重庆建设雅马哈，生产飞致、天剑、巧格等车型 |
| brand:cn:jincheng | Jincheng | 金城 | 金城 | ジンチェン | 1949年成立于南京，前身隶属中国航空工业体系，金城铃木AX100曾是一代经典，现以踏板车与迷你车型为主 |
| brand:cn:kove | KOVE | 凯越 | 凱越 | KOVE | 由张雪创立的国产越野拉力品牌，450Rally曾参加达喀尔拉力赛，以硬核拉力车与中大排量仿赛车型闻名 |
| brand:cn:kymco | KYMCO | 光阳 | 光陽 | KYMCO | 1963年创立于台湾高雄，光阳工业旗下品牌，全球最大的踏板车制造商之一 |
| brand:cn:lk | LK | 力刻 | 力刻 | LK | 浙江金浪科技有限公司旗下摩托车品牌，依托金浪发动机制造经验，主打318系列大踏板与复古踏板 |
| brand:cn:lifan | Lifan | 力帆 | 力帆 | リファン | 1992年尹明善创立于重庆，以摩托车制造起家，后拓展至汽车领域，是中国民营摩托的先驱 |
| brand:cn:loncin-voge | Loncin/Voge | 隆鑫/无极 | 隆鑫/無極 | ロンシン/ヴォーガ | 隆鑫通用动力1993年创立于重庆，Voge无极为旗下高端品牌，为宝马摩托代工发动机多年 |
| brand:cn:niu | Niu | 小牛 | 小牛 | ニウ | 2014年创立于北京，小牛电动旗下智能电动踏板车品牌，以智能互联和锂电技术著称，在中国及海外电动两轮车市场占有重要地位 |
| brand:cn:qjmotor | QJMOTOR | 钱江 | 錢江 | QJMOTOR | 钱江摩托旗下高端品牌，1999年钱江摩托成立于浙江温岭，2005年收购意大利百年品牌Benelli |
| brand:cn:qingqi | Qingqi | 轻骑 | 輕騎 | チンチー | 济南轻骑摩托车总厂旗下品牌，1994年与日本铃木合资成立济南轻骑铃木，以铃木技术踏板车和跨骑车著称 |
| brand:cn:sym | SYM | 三阳 | 三陽 | SYM | 1954年创立于台湾新竹，三阳工业旗下品牌，是台湾最早生产摩托车的企业之一 |
| brand:cn:shineray | Shineray | 鑫源 | 鑫源 | シンゲン | 1997年创立于重庆，重庆鑫源摩托车股份有限公司，中国最早一批复古车与ADV车型的开拓者，2014年收购意大利SWM品牌 |
| brand:cn:sundiro-honda | Sundiro-Honda | 新大洲本田 | 新大洲本田 | スンダイロホンダ | 新大洲控股（1988年创立于海南）与本田合资，2001年成立，主要生产190系列跨骑车与裂行等踏板车 |
| brand:cn:tayo | Tayo | 台荣 | 台榮 | タイロン | 2001年创立于浙江台州，台州市台荣车业科技旗下，以大排量踏板车见长，代表作探路者300 |
| brand:cn:voge | Voge | 无极 | 無極 | ヴォーガ | 隆鑫通用旗下高端摩托车品牌，Voge无级独立运营，产品线含RR仿赛、DS探险、CU巡航、AC咖啡复古等系列 |
| brand:cn:wangjiang | Wangjiang | 望江 | 望江 | ワンジアン | 重庆望江摩托车，曾与铃木合资生产经典望江铃木GN250，现以迷你挎子边三轮等个性车型为主 |
| brand:cn:wuyang-honda | Wuyang-Honda | 五羊-本田 | 五羊-本田 | ウーヤンホンダ | 1992年成立于广州，广汽集团与本田合资，本田在中国大陆设立的第一家合资摩托车企业，以190系列与踏板车著称 |
| brand:cn:yingang | Yingang | 银钢 | 銀鋼 | インガン | 1997年成立于重庆，重庆银钢科技集团旗下，以边三轮摩托车闻名，是国内边三轮市场的领军品牌 |
| brand:cn:zxmoto | ZXMOTO | 张雪机车 | 張雪機車 | ZXMOTO | 2024年4月创立于重庆，创始人张雪（原凯越机车创始人），主打高性能仿赛车型，820RR系列在WSBK赛事中屡获佳绩 |
| brand:cn:zongshen | Zongshen | 宗申 | 宗申 | ゾンシン | 1992年创立于重庆，左宗申创立，中国大型摩托车和发动机制造企业，参与MotoE赛事 |

### 3.俄罗斯

| ID | English | 简体中文 | 繁體中文 | 日本語 | 备注 |
|----|---------|----------|----------|--------|------|
| brand:ru:ural | Ural | 乌拉尔 | 烏拉爾 | ウラル | 1941年于苏联伊尔比特建厂，仿制宝马R71挎斗摩托而成的侧三轮摩托品牌，以坚固耐用和复古侧边车造型闻名，至今仍在生产 |

### 3.加拿大

| ID | English | 简体中文 | 繁體中文 | 日本語 | 备注 |
|----|---------|----------|----------|--------|------|
| brand:ca:can-am | Can-Am | Can-Am | Can-Am | キャンアム | 1972年由加拿大庞巴迪(BRP)推出，采用Rotax发动机，1970年代称霸motocross越野赛，现以Spyder和Ryker三轮摩托及全地形车闻名 |

### 3.印度

| ID | English | 简体中文 | 繁體中文 | 日本語 | 备注 |
|----|---------|----------|----------|--------|------|
| brand:in:bajaj | Bajaj | 巴贾吉 | 巴賈吉 | バジャージ | 1945年创立，印度最大摩托车制造商之一，与KTM有深度合作，旗下Pulsar系列在印度市场大获成功 |
| brand:in:hero | Hero | 英雄 | 英雄 | ヒーロー | 1984年与Honda合资成立，现为全球销量最大的摩托车厂商，在印度通勤车市场占主导地位 |
| brand:in:royal-enfield | Royal Enfield | 皇家恩菲尔德 | 皇家恩菲爾德 | ロイヤルエンフィールド | 1901年起源于英国，1955年在印度设立工厂生产，现为Eicher Motors旗下，以复古单缸巡航车闻名 |
| brand:in:tvs | TVS | TVS | TVS | TVS | 1978年开始生产摩托，TVS集团旗下，印度第三大摩托厂商，与BMW Motorrad有技术合作 |

### 3.奥地利

| ID | English | 简体中文 | 繁體中文 | 日本語 | 备注 |
|----|---------|----------|----------|--------|------|
| brand:at:gasgas | Gas Gas | Gas Gas | Gas Gas | GasGas | 1985年创立于西班牙，2019年被KTM集团收购迁至奥地利，以试验摩托车和越野车型闻名 |
| brand:at:husqvarna | Husqvarna | 胡思瓦娜 | 胡思瓦娜 | ハスクバーナ | 1689年创立于瑞典，现为KTM集团旗下，以越野摩托和复古Svartpilen/Vitpilen系列闻名 |
| brand:at:ktm | KTM | KTM | KTM | KTM | 1934年创立于奥地利马蒂霍芬，以越野摩托车和橙色涂装著称，在拉力赛和越野领域称霸 |
| brand:at:puch | Puch | 普赫 | 普赫 | プフ | 1899年由Johann Puch创立于奥地利格拉茨，后并入Steyr-Daimler-Puch集团，以Puch Maxi轻便摩托和GTS越野车闻名，摩托生产已停产但品牌授权延续 |

### 3.德国

| ID | English | 简体中文 | 繁體中文 | 日本語 | 备注 |
|----|---------|----------|----------|--------|------|
| brand:de:bmw-motorrad | BMW Motorrad | 宝马摩托 | 寶馬摩托 | BMWモトラッド | 1923年推出首辆摩托R32，宝马集团旗下，以水平对置双缸拳击手发动机和旅行车著称 |
| brand:de:dkw | DKW | DKW | DKW | DKW | 1922年起于德国茨肖保生产摩托，二冲程发动机技术的先驱，1932年与奥迪、霍希、漫游者合并为Auto Union汽车联盟，品牌最终消亡 |
| brand:de:mz | MZ | 姆兹 | 姆茲 | MZ | 前东德摩托车品牌，创立于1906年，以耐用的单缸二冲程发动机闻名，现属德国MZ集团 |
| brand:de:maico | Maico | 迈科 | 邁科 | マイコ | 1926年创立于德国普法芬霍芬，1970年代以250cc和500cc二冲程越野摩托称霸motocross赛场，后因经营问题破产 |
| brand:de:munch | Münch | 明希 | 明希 | ミュンヒ | 1966年由Friedel Münch创立于德国，以Mammut(猛犸)系列闻名，搭载NSU汽车发动机的超大排量旅行摩托，被誉为两轮巨兽 |
| brand:de:nsu | NSU | NSU | NSU | NSU | 1873年创立于德国内卡苏尔姆，20世纪50年代曾是世界最大摩托车制造商，以直列四缸赛车闻名，1963年停产摩托并入Auto Union(现奥迪) |

### 3.意大利

| ID | English | 简体中文 | 繁體中文 | 日本語 | 备注 |
|----|---------|----------|----------|--------|------|
| brand:it:aprilia | Aprilia | 阿普利亚 | 阿普利亞 | アプリリア | 1945年创立于意大利威尼斯，Piaggio集团旗下，在越野和WSBK赛事中成绩卓著 |
| brand:it:benelli | Benelli | 贝纳利 | 貝納利 | ベネリ | 1911年创立于意大利佩萨罗，欧洲最古老的摩托车品牌之一，2005年被中国钱江摩托收购 |
| brand:it:beta | Beta | 贝塔 | 貝塔 | ベータ | 1904年创立于意大利佛罗伦萨，以试验摩托(trials)和耐力越野车(enduro)著称，是国际摩托车试验赛和耐力赛的常胜品牌 |
| brand:it:bimota | Bimota | 比莫塔 | 比莫塔 | ビモータ | 1973年创立于意大利里米尼，由Valerio Bianchi、Giuseppe Morri和Massimo Tamburini三人姓氏首字母命名(BI-MO-TA)，以手工打造高端运动摩托著称，常配日系引擎与自家车架，现为Kawasaki参股经营 |
| brand:it:cagiva | Cagiva | 卡吉瓦 | 卡吉瓦 | カジバ | 1978年创立于意大利瓦雷泽，Castiglioni家族旗下，曾收购Ducati和MV Agusta，以越野与运动摩托闻名，现品牌基本处于休眠状态 |
| brand:it:ducati | Ducati | 杜卡迪 | 杜卡迪 | ドゥカティ | 1926年创立于意大利博洛尼亚，现为奥迪集团旗下，以L型双缸引擎和赛车血统闻名 |
| brand:it:energica | Energica | 恩纳吉卡 | 恩納吉卡 | エネルジカ | 2014年由CRP集团创立于意大利摩德纳，意大利首款高端电动运动摩托，2019至2022年为MotoE世界杯统规赛车供应商，2024年进入破产清算 |
| brand:it:gilera | Gilera | 吉列拉 | 吉列拉 | ジレラ | 1909年由Giuseppe Gilera创立于意大利阿尔科雷，1969年被Piaggio收购，曾以直列四缸GP赛车闻名，现主要生产踏板车和小型车 |
| brand:it:lambretta | Lambretta | 兰美达 | 蘭美達 | ランヴレッタ | 1947年由Innocenti公司推出于米兰，与Vespa齐名的意大利经典踏板车品牌，复古潮流文化符号，品牌多次转手后复兴 |
| brand:it:laverda | Laverda | 拉维达 | 拉維達 | ラベルダ | 1873年创立，曾以高性能三缸运动车型闻名，现品牌归属于Piaggio集团 |
| brand:it:mv-agusta | MV Agusta | MV阿古斯塔 | MV阿古斯塔 | MVアグスタ | 1945年创立于意大利米兰，被誉为摩托车中的法拉利，以精美工艺和高性能街车著称 |
| brand:it:moto-guzzi | Moto Guzzi | 摩托古兹 | 摩托古茲 | モトグッツィ | 1921年创立于意大利曼代洛-德尔拉里奥，以横置V型双缸引擎和旅行车闻名，Piaggio集团旗下 |
| brand:it:moto-morini | Moto Morini | 摩托莫里尼 | 摩托莫里尼 | モトモリーニ | 1937年由Alfonso Morini创立于意大利博洛尼亚，以V型双缸运动摩托和耐力车闻名，品牌几经易手后再度复兴 |
| brand:it:piaggio | Piaggio | 比亚乔 | 比亞喬 | ピアジオ | 1884年创立于意大利热那亚，欧洲最大的摩托车制造商之一，旗下拥有Vespa、Aprilia等品牌 |
| brand:it:swm | SWM | 斯威 | 斯威 | SWM | 1971年由Piero Sironi和Fausto Vegani创立于意大利米兰(取Speedy Working Motors之意)，以越野摩托著称，1984年破产，2014年被中国鑫源收购后复兴 |
| brand:it:vespa | Vespa | 维斯帕 | 偉士牌 | ベスパ | 1946年由Piaggio推出，意大利经典踏板车品牌，复古时尚文化的代表符号 |
| brand:it:vyrus | Vyrus | 维鲁斯 | 維魯斯 | ヴァイラス | 2002年创立于意大利里米尼附近，源自Bimota团队分立，以采用轮毂中心转向(hub-center steering)的独特设计闻名 |

### 3.捷克

| ID | English | 简体中文 | 繁體中文 | 日本語 | 备注 |
|----|---------|----------|----------|--------|------|
| brand:cz:cz | CZ | CZ | CZ | CZ | Česká zbrojovka（捷克兵工厂）1919年成立于捷克斯特拉科尼采，最初制造兵器，以二冲程越野摩托车闻名，1970-80年代在越野赛场战绩辉煌 |
| brand:cz:jawa | Jawa | 佳瓦 | 佳瓦 | ヤワ | 1929年由František Janeček创立于捷克布拉格(名称取自Janeček与Wanderer)，以耐用二冲程摩托闻名，至今仍在捷克和印度生产 |

### 3.日本

| ID | English | 简体中文 | 繁體中文 | 日本語 | 备注 |
|----|---------|----------|----------|--------|------|
| brand:jp:honda | Honda | 本田 | 本田 | ホンダ | 1948年由本田宗一郎创立，总部位于日本静冈县滨松市，全球最大的摩托车制造商之一，以可靠耐用著称 |
| brand:jp:kawasaki | Kawasaki | 川崎 | 川崎 | カワサキ | 川崎重工业旗下摩托车部门，始于1953年，以高性能大排量摩托和忍者系列闻名于世 |
| brand:jp:suzuki | Suzuki | 铃木 | 鈴木 | スズキ | 1909年由铃木道雄创立，总部位于日本静冈县滨松市，在小型车和越野摩托领域具有优势 |
| brand:jp:yamaha | Yamaha | 雅马哈 | 山葉 | ヤマハ | 1955年成立，雅马哈发动机株式会社旗下摩托车品牌，以高性能运动车型和乐器产业闻名 |

### 3.法国

| ID | English | 简体中文 | 繁體中文 | 日本語 | 备注 |
|----|---------|----------|----------|--------|------|
| brand:fr:peugeot-motocycles | Peugeot Motocycles | 标致摩托 | 標緻摩托 | プジョーモトサイクル | 1898年开始生产摩托车，标致集团旗下，欧洲老牌摩托品牌，2023年被德国Mutares收购 |
| brand:fr:sherco | Sherco | 舍尔科 | 舍爾科 | シェルコ | 1998年创立于法国尼姆，以试验摩托和耐力越野车闻名，多次夺得世界摩托车试验赛冠军，是trials领域的领军品牌之一 |
| brand:fr:voxan | Voxan | 沃克桑 | 沃克桑 | ヴォクサン | 1995年由Jacques Gardette创立于法国伊苏瓦尔，曾以996cc V型双缸闻名，2009年破产后被摩纳哥Venturi集团收购，转向电动摩托(Wattman打破多项速度纪录) |

### 3.瑞典

| ID | English | 简体中文 | 繁體中文 | 日本語 | 备注 |
|----|---------|----------|----------|--------|------|
| brand:se:husaberg | Husaberg | 胡斯贝格 | 胡斯貝格 | フサベルグ | 1988年由前Husqvarna工程师在瑞典创立(Husqvarna被Cagiva收购后出走)，1995年被KTM收购，2014年并入Husqvarna品牌后停用 |

### 3.美国

| ID | English | 简体中文 | 繁體中文 | 日本語 | 备注 |
|----|---------|----------|----------|--------|------|
| brand:us:buell | Buell | 布尔 | 布爾 | ビューエル | 1983年由Erik Buell创立，曾为Harley-Davidson旗下运动摩托品牌，以创新底盘设计闻名 |
| brand:us:harley-davidson | Harley-Davidson | 哈雷戴维森 | 哈雷戴維森 | ハーレーダビッドソン | 1903年由William Harley和Davidson三兄弟在密尔沃基创立，美国传奇巡航摩托品牌，V型双缸引擎的代表 |
| brand:us:indian | Indian | 印第安 | 印第安 | インディアン | 1901年创立，美国最古老的摩托车品牌，现为Polaris Industries旗下，以经典巡航车型著称 |
| brand:us:livewire | LiveWire | LiveWire | LiveWire | ライブワイヤー | 源自Harley-Davidson 2019年独立出的电动摩托业务，2022年通过SPAC上市成为美股首家上市电动摩托公司，主打高性能纯电街车 |
| brand:us:polaris | Polaris | 北极星 | 北極星 | ポラリス | 1954年创立于美国明尼苏达州罗索，北美最大动力运动厂商，旗下拥有Indian摩托和Slingshot三轮车，曾拥有Victory摩托(2017年停产) |
| brand:us:zero | Zero | Zero | Zero | ゼロ | 2006年由Neal Saiki创立于美国加州斯科茨谷，电动摩托车的先驱品牌，以纯电街车、越野和超级摩托产品线闻名 |

### 3.英国

| ID | English | 简体中文 | 繁體中文 | 日本語 | 备注 |
|----|---------|----------|----------|--------|------|
| brand:gb:ajs | AJS | AJS | AJS | AJS | 1909年由Stevens兄弟创立于英国伍尔弗汉普顿，英国老牌摩托车厂商，以单缸和V型双缸赛车闻名，品牌经多次转手延续至今 |
| brand:gb:ariel | Ariel | 阿瑞尔 | 阿瑞爾 | アリエル | 1902年开始生产摩托于英国伯明翰，以经典的Square Four方四缸引擎闻名，1960年代停产，后以Ariel Motor Company之名复兴生产汽车 |
| brand:gb:bsa | BSA | BSA | BSA | BSA | Birmingham Small Arms，1903年开始生产摩托，20世纪中期曾是世界最大摩托厂商，现为Mahindra集团旗下 |
| brand:gb:ccm | CCM | CCM | CCM | CCM | 1971年由Alan Clews创立于英国博尔顿(Clews Competition Motorcycles)，以高性能越野和街头摩托著称，仍活跃生产 |
| brand:gb:matchless | Matchless | 麦奇莱斯 | 麥奇萊斯 | マッチレス | 1899年由Collier兄弟创立于英国伦敦，英国历史最悠久的摩托车品牌之一，曾与AJS同属Associated Motor Cycles集团，1960年代停产 |
| brand:gb:norton | Norton | 诺顿 | 諾頓 | ノートン | 1898年创立于英国伯明翰，英国老牌传奇摩托车品牌，以单缸和V型双缸赛车闻名 |
| brand:gb:triumph | Triumph | 凯旋 | 凱旋 | トライアンフ | 1902年创立于英国考文垂，英国最具代表性的摩托车品牌，以复古街车和三缸引擎闻名 |

### 3.西班牙

| ID | English | 简体中文 | 繁體中文 | 日本語 | 备注 |
|----|---------|----------|----------|--------|------|
| brand:es:bultaco | Bultaco | 布尔塔科 | 布爾塔科 | ブルタコ | 1958年创立于西班牙巴塞罗那，以越野和试验摩托车闻名，品牌现由西班牙企业持有复兴 |
| brand:es:derbi | Derbi | 德比 | 德比 | デルビ | 1922年创立于西班牙巴塞罗那，Piaggio集团旗下，以小型跑车和踏板车著称 |
| brand:es:montesa | Montesa | 蒙特萨 | 蒙特薩 | モンテッサ | 1945年由Pere Permanyer创立于西班牙巴塞罗那(早期Bultó参与，后Bultó另立Bultaco)，1986年被本田收购，现为Honda Montesa专注试验摩托 |
| brand:es:rieju | Rieju | 雷玖 | 雷玖 | リエジュ | 1934年创立于西班牙费格拉斯，以小型排量越野摩托和耐力车著称，长期采用Minarelli/Yamaha引擎，西班牙老牌摩托厂商 |

### 3.韩国

| ID | English | 简体中文 | 繁體中文 | 日本語 | 备注 |
|----|---------|----------|----------|--------|------|
| brand:kr:daelim | Daelim | 大林 | 大林 | デイリム | 大林集团旗下，1962年成立，韩国老牌摩托车厂商，以踏板车和小型通勤车为主 |
| brand:kr:hyosung | Hyosung | 晓星 | 曉星 | ヒョソン | 晓星集团旗下，1978年成立，曾与铃木技术合作，韩国主要摩托车制造商之一 |

---

## 4. 车型名录 (Models)

### 4.AJS (26款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:ajs:7r-boy-racer | 7R Boy Racer | 7R Boy Racer 单缸赛车（停产） | 7R Boy Racer 單缸賽車（停產） | 7R ボーイレーサー | class:disp:400cc | body:sport | pt:ice | discontinued | 1948–1963 | AJS最著名的348cc单顶置凸轮轴单缸赛车，绰号少年赛车手，曼岛TT与私人车队赛的传奇车型，1957年比尔·尼尔森改装7R赢得首届500cc越野世界锦标赛 |
| model:ajs:7r3 | 7R3 | 7R3 单缸赛车（停产） | 7R3 單缸賽車（停產） | 7R3 | class:disp:400cc | body:sport | pt:ice | discontinued | 1951–1954 | 7R的三气门缸头工厂特制版，为应对意大利多缸赛车而开发，1954年改进后赢得世界锦标赛前两轮及曼岛TT |
| model:ajs:big-port | Big Port | Big Port 单缸摩托车（停产） | Big Port 單缸摩托車（停產） | ビッグポート | class:disp:400cc | body:naked | pt:ice | discontinued | 1922–1927 | 350cc顶置气门单缸运动车，以大直径排气口得名，1920年代AJS最受欢迎的运动车型，1923年起公开销售 |
| model:ajs:h5 | H5 | H5 单缸摩托车（停产） | H5 單缸摩托車（停產） | H5 | class:disp:400cc | body:naked | pt:ice | discontinued | 1928 | 1928年款350cc单缸运动车，1935年英国电影《No Limit》中主角驾驶的Shuttleworth Snap摩托车即以此为原型 |
| model:ajs:model-10 | Model 10 | Model 10 单缸赛车（停产） | Model 10 單缸賽車（停產） | モデル10 | class:disp:600cc | body:sport | pt:ice | discontinued | 1929–1931 | 498cc顶置凸轮轴单缸赛车，接续1927年K10工厂赛车，为战前AJS大排量竞赛机器，1929年售价约72英镑 |
| model:ajs:model-12 | Model 12 | Model 12 单缸摩托车（停产） | Model 12 單缸摩托車（停產） | モデル12 | class:disp:250cc | body:naked | pt:ice | discontinued | 1929–1931 | 248cc侧阀单缸轻量车，1929年M系列中的入门级车型，售价仅约40英镑，为当时AJS最便宜的摩托车 |
| model:ajs:model-14 | Model 14 | Model 14 单缸摩托车（停产） | Model 14 單缸摩托車（停產） | モデル14 | class:disp:250cc | body:naked | pt:ice | discontinued | 1958–1960 | 248cc两冲程单缸轻量级摩托车，与Matchless G2同平台，为AMC于1958年推出的250cc轻型车系，1959年增派生14CS越野版 |
| model:ajs:model-16 | Model 16 | Model 16 单缸摩托车（停产） | Model 16 單缸摩托車（停產） | モデル16 | class:disp:400cc | body:naked | pt:ice | discontinued | 1949–1967 | 348cc单缸摩托车，战后AJS主力公路车型，多次参与ISDT国际六日赛并夺奖 |
| model:ajs:model-16mc | Model 16MC | Model 16MC 单缸越野摩托车（停产） | Model 16MC 單缸越野摩托車（停產） | モデル16MC | class:disp:400cc | body:enduro | pt:ice | discontinued | 1947–1958 | 348cc单缸竞赛版车型，C代表Competition，常用于国际六日赛(ISDT)等耐力越野赛事，与Matchless G3LC同平台 |
| model:ajs:model-16ms | Model 16MS | Model 16MS 单缸摩托车（停产） | Model 16MS 單缸摩托車（停產） | モデル16MS | class:disp:400cc | body:naked | pt:ice | discontinued | 1948–1958 | 348cc单缸运动版公路车，Model 16系列的运动型号，S代表弹簧后悬挂，与Matchless G3LS同平台 |
| model:ajs:model-18 | Model 18 | Model 18 单缸摩托车（停产） | Model 18 單缸摩托車（停產） | モデル18 | class:disp:600cc | body:naked | pt:ice | discontinued | 1945–1966 | 498cc推杆顶置气门单缸车，与Matchless G80同平台，源自1930年代设计，是战后英国大单缸时代的代表作 |
| model:ajs:model-18cs | Model 18CS | Model 18CS 单缸越野摩托车（停产） | Model 18CS 單缸越野摩托車（停產） | モデル18CS | class:disp:600cc | body:scrambler | pt:ice | discontinued | 1951–1966 | 498cc单缸攀爬赛车型，C代表竞赛、S代表悬挂，1956年起改为86mm缸径短行程版本，是AMC越野赛车代表作 |
| model:ajs:model-18s | Model 18S | Model 18S 单缸摩托车（停产） | Model 18S 單缸摩托車（停產） | モデル18S | class:disp:600cc | body:naked | pt:ice | discontinued | 1949–1966 | Model 18的后悬挂版本，S代表弹簧后悬挂，1951年起改用Jampot减震器，1960年代中期被昵称为政治家(The Statesman) |
| model:ajs:model-20 | Model 20 | Model 20 双缸摩托车（停产） | Model 20 雙缸摩托車（停產） | モデル20 | class:disp:600cc | body:naked | pt:ice | discontinued | 1949–1959 | 498cc并列双缸车，AMC战后首款民用双缸，与Matchless G9同平台，1959年衍生出DeLuxe/Standard/CS/CSR版本 |
| model:ajs:model-20csr | Model 20CSR | Model 20CSR 双缸摩托车（停产） | Model 20CSR 雙缸摩托車（停產） | モデル20CSR | class:disp:600cc | body:naked | pt:ice | discontinued | 1959 | 498cc并列双缸高性能公路版，CSR代表竞赛风格公路车，与Matchless G9CSR同平台，为Model 20车系末期的运动旗舰 |
| model:ajs:model-30 | Model 30 | Model 30 双缸摩托车（停产） | Model 30 雙缸摩托車（停產） | モデル30 | class:disp:600cc | body:naked | pt:ice | discontinued | 1956–1959 | 593cc并列双缸车，AMC首款600cc级民用双缸，与Matchless G11同平台，1958年推出30CS与30CSR运动版本 |
| model:ajs:model-31 | Model 31 | Model 31 双缸摩托车（停产） | Model 31 雙缸摩托車（停產） | モデル31 | class:disp:750cc | body:naked | pt:ice | discontinued | 1949–1968 | 646cc并列双缸摩托车，与Matchless G11/G12同平台，AJS战后期最大排量公路车 |
| model:ajs:model-33 | Model 33 | Model 33 双缸摩托车（停产） | Model 33 雙缸摩托車（停產） | モデル33 | class:disp:750cc | body:naked | pt:ice | discontinued | 1963–1969 | 646cc并列双缸车，与Matchless G15及Norton N15CS同平台的G15系列成员，分M33 Mk2/CS/CSR三款，是AJS最后一款四冲程车型 |
| model:ajs:model-7 | Model 7 | Model 7 单缸摩托车（停产） | Model 7 單缸摩托車（停產） | モデル7 | class:disp:400cc | body:naked | pt:ice | discontinued | 1929–1931 | 349cc顶置凸轮轴单缸车，1929年M系列中的凸轮轴高速型号，也是战前AJS著名的竞赛机器之一 |
| model:ajs:model-8 | Model 8 | Model 8 单缸摩托车（停产） | Model 8 單缸摩托車（停產） | モデル8 | class:disp:600cc | body:naked | pt:ice | discontinued | 1929–1931 | 498cc顶置气门单缸车，1929年M系列中排量最大的OHV单缸公路车型，提供单口与双口排气两种版本 |
| model:ajs:porcupine | Porcupine | Porcupine 双缸赛车（停产） | Porcupine 雙缸賽車（停產） | ポーキュパイン | class:disp:600cc | body:sport | pt:ice | discontinued | 1945–1954 | 500cc双顶置凸轮轴水平双缸赛车，原为机械增压设计，1949年由Les Graham驾驶E90夺得首届世界摩托车锦标赛500cc冠军，E95仅制造4台 |
| model:ajs:r7 | R7 | R7 单缸赛车（停产） | R7 單缸賽車（停產） | R7 | class:disp:400cc | body:sport | pt:ice | discontinued | 1929–1930 | 350cc顶置凸轮轴单缸工厂赛车，1929年赢得9场大奖赛中的8场，并在法国蒙特里赛道创下一小时104.5英里等多项世界纪录 |
| model:ajs:s3 | S3 | S3 双缸摩托车（停产） | S3 雙缸摩托車（停產） | S3 Vツイン | class:disp:600cc | body:touring | pt:ice | discontinued | 1931–1932 | 496cc横置V型双缸旅行车，采用合金缸头与轴传动初级驱动，研发成本过高导致销售不畅，1931年AJS被Matchless收购 |
| model:ajs:silver-streak | Silver Streak | Silver Streak 单缸摩托车（停产） | Silver Streak 單缸摩托車（停產） | シルバーストリーク | class:disp:600cc | body:naked | pt:ice | discontinued | 1938–1939 | 1938年推出的超级运动车系，提供250/350/500cc顶置气门单缸三种排量，以大量镀铬件与手工调校引擎为卖点，500cc版为498cc |
| model:ajs:stormer | Stormer | Stormer 越野摩托车（停产） | Stormer 越野摩托車（停產） | ストーマー | class:disp:400cc | body:motocross | pt:ice | discontinued | 1968–1974 | 250/370/410cc两冲程越野赛车，前身为1968年250cc Y4，1969年更名Stormer并推出370cc Y5，1972年增加410cc版本，是AJS品牌最后的竞赛系列 |
| model:ajs:v4 | V4 | V4 四缸赛车（停产） | V4 四缸賽車（停產） | V4 | class:disp:600cc | body:sport | pt:ice | discontinued | 1936–1939 | 495cc水冷机械增压V4赛车，1939年成为首台在阿尔斯特大奖赛跑出单圈超过100英里时速的摩托车，因二战爆发而停止开发 |

### 4.Aprilia (46款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:aprilia:af1-125 | AF1 125 | AF1 125 二冲程仿赛 | AF1 125 二衝程仿賽 | AF1 125 | class:disp:125cc | body:sport | pt:ice | discontinued | 1986–1993 | 1986年推出的125cc二冲程仿赛，搭载Rotax发动机，1987年Loris Reggiani驾驶AF1为阿普利亚夺得首个GP分站冠军 |
| model:aprilia:af1-50 | AF1 50 | AF1 50 小排量仿赛 | AF1 50 小排量仿賽 | AF1 50 | class:disp:50cc | body:sport | pt:ice | discontinued | 1986–1993 | 1986年推出的50cc二冲程小排量仿赛，AF1运动车系入门款，RS系列前身 |
| model:aprilia:amico | Amico | Amico 全塑踏板车 | Amico 全塑踏板車 | アミーコ | class:disp:50cc | body:scooter | pt:ice | discontinued | 1990–1997 | 1990年推出的意大利首款全塑料外壳踏板车，大轮径设计，欧式大脚羊（大轮踏板）代表，后衍生Scarabeo踏板系列 |
| model:aprilia:caponord-1200-rally | Caponord 1200 Rally | Caponord 1200 Rally 老款探险车（停产） | Caponord 1200 Rally 老款探險車（停產） | カポノルド1200ラリー | class:disp:1000cc | body:adventure | pt:ice | discontinued | 2015–2017 | 1197cc V缸Dorsoduro同引擎，ADD半自动悬挂，Rally辐条轮版，已停产 |
| model:aprilia:colibri | Colibrì | Colibrì 轻便摩托车 | Colibrì 輕便摩托車 | コリブリ | class:disp:50cc | body:mini | pt:ice | discontinued | 1968–1975 | 阿普利亚首批量产轻便摩托车（moped）之一，与Daniela、Packi同为品牌初创期产品 |
| model:aprilia:dani | Dani 50 | Dani 50 首款50cc摩托车 | Dani 50 首款50cc摩托車 | ダニ50 | class:disp:50cc | body:mini | pt:ice | discontinued | 1968–1972 | 阿普利亚首款50cc摩托车，创始人之子Ivano Beggio接手公司后开发，阿普利亚摩托车之路的起点 |
| model:aprilia:dorsoduro-750 | Dorsoduro 750 | Dorsoduro 750 滑胎超级摩托（停产） | Dorsoduro 750 滑胎超級摩托（停產） | ドルソドゥーロ750 | class:disp:750cc | body:supermoto | pt:ice | discontinued | 2008–2013 | 749cc V缸，Dorsoduro系列初代滑胎车，2013年停产 |
| model:aprilia:dorsoduro-900 | Dorsoduro 900 | Dorsoduro 900 滑胎超级摩托（停产） | Dorsoduro 900 滑胎超級摩托（停產） | ドルソドゥーロ900 | class:disp:750cc | body:supermoto | pt:ice | discontinued | 2017–2020 | 896cc 90°V缸，Aprilia经典滑胎车，高把大转向角，已停产 |
| model:aprilia:etv1000-caponord | ETV 1000 Caponord | ETV 1000 Caponord 探险旅行车 | ETV 1000 Caponord 探險旅行車 | ETV1000カポノルド | class:disp:1000cc | body:adventure | pt:ice | discontinued | 2001–2007 | 2001年推出的1000cc V型双缸探险旅行车，Rotax发动机，面向长途ADV市场，Caponord车系鼻祖 |
| model:aprilia:mana-850 | Mana 850 | Mana 850 自动挡街车（停产） | Mana 850 自動擋街車（停產） | マナ850 | class:disp:750cc | body:naked | pt:ice | discontinued | 2007–2012 | 839cc V缸，创新CVT无级自动变速箱街车，2012年停产 |
| model:aprilia:moto-6.5 | Moto 6.5 | Moto 6.5 设计艺术街车 | Moto 6.5 設計藝術街車 | モト6.5 | class:disp:600cc | body:naked | pt:ice | discontinued | 1995–2002 | 1995年由设计师Philippe Starck操刀的650cc单缸艺术街车，曾展出纽约现代艺术博物馆，1997年停产、1999年复产至2002年 |
| model:aprilia:mx-50 | MX 50 | MX 50 越野摩托车 | MX 50 越野摩托車 | MX50 | class:disp:50cc | body:motocross | pt:ice | discontinued | 1981–1992 | 1980年代二冲程越野摩托车，MX系列50cc入门款，欧洲青少年越野入门经典 |
| model:aprilia:pegaso-600 | Pegaso 600 | Pegaso 600 单缸耐力街车 | Pegaso 600 單缸耐力街車 | ペガソ600 | class:disp:600cc | body:dual-sport | pt:ice | discontinued | 1990–1995 | 1990年推出的600cc单缸街车，由越野平台衍生，搭载Rotax发动机，Pegaso车系首款 |
| model:aprilia:pegaso-650 | Pegaso 650 | Pegaso 650 单缸探险车 | Pegaso 650 單缸探險車 | ペガソ650 | class:disp:600cc | body:dual-sport | pt:ice | discontinued | 1997–2009 | 650cc单缸（与宝马F650同源Rotax发动机），1997年改款为长途ADV风格，2006年再街车化，Pegaso车系收官 |
| model:aprilia:rs-125 | RS 125 / RS 250 SP | RS 125/RS 250 SP 小排量仿赛 | RS 125/RS 250 SP 小排量仿賽 | RS125/RS250SP | class:disp:125cc | body:sport | pt:ice | current | 2021–present | RS系列入门，RS125单缸/RS250 SP双缸，年轻车手入门赛道首选 |
| model:aprilia:rs-125-2t | RS 125 (two-stroke) | RS 125 二冲程仿赛（老款） | RS 125 二衝程仿賽（老款） | RS125（2ストローク） | class:disp:125cc | body:sport | pt:ice | discontinued | 1995–2011 | 1995年推出的125cc二冲程仿赛，搭载Rotax发动机，罗西等GP世界冠军战车的民用版，后由RS4 125接替 |
| model:aprilia:rs-250 | RS 250 | RS 250 二冲程V缸仿赛 | RS 250 二衝程V缸仿賽 | RS250 | class:disp:250cc | body:sport | pt:ice | discontinued | 1995–2004 | 1995年推出的250cc二冲程V型双缸仿赛，搭载铃木RGV250同源V缸发动机，约72马力，欧系二冲程绝唱 |
| model:aprilia:rs-457 | RS 457 | RS 457 入门仿赛 | RS 457 入門仿賽 | RS457 | class:disp:600cc | body:sport | pt:ice | current | 2024–present | 457cc并列双缸，2024年全新入门仿赛，轻量化铝合金车架，A2驾照友好 |
| model:aprilia:rs-457-gp-replica | RS 457 GP Replica | RS 457 GP Replica MotoGP涂装特别版仿赛 | RS 457 GP Replica MotoGP塗裝特別版仿賽 | RS457 GPレプリカ | class:disp:400cc | body:sport | pt:ice | current | 2026–present | 2026年RS 457特别版，457cc双缸，MotoGP厂队赛车涂装贴花，入门仿赛新配色 |
| model:aprilia:rs-50 | RS 50 | RS 50 二冲程小排量仿赛 | RS 50 二衝程小排量仿賽 | RS50 | class:disp:50cc | body:sport | pt:ice | discontinued | 1992–2005 | 50cc二冲程仿赛，RS家族最小排量，1990年代欧洲青少年入门赛道首选，后由RS4 50接替 |
| model:aprilia:rs-660 | RS 660 | RS 660 中量级仿赛 | RS 660 中量級仿賽 | RS660 | class:disp:600cc | body:sport | pt:ice | current | 2020–present | 659cc并列双缸前倾270°，100马力，气动翼，电子系统全面，中量级新标杆 |
| model:aprilia:rst1000-futura | RST 1000 Futura | RST 1000 Futura 运动旅行车 | RST 1000 Futura 運動旅行車 | RST1000フューチュラ | class:disp:1000cc | body:sport-touring | pt:ice | discontinued | 2000–2004 | 2000年推出的998cc V型双缸运动旅行车，半整流罩设计，Rotax发动机，长途舒适取向 |
| model:aprilia:rsv-mille | RSV Mille | RSV Mille 超级跑车 | RSV Mille 超級跑車 | RSVミッレ | class:disp:1000cc | body:sport | pt:ice | discontinued | 1998–2003 | 阿普利亚首款V型双缸超级跑车，998cc Rotax发动机，1999年起征战WSBK，RSV4的前身 |
| model:aprilia:rsv1000r | RSV 1000R | RSV 1000R 超级跑车 | RSV 1000R 超級跑車 | RSV1000R | class:disp:1000cc | body:sport | pt:ice | discontinued | 2004–2008 | RSV Mille继任者，998cc V型双缸，含Factory高规格版，RSV4推出前的阿普利亚旗舰仿赛 |
| model:aprilia:rsv4-1100-factory | RSV4 1100 Factory | RSV4 1100 Factory 旗舰仿赛 | RSV4 1100 Factory 旗艦仿賽 | RSV4 1100ファクトリー | class:disp:1000cc | body:sport | pt:ice | current | 2021–present | 1099cc 65°V4，217马力，MotoGP气动翼，Ohlins NPX前叉，WSBK技术下放 |
| model:aprilia:rsv4-factory-2026 | RSV4 Factory (2026) | RSV4 Factory 2026款 旗舰仿赛 | RSV4 Factory 2026款 旗艦仿賽 | RSV4ファクトリー（2026） | class:disp:1000cc | body:sport | pt:ice | current | 2026–present | 2026厂车版重大更新，1100cc V4，升级空气动力学与电控，MotoGP技术下放 |
| model:aprilia:rsv4-xtrenta | RSV4 XTrenta | RSV4 XTrenta 限量赛道旗舰仿赛 | RSV4 XTrenta 限量賽道旗艦仿賽 | RSV4 エックストレンタ | class:disp:1000cc | body:sport | pt:ice | current | 2023–present | 1100cc V4 230马力，XTrenta全球限量100台，全碳纤维，MotoGP气动技术 |
| model:aprilia:rx-125 | RX 125 | RX 125 林道越野车 | RX 125 林道越野車 | RX125 | class:disp:125cc | body:enduro | pt:ice | current | 2024–present | 125cc单缸林道车，2024年新一代，辐条轮越野风格，SX125的耐力版 |
| model:aprilia:rx-50 | RX 50 | RX 50 林道越野车 | RX 50 林道越野車 | RX50 | class:disp:50cc | body:enduro | pt:ice | discontinued | 1984–1993 | 1980年代二冲程耐力越野车（enduro），RX系列入门排量，与MX越野版互为兄弟车型 |
| model:aprilia:rxv-450-550 | RXV 450 / RXV 550 | RXV 450/550 越野耐力车 | RXV 450/550 越野耐力車 | RXV450/550 | class:disp:400cc | body:enduro | pt:ice | discontinued | 2006–2009 | 2006年推出的V型双缸450/550cc越野耐力车，与SXV同平台，SXV的耐力越野版 |
| model:aprilia:scarabeo-50 | Scarabeo 50 | Scarabeo 50 越野摩托车 | Scarabeo 50 越野摩托車 | スカラベオ50 | class:disp:50cc | body:motocross | pt:ice | discontinued | 1970–1979 | 1970年推出的越野摩托车（motocross），50/125cc两款，生产至1970年代末，阿普利亚越野赛车辉煌的开端 |
| model:aprilia:shiver-900 | Shiver 900 | Shiver 900 街车（停产） | Shiver 900 街車（停產） | シヴァー900 | class:disp:750cc | body:naked | pt:ice | discontinued | 2017–2020 | 896cc V缸，Shiver系列升级版，Dorsoduro同引擎街车版，已停产 |
| model:aprilia:sl1000-falco | SL 1000 Falco | SL 1000 Falco 运动旅行车 | SL 1000 Falco 運動旅行車 | SL1000ファルコ | class:disp:1000cc | body:sport-touring | pt:ice | discontinued | 1998–2004 | 1998年推出的1000cc V型双缸运动旅行车，与RSV Mille同平台Rotax发动机，偏运动取向 |
| model:aprilia:sr-gt-125 | SR GT 125 / SR GT 200 | SR GT 125/200 跨界运动踏板 | SR GT 125/200 跨界運動踏板 | SR GT125/200 | class:disp:125cc | body:scooter | pt:ice | current | 2022–present | 跨界ADV风格踏板，14寸大脚，174cc/125cc两款，i-get发动机，运动玩乐取向 |
| model:aprilia:sx-125 | SX 125 | SX 125 滑胎超级摩托 | SX 125 滑胎超級摩托 | SX125 | class:disp:125cc | body:supermoto | pt:ice | current | 2024–present | 125cc单缸滑胎车，2024年新一代，轻量化越野风格，A1驾照可骑 |
| model:aprilia:sxv-450-550 | SXV 450 / SXV 550 | SXV 450/550 滑胎超级摩托 | SXV 450/550 滑胎超級摩托 | SXV450/550 | class:disp:400cc | body:supermoto | pt:ice | discontinued | 2006–2009 | 2006年推出的V型双缸450/550cc滑胎车，曾横扫FIM Supermoto世锦赛S1/S2级别冠军，滑胎界传奇 |
| model:aprilia:tl320 | TL 320 | TL 320 障碍攀爬车 | TL 320 障礙攀爬車 | TL320 | class:disp:400cc | body:enduro | pt:ice | discontinued | 1981–1988 | 1981年推出的障碍攀爬车（trials），320cc二冲程，为阿普利亚日后称霸世界障碍锦标赛打下基础 |
| model:aprilia:tuareg-600 | Tuareg 600 | Tuareg 600 达喀尔拉力越野车 | Tuareg 600 達卡拉力越野車 | トゥアレグ600 | class:disp:600cc | body:enduro | pt:ice | discontinued | 1986–1993 | 1986年推出的大油箱拉力越野车，专为达喀尔等非洲拉力赛设计，Tuareg车系鼻祖 |
| model:aprilia:tuareg-660 | Tuareg 660 | Tuareg 660 中量级探险车 | Tuareg 660 中量級探險車 | トゥアレグ660 | class:disp:600cc | body:adventure | pt:ice | current | 2022–present | 659cc双缸RS660同平台，21/18辐条轮，达喀尔血统，硬派越野ADV |
| model:aprilia:tuareg-660-rally | Tuareg 660 Rally | Tuareg 660 Rally 达喀尔限量硬派探险 | Tuareg 660 Rally 達卡限量硬派探險 | トゥアレグ660ラリー | class:disp:600cc | body:adventure | pt:ice | current | 2024–present | Tuareg 660限量拉力版，24L油箱，越野强化，专属达喀尔涂装，限量发售 |
| model:aprilia:tuono-1000r | Tuono 1000R | Tuono 1000R 公升级街车 | Tuono 1000R 公升級街車 | トゥオーノ1000R | class:disp:1000cc | body:naked | pt:ice | discontinued | 2003–2010 | 2003年推出的公升级街车，RSV Mille的街车版，高把加小号整流罩，被多家媒体评为年度最佳街车 |
| model:aprilia:tuono-457 | Tuono 457 | Tuono 457 入门运动街车 | Tuono 457 入門運動街車 | トゥオーノ457 | class:disp:400cc | body:naked | pt:ice | current | 2025–present | 2025年全新入门街车，457cc并列双缸48马力，铝合金车架干重157kg，RS 457同平台 |
| model:aprilia:tuono-660 | Tuono 660 | Tuono 660 中量级运动街车 | Tuono 660 中量級運動街車 | トゥオーノ660 | class:disp:600cc | body:naked | pt:ice | current | 2021–present | 659cc并列双缸，RS660街车版，95马力，中量级运动街车新选择 |
| model:aprilia:tuono-660-factory | Tuono 660 Factory | Tuono 660 Factory 中量级运动街车 | Tuono 660 Factory 中量級運動街車 | トゥオーノ660ファクトリー | class:disp:600cc | body:naked | pt:ice | current | 2022–present | 659cc并列双缸RS660同平台，95马力，半整流运动街车，Factory高规格 |
| model:aprilia:tuono-v4-factory | Tuono V4 Factory | Tuono V4 Factory 公升级运动街车 | Tuono V4 Factory 公升級運動街車 | トゥオーノV4ファクトリー | class:disp:1000cc | body:naked | pt:ice | current | 2021–present | 1099cc 65°V4，175马力，RSV4街车版，Ohlins智能悬挂，顶级性能街车 |
| model:aprilia:tuono-v4-factory-2026 | Tuono V4 Factory (2026) | Tuono V4 Factory 2026款 公升级运动街车 | Tuono V4 Factory 2026款 公升級運動街車 | トゥオーノV4ファクトリー（2026） | class:disp:1000cc | body:naked | pt:ice | current | 2026–present | 2026厂车版重大更新，1099cc V4，RSV4同源动力，Ohlins智能悬挂，旗舰性能街车 |

### 4.Ariel (22款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:ariel:ariel-3 | Ariel 3 | Ariel 3 倾斜三轮车 | Ariel 3 傾斜三輪車 | アリエル 3 | class:disp:50cc | body:trike | pt:ice | discontinued | 1970 | 1970年BSA以Ariel之名推出的49cc自动挡可倾斜三轮车，过弯时车体可倾斜保持三轮着地，设计后来授权给本田发展为Gyro系列 |
| model:ariel:arrow | Arrow | Arrow 二冲程街车 | Arrow 二衝程街車 | アロー | class:disp:250cc | body:naked | pt:ice | discontinued | 1959–1967 | Leader的简化开放版，1959年推出，保留封闭链条盒与深挡泥板，价格更亲民，1965年后由BSA续产至1967年 |
| model:ariel:arrow-200 | Arrow 200 | Arrow 200 二冲程街车 | Arrow 200 二衝程街車 | アロー 200 | class:disp:250cc | body:naked | pt:ice | discontinued | 1964–1967 | 1964年推出的200cc缩缸版Arrow，为享受更低英国保险费率而设，是Ariel品牌最后一款摩托车 |
| model:ariel:black-ariel | Black Ariel | Black Ariel 单缸街车 | Black Ariel 單缸街車 | ブラックアリエル | class:disp:600cc | body:naked | pt:ice | discontinued | 1926–1930 | Val Page 1926年设计的全新单缸发动机系列，黑色涂装配马形车标而得名，奠定了此后30年Ariel四冲程单缸车的基础 |
| model:ariel:fh-huntmaster | FH Huntmaster | FH Huntmaster 650 平行双缸街车 | FH Huntmaster 650 平行雙缸街車 | FH ハントマスター | class:disp:750cc | body:naked | pt:ice | discontinued | 1954–1959 | 650cc平行双缸，采用BSA A10发动机贴牌生产并命名为Huntmaster，可靠且可达100英里/小时，深受边三轮爱好者欢迎 |
| model:ariel:golden-arrow | Golden Arrow | Golden Arrow 二冲程运动车 | Golden Arrow 二衝程運動車 | ゴールデンアロー | class:disp:250cc | body:naked | pt:ice | discontinued | 1961–1963 | 1961年推出的Arrow运动版，调校更强，是Ariel对抗当时涌入的日本小排量车而打造的性能版本 |
| model:ariel:kg-500 | KG 500 | KG 500 平行双缸街车 | KG 500 平行雙缸街車 | KG 500 | class:disp:600cc | body:naked | pt:ice | discontinued | 1948–1953 | 1948年推出的500cc平行双缸，低调校的入门版本，与KH共用同一款发动机 |
| model:ariel:kh-500 | KH 500 | KH 500 平行双缸街车 | KH 500 平行雙缸街車 | KH 500 | class:disp:600cc | body:naked | pt:ice | discontinued | 1948–1958 | 500cc平行双缸的高调校版本，后期被命名为Fieldmaster，与KG组成Ariel战后的双缸产品线 |
| model:ariel:kha | KHA | KHA 500 运动双缸街车 | KHA 500 運動雙缸街車 | KHA | class:disp:600cc | body:naked | pt:ice | discontinued | 1954–1958 | 1954年推出的KH高性能版，配铝合金缸盖，功率与极速都更胜一筹 |
| model:ariel:leader | Leader | Leader 全封闭二冲程机车 | Leader 全封閉二衝程機車 | リーダー | class:disp:250cc | body:scooter | pt:ice | discontinued | 1958–1965 | 1958年推出的250cc二冲程双缸全封闭摩托车，整体式车壳配挡风玻璃，兼具踏板车的舒适与摩托车的性能，获1959年度摩托车大奖 |
| model:ariel:ng-250 | NG 250 | NG 250 单缸街车 | NG 250 單缸街車 | NG 250 | class:disp:250cc | body:naked | pt:ice | discontinued | 1932–1959 | Red Hunter家族中的250cc版本，也是军用W/NG车型的民用基础型号，轻巧可靠 |
| model:ariel:pixie | Pixie | Pixie 50 轻便摩托车 | Pixie 50 輕便摩托車 | ピクシー | class:disp:50cc | body:mini | pt:ice | discontinued | 1963–1965 | 1963年开始生产的50cc轻便摩托车，是Ariel品牌末期的小排量入门车型 |
| model:ariel:red-hunter | Red Hunter | Red Hunter 红猎人 单缸车（停产） | Red Hunter 紅獵人 單缸車（停產） | レッドハンター | class:disp:250cc | body:naked | pt:ice | discontinued | 1932–1959 | Ariel经典单缸车系列，提供250/350/500cc多种排量，红色涂装之名深入人心的英国老车 |
| model:ariel:scrambles-hs | Scrambles HS | Scrambles HS 500 泥地越野赛车 | Scrambles HS 500 泥地越野賽車 | スクランブル HS | class:disp:600cc | body:scrambler | pt:ice | discontinued | 1954–1958 | 1954年推出的500cc scrambles泥地赛竞技车型，497cc单缸、铝合金缸盖、摆动臂车架，亮红色油箱辨识度极高 |
| model:ariel:square-four | Square Four | Square Four 方四缸经典车（停产） | Square Four 方四缸經典車（停產） | スクエアフォー | class:disp:1000cc | body:naked | pt:ice | discontinued | 1931–1958 | 独特的方四缸(并列双曲轴四缸)布局，有500/600/1000cc版本，Ariel最具标志性的车型 |
| model:ariel:square-four-1000 | Square Four 1000 | Square Four 1000 方四缸街车 | Square Four 1000 方四缸街車 | スクエアフォー 1000 | class:disp:1000cc | body:naked | pt:ice | discontinued | 1937–1958 | 1937年重新设计为995cc顶置气门方四缸(代号4G)，1949年换装铝合金缸体，是当时英国最快的街车之一，Ariel的旗舰车型 |
| model:ariel:square-four-500 | Square Four 500 | Square Four 500 方四缸街车 | Square Four 500 方四缸街車 | スクエアフォー 500 | class:disp:600cc | body:naked | pt:ice | discontinued | 1931–1936 | Edward Turner设计的方四缸布局，1931年推出的初代500cc版本，是Square Four传奇的开端 |
| model:ariel:square-four-600 | Square Four 600 | Square Four 600 方四缸街车 | Square Four 600 方四缸街車 | スクエアフォー 600 | class:disp:600cc | body:naked | pt:ice | discontinued | 1936–1937 | 500cc版中期扩缸至600cc的过渡版本，为1937年995cc的4G改款铺路 |
| model:ariel:trials-ht5 | Trials HT5 | Trials HT5 500 障碍攀爬赛车 | Trials HT5 500 障礙攀爬賽車 | トライアル HT5 | class:disp:600cc | body:enduro | pt:ice | discontinued | 1954–1958 | 1950年代专为trials障碍攀爬赛打造的500cc竞技车型，与HS共用车架技术，是当时欧洲赛场的主力 |
| model:ariel:vb-500 | VB 500 | VB 500 侧阀单缸街车 | VB 500 側閥單缸街車 | VB 500 | class:disp:600cc | body:naked | pt:ice | discontinued | 1933–1959 | 500cc侧置气门(side-valve)版Red Hunter，结构简单皮实耐用，广泛用于民用与公务用途 |
| model:ariel:vh-500 | VH 500 | VH 500 顶阀单缸街车 | VH 500 頂閥單缸街車 | VH 500 | class:disp:600cc | body:naked | pt:ice | discontinued | 1933–1959 | 500cc顶置气门(OHV)版Red Hunter，是Red Hunter系列的性能旗舰，1950年代起换装铝合金缸盖 |
| model:ariel:wng-350 | W/NG 350 | W/NG 350 军用摩托车 | W/NG 350 軍用摩托車 | W/NG 350 | class:disp:400cc | body:naked | pt:ice | discontinued | 1939–1945 | 二战期间为英国陆军生产的军用摩托，基于民用NG 350开发，抬高离地间隙以适应战区路况 |

### 4.BMW Motorrad (60款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:bmw-motorrad:c-650-gt | C 650 GT | C 650 GT 豪华大踏板（停产） | C 650 GT 豪華大踏板（停產） | C650GT | class:disp:750cc | body:maxi-scooter | pt:ice | discontinued | 2012–2019 | 647cc并列双缸大踏板，电动风挡电加热手把，豪华舒适，2019年停产 |
| model:bmw-motorrad:ce-02 | CE 02 | CE 02 都市电动摩托 | CE 02 都市電動摩托 | CE02 | class:disp:125cc | body:mini | pt:bev | current | 2024–present | 11kW纯电都市通勤摩托，eParkourer定位，最高时速95km，续航约90km，2024年上市 |
| model:bmw-motorrad:f-450-gs | F 450 GS | F 450 GS 中排量探险车 | F 450 GS 中排量探險車 | F450GS | class:disp:400cc | body:adventure | pt:ice | current | 2026–present | 2025年11月发布的全新双缸中排量探险车，可选离心式离合器，宝马两缸入门GS |
| model:bmw-motorrad:f-800-gs | F 800 GS | F 800 GS 中量级探险车 | F 800 GS 中量級探險車 | F800GS | class:disp:750cc | body:adventure | pt:ice | current | 2024–present | 895cc并列双缸，2024年接替F 750 GS的中量级ADV，2026款更新电控与配色 |
| model:bmw-motorrad:f-900-gs | F 900 GS | F 900 GS 中量级探险车 | F 900 GS 中量級探險車 | F900GS | class:disp:750cc | body:adventure | pt:ice | current | 2024–present | 895cc并列双缸，2024年换代F 850 GS，轻量化车架，越野能力提升的中量级ADV |
| model:bmw-motorrad:f-900-gs-adventure | F 900 GS Adventure | F 900 GS Adventure 中量级大油箱探险车 | F 900 GS Adventure 中量級大油箱探險車 | F900GSアドベンチャー | class:disp:750cc | body:adventure | pt:ice | current | 2024–present | 895cc并列双缸，F 900 GS长途版，24L大油箱+护杠，2026款更新 |
| model:bmw-motorrad:g-310-rr | G 310 RR | G 310 RR 小排量仿赛 | G 310 RR 小排量仿賽 | G310RR | class:disp:400cc | body:sport | pt:ice | current | 2022–present | 313cc单缸倒缸，TVS制造，宝马首款入门仿赛，年轻车手入门首选 |
| model:bmw-motorrad:k-100 | K 100 | K 100 直列四缸街车 | K 100 直列四缸街車 | K100 | class:disp:1000cc | body:sport-touring | pt:ice | discontinued | 1983–1992 | 1983年推出的宝马首款直列四缸车型，987cc纵置水冷，绰号Flying Brick，K系列开端 |
| model:bmw-motorrad:k-1100-lt | K 1100 LT | K 1100 LT 豪华旅行车 | K 1100 LT 豪華旅行車 | K1100LT | class:disp:1000cc | body:touring | pt:ice | discontinued | 1993–1999 | 1093cc直列四缸豪华旅行旗舰，电动风挡、音响等豪华装备，K100LT的后继者 |
| model:bmw-motorrad:k-1600-b | K 1600 B | K 1600 B 六缸Bagger | K 1600 B 六缸Bagger | K1600B | class:disp:1000cc | body:bagger | pt:ice | current | 2017–present | 1649cc直列六缸Bagger，深色风格低坐姿，K 1600系列袋式旅行版 |
| model:bmw-motorrad:k-75 | K 75 | K 75 直列三缸街车 | K 75 直列三缸街車 | K75 | class:disp:750cc | body:naked | pt:ice | discontinued | 1985–1995 | 宝马唯一的直列三缸车型，740cc水冷，带平衡轴运转平顺，K系列中最均衡的车款 |
| model:bmw-motorrad:m-1000-xr | M 1000 XR | M 1000 XR M系列高性能运动旅行车 | M 1000 XR M系列高性能運動旅行車 | M1000XR | class:disp:1000cc | body:sport-touring | pt:ice | current | 2024–present | 999cc四缸ShiftCam，约201马力M系列运动旅行旗舰，2026款更新 |
| model:bmw-motorrad:r-100-gs | R 100 GS | R 100 GS 探险车 | R 100 GS 探險車 | R100GS | class:disp:1000cc | body:adventure | pt:ice | discontinued | 1987–1996 | GS系列扩至980cc，1990年升级Paralever后悬挂，双用途探险车的经典之作 |
| model:bmw-motorrad:r-100-rs | R 100 RS | R 100 RS 运动旅行车 | R 100 RS 運動旅行車 | R100RS | class:disp:1000cc | body:sport-touring | pt:ice | discontinued | 1976–1984 | 首款标配整车架固定全整流罩的量产车型，980cc拳击手，开创现代运动旅行车类别 |
| model:bmw-motorrad:r-100-rt | R 100 RT | R 100 RT 豪华旅行车 | R 100 RT 豪華旅行車 | R100RT | class:disp:1000cc | body:touring | pt:ice | discontinued | 1978–1996 | 980cc拳击手豪华旅行版，全整流罩大风挡，长途舒适性标杆，气冷R系列寿星 |
| model:bmw-motorrad:r-1100-gs | R 1100 GS | R 1100 GS 探险车 | R 1100 GS 探險車 | R1100GS | class:disp:1000cc | body:adventure | pt:ice | discontinued | 1994–1999 | 现代GS时代开端，1085cc油冷拳击手，Telelever前悬挂，确立GS车系全球地位 |
| model:bmw-motorrad:r-12 | R 12 | R 12 复古巡航车 | R 12 復古巡航車 | R12 | class:disp:1000cc | body:cruiser | pt:ice | current | 2024–present | 1170cc水平对置双缸，2024年全新复古巡航车，与R 12 nineT同平台 |
| model:bmw-motorrad:r-12-ninet | R 12 nineT | R 12 nineT 复古街车 | R 12 nineT 復古街車 | R12ナインT | class:disp:1000cc | body:naked | pt:ice | current | 2024–present | 1170cc水平对置双缸，2024年全新复古街车，模块化车架，R nineT系列进化版 |
| model:bmw-motorrad:r-1200-c | R 1200 C | R 1200 C 巡航车 | R 1200 C 巡航車 | R1200C | class:disp:1000cc | body:cruiser | pt:ice | discontinued | 1997–2004 | 宝马首款现代巡航车，1170cc拳击手，007电影《明日帝国》中的邦德座驾 |
| model:bmw-motorrad:r-1200-gs | R 1200 GS | R 1200 GS 探险车（初代） | R 1200 GS 探險車（初代） | R1200GS | class:disp:1000cc | body:adventure | pt:ice | discontinued | 2004–2012 | GS系列首款1170cc油冷拳击手，大幅减重并登顶全球ADV销量王，2012年被水冷版取代 |
| model:bmw-motorrad:r-1300-gs | R 1300 GS | R 1300 GS 新水鸟 探险旗舰 | R 1300 GS 新水鳥 探險旗艦 | R1300GS | class:disp:1000cc | body:adventure | pt:ice | current | 2024–present | 1300cc水平对置双缸，2024年接替R 1250 GS成为新一代探险旗舰，减重约12kg，电控全面升级 |
| model:bmw-motorrad:r-1300-gs-adventure | R 1300 GS Adventure | R 1300 GS Adventure 大油箱探险旗舰 | R 1300 GS Adventure 大油箱探險旗艦 | R 1300 GSアドベンチャー | class:disp:1000cc | body:adventure | pt:ice | current | 2025–present | 1300cc新一代GS长途版，30L大油箱，可选ASA自动离合器，2025年上市 |
| model:bmw-motorrad:r-17 | R 17 | R 17 大排量运动街车 | R 17 大排量運動街車 | R17 | class:disp:750cc | body:naked | pt:ice | discontinued | 1935–1937 | 战前736cc顶置气门大排量运动旗舰，与侧置气门R12同代，速度与操控俱佳 |
| model:bmw-motorrad:r-18 | R 18 | R 18 大拳击手 巡航车 | R 18 大拳擊手 巡航車 | R18 | class:disp:1000cc | body:cruiser | pt:ice | current | 2020–present | 1802cc超大水平对置双缸，复古巡航风格，致敬1936年宝马R5设计，宝马现代巡航代表 |
| model:bmw-motorrad:r-18-classic | R 18 Classic | R 18 Classic 复古豪华巡航车 | R 18 Classic 復古豪華巡航車 | R18クラシック | class:disp:1000cc | body:cruiser | pt:ice | current | 2021–present | R 18长途版，加装大风挡与皮革边箱，复古豪华巡航 |
| model:bmw-motorrad:r-24 | R 24 | R 24 单缸街车 | R 24 單缸街車 | R24 | class:disp:250cc | body:naked | pt:ice | discontinued | 1948–1950 | 二战后的第一款宝马摩托车，247cc单缸，1948年推出，让宝马摩托浴火重生 |
| model:bmw-motorrad:r-25-3 | R 25/3 | R 25/3 单缸街车 | R 25/3 單缸街車 | R25/3 | class:disp:250cc | body:naked | pt:ice | discontinued | 1953–1956 | 250cc单缸第三代，配全伸缩前叉，1950年代宝马经典单缸街车 |
| model:bmw-motorrad:r-32 | R 32 | R 32 拳击手街车 | R 32 拳擊手街車 | R32 | class:disp:600cc | body:naked | pt:ice | discontinued | 1923–1926 | 1923年推出的宝马第一辆摩托车，开创水平对置拳击手发动机与轴传动的百年传统 |
| model:bmw-motorrad:r-37 | R 37 | R 37 顶置气门赛车版 | R 37 頂置氣門賽車版 | R37 | class:disp:600cc | body:naked | pt:ice | discontinued | 1924–1926 | R32的顶置气门赛车版，开启宝马赛车之路，1920年代横扫德国500cc级赛事 |
| model:bmw-motorrad:r-5 | R 5 | R 5 顶置气门街车 | R 5 頂置氣門街車 | R5 | class:disp:600cc | body:naked | pt:ice | discontinued | 1936–1937 | 顶置气门500cc拳击手，首款配备液压阻尼伸缩前叉的宝马，设计美学影响后世多代车型 |
| model:bmw-motorrad:r-51-3 | R 51/3 | R 51/3 拳击手街车 | R 51/3 拳擊手街車 | R51/3 | class:disp:600cc | body:naked | pt:ice | discontinued | 1951–1955 | 战后500cc侧置气门拳击手，采用全伸缩前叉，1950年代宝马的招牌车型 |
| model:bmw-motorrad:r-52 | R 52 | R 52 拳击手街车 | R 52 拳擊手街車 | R52 | class:disp:600cc | body:naked | pt:ice | discontinued | 1928–1929 | 500cc侧置气门拳击手街车，1920年代末宝马主力车型，轴传动传统的中坚之作 |
| model:bmw-motorrad:r-66 | R 66 | R 66 拳击手街车 | R 66 拳擊手街車 | R66 | class:disp:600cc | body:naked | pt:ice | discontinued | 1938–1941 | 战前600cc顶置气门拳击手，与R51、R61、R71同代，豪华运动取向的战前经典 |
| model:bmw-motorrad:r-67 | R 67 | R 67 拳击手街车 | R 67 拳擊手街車 | R67 | class:disp:600cc | body:naked | pt:ice | discontinued | 1951–1954 | 战后600cc侧置气门拳击手，与R51/3同代，扭矩充沛的经典双缸 |
| model:bmw-motorrad:r-68 | R 68 | R 68 运动街车 | R 68 運動街車 | R68 | class:disp:600cc | body:naked | pt:ice | discontinued | 1952–1954 | 600cc顶置气门运动版，时速可达160km/h，1950年代初全球最快的量产摩托车之一 |
| model:bmw-motorrad:r-69-s | R 69 S | R 69 S 运动街车 | R 69 S 運動街車 | R69S | class:disp:600cc | body:naked | pt:ice | discontinued | 1960–1969 | 600cc运动拳击手，1960年代宝马速度标杆，如今是收藏市场的高价经典 |
| model:bmw-motorrad:r-80-g-s | R 80 G/S | R 80 G/S 探险车鼻祖 | R 80 G/S 探險車鼻祖 | R80G/S | class:disp:750cc | body:adventure | pt:ice | discontinued | 1980–1987 | 1980年推出的GS探险系列鼻祖，798cc拳击手，开创ADV细分市场，达喀尔赛场扬名 |
| model:bmw-motorrad:r-90-6 | R 90/6 | R 90/6 运动街车 | R 90/6 運動街車 | R90/6 | class:disp:750cc | body:naked | pt:ice | discontinued | 1974–1976 | /6系列旗舰街车，与R90S同款898cc发动机，电启动为选配，1970年代运动街车代表 |
| model:bmw-motorrad:r-90-s | R 90 S | R 90 S 全整流罩跑车 | R 90 S 全整流罩跑車 | R90S | class:disp:750cc | body:sport | pt:ice | discontinued | 1973–1976 | 1973年推出的首款全整流罩量产跑车，898cc拳击手，Darmah红涂装成经典符号 |
| model:bmw-motorrad:r1300gs-2026 | R 1300 GS 2026 | R 1300 GS 探险车（2026款） | R 1300 GS 探險車（2026款） | R 1300 GS | class:disp:1000cc | body:adventure | pt:ice | current | 2026–present | 宝马2026款旗舰探险车更新，1300cc水平对置双缸，2025年7月发布2026版 |
| model:bmw-motorrad:s-1000-xr | S 1000 XR | S 1000 XR 跨界运动探险车 | S 1000 XR 跨界運動探險車 | S1000XR | class:disp:1000cc | body:adventure | pt:ice | current | 2015–present | 999cc并列四缸，S1000RR同款动力，运动旅行跨界，长途运动两相宜 |
| model:bmw:c-400-x | C 400 X / C 400 GT | C 400 X/GT 大踏板 | C 400 X/GT 大踏板 | C400X/C400GT | class:disp:250cc | body:maxi-scooter | pt:ice | current | 2018–present | 350cc单缸，C400X运动型/C400GT旅行型，Flex Case可变储物 |
| model:bmw:ce-04 | CE 04 | CE 04 纯电踏板车 | CE 04 純電踏板車 | CE04 | class:disp:250cc | body:maxi-scooter | pt:bev | current | 2022–present | 42马力纯电踏板，续航约130km，未来主义设计，宝马电动化先锋 |
| model:bmw:f-750-gs | F 750 GS | F 750 GS 中量级探险车 | F 750 GS 中量級探險車 | F750GS | class:disp:750cc | body:adventure | pt:ice | current | 2018–present | 853cc并列双缸，低坐高版本，公路取向ADV，电子悬挂可选 |
| model:bmw:f-850-gs | F 850 GS | F 850 GS 中量级探险车 | F 850 GS 中量級探險車 | F850GS | class:disp:750cc | body:adventure | pt:ice | current | 2018–present | 853cc并列双缸，21寸前轮，越野能力更强，F系列GS标准版 |
| model:bmw:f-850-gs-adventure | F 850 GS Adventure | F 850 GS Adventure 大油箱探险车 | F 850 GS Adventure 大油箱探險車 | F850GSアドベンチャー | class:disp:750cc | body:adventure | pt:ice | current | 2019–present | F850GS长途版，23L大油箱+护杠，越野强化，长途穿越利器 |
| model:bmw:f-900-r | F 900 R | F 900 R 双缸街车 | F 900 R 雙缸街車 | F900R | class:disp:750cc | body:naked | pt:ice | current | 2020–present | 895cc并列双缸，Adaptive Headlight自适应大灯，运动街车 |
| model:bmw:f-900-xr | F 900 XR | F 900 XR 跨界运动探险车 | F 900 XR 跨界運動探險車 | F900XR | class:disp:750cc | body:adventure | pt:ice | current | 2020–present | F900R同平台，半整流罩，运动旅行跨界，S1000XR的小弟 |
| model:bmw:g-310-gs | G 310 GS | G 310 GS 小排量探险车 | G 310 GS 小排量探險車 | G310GS | class:disp:250cc | body:adventure | pt:ice | current | 2017–present | G310R同平台ADV，鸟嘴设计，入门探险，轻量化易操控 |
| model:bmw:g-310-r | G 310 R | G 310 R 入门街车 | G 310 R 入門街車 | G310R | class:disp:400cc | body:naked | pt:ice | current | 2016–present | 313cc单缸倒缸，宝马入门街车，印度TVS生产，全球销售 |
| model:bmw:k-1600-gt | K 1600 GT / K 1600 GTL | K 1600 GT/GTL 六缸豪华旅行车 | K 1600 GT/GTL 六缸豪華旅行車 | K1600GT/GTL | class:disp:1000cc | body:touring | pt:ice | current | 2011–present | 1649cc直列六缸，160马力，顶级豪华旅行，GTL为顶箱长途版 |
| model:bmw:m-1000-r | M 1000 R | M 1000 R M系列高性能街车 | M 1000 R M系列高性能街車 | M1000R | class:disp:1000cc | body:naked | pt:ice | current | 2023–present | M系列街车，S1000RR引擎，210马力，碳纤维件，高规格刹车悬挂 |
| model:bmw:m-1000-rr | M 1000 RR | M 1000 RR M系列旗舰仿赛 | M 1000 RR M系列旗艦仿賽 | M1000RR | class:disp:1000cc | body:sport | pt:ice | current | 2021–present | 宝马首台M车型摩托车，212马力，碳纤维气动翼，WSBK赛用规格 |
| model:bmw:r-1250-gs | R 1250 GS | R 1250 GS 水鸟 探险旗舰 | R 1250 GS 水鳥 探險旗艦 | R1250GS | class:disp:1000cc | body:adventure | pt:ice | current | 2019–present | 1254cc水平对置双缸ShiftCam，ADV销量王，公路越野全能，宝马灵魂车型 |
| model:bmw:r-1250-gs-adventure | R 1250 GS Adventure | R 1250 GS Adventure 水鸟ADV 大油箱探险旗舰 | R 1250 GS Adventure 水鳥ADV 大油箱探險旗艦 | R1250GSアドベンチャー | class:disp:1000cc | body:adventure | pt:ice | current | 2019–present | R1250GS长途版，30L大油箱+护杠，越野强化，环球摩旅首选 |
| model:bmw:r-1250-r | R 1250 R | R 1250 R 拳击手街车 | R 1250 R 拳擊手街車 | R1250R | class:disp:1000cc | body:naked | pt:ice | current | 2019–present | 1254cc水平对置双缸ShiftCam，拳击手发动机经典传承，Roadster街车 |
| model:bmw:r-1250-rt | R 1250 RT | R 1250 RT 豪华运动旅行车 | R 1250 RT 豪華運動旅行車 | R1250RT | class:disp:1000cc | body:sport-touring | pt:ice | current | 2019–present | 1254cc拳击手ShiftCam，全整流罩豪华旅行，主动巡航ACC，可选雷达 |
| model:bmw:r-ninet | R nineT / R nineT Pure / Urban G/S | R nineT 拿铁 复古街车系列 | R nineT 拿鐵 復古街車系列 | RナインT | class:disp:1000cc | body:naked | pt:ice | current | 2014–present | 1170cc气冷油冷拳击手，模块化车架，Pure/Pure/Urban G/S多款复古衍生 |
| model:bmw:s-1000-r | S 1000 R | S 1000 R 公升级运动街车 | S 1000 R 公升級運動街車 | S1000R | class:disp:1000cc | body:naked | pt:ice | current | 2021–present | 999cc并列四缸，ShiftCam技术，S1000RR街车版，165马力 |
| model:bmw:s-1000-rr | S 1000 RR | S 1000 RR 旗舰仿赛 | S 1000 RR 旗艦仿賽 | S1000RR | class:disp:1000cc | body:sport | pt:ice | current | 2019–present | 999cc四缸ShiftCam，210马力，WSBK赛车技术下放，超级跑车标杆 |

### 4.BSA (26款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:bsa:a10-golden-flash | A10 Golden Flash | A10 Golden Flash 金色闪光 650cc 并列双缸 | A10 Golden Flash 金色閃光 650cc 並列雙缸 | A10 ゴールデンフラッシュ | class:disp:750cc | body:naked | pt:ice | discontinued | 1950–1962 | BSA首款650cc并列双缸，1950年代英伦双缸代表作，畅销全球，是BSA黄金时代的象征之一 |
| model:bsa:a10-road-rocket | A10 Road Rocket | A10 Road Rocket 公路火箭 650cc 运动双缸 | A10 Road Rocket 公路火箭 650cc 運動雙缸 | A10 ロードロケット | class:disp:750cc | body:naked | pt:ice | discontinued | 1954–1957 | Golden Flash高性能版，高压缩比发动机，是当时英国最快的量产摩托之一，A10系列性能开山之作 |
| model:bsa:a10-rocket-gold-star | Rocket Gold Star | Rocket Gold Star 火箭金牌之星 650cc 运动双缸 | Rocket Gold Star 火箭金牌之星 650cc 運動雙缸 | ロケットゴールドスター | class:disp:750cc | body:naked | pt:ice | discontinued | 1962–1963 | Super Rocket双缸引擎装入Gold Star车架的特制运动版，仅生产两年即停产，美国市场称Gold Star Twin，收藏级珍品 |
| model:bsa:a50-royal-star | A50 Royal Star | A50 Royal Star 皇家之星 500cc 并列双缸 | A50 Royal Star 皇家之星 500cc 並列雙缸 | A50 ロイヤルスター | class:disp:600cc | body:naked | pt:ice | discontinued | 1962–1970 | 500cc一体化结构并列双缸，A65的小排量兄弟车型，1960年代BSA中量级市场主力 |
| model:bsa:a65-lightning | A65 Lightning | A65 Lightning 闪电 650cc 并列双缸 | A65 Lightning 閃電 650cc 並列雙缸 | A65 ライトニング | class:disp:750cc | body:naked | pt:ice | discontinued | 1964–1972 | A65双化油器运动版，1960年代BSA最具代表性的运动双缸，美国市场称Lightning Rocket |
| model:bsa:a65-rocket | A65 Rocket | A65 Rocket 火箭 650cc 并列双缸 | A65 Rocket 火箭 650cc 並列雙缸 | A65 ロケット | class:disp:750cc | body:naked | pt:ice | discontinued | 1964–1965 | A65一体化结构双缸的运动版，高压缩比发动机与独立大灯、运动挡泥板，A65系列性能先驱 |
| model:bsa:a65-spitfire | A65 Spitfire | A65 Spitfire 喷火 650cc 运动双缸 | A65 Spitfire 噴火 650cc 運動雙缸 | A65 スピットファイア | class:disp:750cc | body:naked | pt:ice | discontinued | 1966–1968 | A65高性能限量版，推出Mark II/III/IV三代，以赛车级发动机调校著称，俱乐部赛场常客 |
| model:bsa:a65-thunderbolt | A65 Thunderbolt | A65 Thunderbolt 雷霆 650cc 并列双缸 | A65 Thunderbolt 雷霆 650cc 並列雙缸 | A65 サンダーボルト | class:disp:750cc | body:naked | pt:ice | discontinued | 1966–1972 | A65单化油器街道版，均衡可靠的中庸之作，1971年起采用油冷车架，是BSA末期的常青双缸 |
| model:bsa:a7 | A7 | A7 500cc 并列双缸街车 | A7 500cc 並列雙缸街車 | A7 | class:disp:600cc | body:naked | pt:ice | discontinued | 1947–1962 | BSA首款并列双缸车型，1947年推出，开启了BSA战后双缸时代，后续衍生出Star Twin与Shooting Star运动版 |
| model:bsa:a75-rocket-3 | A75 Rocket 3 | A75 Rocket 3 火箭三缸 750cc 街车 | A75 Rocket 3 火箭三缸 750cc 街車 | A75 ロケット3 | class:disp:750cc | body:naked | pt:ice | discontinued | 1969–1972 | BSA首款三缸摩托，1969年与凯旋Trident同平台推出，740cc三缸曾是最强量产车之一，1972年随公司破产停产 |
| model:bsa:b25-starfire | B25 Starfire | B25 Starfire 星火 250cc 单缸运动车 | B25 Starfire 星火 250cc 單缸運動車 | B25 スターファイアー | class:disp:250cc | body:naked | pt:ice | discontinued | 1968–1970 | C15平台衍生的高性能250cc单缸，油冷钢管车架，是BSA末期运动小排量的代表 |
| model:bsa:b31 | B31 | B31 350cc 单缸街车 | B31 350cc 單缸街車 | B31 | class:disp:400cc | body:naked | pt:ice | discontinued | 1945–1959 | 战后BSA主力350cc单缸街车，可靠耐用，广泛用于英国家庭代步和公务摩的 |
| model:bsa:b33 | B33 | B33 500cc 单缸街车 | B33 500cc 單缸街車 | B33 | class:disp:600cc | body:naked | pt:ice | discontinued | 1947–1960 | 战后BSA 500cc单缸主力街车，广泛用于民间与公务用途，皮实耐操 |
| model:bsa:b44-victor | B44 Victor | B44 Victor 胜利者 441cc 越野耐力车 | B44 Victor 勝利者 441cc 越野耐力車 | B44 ビクター | class:disp:600cc | body:enduro | pt:ice | discontinued | 1965–1970 | 441cc越野单缸，采用Reynolds 531钢管车架，在国际六日耐力赛等赛事屡获佳绩，BSA越野功臣 |
| model:bsa:b50-gold-star | B50 Gold Star | B50 Gold Star 金牌之星 500cc 单缸车 | B50 Gold Star 金牌之星 500cc 單缸車 | B50 ゴールドスター | class:disp:600cc | body:scrambler | pt:ice | discontinued | 1971–1973 | BSA最后一款大排量一体化结构单缸，499cc街滑越野两用，1972年公司破产后由残余零件继续生产至1973年 |
| model:bsa:bantam-d1 | Bantam D1 | Bantam D1 班塔姆 125cc 二冲程轻量车 | Bantam D1 班塔姆 125cc 二衝程輕量車 | バンタムD1 | class:disp:125cc | body:naked | pt:ice | discontinued | 1948–1953 | BSA战后首款二冲程轻量车，设计源自战后获得的德国DKW RT125技术，125cc销量巨大，是Bantam传奇的开端 |
| model:bsa:bantam-d7-super | Bantam D7 Super | Bantam D7 Super 班塔姆 175cc 二冲程轻量车 | Bantam D7 Super 班塔姆 175cc 二衝程輕量車 | バンタムD7スーパー | class:disp:250cc | body:naked | pt:ice | discontinued | 1959–1966 | Bantam系列175cc升级款，实用省油，是1960年代英国年轻人入门的首选轻量车 |
| model:bsa:blue-star | Blue Star | Blue Star 蓝星 单缸运动车 | Blue Star 藍星 單缸運動車 | ブルースター | class:disp:600cc | body:naked | pt:ice | discontinued | 1932–1936 | 1930年代BSA运动单缸系列，提供250/350/500cc多款排量，以可靠与操控著称，500cc版为当时BSA销量第五的车型 |
| model:bsa:c15 | C15 | C15 250cc 单缸街车 | C15 250cc 單缸街車 | C15 | class:disp:250cc | body:naked | pt:ice | discontinued | 1958–1967 | BSA首款一体化(unit)结构单缸，250cc量大质优，衍生出Starfire、B44、B50等后续系列 |
| model:bsa:dandy | Dandy | Dandy 丹迪 70cc 轻便踏板摩托 | Dandy 丹迪 70cc 輕便踏板摩托 | ダンディ | class:disp:125cc | body:scooter | pt:ice | discontinued | 1956–1962 | 70cc二冲程轻便踏板摩托，1956年推出，主打城市短途代步，造型俏皮可爱 |
| model:bsa:empire-star | Empire Star | Empire Star 帝国之星 单缸运动车 | Empire Star 帝國之星 單缸運動車 | エンパイアスター | class:disp:600cc | body:naked | pt:ice | discontinued | 1937–1940 | Blue Star升级版运动单缸，由Val Page设计的全新发动机，1938年直接衍生出传奇的Gold Star |
| model:bsa:gold-star-650 | Gold Star 650 | Gold Star 650 金牌之星 复古单缸街车 | Gold Star 650 金牌之星 復古單缸街車 | ゴールドスター650 | class:disp:750cc | body:naked | pt:ice | current | 2021–present | Mahindra收购BSA品牌后的复兴之作，652cc水冷单缸复古车，2021年发布，致敬传奇Gold Star之名 |
| model:bsa:gold-star-b32 | Gold Star B32 | Gold Star B32 金牌之星 350cc 单缸运动车 | Gold Star B32 金牌之星 350cc 單缸運動車 | ゴールドスターB32 | class:disp:400cc | body:naked | pt:ice | discontinued | 1946–1957 | 350cc版金牌之星，战后Gold Star系列的开端，以高转性能和出色操控著称 |
| model:bsa:gold-star-dbd34 | Gold Star DBD34 | Gold Star DBD34 金牌之星 500cc 单缸运动车 | Gold Star DBD34 金牌之星 500cc 單缸運動車 | ゴールドスターDBD34 | class:disp:600cc | body:naked | pt:ice | discontinued | 1956–1963 | BSA最传奇的500cc单缸运动车，俱乐部赛无敌手，绰号金牌之星，如今是收藏市场的顶级英伦经典 |
| model:bsa:m20 | M20 | M20 二战军用摩托车 | M20 二戰軍用摩托車 | M20 | class:disp:600cc | body:naked | pt:ice | discontinued | 1937–1955 | 二战英国陆军主力军用摩托，496cc侧置气门单缸，产量约12.6万辆，以坚固皮实著称的军车传奇 |
| model:bsa:sloper | Sloper | Sloper 斜置引擎单缸街车 | Sloper 斜置引擎單缸街車 | スローパー | class:disp:600cc | body:naked | pt:ice | discontinued | 1927–1935 | 1920年代末BSA经典单缸系列，斜置气缸设计降低重心并改善散热，曾畅销欧洲各国 |

### 4.Bajaj (14款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:bajaj:avenger-cruise-220 | Avenger Cruise 220 | Avenger Cruise 220 复仇者 巡航车 | Avenger Cruise 220 復仇者 巡航車 | アベンジャー クルーズ220 | class:disp:250cc | body:cruiser | pt:ice | current | 2005–present | 印度最经典的入门巡航车，219.9cc单缸油冷，自2005年推出长销至今 |
| model:bajaj:avenger-street-160 | Avenger Street 160 | Avenger Street 160 复仇者 巡航车 | Avenger Street 160 復仇者 巡航車 | アベンジャー ストリート160 | class:disp:250cc | body:cruiser | pt:ice | current | 2017–present | 印度入门巡航车，160cc单缸风冷，低坐高，圆灯与双排气，个性鲜明 |
| model:bajaj:chetak | Chetak | Chetak 电动踏板 | Chetak 電動踏板 | チェタク | class:disp:125cc | body:scooter | pt:bev | current | 2020–present | 复活经典车名的电动踏板车，2020年推出，锂电驱动，金属车身，印度高端电踏代表 |
| model:bajaj:ct-100 | CT 100 | CT 100 入门通勤车 | CT 100 入門通勤車 | CT100 | class:disp:125cc | body:naked | pt:ice | current | 2005–present | 印度最畅销的100cc级入门通勤车之一，单缸风冷，极致省油耐用，农村市场主力 |
| model:bajaj:dominar-250 | Dominar 250 | Dominar 250 霸主 运动旅行车 | Dominar 250 霸主 運動旅行車 | ドミナー250 | class:disp:250cc | body:sport-touring | pt:ice | current | 2020–present | Dominar家族入门款，248.8cc单缸油冷，保留旗舰级旅行定位与配置 |
| model:bajaj:dominar-400 | Dominar 400 | Dominar 400 霸主 运动旅行车 | Dominar 400 霸主 運動旅行車 | ドミナー400 | class:disp:400cc | body:sport-touring | pt:ice | current | 2017–present | Bajaj旗舰运动旅行车，373.3cc单缸水冷（与KTM 390同源），带导流罩，长途利器 |
| model:bajaj:platina-110 | Platina 110 | Platina 110 铂金 通勤车 | Platina 110 鉑金 通勤車 | プラチナ110 | class:disp:125cc | body:naked | pt:ice | current | 2006–present | Bajaj主力通勤车，115cc单缸风冷，iGET发动机技术，骑姿舒适，节油耐用 |
| model:bajaj:pulsar-125 | Pulsar 125 | Pulsar 125 脉冲星 街车 | Pulsar 125 脈衝星 街車 | パルサー125 | class:disp:125cc | body:naked | pt:ice | current | 2019–present | Pulsar家族入门款，124.4cc单缸油冷，LED大灯，印度125cc运动通勤热门 |
| model:bajaj:pulsar-150 | Pulsar 150 | Pulsar 150 脉冲星 街车 | Pulsar 150 脈衝星 街車 | パルサー150 | class:disp:250cc | body:naked | pt:ice | current | 2001–present | Pulsar车系开山之作，149.5cc单缸，印度运动街车的启蒙车型，历经二十余年长销不衰 |
| model:bajaj:pulsar-220f | Pulsar 220 F | Pulsar 220 F 脉冲星 运动车 | Pulsar 220 F 脈衝星 運動車 | パルサー220F | class:disp:250cc | body:naked | pt:ice | discontinued | 2007–2021 | 曾经的印度最强220cc级街车，220cc单缸油冷，带导流罩设计，2021年停产 |
| model:bajaj:pulsar-f250 | Pulsar F250 | Pulsar F250 脉冲星 运动街车 | Pulsar F250 脈衝星 運動街車 | パルサー F250 | class:disp:250cc | body:naked | pt:ice | current | 2021–present | N250的导流罩版本，249.07cc单缸油冷，带车头小风挡，兼顾运动与长途骑行 |
| model:bajaj:pulsar-n250 | Pulsar N250 | Pulsar N250 脉冲星 街车 | Pulsar N250 脈衝星 街車 | パルサー N250 | class:disp:250cc | body:naked | pt:ice | current | 2021–present | 新一代N系列街车，249.07cc单缸油冷，全LED与LCD仪表，接续NS200的市场定位 |
| model:bajaj:pulsar-ns200 | Pulsar NS200 | Pulsar NS200 脉冲星 街车 | Pulsar NS200 脈衝星 街車 | パルサー NS200 | class:disp:250cc | body:naked | pt:ice | current | 2012–present | NS系列运动街车，199.5cc单缸水冷，钢管编织车架，同级性价比之王 |
| model:bajaj:pulsar-rs200 | Pulsar RS200 | Pulsar RS200 脉冲星 仿赛 | Pulsar RS200 脈衝星 仿賽 | パルサー RS200 | class:disp:250cc | body:sport | pt:ice | current | 2015–present | Pulsar系列唯一的全整流罩仿赛，199.5cc单缸水冷25马力，印度入门仿赛代表 |

### 4.Benda (17款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:benda:black-flag-250 | Black Flag 250 | 黑旗250 Bobber | 黑旗250 Bobber | ブラックフラッグ250 | class:disp:250cc | body:bobber | pt:ice | current | 2024–present | 奔达黑旗250，外露V型双缸发动机的入门美式Bobber，奔达巡航家族的新成员 |
| model:benda:black-flag-600 | Black Flag 600 | 黑旗600 巡航车 | 黑旗600 巡航車 | ブラックフラッグ600 | class:disp:600cc | body:cruiser | pt:ice | current | 2026–present | 奔达2026款黑旗600，598.5cc V型四缸水冷巡航，Pro版32800元、Ultra EC版36800元，标配电子离合，Ultra版带空气悬挂 |
| model:benda:gypsy-3-cvt | Gypsy 3 (CVT) | 吉普赛3 CVT版 | 吉普賽3 CVT版 | ジプシー3（CVT） | class:disp:400cc | body:cruiser | pt:ice | concept | 2026–present | 奔达在2026中国摩博会首秀的全新美式巡航系列；368cc平台的CVT版本，面向城市通勤使用场景。厂家尚未公布上市时间。 |
| model:benda:gypsy-3-manual | Gypsy 3 (Manual) | 吉普赛3 手动版 | 吉普賽3 手動版 | ジプシー3（マニュアル） | class:disp:400cc | body:cruiser | pt:ice | concept | 2026–present | 奔达在2026中国摩博会首秀的全新美式巡航系列；368cc平台的手动挡版本。厂家尚未公布上市时间。 |
| model:benda:gypsy-5 | Gypsy 5 | 吉普赛5 | 吉普賽5 | ジプシー5 | class:disp:600cc | body:bobber | pt:ice | concept | 2026–present | 奔达在2026中国摩博会首秀的全新美式巡航系列；499cc平台、Bobber风格并配备空气悬挂，仅提供手动挡。厂家尚未公布上市时间。 |
| model:benda:huishi-300 | Rock 300 | 灰石300 巡航车 | 灰石300 巡航車 | ロック300 | class:disp:250cc | body:cruiser | pt:ice | current | 2021–present | 奔达灰石300（Rock 300），V型双缸美式巡航车，在金吉拉300基础上推出，加长轴距更显大气 |
| model:benda:jinjila-250 | Jinjila 250 | 金吉拉250 巡航车 | 金吉拉250 巡航車 | ジンジーラ250 | class:disp:250cc | body:cruiser | pt:ice | current | 2025–present | 奔达2025款金吉拉250，249cc V型双缸水冷，约25.8匹马力，标配ABS+TCS与滑动离合，售价15999元起，入门V缸巡航热门之选 |
| model:benda:jinjila-250-cvt | Jinjila 250 CVT | 金吉拉250 CVT自动挡巡航车 | 金吉拉250 CVT 自動擋巡航車 | ジンジーラ250 CVT | class:disp:250cc | body:cruiser | pt:ice | current | 2026–present | 奔达2026款金吉拉250 CVT，249cc V型双缸配自研CVT无级变速，自动挡V缸巡航门槛进一步拉低，售价17980元 |
| model:benda:jinjila-300 | Jinjila 300 | 金吉拉300 巡航车 | 金吉拉300 巡航車 | ジンジーラ300 | class:disp:250cc | body:cruiser | pt:ice | current | 2020–present | 奔达金吉拉300，V型双缸300cc巡航车，2020年发布，带动了国产小排量复古巡航的热潮 |
| model:benda:jinjila-500 | Jinjila 500 | 金吉拉500 复古巡航车 | 金吉拉500 復古巡航車 | ジンジーラ500 | class:disp:600cc | body:cruiser | pt:ice | current | 2025–present | 奔达2025款金吉拉500复古巡航，476cc V型双缸水冷，最大功率39kW约53匹，标配智能车联网，售价22980元起 |
| model:benda:lfc700 | LFC700 | 燎LFC700 巡航车 | 燎LFC700 巡航車 | LFC700 | class:disp:750cc | body:cruiser | pt:ice | current | 2021–present | 奔达燎LFC700，680cc直列四缸巡航车，国产四缸巡航的开创车型之一，造型极具未来感 |
| model:benda:napoleon-450 | Napoleon 450 | 拿破仑450 Bobber | 拿破崙450 Bobber | ナポレオン450 | class:disp:600cc | body:bobber | pt:ice | current | 2023–present | 奔达拿破仑450，450cc V型双缸Bobber风格巡航，长轴距、短尾单座，国产Bobber人气车型 |
| model:benda:rock-250 | Rock 250 | 灰石250 Bobber | 灰石250 Bobber | ロック250 | class:disp:250cc | body:bobber | pt:ice | current | 2024–present | 奔达灰石250，入门级Bobber巡航，亮黑低趴宽胎造型，被称为入门Bobber颜值天花板 |
| model:benda:rock-250-2026 | Rock 250 (2026) | 灰石250 Bobber（2026款） | 灰石250 Bobber（2026款） | ロック250（2026年型） | class:disp:250cc | body:bobber | pt:ice | current | 2026–present | 奔达新一代2026款灰石250，换装全新发动机并多项升级，售价维持16980元，入门Bobber市场现象级车型 |
| model:benda:rock-250-cvt | Rock 250 CVT | 灰石250 CVT自动挡巡航车 | 灰石250 CVT 自動擋巡航車 | ロック250 CVT | class:disp:250cc | body:bobber | pt:ice | current | 2025–present | 奔达灰石250 CVT，2025中国摩博会上市，249cc V型双缸匹配CVT无级变速，取消离合手柄，售价18980元 |
| model:benda:rock-707 | Rock 707 | 灰石707 巡航车 | 灰石707 巡航車 | ロック707 | class:disp:750cc | body:cruiser | pt:ice | current | 2025–present | 奔达2025款灰石707，691.6cc V型双缸水冷，最大功率54kW约73.5匹，皮带传动，高配提供电子离合与定速巡航，售价2.59万元起 |
| model:benda:tangdao-700 | LFS-700 Tangdao | 唐刀LFS-700 街车 | 唐刀LFS-700 街車 | タントウLFS-700 | class:disp:750cc | body:naked | pt:ice | current | 2022–present | 奔达唐刀LFS-700，680cc直列四缸街车，以古代唐刀为设计灵感，机甲风格造型，国产四缸街车代表 |

### 4.Benelli (32款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:benelli:125-2c | 125 2C | 125 2C 二冲程并列双缸轻骑 | 125 2C 二衝程並列雙缸輕騎 | 125 2C | class:disp:125cc | body:naked | pt:ice | discontinued | 1979–1983 | 125cc二冲程并列双缸轻骑，250 2C的小排量版，1980年代初流行的入门运动车 |
| model:benelli:125-sport-special | 125 Sport Special | 125 Sport Special 单缸运动轻骑 | 125 Sport Special 單缸運動輕騎 | 125 スポーツスペシャル | class:disp:125cc | body:naked | pt:ice | discontinued | 1968–1973 | 123cc单缸四冲程运动轻骑，与250 Sport Special同期的主力入门车型 |
| model:benelli:175-gran-sport-monza | 175 Gran Sport Monza | 175 Gran Sport Monza 战前单缸运动车 | 175 Gran Sport Monza 戰前單缸運動車 | 175 グラン・スポルト・モンツァ | class:disp:250cc | body:naked | pt:ice | discontinued | 1931–1936 | 1931年推出的175cc单缸运动车，Tonino Benelli曾驾驶其夺得意大利冠军，贝纳利战前最成功的竞赛车之一 |
| model:benelli:250-2c | 250 2C | 250 2C 二冲程并列双缸街车 | 250 2C 二衝程並列雙缸街車 | 250 2C | class:disp:250cc | body:naked | pt:ice | discontinued | 1973–1988 | 231cc二冲程并列双缸街车，1970至80年代意大利畅销的轻型运动车，生产长达15年的长寿车型 |
| model:benelli:250-4c-compressor | 250 4C Compressor | 250 4C Compressor 四缸机械增压赛车 | 250 4C Compressor 四缸機械增壓賽車 | 250 4C コンプレッサー | class:disp:250cc | body:sport | pt:ice | discontinued | 1939–1942 | 250cc四缸机械增压赛车，二战爆发未能参赛，全球仅存一辆，战后规则禁止增压使其成为绝版珍品 |
| model:benelli:250-barracuda | 250 Barracuda | 250 Barracuda 单缸街车 | 250 Barracuda 單缸街車 | 250 バラクーダ | class:disp:250cc | body:naked | pt:ice | discontinued | 1967–1970 | 245cc水平单缸四冲程，1960年代末面向美国市场出口的轻量街车 |
| model:benelli:250-bialbero-sport | 250 Bialbero Sport | 250 Bialbero Sport 双凸轮轴单缸赛车 | 250 Bialbero Sport 雙凸輪軸單缸賽車 | 250 ビアルベロ | class:disp:250cc | body:sport | pt:ice | discontinued | 1935–1940 | 双顶置凸轮轴(DOHC)单缸赛车，1939年曼岛TT 250cc组冠军战车，贝纳利战前最著名的竞赛车型 |
| model:benelli:250-sport-special | 250 Sport Special | 250 Sport Special 单缸运动街车 | 250 Sport Special 單缸運動街車 | 250 スポーツスペシャル | class:disp:250cc | body:naked | pt:ice | discontinued | 1968–1973 | 245cc单缸四冲程运动街车，1960年代末意大利市场的经典250车型 |
| model:benelli:254 | 254 | 254 Quattro 四缸街车 | 254 Quattro 四缸街車 | 254 | class:disp:250cc | body:naked | pt:ice | discontinued | 1977–1984 | 231cc直列四缸街车，又称254 Quattro，1977年投产，意大利紧凑型四缸车的经典之作 |
| model:benelli:304 | 304 | 304 四缸街车 | 304 四缸街車 | 304 | class:disp:250cc | body:naked | pt:ice | discontinued | 1983–1993 | 231cc直列四缸街车，1980至90年代初生产的长寿四缸车，意大利市场的常青树 |
| model:benelli:500-quattro | 500 Quattro | 500 Quattro 四缸街车 | 500 Quattro 四缸街車 | 500 クアトロ | class:disp:600cc | body:naked | pt:ice | discontinued | 1974–1979 | 500cc直列四缸街车，动力单元以本田CB500 Four为蓝本，是750 Sei六缸发动机的研发基础 |
| model:benelli:500-turismo | 500 Turismo | 500 Turismo 战前单缸旅行车 | 500 Turismo 戰前單缸旅行車 | 500 ツーリズモ | class:disp:600cc | body:touring | pt:ice | discontinued | 1933–1940 | 493cc单缸四冲程旅行车，战前贝纳利主力大排量车型，坚固耐用的经典之作 |
| model:benelli:654 | 654 | 654 四缸街车 | 654 四缸街車 | 654 | class:disp:600cc | body:naked | pt:ice | discontinued | 1981–1985 | 600cc直列四缸街车，分T与Sport版，De Tomaso时代末期的四缸主力车型 |
| model:benelli:750-sei | 750 Sei | 750 Sei 直列六缸街车 | 750 Sei 直列六缸街車 | 750 セイ | class:disp:750cc | body:naked | pt:ice | discontinued | 1974–1978 | 747cc直列六缸，世界首款量产直列六缸摩托车，贝纳利的工程杰作，稀有的收藏名车 |
| model:benelli:752s | 752S | 752S 运动街车 | 752S 運動街車 | 752S | class:disp:750cc | body:naked | pt:ice | current | 2020–present | 754cc双缸运动街车，2020年上市，Benelli双缸街车新作 |
| model:benelli:900-sei | 900 Sei | 900 Sei 直列六缸街车 | 900 Sei 直列六缸街車 | 900 セイ | class:disp:750cc | body:naked | pt:ice | discontinued | 1985–1992 | 906cc直列六缸，750 Sei的扩缸继承者，1980年代最独特的量产六缸街车 |
| model:benelli:adiva | Adiva | Adiva 带顶篷踏板车 | Adiva 帶頂篷踏板車 | アディーヴァ | class:disp:125cc | body:scooter | pt:ice | discontinued | 1997–2005 | 125/150cc踏板车，全球首款配备可折叠顶篷的踏板车，后被多家厂商效仿 |
| model:benelli:imperiale-400 | Imperiale 400 | Imperiale 400 帝国400 复古单缸车 | Imperiale 400 帝國400 復古單缸車 | インペリアーレ400 | class:disp:400cc | body:naked | pt:ice | current | 2017–present | 374cc单缸，帝国400复古经典单缸车，致敬1950年代Imperiale |
| model:benelli:k2 | K2 | K2 小型踏板车 | K2 小型踏板車 | K2 | class:disp:50cc | body:scooter | pt:ice | discontinued | 1997–2003 | 50/100cc小型踏板车，Merloni复兴时期推出的入门代步车型 |
| model:benelli:leoncino-125 | Leoncino 125 | Leoncino 125 幼狮125 复古轻骑 | Leoncino 125 幼獅125 復古輕騎 | レオンチーノ125 | class:disp:125cc | body:naked | pt:ice | discontinued | 1951–1966 | 1950年代最著名的"小狮子"，二冲程单缸轻骑，在Milan-Taranto等赛事屡获佳绩，现代Leoncino复古设计的灵感来源 |
| model:benelli:leoncino-500 | Leoncino 500 | Leoncino 500 幼狮500 复古攀爬车 | Leoncino 500 幼獅500 復古攀爬車 | レオンチーノ500 | class:disp:600cc | body:scrambler | pt:ice | current | 2017–present | 500cc双缸，幼狮复古攀爬，2017年上市，意式复古与现代结合 |
| model:benelli:leoncino-800 | Leoncino 800 | Leoncino 800 幼狮800 复古攀爬车 | Leoncino 800 幼獅800 復古攀爬車 | レオンチーノ800 | class:disp:750cc | body:scrambler | pt:ice | current | 2021–present | 754cc双缸，幼狮800复古攀爬，2021年上市 |
| model:benelli:letizia-125 | Letizia 125 | Letizia 125 二冲程轻便摩托车 | Letizia 125 二衝程輕便摩托車 | レティツィア125 | class:disp:125cc | body:naked | pt:ice | discontinued | 1950–1960 | 战后复兴之作，1950年以98cc二冲程起步，后以125cc为主，约生产4.5万辆，是Leoncino幼狮系列的前身 |
| model:benelli:mojave-360 | Mojave 360 | Mojave 360 美国市场单缸街车 | Mojave 360 美國市場單缸街車 | モハベ360 | class:disp:400cc | body:naked | pt:ice | discontinued | 1967–1969 | 美国市场专属单缸四冲程街车，260/360cc两种排量，沿用Tornado车架平台，亦有Scrambler改装版 |
| model:benelli:tnt-600 | TNT 600 | TNT 600 四缸街车 | TNT 600 四缸街車 | TNT600 | class:disp:600cc | body:naked | pt:ice | current | 2013–present | 600cc直列四缸街车，Benelli经典四缸血统，意式运动街车 |
| model:benelli:tornado-302 | Tornado 302 | Tornado 302 龙卷风302 仿赛 | Tornado 302 龍捲風302 仿賽 | トルネード302 | class:disp:400cc | body:sport | pt:ice | current | 2016–present | 300cc双缸仿赛，龙卷风系列，入门跑车，中国制造 |
| model:benelli:tornado-650 | Tornado 650 | Tornado 650 龙卷风650 双缸街车 | Tornado 650 龍捲風650 雙缸街車 | トルネード650 | class:disp:750cc | body:naked | pt:ice | discontinued | 1971–1975 | 642cc并列双缸大排量街车，美国市场由Steve McQueen形象代言，以可靠和高性能著称 |
| model:benelli:tornado-tre-900 | Tornado Tre 900 | Tornado Tre 900 三缸仿赛 | Tornado Tre 900 三缸仿賽 | トルネード・トレ900 | class:disp:750cc | body:sport | pt:ice | discontinued | 2003–2006 | 898cc三缸仿赛，尾部双风扇强制散热设计独特，Merloni时代的旗舰跑车 |
| model:benelli:tre-1130-k | Tre 1130 K | Tre 1130 K 三缸街车 | Tre 1130 K 三缸街車 | トレ1130K | class:disp:1000cc | body:naked | pt:ice | discontinued | 2006–2017 | 1130cc三缸运动街车，TNT系列偏拉力风格的变体，2006至2017年生产 |
| model:benelli:trk-502 | TRK 502 | TRK 502 探险车 | TRK 502 探險車 | TRK502 | class:disp:600cc | body:adventure | pt:ice | current | 2016–present | 500cc并列双缸，Benelli最畅销探险车，配边箱，中国钱江生产 |
| model:benelli:trk-702 | TRK 702 | TRK 702 探险车 | TRK 702 探險車 | TRK702 | class:disp:750cc | body:adventure | pt:ice | current | 2022–present | 698cc并列双缸，TRK系列大排量版，2022年上市，长途探险 |
| model:benelli:velvet | Velvet | Velvet 中排量踏板车 | Velvet 中排量踏板車 | ベルベット | class:disp:400cc | body:scooter | pt:ice | discontinued | 1997–2012 | 125/150/250/400cc中排量踏板车，Merloni时代主打车型，一直生产至2012年 |

### 4.Beta (4款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:beta:alp-4.0 | Alp 4.0 | Alp 4.0 多功能越野车 | Alp 4.0 多功能越野車 | アルプ4.0 | class:disp:400cc | body:dual-sport | pt:ice | current | 2021–present | 349cc四冲程单缸多功能越野车，复古造型，公路与轻越野兼顾，致敬经典Alp系列 |
| model:beta:evo-300 | EVO 300 | EVO 300 试验摩托 | EVO 300 試驗摩托 | EVO300 | class:disp:400cc | body:enduro | pt:ice | current | 2011–present | 298cc二冲程试验摩托车(trials)，世界试验锦标赛常胜车型，以轻盈操控著称 |
| model:beta:rr-300 | RR 300 | RR 300 耐力越野车 | RR 300 耐力越野車 | RR300 | class:disp:400cc | body:enduro | pt:ice | current | 2010–present | 293cc二冲程耐力越野车，Beta RR系列主力型号，多次斩获世界耐力锦标赛冠军 |
| model:beta:xtrainer-300 | Xtrainer 300 | Xtrainer 300 林道越野车 | Xtrainer 300 林道越野車 | エクストレーナー300 | class:disp:400cc | body:enduro | pt:ice | current | 2015–present | 293cc二冲程林道车，比RR更亲民易控，坐高低、动力平顺，面向休闲越野玩家 |

### 4.Bimota (4款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:bimota:db11 | DB11 | DB11 运动街车（停产） | DB11 運動街車（停產） | DB11 | class:disp:1000cc | body:naked | pt:ice | discontinued | 2016–2019 | 搭载杜卡迪1198cc发动机，手工铝制车架，限量生产的极致运动街车 |
| model:bimota:kb4 | KB4 | KB4 复古咖啡赛车 | KB4 復古咖啡賽車 | KB4 | class:disp:1000cc | body:cafe-racer | pt:ice | current | 2022–present | 搭载川崎Z900RS的948cc四缸发动机，Neo Retro风格，碳纤维车体与Bimota手工车架的现代复古之作 |
| model:bimota:tesi-h2 | Tesi H2 | Tesi H2 轮毂转向运动摩托 | Tesi H2 輪轂轉向運動摩托 | テシH2 | class:disp:1000cc | body:sport | pt:ice | current | 2020–present | 搭载川崎H2机械增压四缸发动机，标志性轮毂中心转向(hub-center steering)设计，Kawasaki参股后推出的复兴旗舰 |
| model:bimota:yb4 | YB4 | YB4 经典仿赛（停产） | YB4 經典仿賽（停產） | YB4 | class:disp:750cc | body:sport | pt:ice | discontinued | 1987–1989 | 搭载雅马哈FZ750发动机，80年代Bimota经典仿赛，轻量化车架的赛道取向之作 |

### 4.Bultaco (21款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:bultaco:alpina-250 | Alpina 250 | Alpina 250 耐力越野车 | Alpina 250 耐力越野車 | アルピナ250 | class:disp:250cc | body:enduro | pt:ice | discontinued | 1971–1977 | 244cc二冲程trail越野车，兼具试验与公路行驶能力，与西班牙红十字会合作开发，Alpina系列开端 |
| model:bultaco:alpina-350 | Alpina 350 | Alpina 350 耐力越野车 | Alpina 350 耐力越野車 | アルピナ350 | class:disp:400cc | body:enduro | pt:ice | discontinued | 1973–1977 | 350cc二冲程trail越野车，Alpina系列加大排量版本，兼顾off-road与长途骑行 |
| model:bultaco:astro-250 | Astro 250 | Astro 250 短道赛车 | Astro 250 短道賽車 | アストロ250 | class:disp:250cc | body:motocross | pt:ice | discontinued | 1971–1974 | 244cc二冲程短道(dirt-track)赛车，动力输出平顺强劲，是美国AMA短道赛的热门战车 |
| model:bultaco:astro-360 | Astro 360 | Astro 360 短道赛车 | Astro 360 短道賽車 | アストロ360 | class:disp:400cc | body:motocross | pt:ice | discontinued | 1974–1976 | 360cc二冲程短道赛车，Astro系列加大排量版本，配备后轮碟刹 |
| model:bultaco:brinco | Brinco | Brinco 电动越野车 | Brinco 電動越野車 | ブリンコ | class:disp:50cc | body:enduro | pt:bev | discontinued | 2015–2017 | 2015年推出的纯电越野摩托自行车，重约40公斤，是Bultaco 2014年复兴后的首款量产车型 |
| model:bultaco:el-bandido | El Bandido | El Bandido 越野赛车 | El Bandido 越野賽車 | エルバンディード | class:disp:400cc | body:motocross | pt:ice | discontinued | 1968–1971 | 350cc起步、后升级360cc的二冲程越野赛车，Bultaco首款大排量motocross车型，El Bandido意为"大盗" |
| model:bultaco:el-tigre | El Tigre | El Tigre 越野车 | El Tigre 越野車 | エルティグレ | class:disp:250cc | body:enduro | pt:ice | discontinued | 1969 | 244cc二冲程越野车，基于Metralla动力平台开发的北美市场车型，El Tigre意为"老虎" |
| model:bultaco:frontera-250 | Frontera 250 | Frontera 250 耐力越野车 | Frontera 250 耐力越野車 | フロンテラ250 | class:disp:250cc | body:enduro | pt:ice | discontinued | 1975–1978 | 244cc二冲程耐力越野车，Frontera系列成员，Bultaco末期enduro赛场的主力车型 |
| model:bultaco:frontera-370 | Frontera 370 | Frontera 370 耐力越野车 | Frontera 370 耐力越野車 | フロンテラ370 | class:disp:400cc | body:enduro | pt:ice | discontinued | 1976–1979 | 370cc二冲程耐力越野车，Gold Medal金奖版性能强劲，曾征战达喀尔拉力赛 |
| model:bultaco:lobito-125 | Lobito 125 | Lobito 125 轻量越野车 | Lobito 125 輕量越野車 | ロビート125 | class:disp:125cc | body:enduro | pt:ice | discontinued | 1970–1975 | 125cc二冲程轻量越野车，Lobito意为"小狼"，面向年轻车手，该系列畅销十余年 |
| model:bultaco:matador-250 | Matador 250 | Matador 250 耐力越野车 | Matador 250 耐力越野車 | マタドール250 | class:disp:250cc | body:enduro | pt:ice | discontinued | 1965–1976 | 244cc二冲程耐力越野车，国际六日赛(ISDT)常胜车型，Bultaco耐力赛领域的主力战车 |
| model:bultaco:mercurio-125 | Mercurio 125 | Mercurio 125 公路车 | Mercurio 125 公路車 | メルクリオ125 | class:disp:125cc | body:naked | pt:ice | discontinued | 1960–1966 | 125cc二冲程单缸经济型公路车，主打平价实用，与Montesa Comando等车型竞争 |
| model:bultaco:mercurio-155 | Mercurio 155 | Mercurio 155 公路车 | Mercurio 155 公路車 | メルクリオ155 | class:disp:125cc | body:naked | pt:ice | discontinued | 1963–1974 | 155cc二冲程单缸公路车，Mercurio系列加大排量版本，生产周期横跨1960-70年代 |
| model:bultaco:metralla-62 | Metralla 62 | Metralla 62 运动街车 | Metralla 62 運動街車 | メトラヤ62 | class:disp:250cc | body:sport | pt:ice | discontinued | 1962–1966 | 196cc二冲程单缸运动街车，Metralla意为"弹片"，是1960年代西班牙高性能街车的代表 |
| model:bultaco:metralla-mk2 | Metralla MK2 | Metralla MK2 运动街车 | Metralla MK2 運動街車 | メトラヤMK2 | class:disp:250cc | body:sport | pt:ice | discontinued | 1966–1974 | 244cc二冲程单缸超级运动街车，当时最快的250cc量产车之一，配套厂方Kit America竞技套件 |
| model:bultaco:pursang-250 | Pursang 250 | Pursang 250 越野赛车 | Pursang 250 越野賽車 | プルサン250 | class:disp:250cc | body:motocross | pt:ice | discontinued | 1964–1979 | 244cc二冲程越野赛车，1970年代Bultaco motocross主力，Jim Pomeroy曾驾驶其赢得1973年西班牙大奖赛 |
| model:bultaco:sherpa-t | Sherpa T | Sherpa T 试验车 | Sherpa T 試驗車 | シェルパT | class:disp:250cc | body:enduro | pt:ice | discontinued | 1964–1984 | Bultaco传奇试验车，与Sammy Miller合作开发，二冲程单缸，统治世界试验赛20年的经典车型 |
| model:bultaco:sherpa-t-350 | Sherpa T 350 | Sherpa T 350 试验车 | Sherpa T 350 試驗車 | シェルパT350 | class:disp:400cc | body:enduro | pt:ice | discontinued | 1974–1979 | 350cc大排量版试验车，1970年代中期推出，为偏好大排量试验车的车手而设 |
| model:bultaco:streaker-125 | Streaker 125 | Streaker 125 运动街车 | Streaker 125 運動街車 | ストリーカー125 | class:disp:125cc | body:sport | pt:ice | discontinued | 1977 | 119cc二冲程单缸青年运动街车，全新车架设计，配备前后碟刹 |
| model:bultaco:tralla-101 | Tralla 101 | Tralla 101 公路车 | Tralla 101 公路車 | トラヤ101 | class:disp:125cc | body:naked | pt:ice | discontinued | 1959–1963 | Bultaco首款车型，125cc二冲程单缸公路车，1959年3月发布，以运动性能开启品牌传奇 |
| model:bultaco:tss-125 | TSS 125 | TSS 125 公路赛车 | TSS 125 公路賽車 | TSS125 | class:disp:125cc | body:sport | pt:ice | discontinued | 1965–1968 | 125cc水冷二冲程公路赛车，面向私人车手的厂队赛车，1960年代125组赛场的劲旅 |

### 4.CCM (3款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:ccm:ft35 | FT35 | FT35 场地越野赛车 | FT35 場地越野賽車 | FT35 | class:disp:400cc | body:motocross | pt:ice | current | 2016–present | 348cc单缸平地赛车(flat track)，CCM量产版直线场地赛车，提供Street Moto公路版本 |
| model:ccm:gp450 | GP450 | GP450 耐力越野车（停产） | GP450 耐力越野車（停產） | GP450 | class:disp:600cc | body:enduro | pt:ice | discontinued | 2015–2020 | 449cc单缸耐力越野车，致敬达喀尔拉力赛，轻量化钢管车架的竞技取向车型 |
| model:ccm:spitfire | Spitfire Scrambler | Spitfire Scrambler 攀爬车 | Spitfire Scrambler 攀爬車 | スピットファイア・スクランブラー | class:disp:600cc | body:scrambler | pt:ice | current | 2019–present | 600cc单缸轻量化攀爬车，英国博尔顿手工制造，干重仅约150公斤的复古越野风格车 |

### 4.CFMoto (25款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:cfmoto:1000mt-x | 1000 MT-X | 1000 MT-X 公升级探险车 | 1000 MT-X 公升級探險車 | 1000MT-X | class:disp:1000cc | body:adventure | pt:ice | current | 2026–present | 2025米兰车展首发，2026年2月上市，946cc双缸（KTM技术同源），博世六轴IMU电控，国产公升级ADV旗舰 |
| model:cfmoto:1250tr-g | 1250TR-G | 1250TR-G 国宾车 豪华旅行车 | 1250TR-G 國賓車 豪華旅行車 | 1250TR-G | class:disp:1000cc | body:touring | pt:ice | current | 2020–present | 春风旗舰豪华旅行车，1279cc V型双缸，KTM 1290技术平台，中国国宾车队主力车型 |
| model:cfmoto:150nk | 150NK | 150NK 入门街车 | 150NK 入門街車 | 150NK | class:disp:125cc | body:naked | pt:ice | current | 2016–present | 春风入门街车，149cc单缸水冷，轻量化车身，新手与城市通勤的高性价比之选 |
| model:cfmoto:250nk | 250NK | 250NK 街车 | 250NK 街車 | 250NK | class:disp:250cc | body:naked | pt:ice | current | 2017–present | 春风入门街车，249cc单缸水冷28马力，国产250街车标杆，操控灵活 |
| model:cfmoto:250sr | 250SR | 250SR 仿赛 | 250SR 仿賽 | 250SR | class:disp:250cc | body:sport | pt:ice | current | 2019–present | 250NK同平台仿赛，249cc单缸28马力，国产入门仿赛销量冠军，赛道基因 |
| model:cfmoto:300sr | 300SR | 300SR 入门仿赛 | 300SR 入門仿賽 | 300SR | class:disp:250cc | body:sport | pt:ice | current | 2020–present | 292cc单缸水冷仿赛，SR家族设计语言，单摇臂版本，入门跑车市场热门选择 |
| model:cfmoto:400nk | 400NK | 400NK 街车 | 400NK 街車 | 400NK | class:disp:400cc | body:naked | pt:ice | current | 2016–present | 400cc级并列双缸街车，42马力，国产中入门街车代表，性价比突出 |
| model:cfmoto:450cl-c | 450CL-C | 450CL-C 复古巡航 | 450CL-C 復古巡航 | 450CL-C | class:disp:400cc | body:cruiser | pt:ice | current | 2023–present | 450cc并列双缸复古巡航，CL-C家族设计，圆灯圆表，国产中排量巡航颜值担当 |
| model:cfmoto:450mt | 450MT | 450MT 探险车 | 450MT 探險車 | 450MT | class:disp:400cc | body:adventure | pt:ice | current | 2024–present | 450SR同平台双缸探险车，21/18寸辐条轮，越野取向，入门ADV新选择 |
| model:cfmoto:450nk | 450NK | 450NK 中量级街车 | 450NK 中量級街車 | 450NK | class:disp:400cc | body:naked | pt:ice | current | 2023–present | 450SR同平台街车，450cc并列双缸50马力，270度曲轴，国产中量级街车新标杆 |
| model:cfmoto:450sr-2025 | 450SR (2025) | 450SR 2025款 中量级仿赛 | 450SR 2025款 中量級仿賽 | 450SR（2025） | class:disp:400cc | body:sport | pt:ice | current | 2025–present | 2025年春季发布会换新上市，450cc并列双缸，增配降价，国产中量级仿赛销量主力 |
| model:cfmoto:450sr-s | 450SR / 450SR S | 450SR S 中量级仿赛 | 450SR S 中量級仿賽 | 450SR S | class:disp:400cc | body:sport | pt:ice | current | 2022–present | 450cc并列双缸50马力，270度曲轴，国产中量级仿赛新标杆，电子快排 |
| model:cfmoto:650gt | 650GT | 650GT 运动旅行车 | 650GT 運動旅行車 | 650GT | class:disp:600cc | body:sport-touring | pt:ice | current | 2018–present | 650NK同平台运动旅行，半整流罩，大风挡，原厂边箱，舒适长途骑行 |
| model:cfmoto:650mt | 650MT | 650MT 探险车 | 650MT 探險車 | 650MT | class:disp:600cc | body:adventure | pt:ice | current | 2017–present | 650NK同平台探险车，18/17寸轮，原厂三箱，国产ADV车型先驱 |
| model:cfmoto:650nk | 650NK | 650NK 街车 | 650NK 街車 | 650NK | class:disp:600cc | body:naked | pt:ice | current | 2012–present | 春风旗舰街车，649cc并列双缸60马力，川崎ER-6n同平台技术，国产大排量街车先行者 |
| model:cfmoto:650tr-g | 650TR-G | 650TR-G 国宾车 豪华旅行车 | 650TR-G 國賓車 豪華旅行車 | 650TR-G 国賓車 | class:disp:600cc | body:touring | pt:ice | current | 2015–present | 中国国宾护卫队指定用车，649cc双缸，全整流罩，电动风挡，豪华舒适大旅行 |
| model:cfmoto:675nk | 675NK | 675NK 三缸运动街车 | 675NK 三缸運動街車 | 675NK | class:disp:600cc | body:naked | pt:ice | current | 2025–present | 2025年春季发布会上市，675cc并列三缸，675SR同平台街车版，国产首款三缸街车 |
| model:cfmoto:675sr-r | 675SR-R | 675SR-R 三缸仿赛 | 675SR-R 三缸仿賽 | 675SR-R | class:disp:600cc | body:sport | pt:ice | current | 2024–present | 675cc并列三缸100+马力，Moto3技术，国产首款三缸仿赛，赛道取向 |
| model:cfmoto:700cl-x | 700CL-X | 700CL-X 复古车 | 700CL-X 復古車 | 700CL-X | class:disp:600cc | body:scrambler | pt:ice | current | 2019–present | 春风复古系列，693cc并列双缸，X元素家族设计，复古与现代融合的CL-X家族开山之作 |
| model:cfmoto:800mt | 800MT Explore / Sport | 800MT 探险车 (KTM引擎) | 800MT 探險車 (KTM引擎) | 800MT | class:disp:750cc | body:adventure | pt:ice | current | 2021–present | KTM 790 Adventure同款LC8c发动机，799cc双缸95马力，国产旗舰探险车，配置丰富 |
| model:cfmoto:800nk | 800NK | 800NK 街车 (KTM LC8c平台) | 800NK 街車 (KTM LC8c平台) | 800NK | class:disp:750cc | body:naked | pt:ice | current | 2023–present | KTM 790 Duke同款LC8c发动机，799cc并列双缸100马力，国产最强中量级街车之一 |
| model:cfmoto:mt-x | MT-X | MT-X 探险车 | MT-X 探險車 | MT-X | class:disp:750cc | body:adventure | pt:ice | current | 2025–present | 春风旗舰探险车，799cc并列双缸KTM平台引擎，全新MT-X设计语言，面向全球ADV市场 |
| model:cfmoto:papio-125 | Papio 125 | Papio 狒狒125 迷你街车 | Papio 狒狒125 迷你街車 | パピオ125 | class:disp:125cc | body:mini | pt:ice | current | 2017–present | 经典狒狒迷你车，125cc单缸，12寸小轮，城市娱乐代步，女性骑手友好 |
| model:cfmoto:xo-baboon | XO Baboon | XO狒狒 迷你车 | XO狒狒 迷你車 | XOバブーン | class:disp:125cc | body:mini | pt:ice | current | 2023–present | 126cc单缸迷你车，复古造型，小尺寸，娱乐代步，新手友好车型 |
| model:cfmoto:xo-baboon-2025 | XO Baboon (2025) | XO狒狒赛车手 2025款 迷你车 | XO狒狒賽車手 2025款 迷你車 | XOバブーン（2025） | class:disp:125cc | body:mini | pt:ice | current | 2025–present | 2025款XO狒狒赛车手，126cc单缸，新增TCS与大包围，座高降至740mm，新手友好 |

### 4.CZ (20款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:cz:cezeta | CZ Čezeta | CZ 501/502 经典踏板车 | CZ 501/502 經典踏板車 | CZ チェゼタ | class:disp:125cc | body:scooter | pt:ice | discontinued | 1957–1963 | CZ Strakonice出品的传奇踏板车（501/502型），搭载175cc二冲程风冷发动机，被称作东欧的维斯帕，畅销东欧、越南与古巴 |
| model:cz:cz-125 | CZ 125 | CZ 125 二冲程单缸街车 | CZ 125 二衝程單缸街車 | CZ 125 | class:disp:125cc | body:naked | pt:ice | discontinued | 1946–1953 | 战后早期CZ 125cc二冲程单缸街车，涵盖A、B、T、C多个型号，123cc风冷发动机，以轻便耐用著称 |
| model:cz:cz-125-453 | CZ 125 Type 453 | CZ 125（453型）二冲程单缸街车 | CZ 125（453型）二衝程單缸街車 | CZ 125 タイプ453 | class:disp:125cc | body:naked | pt:ice | discontinued | 1961–1969 | 1960年代CZ 125cc二冲程单缸街车（453型及473 Sport型），源自国家系列，圆形钢管车架，主要供应东欧市场 |
| model:cz:cz-125-motocross | CZ 125 Motocross | CZ 125 场地越野 | CZ 125 場地越野 | CZ 125 モトクロス | class:disp:125cc | body:motocross | pt:ice | discontinued | 1974–1982 | CZ 125cc二冲程单缸越野赛车（984/511型），风冷发动机，为青少年及新手组别的主力战车 |
| model:cz:cz-150 | CZ 150 | CZ 150 二冲程单缸街车 | CZ 150 二衝程單缸街車 | CZ 150 | class:disp:125cc | body:naked | pt:ice | discontinued | 1950–1953 | 在125基础上加大缸径的150cc二冲程单缸街车，功率约4.6kW，为战后捷克轻型摩托车经典 |
| model:cz:cz-175-450 | CZ 175 Type 450 | CZ 175（450型）二冲程单缸街车 | CZ 175（450型）二衝程單缸街車 | CZ 175 タイプ450 | class:disp:125cc | body:naked | pt:ice | discontinued | 1959–1968 | 1960年代CZ 175cc二冲程单缸街车（450型及470 Sport型），基于国家系列改进，单排气管，功率约10马力 |
| model:cz:cz-175-477 | CZ 175 Type 477 | CZ 175（477型）二冲程单缸街车 | CZ 175（477型）二衝程單缸街車 | CZ 175 タイプ477 | class:disp:125cc | body:naked | pt:ice | discontinued | 1968–1977 | 1960年代末推出的CZ 175cc二冲程单缸街车（477型），外观趋近日系风格，1976年单年产量超过一万五千辆 |
| model:cz:cz-175-special | CZ 175 Special | CZ 175 战前经典街车 | CZ 175 戰前經典街車 | CZ 175 スペシャル | class:disp:125cc | body:naked | pt:ice | discontinued | 1937–1939 | 战前CZ 175cc二冲程单缸街车的高配版本，基于1935年推出的175平台发展而来，镀铬装饰丰富 |
| model:cz:cz-175-trail | CZ 175 Trail | CZ 175 林道越野 | CZ 175 林道越野 | CZ 175 トレール | class:disp:125cc | body:enduro | pt:ice | discontinued | 1971–1977 | CZ 175cc二冲程林道/耐力越野车（482型），约15马力，配备21英寸前轮，主要出口西欧与北美市场 |
| model:cz:cz-250-455 | CZ 250 Type 455 | CZ 250（455型）二冲程单缸街车 | CZ 250（455型）二衝程單缸街車 | CZ 250 タイプ455 | class:disp:250cc | body:naked | pt:ice | discontinued | 1961–1965 | 1960年代CZ 250cc二冲程单缸街车（455型及475 Sport型），246cc发动机，比同排量Jawa更轻快，极速约115km/h |
| model:cz:cz-250-471 | CZ 250 Type 471 | CZ 250（471型）二冲程双缸街车 | CZ 250（471型）二衝程雙缸街車 | CZ 250 タイプ471 | class:disp:250cc | body:naked | pt:ice | discontinued | 1974–1978 | 1970年代CZ 250cc二冲程并列双缸街车（471型），搭载Jawa双缸发动机，功率约17马力，英国市场另有Custom改装版本 |
| model:cz:cz-250-enduro | CZ 250 Enduro | CZ 250 耐力越野 | CZ 250 耐力越野 | CZ 250 エンデューロ | class:disp:250cc | body:enduro | pt:ice | discontinued | 1972–1977 | CZ 250cc二冲程耐力越野车（980.7型），由场地越野赛车加装灯具改装而来，在国际六日赛（ISDT）等耐力赛事中屡获佳绩 |
| model:cz:cz-250-motocross | CZ 250 Motocross | CZ 250 场地越野 | CZ 250 場地越野 | CZ 250 モトクロス | class:disp:250cc | body:motocross | pt:ice | discontinued | 1964–1977 | CZ经典二冲程越野赛车（968/980型），246cc单缸，1960年代Joël Robert等车手驾驶CZ多次夺得250cc世界越野锦标赛冠军 |
| model:cz:cz-250-motocross-520 | CZ 250 Motocross Type 520 | CZ 250 场地越野（520型） | CZ 250 場地越野（520型） | CZ 250 モトクロス タイプ520 | class:disp:250cc | body:motocross | pt:ice | discontinued | 1988–1989 | 1980年代末CZ最后的250cc二冲程越野赛车（520型），为经典CZ越野车系的谢幕之作 |
| model:cz:cz-250-sport | CZ 250 Sport | CZ 250 战前运动街车 | CZ 250 戰前運動街車 | CZ 250 スポーツ | class:disp:250cc | body:naked | pt:ice | discontinued | 1937–1946 | 战前CZ 250cc二冲程单缸运动街车，较250 Tourist减重约20公斤，双排气管，极速约100km/h |
| model:cz:cz-350-472 | CZ 350 Type 472 | CZ 350（472型）二冲程双缸街车 | CZ 350（472型）二衝程雙缸街車 | CZ 350 タイプ472 | class:disp:400cc | body:naked | pt:ice | discontinued | 1976–1993 | CZ最经典的二冲程双缸街车（472型），343cc风冷并列双缸，主要出口苏联及东欧市场，生产周期长达17年 |
| model:cz:cz-350-tourist | CZ 350 Tourist | CZ 350 战前单缸旅行车 | CZ 350 戰前單缸旅行車 | CZ 350 ツーリスト | class:disp:400cc | body:touring | pt:ice | discontinued | 1938–1939 | 战前CZ 350cc二冲程单缸旅行车，75×78mm缸径行程，底盘沿用250 Tourist，车重与振动较大，产量有限 |
| model:cz:cz-400-enduro | CZ 400 Enduro | CZ 400 耐力越野 | CZ 400 耐力越野 | CZ 400 エンデューロ | class:disp:400cc | body:enduro | pt:ice | discontinued | 1974–1979 | CZ 380cc二冲程耐力越野车，在981型场地越野赛车基础上加装灯具与民用装备，主要出口欧美市场 |
| model:cz:cz-400-motocross | CZ 400 Motocross | CZ 400 场地越野 | CZ 400 場地越野 | CZ 400 モトクロス | class:disp:400cc | body:motocross | pt:ice | discontinued | 1974–1983 | CZ大排量二冲程越野赛车，实际排量380cc（981/514型）以400名义出口，动力强劲，为1970年代欧洲越野主力车型之一 |
| model:cz:cz-500 | CZ 500 | CZ 500 战前并列双缸旅行车 | CZ 500 戰前並列雙缸旅行車 | CZ 500 | class:disp:600cc | body:touring | pt:ice | discontinued | 1938–1941 | 捷克兵工厂CZ战前旗舰车型，约494cc风冷并列双缸，1938–1941年生产，可搭配边车，为捷克斯洛伐克战前最大排量摩托车之一 |

### 4.Cagiva (4款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:cagiva:mito-125 | Mito 125 | Mito 125 二冲程仿赛（停产） | Mito 125 二衝程仿賽（停產） | ミト125 | class:disp:125cc | body:sport | pt:ice | discontinued | 1990–2016 | 125cc水冷二冲程仿赛，小排量运动车传奇，多代进化一直生产至2016年 |
| model:cagiva:planet-125 | Planet 125 | Planet 125 二冲程仿赛（停产） | Planet 125 二衝程仿賽（停產） | プラネット125 | class:disp:125cc | body:sport | pt:ice | discontinued | 1996–2003 | Mito的姊妹车型，125cc水冷二冲程，轻量化铝合金车架的小排量仿赛 |
| model:cagiva:river-600 | River 600 | River 600 街车（停产） | River 600 街車（停產） | リバー600 | class:disp:600cc | body:naked | pt:ice | discontinued | 1999–2004 | 600cc水冷并列双缸街车，圆润复古造型，Cagiva在千禧年前后的主流街道车型 |
| model:cagiva:v-raptor | V-Raptor 1000 | V-Raptor 1000 运动街车（停产） | V-Raptor 1000 運動街車（停產） | Vラプター1000 | class:disp:1000cc | body:naked | pt:ice | discontinued | 2000–2005 | 搭载铃木TL1000同款996cc V型双缸发动机，钢管车架外露，造型张扬的运动街车 |

### 4.Can-Am (3款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:can-am:ryker-900 | Ryker 900 | Ryker 900 入门三轮车 | Ryker 900 入門三輪車 | ライカー900 | class:disp:750cc | body:trike | pt:ice | current | 2019–present | 900cc并列双缸倒三轮，主打年轻化与亲民价格，Can-Am三轮家族入门之选 |
| model:can-am:spyder-f3 | Spyder F3 | Spyder F3 运动三轮车 | Spyder F3 運動三輪車 | スパイダーF3 | class:disp:1000cc | body:trike | pt:ice | current | 2015–present | 1330cc三缸倒三轮，运动化骑姿与操控，Can-Am Spyder系列中最具驾驶乐趣的版本 |
| model:can-am:spyder-rt | Spyder RT | Spyder RT 豪华旅行三轮车 | Spyder RT 豪華旅行三輪車 | スパイダーRT | class:disp:1000cc | body:trike | pt:ice | current | 2010–present | 1330cc三缸倒三轮旅行车，豪华风挡与超大储物空间，BRP旗下长途旅行三轮旗舰 |

### 4.DKW (2款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:dkw:nz-350 | NZ 350 | NZ 350 二冲程双缸车（停产） | NZ 350 二衝程雙缸車（停產） | NZ350 | class:disp:400cc | body:naked | pt:ice | discontinued | 1938–1954 | 346cc二冲程并列双缸摩托车，DKW战前战后最具代表性的中型车，战后恢复生产多年 |
| model:dkw:rt-125 | RT 125 | RT 125 二冲程经典车（停产） | RT 125 二衝程經典車（停產） | RT125 | class:disp:125cc | body:naked | pt:ice | discontinued | 1939–1955 | 123cc二冲程单缸摩托车，二战前后全球产量最大的摩托车之一，战后被多国仿制生产 |

### 4.Dayang (6款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:dayang:dayang-110 | Dayang 110 | 大阳110 弯梁车 | 大陽110 彎梁車 | ダイヤン110 | class:disp:125cc | body:underbone | pt:ice | current | 1990–present | 大阳110经典弯梁车，上市三十余年仍在生产销售，价格亲民，城乡代步首选之一 |
| model:dayang:dy100 | DY100 | DY100 弯梁车 | DY100 彎梁車 | DY100 | class:disp:125cc | body:underbone | pt:ice | current | 1990–present | 大阳DY100经典弯梁车，上世纪九十年代凭借省油皮实成为国内弯梁市场的传奇车型 |
| model:dayang:dy90 | DY90 | 大阳90 跨骑 | 大陽90 跨騎 | DY90 | class:disp:125cc | body:naked | pt:ice | discontinued | 1992–2005 | 大阳90跨骑车，与大阳100弯梁车一同奠定了大阳在中原市场的地位，质量稳定油耗低 |
| model:dayang:vrui-250t | V-Rui 250T | V锐250T 踏板车 | V銳250T 踏板車 | Vルイ250T | class:disp:250cc | body:maxi-scooter | pt:ice | current | 2023–present | 大阳V锐250T中绵羊踏板，标配TCS牵引力控制，2026款升级原厂尾箱 |
| model:dayang:vrui-300 | V-Rui 300 | V锐300 大踏板 | V銳300 大踏板 | Vルイ300 | class:disp:250cc | body:maxi-scooter | pt:ice | current | 2021–present | 大阳V锐300大踏板，292cc水冷，造型大气，配置丰富，面向长途摩旅用户 |
| model:dayang:vrui-adv150 | V-Rui ADV150 | V锐ADV150 跨界踏板 | V銳ADV150 跨界踏板 | VルイADV150 | class:disp:250cc | body:scooter | pt:ice | current | 2021–present | 大阳V锐ADV150，150cc水冷ADV跨界踏板，搭载Vi-Core混合动力系统，ABS+TCS配置丰富 |

### 4.Ducati (55款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:ducati:1098 | 1098 | 1098 超级跑车（停产） | 1098 超級跑車（停產） | 1098 | class:disp:1000cc | body:sport | pt:ice | discontinued | 2007–2008 | 2007年推出的Testastretta Evoluzione双缸，性能超越999R，SBK赛场屡获佳绩的经典战车 |
| model:ducati:1198 | 1198 | 1198 超级跑车（停产） | 1198 超級跑車（停產） | 1198 | class:disp:1000cc | body:sport | pt:ice | discontinued | 2009–2010 | 1098扩缸版本，1198cc Testastretta Evoluzione双缸，双缸仿赛时代尾声，2012年被1199 Panigale取代 |
| model:ducati:1299-panigale | 1299 Panigale | 1299 Panigale 旗舰仿赛（停产） | 1299 Panigale 旗艦仿賽（停產） | 1299パニガーレ | class:disp:1000cc | body:sport | pt:ice | discontinued | 2015–2018 | 1285cc Superquadro V缸，205马力，双缸仿赛巅峰，2018年被Panigale V4取代 |
| model:ducati:250-mach-1 | 250 Mach 1 | 250 Mach 1 单缸运动车（停产） | 250 Mach 1 單缸運動車（停產） | 250マッハ1 | class:disp:250cc | body:cafe-racer | pt:ice | discontinued | 1964–1965 | 249cc单缸，当时量产250cc中最快，极速约150km/h，被称为'最快的250' |
| model:ducati:250-monza | 250 Monza | 250 Monza 公路单缸街车（停产） | 250 Monza 公路單缸街車（停產） | 250モンツァ | class:disp:250cc | body:naked | pt:ice | discontinued | 1961–1968 | 249cc顶置凸轮轴单缸，以蒙扎赛道命名，60年代杜卡迪主力单缸公路车 |
| model:ducati:748 | 748 | 748 中排量超级跑车（停产） | 748 中排量超級跑車（停產） | 748 | class:disp:750cc | body:sport | pt:ice | discontinued | 1994–2003 | 916的小排量版本，748cc，共享916车架与外观，为中排量车手提供SBK血统战车 |
| model:ducati:750-gt | 750 GT | 750 GT 首款L型双缸旅行车（停产） | 750 GT 首款L型雙缸旅行車（停產） | 750GT | class:disp:750cc | body:naked | pt:ice | discontinued | 1971–1974 | 杜卡迪首款量产L型双缸公路车，748cc伞齿驱动凸轮轴引擎，1972年Imola赛车即基于此开发 |
| model:ducati:750-paso | 750 Paso | 750 Paso 全包式运动旅行车（停产） | 750 Paso 全包式運動旅行車（停產） | 750パソ | class:disp:750cc | body:sport-touring | pt:ice | discontinued | 1986–1988 | Tamburini设计的全包覆整流罩车型，以车手Pasolini命名，80年代杜卡迪设计革新之作 |
| model:ducati:750-sport | 750 Sport | 750 Sport 运动双缸（停产） | 750 Sport 運動雙缸（停產） | 750スポルト | class:disp:750cc | body:sport | pt:ice | discontinued | 1972–1974 | 1972年Paul Smart与Bruno Spaggiari驾驶该车包揽Imola 200英里赛冠亚军，奠定杜卡迪双缸赛车声誉 |
| model:ducati:750-super-sport | 750 Super Sport | 750 Super Sport 圆机匣超级运动（停产） | 750 Super Sport 圓機匣超級運動（停產） | 750スーパースポルト | class:disp:750cc | body:sport | pt:ice | discontinued | 1973–1974 | 1974年量产仅401台，杜卡迪最具收藏价值的经典，直接脱胎于Imola赛车，挽救了濒临破产的杜卡迪 |
| model:ducati:851 | 851 | 851 首款电喷超级跑车（停产） | 851 首款電噴超級跑車（停產） | 851 | class:disp:750cc | body:sport | pt:ice | discontinued | 1987–1992 | 杜卡迪首款电喷水冷四气门Desmoquattro超级跑车，1990年Raymond Roche驾驶851夺得SBK世界冠军 |
| model:ducati:888 | 888 | 888 超级跑车（停产） | 888 超級跑車（停產） | 888 | class:disp:750cc | body:sport | pt:ice | discontinued | 1991–1993 | 851扩缸而来的888cc超级跑车，SP系列限量版称霸SBK赛场，是916的前身 |
| model:ducati:900-mhr | 900 MHR | 900 MHR 海沃德致敬版（停产） | 900 MHR 海沃德致敬版（停產） | 900MHR | class:disp:750cc | body:sport | pt:ice | discontinued | 1979–1986 | 纪念Mike Hailwood 1978年曼岛TT冠军的复刻车型，绿金涂装，杜卡迪最经典收藏车型之一 |
| model:ducati:900-super-sport | 900 Super Sport | 900 Super Sport 方机匣超级运动（停产） | 900 Super Sport 方機匣超級運動（停產） | 900スーパースポルト | class:disp:750cc | body:sport | pt:ice | discontinued | 1975–1981 | 864cc方机匣伞齿双缸，1975年推出750/900两版，Mike Hailwood 1978年驾900SS夺得曼岛TT冠军 |
| model:ducati:900-supersport | 900 Supersport | 900 Supersport 风冷超级运动（停产） | 900 Supersport 風冷超級運動（停產） | 900スーパースポーツ | class:disp:750cc | body:sport | pt:ice | discontinued | 1988–2007 | 1988年复活的风冷两气门Desmodue超级运动系列，904cc，贯穿80-90年代的经典SS车型 |
| model:ducati:916 | 916 | 916 超级跑车（停产） | 916 超級跑車（停產） | 916 | class:disp:750cc | body:sport | pt:ice | discontinued | 1994–1998 | 传奇设计师Tamburini操刀的经典超级跑车，单侧摇臂与座下排气开创性设计，90年代称霸SBK豪取四冠 |
| model:ducati:996 | 996 | 996 超级跑车（停产） | 996 超級跑車（停產） | 996 | class:disp:750cc | body:sport | pt:ice | discontinued | 1999–2002 | 916的继任者，996cc电喷L型双缸，2001年Bayliss驾驶996夺冠，延续916传奇 |
| model:ducati:998 | 998 | 998 超级跑车（停产） | 998 超級跑車（停產） | 998 | class:disp:750cc | body:sport | pt:ice | discontinued | 2002–2004 | 916系列的最终进化，998cc Testastretta双缸，延续916系SBK冠军血统的收官之作 |
| model:ducati:999 | 999 | 999 超级跑车（停产） | 999 超級跑車（停產） | 999 | class:disp:750cc | body:sport | pt:ice | discontinued | 2003–2006 | Terblanche设计取代916系列的超级跑车，外观颇具争议但战绩辉煌，2003/2004/2006三年SBK冠军 |
| model:ducati:cucciolo | Cucciolo | Cucciolo 幼犬 助力自行车（停产） | Cucciolo 幼犬 助力自行車（停產） | クッチョロ | class:disp:50cc | body:mini | pt:ice | discontinued | 1946–1956 | 杜卡迪首款摩托车，1946年问世，约48cc单缸引擎装于自行车上，得名'幼犬'，战后意大利国民之爱 |
| model:ducati:desertx | DesertX | DesertX 沙漠X 硬派探险车 | DesertX 沙漠X 硬派探險車 | デザートX | class:disp:750cc | body:adventure | pt:ice | current | 2022–present | 937cc Testastretta V缸，复古达喀尔拉力风格，21/18寸轮圈，硬派越野 |
| model:ducati:desertx-rally | DesertX Rally | DesertX Rally 沙漠X 拉力版探险车 | DesertX Rally 沙漠X 拉力版探險車 | デザートXラリー | class:disp:750cc | body:adventure | pt:ice | current | 2024–present | DesertX越野强化版，长行程悬挂，21寸辐条前轮，达喀尔拉力风格 |
| model:ducati:diavel-1260 | Diavel 1260 / Diavel V4 | Diavel 1260/Diavel V4 大魔鬼 巡航运动车 | Diavel 1260/Diavel V4 大魔鬼 巡航運動車 | ディアベル1260/ディアベルV4 | class:disp:1000cc | body:cruiser | pt:ice | current | 2019–present | 1260为Testastretta DVT双缸，Diavel V4为Granturismo V4，肌肉巡航运动 |
| model:ducati:diavel-v4-rs | Diavel V4 RS | Diavel V4 RS 大魔鬼 高性能巡航运动车 | Diavel V4 RS 大魔鬼 高性能巡航運動車 | ディアベルV4 RS | class:disp:1000cc | body:cruiser | pt:ice | current | 2026–present | 2026款全新，1158cc Granturismo V4动力升级至约180马力，运动巡航巅峰 |
| model:ducati:hypermotard-698-mono | Hypermotard 698 Mono | Hypermotard 698 Mono 单缸滑胎超级摩托 | Hypermotard 698 Mono 單缸滑胎超級摩托 | ハイパーモタード698モノ | class:disp:750cc | body:supermoto | pt:ice | current | 2024–present | 659cc单缸，2024年全新单缸滑胎车，杜卡迪时隔多年重回单缸市场之作 |
| model:ducati:hypermotard-950 | Hypermotard 950 / SP | Hypermotard 950/SP 骇客 滑胎超级摩托 | Hypermotard 950/SP 駭客 滑胎超級摩托 | ハイパーモタード950/SP | class:disp:750cc | body:supermoto | pt:ice | current | 2019–present | 937cc Testastretta V缸，高把滑胎风格，SP版Ohlins+Marchesini |
| model:ducati:hyperstrada | Hyperstrada | Hyperstrada 骇道 跨界旅行（停产） | Hyperstrada 駭道 跨界旅行（停產） | ハイパーストラーダ | class:disp:750cc | body:sport-touring | pt:ice | discontinued | 2013–2018 | Hypermotard旅行版，小风挡+边箱，821cc引擎，已并入Multistrada线 |
| model:ducati:mh900e | MH900e | MH900e 致敬经典咖啡赛车（停产） | MH900e 致敬經典咖啡賽車（停產） | MH900e | class:disp:750cc | body:cafe-racer | pt:ice | discontinued | 2000–2002 | Pierre Terblanche设计的复古咖啡赛车，致敬Mike Hailwood，全球限量2000台，网络首发即售罄 |
| model:ducati:monster-1200 | Monster 1200 | Monster 1200 大怪兽 街车（停产） | Monster 1200 大怪獸 街車（停產） | モンスター1200 | class:disp:1000cc | body:naked | pt:ice | discontinued | 2014–2020 | 1198cc Testastretta 11° V缸，Monster系列旗舰，钢管编织车架，2020年停产 |
| model:ducati:monster-797 | Monster 797 | Monster 797 入门怪兽 街车（停产） | Monster 797 入門怪獸 街車（停產） | モンスター797 | class:disp:750cc | body:naked | pt:ice | discontinued | 2017–2021 | 803cc气冷Desmodue V缸，Scrambler同引擎，入门Monster，2021年停产 |
| model:ducati:monster-900 | Monster 900 | Monster 900 怪兽始祖 街车（停产） | Monster 900 怪獸始祖 街車（停產） | モンスター900 | class:disp:750cc | body:naked | pt:ice | discontinued | 1993–2001 | 1993年推出的首款Monster，904cc气冷双缸+钢管编织车架，开创裸把街车时代，杜卡迪救世主车型 |
| model:ducati:monster-937 | Monster 937 / Monster SP | Monster 937 / Monster SP 怪兽 街车 | Monster 937 / Monster SP 怪獸 街車 | モンスター937/モンスターSP | class:disp:750cc | body:naked | pt:ice | current | 2021–present | 937cc Testastretta 11° V缸，全新车架减重18kg，Monster系列新时代 |
| model:ducati:multistrada-950 | Multistrada 950 | Multistrada 950 揽途950 探险车（停产） | Multistrada 950 攬途950 探險車（停產） | マルチストラーダ950 | class:disp:750cc | body:adventure | pt:ice | discontinued | 2017–2021 | 937cc Testastretta V缸，中量级揽途，公路探险兼顾，2021年停产 |
| model:ducati:multistrada-v2 | Multistrada V2 / V4 S | Multistrada V2/V4 S 揽途 探险车 | Multistrada V2/V4 S 攬途 探險車 | マルチストラーダV2/V4S | class:disp:1000cc | body:adventure | pt:ice | current | 2022–present | V2为937cc双缸，V4 S为1158cc Granturismo V4，杜卡迪主力ADV |
| model:ducati:multistrada-v2-2025 | Multistrada V2 / V2 S (2025) | Multistrada V2/V2 S 揽途 中量级探险车（2025款） | Multistrada V2/V2 S 攬途 中量級探險車（2025款） | マルチストラーダV2/V2S（2025） | class:disp:750cc | body:adventure | pt:ice | current | 2025–present | 2025年换代，890cc全新V2引擎平台，减重约18kg，干重199kg |
| model:ducati:multistrada-v4-rally | Multistrada V4 Rally | Multistrada V4 Rally 揽途 大探险硬派版 | Multistrada V4 Rally 攬途 大探險硬派版 | マルチストラーダV4ラリー | class:disp:1000cc | body:adventure | pt:ice | current | 2023–present | V4 Rally越野强化版，30L油箱，21寸前轮，Skyhook EVO悬挂，长行程 |
| model:ducati:multistrada-v4-rs | Multistrada V4 RS | Multistrada V4 RS 揽途 高性能探险车 | Multistrada V4 RS 攬途 高性能探險車 | マルチストラーダV4 RS | class:disp:1000cc | body:adventure | pt:ice | current | 2026–present | 2026款全新，Panigale V4同源1103cc V4引擎，干式离合，运动旅行性能巅峰 |
| model:ducati:panigale-959 | Panigale 959 | Panigale 959 中量级仿赛（停产） | Panigale 959 中量級仿賽（停產） | パニガーレ959 | class:disp:750cc | body:sport | pt:ice | discontinued | 2016–2019 | 955cc Superquadro V缸，Panigale 899后继车型，2019年被Panigale V2取代 |
| model:ducati:panigale-v2 | Panigale V2 | Panigale V2 中量级仿赛 | Panigale V2 中量級仿賽 | パニガーレV2 | class:disp:750cc | body:sport | pt:ice | current | 2020–present | 955cc Superquadro V缸，155马力，V4小弟，电子悬挂，赛道利器 |
| model:ducati:panigale-v2-2025 | Panigale V2 / V2 S (2025) | Panigale V2/V2 S 中量级仿赛（2025款） | Panigale V2/V2 S 中量級仿賽（2025款） | パニガーレV2/V2S（2025） | class:disp:750cc | body:sport | pt:ice | current | 2025–present | 2025年换代，890cc全新V2引擎取代Superquadro，约120马力，大幅减重 |
| model:ducati:panigale-v2-final-edition | Panigale V2 Superquadro Final Edition | Panigale V2 Superquadro Final Edition 最终版仿赛 | Panigale V2 Superquadro Final Edition 最終版仿賽 | パニガーレV2 スーパークアドロ ファイナルエディション | class:disp:750cc | body:sport | pt:ice | current | 2024–present | Superquadro双缸最终版本，特别涂装+Ohlins，限量纪念车型 |
| model:ducati:panigale-v4 | Panigale V4 / V4 S / V4 R | Panigale V4/V4 S/V4 R 旗舰仿赛 | Panigale V4/V4 S/V4 R 旗艦仿賽 | パニガーレV4/V4S/V4R | class:disp:1000cc | body:sport | pt:ice | current | 2018–present | 1103cc Desmosedici Stradale V4，V4 S为Ohlins版，V4 R赛道版240马力 |
| model:ducati:panigale-v4-2025 | Panigale V4 / V4 S (2025) | Panigale V4/V4 S 旗舰仿赛（2025款） | Panigale V4/V4 S 旗艦仿賽（2025款） | パニガーレV4/V4S（2025） | class:disp:1000cc | body:sport | pt:ice | current | 2025–present | 2025款新一代旗舰仿赛，1103cc Desmosedici V4升级，全新车架与空气动力学设计 |
| model:ducati:pantah | Pantah 500/600/650 | Pantah 500/600/650 现代双缸鼻祖（停产） | Pantah 500/600/650 現代雙缸鼻祖（停產） | パンタ500/600/650 | class:disp:750cc | body:sport | pt:ice | discontinued | 1980–1986 | 1979年首发，首款皮带驱动凸轮轴的双缸，500SL/600SL/TL/650SL系列，现代杜卡迪L型双缸鼻祖 |
| model:ducati:scrambler-1100 | Scrambler 1100 Pro / Sport Pro | Scrambler 1100 Pro/Sport Pro 自游1100 攀爬者 | Scrambler 1100 Pro/Sport Pro 自遊1100 攀爬者 | スクランブラー1100プロ/スポーツプロ | class:disp:1000cc | body:scrambler | pt:ice | current | 2020–present | 1079cc L型双缸，大排量自游，复古攀爬，Sport Pro配Ohlins |
| model:ducati:scrambler-400 | Scrambler 400 Icon Dark | Scrambler 400 Icon Dark 自游400 攀爬者 | Scrambler 400 Icon Dark 自遊400 攀爬者 | スクランブラー400 | class:disp:400cc | body:scrambler | pt:ice | current | 2024–present | 399cc单缸，印度市场入门自游，复古攀爬风格，2024年上市 |
| model:ducati:scrambler-800-next-gen | Scrambler 800 Next-Gen | Scrambler 800 Next-Gen 自游800 新一代攀爬者 | Scrambler 800 Next-Gen 自遊800 新一代攀爬者 | スクランブラー800 ネクストジェネレーション | class:disp:750cc | body:scrambler | pt:ice | current | 2023–present | 803cc Desmodue气冷V缸，新一代自游，4寸TFT，Icon/Full Throttle/Nightshift三款 |
| model:ducati:st2 | ST2 | ST2 运动旅行车（停产） | ST2 運動旅行車（停產） | ST2 | class:disp:750cc | body:sport-touring | pt:ice | discontinued | 1997–2003 | 杜卡迪首款现代运动旅行车，944cc气冷双缸，开启ST系列公路长途之旅 |
| model:ducati:st4 | ST4 | ST4 运动旅行车（停产） | ST4 運動旅行車（停產） | ST4 | class:disp:750cc | body:sport-touring | pt:ice | discontinued | 1999–2005 | ST系列高性能版，搭载916cc水冷四气门Desmoquattro引擎，2005年停产 |
| model:ducati:streetfighter-v2 | Streetfighter V2 | Streetfighter V2 街霸 中量级运动街车 | Streetfighter V2 街霸 中量級運動街車 | ストリートファイターV2 | class:disp:750cc | body:naked | pt:ice | current | 2022–present | 955cc Superquadro V缸，Panigale V2街车版，150马力，中量级街车性能代表 |
| model:ducati:streetfighter-v2-2025 | Streetfighter V2 / V2 S (2025) | Streetfighter V2/V2 S 街霸 中量级运动街车（2025款） | Streetfighter V2/V2 S 街霸 中量級運動街車（2025款） | ストリートファイターV2/V2S（2025） | class:disp:750cc | body:naked | pt:ice | current | 2025–present | 2025年换代，890cc全新V2引擎带IVT可变正时，取消Desmo气门改用弹簧气门 |
| model:ducati:streetfighter-v4 | Streetfighter V4 / V4 S | Streetfighter V4/V4 S 街霸 运动街车 | Streetfighter V4/V4 S 街霸 運動街車 | ストリートファイターV4/V4S | class:disp:1000cc | body:naked | pt:ice | current | 2020–present | Panigale V4去整流罩，208马力，气动双翼，公升街车性能天花板 |
| model:ducati:supersport-939 | SuperSport 939 | SuperSport 939 鸰速 运动旅行跑车（停产） | SuperSport 939 鴒速 運動旅行跑車（停產） | スーパースポーツ939 | class:disp:750cc | body:sport-touring | pt:ice | discontinued | 2017–2020 | 937cc Testastretta V缸，舒适骑姿运动跑车，2020年停产，后继SuperSport 950 |
| model:ducati:supersport-950 | SuperSport 950 / S | SuperSport 950/S 鸰速 运动旅行跑车 | SuperSport 950/S 鴒速 運動旅行跑車 | スーパースポーツ950/S | class:disp:750cc | body:sport-touring | pt:ice | current | 2021–present | 937cc Testastretta 11° V缸，日常友好仿赛，舒适骑姿，S版配Ohlins |
| model:ducati:xdiavel | XDiavel / XDiavel Nera | XDiavel/XDiavel Nera X大魔鬼 美式巡航 | XDiavel/XDiavel Nera X大魔鬼 美式巡航 | Xディアベル/Xディアベルネラ | class:disp:1000cc | body:cruiser | pt:ice | current | 2016–present | 1262cc Testastretta DVT，前置脚踏，240宽胎，纯正美式巡航风格，Nera限量 |

### 4.Energica (4款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:energica:ego | Ego | Ego 纯电仿赛（停产） | Ego 純電仿賽（停產） | エゴ | class:disp:1000cc | body:sport | pt:bev | discontinued | 2015–2022 | Energica首款量产纯电仿赛，约145马力，意大利高端电动摩托开路之作，曾为MotoE测试基础车型 |
| model:energica:eva-esseesse9 | Eva EsseEsse9 | Eva EsseEsse9 复古纯电街车（停产） | Eva EsseEsse9 復古純電街車（停產） | エヴァ・エッセエッセ9 | class:disp:1000cc | body:naked | pt:bev | discontinued | 2017–2020 | 约109马力纯电街车，复古风格造型，后被Eva Ribelle取代 |
| model:energica:eva-ribelle | Eva Ribelle | Eva Ribelle 纯电街车 | Eva Ribelle 純電街車 | エヴァ・リベッレ | class:disp:1000cc | body:naked | pt:bev | current | 2020–present | 约145马力纯电街车，19.6kWh大电池，支持快充，Energica电动街车主力型号 |
| model:energica:experia | Experia | Experia 纯电探险旅行车 | Experia 純電探險旅行車 | エスペリア | class:disp:1000cc | body:adventure | pt:bev | current | 2022–present | 约102马力纯电探险旅行车，续航约420公里，Energica首款长途电动ADV |

### 4.Gilera (3款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:gilera:gp-800 | GP 800 | GP 800 双缸大绵羊（停产） | GP 800 雙缸大綿羊（停產） | GP800 | class:disp:1000cc | body:maxi-scooter | pt:ice | discontinued | 2007–2011 | 搭载839cc V型双缸发动机的大绵羊，与Aprilia同平台，曾是大排量踏板车巅峰之作 |
| model:gilera:nexus-500 | Nexus 500 | Nexus 500 大绵羊（停产） | Nexus 500 大綿羊（停產） | ネクサス500 | class:disp:600cc | body:maxi-scooter | pt:ice | discontinued | 2003–2011 | 460cc水冷大绵羊，曾由Gilera、Aprilia、Piaggio三个品牌共同推出，运动性能出众 |
| model:gilera:runner-125 | Runner 125 | Runner 125 运动踏板车（停产） | Runner 125 運動踏板車（停產） | ランナー125 | class:disp:125cc | body:scooter | pt:ice | discontinued | 1997–2015 | Piaggio集团出品的高性能运动踏板，水冷125cc引擎，曾为125踏板车性能标杆 |

### 4.Hanway (6款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:hanway:b40 | B40 | B40 巡航车 | B40 巡航車 | B40 | class:disp:400cc | body:cruiser | pt:ice | current | 2022–present | 汉威B40，400cc排量级巡航车，与B50同场发布，入门复古巡航之选 |
| model:hanway:b50 | B50 | B50 Bobber | B50 Bobber | B50 | class:disp:600cc | body:bobber | pt:ice | current | 2022–present | 汉威B50，500cc双缸软尾Bobber，2022年8月发布，国产中量级软尾Bobber的先驱车型 |
| model:hanway:hc-125 | HC 125 Blackcafe | HC 125 咖啡赛车 | HC 125 咖啡賽車 | HC125ブラックカフェ | class:disp:125cc | body:cafe-racer | pt:ice | current | 2022–present | 汉威HC 125 Blackcafe，125cc咖啡赛车风格复古车，与HS 125同场发布 |
| model:hanway:hs-125 | HS 125 Scrambler | HS 125 攀爬者 | HS 125 攀爬者 | HS125スクランブラー | class:disp:125cc | body:scrambler | pt:ice | current | 2022–present | 汉威HS 125 Scrambler，125cc复古攀爬风格车，2023北京摩展发布，售价10980元 |
| model:hanway:yp400 | YP400 | YP400 Bobber | YP400 Bobber | YP400 | class:disp:400cc | body:bobber | pt:ice | current | 2023–present | 汉威YP400，400cc平价Bobber车型，主打高性价比的入门复古定制风格 |
| model:hanway:yp500 | YP500 | 雅痞YP500 Bobber | 雅痞YP500 Bobber | YP500 | class:disp:600cc | body:bobber | pt:ice | current | 2022–present | 汉威雅痞YP500，基于B50打造的英式Bobber单座版，498cc直列双缸水冷，英伦复古风十足 |

### 4.Haojue (20款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:haojue:adx125-plus-2026 | ADX125 Plus 2026 | ADX125 Plus 平踏板（2026款） | ADX125 Plus 平踏板（2026款） | ADX125 Plus | class:disp:125cc | body:scooter | pt:ice | current | 2026–present | 豪爵2026款ADX125 Plus平踏板，升级高功引擎、TFT投屏仪表与智能配置，前轮博世ABS，售价11380元起，主打家用通勤 |
| model:haojue:afr125 | AFR125 | AFR125 通勤踏板 | AFR125 通勤踏板 | AFR125 | class:disp:125cc | body:scooter | pt:ice | current | 2021–present | 豪爵主力125cc通勤踏板，搭载ESS发动机，LED大灯，静音启动，城市代步首选之一 |
| model:haojue:afr125x-2025 | AFR125X 2025 | AFR125X 通勤踏板（2025款） | AFR125X 通勤踏板（2025款） | AFR125X | class:disp:125cc | body:scooter | pt:ice | current | 2025–present | 豪爵2025款AFR125X踏板，AFR125S的升级换代车型，单缸风冷ESS发动机，配博世ABS，售价10580元，主打万元级通勤市场 |
| model:haojue:dks150-2025 | DKS150 2025 | DKS150 跨骑街车（2025款） | DKS150 跨騎街車（2025款） | DKS150 | class:disp:125cc | body:naked | pt:ice | current | 2025–present | 豪爵2025款150cc跨骑街车，2025年5月上市，139kg轻量化车身配16.5L大油箱，超长续航，主打实用通勤与载货 |
| model:haojue:dl250 | DL250 | DL250 探险旅行车 | DL250 探險旅行車 | DL250 | class:disp:250cc | body:adventure | pt:ice | current | 2016–present | 豪爵铃木旗下250cc探险旅行车，双缸水冷，中国摩旅市场最畅销的入门拉力车型之一 |
| model:haojue:dl250-2026 | DL250 2026 | DL250 探险旅行车（2026款） | DL250 探險旅行車（2026款） | DL250 | class:disp:250cc | body:adventure | pt:ice | current | 2026–present | 豪爵铃木2026款DL250，升级滑动离合、彩色液晶仪表、LED大灯与原厂C口快充，新增黑武士配色，标准版19880元起 |
| model:haojue:dr300 | DR300 | DR300 街车 | DR300 街車 | DR300 | class:disp:250cc | body:naked | pt:ice | current | 2020–present | 豪爵298cc并列双缸街车，动力调校偏向运动，做工与操控表现优异，定位高端通路街车 |
| model:haojue:gsx250r | GSX250R | GSX250R 入门仿赛 | GSX250R 入門仿賽 | GSX250R | class:disp:250cc | body:sport | pt:ice | current | 2017–present | 豪爵铃木合资生产的250cc入门仿赛，双缸水冷，铃木GSX系列家族外观，国内最畅销的入门跑车 |
| model:haojue:gsx250r-2026 | GSX250R 2026 | GSX250R 入门仿赛（2026款） | GSX250R 入門仿賽（2026款） | GSX250R | class:disp:250cc | body:sport | pt:ice | current | 2026–present | 豪爵铃木2026款GSX250R，搭载全新VVL可变气门发动机，升级滑动离合、TFT全彩仪表、透镜LED大灯并新增前脸双侧定风翼，售价18980元 |
| model:haojue:hj150 | HJ150 | HJ150 跨骑车 | HJ150 跨騎車 | HJ150 | class:disp:125cc | body:naked | pt:ice | current | 2015–present | 豪爵经典150cc单缸跨骑通路车，皮实耐用，性价比高，国内乡镇农村市场畅销车型 |
| model:haojue:tr300 | TR300 | TR300 巡航车 | TR300 巡航車 | TR300 | class:disp:250cc | body:cruiser | pt:ice | current | 2021–present | 豪爵298cc双缸巡航车，圆润复古造型，做工精细，国产入门巡航热门车型 |
| model:haojue:tr300-amt-2026 | TR300 AMT 2026 | TR300 AMT 巡航车（2026款） | TR300 AMT 巡航車（2026款） | TR300 AMT | class:disp:250cc | body:cruiser | pt:ice | current | 2026–present | 豪爵2026款TR300自动挡巡航车，搭载自研AMT电控变速箱与皮带传动，外观同步改款，预计2026年10月上市，售价约2.3万元 |
| model:haojue:ufr150 | UFR150 | UFR150 旗舰水冷踏板 | UFR150 旗艦水冷踏板 | UFR150 | class:disp:125cc | body:scooter | pt:ice | current | 2025–present | 豪爵2025年推出的旗舰级150cc水冷踏板，149cc单缸水冷发动机，全系标配博世ABS+电装TCS、气囊后减震与TFT仪表，售价17880元起 |
| model:haojue:uhr150 | UHR150 | UHR150 水冷踏板 | UHR150 水冷踏板 | UHR150 | class:disp:125cc | body:scooter | pt:ice | current | 2022–present | 豪爵150cc单缸水冷踏板，配置ABS+TCS，做工精良，国产150踏板高端标杆 |
| model:haojue:uhr150-2026 | UHR150 2026 | UHR150 水冷踏板（2026款） | UHR150 水冷踏板（2026款） | UHR150 | class:disp:125cc | body:scooter | pt:ice | current | 2026–present | 豪爵2026款UHR150踏板，LED大灯升级为欧司朗光源透镜灯组等四项配置升级，150cc单缸水冷，延续ABS+TCS配置 |
| model:haojue:usr125 | USR125 | USR125 运动踏板 | USR125 運動踏板 | USR125 | class:disp:125cc | body:scooter | pt:ice | current | 2019–present | 豪爵125cc运动风格踏板，轻量化车架，操控灵活，ESS动力平台，都市年轻用户群体 |
| model:haojue:vd125 | VD125 | VD125 经典踏板 | VD125 經典踏板 | VD125 | class:disp:125cc | body:scooter | pt:ice | current | 2022–present | 豪爵125cc经典款式踏板，ESS发动机，复古圆润设计，皮实耐用，性价比出色 |
| model:haojue:vf125 | VF125 | VF125 代步踏板 | VF125 代步踏板 | VF125 | class:disp:125cc | body:scooter | pt:ice | current | 2019–present | 豪爵125cc入门代步踏板，经济实惠，动力平顺，城市短途通勤主力车型 |
| model:haojue:vx125 | VX125 | VX125 实用踏板 | VX125 實用踏板 | VX125 | class:disp:125cc | body:scooter | pt:ice | current | 2022–present | 豪爵125cc实用型踏板，大座桶大平踏，ESS发动机，主打日常通勤与实用性 |
| model:haojue:xcr300 | XCR300 | XCR300 跨界街车 | XCR300 跨界街車 | XCR300 | class:disp:250cc | body:naked | pt:ice | current | 2020–present | DR300同平台跨界风格街车，298cc双缸，高位排气加越野元素，XCR家族定位多功能街车 |

### 4.Harley-Davidson (49款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:harley-davidson:breakout-117 | Breakout 117 | Breakout 117 突破者 巡航车 | Breakout 117 突破者 巡航車 | ブレイクアウト117 | class:disp:1000cc | body:cruiser | pt:ice | current | 2024–present | Milwaukee-Eight 117，240mm宽后胎，长轴距Pro Street改装风格 |
| model:harley-davidson:bronx | Bronx / Bronx S | Bronx 布朗克斯 街车（取消发布） | Bronx 布朗克斯 街車（取消發布） | ブロンクス | class:disp:750cc | body:naked | pt:ice | discontinued | 2020 (canceled) | 原计划搭载975T发动机街车，项目取消未正式量产 |
| model:harley-davidson:cvo-road-glide | CVO Road Glide | CVO Road Glide CVO公路滑翔 定制旗舰Bagger | CVO Road Glide CVO公路滑翔 定制旗艦Bagger | CVOロードグライド | class:disp:1000cc | body:bagger | pt:ice | current | 2004–present | CVO旗舰鲨鱼鼻Bagger，Milwaukee-Eight 121，限量涂装，Rockford音响 |
| model:harley-davidson:cvo-road-glide-rr | CVO Road Glide RR | CVO Road Glide RR 赛道级定制Bagger | CVO Road Glide RR 賽道級定制Bagger | CVOロードグライドRR | class:disp:1000cc | body:bagger | pt:ice | current | 2025–present | 2025年发布赛道级CVO巡航，131ci Screamin' Eagle发动机，全球限量131台，哈雷最强量产Bagger |
| model:harley-davidson:cvo-road-glide-st | CVO Road Glide ST | CVO Road Glide ST 定制公路滑翔ST Bagger | CVO Road Glide ST 定制公路滑翔ST Bagger | CVOロードグライドST | class:disp:1000cc | body:bagger | pt:ice | current | 2025–present | CVO旗舰鲨鱼鼻Bagger，Milwaukee-Eight VVT 121大排量V缸，运动化低风挡与轻量轮毂 |
| model:harley-davidson:cvo-street-glide | CVO Street Glide | CVO Street Glide CVO大道滑翔 定制旗舰Bagger | CVO Street Glide CVO大道滑翔 定制旗艦Bagger | CVOストリートグライド | class:disp:1000cc | body:bagger | pt:ice | current | 2004–present | CVO定制部门，Milwaukee-Eight 121发动机，限量手绘涂装，高端音响 |
| model:harley-davidson:duo-glide | FL Duo-Glide | FL Duo-Glide 双人滑翔 旅行车（停产） | FL Duo-Glide 雙人滑翔 旅行車（停產） | FL デュオグライド | class:disp:1000cc | body:touring | pt:ice | discontinued | 1958–1964 | 哈雷首款标配后悬挂的大排量车型，双人长途骑乘舒适性大幅提升，搭载Panhead平头发动机 |
| model:harley-davidson:electra-glide | FLH Electra Glide | FLH Electra Glide 电动滑翔 旅行车（停产） | FLH Electra Glide 電動滑翔 旅行車（停產） | FLH エレクトラグライド | class:disp:1000cc | body:touring | pt:ice | discontinued | 1965–1993 | 1965年首款电启动哈雷大排量车，先后搭载平头、铲头与进化发动机，奠定哈雷旅行车标杆 |
| model:harley-davidson:electra-glide-ultra-limited | Electra Glide Ultra Limited | Electra Glide Ultra Limited 至尊大滑翔 顶级旅行车 | Electra Glide Ultra Limited 至尊大滑翔 頂級旅行車 | エレクトラグライド ウルトラリミテッド | class:disp:1000cc | body:touring | pt:ice | current | 2010–present | Milwaukee-Eight 117，全整流罩+顶箱，BOOM音响，哈雷旗舰旅行车 |
| model:harley-davidson:fat-bob-114 | Fat Bob 114 | Fat Bob 114 肥波 巡航车 | Fat Bob 114 肥波 巡航車 | ファットボブ114 | class:disp:1000cc | body:cruiser | pt:ice | current | 2020–present | Milwaukee-Eight 114，双LED圆灯，厚胎，软尾系列运动巡航 |
| model:harley-davidson:fat-boy-114 | Fat Boy 114 | Fat Boy 114 肥仔 巡航车 | Fat Boy 114 肥仔 巡航車 | ファットボーイ114 | class:disp:1000cc | body:cruiser | pt:ice | current | 2020–present | Milwaukee-Eight 114发动机，实心盘轮毂，《终结者》电影名车 |
| model:harley-davidson:flhs | FLHS Electra Glide Sport | FLHS Electra Glide Sport 运动滑翔 旅行车（停产） | FLHS Electra Glide Sport 運動滑翔 旅行車（停產） | FLHS エレクトラグライド スポーツ | class:disp:1000cc | body:touring | pt:ice | discontinued | 1987–1993 | 去掉整流罩与顶箱的简化版Electra Glide，被视为Road King的直系前身 |
| model:harley-davidson:forty-eight | Forty-Eight (X48) | Forty-Eight X48 巡航车（停产） | Forty-Eight X48 巡航車（停產） | フォーティーエイト(X48) | class:disp:1000cc | body:cruiser | pt:ice | discontinued | 2010–2022 | Evolution 1200cc V缸，经典Sportster系列，花生油箱，短尾设计 |
| model:harley-davidson:freewheeler | Freewheeler | Freewheeler 自由者 三轮巡航车 | Freewheeler 自由者 三輪巡航車 | フリーホイーラー | class:disp:1000cc | body:trike | pt:ice | current | 2015–present | Milwaukee-Eight 114，正三轮巡航，不带顶箱的入门三轮旅行选择 |
| model:harley-davidson:fxr | FXR | FXR 巡航车（停产） | FXR 巡航車（停產） | FXR | class:disp:1000cc | body:cruiser | pt:ice | discontinued | 1982–1994 | 1982年推出的橡胶安装发动机Evo巡航车，操控优异，至今被改装圈奉为经典 |
| model:harley-davidson:heritage-classic-114 | Heritage Classic 114 | Heritage Classic 114 经典继承者 巡航车 | Heritage Classic 114 經典繼承者 巡航車 | ヘリテイジクラシック114 | class:disp:1000cc | body:cruiser | pt:ice | current | 2020–present | Milwaukee-Eight 114，复古风挡+皮质边箱，可拆卸整流罩巡航 |
| model:harley-davidson:heritage-softail | FLSTC Heritage Softail Classic | FLSTC Heritage Softail Classic 经典软尾 巡航车（停产） | FLSTC Heritage Softail Classic 經典軟尾 巡航車（停產） | ヘリテイジソフテイル クラシック | class:disp:1000cc | body:cruiser | pt:ice | discontinued | 1986–2020 | 1986年推出的复古风格软尾，白边胎、皮质边箱与大挡风玻璃致敬40年代经典 |
| model:harley-davidson:hydra-glide | FL Hydra-Glide | FL Hydra-Glide 液压滑翔 旅行车（停产） | FL Hydra-Glide 液壓滑翔 旅行車（停產） | FL ハイドラグライド | class:disp:1000cc | body:touring | pt:ice | discontinued | 1949–1957 | 首款配备液压伸缩前叉的Panhead平头发动机车型，1949年推出，开创哈雷现代旅行车纪元 |
| model:harley-davidson:iron-883 | Iron 883 (883N) | Iron 883 硬汉883N 巡航车（停产） | Iron 883 硬漢883N 巡航車（停產） | アイアン883(883N) | class:disp:750cc | body:cruiser | pt:ice | discontinued | 2009–2022 | Evolution 883cc V缸，暗黑风格，入门哈雷经典，2022年停产 |
| model:harley-davidson:ironhead-sportster | Sportster Ironhead (XL) | Sportster Ironhead 铁头 巡航车（停产） | Sportster Ironhead 鐵頭 巡航車（停產） | スポーツスター アイアンヘッド | class:disp:750cc | body:cruiser | pt:ice | discontinued | 1957–1985 | 1957年推出的首代Sportster，OHV顶置气门铸铁缸头，883cc为主，1972年起增加1000cc版本 |
| model:harley-davidson:knucklehead-el | EL Knucklehead | EL 指节头 巡航车（停产） | EL 指節頭 巡航車（停產） | EL ナックルヘッド | class:disp:1000cc | body:cruiser | pt:ice | discontinued | 1936–1947 | 哈雷首款顶置气门V型双缸车型，61立方英寸发动机，因汽缸盖形似指节得名，奠定哈雷大排量V缸王朝 |
| model:harley-davidson:knucklehead-fl | FL Knucklehead | FL 指节头 巡航车（停产） | FL 指節頭 巡航車（停產） | FL ナックルヘッド | class:disp:1000cc | body:cruiser | pt:ice | discontinued | 1941–1947 | 74立方英寸（1200cc）大排量版指节头，二战前后哈雷旗舰级巡航车型 |
| model:harley-davidson:livewire-one | LiveWire One | LiveWire One 纯电巡航车 | LiveWire One 純電巡航車 | ライブワイヤーワン | class:disp:1000cc | body:cruiser | pt:bev | current | 2021–present | Harley旗下LiveWire品牌纯电车型，105马力，续航约235km，即时扭矩 |
| model:harley-davidson:low-rider-s | Low Rider S | Low Rider S 低骑手S 巡航车 | Low Rider S 低騎手S 巡航車 | ローライダーS | class:disp:1000cc | body:cruiser | pt:ice | current | 2020–present | Milwaukee-Eight 117，黑色风格运动巡航，低把宽后胎，软尾家族性能版 |
| model:harley-davidson:low-rider-st | Low Rider ST | Low Rider ST 低骑手ST 运动Bagger | Low Rider ST 低騎手ST 運動Bagger | ローライダーST | class:disp:1000cc | body:bagger | pt:ice | current | 2022–present | Milwaukee-Eight 117，带硬边箱与整流罩的运动Bagger，2022年推出 |
| model:harley-davidson:night-train | FXSTB Night Train | FXSTB Night Train 夜车 巡航车（停产） | FXSTB Night Train 夜車 巡航車（停產） | FXSTB ナイトトレイン | class:disp:1000cc | body:bobber | pt:ice | discontinued | 1997–2009 | 暗黑风格软尾Bobber，哑光黑涂装，2009年停产，深受改装圈喜爱 |
| model:harley-davidson:pan-america-1250 | Pan America 1250 | Pan America 1250 泛美 探险车 | Pan America 1250 汎美 探險車 | パンアメリカ1250 | class:disp:1000cc | body:adventure | pt:ice | current | 2021–present | Revolution Max 1250 V缸，哈雷首款ADV标准版，150马力，公路越野两用 |
| model:harley-davidson:pan-america-1250-special | Pan America 1250 Special | Pan America 1250 Special 泛美 探险车 | Pan America 1250 Special 汎美 探險車 | パンアメリカ1250スペシャル | class:disp:1000cc | body:adventure | pt:ice | current | 2021–present | Revolution Max 1250 V缸，哈雷首款ADV，自适应坐高，公路越野两用 |
| model:harley-davidson:pan-america-1250-st | Pan America 1250 ST | Pan America 1250 ST 泛美公路版 探险车 | Pan America 1250 ST 汎美公路版 探險車 | パンアメリカ1250ST | class:disp:1000cc | body:adventure | pt:ice | current | 2025–present | 2025年全新公路取向ADV，Revolution Max 1250 V缸，19寸前轮，低座高，主打Adventure Sport |
| model:harley-davidson:road-glide | Road Glide | Road Glide 公路滑翔 Bagger | Road Glide 公路滑翔 Bagger | ロードグライド | class:disp:1000cc | body:bagger | pt:ice | current | 1998–present | Milwaukee-Eight 117，鲨鱼鼻固定式整流罩，双LED大灯，高速稳定 |
| model:harley-davidson:road-king | Road King | Road King 路王 袋式旅行车 | Road King 路王 袋式旅行車 | ロードキング | class:disp:1000cc | body:bagger | pt:ice | current | 1994–present | Milwaukee-Eight 114，经典大灯双灯设计，硬边箱，无大整流罩Bagger |
| model:harley-davidson:softail | FXST Softail | FXST Softail 软尾 巡航车（停产） | FXST Softail 軟尾 巡航車（停產） | FXST ソフテイル | class:disp:1000cc | body:cruiser | pt:ice | discontinued | 1984–2006 | 1984年首款软尾车型，隐藏式后减震营造硬尾经典外观，现代软尾家族鼻祖 |
| model:harley-davidson:sport-glide | Sport Glide | Sport Glide 运动滑翔 巡航车 | Sport Glide 運動滑翔 巡航車 | スポーツグライド | class:disp:1000cc | body:bagger | pt:ice | current | 2018–present | Milwaukee-Eight 107，可拆风挡与边箱，运动与旅行兼顾的软尾车型 |
| model:harley-davidson:sportster-nightster | Sportster Nightster | Sportster Nightster 夜行者 巡航车 | Sportster Nightster 夜行者 巡航車 | スポーツスター ナイトスター | class:disp:750cc | body:cruiser | pt:ice | current | 2022–present | Revolution Max 975T发动机，入门级运动者，经典复古外观 |
| model:harley-davidson:sportster-s | Sportster S | Sportster S 运动者S 巡航车 | Sportster S 運動者S 巡航車 | スポーツスターS | class:disp:1000cc | body:cruiser | pt:ice | current | 2021–present | Revolution Max 1250T V缸发动机，新一代运动者系列，高性能巡航 |
| model:harley-davidson:springer-softail | FXSTS Springer Softail | FXSTS Springer Softail 弹簧软尾 巡航车（停产） | FXSTS Springer Softail 彈簧軟尾 巡航車（停產） | FXSTS スプリンガーソフテイル | class:disp:1000cc | body:cruiser | pt:ice | discontinued | 1988–2006 | 软尾家族弹簧前叉版本，复古弹簧前悬挂搭配隐藏式后减震，怀旧外观极具辨识度 |
| model:harley-davidson:street-bob-114 | Street Bob 114 | Street Bob 114 街霸 软尾巡航 | Street Bob 114 街霸 軟尾巡航 | ストリートボブ114 | class:disp:1000cc | body:bobber | pt:ice | current | 2021–present | Milwaukee-Eight 114软尾车架，Bobber极简风格，单人座设计 |
| model:harley-davidson:street-glide | Street Glide | Street Glide 大道滑翔 Bagger | Street Glide 大道滑翔 Bagger | ストリートグライド | class:disp:1000cc | body:bagger | pt:ice | current | 2006–present | Milwaukee-Eight 117，蝙蝠翼整流罩，集成音响，美式Bagger代表 |
| model:harley-davidson:street-glide-3-limited | Street Glide 3 Limited | Street Glide 3 Limited 大道滑翔三轮 旅行车 | Street Glide 3 Limited 大道滑翔三輪 旅行車 | ストリートグライド3リミテッド | class:disp:1000cc | body:trike | pt:ice | current | 2026–present | 2026年全新正三轮车型，Milwaukee-Eight VVT 117发动机，独立前大灯整流罩，双人长途三轮旅行 |
| model:harley-davidson:street-glide-limited | Street Glide Limited | Street Glide Limited 大道滑翔限量 豪华旅行车 | Street Glide Limited 大道滑翔限量 豪華旅行車 | ストリートグライド・リミテッド | class:disp:1000cc | body:touring | pt:ice | current | 2026–present | 2026年全新豪华旅行车，1923cc Milwaukee-Eight VVT 117发动机，Grand Tour-Pak尾箱，接替Ultra Limited定位 |
| model:harley-davidson:super-glide | FX Super Glide | FX Super Glide 超级滑翔 巡航车（停产） | FX Super Glide 超級滑翔 巡航車（停產） | FX スーパーグライド | class:disp:1000cc | body:cruiser | pt:ice | discontinued | 1971–2012 | 1971年由威利·G·戴维森设计的首款工厂定制风格车型，开创美式定制巡航车先河 |
| model:harley-davidson:tour-glide | FLT Tour Glide | FLT Tour Glide 旅行滑翔 旅行车（停产） | FLT Tour Glide 旅行滑翔 旅行車（停產） | FLT ツアーグライド | class:disp:1000cc | body:touring | pt:ice | discontinued | 1980–1996 | 1980年推出，首款车架固定式整流罩旅行车，橡胶安装发动机与皮带传动开先河 |
| model:harley-davidson:tri-glide-ultra | Tri Glide Ultra | Tri Glide Ultra 三轮 顶级旅行车 | Tri Glide Ultra 三輪 頂級旅行車 | トライグライド ウルトラ | class:disp:1000cc | body:trike | pt:ice | current | 2009–present | Milwaukee-Eight 114，正三轮设计，全行李系统，稳定性高 |
| model:harley-davidson:v-rod | V-Rod | V-Rod 威路德 巡航车（停产） | V-Rod 威路德 巡航車（停產） | V-ロッド | class:disp:1000cc | body:cruiser | pt:ice | discontinued | 2002–2017 | 1250cc水冷V缸Revolution发动机，与保时捷联合开发，2017年停产 |
| model:harley-davidson:wide-glide | FXWG Dyna Wide Glide | FXWG Dyna Wide Glide 宽滑翔 巡航车（停产） | FXWG Dyna Wide Glide 寬滑翔 巡航車（停產） | ダイナ ワイドグライド | class:disp:1000cc | body:chopper | pt:ice | discontinued | 1993–2016 | Dyna家族宽前叉chopper风格巡航车，加长前叉配21寸前轮与前伸脚踏 |
| model:harley-davidson:wla | WLA (45) | WLA 军用45 巡航车（停产） | WLA 軍用45 巡航車（停產） | WLA（45） | class:disp:750cc | body:cruiser | pt:ice | discontinued | 1939–1945, 1949–1952 | 45立方英寸（740cc）侧阀V缸，二战美军制式军用摩托车，产量逾七万辆，战争年代传奇车型 |
| model:harley-davidson:xlcr | XLCR Cafe Racer | XLCR 咖啡赛车（停产） | XLCR 咖啡賽車（停產） | XLCR カフェレーサー | class:disp:1000cc | body:cafe-racer | pt:ice | discontinued | 1977–1978 | 哈雷首款也是唯一一款量产咖啡赛车，黑色涂装、蛇形排气，1978年停产 |
| model:harley-davidson:xr1200 | XR1200 | XR1200 运动街车（停产） | XR1200 運動街車（停產） | XR1200 | class:disp:1000cc | body:naked | pt:ice | discontinued | 2009–2013 | 1203cc气冷V缸，XR750赛车灵感，哈雷少见的运动街车，2013年停产 |
| model:harley-davidson:xr750 | XR750 | XR750 泥地赛车（停产） | XR750 泥地賽車（停產） | XR750 | class:disp:750cc | body:motocross | pt:ice | discontinued | 1970–1985 | AMA泥地赛道传奇赛车，1970年起统治美国泥地赛数十年，赢得数百场冠军 |

### 4.Hengjian (6款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:hengjian:dahaidiao-500 | Dahaidiao 500 | 大海道500 拉力车 | 大海道500 拉力車 | ダーハイダオ500 | class:disp:600cc | body:adventure | pt:ice | current | 2021–present | 恒舰大海道500拉力车，前后油箱共40升，续航达1000公里，被称为国产"本田非双" |
| model:hengjian:leopard-518 | Leopard 518 | 美洲豹518 探险车 | 美洲豹518 探險車 | レオパード518 | class:disp:600cc | body:adventure | pt:ice | current | 2022–present | 恒舰美洲豹518，518cc探险车，铬钼钢管车架，20升大油箱，整备质量仅178kg，极速170km/h |
| model:hengjian:nc250 | NC250 | NC250 越野车 | NC250 越野車 | NC250 | class:disp:250cc | body:motocross | pt:ice | current | 2018–present | 恒舰NC250越野车，搭载NC250发动机，恒舰越野产品线的主力入门车型 |
| model:hengjian:nc450 | NC450 | NC450 越野车 | NC450 越野車 | NC450 | class:disp:600cc | body:motocross | pt:ice | current | 2019–present | 恒舰NC450越野车，450cc级发动机，面向专业场地与林道越野用户 |
| model:hengjian:rally-500x | Rally 500X | 拉力500X 探险车 | 拉力500X 探險車 | ラリー500X | class:disp:600cc | body:adventure | pt:ice | current | 2020–present | 恒舰拉力500X，500cc双缸拉力车型，恒舰大排量拉力产品线的代表作 |
| model:hengjian:s5 | S5 | S5 越野车 | S5 越野車 | S5 | class:disp:250cc | body:enduro | pt:ice | current | 2019–present | 恒舰S5，可上牌的越野车型，博世电喷系统，恒舰越野系列中的公路合规之选 |

### 4.Hero (14款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:hero:destini-125 | Destini 125 | Destini 125 踏板车 | Destini 125 踏板車 | デスティニ125 | class:disp:125cc | body:scooter | pt:ice | current | 2019–present | Hero的125cc通勤踏板车，124.6cc风冷单缸，宽大坐垫与置物空间，主打家庭用户 |
| model:hero:glamour-125 | Glamour 125 | Glamour 125 通勤街车 | Glamour 125 通勤街車 | グラマー125 | class:disp:125cc | body:naked | pt:ice | current | 2008–present | Hero运动风格通勤街车，124.7cc单缸，外观时尚，印度125cc通勤市场热门车型 |
| model:hero:hf-deluxe | HF Deluxe | HF Deluxe 入门弯梁 | HF Deluxe 入門彎梁 | HF デラックス | class:disp:125cc | body:underbone | pt:ice | current | 2015–present | Hero最畅销的入门车型之一，97.2cc单缸，主打极致性价比与低油耗 |
| model:hero:hunk | Hunk | Hunk 150cc 运动通勤街车 | Hunk 150cc 運動通勤街車 | ハンク | class:disp:250cc | body:naked | pt:ice | discontinued | 2007–2020 | 150cc运动化通勤街车，149.2cc单缸，曾为Hero主力车型，2020年前后停产 |
| model:hero:karizma-xmr | Karizma XMR | Karizma XMR 仿赛 | Karizma XMR 仿賽 | カリスマ XMR | class:disp:250cc | body:sport | pt:ice | current | 2023–present | Hero重返跑车市场的力作，210cc单缸油冷，全整流罩，配备TFT仪表与快速换挡 |
| model:hero:maestro-edge-125 | Maestro Edge 125 | Maestro Edge 125 运动踏板 | Maestro Edge 125 運動踏板 | マエストロ エッジ125 | class:disp:125cc | body:scooter | pt:ice | current | 2019–present | Hero中高端运动风格踏板车，124.6cc单缸风冷，配组合式制动系统 |
| model:hero:maverick-440 | Maverick 440 | Maverick 440 街车 | Maverick 440 街車 | マーベリック440 | class:disp:400cc | body:naked | pt:ice | current | 2023–present | Hero与Harley-Davidson合作开发的大排量街车，440cc单缸风冷，主打中排量市场 |
| model:hero:passion-pro | Passion Pro | Passion Pro 通勤弯梁 | Passion Pro 通勤彎梁 | パッション プロ | class:disp:125cc | body:underbone | pt:ice | current | 2007–present | 经典Passion车系的运动版，110cc风冷单缸，印度家庭入门摩托车的首选之一 |
| model:hero:pleasure-plus | Pleasure Plus | Pleasure Plus 女性踏板 | Pleasure Plus 女性踏板 | プレジャー プラス | class:disp:125cc | body:scooter | pt:ice | current | 2018–present | 面向女性用户的入门踏板车，110cc单缸，轻巧易操控，印度女性通勤市场热门 |
| model:hero:splendor-ismart | Splendor iSmart | Splendor iSmart 智能启停弯梁 | Splendor iSmart 智能啟停彎梁 | スプレンダー アイスマート | class:disp:125cc | body:underbone | pt:ice | current | 2017–present | Splendor家族升级款，搭载110cc i3s智能启停发动机，印度首批配备自动启停系统的弯梁车 |
| model:hero:splendor-plus | Splendor Plus | Splendor Plus 通勤弯梁 | Splendor Plus 通勤彎梁 | スプレンダー プラス | class:disp:125cc | body:underbone | pt:ice | current | 2001–present | 印度销量最高的入门通勤弯梁摩托车，搭载97.2cc风冷单缸，以省油耐用著称 |
| model:hero:super-splendor | Super Splendor | Super Splendor 通勤弯梁 | Super Splendor 通勤彎梁 | スーパー スプレンダー | class:disp:125cc | body:underbone | pt:ice | current | 2007–present | Splendor家族的125cc升级款，124.7cc风冷单缸，动力与油耗平衡，印度通勤市场主力 |
| model:hero:xpulse-200 | Xpulse 200 | Xpulse 200 探险两用车 | Xpulse 200 探險兩用車 | エクスパルス200 | class:disp:250cc | body:dual-sport | pt:ice | current | 2019–present | Hero首款探险两用摩托车，199.6cc单缸油冷，21/18寸辐条轮，印度入门ADV首选 |
| model:hero:xtreme-160r | Xtreme 160R | Xtreme 160R 运动街车 | Xtreme 160R 運動街車 | エクストリーム160R | class:disp:250cc | body:naked | pt:ice | current | 2020–present | Hero入门运动街车，163cc单缸风冷，激进外观配轻量化车架，主打年轻市场 |

### 4.Honda (125款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:honda:africa-twin-crf1100l | CRF1100L Africa Twin | CRF1100L 非洲双缸 探险车 | CRF1100L 非洲雙缸 探險車 | CRF1100L アフリカツイン | class:disp:1000cc | body:adventure | pt:ice | current | 2020–present | 硬派ADV代表，1100cc并列双缸，DCT双离合可选，达喀尔血统 |
| model:honda:cb-1 | CB-1 | CB-1 四缸街车 | CB-1 四缸街車 | CB-1 | class:disp:400cc | body:naked | pt:ice | discontinued | 1989–1990 | 399cc水冷四缸轻量街车，CBR400RR同源发动机，操控灵活的运动街车先驱 |
| model:honda:cb1000-hornet-2025 | CB1000 Hornet / SP | CB1000 Hornet 大黄蜂 新世代公升级街车（2025款） | CB1000 Hornet 大黃蜂 新世代公升級街車（2025款） | CB1000 ホーネット | class:disp:1000cc | body:naked | pt:ice | current | 2025–present | 本田2025年全新换代大黄蜂，999cc直列四缸（源自CBR1000RR-R），取代CB1000R，SP版配Ohlins电子悬挂 |
| model:honda:cb1000f-2026 | CB1000F / CB1000F SE | CB1000F 复古街车（2026款） | CB1000F 復古街車（2026款） | CB1000F | class:disp:1000cc | body:naked | pt:ice | current | 2026–present | 本田2026年全新复古街车，999cc直列四缸，致敬1970年代CB750F经典风格，日本本土工厂编号SC94 |
| model:honda:cb1000gt-2026 | CB1000GT | CB1000GT 运动旅行车（2026款） | CB1000GT 運動旅行車（2026款） | CB1000GT | class:disp:1000cc | body:sport-touring | pt:ice | current | 2026–present | 本田2026年全新运动旅行旗舰，999cc直列四缸，基于CB1000 Hornet平台，大型整流罩+原厂三箱 |
| model:honda:cb1000r-hornet | CB1000R | CB1000R 大黄蜂 公升级街车 | CB1000R 大黃蜂 公升級街車 | CB1000R ホーネット | class:disp:1000cc | body:naked | pt:ice | current | 2021–present | 大黄蜂品牌复活，搭载CBR1000RR同款发动机，公升级四缸街车 |
| model:honda:cb1100 | CB1100 | CB1100 气冷四缸复古街车（停产） | CB1100 氣冷四缸復古街車（停產） | CB1100 | class:disp:1000cc | body:naked | pt:ice | discontinued | 2010–2022 | 气冷并列四缸，致敬经典CB750 Four，复古街车代表 |
| model:honda:cb125-twin | CB125 Twin | CB125 Twin 双缸街车 | CB125 Twin 雙缸街車 | CB125ツイン | class:disp:125cc | body:naked | pt:ice | discontinued | 1970–1980 | 124cc风冷双缸入门街车，小排量双缸经典，CB家族的小排量双缸代表 |
| model:honda:cb125s | CB125S | CB125S 单缸街车 | CB125S 單缸街車 | CB125S | class:disp:125cc | body:naked | pt:ice | discontinued | 1971–1985 | 122cc风冷单缸入门街车，全球普及车型，东南亚拉美市场常青树 |
| model:honda:cb1300sf | CB1300 Super Four | CB1300 Super Four 公升级街车 | CB1300 Super Four 公升級街車 | CB1300 スーパーフォア | class:disp:1000cc | body:naked | pt:ice | discontinued | 1998–2020 | 1284cc气冷四缸公升级街车，CB家族旗舰，日本本土大型二轮市场经典常青树 |
| model:honda:cb200 | CB200 | CB200 双缸街车 | CB200 雙缸街車 | CB200 | class:disp:250cc | body:naked | pt:ice | discontinued | 1974–1978 | 198cc风冷双缸入门街车，碟刹前轮+电启动，1970年代入门级运动车代表 |
| model:honda:cb300r | CB300R | CB300R 入门街车 | CB300R 入門街車 | CB300R | class:disp:400cc | body:naked | pt:ice | current | 2018–present | Neo Sports Café风格入门街车，286cc单缸，整备质量仅143kg，轻量化典范 |
| model:honda:cb350 | CB350 | CB350 双缸街车 | CB350 雙缸街車 | CB350 | class:disp:400cc | body:naked | pt:ice | discontinued | 1968–1973 | 325cc风冷双缸街车，北美市场爆款，咖啡馆改装圈经典底子 |
| model:honda:cb360 | CB360 | CB360 双缸街车 | CB360 雙缸街車 | CB360 | class:disp:400cc | body:naked | pt:ice | discontinued | 1974–1976 | 356cc风冷双缸街车，CB350的扩缸后继，六速变速箱+电启动，UJM风格代表 |
| model:honda:cb400f | CB400F | CB400F 四缸咖啡馆赛车 | CB400F 四缸咖啡館賽車 | CB400フォア | class:disp:400cc | body:cafe-racer | pt:ice | discontinued | 1975–1977 | 408cc四缸+六速变速箱+四合一排气，咖啡馆赛车风格先驱，小排量四缸经典 |
| model:honda:cb400sf | CB400 Super Four | CB400 Super Four 街车 | CB400 Super Four 街車 | CB400 スーパーフォア | class:disp:400cc | body:naked | pt:ice | current | 1992–present | 本田经典400cc四缸街车，日本本土市场长青车型，以VTEC可变气门技术著称 |
| model:honda:cb400ss | CB400SS | CB400SS 单缸复古街车 | CB400SS 單缸復古街車 | CB400SS | class:disp:400cc | body:naked | pt:ice | discontinued | 2000–2008 | 397cc风冷单缸复古街车，简约设计+电启动，日本驾校常备车型，单缸爱好者经典之选 |
| model:honda:cb450 | CB450 | CB450 黑色轰炸机 双缸街车 | CB450 黑色轟炸機 雙缸街車 | CB450ブラックボンバー | class:disp:400cc | body:naked | pt:ice | discontinued | 1965–1974 | 世界首款DOHC双缸摩托车，绰号黑色轰炸机，1960年代日系性能代表 |
| model:honda:cb500-four | CB500 Four | CB500 Four 四缸街车 | CB500 Four 四缸街車 | CB500フォア | class:disp:600cc | body:naked | pt:ice | discontinued | 1971–1978 | 498cc四缸街车，CB750 Four的小排量普及版，1970年代四缸浪潮成员 |
| model:honda:cb500-super-four | CB500 SUPER FOUR | CB500 SUPER FOUR 四缸街车 | CB500 SUPER FOUR 四缸街車 | CB500 SUPER FOUR | class:disp:600cc | body:naked | pt:ice | current | 2025–present | 2025中国摩博会全球首发，2026年在中国上市；搭载502cc直列四缸发动机及Honda E-Clutch电控离合。 |
| model:honda:cb500f | CB500F | CB500F 中量级街车 | CB500F 中量級街車 | CB500F | class:disp:600cc | body:naked | pt:ice | current | 2013–present | 471cc并列双缸中量级街车，500平台销量主力，亲民好骑适合新手进阶 |
| model:honda:cb500x | CB500X | CB500X 探险车 | CB500X 探險車 | CB500X | class:disp:600cc | body:adventure | pt:ice | current | 2013–present | CB500同平台ADV，长行程悬挂，2024年升级为NX500，入门探险性价比之选 |
| model:honda:cb550-four | CB550 Four | CB550 Four 四缸街车 | CB550 Four 四缸街車 | CB550フォア | class:disp:600cc | body:naked | pt:ice | discontinued | 1974–1977 | 544cc四缸街车，CB500 Four的扩缸后继，1970年代UJM风格代表 |
| model:honda:cb650r | CB650R | CB650R 中量级街车 | CB650R 中量級街車 | CB650R | class:disp:600cc | body:naked | pt:ice | current | 2019–present | Neo Sports Café设计语言，650cc并列四缸，中量级主流街车 |
| model:honda:cb72 | CB72 Super Sport | CB72 Super Sport 双缸街车 | CB72 Super Sport 雙缸街車 | ドリームCB72スーパースポーツ | class:disp:250cc | body:naked | pt:ice | discontinued | 1960–1966 | 250cc双缸运动车，CB77 Super Hawk的小弟，1960年代北美入门运动标杆 |
| model:honda:cb750-four | CB750 Four | CB750 Four 革命性四缸街车（停产） | CB750 Four 革命性四缸街車（停產） | CB750フォア | class:disp:750cc | body:naked | pt:ice | discontinued | 1969–1978 | 史上首款量产直列四缸摩托车，1969年问世改写摩托史，CB车系鼻祖 |
| model:honda:cb750-hornet | CB750 Hornet | CB750 Hornet 大黄蜂 街车 | CB750 Hornet 大黃蜂 街車 | CB750 ホーネット | class:disp:750cc | body:naked | pt:ice | current | 2023–present | 大黄蜂名号复活，755cc并列双缸270度曲轴，中量级运动街车新标杆 |
| model:honda:cb750f-super-sport | CB750F Super Sport | CB750F Super Sport 运动街车 | CB750F Super Sport 運動街車 | CB750F スーパースポーツ | class:disp:750cc | body:naked | pt:ice | discontinued | 1975–1978 | CB750 Four的运动版本，四合一排气+前碟刹+后碟刹，Super Sport之名始于于此 |
| model:honda:cb77-super-hawk | CB77 Super Hawk | CB77 Super Hawk 双缸街车（停产） | CB77 Super Hawk 雙缸街車（停產） | CB77 スーパーホーク | class:disp:400cc | body:naked | pt:ice | discontinued | 1961–1967 | 305cc双缸运动车，1960年代北美最速公路车之一，本田全球传奇开端 |
| model:honda:cb900c | CB900C | CB900C 轴传动街车 | CB900C 軸傳動街車 | CB900C | class:disp:750cc | body:naked | pt:ice | discontinued | 1980–1984 | DOHC 902cc四缸+轴传动，CB900F的Custom版本，舒适骑姿+大型油箱 |
| model:honda:cb900f | CB900F | CB900F 运动街车（停产） | CB900F 運動街車（停產） | CB900F | class:disp:750cc | body:naked | pt:ice | discontinued | 1979–1984 | DOHC直列四缸运动街车先驱，Bol d'Or之名传世，为CB1100F铺路 |
| model:honda:cb92-benly-super-sport | CB92 Benly Super Sport | CB92 Benly Super Sport 双缸运动车 | CB92 Benly Super Sport 雙缸運動車 | ベンリーCB92スーパースポーツ | class:disp:125cc | body:naked | pt:ice | discontinued | 1959–1961 | 首款冠以CB之名的小排量双缸运动车，曼岛TT等赛事常用基础车 |
| model:honda:cbr1000f | CBR1000F | CBR1000F 公升级运动旅行 | CBR1000F 公升級運動旅行 | CBR1000F | class:disp:1000cc | body:sport-touring | pt:ice | discontinued | 1987–1999 | 998cc四缸运动旅行车，CBR家族的早期旗舰，Hurricane之名在美市场传世 |
| model:honda:cbr1000rr-r-fireblade-sp | CBR1000RR-R Fireblade SP | CBR1000RR-R 火刃SP 旗舰仿赛 | CBR1000RR-R 火刃SP 旗艦仿賽 | CBR1000RR-R ファイヤーブレードSP | class:disp:1000cc | body:sport | pt:ice | current | 2020–present | 旗舰公升仿赛，搭载RC213V-S赛用技术，Ohlins悬挂+Brembo卡钳 |
| model:honda:cbr1100xx | CBR1100XX Super Blackbird | CBR1100XX 超级黑鸟 | CBR1100XX 超級黑鳥 | CBR1100XX スーパーブラックバード | class:disp:1000cc | body:sport-touring | pt:ice | discontinued | 1996–2007 | 1137cc四缸超高速运动旅行车，1996-1999年世界最快量产车（时速287km/h），黑鸟传奇 |
| model:honda:cbr250rr | CBR250RR | CBR250RR 双缸仿赛 | CBR250RR 雙缸仿賽 | CBR250RR | class:disp:250cc | body:sport | pt:ice | current | 2016–present | 250cc并列双缸仿赛，日本/东南亚市场专属，高转速性能取向 |
| model:honda:cbr400rr | CBR400RR | CBR400RR 仿赛（已停产） | CBR400RR 仿賽（已停產） | CBR400RR | class:disp:400cc | body:sport | pt:ice | discontinued | 1986–1994 | Fireblade小弟，经典四缸400cc仿赛，日本泡沫经济时期名车 |
| model:honda:cbr500r | CBR500R | CBR500R 跑车 | CBR500R 跑車 | CBR500R | class:disp:600cc | body:sport | pt:ice | current | 2013–present | CBR家族入门仿赛，471cc双缸，骑姿舒适兼顾日常，新手跑车首选 |
| model:honda:cbr500r-four | CBR500R FOUR | CBR500R FOUR 四缸仿赛 | CBR500R FOUR 四缸仿賽 | CBR500R FOUR | class:disp:600cc | body:sport | pt:ice | current | 2025–present | 2025中国摩博会与CB500 SUPER FOUR同步全球首发，2026年在中国上市；采用502cc直列四缸发动机与全整流罩设计。 |
| model:honda:cbr600f | CBR600F | CBR600F 中量级仿赛 | CBR600F 中量級仿賽 | CBR600F | class:disp:600cc | body:sport | pt:ice | discontinued | 1987–2006 | 600cc四缸仿赛常青树，美版称Hurricane，F系列历经四代成为中量级标杆 |
| model:honda:cbr600rr | CBR600RR | CBR600RR 中量级仿赛 | CBR600RR 中量級仿賽 | CBR600RR | class:disp:600cc | body:sport | pt:ice | current | 2003–present | 中量级四缸仿赛标杆，WorldSSP赛事常胜军，赛道取向强烈 |
| model:honda:cbr650r | CBR650R | CBR650R 跑车 | CBR650R 跑車 | CBR650R | class:disp:600cc | body:sport | pt:ice | current | 2019–present | CB650R同平台跑车版，全整流罩，兼顾日常与赛道性能 |
| model:honda:cbr900rr-fireblade | CBR900RR Fireblade | CBR900RR 火刃 超级运动车（停产） | CBR900RR 火刃 超級運動車（停產） | CBR900RR ファイヤーブレード | class:disp:750cc | body:sport | pt:ice | discontinued | 1992–1999 | 1992年横空出世，893cc挑战公升级，超级运动车轻量化革命，火刃传奇开端 |
| model:honda:cbx1000 | CBX1000 | CBX1000 六缸街车（停产） | CBX1000 六缸街車（停產） | CBX1000 | class:disp:1000cc | body:naked | pt:ice | discontinued | 1978–1982 | 1047cc风冷直列六缸，本田技术巅峰之作，六缸声浪迷倒无数车迷 |
| model:honda:cl500 | CL500 | CL500 攀爬者 | CL500 攀爬者 | CL500 | class:disp:600cc | body:scrambler | pt:ice | current | 2023–present | 复古攀爬风格，高排气+钢丝辐条轮，基于500平台，致敬1970年代CL系列 |
| model:honda:cl72-scrambler | CL72 Scrambler | CL72 Scrambler 攀爬者 | CL72 Scrambler 攀爬者 | ドリームCL72スクランブラー | class:disp:250cc | body:scrambler | pt:ice | discontinued | 1962–1967 | 首款量产的CL系列攀爬车，247cc双缸高排气管设计，1960年代越野风格鼻祖 |
| model:honda:cr125 | CR125 | CR125 二冲程场地越野 | CR125 二衝程場地越野 | CR125 | class:disp:125cc | body:motocross | pt:ice | discontinued | 1974–2007 | 经典二冲程125cc场地越野车，CR系列中坚力量，MX2组别常青树，2007年停产 |
| model:honda:cr250 | CR250 | CR250 二冲程场地越野 | CR250 二衝程場地越野 | CR250 | class:disp:250cc | body:motocross | pt:ice | discontinued | 1973–2007 | 传奇250cc二冲程场地越野车，从CR250M Elsinore演化而来，MX组别常胜军 |
| model:honda:cr250m-elsinore | CR250M Elsinore | CR250M Elsinore 场地越野 | CR250M Elsinore 場地越野 | CR250Mエルシノア | class:disp:250cc | body:motocross | pt:ice | discontinued | 1973–1976 | 本田首款二冲程量产越野赛车，Elsinore之名源于加州赛事，开创CR系列 |
| model:honda:cr500 | CR500 | CR500 二冲程大单缸 | CR500 二衝程大單缸 | CR500 | class:disp:600cc | body:motocross | pt:ice | discontinued | 1984–2001 | 491cc二冲程大单缸越野传奇，史上最暴力的MX赛车之一，动力狂野著称 |
| model:honda:crf110f | CRF110F | CRF110F 迷你越野 | CRF110F 迷你越野 | CRF110F | class:disp:125cc | body:mini | pt:ice | current | 2013–present | 110cc气冷单缸迷你越野车，四速自动离合，儿童练车神器 |
| model:honda:crf150f | CRF150F | CRF150F 林道车 | CRF150F 林道車 | CRF150F | class:disp:250cc | body:enduro | pt:ice | current | 2003–present | 149cc气冷单缸入门林道车，低座高+电启动，青少年越野入门首选 |
| model:honda:crf250l-crf300l | CRF250L / CRF300L | CRF250L/300L 林道两用车 | CRF250L/300L 林道兩用車 | CRF250L/CRF300L | class:disp:250cc | body:dual-sport | pt:ice | current | 2012–present | 入门林道两用车，2021年升级为300cc，通勤越野两不误 |
| model:honda:crf250r | CRF250R | CRF250R 场地越野 | CRF250R 場地越野 | CRF250R | class:disp:250cc | body:motocross | pt:ice | current | 2004–present | 250cc水冷单缸四冲程场地越野赛车，MX2组别标杆，铝合金车架 |
| model:honda:crf250rx | CRF250RX | CRF250RX 闭场越野 | CRF250RX 閉場越野 | CRF250RX | class:disp:250cc | body:enduro | pt:ice | current | 2017–present | CRF250R闭场越野赛版，18英寸后轮+电启动，耐力赛事利器 |
| model:honda:crf300-rally | CRF300 Rally | CRF300 Rally 拉力版 | CRF300 Rally 拉力版 | CRF300ラリー | class:disp:250cc | body:dual-sport | pt:ice | current | 2021–present | CRF300L拉力版，加大风挡与油箱，达喀尔风格探险两用车 |
| model:honda:crf450r | CRF450R | CRF450R 场地越野 | CRF450R 場地越野 | CRF450R | class:disp:600cc | body:motocross | pt:ice | current | 2002–present | 本田旗舰场地越野车，450cc水冷单缸四冲程，MX组别主力战车 |
| model:honda:crf450rx | CRF450RX | CRF450RX 闭场越野 | CRF450RX 閉場越野 | CRF450RX | class:disp:600cc | body:enduro | pt:ice | current | 2017–present | CRF450R越野赛版，18英寸后轮+加大油箱，GNCC等闭场越野赛事专用 |
| model:honda:crf50f | CRF50F | CRF50F 迷你越野 | CRF50F 迷你越野 | CRF50F | class:disp:50cc | body:mini | pt:ice | current | 2004–present | 49cc迷你越野车，CRF家族最小成员，儿童启蒙越野经典 |
| model:honda:ct90-trail | CT90 Trail | CT90 Trail 林道弯梁车 | CT90 Trail 林道彎梁車 | CT90トレール | class:disp:125cc | body:dual-sport | pt:ice | discontinued | 1966–1979 | 89cc林道两用弯梁车，双速副变速箱+半自动离合，猎人户外经典用车 |
| model:honda:cub-c70-c90 | Super Cub C70 / C90 | 超级幼兽 C70/C90 弯梁 | 超級幼獸 C70/C90 彎梁 | スーパーカブC70/C90 | class:disp:125cc | body:underbone | pt:ice | discontinued | 1967–2000 | Super Cub家族中排量成员，72cc/86cc单缸弯梁，全球通勤代步神器，皮实耐用 |
| model:honda:cx500 | CX500 | CX500 V缸街车（停产） | CX500 V缸街車（停產） | CX500 | class:disp:600cc | body:naked | pt:ice | discontinued | 1978–1983 | 500cc水冷V型双缸纵置+轴传动，造型独特，另有涡轮增压版本 |
| model:honda:cx500-custom | CX500 Custom | CX500 Custom 定制巡航 | CX500 Custom 定制巡航 | CX500カスタム | class:disp:600cc | body:cruiser | pt:ice | discontinued | 1979–1984 | CX500平台的巡航定制版，轴传动+水冷V缸，独特造型成为Cafe Racer改装热门底子 |
| model:honda:cx500-turbo | CX500 Turbo | CX500 Turbo 涡轮增压V缸 | CX500 Turbo 渦輪增壓V缸 | CX500ターボ | class:disp:600cc | body:naked | pt:ice | discontinued | 1982–1983 | 本田首款量产涡轮增压摩托车，也是首款搭载电喷系统的本田机车 |
| model:honda:cx650-turbo | CX650 Turbo | CX650 Turbo 涡轮增压V缸 | CX650 Turbo 渦輪增壓V缸 | CX650ターボ | class:disp:750cc | body:naked | pt:ice | discontinued | 1983–1984 | CX500 Turbo的扩缸升级版，673cc水冷V型双缸涡轮增压，80年代涡轮热潮终章 |
| model:honda:dax-st50 | Dax ST50 | Dax ST50 长颈鹿迷你车 | Dax ST50 長頸鹿迷你車 | ダックスST50 | class:disp:50cc | body:mini | pt:ice | discontinued | 1969–1999 | T形车架迷你车，人称长颈鹿/腊肠狗，与Monkey齐名的本田趣味小车 |
| model:honda:dio | Dio | Dio 踏板车 | Dio 踏板車 | ディオ | class:disp:50cc | body:scooter | pt:ice | discontinued | 1988–2004 | 49cc二冲程小型踏板车，1988年问世，Dio SR/ZX等运动版本风靡日本与东南亚 |
| model:honda:dream-cb350-four | Dream CB350 Four | Dream CB350 Four 四缸街车 | Dream CB350 Four 四缸街車 | ドリームCB350フォア | class:disp:400cc | body:naked | pt:ice | discontinued | 1972–1973 | 传奇350cc四缸车型，CB750 Four的小排量兄弟，首款350cc四缸量产车，稀有名作 |
| model:honda:dream-d | Dream D-Type | Dream D型 本田首款量产摩托车 | Dream D型 本田首款量產摩托車 | ドリームD型 | class:disp:125cc | body:naked | pt:ice | discontinued | 1949–1951 | 本田第一款完整量产摩托车，98cc二冲程单缸，Dream梦之名的起源 |
| model:honda:forza-750 | Forza 750 | Forza 750 旗舰大踏板（2025/2026款） | Forza 750 旗艦大踏板（2025/2026款） | フォルツァ750 | class:disp:750cc | body:maxi-scooter | pt:ice | current | 2021–present | 本田旗舰级大踏板，745cc双缸+DCT双离合，与X-ADV同平台，2025款强化科技配置，2026款更新配色 |
| model:honda:forza-nss350 | Forza 350 / NSS350 | 佛沙 Forza 350 大踏板 | 佛沙 Forza 350 大踏板 | フォルツァ NSS350 | class:disp:250cc | body:maxi-scooter | pt:ice | current | 2021–present | 中高端大踏板，电动风挡，大容量储物箱，兼顾通勤与长途 |
| model:honda:ftr223 | FTR223 | FTR223 单缸复古街车 | FTR223 單缸復古街車 | FTR223 | class:disp:250cc | body:naked | pt:ice | discontinued | 2000–2008 | 223cc风冷单缸复古街车，FTR250的后继车型，Flat Track风格设计，日本本土人气单缸 |
| model:honda:gb350 | GB350 | GB350 复古单缸街车 | GB350 復古單缸街車 | GB350 | class:disp:400cc | body:naked | pt:ice | current | 2021–present | 348cc风冷单缸复古车，致敬1960年代GB系列，日本印度市场热销 |
| model:honda:gl1000-gold-wing | GL1000 Gold Wing | GL1000 金翼 旅行车 | GL1000 金翼 旅行車 | ゴールドウイング GL1000 | class:disp:1000cc | body:touring | pt:ice | discontinued | 1975–1979 | 999cc水平对置四缸，第一代金翼，轴传动+水冷，开创豪华旅行车品类 |
| model:honda:gl1100-gold-wing | GL1100 Gold Wing | GL1100 金翼 旅行车（停产） | GL1100 金翼 旅行車（停產） | ゴールドウイング GL1100 | class:disp:1000cc | body:touring | pt:ice | discontinued | 1980–1983 | 第一代金翼旗舰，1085cc水平对置四缸+轴传动，长途旅行车开创者 |
| model:honda:gl1200-gold-wing | GL1200 Gold Wing | GL1200 金翼 旅行车 | GL1200 金翼 旅行車 | ゴールドウイング GL1200 | class:disp:1000cc | body:touring | pt:ice | discontinued | 1984–1987 | 1182cc水平对置四缸，第三代金翼，首次引入燃油喷射+全液晶仪表，豪华旅行车再进化 |
| model:honda:gl1500-gold-wing | GL1500 Gold Wing | GL1500 金翼 旅行车 | GL1500 金翼 旅行車 | ゴールドウイング GL1500 | class:disp:1000cc | body:touring | pt:ice | discontinued | 1988–2000 | 1520cc水平对置六缸，金翼首款六缸车型，豪华舒适度登峰造极，12年长生命周期 |
| model:honda:gl500-silverwing | GL500 Silverwing | GL500 Silverwing 银翼 旅行车 | GL500 Silverwing 銀翼 旅行車 | GL500シルバーウイング | class:disp:600cc | body:touring | pt:ice | discontinued | 1981–1982 | CX500平台旅行版，轴传动+Pro-Link悬挂，金翼的小兄弟 |
| model:honda:goldwing-gl1800 | Gold Wing / GL1800 | 金翼 GL1800 顶级旅行巡航 | 金翼 GL1800 頂級旅行巡航 | ゴールドウイング GL1800 | class:disp:1000cc | body:touring | pt:ice | current | 2001–present | 1800cc水平对置六缸，旗舰旅行车标配气囊、DCT变速箱、CarPlay |
| model:honda:grom-msx125 | Grom / MSX125 | Grom 迷你街车 | Grom 迷你街車 | グロム MSX125 | class:disp:125cc | body:mini | pt:ice | current | 2013–present | 125cc迷你街车，12寸小轮，改装文化风靡全球 |
| model:honda:hawk-gt-nt650 | Hawk GT / NT650 | Hawk GT NT650 街车（停产） | Hawk GT NT650 街車（停產） | ホークGT (NT650) | class:disp:750cc | body:naked | pt:ice | discontinued | 1988–1991 | 647cc V型双缸+钢管车架，轻量化操控标杆，近代运动街车鼻祖 |
| model:honda:helix-cn250 | Helix / CN250 | Helix CN250 大踏板 | Helix CN250 大踏板 | ヘリックス CN250 | class:disp:250cc | body:maxi-scooter | pt:ice | discontinued | 1986–2007 | 造型前卫的250cc大踏板，长轴距+大储物箱+电动风挡，80年代设计至今仍个性十足 |
| model:honda:metropolitan | Metropolitan | Metropolitan 复古踏板 | Metropolitan 復古踏板 | メトロポリタン | class:disp:50cc | body:scooter | pt:ice | discontinued | 2002–2009 | 49cc复古风格踏板车，圆润造型+欧式设计，北美城市通勤时尚代表 |
| model:honda:monkey-125 | Monkey 125 | 猴子 Monkey 125 迷你车 | 猴子 Monkey 125 迷你車 | モンキー125 | class:disp:125cc | body:mini | pt:ice | current | 2018–present | 经典迷你车系列复活，复古外观，玩乐属性强 |
| model:honda:nc750x | NC750X | NC750X 跨界探险车 | NC750X 跨界探險車 | NC750X | class:disp:750cc | body:adventure | pt:ice | current | 2014–present | 实用主义跨界车，油箱位置可储物，DCT双离合，油耗极低 |
| model:honda:nr750 | NR750 | NR750 椭圆活塞仿赛（停产） | NR750 橢圓活塞仿賽（停產） | NR750 | class:disp:750cc | body:sport | pt:ice | discontinued | 1992–1993 | 史上首款椭圆活塞量产车，售价曾超10万美元，本田尖端技术结晶 |
| model:honda:ns250r | NS250R | NS250R 二冲程仿赛 | NS250R 二衝程仿賽 | NS250R | class:disp:250cc | body:sport | pt:ice | discontinued | 1984–1987 | 本田二冲程V型双缸250cc仿赛，GP赛车NSR的量产前身，F2组别常胜车型 |
| model:honda:ns400r | NS400R | NS400R V型三缸二冲程仿赛 | NS400R V型三缸二衝程仿賽 | NS400R | class:disp:400cc | body:sport | pt:ice | discontinued | 1985–1987 | 387cc V型三缸二冲程仿赛，NS500 GP赛车的量产复刻版，全球仅存少数V3量产摩托车 |
| model:honda:nsr250r | NSR250R | NSR250R 二冲程仿赛（停产） | NSR250R 二衝程仿賽（停產） | NSR250R | class:disp:250cc | body:sport | pt:ice | discontinued | 1987–1999 | 249cc V型双缸二冲程GP复刻仿赛，后期版铝合金车架，两冲程时代的传奇名车 |
| model:honda:nt1100 | NT1100 | NT1100 运动旅行车 | NT1100 運動旅行車 | NT1100 | class:disp:1000cc | body:sport-touring | pt:ice | current | 2022–present | Africa Twin同平台旅行车，1084cc双缸，大整流罩+边箱，可选DCT双离合 |
| model:honda:nt650-deauville | NT650 Deauville | NT650 Deauville 运动旅行 | NT650 Deauville 運動旅行 | NT650 ドービル | class:disp:750cc | body:sport-touring | pt:ice | discontinued | 1998–2005 | 647cc V型双缸运动旅行车，全整流罩+轴传动，欧洲市场热销的实用型旅行车 |
| model:honda:nt700-deauville | NT700 Deauville | NT700 Deauville 运动旅行 | NT700 Deauville 運動旅行 | NT700 ドービル | class:disp:750cc | body:sport-touring | pt:ice | discontinued | 2006–2013 | NT650升级版，680cc V型双缸+ABS标配，轴传动+大容量边箱，实用旅行车代表 |
| model:honda:pcx | PCX 125 / 160 | PCX 踏板车 | PCX 踏板車 | PCX125/160 | class:disp:125cc | body:scooter | pt:ice | current | 2010–present | 全球畅销高端通勤踏板，eSP+发动机，ABS可选 |
| model:honda:rc51-rvt1000r | RC51 (RVT1000R) | RC51 RVT1000R V型双缸仿赛 | RC51 RVT1000R V型雙缸仿賽 | RC51 (RVT1000R) | class:disp:1000cc | body:sport | pt:ice | discontinued | 2000–2006 | 999cc 90度V型双缸仿赛，WSBK冠军复刻车型，铝合金双翼梁车架，本田V缸赛道旗舰 |
| model:honda:rebel | Rebel 250 / 500 / 1100 | 反叛者 Rebel 巡航车 | 反叛者 Rebel 巡航車 | レブル250/500/1100 | class:disp:250cc | body:cruiser | pt:ice | current | 2017–present | 入门巡航车系列，提供250/500/1100三种排量，改装潜力大 |
| model:honda:silverwing-600 | Silver Wing 600 | Silver Wing 银翼 600踏板 | Silver Wing 銀翼 600踏板 | シルバーウイング600 | class:disp:600cc | body:maxi-scooter | pt:ice | discontinued | 2001–2009 | 582cc双缸大踏板，FJS600/SW600，与雅马哈TMAX竞争的美式风格大绵羊 |
| model:honda:st1100-pan-european | ST1100 Pan European | ST1100 泛欧 运动旅行 | ST1100 泛歐 運動旅行 | ST1100パンヨーロピアン | class:disp:1000cc | body:sport-touring | pt:ice | discontinued | 1990–2002 | 1085cc V4运动旅行车，轴传动+全整流罩+边箱，欧洲高速公路巡逻经典 |
| model:honda:st1300-pan-european | ST1300 Pan European | ST1300 泛欧 运动旅行（停产） | ST1300 泛歐 運動旅行（停產） | ST1300 パンヨーロピアン | class:disp:1000cc | body:sport-touring | pt:ice | discontinued | 2002–2015 | 1261cc V4运动旅行车，轴传动+ABS，欧洲高速巡逻与长途旅行的经典用车 |
| model:honda:super-cub-c100 | Super Cub C100 | 超级幼兽 C100 初代弯梁 | 超級幼獸 C100 初代彎梁 | スーパーカブC100 | class:disp:50cc | body:underbone | pt:ice | discontinued | 1958–1967 | 1958年问世的第一代Super Cub，49cc弯梁车，半自动离合开启全球销量神话 |
| model:honda:super-cub-c125 | Super Cub C125 | 超级幼兽 C125 弯梁 | 超級幼獸 C125 彎梁 | スーパーカブ C125 | class:disp:125cc | body:underbone | pt:ice | current | 2018–present | 世界销量第一车型系列，累计超1亿台，经典弯梁设计 |
| model:honda:vf1000f | VF1000F | VF1000F V4超级运动车 | VF1000F V4超級運動車 | VF1000F | class:disp:1000cc | body:sport | pt:ice | discontinued | 1984–1986 | 998cc V4超级运动车，本田首款公升级V4仿赛，Interceptor家族旗舰，1980年代技术巅峰 |
| model:honda:vf500f | VF500F | VF500F V4仿赛 | VF500F V4仿賽 | VF500F | class:disp:600cc | body:sport | pt:ice | discontinued | 1984–1985 | 491cc V型四缸水冷仿赛，Interceptor家族小排量成员，轻量化V4入门跑车 |
| model:honda:vf700f | VF700F | VF700F V4仿赛 | VF700F V4仿賽 | VF700F | class:disp:750cc | body:sport | pt:ice | discontinued | 1984–1986 | 698cc V4仿赛，美国市场专属排量，VF系列中量级V4运动车代表 |
| model:honda:vfr400r-nc30 | VFR400R (NC30) | VFR400R NC30 V4仿赛 | VFR400R NC30 V4仿賽 | VFR400R (NC30) | class:disp:400cc | body:sport | pt:ice | discontinued | 1987–1993 | 399cc V4水冷仿赛，齿轮驱动凸轮轴+铝合金车架，日本400cc黄金年代的巅峰之作 |
| model:honda:vfr750f | VFR750F | VFR750F V4仿赛 | VFR750F V4仿賽 | VFR750F | class:disp:750cc | body:sport | pt:ice | discontinued | 1986–1997 | 748cc V4水冷仿赛，齿轮驱动凸轮轴+铝合金车架，Interceptor之名传世 |
| model:honda:vfr750r-rc30 | VFR750R RC30 | VFR750R RC30 仿赛（停产） | VFR750R RC30 仿賽（停產） | VFR750R (RC30) | class:disp:750cc | body:sport | pt:ice | discontinued | 1987–1992 | WGP冠军复刻限量版，V4发动机+铝合金车架，拍卖会常客 |
| model:honda:vfr800f | VFR800F | VFR800F V4旅行跑车（停产） | VFR800F V4旅行跑車（停產） | VFR800F | class:disp:750cc | body:sport-touring | pt:ice | discontinued | 1998–2017 | V4发动机传奇，VTEC技术应用，运动旅行经典之作 |
| model:honda:vt1100-shadow | VT1100 Shadow | VT1100 Shadow 巡航车 | VT1100 Shadow 巡航車 | VT1100 シャドウ | class:disp:1000cc | body:cruiser | pt:ice | discontinued | 1985–2007 | 1099cc V型双缸公升级巡航车，Shadow系列旗舰，轴传动水冷，与哈雷分庭抗礼的日式巡航 |
| model:honda:vt250-vtr250 | VT250 / VTR250 | VT250/VTR250 V型双缸街车 | VT250/VTR250 V型雙缸街車 | VT250/VTR250 | class:disp:250cc | body:naked | pt:ice | discontinued | 1982–2008 | 250cc V型双缸街车系列，VT250为80年代开创，VTR250持续至2000年代，轻量V缸经典 |
| model:honda:vt500-shadow | VT500 Shadow | VT500 Shadow 巡航车 | VT500 Shadow 巡航車 | VT500 シャドウ | class:disp:600cc | body:cruiser | pt:ice | discontinued | 1983–1986 | 491cc V型双缸巡航车，Shadow车系开山之作，轴传动+水冷V缸，美式巡航风格 |
| model:honda:vt600-shadow | VT600 Shadow | VT600 Shadow 巡航车 | VT600 Shadow 巡航車 | VT600 シャドウ | class:disp:750cc | body:cruiser | pt:ice | discontinued | 1988–2000 | 583cc V型双缸巡航车，Shadow系列中量级经典，轴传动+皮带传动，美式巡航入门标杆 |
| model:honda:vtr1000f-superhawk | VTR1000F SuperHawk | VTR1000F SuperHawk 超级鹰 | VTR1000F SuperHawk 超級鷹 | VTR1000F スーパーホーク | class:disp:1000cc | body:sport | pt:ice | discontinued | 1998–2005 | 996cc 90度V型双缸运动街车，轻量化+大扭矩，欧洲市场称SuperHawk，美国称FireStorm |
| model:honda:x-adv | X-ADV | X-ADV 跨界大踏板 | X-ADV 跨界大踏板 | X-ADV | class:disp:750cc | body:maxi-scooter | pt:ice | current | 2017–present | 踏板车与探险车跨界之作，745cc双缸+DCT双离合，越野风格大绵羊 |
| model:honda:xl250 | XL250 | XL250 耐力两用车 | XL250 耐力兩用車 | XL250 | class:disp:250cc | body:enduro | pt:ice | discontinued | 1972–1987 | 首款现代四冲程耐力越野车，四气门单缸鼻祖，XL车系传奇起点 |
| model:honda:xl600v-transalp | XL600V Transalp | XL600V Transalp 探险车（停产） | XL600V Transalp 探險車（停產） | トランザルプ XL600V | class:disp:600cc | body:adventure | pt:ice | discontinued | 1987–1999 | 583cc V型双缸探险车开山之作，达喀尔血统，Transalp车系初代 |
| model:honda:xl650v-transalp | XL650V Transalp | XL650V Transalp 穿越者 | XL650V Transalp 穿越者 | XL650V トランザルプ | class:disp:750cc | body:adventure | pt:ice | discontinued | 2000–2006 | 647cc V型双缸中量级探险车，Transalp系列第二代，继承达喀尔基因，公路与越野兼顾 |
| model:honda:xl750-transalp | XL750 Transalp | XL750 Transalp 穿越者 探险车 | XL750 Transalp 穿越者 探險車 | XL750 トランザルプ | class:disp:750cc | body:adventure | pt:ice | current | 2023–present | 传奇Transalp车系复兴，与CB750 Hornet同平台，达喀尔基因，硬派公路ADV |
| model:honda:xr150l | XR150L | XR150L 林道两用车 | XR150L 林道兩用車 | XR150L | class:disp:250cc | body:dual-sport | pt:ice | current | 2015–present | 149cc气冷单缸入门两用车，拉美与东南亚市场热销，通勤代步利器 |
| model:honda:xr250 | XR250 | XR250 林道耐力车 | XR250 林道耐力車 | XR250 | class:disp:250cc | body:enduro | pt:ice | discontinued | 1979–2004 | 经典四冲程250cc耐力越野车，RFVC四气门单缸，以耐用可靠著称，全球林道爱好者首选 |
| model:honda:xr400 | XR400 | XR400 林道车 | XR400 林道車 | XR400 | class:disp:400cc | body:enduro | pt:ice | discontinued | 1996–2004 | 397cc四冲程单缸林道车，XR系列中量级经典，动力充沛操控灵活，至今仍是二手市场热门 |
| model:honda:xr500r | XR500R | XR500R 耐力越野（停产） | XR500R 耐力越野（停產） | XR500R | class:disp:600cc | body:enduro | pt:ice | discontinued | 1979–1984 | 历史经典单缸耐力越野赛车，1980年代初达喀尔赛事功臣，XR车系传奇开端 |
| model:honda:xr600 | XR600 | XR600 林道耐力车 | XR600 林道耐力車 | XR600 | class:disp:600cc | body:enduro | pt:ice | discontinued | 1985–2000 | 591cc四冲程单缸耐力越野车，XR车系公升级前旗舰，达喀尔拉力赛传奇战车 |
| model:honda:xr650l | XR650L | XR650L 林道两用车 | XR650L 林道兩用車 | XR650L | class:disp:750cc | body:dual-sport | pt:ice | current | 1993–present | 644cc气冷单缸长青林道两用车，美规单缸越野老将，皮实耐用 |
| model:honda:xr650r | XR650R | XR650R 竞技耐力车 | XR650R 競技耐力車 | XR650R | class:disp:750cc | body:enduro | pt:ice | discontinued | 2000–2007 | 644cc水冷单缸竞技耐力赛车，XR系列最终进化，达喀尔冠军血统，强悍性能至今被追捧 |
| model:honda:zoomer-ruckus | Ruckus / Zoomer | Ruckus/Zoomer 迷你踏板 | Ruckus/Zoomer 迷你踏板 | ズーマー | class:disp:50cc | body:scooter | pt:ice | discontinued | 2002–2015 | 49cc裸露钢管车架迷你踏板，越野风格设计，日本称Zoomer，改装文化深厚 |

### 4.Husaberg (2款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:husaberg:fe-450 | FE 450 | FE 450 耐力越野车（停产） | FE 450 耐力越野車（停產） | FE450 | class:disp:600cc | body:enduro | pt:ice | discontinued | 2009–2014 | 449cc四冲程单缸耐力越野车，曾在世界耐力锦标赛夺得多项冠军，品牌末期主力车型 |
| model:husaberg:fe-501 | FE 501 | FE 501 耐力越野车（停产） | FE 501 耐力越野車（停產） | FE501 | class:disp:600cc | body:enduro | pt:ice | discontinued | 2009–2014 | 477cc四冲程单缸耐力越野车，KTM旗下高性能enduro，2014年并入Husqvarna品牌后停产 |

### 4.Hyosung (3款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:hyosung:aquila-250 | Aquila 250 | Aquila 250 入门巡航车（停产） | Aquila 250 入門巡航車（停產） | アクィラ250 | class:disp:250cc | body:cruiser | pt:ice | discontinued | 1991–2005 | 249cc V型双缸入门巡航车，早期与铃木技术合作产物，为Hyosung奠定巡航车口碑 |
| model:hyosung:gt650r | GT650R | GT650R 运动跑车（停产） | GT650R 運動跑車（停產） | GT650R | class:disp:750cc | body:sport | pt:ice | discontinued | 2006–2018 | 647cc V型双缸仿赛，Hyosung性能车代表，曾在Supersport赛事崭露头角 |
| model:hyosung:gv650 | GV650 | GV650 巡航车（停产） | GV650 巡航車（停產） | GV650 | class:disp:750cc | body:cruiser | pt:ice | discontinued | 2005–2021 | 647cc V型双缸巡航车，韩国品牌主力巡航车型，以高性价比著称，2021年后停止生产 |

### 4.Indian (43款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:indian:challenger | Challenger | Challenger 挑战者 水冷Bagger | Challenger 挑戰者 水冷Bagger | チャレンジャー | class:disp:1000cc | body:bagger | pt:ice | current | 2020–present | 108ci PowerPlus水冷V缸，固定式整流罩，印第安首款水冷Bagger，高性能 |
| model:indian:challenger-dark-horse-112 | Challenger Dark Horse 112 | Challenger Dark Horse 112 挑战者黑马112 水冷Bagger | Challenger Dark Horse 112 挑戰者黑馬112 水冷Bagger | チャレンジャーダークホース112 | class:disp:1000cc | body:bagger | pt:ice | current | 2026–present | 2026年重大更新，PowerPlus 112水冷V缸1834cc约126马力，暗黑涂装高性能Bagger |
| model:indian:chief | Chief | Chief 酋长 巡航车 | Chief 酋長 巡航車 | チーフ | class:disp:1000cc | body:cruiser | pt:ice | current | 2021–present | 1890cc Thunderstroke 116 V缸，2021年全新Chief系列标准版 |
| model:indian:chief-bobber | Chief Bobber | Chief Bobber 酋长Bobber 巡航车 | Chief Bobber 酋長Bobber 巡航車 | チーフボバー | class:disp:1000cc | body:bobber | pt:ice | current | 2021–present | 1890cc Thunderstroke 116，单座Bobber风格，短尾暗黑元素 |
| model:indian:chief-bobber-dark-horse | Chief Bobber Dark Horse | Chief Bobber Dark Horse 酋长Bobber黑马 巡航车 | Chief Bobber Dark Horse 酋長Bobber黑馬 巡航車 | チーフボバーダークホース | class:disp:1000cc | body:bobber | pt:ice | current | 2021–present | Chief系列Bobber化，Thunderstroke 116，单座，短尾，极简改装风格 |
| model:indian:chief-dark-horse | Chief Dark Horse | Chief Dark Horse 酋长黑马 巡航车 | Chief Dark Horse 酋長黑馬 巡航車 | チーフダークホース | class:disp:1000cc | body:cruiser | pt:ice | current | 2021–present | Thunderstroke 116 V缸，钢管车架，经典Chief复古外观，暗黑涂装 |
| model:indian:chief-dark-horse-2016 | Chief Dark Horse (2016) | Chief Dark Horse 酋长黑马 2016款 巡航车（停产） | Chief Dark Horse 酋長黑馬 2016款 巡航車（停產） | チーフダークホース（2016） | class:disp:1000cc | body:cruiser | pt:ice | discontinued | 2016–2020 | 2016年推出的哑光黑Chief，Thunderstroke 111发动机，2021年被新一代Chief系列取代 |
| model:indian:chief-gilroy | Chief (Gilroy) | Chief 酋长 吉尔罗伊 巡航车（停产） | Chief 酋長 吉爾羅伊 巡航車（停產） | チーフ（ギルロイ） | class:disp:1000cc | body:cruiser | pt:ice | discontinued | 1999–2003 | 1999年加州吉尔罗伊工厂复兴之作，S&S 88立方英寸发动机，2002年起换装100立方英寸Powerplus |
| model:indian:chief-original | Chief (Original) | Chief 酋长 初代 巡航车（停产） | Chief 酋長 初代 巡航車（停產） | チーフ（オリジナル） | class:disp:1000cc | body:cruiser | pt:ice | discontinued | 1922–1953 | 1922年推出的印第安旗舰车型，1000cc起步后扩至1200cc，1950年扩至1300cc，生产至1953年公司停业 |
| model:indian:chief-vintage-125th-anniversary | Chief Vintage 125th Anniversary Edition | Chief Vintage 酋长复古 125周年纪念版 | Chief Vintage 酋長復古 125週年紀念版 | チーフヴィンテージ125周年記念 | class:disp:1000cc | body:cruiser | pt:ice | current | 2026 | 2026年限量纪念车型，纪念印第安创立125周年（1901-2026），复古涂装配Thunderstroke 116 |
| model:indian:chieftain | Chieftain | Chieftain 酋长 袋式Bagger | Chieftain 酋長 袋式Bagger | チーフテン | class:disp:1000cc | body:bagger | pt:ice | current | 2014–present | 1890cc Thunderstroke 116，固定整流罩Bagger，Ride Command系统 |
| model:indian:chieftain-limited | Chieftain Limited | Chieftain Limited 酋长限量 袋式Bagger | Chieftain Limited 酋長限量 袋式Bagger | チーフテンリミテッド | class:disp:1000cc | body:bagger | pt:ice | current | 2014–present | Thunderstroke 116，整流罩硬边箱，印第安Bagger代表，Ride Command系统 |
| model:indian:four | Indian Four | Indian Four 四缸 巡航车（停产） | Indian Four 四缸 巡航車（停產） | インディアンフォー | class:disp:1000cc | body:cruiser | pt:ice | discontinued | 1927–1942 | 1927年收购Ace后推出的1200cc直列四缸豪华车，历经Ace、401、402演变，1942年停产 |
| model:indian:ftr-1200-s | FTR 1200 S | FTR 1200 S 运动街车 | FTR 1200 S 運動街車 | FTR1200S | class:disp:1000cc | body:naked | pt:ice | current | 2019–present | 1203cc V缸水冷，Flat Track泥地赛血统，现代街车设计，Indian首款运动车 |
| model:indian:ftr-r-carbon | FTR R Carbon | FTR R Carbon 碳纤维高端运动街车 | FTR R Carbon 碳纖維高端運動街車 | FTR R カーボン | class:disp:1000cc | body:naked | pt:ice | current | 2021–present | FTR系列旗舰，全碳纤维车身件，Ohlins悬挂，高规格运动街车 |
| model:indian:junior-scout | Junior Scout | Junior Scout 少年侦察兵 巡航车（停产） | Junior Scout 少年偵察兵 巡航車（停產） | ジュニアスカウト | class:disp:600cc | body:cruiser | pt:ice | discontinued | 1932–1942 | 1932年起生产的小排量侦察兵，500cc（30.5立方英寸），前身为Pony Scout，入门车型 |
| model:indian:military-841 | Model 841 | Model 841 军版轴驱 越野车（停产） | Model 841 軍版軸驅 越野車（停產） | モデル841 | class:disp:750cc | body:enduro | pt:ice | discontinued | 1941–1942 | 1941–1942年为沙漠作战研制的750cc轴驱动军车，参考BMW R71设计，共产约千余辆 |
| model:indian:model-101-scout | Model 101 Scout | Model 101 Scout 侦察兵101 巡航车（停产） | Model 101 Scout 偵察兵101 巡航車（停產） | モデル101 スカウト | class:disp:750cc | body:cruiser | pt:ice | discontinued | 1928–1931 | 1928年推出的第二代侦察兵，加长轴距、低座高，被公认为印第安操控最佳车型 |
| model:indian:papoose | Papoose | Papoose 帕普斯 小型踏板车（停产） | Papoose 帕普斯 小型踏板車（停產） | パプース | class:disp:125cc | body:scooter | pt:ice | discontinued | 1948–1954 | 100cc小型踏板车，源自二战伞兵摩托设计，战后由英国Brockhouse代工转为民用 |
| model:indian:powerplus | Powerplus | Powerplus 强力 巡航车（停产） | Powerplus 強力 巡航車（停產） | パワープラス | class:disp:1000cc | body:cruiser | pt:ice | discontinued | 1916–1924 | 1916年推出的61立方英寸（1000cc）侧阀V缸，性能强劲，一战后印第安主力车型 |
| model:indian:prince | Prince | Prince 王子 轻量街车（停产） | Prince 王子 輕量街車（停產） | プリンス | class:disp:400cc | body:naked | pt:ice | discontinued | 1925–1928 | 1925–1928年的入门级350cc单缸车型，面向新手与出口市场，车架后被Motoplane沿用 |
| model:indian:pursuit-dark-horse | Pursuit Dark Horse | Pursuit Dark Horse 追击黑马 顶级Bagger旅行车 | Pursuit Dark Horse 追擊黑馬 頂級Bagger旅行車 | パースーツダークホース | class:disp:1000cc | body:touring | pt:ice | current | 2022–present | Pursuit暗黑涂装版，黑铬饰面，V型水冷108ci，顶级豪华旅行 |
| model:indian:pursuit-limited | Pursuit Limited | Pursuit Limited 追击 顶级Bagger旅行车 | Pursuit Limited 追擊 頂級Bagger旅行車 | パースーツリミテッド | class:disp:1000cc | body:touring | pt:ice | current | 2022–present | Challenger平台顶级旅行，108ci Liquid Cooled V缸，全行李+顶箱，豪华装备 |
| model:indian:roadmaster | Roadmaster | Roadmaster 公路大师 顶级旅行车 | Roadmaster 公路大師 頂級旅行車 | ロードマスター | class:disp:1000cc | body:touring | pt:ice | current | 2014–present | Thunderstroke 116，全整流罩+顶箱+边箱，PowerBand音响，印第安旗舰旅行 |
| model:indian:roadmaster-dark-horse | Roadmaster Dark Horse | Roadmaster Dark Horse 公路大师黑马 顶级旅行车 | Roadmaster Dark Horse 公路大師黑馬 頂級旅行車 | ロードマスターダークホース | class:disp:1000cc | body:touring | pt:ice | current | 2020–present | 1890cc Thunderstroke 116，暗黑涂装顶级旅行车，全行李系统 |
| model:indian:scout | Scout | Scout 侦察兵 巡航车 | Scout 偵察兵 巡航車 | スカウト | class:disp:1000cc | body:cruiser | pt:ice | current | 2015–present | 1133cc V缸水冷，印第安现代经典巡航，Scout系列基础版 |
| model:indian:scout-101 | 101 Scout | 101 Scout 侦察兵101 高性能巡航车 | 101 Scout 偵察兵101 高性能巡航車 | 101スカウト | class:disp:1000cc | body:cruiser | pt:ice | current | 2025–present | 2025年全新Scout系列性能旗舰，Speed Plus 1250cc V缸，Öhlins悬挂，致敬传奇101侦察兵 |
| model:indian:scout-bobber | Scout Bobber | Scout Bobber 侦察兵Bobber 巡航车 | Scout Bobber 偵察兵Bobber 巡航車 | スカウトボバー | class:disp:1000cc | body:bobber | pt:ice | current | 2018–present | 1133cc V缸水冷，Bobber风格，单座，短挡泥板，印第安入门巡航 |
| model:indian:scout-classic | Scout Classic | Scout Classic 侦察兵经典 巡航车 | Scout Classic 偵察兵經典 巡航車 | スカウトクラシック | class:disp:1000cc | body:cruiser | pt:ice | current | 2025–present | 2025年全新一代Scout系列基础版，Speed Plus 1250cc水冷V缸110马力，全新车架与电控 |
| model:indian:scout-gilroy | Scout (Gilroy) | Scout 侦察兵 吉尔罗伊 巡航车（停产） | Scout 偵察兵 吉爾羅伊 巡航車（停產） | スカウト（ギルロイ） | class:disp:1000cc | body:cruiser | pt:ice | discontinued | 2001–2003 | 2001–2003年吉尔罗伊工厂复产的Scout，88立方英寸S&S V缸，含百年纪念等版本 |
| model:indian:scout-original | Scout (Original) | Scout 侦察兵 初代 巡航车（停产） | Scout 偵察兵 初代 巡航車（停產） | スカウト（オリジナル） | class:disp:750cc | body:cruiser | pt:ice | discontinued | 1920–1949 | 1920年推出，查尔斯·富兰克林设计，600cc侧阀V缸，1927年扩至745cc，伯德·蒙罗破纪录座驾 |
| model:indian:scout-rogue | Scout Rogue | Scout Rogue 侦察兵Rogue 巡航车 | Scout Rogue 偵察兵Rogue 巡航車 | スカウトローグ | class:disp:1000cc | body:cruiser | pt:ice | current | 2022–present | Scout改装版，迷你整流罩，黑色风格，更低手把，运动化巡航 |
| model:indian:scout-sixty | Scout Sixty | Scout Sixty 侦察兵60 入门巡航车 | Scout Sixty 偵察兵60 入門巡航車 | スカウトシクスティ | class:disp:1000cc | body:cruiser | pt:ice | current | 2016–present | 999cc V缸水冷，60立方英寸，Scout系列入门版巡航车 |
| model:indian:spirit-gilroy | Spirit | Spirit 精神 巡航车（停产） | Spirit 精神 巡航車（停產） | スピリット | class:disp:1000cc | body:cruiser | pt:ice | discontinued | 2001–2003 | 2001–2003年吉尔罗伊工厂的88立方英寸巡航车型，与Chief同平台，走亲民路线 |
| model:indian:sport-scout | Sport Scout | Sport Scout 运动侦察兵 巡航车（停产） | Sport Scout 運動偵察兵 巡航車（停產） | スポーツスカウト | class:disp:750cc | body:sport | pt:ice | discontinued | 1934–1942 | 1934年推出的运动版750cc侦察兵，轻量化车架，1937年赢下首届Daytona 200 |
| model:indian:sport-scout-2025 | Sport Scout | Sport Scout 运动侦察兵 巡航车 | Sport Scout 運動偵察兵 巡航車 | スポーツスカウト | class:disp:1000cc | body:cruiser | pt:ice | current | 2025–present | 2025年全新Scout系列运动版，Speed Plus 1250cc V缸，运动化调校与骑行三角 |
| model:indian:springfield | Springfield | Springfield 斯普林菲尔德 巡航车 | Springfield 斯普林菲爾德 巡航車 | スプリングフィールド | class:disp:1000cc | body:cruiser | pt:ice | current | 2016–present | Thunderstroke 111/116，可拆卸风挡+硬边箱，经典美式巡航，复古大灯 |
| model:indian:springfield-dark-horse | Springfield Dark Horse | Springfield Dark Horse 斯普林菲尔德黑马 巡航车（停产） | Springfield Dark Horse 斯普林菲爾德黑馬 巡航車（停產） | スプリングフィールドダークホース | class:disp:1000cc | body:cruiser | pt:ice | discontinued | 2018–2021 | 1890cc Thunderstroke 116，暗黑巡航，2021年被新Chief系列取代 |
| model:indian:super-chief-limited | Super Chief Limited | Super Chief Limited 超级酋长 旅行巡航车 | Super Chief Limited 超級酋長 旅行巡航車 | スーパーチーフリミテッド | class:disp:1000cc | body:cruiser | pt:ice | current | 2021–present | Thunderstroke 116，大风挡+皮革边箱，镀铬件，长途舒适巡航 |
| model:indian:super-scout | Super Scout | Super Scout 超级侦察兵 巡航车 | Super Scout 超級偵察兵 巡航車 | スーパースカウト | class:disp:1000cc | body:cruiser | pt:ice | current | 2025–present | 2025年全新Scout系列旅行巡航版，Speed Plus 1250cc V缸，带风挡与边箱的长途版本 |
| model:indian:tomahawk | Tomahawk | Tomahawk 战斧 街车（停产） | Tomahawk 戰斧 街車（停產） | トマホーク | class:disp:600cc | body:naked | pt:ice | discontinued | 1955–1960 | 1955–1960年英国皇家恩菲尔德500cc双缸贴牌车型，Brockhouse时期复兴产品线之一 |
| model:indian:vintage | Vintage | Vintage 复古 巡航车（停产） | Vintage 復古 巡航車（停產） | ヴィンテージ | class:disp:1000cc | body:cruiser | pt:ice | discontinued | 2014–2019 | 1811cc Thunderstroke 111，复古风格旅行巡航，大挡风皮革边箱，2019年停产 |
| model:indian:warrior-1950 | Warrior (1950) | Warrior 战士 运动街车（停产） | Warrior 戰士 運動街車（停產） | ウォリアー（1950） | class:disp:600cc | body:sport | pt:ice | discontinued | 1950–1952 | 1950年推出的500cc并列双缸运动车型，含TT高排气管版本，印第安末期经典之作 |

### 4.Jawa (23款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:jawa:175 | 175 | Jawa 175 轻量二冲程单缸车（停产） | Jawa 175 輕量二衝程單缸車（停產） | ヤワ 175 | class:disp:250cc | body:naked | pt:ice | discontinued | 1932–1946 | 1932年推出的大萧条时期廉价轻量车，整备质量仅70公斤，是Jawa战前销量主力，总产量超27000辆 |
| model:jawa:250-353 | 250/353 Kývačka | Jawa 250/353 Kývačka 二冲程街车（停产） | Jawa 250/353 Kývačka 二衝程街車（停產） | ヤワ 250/353 キーヴァチカ | class:disp:250cc | body:naked | pt:ice | discontinued | 1954–1962 | Kývačka意为摆动式后悬挂，250cc二冲程单缸，出口120多个国家，中国幸福XF250即以它为原型 |
| model:jawa:250-559 | 250/559 Panelka | Jawa 250/559 Panelka 二冲程街车（停产） | Jawa 250/559 Panelka 二衝程街車（停產） | ヤワ 250/559 パネルカ | class:disp:250cc | body:naked | pt:ice | discontinued | 1962–1974 | 1960年代Jawa 250cc主力车型，率先搭载Jawa首创的自动离心式离合器，皮实耐用的国民车 |
| model:jawa:250-bizon | 250/623 Bizon | Jawa 250/623 Bizon 野牛 二冲程街车（停产） | Jawa 250/623 Bizon 野牛 二衝程街車（停產） | ヤワ 250/623 ビゾン | class:disp:250cc | body:naked | pt:ice | discontinued | 1963–1971 | Bizon意为野牛，250cc二冲程单缸，造型硬朗实用，是1960年代Jawa的主力街车之一 |
| model:jawa:250-californian | 250 Californian | Jawa 250 Californian 二冲程街车（停产） | Jawa 250 Californian 二衝程街車（停產） | ヤワ 250 カリフォルニアン | class:disp:250cc | body:naked | pt:ice | discontinued | 1963–1971 | 250cc二冲程单缸，与350 Californian同期面向北美市场推出，风格独特 |
| model:jawa:250-duplex-blok | 250 Duplex-Blok | Jawa 250 Duplex-Blok 军用二冲程摩托（停产） | Jawa 250 Duplex-Blok 軍用二衝程摩托（停產） | ヤワ 250 デュプレックスブロック | class:disp:250cc | body:naked | pt:ice | discontinued | 1939–1945 | 1939年起生产的250cc二冲程单缸，采用一体式发动机设计，二战期间大量被军方征用，是战后Pérák的技术基础 |
| model:jawa:250-perak | 250 Pérák | Jawa 250 Pérák 弹簧人 二冲程街车（停产） | Jawa 250 Pérák 彈簧人 二衝程街車（停產） | ヤワ 250 ペラーク | class:disp:250cc | body:naked | pt:ice | discontinued | 1946–1954 | 绰号弹簧人的250cc二冲程单缸，二战后的捷克国民摩托，摆动式后悬挂为其标志性设计 |
| model:jawa:250-special | 250 Special | Jawa 250 Special 二冲程单缸街车（停产） | Jawa 250 Special 二衝程單缸街車（停產） | ヤワ 250 スペシャル | class:disp:250cc | body:naked | pt:ice | discontinued | 1934–1940 | 1934年推出的250cc二冲程单缸，Jawa战前最著名的轻量车型，其后续250系列成为中国幸福XF250的技术源头 |
| model:jawa:350 | 350 | Jawa 350 经典街车 | Jawa 350 經典街車 | ヤワ350 | class:disp:400cc | body:naked | pt:ice | current | 2023–present | 复兴版Jawa 350，334cc单缸，复古水冷街车，由印度Classic Legends在捷克品牌授权下生产 |
| model:jawa:350-354 | 350/354 Kývačka | Jawa 350/354 Kývačka 双缸二冲程街车（停产） | Jawa 350/354 Kývačka 雙缸二衝程街車（停產） | ヤワ 350/354 キーヴァチカ | class:disp:400cc | body:naked | pt:ice | discontinued | 1954–1964 | 343cc双缸二冲程，Kývačka摆动式后悬挂，1950年代Jawa主力出口车型，风靡全球120多个国家 |
| model:jawa:350-360 | 350/360 Automatic | Jawa 350/360 Automatic 自动离合二冲程街车（停产） | Jawa 350/360 Automatic 自動離合二衝程街車（停產） | ヤワ 350/360 オートマチック | class:disp:400cc | body:naked | pt:ice | discontinued | 1964–1974 | 343cc二冲程单缸，世界上首款配备自动离心式离合器的摩托车，该专利后为本田仿制并需支付授权费 |
| model:jawa:350-361-sport | 350/361 Sport | Jawa 350/361 Sport 双缸二冲程运动车（停产） | Jawa 350/361 Sport 雙缸二衝程運動車（停產） | ヤワ 350/361 スポルト | class:disp:400cc | body:sport | pt:ice | discontinued | 1965–1969 | 双缸二冲程运动版，配备更大的19英寸轮圈，是1960年代Jawa运动车型的代表 |
| model:jawa:350-634 | 350/634 | Jawa 350/634 双缸二冲程街车（停产） | Jawa 350/634 雙缸二衝程街車（停產） | ヤワ 350/634 | class:disp:400cc | body:naked | pt:ice | discontinued | 1973–1985 | 343cc双缸二冲程，1970年代Jawa最畅销的传奇车型，机械结构一直延续至1990年代 |
| model:jawa:350-638 | 350/638 | Jawa 350/638 双缸二冲程街车（停产） | Jawa 350/638 雙缸二衝程街車（停產） | ヤワ 350/638 | class:disp:400cc | body:naked | pt:ice | discontinued | 1984–1994 | 634的后继双缸二冲程，1986年起输出约34马力，是捷克斯洛伐克时代最后的主流350车型之一 |
| model:jawa:350-639 | 350/639 | Jawa 350/639 双缸二冲程街车（停产） | Jawa 350/639 雙缸二衝程街車（停產） | ヤワ 350/639 | class:disp:400cc | body:naked | pt:ice | discontinued | 1984–1994 | 与638同期生产的双缸二冲程，首次为350系列配备前盘式刹车，是Jawa双缸系列的收官之作 |
| model:jawa:350-californian | 350 Californian | Jawa 350 Californian 双缸二冲程街车（停产） | Jawa 350 Californian 雙缸二衝程街車（停產） | ヤワ 350 カリフォルニアン | class:disp:400cc | body:naked | pt:ice | discontinued | 1967–1973 | 双缸二冲程，专为北美市场设计的出口车型，经典红黑配色风靡美国，是Jawa最知名的出口型号之一 |
| model:jawa:350-ohv | 350 OHV | Jawa 350 OHV 四冲程单缸街车（停产） | Jawa 350 OHV 四衝程單缸街車（停產） | ヤワ 350 OHV | class:disp:400cc | body:naked | pt:ice | discontinued | 1935–1946 | 350 SV的后继车型，改用顶置气门并横跨二战生产，是Jawa战前四冲程单缸的经典代表 |
| model:jawa:350-perak | 350 Pérák | Jawa 350 Pérák 弹簧人 双缸二冲程街车（停产） | Jawa 350 Pérák 彈簧人 雙缸二衝程街車（停產） | ヤワ 350 ペラーク | class:disp:400cc | body:naked | pt:ice | discontinued | 1948–1956 | Jawa传奇双缸二冲程，绰号弹簧人，是战后东欧最受欢迎的摩托之一，性能出色口碑极佳 |
| model:jawa:350-sv | 350 SV | Jawa 350 SV 四冲程单缸街车（停产） | Jawa 350 SV 四衝程單缸街車（停產） | ヤワ 350 SV | class:disp:400cc | body:naked | pt:ice | discontinued | 1934–1936 | 1934年推出的350cc四冲程侧置气门单缸摩托，是Jawa战前大排量街车的重要车型 |
| model:jawa:500-ohc | 500 OHC | 500 OHC 单缸摩托车（停产） | 500 OHC 單缸摩托車（停產） | 500OHC | class:disp:600cc | body:naked | pt:ice | discontinued | 1952–1958 | 488cc顶置凸轮轴单缸摩托车，1950年代Jawa的大排量车型，性能出色口碑良好 |
| model:jawa:500-ohv | 500 OHV | Jawa 500 OHV 首款四冲程单缸车（停产） | Jawa 500 OHV 首款四衝程單缸車（停產） | ヤワ 500 OHV | class:disp:600cc | body:naked | pt:ice | discontinued | 1929–1932 | Jawa品牌首款量产车型，源自Wanderer的500cc四冲程顶置气门单缸，1929年10月上市，为品牌奠定可靠耐用的口碑 |
| model:jawa:babetta | Babetta | Jawa Babetta 50cc 轻便摩托（停产） | Jawa Babetta 50cc 輕便摩托（停產） | ヤワ バベッタ | class:disp:50cc | body:scooter | pt:ice | discontinued | 1970–1999 | 50cc轻便摩托，1970年起在斯洛伐克工厂生产并以Jawa品牌外销，首创电子点火，是捷克与东欧家喻户晓的代步车型 |
| model:jawa:perak | Perak | Perak 单座鲍勃车 | Perak 單座鮑勃車 | ペラク | class:disp:400cc | body:bobber | pt:ice | current | 2019–present | 334cc单缸单座鲍勃车，磨砂黑涂装与双排气管设计，Jawa复兴系列中最具个性的一款 |

### 4.Jianshe (6款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:jianshe:fz150 | YS150 | 飞致150 街车 | 飛致150 街車 | YS150 | class:disp:250cc | body:naked | pt:ice | current | 2015–present | 建设雅马哈飞致150（YS150），150cc单缸电喷街车，雅马哈蓝芯技术，省油耐用的合资经典 |
| model:jianshe:jog-i | Jog i | 巧格i 125 踏板车 | 巧格i 125 踏板車 | ジョグi | class:disp:125cc | body:scooter | pt:ice | current | 2016–present | 建设雅马哈巧格i，125cc踏板车，雅马哈经典Jog系列，轻巧省油，城市代步热门车型 |
| model:jianshe:tianjian-150 | YBR150Z | 天剑150 街车 | 天劍150 街車 | YBR150Z | class:disp:250cc | body:naked | pt:ice | current | 2016–present | 建设雅马哈天剑动力版YBR150Z，150cc单缸，面向实用市场的经典通路街车 |
| model:jianshe:xingying-125 | Xingying 125 | 兴鹰125 踏板车 | 興鷹125 踏板車 | シンイン125 | class:disp:125cc | body:scooter | pt:ice | current | 2025–present | 建设雅马哈兴鹰125，巡鹰系列换代车型，搭载ASST动力辅助系统，配置智能钥匙 |
| model:jianshe:xunying-125 | Cygnus 125 | 巡鹰125 踏板车 | 巡鷹125 踏板車 | サイグナス125 | class:disp:125cc | body:scooter | pt:ice | current | 2020–present | 建设雅马哈巡鹰125，宽大饱满的车身被车友戏称"胖头鱼"，踏板界的小巡航 |
| model:jianshe:ybr125 | YBR125 | 天剑YBR125 街车 | 天劍YBR125 街車 | YBR125 | class:disp:125cc | body:naked | pt:ice | current | 2004–present | 建设雅马哈天剑YBR125，125cc单缸空冷，曾是中国最畅销的合资125街车之一 |

### 4.Jincheng (6款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:jincheng:ax100 | AX100 | AX100 跨骑 | AX100 跨騎 | AX100 | class:disp:125cc | body:naked | pt:ice | discontinued | 1985–2005 | 金城铃木AX100，100cc二冲程经典跨骑车，1985年金城与铃木签约合资生产，一代人的集体回忆 |
| model:jincheng:caomeng-200 | Caomeng 200 | 草蜢200 运动踏板 | 草蜢200 運動踏板 | カオモン200 | class:disp:250cc | body:maxi-scooter | pt:ice | current | 2018–present | 金城草蜢200，200cc运动风格大踏板，造型犀利，金城踏板阵营中的高性价比之选 |
| model:jincheng:jintong-70 | Jintong JC70 | 金童JC70 迷你车 | 金童JC70 迷你車 | ジントンJC70 | class:disp:125cc | body:mini | pt:ice | current | 2019–present | 金城金童JC70，70cc迷你车型，致敬本田Monkey的复古小猴子造型，玩乐属性强 |
| model:jincheng:k-cross-200 | K-CROSS 200 | K-CROSS 200 探险车 | K-CROSS 200 探險車 | K-CROSS 200 | class:disp:250cc | body:adventure | pt:ice | current | 2017–present | 金城K-CROSS 200，200cc单缸休旅ADV，国内ADV市场兴起初期的"元老"车型之一，标配ABS |
| model:jincheng:shengjiachong-200 | Tiramisu 200 | 圣甲虫200 大踏板 | 聖甲蟲200 大踏板 | ティラミス200 | class:disp:250cc | body:maxi-scooter | pt:ice | current | 2015–present | 金城圣甲虫200（提拉米苏JC200T），200cc大踏板，原为金城代工的阿普利亚车型，极速超130km/h |
| model:jincheng:wukong-110 | Wukong 110 | 悟空110 复古迷你 | 悟空110 復古迷你 | ウーコン110 | class:disp:125cc | body:mini | pt:ice | current | 2022–present | 金城悟空110，110cc复古迷你车，圆灯圆表呆萌造型，还推出过摩旅版与边三轮版本 |

### 4.KOVE (13款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:kove:321r | 321R | 321R 街车 | 321R 街車 | 321R | class:disp:400cc | body:naked | pt:ice | current | 2021–present | 凯越Cobra 321R运动街车，322cc双缸单摇臂，2021年3月发售，整备质量仅153kg |
| model:kove:321rr | 321RR | 321RR 仿赛 | 321RR 仿賽 | 321RR | class:disp:400cc | body:sport | pt:ice | current | 2021–present | 凯越321RR双缸仿赛，322cc并列双缸水冷，单摇臂设计，被称为双缸仿赛小钢炮 |
| model:kove:450rally | 450Rally | 450Rally 拉力车 | 450Rally 拉力車 | 450Rally | class:disp:600cc | body:adventure | pt:ice | current | 2022–present | 凯越450Rally硬派拉力车，449cc大单缸水冷，参照达喀尔拉力赛标准设计，竞技版曾参加达喀尔，整备质量仅155kg |
| model:kove:450rally-ex | 450Rally EX | 450Rally EX 厂队版拉力车 | 450Rally EX 廠隊版拉力車 | 450Rally EX | class:disp:600cc | body:adventure | pt:ice | current | 2025–present | 凯越2025年发布的450 Rally EX厂队版拉力车，34升大油箱、最大马力65匹，2025款上市售价9.38万元，是征战达喀尔赛事的同款战车 |
| model:kove:450rr | 450RR | 450RR 四缸仿赛 | 450RR 四缸仿賽 | 450RR | class:disp:600cc | body:sport | pt:ice | current | 2023–present | 凯越首款四缸跑车，443cc直列四缸水冷，2023年5月发布，被誉为国产四缸中小排量性价比之选 |
| model:kove:450rr-manii | 450RR Man II | 450RR 曼岛II 仿赛（2026款） | 450RR 曼島II 仿賽（2026款） | 450RR Man II | class:disp:600cc | body:sport | pt:ice | current | 2026–present | 凯越第三代450RR，2026年3月发布，售价25777元起，发动机结构大幅改进，另有BSB赛事纪念版 |
| model:kove:500f | 500F | 500F 复古车 | 500F 復古車 | 500F | class:disp:600cc | body:scrambler | pt:ice | current | 2022–present | 凯越500F复古车，直列双缸水冷，圆灯复古造型，凯越公路车型的代表作 |
| model:kove:500x | 500X | 500X 探险车 | 500X 探險車 | 500X | class:disp:600cc | body:adventure | pt:ice | current | 2019–present | 凯越500X双缸ADV，鸟嘴造型加单摇臂设计，曾以高性价比成为500cc级别热门拉力车型 |
| model:kove:525x | 525X | 525X 探险车 | 525X 探險車 | 525X | class:disp:600cc | body:adventure | pt:ice | current | 2022–present | 凯越525X，500X的升级换代车型，动力与配置全面升级，接棒500X成为凯越中量级ADV主力 |
| model:kove:625v-lancer | 625V Lancer | 625V 枪骑兵 巡航车 | 625V 槍騎兵 巡航車 | 625V ランサー | class:disp:600cc | body:cruiser | pt:ice | current | 2025–present | 凯越首款巡航车，2025年5月上市，售价24980元，578cc双缸发动机，双油箱共20升、续航可达500公里 |
| model:kove:625x | 625X | 625X 探险车 | 625X 探險車 | 625X | class:disp:750cc | body:adventure | pt:ice | current | 2025–present | 凯越625X，同级少有的搭载电子减震的ADV，动力更强劲，面向进阶拉力用户 |
| model:kove:650rr | 650RR | 650RR 四缸仿赛 | 650RR 四缸仿賽 | 650RR | class:disp:750cc | body:sport | pt:ice | current | 2026–present | 凯越首款中排量四缸仿赛，645cc直列四缸水冷，2025重庆摩博会发布，2026年年中上市，最大功率92kW |
| model:kove:800x | 800X 2026 | 800X 探险车（2026款） | 800X 探險車（2026款） | 800X 2026 | class:disp:750cc | body:adventure | pt:ice | current | 2023–present | 凯越799cc双缸硬派ADV，2026款大改款于2026年8月上市，硬汉版42800元，整车大幅轻量化并补齐电控短板 |

### 4.KTM (55款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:ktm:1190-adventure | 1190 Adventure | 1190 Adventure (ADV) 探险车 | 1190 Adventure (ADV) 探險車 | 1190 アドベンチャー | class:disp:1000cc | body:adventure | pt:ice | discontinued | 2013–2016 | 1195cc V型双缸探险车，达喀尔冠军血统，KTM现代探险车的性能里程碑 |
| model:ktm:125-duke | 125 Duke | 125 Duke 街车 | 125 Duke 街車 | 125 デューク | class:disp:125cc | body:naked | pt:ice | current | 2011–present | 125cc级入门街车，欧洲A1驾照适用，124.7cc单缸水冷 |
| model:ktm:125-sx | 125 SX | 125 SX 二冲程场地越野 | 125 SX 二衝程場地越野 | 125 SX モトクロス | class:disp:125cc | body:motocross | pt:ice | current | 1992–present | 125cc二冲程场地越野入门战车，轻巧灵活，无数越野车手的启蒙车型 |
| model:ktm:1290-super-adventure-r | 1290 Super Adventure R | 1290 Super Adventure R 超级探险车 | 1290 Super Adventure R 超級探險車 | 1290 スーパーアドベンチャーR | class:disp:1000cc | body:adventure | pt:ice | current | 2015–present | 1301cc V型双缸探险旗舰R版，越野取向，WP长行程悬挂，公路与野地兼修 |
| model:ktm:1290-super-adventure-s | 1290 Super Adventure S | 1290 Super Adventure S 超级探险车 | 1290 Super Adventure S 超級探險車 | 1290 スーパーアドベンチャーS | class:disp:1000cc | body:adventure | pt:ice | current | 2015–present | KTM探险旗舰，1301cc V型双缸LC8，160马力，雷达自适应巡航 |
| model:ktm:1290-super-duke-r-evo | 1290 Super Duke R Evo | 1290 Super Duke R Evo 超级公爵 旗舰街车 | 1290 Super Duke R Evo 超級公爵 旗艦街車 | 1290 スーパーデュークR エボ | class:disp:1000cc | body:naked | pt:ice | current | 2022–present | KTM街车旗舰，1301cc V型双缸LC8，180马力，WP Semi-Active悬挂，绰号野兽 |
| model:ktm:1390-super-adventure | 1390 Super Adventure | 1390 Super Adventure 超级探险车 | 1390 Super Adventure 超級探險車 | 1390 スーパーアドベンチャー | class:disp:1000cc | body:adventure | pt:ice | current | 2024–present | 1350cc V型双缸探险旗舰，2024年全新换代，雷达巡航与顶级电控加持 |
| model:ktm:1390-super-adventure-s-evo | 1390 Super Adventure S Evo | 1390 Super Adventure S Evo 旗舰探险车 | 1390 Super Adventure S Evo 旗艦探險車 | 1390 スーパーアドベンチャーS エボ | class:disp:1000cc | body:adventure | pt:ice | current | 2025–present | 1350cc V型双缸，2025款全新旗舰ADV，AMT自动变速箱+雷达+半主动悬挂 |
| model:ktm:1390-super-duke-gt | 1390 Super Duke GT | 1390 Super Duke GT 旗舰运动旅行车 | 1390 Super Duke GT 旗艦運動旅行車 | 1390 スーパーデュークGT | class:disp:1000cc | body:sport-touring | pt:ice | current | 2025–present | 1350cc V型双缸，2025款全新运动旅行旗舰，基于1390 Super Duke R Evo开发 |
| model:ktm:1390-super-duke-r | 1390 Super Duke R | 1390 Super Duke R 超级公爵 旗舰街车 | 1390 Super Duke R 超級公爵 旗艦街車 | 1390 スーパーデュークR | class:disp:1000cc | body:naked | pt:ice | current | 2024–present | 2024年发布的全新街车旗舰，1350cc V型双缸LC8，190马力，取代1290成为野兽之王 |
| model:ktm:150-sx | 150 SX | 150 SX 二冲程场地越野 | 150 SX 二衝程場地越野 | 150 SX モトクロス | class:disp:250cc | body:motocross | pt:ice | current | 2008–present | 144cc二冲程场地越野，介于125与250之间的黄金排量，轻量化林道与场地利器 |
| model:ktm:150-xc-w | 150 XC-W | 150 XC-W 越野竞技耐力车 | 150 XC-W 越野競技耐力車 | 150 XC-W エンデューロ | class:disp:250cc | body:enduro | pt:ice | current | 2015–present | 144cc二冲程宽齿比越野竞技车，XC-W系列最小排量，轻巧灵活，适合严苛林道 |
| model:ktm:200-duke | 200 Duke | 200 Duke 街车 | 200 Duke 街車 | 200 デューク | class:disp:250cc | body:naked | pt:ice | current | 2012–present | Duke系列入门款，199.5cc单缸，适合新手和城市通勤 |
| model:ktm:250-adventure | 250 Adventure | 250 Adventure (ADV) 小排量探险车 | 250 Adventure (ADV) 小排量探險車 | 250 アドベンチャー | class:disp:250cc | body:adventure | pt:ice | current | 2021–present | 入门级探险车，248.8cc单缸，轻量化设计，适合新手长途与轻度越野 |
| model:ktm:250-exc | 250 EXC | 250 EXC 二冲程耐力越野车 | 250 EXC 二衝程耐力越野車 | 250 EXC エンデューロ | class:disp:250cc | body:enduro | pt:ice | current | 1992–present | 二冲程耐力越野经典，249cc单缸，轻量化车身，林道赛事常胜车型 |
| model:ktm:250-exc-f | 250 EXC-F | 250 EXC-F 林道耐力越野车 | 250 EXC-F 林道耐力越野車 | 250 EXC-F エンデューロ | class:disp:250cc | body:enduro | pt:ice | current | 2004–present | 250cc四冲程林道耐力车，轻巧灵活，新手与资深车手皆宜 |
| model:ktm:250-sx | 250 SX | 250 SX 二冲程场地越野 | 250 SX 二衝程場地越野 | 250 SX モトクロス | class:disp:250cc | body:motocross | pt:ice | current | 1998–present | 二冲程场地越野经典，249cc单缸，轻量高转爆发力强，越野赛场常青树 |
| model:ktm:250-sx-f | 250 SX-F | 250 SX-F 场地越野赛车 | 250 SX-F 場地越野賽車 | 250 SX-F モトクロス | class:disp:250cc | body:motocross | pt:ice | current | 2004–present | 250cc场地越野赛车，单缸四冲程，MX2级别赛事主力，不可上牌 |
| model:ktm:250-xc | 250 XC | 250 XC 二冲程越野竞技车 | 250 XC 二衝程越野競技車 | 250 XC クロスカントリー | class:disp:250cc | body:motocross | pt:ice | current | 2001–present | 249cc二冲程越野竞技车，介于SX与XC-W之间的设定，平衡性与爆发力兼备 |
| model:ktm:250-xc-f | 250 XC-F | 250 XC-F 越野竞技赛车 | 250 XC-F 越野競技賽車 | 250 XC-F クロスカントリー | class:disp:250cc | body:motocross | pt:ice | current | 2006–present | 250cc四冲程越野竞技赛车，介于场地与耐力之间的跨界定位，竞赛利器 |
| model:ktm:300-exc | 300 EXC | 300 EXC 二冲程耐力越野车 | 300 EXC 二衝程耐力越野車 | 300 EXC エンデューロ | class:disp:250cc | body:enduro | pt:ice | current | 2006–present | 二冲程耐力越野经典，293cc单缸，轻量化高功率，林道利器 |
| model:ktm:300-xc-w | 300 XC-W | 300 XC-W 二冲程越野竞技车 | 300 XC-W 二衝程越野競技車 | 300 XC-W クロスカントリー | class:disp:250cc | body:enduro | pt:ice | current | 2001–present | 293cc二冲程宽齿比越野竞技车，XC-W系列标杆，扭矩平顺且操控极强 |
| model:ktm:350-exc-f | 350 EXC-F | 350 EXC-F 林道耐力越野车 | 350 EXC-F 林道耐力越野車 | 350 EXC-F エンデューロ | class:disp:400cc | body:enduro | pt:ice | current | 2012–present | 林道耐力越野，350cc单缸四冲程，可上牌，动力与重量的黄金平衡 |
| model:ktm:350-sx-f | 350 SX-F | 350 SX-F 场地越野赛车 | 350 SX-F 場地越野賽車 | 350 SX-F モトクロス | class:disp:400cc | body:motocross | pt:ice | current | 2011–present | 350cc四冲程场地越野，SX-F系列创新排量，兼顾450的功率与250的操控，MXGP热门战车 |
| model:ktm:390-adventure | 390 Adventure | 390 Adventure (ADV) 小排量探险车 | 390 Adventure (ADV) 小排量探險車 | 390 アドベンチャー | class:disp:400cc | body:adventure | pt:ice | current | 2020–present | 入门级探险车，373cc单缸，21寸前轮，公路越野两用 |
| model:ktm:390-duke | 390 Duke | 390 Duke 街车 | 390 Duke 街車 | 390 デューク | class:disp:400cc | body:naked | pt:ice | current | 2013–present | KTM入门级街车，373cc单缸，WP悬挂，以轻量化和操控性著称 |
| model:ktm:390-enduro-r | 390 Enduro R | 390 Enduro R 大单缸两用车 | 390 Enduro R 大單缸兩用車 | 390 エンデューロR | class:disp:400cc | body:dual-sport | pt:ice | current | 2024–present | 2024年印度市场新车型，399cc单缸，21寸前轮，可上牌探险两用车 |
| model:ktm:450-exc-f | 450 EXC-F | 450 EXC-F 林道耐力越野车 | 450 EXC-F 林道耐力越野車 | 450 EXC-F エンデューロ | class:disp:400cc | body:enduro | pt:ice | current | 2008–present | 林道耐力越野，450cc单缸，可上牌公路行驶，有灯具 |
| model:ktm:450-sx-f | 450 SX-F | 450 SX-F 场地越野赛车 | 450 SX-F 場地越野賽車 | 450 SX-F モトクロス | class:disp:400cc | body:motocross | pt:ice | current | 2007–present | 场地越野旗舰，450cc单缸四冲程，MXGP赛事常胜军，不可上牌 |
| model:ktm:450-xc-f | 450 XC-F | 450 XC-F 越野竞技赛车 | 450 XC-F 越野競技賽車 | 450 XC-F クロスカントリー | class:disp:400cc | body:motocross | pt:ice | current | 2008–present | 450cc四冲程越野竞技赛车，XC系列四冲程旗舰，专为越野竞技调校 |
| model:ktm:50-sx | 50 SX | 50 SX 儿童迷你场地越野 | 50 SX 兒童迷你場地越野 | 50 SX モトクロス | class:disp:50cc | body:motocross | pt:ice | current | 1997–present | 49cc二冲程儿童入门越野车，自动挡设计，KTM越野系列的启蒙车型 |
| model:ktm:500-exc-f | 500 EXC-F | 500 EXC-F 林道耐力越野车 | 500 EXC-F 林道耐力越野車 | 500 EXC-F エンデューロ | class:disp:600cc | body:enduro | pt:ice | current | 2012–present | 510cc单缸林道耐力旗舰，EXC系列最大排量，低扭充沛，长途林道利器 |
| model:ktm:640-duke | 640 Duke | 640 Duke 大单缸街车 | 640 Duke 大單缸街車 | 640 デューク | class:disp:750cc | body:naked | pt:ice | discontinued | 1998–2008 | LC4大单缸街车经典，625cc单缸，Duke系列成名之作，橙黑配色深入人心 |
| model:ktm:65-sx | 65 SX | 65 SX 儿童场地越野 | 65 SX 兒童場地越野 | 65 SX モトクロス | class:disp:125cc | body:motocross | pt:ice | current | 1997–present | 64cc二冲程儿童越野车，为低龄车手设计，配备动力限制套件，安全可靠 |
| model:ktm:690-enduro-r | 690 Enduro R | 690 Enduro R 大单缸两用车 | 690 Enduro R 大單缸兩用車 | 690 エンデューロR | class:disp:750cc | body:dual-sport | pt:ice | current | 2009–present | 大单缸两用越野车，693cc单缸LC4，21/18寸轮，可上牌 |
| model:ktm:690-smc-r | 690 SMC R | 690 SMC R 单缸滑胎车 | 690 SMC R 單缸滑胎車 | 690 SMC R スーパーモト | class:disp:750cc | body:supermoto | pt:ice | current | 2010–present | Supermoto滑胎车，693cc单缸LC4，17寸公路胎，APTC滑动离合 |
| model:ktm:790-adventure | 790 Adventure | 790 Adventure (ADV) 中量级探险车 | 790 Adventure (ADV) 中量級探險車 | 790 アドベンチャー | class:disp:750cc | body:adventure | pt:ice | current | 2026–present | 2026款全新，799cc并列双缸约95马力，200mm减震行程，790级ADV回归 |
| model:ktm:790-duke | 790 Duke | 790 Duke 街车 | 790 Duke 街車 | 790 デューク | class:disp:750cc | body:naked | pt:ice | current | 2023–present | 中量级街车，799cc并列双缸LC8c，2023年换代回归，105马力，轻量化车身 |
| model:ktm:85-sx | 85 SX | 85 SX 青少年场地越野 | 85 SX 青少年場地越野 | 85 SX モトクロス | class:disp:125cc | body:motocross | pt:ice | current | 1997–present | 84.9cc二冲程青少年越野车，青少年锦标赛主力车型，越野车手的摇篮 |
| model:ktm:890-adventure | 890 Adventure | 890 Adventure (ADV) 中量级探险车 | 890 Adventure (ADV) 中量級探險車 | 890 アドベンチャー | class:disp:750cc | body:adventure | pt:ice | current | 2021–present | 中量级探险车标准版，889cc并列双缸LC8c，105马力，公路与轻度越野兼顾 |
| model:ktm:890-adventure-r | 890 Adventure R | 890 Adventure R 中量级探险车 | 890 Adventure R 中量級探險車 | 890 アドベンチャーR | class:disp:750cc | body:adventure | pt:ice | current | 2021–present | 中量级探险车，889cc并列双缸，21/18寸轮组，越野能力强大 |
| model:ktm:890-duke-r | 890 Duke R | 890 Duke R 中量级街车 | 890 Duke R 中量級街車 | 890 デュークR | class:disp:750cc | body:naked | pt:ice | current | 2020–present | 中量级街车旗舰，889cc并列双缸LC8c，121马力，Brembo卡钳 |
| model:ktm:890-smt | 890 SMT | 890 SMT 滑胎旅行车 | 890 SMT 滑胎旅行車 | 890 SMT スーパーモト | class:disp:750cc | body:supermoto | pt:ice | current | 2023–present | Supermoto风格旅行车，889cc并列双缸，17寸公路轮，兼顾山道劈弯与长途 |
| model:ktm:950-adventure | 950 Adventure | 950 Adventure (ADV) 探险车 | 950 Adventure (ADV) 探險車 | 950 アドベンチャー | class:disp:1000cc | body:adventure | pt:ice | discontinued | 2003–2007 | KTM首款LC8 V型双缸探险车，942cc，达喀尔赛事历练，开创KTM探险车传奇 |
| model:ktm:990-adventure | 990 Adventure | 990 Adventure (ADV) 探险车 | 990 Adventure (ADV) 探險車 | 990 アドベンチャー | class:disp:1000cc | body:adventure | pt:ice | current | 2024–present | 2024年全新探险车，947cc并列双缸，与990 Duke同平台，主打轻量化中大型ADV |
| model:ktm:990-duke | 990 Duke | 990 Duke 街车 | 990 Duke 街車 | 990 デューク | class:disp:1000cc | body:naked | pt:ice | current | 2024–present | 2024年新款，947cc并列双缸，电子快排，公升级以下最强街车之一 |
| model:ktm:990-duke-r | 990 Duke R | 990 Duke R 中量级运动街车 | 990 Duke R 中量級運動街車 | 990 デュークR | class:disp:1000cc | body:naked | pt:ice | current | 2026–present | 2026款全新，947cc并列双缸，动力与悬挂全面强化，WP悬挂+Brembo卡钳 |
| model:ktm:990-rc-r | 990 RC R | 990 RC R 旗舰仿赛 | 990 RC R 旗艦仿賽 | 990 RC R | class:disp:1000cc | body:sport | pt:ice | current | 2026–present | 2026款全新旗舰仿赛，947cc LC8c并列双缸约135马力，接替停产的RC8 |
| model:ktm:990-super-duke | 990 Super Duke | 990 Super Duke 超级公爵 | 990 Super Duke 超級公爵 | 990 スーパーデューク | class:disp:1000cc | body:naked | pt:ice | discontinued | 2005–2013 | 999cc V型双缸街车鼻祖，绰号野兽(The Beast)，开创超级街车时代 |
| model:ktm:duke-620 | Duke 620 | Duke 620 大单缸街车 | Duke 620 大單缸街車 | Duke 620 デューク | class:disp:600cc | body:naked | pt:ice | discontinued | 1994–1998 | Duke系列开山之作，609cc单缸LC4，开创欧洲大单缸街车潮流 |
| model:ktm:lc4-400 | LC4 400 | LC4 400 单缸耐力越野 | LC4 400 單缸耐力越野 | LC4 400 エンデューロ | class:disp:400cc | body:enduro | pt:ice | discontinued | 1993–1997 | 398cc单缸水冷LC4发动机，小排量大单缸，当年欧洲越野市场主力车型 |
| model:ktm:lc4-620 | LC4 620 | LC4 620 大单缸耐力越野 | LC4 620 大單缸耐力越野 | LC4 620 エンデューロ | class:disp:600cc | body:enduro | pt:ice | discontinued | 1992–1996 | LC4发动机开山之作，609cc单缸水冷，奠定KTM大单缸越野技术路线 |
| model:ktm:rc125 | RC 125 | RC 125 仿赛 | RC 125 仿賽 | RC125 | class:disp:125cc | body:sport | pt:ice | current | 2014–present | 入门级仿赛，124.7cc单缸，欧洲A1驾照适用，Moto3风格外观 |
| model:ktm:rc200 | RC 200 | RC 200 仿赛 | RC 200 仿賽 | RC200 | class:disp:250cc | body:sport | pt:ice | current | 2014–present | 印度市场入门仿赛，199.5cc单缸，与200 Duke同动力平台 |
| model:ktm:rc390 | RC 390 | RC 390 仿赛 | RC 390 仿賽 | RC390 | class:disp:400cc | body:sport | pt:ice | current | 2014–present | KTM入门级仿赛，373cc单缸，Moto3赛车技术下放，赛道取向 |

### 4.KYMCO (12款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:kymco:ak-550-2025 | AK 550 Premium (2025) | AK 550 旗舰大绵羊（2025款） | AK 550 旗艦大綿羊（2025款） | AK 550 プレミアム（2025年型） | class:disp:600cc | body:maxi-scooter | pt:ice | current | 2025–present | 2025款AK 550 Premium，外观与电控系统升级，进一步强化旗舰豪华大绵羊定位 |
| model:kymco:ak-550-premium | AK 550 Premium / Super Touring | AK 550 旗舰大绵羊踏板 | AK 550 旗艦大綿羊踏板 | AK 550 プレミアム | class:disp:600cc | body:maxi-scooter | pt:ice | current | 2017–present | 光阳旗舰大绵羊，550cc并列双缸53马力，铝合金车架，电子节气门，与TMAX同级对手 |
| model:kymco:cv3 | CV3 | CV3 倒三轮大绵羊 | CV3 倒三輪大綿羊 | CV3 | class:disp:600cc | body:trike | pt:ice | current | 2022–present | 550cc倒三轮踏板，AK550同平台引擎，双前轮独立悬挂，稳定性高，安全舒适 |
| model:kymco:dink-g150 | Dink G150 | Dink G150 跨界ADV踏板 | Dink G150 跨界ADV踏板 | ディンクG150 | class:disp:125cc | body:adventure | pt:ice | current | 2026–present | 常州光阳2026年1月上市的全新ADV跨界踏板，150cc动力，定位年轻人的第一辆ADV，售价13980元 |
| model:kymco:downtown-350i | Downtown 350i | Downtown 350i 市区大踏板 | Downtown 350i 市區大踏板 | ダウンタウン350i | class:disp:400cc | body:maxi-scooter | pt:ice | current | 2015–present | 320cc级城市大踏板，欧洲市场设计，舒适通勤，大容量置物空间，ABS标配 |
| model:kymco:g6-150 | G6 150 | G6 150 运动踏板 | G6 150 運動踏板 | G6 150 | class:disp:125cc | body:scooter | pt:ice | current | 2013–present | 光阳G系列运动踏板，150cc单缸V.V.C.S可变气门，台湾市场长青车型 |
| model:kymco:kf125 | KF 125 | KF125 踏板车 | KF125 踏板車 | KF125 | class:disp:125cc | body:scooter | pt:ice | current | 2026–present | 光阳2026款KF125，悦行版9580元/智行版10980元，双通道ABS加TCS，主打同级安全配置 |
| model:kymco:kr150 | KR 150 | KR150 复古踏板 | KR150 復古踏板 | KR150 | class:disp:125cc | body:scooter | pt:ice | current | 2026–present | 光阳2026年5月上市的全新150cc复古踏板，东方美学设计，定位150级复古踏板价值标杆 |
| model:kymco:like-150 | Like 150 | Like 150 复古踏板车 | Like 150 復古踏板車 | Like 150 | class:disp:125cc | body:scooter | pt:ice | current | 2016–present | 光阳复古踏板代表，欧式复古外观，150cc单缸，全车LED，城市时尚通勤 |
| model:kymco:racing-s-150 | Racing S 150 | Racing S 150 弯道情人 运动踏板 | Racing S 150 彎道情人 運動踏板 | レーシングS 150 | class:disp:125cc | body:scooter | pt:ice | current | 2016–present | 光阳经典运动踏板Racing系列进化，150cc单缸，中文名弯道情人，运动性能强 |
| model:kymco:rts-r-165 | RTS R 165 | RTS R 165 运动踏板 | RTS R 165 運動踏板 | RTS R 165 | class:disp:125cc | body:scooter | pt:ice | current | 2025–present | 光阳新世代运动踏板，165cc水冷引擎带ISG油电辅助技术，2024年米兰车展亮相、2025年台湾上市 |
| model:kymco:xciting-s-400 | Xciting S 400 | Xciting S 400 赛艇 大踏板 | Xciting S 400 賽艇 大踏板 | エキサイティングS 400 | class:disp:400cc | body:maxi-scooter | pt:ice | current | 2019–present | 光阳赛艇系列大踏板，400cc单缸水冷，中文名赛艇，大陆市场热门中型大绵羊 |

### 4.Kawasaki (125款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:kawasaki:250tr | 250TR | 250TR 复古越野（停产） | 250TR 復古越野（停產） | 250TR | class:disp:250cc | body:scrambler | pt:ice | discontinued | 2002–2013 | Estrella同平台风冷单缸250，2002年推出的Scrambler风格复古越野，日本本土小众车型 |
| model:kawasaki:a1-a7 | A1 250 / A7 350 (Samurai / Avenger) | A1/A7 二冲程双缸街车（停产） | A1/A7 二衝程雙缸街車（停產） | A1 250/A7 350 | class:disp:250cc | body:naked | pt:ice | discontinued | 1966–1971 | 1966年问世的二冲程并列双缸，A1 250以极致加速征服欧美市场，A7 350为其加大排量版，川崎运动车鼻祖 |
| model:kawasaki:ar50-ar80 | AR50 / AR80 | AR50/AR80 二冲程小跑车（停产） | AR50/AR80 二衝程小跑車（停產） | AR50/AR80 | class:disp:125cc | body:sport | pt:ice | discontinued | 1982–1990 | 49cc/79cc二冲程单缸迷你运动车，全整流罩小跑车设计，欧洲/日本青少年入门首选，轻量有趣 |
| model:kawasaki:concours-14-gtr1400 | Concours 14 / 1400GTR | Concours 14 长途巡航（停产） | Concours 14 長途巡航（停產） | GTR1400 コンコース14 | class:disp:1000cc | body:sport-touring | pt:ice | discontinued | 2007–2022 | ZZR1400同款四缸运动旅行，轴传动+可变气门，旗舰长途车15年未大改 |
| model:kawasaki:d-tracker-250 | D-Tracker 250 | D-Tracker 250 滑胎越野（停产） | D-Tracker 250 滑胎越野（停產） | Dトラッカー250 | class:disp:250cc | body:supermoto | pt:ice | discontinued | 2002–2009 | KLX250同平台超级摩托，17寸公路轮+倒立前叉，日本本土特供的滑胎风格玩乐车 |
| model:kawasaki:eliminator-450 | Eliminator 450 | Eliminator 450 巡航车 | Eliminator 450 巡航車 | エリミネーター450 | class:disp:600cc | body:cruiser | pt:ice | current | 2024–present | 451cc并列双缸入门巡航，低座高，Eliminator名号复活之作 |
| model:kawasaki:en450 | EN450 | EN450 巡航车（停产） | EN450 巡航車（停產） | EN450 | class:disp:600cc | body:cruiser | pt:ice | discontinued | 1985–1990 | 454cc并列双缸入门巡航车，Vulcan系列前身，低座高美式风格，川崎巡航车初代之作 |
| model:kawasaki:en500 | EN500 | EN500 巡航车（停产） | EN500 巡航車（停產） | EN500 | class:disp:600cc | body:cruiser | pt:ice | discontinued | 1990–1999 | 498cc并列双缸巡航车，EN450的后继升级，Vulcan 500名号在北美销售，中量级巡航代表 |
| model:kawasaki:er-5 | ER-5 | ER-5 中量级街车（停产） | ER-5 中量級街車（停產） | ER-5 | class:disp:600cc | body:naked | pt:ice | discontinued | 1989–2006 | 498cc水冷并列双缸街车，欧洲市场热销，圆灯复古造型，ER-6n的前身，长销17年 |
| model:kawasaki:er-6f | ER-6f | ER-6f 中量运动旅行（停产） | ER-6f 中量運動旅行（停產） | ER-6f | class:disp:600cc | body:sport-touring | pt:ice | discontinued | 2006–2016 | ER-6n的带整流罩版，649cc并列双缸，Ninja 650的前身，欧洲中量级运动旅行畅销车 |
| model:kawasaki:er-6n | ER-6n | ER-6n 中量级街车（停产） | ER-6n 中量級街車（停產） | ER-6n | class:disp:600cc | body:naked | pt:ice | discontinued | 2006–2016 | 649cc并列双缸街车，Z650前身，畅销十年的中量级性价比之选 |
| model:kawasaki:estrella-250 | Estrella 250 | Estrella 250 复古街车（停产） | Estrella 250 復古街車（停產） | エストレヤ250 | class:disp:250cc | body:naked | pt:ice | discontinued | 1992–2008 | 249cc风冷单缸复古街车，日本本土长销16年，被称W800小兄弟 |
| model:kawasaki:estrella-350 | Estrella 350 | Estrella 350 复古街车（停产） | Estrella 350 復古街車（停產） | エストレヤ350 | class:disp:400cc | body:naked | pt:ice | discontinued | 1996–1999 | 348cc风冷单缸复古街车，Estrella 250的大排量版，仅在日本市场销售，生产周期较短 |
| model:kawasaki:gpz1000rx | GPZ1000RX | GPZ1000RX 公升仿赛（停产） | GPZ1000RX 公升仿賽（停產） | GPZ1000RX | class:disp:1000cc | body:sport | pt:ice | discontinued | 1985–1987 | 997cc水冷四缸公升级仿赛，GPZ家族旗舰，铝制双翼梁车架，Ninja ZX-10的直接前身 |
| model:kawasaki:gpz1100 | GPZ1100 | GPZ1100 旗舰街车（停产） | GPZ1100 旗艦街車（停產） | GPZ1100 | class:disp:1000cc | body:sport-touring | pt:ice | discontinued | 1981–1985 | 1089cc风冷四缸旗舰街车，80年代川崎性能王，空冷四缸巅峰 |
| model:kawasaki:gpz250 | GPZ250 | GPZ250 入门跑车（停产） | GPZ250 入門跑車（停產） | GPZ250 | class:disp:250cc | body:sport | pt:ice | discontinued | 1983–1985 | 248cc水冷四缸入门仿赛，GPZ家族最小排量，高转四缸引擎，轻量化车身 |
| model:kawasaki:gpz305 | GPZ305 | GPZ305 运动街车（停产） | GPZ305 運動街車（停產） | GPZ305 | class:disp:400cc | body:naked | pt:ice | discontinued | 1983–1987 | 306cc风冷双缸运动街车，GPZ系中排量入门，欧洲市场热门，配皮带传动后期版 |
| model:kawasaki:gpz400r-gpx400r | GPZ400R / GPX400R | GPZ400R/GPX400R 四缸仿赛（停产） | GPZ400R/GPX400R 四缸仿賽（停產） | GPZ400R/GPX400R | class:disp:400cc | body:sport | pt:ice | discontinued | 1984–1990 | 398cc水冷四缸仿赛，1984年GPZ400R问世，1987年换代GPX400R，80年代日本400cc仿赛大战主力 |
| model:kawasaki:gpz500s-ex500 | GPZ500S / EX500 | GPZ500S/EX500 中量跑车（停产） | GPZ500S/EX500 中量跑車（停產） | GPZ500S | class:disp:600cc | body:sport | pt:ice | discontinued | 1987–1994 | 498cc水冷并列双缸中量跑车，北美称EX500，Ninja 500前身，畅销近十年，入门运动车的经典 |
| model:kawasaki:gpz550 | GPz550 | GPz550 运动街车（停产） | GPz550 運動街車（停產） | GPz550 | class:disp:600cc | body:naked | pt:ice | discontinued | 1981–1985 | 553cc风冷四缸运动街车，1981年推出，GPz名号代表，80年代性能街车标杆 |
| model:kawasaki:gpz600r | GPZ600R | GPZ600R 中量仿赛（停产） | GPZ600R 中量仿賽（停產） | GPZ600R | class:disp:600cc | body:sport | pt:ice | discontinued | 1985–1990 | 592cc水冷四缸中量仿赛，GPZ家族中量级，Ninja 600R前身，全整流罩运动设计 |
| model:kawasaki:gpz750-turbo | GPz750 / GPz750 Turbo | GPz750/涡轮版 运动街车（停产） | GPz750/渦輪版 運動街車（停產） | GPz750 / GPz750ターボ | class:disp:750cc | body:sport-touring | pt:ice | discontinued | 1983–1985 | 738cc风冷四缸，1983年推出，同年发布GPz750 Turbo——日本首款量产涡轮增压摩托车 |
| model:kawasaki:gpz750r | GPZ750R | GPZ750R 四缸仿赛（停产） | GPZ750R 四缸仿賽（停產） | GPZ750R | class:disp:750cc | body:sport | pt:ice | discontinued | 1987–1990 | 738cc水冷四缸仿赛，限量生产，GPZ家族750cc运动旗舰，配全整流罩和铝框 |
| model:kawasaki:gpz900r | GPZ900R (Ninja 900) | GPZ900R 忍者开山之作（停产） | GPZ900R 忍者開山之作（停產） | GPZ900R | class:disp:750cc | body:sport | pt:ice | discontinued | 1984–2003 | 908cc水冷四缸，Ninja名号开山之作，首款水冷四气门量产仿赛，电影《壮志凌云》座驾 |
| model:kawasaki:h1-500 | H1 500 Mach III | H1 500 二冲程三缸（停产） | H1 500 二衝程三缸（停產） | H1 マッハIII | class:disp:600cc | body:naked | pt:ice | discontinued | 1969–1972 | 499cc二冲程三缸，1969年问世极速超200km/h，震惊全球的暴力机器 |
| model:kawasaki:h2-750 | H2 750 Mach IV | H2 750 二冲程三缸（停产） | H2 750 二衝程三缸（停產） | H2 マッハIV | class:disp:750cc | body:naked | pt:ice | discontinued | 1972–1975 | 748cc二冲程三缸，H1升级版，750组二冲王者，绰号墓碑 |
| model:kawasaki:h2-sx-se | H2 SX SE | H2 SX SE 机械增压旅行 | H2 SX SE 機械增壓旅行 | H2 SX SE | class:disp:1000cc | body:sport-touring | pt:ice | current | 2018–present | 998cc机械增压四缸运动旅行车，增压强动力，长途运动兼得 |
| model:kawasaki:kdx200-kdx220r | KDX200 / KDX220R | KDX200/220R 二冲程耐力越野（停产） | KDX200/220R 二衝程耐力越野（停產） | KDX200/KDX220R | class:disp:250cc | body:enduro | pt:ice | discontinued | 1983–2006 | 二冲程单缸耐力越野，KDX200自1983年起长销二十余年，KDX220R于1995年加入，林道越野传奇 |
| model:kawasaki:kdx250 | KDX250 | KDX250 二冲程耐力越野（停产） | KDX250 二衝程耐力越野（停產） | KDX250 | class:disp:250cc | body:enduro | pt:ice | discontinued | 1980–1995 | 249cc二冲程单缸耐力越野，KDX系列中排量主力，长销十五年，林道越野一代经典 |
| model:kawasaki:ke100-ke175 | KE100 / KE125 / KE175 | KE100/125/175 二冲程林道（停产） | KE100/125/175 二衝程林道（停產） | KE100/KE125/KE175 | class:disp:125cc | body:enduro | pt:ice | discontinued | 1968–1997 | 1968年起的长销二冲程单缸林道系列，结构简单耐用，KE100延续至1990年代后期，KE125/175于1980年代中期停产 |
| model:kawasaki:ke250 | KE250 | KE250 二冲程林道越野（停产） | KE250 二衝程林道越野（停產） | KE250 | class:disp:250cc | body:enduro | pt:ice | discontinued | 1978–1983 | 246cc二冲程单缸林道越野，KE系列最大排量，大单缸充沛扭矩，入门林道穿越利器 |
| model:kawasaki:kh250-kh400 | KH250 / KH400 | KH250/KH400 二冲程三缸街车（停产） | KH250/KH400 二衝程三缸街車（停產） | KH250/KH400 | class:disp:250cc | body:naked | pt:ice | discontinued | 1976–1982 | 1976年推出的二冲程三缸街车，S系列后继，机油自动混合润滑，末代二冲经典 |
| model:kawasaki:kl250 | KL250 | KL250 单缸两用车（停产） | KL250 單缸兩用車（停產） | KL250 | class:disp:250cc | body:dual-sport | pt:ice | discontinued | 1980–1998 | 249cc风冷/水冷单缸两用车，KL系列鼻祖，1980年推出，KLR250/SUPER SHERPA的前身 |
| model:kawasaki:kle500 | KLE500 | KLE500 中量级探险（停产） | KLE500 中量級探險（停產） | KLE500 | class:disp:600cc | body:adventure | pt:ice | discontinued | 1991–2007 | 498cc并列双缸冒险车，1991年推出，前21寸轮+长行程悬挂，川崎中量级ADV先驱 |
| model:kawasaki:klr250 | KLR250 | KLR250 小单缸两用车（停产） | KLR250 小單缸兩用車（停產） | KLR250 | class:disp:250cc | body:dual-sport | pt:ice | discontinued | 1984–2005 | 249cc水冷单缸两用车，KLR650的小兄弟，轻量灵活，自1984年长销二十余年，入门探险经典 |
| model:kawasaki:klr600 | KLR600 | KLR600 大单缸两用车（停产） | KLR600 大單缸兩用車（停產） | KLR600 | class:disp:600cc | body:dual-sport | pt:ice | discontinued | 1984–1987 | 564cc单缸两用车，1984年推出，KLR650直接前身，皮实耐用的林道经典 |
| model:kawasaki:klr650 | KLR650 | KLR650 大单缸探险 | KLR650 大單缸探險 | KLR650 | class:disp:750cc | body:dual-sport | pt:ice | current | 1987–present | 652cc大单缸两用车，结构简单耐造，停产3年后2022年复活，配ABS+EFI |
| model:kawasaki:klx | KLX230 / KLX300 / KLX650 | KLX 林道越野系列 | KLX 林道越野系列 | KLX230/KLX300/KLX650 | class:disp:250cc | body:dual-sport | pt:ice | current | 2020–present | 林道两用车系列，KLX230入门/ KLX300进阶 / KLX650经典大单缸 |
| model:kawasaki:klx110 | KLX110 | KLX110 儿童迷你越野 | KLX110 兒童迷你越野 | KLX110 | class:disp:125cc | body:mini | pt:ice | current | 2002–present | 111cc儿童迷你越野车，自动离合，亲子越野玩乐趣味车型 |
| model:kawasaki:klx125 | KLX125 | KLX125 林道越野（停产） | KLX125 林道越野（停產） | KLX125 | class:disp:125cc | body:enduro | pt:ice | discontinued | 2000–2008 | 124cc风冷单缸林道越野，KLX入门级，轻量车架+长行程悬挂，青少年林道启蒙车 |
| model:kawasaki:klx140 | KLX140 | KLX140 青少年林道越野 | KLX140 青少年林道越野 | KLX140 | class:disp:250cc | body:enduro | pt:ice | current | 2006–present | 144cc单缸青少年林道越野车，低座高易操控 |
| model:kawasaki:klx230r | KLX230R | KLX230R 林道越野 | KLX230R 林道越野 | KLX230R | class:disp:250cc | body:enduro | pt:ice | current | 2020–present | 232cc风冷单缸林道越野车，KLX230场地版，入门越野可靠之选 |
| model:kawasaki:klx250 | KLX250 | KLX250 林道两用车 | KLX250 林道兩用車 | KLX250 | class:disp:250cc | body:dual-sport | pt:ice | current | 1993–present | 249cc水冷单缸林道两用车，1993年诞生至今长销，探险入门经典 |
| model:kawasaki:klx300r | KLX300R | KLX300R 耐力越野（停产） | KLX300R 耐力越野（停產） | KLX300R | class:disp:400cc | body:enduro | pt:ice | discontinued | 1997–2018 | 292cc单缸耐力越野车，KLX系列中排量，青少年越野热门 |
| model:kawasaki:klx450r | KLX450R | KLX450R 耐力越野（停产） | KLX450R 耐力越野（停產） | KLX450R | class:disp:600cc | body:enduro | pt:ice | discontinued | 2008–2013 | 449cc水冷单缸耐力越野车，KX450F同平台林道化调校 |
| model:kawasaki:klx65 | KLX65 | KLX65 儿童迷你越野 | KLX65 兒童迷你越野 | KLX65 | class:disp:50cc | body:mini | pt:ice | current | 2001–present | 64cc儿童迷你越野车，入门启蒙，结构简单耐用 |
| model:kawasaki:kmx125-kmx200 | KMX125 / KMX200 | KMX125/200 二冲程耐力越野（停产） | KMX125/200 二衝程耐力越野（停產） | KMX125/KMX200 | class:disp:125cc | body:enduro | pt:ice | discontinued | 1986–1998 | 二冲程单缸耐力越野，1986年KMX125问世，1991年KMX200加入，川崎80-90年代二冲林道主力 |
| model:kawasaki:kr250-kr1 | KR250 / KR-1 / KR-1S | KR250/KR-1 二冲程仿赛（停产） | KR250/KR-1 二衝程仿賽（停產） | KR250 / KR-1 / KR-1S | class:disp:250cc | body:sport | pt:ice | discontinued | 1984–1990 | 249cc水冷二冲程双缸仿赛，1984年KR250问世，1988年KR-1以90°V型双缸赛车复刻登场，KR-1S为终极版 |
| model:kawasaki:kx100 | KX100 | KX100 青少年场地越野 | KX100 青少年場地越野 | KX100 | class:disp:125cc | body:motocross | pt:ice | current | 1994–present | 99cc二冲程青少年场地越野，KX85的升级版，大轮圈+更强动力，青少年越野进阶首选 |
| model:kawasaki:kx125 | KX125 | KX125 二冲程场地越野（停产） | KX125 二衝程場地越野（停產） | KX125 | class:disp:125cc | body:motocross | pt:ice | discontinued | 1974–2008 | 经典125cc二冲程场地越野赛车，轻量化之作，2008年停产 |
| model:kawasaki:kx250 | KX250 | KX250 二冲程场地越野（停产） | KX250 二衝程場地越野（停產） | KX250 | class:disp:250cc | body:motocross | pt:ice | discontinued | 1973–2007 | 经典250cc二冲程场地越野赛车，KX系列中量级，07年后转四冲程KX250F |
| model:kawasaki:kx250f | KX250F | KX250F 四冲程场地越野（停产） | KX250F 四衝程場地越野（停產） | KX250F | class:disp:250cc | body:motocross | pt:ice | discontinued | 2004–2018 | 250cc四冲程场地越野赛车，2004年取代二冲KX250，2019年并回四冲KX250 |
| model:kawasaki:kx450 | KX450 | KX450 场地越野 | KX450 場地越野 | KX450 | class:disp:600cc | body:motocross | pt:ice | current | 2006–present | 449cc四冲程场地越野赛车，液压离合+电启动，MXGP冠军血统 |
| model:kawasaki:kx450f | KX450F | KX450F 四冲程场地越野（停产） | KX450F 四衝程場地越野（停產） | KX450F | class:disp:600cc | body:motocross | pt:ice | discontinued | 2006–2017 | 449cc四冲程场地越野赛车，KX450的F命名初代，2019年去F简化为KX450，川崎四冲越野旗舰 |
| model:kawasaki:kx450x | KX450X | KX450X 耐力越野 | KX450X 耐力越野 | KX450X | class:disp:600cc | body:enduro | pt:ice | current | 2019–present | 449cc四冲程越野赛车，KX450场地版越野化，加大油箱强化林道设定 |
| model:kawasaki:kx500 | KX500 | KX500 大单缸二冲程场地越野（停产） | KX500 大單缸二衝程場地越野（停產） | KX500 | class:disp:600cc | body:motocross | pt:ice | discontinued | 1983–2004 | 499cc二冲程单缸赛车，有史以来最强大的量产场地越野车之一，粗犷暴力，至今仍是越野迷心中的传奇 |
| model:kawasaki:kx65 | KX65 | KX65 儿童场地越野 | KX65 兒童場地越野 | KX65 | class:disp:50cc | body:motocross | pt:ice | current | 2000–present | 64cc二冲程儿童场地越野入门车，幼童越野启蒙经典 |
| model:kawasaki:kx85 | KX85 | KX85 青少年场地越野 | KX85 青少年場地越野 | KX85 | class:disp:125cc | body:motocross | pt:ice | current | 2001–present | 84cc二冲程青少年场地越野赛车，川崎越野青训代表车型 |
| model:kawasaki:kz1000 | KZ1000 | KZ1000 风冷四缸街车（停产） | KZ1000 風冷四缸街車（停產） | KZ1000 | class:disp:1000cc | body:naked | pt:ice | discontinued | 1977–1983 | Z1000的北美市场名，1015cc风冷四缸，含KZ1000 Police警用版和KZ1000E舒适版，北美Z系列销售主力 |
| model:kawasaki:meguro-s1 | Meguro S1 | Meguro S1 目黑 复古街车（2025款） | Meguro S1 目黑 復古街車（2025款） | メグロS1 | class:disp:250cc | body:naked | pt:ice | current | 2025–present | 川崎2025年目黑品牌复兴之作，233cc风冷单缸，比W230更精致的轻量复古车 |
| model:kawasaki:ninja-1000sx | Ninja 1000SX | Ninja 1000SX 运动旅行 | Ninja 1000SX 運動旅行 | ニンジャ1000SX | class:disp:1000cc | body:sport-touring | pt:ice | current | 2020–present | 公升级四缸运动旅行，电子巡航+快排+加热把手，长途神器 |
| model:kawasaki:ninja-1100sx | Ninja 1100SX / SE | Ninja 1100SX 运动旅行（2025款） | Ninja 1100SX 運動旅行（2025款） | ニンジャ1100SX | class:disp:1000cc | body:sport-touring | pt:ice | current | 2025–present | 川崎2025年全新运动旅行车，1099cc直列四缸，取代Ninja 1000SX，2026款更新配色 |
| model:kawasaki:ninja-250-400 | Ninja 250 / 300 / 400 | Ninja 小忍者 小排量跑车 | Ninja 小忍者 小排量跑車 | ニンジャ250/300/400 | class:disp:400cc | body:sport | pt:ice | current | 2008–present | 入门仿赛霸主，2018年升级Ninja400，赛事表现优异，销售冠军 |
| model:kawasaki:ninja-500 | Ninja 500 | Ninja 500 入门跑车 | Ninja 500 入門跑車 | ニンジャ500 | class:disp:600cc | body:sport | pt:ice | current | 2024–present | Ninja 400换代升级，451cc并列双缸，TFT仪表，入门跑车新标杆 |
| model:kawasaki:ninja-650 | Ninja 650 | Ninja 650 中量跑车 | Ninja 650 中量跑車 | ニンジャ650 | class:disp:600cc | body:sport | pt:ice | current | 2017–present | Z650同平台双缸跑车，全整流罩，舒适骑姿兼顾运动与旅行 |
| model:kawasaki:ninja-7-hybrid | Ninja 7 Hybrid | Ninja 7 Hybrid 混合动力仿赛（2024/2025款） | Ninja 7 Hybrid 混合動力仿賽（2024/2025款） | ニンジャ7 ハイブリッド | class:disp:600cc | body:sport | pt:hybrid | current | 2024–present | 川崎首款高性能混合动力摩托车，451cc并列双缸+48V电机，2025年登陆美国市场 |
| model:kawasaki:ninja-h2-h2r | Ninja H2 / H2R | Ninja H2/H2R 机械增压超跑 | Ninja H2/H2R 機械增壓超跑 | ニンジャH2/H2R | class:disp:1000cc | body:sport | pt:ice | current | 2015–present | 量产首台机械增压摩托，H2街道版231ps，H2R赛道版310ps，碳纤维外壳 |
| model:kawasaki:ninja-zx-14r | Ninja ZX-14R / ZZR1400 | Ninja ZX-14R 超高速旗舰（停产） | Ninja ZX-14R 超高速旗艦（停產） | ニンジャZX-14R/ZZR1400 | class:disp:1000cc | body:sport | pt:ice | discontinued | 2012–2023 | 1441cc四缸超高速旗舰，曾是最快量产摩托之一，极速超300km/h |
| model:kawasaki:ninja-zx-25r | Ninja ZX-25R | Ninja ZX-25R 四缸250仿赛 | Ninja ZX-25R 四缸250仿賽 | ニンジャZX-25R | class:disp:250cc | body:sport | pt:ice | current | 2020–present | 249cc直列四缸高转小排量仿赛，转速可达17000rpm，亚洲市场专属 |
| model:kawasaki:ninja-zx-4rr | Ninja ZX-4RR | Ninja ZX-4RR 四缸仿赛 | Ninja ZX-4RR 四缸仿賽 | ニンジャZX-4RR | class:disp:400cc | body:sport | pt:ice | current | 2023–present | 399cc直列四缸高转仿赛，转速可达15000rpm，400cc四缸复活之作 |
| model:kawasaki:s1-s2-s3 | S1 250 / S2 350 / S3 400 (Mach II) | S1/S2/S3 二冲程三缸街车（停产） | S1/S2/S3 二衝程三缸街車（停產） | S1 250/S2 350/S3 400 | class:disp:250cc | body:naked | pt:ice | discontinued | 1971–1976 | 1971年起推出的二冲程三缸，Mach系列小排量版，暴力加速延续H1/H2传奇 |
| model:kawasaki:super-sherpa | Super Sherpa (KL250) | Super Sherpa KL250 林道两用车（停产） | Super Sherpa KL250 林道兩用車（停產） | スーパーシェルパ | class:disp:250cc | body:dual-sport | pt:ice | discontinued | 1997–2004 | 249cc风冷单缸林道两用车，低座高+窄车身，操控轻巧，山区探险/乡村通勤的可靠伙伴 |
| model:kawasaki:versys | Versys 650 / 1000 | Versys 探险多功能 | Versys 探險多功能 | バーシス650/1000 | class:disp:600cc | body:adventure | pt:ice | current | 2007–present | 多功能探险车，双缸/四缸双平台，17寸公路取向，城市+长途皆宜 |
| model:kawasaki:versys-1100 | Versys 1100 / SE | Versys 1100 探险车（2025款） | Versys 1100 探險車（2025款） | バーシス1100 | class:disp:1000cc | body:adventure | pt:ice | current | 2025–present | 川崎2025年全新公升级ADV，1099cc直列四缸，取代Versys 1000，SE版配电子控制悬挂 |
| model:kawasaki:versys-x-300 | Versys-X 300 | Versys-X 300 入门探险 | Versys-X 300 入門探險 | バーシスX300 | class:disp:400cc | body:adventure | pt:ice | current | 2017–present | 296cc并列双缸入门ADV，配边箱支架，低扭平顺，新手长途利器 |
| model:kawasaki:vulcan | Vulcan S / Vulcan 900 / 1700 | Vulcan 火神 巡航车 | Vulcan 火神 巡航車 | バルカン S/900/1700 | class:disp:1000cc | body:cruiser | pt:ice | current | 2015–present | 美式巡航系列，Vulcan S 650cc并列双缸（EN650），900/1700 V缸大巡航 |
| model:kawasaki:vulcan-1500-1600-2000 | Vulcan 1500 / 1600 / 2000 | Vulcan 火神 1500/1600/2000 大巡航（停产） | Vulcan 火神 1500/1600/2000 大巡航（停產） | バルカン1500/1600/2000 | class:disp:1000cc | body:cruiser | pt:ice | discontinued | 1987–2010 | V缸大巡航，VN1500于1987年推出，2002年VN1600接棒，2003年旗舰VN2000以2053cc登场 |
| model:kawasaki:vulcan-1700 | Vulcan 1700 | Vulcan 1700 大巡航（停产） | Vulcan 1700 大巡航（停產） | バルカン1700 | class:disp:1000cc | body:cruiser | pt:ice | discontinued | 2009–2016 | 1700cc V型双缸大巡航，含经典/旅行/定制版，VN2000后继，川崎末代V缸大排量巡航 |
| model:kawasaki:vulcan-750-800 | Vulcan 750 / 800 | Vulcan 火神 750/800 巡航（停产） | Vulcan 火神 750/800 巡航（停產） | バルカン750/800 | class:disp:750cc | body:cruiser | pt:ice | discontinued | 1986–2006 | 美式巡航，VN750于1986年推出轴传动V缸，VN800于1995年加入，川崎巡航车中坚力量 |
| model:kawasaki:vulcan-drifter-1500 | Vulcan Drifter 1500 | Vulcan Drifter 1500 大复古巡航（停产） | Vulcan Drifter 1500 大復古巡航（停產） | バルカンドリフター1500 | class:disp:1000cc | body:cruiser | pt:ice | discontinued | 1999–2003 | 1470cc V型双缸大排量复古巡航，Drifter 800的大哥级，Indian Scout复古风格，美式巡航复古潮流代表 |
| model:kawasaki:vulcan-drifter-800 | Vulcan Drifter 800 | Vulcan Drifter 800 复古巡航（停产） | Vulcan Drifter 800 復古巡航（停產） | バルカンドリフター800 | class:disp:750cc | body:cruiser | pt:ice | discontinued | 1999–2001 | 805cc V型双缸复古巡航，致敬1940年代Indian Scout风格，全车镀铬+复古大灯，情怀之作 |
| model:kawasaki:vulcan-mean-streak | Vulcan Mean Streak | Vulcan Mean Streak 运动巡航（停产） | Vulcan Mean Streak 運動巡航（停產） | バルカンミーンストリーク | class:disp:1000cc | body:cruiser | pt:ice | discontinued | 2002–2008 | Vulcan 1500/1600为基础的运动巡航车，V缸大排量+运动化悬挂/刹车/轮胎，美式性能巡航先驱 |
| model:kawasaki:w1 | W1 | W1 复古并列双缸（停产） | W1 復古並列雙缸（停產） | W1 | class:disp:600cc | body:naked | pt:ice | discontinued | 1966–1975 | 624cc风冷并列双缸，1966年问世致敬英国车，川崎复古W系列鼻祖 |
| model:kawasaki:w2 | W2 (650SS) | W2 650SS 并列双缸街车（停产） | W2 650SS 並列雙缸街車（停產） | W2 (650SS) | class:disp:600cc | body:naked | pt:ice | discontinued | 1968–1971 | W1的升级版，624cc风冷并列双缸，电启动标配，W系列从英国车模仿到自主进化的关键一步 |
| model:kawasaki:w230 | W230 | W230 轻量复古街车（2025款） | W230 輕量復古街車（2025款） | W230 | class:disp:250cc | body:naked | pt:ice | current | 2025–present | 川崎2025年全新轻量级复古车，233cc风冷单缸，致敬1965年W1，与KLX230同平台 |
| model:kawasaki:w650 | W650 | W650 复古街车（停产） | W650 復古街車（停產） | W650 | class:disp:600cc | body:naked | pt:ice | discontinued | 1999–2007 | 675cc风冷并列双缸复古街车，W800前身，2000年代咖啡复古风潮代表 |
| model:kawasaki:w800 | W800 | W800 复古并列双缸 | W800 復古並列雙缸 | W800 | class:disp:750cc | body:naked | pt:ice | current | 2019–present | W系列气冷并列双缸复古，773cc，致敬1960年代W1/W3，Street/Cafe双版本 |
| model:kawasaki:z-h2 | Z H2 | Z H2 机械增压街车 | Z H2 機械增壓街車 | Z H2 | class:disp:1000cc | body:naked | pt:ice | current | 2020–present | 全球量产唯一机械增压街车，998cc增压200ps，Z系列旗舰 |
| model:kawasaki:z1 | Z1 900 | Z1 900 传奇四缸街车（停产） | Z1 900 傳奇四缸街車（停產） | Z1 | class:disp:1000cc | body:naked | pt:ice | discontinued | 1972–1976 | 903cc风冷四缸，1972年问世震惊世界，日系四缸街车始祖，传奇Z系列起点 |
| model:kawasaki:z1000-2003 | Z1000 (2003–2020) | Z1000 现代四缸街车（停产） | Z1000 現代四缸街車（停產） | Z1000 | class:disp:1000cc | body:naked | pt:ice | discontinued | 2003–2020 | 953cc水冷四缸现代街车，2003年以Z1000之名复活，2014年大改款激进设计，2020年Z900接替，Z家族现代旗舰 |
| model:kawasaki:z1000-mkii | Z1000 MkII | Z1000 MkII 公升级四缸街车（停产） | Z1000 MkII 公升級四缸街車（停產） | Z1000 MkII | class:disp:1000cc | body:naked | pt:ice | discontinued | 1977–1979 | Z1000的改进版，1015cc风冷四缸，强化曲轴和变速箱，Z1/Z1000系列的终极进化 |
| model:kawasaki:z1000-z1r | Z1000 / Z1-R | Z1000/Z1-R 公升级四缸街车（停产） | Z1000/Z1-R 公升級四缸街車（停產） | Z1000/Z1-R | class:disp:1000cc | body:naked | pt:ice | discontinued | 1977–1981 | Z1后继，1015cc风冷四缸，1978年推出带小整流罩的Z1-R运动版，川崎公升级街车经典 |
| model:kawasaki:z1000r-eddie-lawson | Z1000R (Eddie Lawson Replica) | Z1000R Eddie Lawson纪念版（停产） | Z1000R Eddie Lawson紀念版（停產） | Z1000R エディ・ローソンレプリカ | class:disp:1000cc | body:naked | pt:ice | discontinued | 1984–1986 | Eddie Lawson冠军纪念版，998cc风冷四缸，蓝色车身+荧光绿拉花，双圆灯设计，极具收藏价值 |
| model:kawasaki:z1100 | Z1100 / Z1100 SE | Z1100 公升级街车（2026款） | Z1100 公升級街車（2026款） | Z1100 | class:disp:1000cc | body:naked | pt:ice | current | 2026–present | 川崎2026年全新公升级街车，1099cc直列四缸，基于Ninja 1100SX平台，2025年9月发布 |
| model:kawasaki:z1100-1981 | Z1100 | Z1100 风冷四缸街车（停产） | Z1100 風冷四缸街車（停產） | Z1100 | class:disp:1000cc | body:naked | pt:ice | discontinued | 1981–1984 | 1089cc风冷四缸，Z系列最大排量风冷车型，SE版配双前碟刹+铸轮，Z1/Z1000血统的排量巅峰 |
| model:kawasaki:z1100gp | Z1100GP | Z1100GP 运动街车（停产） | Z1100GP 運動街車（停產） | Z1100GP | class:disp:1000cc | body:naked | pt:ice | discontinued | 1983–1985 | Z1100的运动版，1089cc风冷四缸，配小风挡和更运动化的悬挂，GPz系列的先驱 |
| model:kawasaki:z125-pro | Z125 Pro | Z125 Pro 迷你街车 | Z125 Pro 迷你街車 | Z125 PRO | class:disp:125cc | body:mini | pt:ice | current | 2016–present | 125cc迷你街车，与Grom同级竞争，12寸小轮，改装玩乐属性强 |
| model:kawasaki:z2-750rs | Z2 (750RS) | Z2 750RS 风冷四缸街车（停产） | Z2 750RS 風冷四缸街車（停產） | Z2 (750RS) | class:disp:750cc | body:naked | pt:ice | discontinued | 1973–1975 | 日本本土专属Z系列，738cc风冷四缸，Z1的日本国内版，因法规限制排量降至750cc，日版Z系列传奇之始 |
| model:kawasaki:z250-z400 | Z250 / Z300 / Z400 | Z250/400 小排量街车 | Z250/400 小排量街車 | Z250/Z400 | class:disp:400cc | body:naked | pt:ice | current | 2013–present | 川崎小排量双缸街车，Z家族设计语言，2019年升级399cc Z400 |
| model:kawasaki:z300 | Z300 | Z300 小排量街车（停产） | Z300 小排量街車（停產） | Z300 | class:disp:400cc | body:naked | pt:ice | discontinued | 2015–2018 | 296cc并列双缸小排量街车，Ninja 300同平台，Z250的排量升级版，Z家族入门级 |
| model:kawasaki:z400-z500 | Z400 / Z500 | Z400/Z500 风冷四缸街车（停产） | Z400/Z500 風冷四缸街車（停產） | Z400/Z500 | class:disp:400cc | body:naked | pt:ice | discontinued | 1979–1983 | 398cc/498cc风冷四缸街车，1979年推出，Z系列中小排量代表，四缸小型化的启蒙之作 |
| model:kawasaki:z500 | Z500 | Z500 入门街车 | Z500 入門街車 | Z500 | class:disp:600cc | body:naked | pt:ice | current | 2024–present | Ninja 500同平台街车版，451cc双缸，Z家族设计语言，新手友好 |
| model:kawasaki:z650 | Z650 | Z650 中量级街车 | Z650 中量級街車 | Z650 | class:disp:600cc | body:naked | pt:ice | current | 2017–present | 649cc并列双缸，Z系列中流砥柱，2020年大改款电子油门+TFT仪表 |
| model:kawasaki:z650-1976 | Z650 (Z650A) | Z650 风冷四缸街车（停产） | Z650 風冷四缸街車（停產） | Z650 | class:disp:600cc | body:naked | pt:ice | discontinued | 1976–1983 | 652cc风冷四缸街车，1976年问世，Z系列中排量始祖，轻快灵活的畅销经典 |
| model:kawasaki:z7-hybrid | Z7 Hybrid | Z7 Hybrid 混合动力街车（2024/2025款） | Z7 Hybrid 混合動力街車（2024/2025款） | Z7ハイブリッド | class:disp:600cc | body:naked | pt:hybrid | current | 2024–present | Ninja 7 Hybrid街车版，451cc双缸+48V电机，e-Boost电子增压功能 |
| model:kawasaki:z750-1977 | Z750 (Z750A) | Z750 风冷四缸街车（停产） | Z750 風冷四缸街車（停產） | Z750 | class:disp:750cc | body:naked | pt:ice | discontinued | 1977–1981 | 738cc风冷四缸街车，1977年推出，Z系列750级别奠基之作 |
| model:kawasaki:z800 | Z800 | Z800 中量级四缸街车（停产） | Z800 中量級四缸街車（停產） | Z800 | class:disp:750cc | body:naked | pt:ice | discontinued | 2013–2017 | 806cc水冷四缸街车，Z750的后继者，Z900的前身，凶悍的Z家族设计语言开山之作 |
| model:kawasaki:z900 | Z900 | Z900 四缸街车 | Z900 四缸街車 | Z900 | class:disp:750cc | body:naked | pt:ice | current | 2017–present | 948cc直列四缸，Z系列四缸主力，性价比公升以下最强音 |
| model:kawasaki:z900rs | Z900RS | Z900RS 复古四缸街车 | Z900RS 復古四缸街車 | Z900RS | class:disp:750cc | body:naked | pt:ice | current | 2018–present | 致敬1972年Z1的复古街车，948cc四缸，Cafe版配猪头罩，经典与现代结合 |
| model:kawasaki:zephyr | Zephyr 400 / 550 / 750 / 1100 | Zephyr 西风 复古街车（停产） | Zephyr 西風 復古街車（停產） | ゼファー400/550/750/1100 | class:disp:400cc | body:naked | pt:ice | discontinued | 1989–2005 | 1989年Zephyr 400率先问世，掀起日本复古街车热潮，风冷四缸血统，ZRX前身，Zephyr 400延续至2005年 |
| model:kawasaki:zrx1100-zrx1200 | ZRX1100 / ZRX1200 | ZRX 大ZRX 复古街车（停产） | ZRX 大ZRX 復古街車（停產） | ZRX1100/ZRX1200 | class:disp:1000cc | body:naked | pt:ice | discontinued | 1997–2016 | ZRX1100/1200复古风格四缸街车，气冷发动机，肌肉线条经典 |
| model:kawasaki:zrx400 | ZRX400 | ZRX400 复古四缸街车（停产） | ZRX400 復古四缸街車（停產） | ZRX400 | class:disp:400cc | body:naked | pt:ice | discontinued | 1993–2008 | 399cc水冷四缸复古街车，ZRX家族日本本土400cc版本，Zephyr后继，大ZRX的缩小版 |
| model:kawasaki:zx-10-1988 | ZX-10 | ZX-10 公升仿赛（停产） | ZX-10 公升仿賽（停產） | ZX-10 | class:disp:1000cc | body:sport | pt:ice | discontinued | 1988–1990 | 997cc水冷四缸仿赛，ZX-10名号初代，公升级性能利器 |
| model:kawasaki:zx-10r-zx-10rr | ZX-10R / ZX-10RR | ZX-10R/RR 旗舰仿赛 | ZX-10R/RR 旗艦仿賽 | ZX-10R/ZX-10RR | class:disp:1000cc | body:sport | pt:ice | current | 2016–present | WSBK五冠王，公升级四缸仿赛，RR限量版配Marchesini锻造轮+赛道套件 |
| model:kawasaki:zx-12r | Ninja ZX-12R | ZX-12R 超高速旗舰（停产） | ZX-12R 超高速旗艦（停產） | ニンジャZX-12R | class:disp:1000cc | body:sport | pt:ice | discontinued | 2000–2006 | 1199cc水冷四缸旗舰，2000年推出，单体车架，极速直逼300km/h，与铃木隼争锋的巅峰之作 |
| model:kawasaki:zx-14 | Ninja ZX-14 | Ninja ZX-14 超高速旗舰（停产） | Ninja ZX-14 超高速旗艦（停產） | ニンジャZX-14 | class:disp:1000cc | body:sport | pt:ice | discontinued | 2006–2011 | 1352cc水冷四缸超高速旗舰，接替ZX-12R，2006年推出，2012年升级为ZX-14R（1441cc） |
| model:kawasaki:zx-6r-636 | ZX-6R (636) | ZX-6R 636 中量级仿赛 | ZX-6R 636 中量級仿賽 | ZX-6R 636 | class:disp:600cc | body:sport | pt:ice | current | 2002–present | 636cc特立独行中量级四缸仿赛，比同级排量略大，赛道/街道两相宜 |
| model:kawasaki:zx-7-zxr750 | ZXR750 / Ninja ZX-7 | ZXR750/ZX-7 四缸仿赛（停产） | ZXR750/ZX-7 四缸仿賽（停產） | ZXR750 | class:disp:750cc | body:sport | pt:ice | discontinued | 1988–2003 | 748cc水冷四缸仿赛，1988年ZXR750首发，北美市场称Ninja ZX-7，1996年进化ZX-7R延续至2003年 |
| model:kawasaki:zx-9r | Ninja ZX-9R | ZX-9R 公升仿赛（停产） | ZX-9R 公升仿賽（停產） | ニンジャZX-9R | class:disp:1000cc | body:sport | pt:ice | discontinued | 1994–2003 | 899cc水冷四缸仿赛，1994年推出，2003年停产前长期担任川崎当家超跑 |
| model:kawasaki:zxr400 | ZXR400 | ZXR400 四缸仿赛（停产） | ZXR400 四缸仿賽（停產） | ZXR400 | class:disp:400cc | body:sport | pt:ice | discontinued | 1989–1998 | 398cc水冷四缸仿赛，1989年问世，圆形双灯+管状进气道，400cc赛车复刻巅峰之作 |
| model:kawasaki:zzr1100 | ZZR1100 | ZZR1100 高速旗舰（停产） | ZZR1100 高速旗艦（停產） | ZZR1100 | class:disp:1000cc | body:sport-touring | pt:ice | discontinued | 1990–2001 | 1052cc水冷四缸，90年代初最快量产车，极速超300km/h先驱 |
| model:kawasaki:zzr1200 | ZZR1200 | ZZR1200 高速运动旅行（停产） | ZZR1200 高速運動旅行（停產） | ZZ-R1200 | class:disp:1000cc | body:sport-touring | pt:ice | discontinued | 2002–2006 | 1164cc水冷四缸高速运动旅行车，ZZR1100后继，轴传动+铝制车架，极速超280km/h |
| model:kawasaki:zzr250 | ZZR250 | ZZR250 运动旅行（停产） | ZZR250 運動旅行（停產） | ZZ-R250 | class:disp:250cc | body:sport-touring | pt:ice | discontinued | 1988–1997 | 248cc水冷四缸运动旅行车，ZZR家族最小排量，高转速四缸引擎，日本/澳洲市场专属 |
| model:kawasaki:zzr400 | ZZR400 | ZZR400 运动旅行（停产） | ZZR400 運動旅行（停產） | ZZ-R400 | class:disp:400cc | body:sport-touring | pt:ice | discontinued | 1990–2005 | 398cc水冷四缸运动旅行车，ZZR400于1990年推出，日本本土400cc市场长销经典，四缸高转声浪迷人 |
| model:kawasaki:zzr600 | ZZR600 | ZZR600 运动旅行（停产） | ZZR600 運動旅行（停產） | ZZ-R600 | class:disp:600cc | body:sport-touring | pt:ice | discontinued | 1990–2008 | 599cc水冷四缸运动旅行车，1990年推出，ZZ-R家族中量级，长寿热销近20年 |

### 4.LK (6款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:lk:318-lk250t | 318 LK250T | 318 LK250T 大踏板 | 318 LK250T 大踏板 | 318 LK250T | class:disp:250cc | body:maxi-scooter | pt:ice | current | 2020–present | 力刻318 LK250T，250cc版本大踏板，与300版本同平台，价格更亲民 |
| model:lk:318-lk300t | 318 LK300T | 318 LK300T 大踏板 | 318 LK300T 大踏板 | 318 LK300T | class:disp:250cc | body:maxi-scooter | pt:ice | current | 2020–present | 力刻318 LK300T，300cc大踏板，力刻进军整车市场的开山之作，以318国道命名 |
| model:lk:318gt | 318GT | 318GT 摩旅踏板 | 318GT 摩旅踏板 | 318GT | class:disp:400cc | body:maxi-scooter | pt:ice | current | 2023–present | 力刻318GT，330cc单缸水冷性能摩旅踏板，标配电动风挡、电加热手把和16升油箱 |
| model:lk:gobi-150 | Gobi 150 | 戈壁Gobi 150 跨界踏板 | 戈壁Gobi 150 跨界踏板 | ゴビ150 | class:disp:250cc | body:scooter | pt:ice | current | 2021–present | 力刻戈壁Gobi 150，150cc ADV风格跨界踏板，辐条轮加真空胎，续航达400公里 |
| model:lk:gobi-250 | Gobi 250 | 戈壁250 跨界踏板 | 戈壁250 跨界踏板 | ゴビ250 | class:disp:250cc | body:scooter | pt:ice | current | 2025–present | 力刻戈壁250，250cc ADV跨界踏板，能通勤能越野的"双修"踏板，售价15999元 |
| model:lk:jimei-108 | Jimei 108 | 及美108 复古踏板 | 及美108 復古踏板 | ジーメイ108 | class:disp:125cc | body:scooter | pt:ice | current | 2020–present | 力刻及美108，108cc复古风格踏板，原创设计颜值高，2023款新增青春版和PRO版 |

### 4.Lambretta (3款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:lambretta:g325 | G325 | G325 高端复古踏板车 | G325 高端復古踏板車 | G325 | class:disp:400cc | body:maxi-scooter | pt:ice | current | 2025–present | 325cc水冷单缸旗舰踏板，复古设计与现代配置结合，Lambretta复兴系列的高端型号 |
| model:lambretta:v-special-125 | V-Special 125 | V-Special 125 复古踏板车 | V-Special 125 復古踏板車 | Vスペシャル125 | class:disp:125cc | body:scooter | pt:ice | current | 2020–present | Lambretta品牌复兴后的首款车型，125cc复古踏板，保留经典镀铬与金属面板造型 |
| model:lambretta:x300 | X300 | X300 复古大踏板 | X300 復古大踏板 | X300 | class:disp:400cc | body:maxi-scooter | pt:ice | current | 2023–present | 276cc单缸踏板车，在印度与意大利同步生产，将经典Lambretta线条与现代动力结合 |

### 4.LiveWire (3款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:livewire:del-mar | Del Mar | Del Mar 电动街车 | Del Mar 電動街車 | デルマー | class:disp:600cc | body:naked | pt:bev | current | 2023–present | 约84马力纯电街车，Arrow中置电机平台首款车型，轻量运动化设计 |
| model:livewire:one | LiveWire One | LiveWire One 电动街车 | LiveWire One 電動街車 | ライブワイヤーワン | class:disp:600cc | body:naked | pt:bev | current | 2021–present | 源自哈雷电动实验车型，约100马力纯电街车，续航约235公里，15.4kWh电池 |
| model:livewire:s2-mulholland | S2 Mulholland | S2 Mulholland 电动街车 | S2 Mulholland 電動街車 | S2ムルホランド | class:disp:600cc | body:naked | pt:bev | current | 2024–present | 约84马力纯电街车，Del Mar同平台衍生，命名致敬洛杉矶Mulholland公路，轻量化车身 |

### 4.MV Agusta (26款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:mv-agusta:125-centomila | 125 Centomila | 125 Centomila 可靠型轻骑 | 125 Centomila 可靠型輕騎 | 125 チェントミラ | class:disp:125cc | body:naked | pt:ice | discontinued | 1959–1963 | 以可靠性著称的125cc通勤车型，广告承诺10万公里无故障，因此得名'Centomila(十万)' |
| model:mv-agusta:125-sport-se | 125 Sport SE | 125 Sport SE 运动轻骑 | 125 Sport SE 運動輕騎 | 125 スポルトSE | class:disp:125cc | body:sport | pt:ice | discontinued | 1975–1980 | 末代单缸运动车型，方角设计，配前碟刹与电子点火，1977年MV停止在自家工厂生产摩托车 |
| model:mv-agusta:125-tel | 125 TEL | 125 TEL 轻型摩托 | 125 TEL 輕型摩托 | 125 TEL | class:disp:125cc | body:naked | pt:ice | discontinued | 1949–1954 | 123.5cc单缸轻型摩托，1950年代初期畅销的入门车型，为MV品牌奠定市场基础 |
| model:mv-agusta:125-turismo-rapido | 125 Turismo Rapido | 125 Turismo Rapido 快速旅行车 | 125 Turismo Rapido 快速旅行車 | 125 ツーリズモ・ラピド | class:disp:125cc | body:touring | pt:ice | discontinued | 1954–1958 | 125cc四冲程单缸，含Turismo Rapido与Rapido Sport两版本，1950年代中期畅销车型 |
| model:mv-agusta:175-css | 175 CS / CSS | 175 CS/CSS 复古运动车（飞碟） | 175 CS/CSS 復古運動車（飛碟） | 175 CS/CSS ディスコ・ヴォランテ | class:disp:250cc | body:sport | pt:ice | discontinued | 1953–1959 | 175cc单缸四冲程顶置凸轮，MV首款量产四冲程车型，流线油箱获昵称'飞碟(Disco Volante)'，CSS为竞技版 |
| model:mv-agusta:250-raid | 250 Raid | 250 Raid 单缸长途旅行车 | 250 Raid 單缸長途旅行車 | 250 レイド | class:disp:250cc | body:touring | pt:ice | discontinued | 1956–1962 | 250cc单缸OHV四冲程，主打欧洲长途旅行，后扩展300cc版本，市场反响平平 |
| model:mv-agusta:250-turismo | 250 Turismo | 250 Turismo 单缸旅行车 | 250 Turismo 單缸旅行車 | 250 ツーリズモ | class:disp:250cc | body:touring | pt:ice | discontinued | 1947–1951 | 250cc单缸四冲程，11马力极速110km/h，MV首款250车型，三年仅生产约100台 |
| model:mv-agusta:350-b | 350 B | 350B 并列双缸运动车 | 350B 並列雙缸運動車 | 350B ビチリンドリカ | class:disp:400cc | body:sport | pt:ice | discontinued | 1970–1974 | 349cc并列双缸四冲程，MV中排量双缸时代的代表作，含Sport与Scrambler版本 |
| model:mv-agusta:350-ipotesi | 350 Ipotesi | 350 Ipotesi 先锋设计运动车 | 350 Ipotesi 先鋒設計運動車 | 350 イポテージ | class:disp:400cc | body:sport | pt:ice | discontinued | 1975–1977 | Giugiaro操刀设计，方角直线造型颠覆当时圆润潮流，铸铝轮毂配三碟刹，仅产1991台 |
| model:mv-agusta:600-quattro | 600 | 600 首款量产四缸旅行车 | 600 首款量產四缸旅行車 | 600 フォア | class:disp:600cc | body:touring | pt:ice | discontinued | 1965–1967 | 592cc横置直列四缸，世界首款量产横置四缸摩托车，轴传动，1965年米兰车展首发 |
| model:mv-agusta:750-sport | 750 Sport | 750 Sport 经典四缸跑车 | 750 Sport 經典四缸跑車 | 750 スポルト | class:disp:750cc | body:sport | pt:ice | discontinued | 1972–1974 | 743cc直列四缸DOHC，MV传奇公路四缸鼻祖，曾入选纽约古根海姆'摩托车艺术'展览 |
| model:mv-agusta:750-sport-america | 750 Sport America | 750 Sport America 美版四缸跑车 | 750 Sport America 美版四缸跑車 | 750 スポルト・アメリカ | class:disp:750cc | body:sport | pt:ice | discontinued | 1975–1977 | 790cc四缸，由美国经销商推动升级，75马力极速210km/h，仅产约540台，奢华咖啡赛车风格 |
| model:mv-agusta:850-ss-monza | 850 SS Monza | 850 SS Monza 限量四缸跑车 | 850 SS Monza 限量四缸跑車 | 850SS モンツァ | class:disp:1000cc | body:sport | pt:ice | discontinued | 1977–1978 | 837cc四缸，750 Sport America系列最终版，90马力，仅制造27台，收藏级珍品 |
| model:mv-agusta:brutale-1000 | Brutale 1000 RR | Brutale 1000 RR 公升级运动街车 | Brutale 1000 RR 公升級運動街車 | ブルターレ1000RR | class:disp:1000cc | body:naked | pt:ice | current | 2019–present | 998cc直列四缸，208马力，带气动翼设计的高性能运动街车 |
| model:mv-agusta:brutale-750-s | Brutale 750 S | Brutale 750 S 运动街车 | Brutale 750 S 運動街車 | ブルターレ 750S | class:disp:750cc | body:naked | pt:ice | discontinued | 2002–2006 | F4为基础的749.5cc四缸运动街车，Brutale系列开山之作，标志性四出排气，开启MV街车新篇章 |
| model:mv-agusta:brutale-910 | Brutale 910 | Brutale 910 运动街车 | Brutale 910 運動街車 | ブルターレ 910 | class:disp:1000cc | body:naked | pt:ice | discontinued | 2006–2008 | 910cc四缸运动街车，Brutale系列第二代，兼具暴力性能与艺术美感 |
| model:mv-agusta:dragster-800 | Dragster 800 RR | Dragster 800 RR 中量级运动街车 | Dragster 800 RR 中量級運動街車 | ドラッグスター800RR | class:disp:750cc | body:naked | pt:ice | current | 2014–present | 798cc三缸，后轮无挡泥板设计，前卫造型，MV暗黑风格街车 |
| model:mv-agusta:f3-800 | F3 800 | F3 800 中量级仿赛 | F3 800 中量級仿賽 | F3 800 | class:disp:750cc | body:sport | pt:ice | current | 2013–present | 798cc并列三缸，MV经典中量级仿赛，反向曲轴设计，2013年上市 |
| model:mv-agusta:f4 | F4 / F4 RR | F4/F4 RR 旗舰仿赛（停产） | F4/F4 RR 旗艦仿賽（停產） | F4/F4RR | class:disp:1000cc | body:sport | pt:ice | discontinued | 2013–2018 | 998cc直列四缸，MV旗舰仿赛，含F4 RR与限量F4 RC，2018年停产 |
| model:mv-agusta:f4-1000 | F4 1000 | F4 1000 超级跑车 | F4 1000 超級跑車 | F4 1000 | class:disp:1000cc | body:sport | pt:ice | discontinued | 2005–2010 | 998cc四缸，F4 750扩缸升级的公升级超跑，含S与R版本，MV进入公升时代的标志 |
| model:mv-agusta:f4-750-s | F4 750 S | F4 750 S 超级跑车 | F4 750 S 超級跑車 | F4 750S | class:disp:750cc | body:sport | pt:ice | discontinued | 2000–2004 | 径向气门四缸，MV复兴后的首款量产超跑，2004年被F4 1000取代 |
| model:mv-agusta:f4-750-serie-oro | F4 750 Serie Oro | F4 750 Serie Oro 限量超跑 | F4 750 Serie Oro 限量超跑 | F4 750 セリエ・オロ | class:disp:750cc | body:sport | pt:ice | discontinued | 1999–2002 | Tamburini设计，749.5cc四缸126马力，限量300台，碳纤维车身镁合金部件，曾在古根海姆博物馆展出 |
| model:mv-agusta:f4-tamburini | F4 Tamburini | F4 Tamburini 大师限量超跑 | F4 Tamburini 大師限量超跑 | F4 タンブリーニ | class:disp:1000cc | body:sport | pt:ice | discontinued | 2005–2006 | 998cc四缸，为致敬传奇设计师Massimo Tamburini打造的限量版F4，仅产300台 |
| model:mv-agusta:mv-98 | MV 98 | MV 98 首款量产轻骑 | MV 98 首款量產輕騎 | MV 98 | class:disp:125cc | body:naked | pt:ice | discontinued | 1946–1949 | 98cc二冲程单缸，MV Agusta首款量产车型，1945年原型亮相、1946年量产，含Turismo与Economica版本 |
| model:mv-agusta:superveloce-800 | Superveloce 800 | Superveloce 800 复古仿赛 | Superveloce 800 復古仿賽 | スーパーヴェローチェ800 | class:disp:750cc | body:sport | pt:ice | current | 2020–present | 798cc三缸，F3为基的复古仿赛，圆灯驼峰座复古赛车造型 |
| model:mv-agusta:turismo-veloce | Turismo Veloce 800 | Turismo Veloce 800 运动旅行车 | Turismo Veloce 800 運動旅行車 | トゥリズモ・ヴェローチェ800 | class:disp:750cc | body:sport-touring | pt:ice | current | 2015–present | 798cc三缸，MV首款运动旅行车，配边箱与风挡，长途舒适 |

### 4.Maico (2款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:maico:mc-250 | MC 250 | MC 250 越野摩托（停产） | MC 250 越野摩托（停產） | MC250 | class:disp:250cc | body:motocross | pt:ice | discontinued | 1966–1983 | 250cc二冲程越野赛车，1970年代Maico在motocross赛场的主战力，多次问鼎世界冠军 |
| model:maico:mc-500 | MC 500 | MC 500 越野摩托（停产） | MC 500 越野摩托（停產） | MC500 | class:disp:600cc | body:motocross | pt:ice | discontinued | 1970–1980 | 499cc二冲程大排量越野赛车，动力狂暴，1970年代motocross 500cc组别的统治者 |

### 4.Matchless (22款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:matchless:g11 | G11 | G11 双缸摩托车（停产） | G11 雙缸摩托車（停產） | G11 | class:disp:600cc | body:naked | pt:ice | discontinued | 1956–1959 | 593cc并列双缸公路车，G9的扩大排量版，与AJS Model 30同平台，AMC中期主力双缸 |
| model:matchless:g12 | G12 | G12 双缸摩托车（停产） | G12 雙缸摩托車（停產） | G12 | class:disp:750cc | body:naked | pt:ice | discontinued | 1958–1966 | 646cc并列双缸公路车，为美国市场开发，1959年改款De Luxe，与AJS Model 31同平台的最后一批Matchless双缸 |
| model:matchless:g12csr | G12CSR | G12CSR 双缸运动街车（停产） | G12CSR 雙缸運動街車（停產） | G12CSR | class:disp:750cc | body:cafe-racer | pt:ice | discontinued | 1959–1966 | G12的高性能版（Competition Sprung Roadster），646cc双缸配双化油器，1960年代初英国咖啡赛车文化代表 |
| model:matchless:g15 | G15 | G15 双缸摩托车（停产） | G15 雙缸摩托車（停產） | G15 | class:disp:750cc | body:naked | pt:ice | discontinued | 1963–1969 | 745cc并列双缸，搭载Norton Atlas发动机，G15系列以Matchless/AJS/Norton三种品牌销售，AMC末期旗舰 |
| model:matchless:g15cs | G15CS | G15CS 双缸攀爬越野（停产） | G15CS 雙缸攀爬越野（停產） | G15CS | class:disp:750cc | body:scrambler | pt:ice | discontinued | 1963–1969 | G15系列的街道攀爬版，745cc Norton Atlas发动机，面向美国市场的street scrambler |
| model:matchless:g2 | G2 | G2 轻量单缸摩托车（停产） | G2 輕量單缸摩托車（停產） | G2 | class:disp:250cc | body:naked | pt:ice | discontinued | 1958–1966 | 248cc轻量单缸公路车，与AJS Model 14同平台，1958年加入AMC轻量级系列的入门车型 |
| model:matchless:g2cs | G2CS | G2CS 轻量单缸攀爬（停产） | G2CS 輕量單缸攀爬（停產） | G2CS | class:disp:250cc | body:scrambler | pt:ice | discontinued | 1959–1966 | G2的竞赛攀爬版，248cc单缸，与AJS Model 14CS同平台，AMC轻量级越野车型 |
| model:matchless:g3 | G3 | G3 单缸摩托车（停产） | G3 單缸摩托車（停產） | G3 | class:disp:400cc | body:naked | pt:ice | discontinued | 1935–1940 | 349cc单缸摩托车，战前Matchless主力，衍生出二战军用G3L并奠定战后单缸系列基础 |
| model:matchless:g3l | G3L | G3L 单缸军用摩托 | G3L 單缸軍用摩托 | G3L | class:disp:400cc | body:naked | pt:ice | discontinued | 1941–1955 | 二战盟军主力军用摩托，349cc单缸，首创Teledraulic油压伸缩前叉，战后转民用并服役至1950年代 |
| model:matchless:g3ls | G3LS | G3LS 单缸摩托车（停产） | G3LS 單缸摩托車（停產） | G3LS | class:disp:400cc | body:naked | pt:ice | discontinued | 1948–1958 | G3L的民用弹簧车架版，350cc单缸，与AJS Model 16MS同平台，战后Matchless主力350公路车型 |
| model:matchless:g45 | G45 | G45 双缸赛车（停产） | G45 雙缸賽車（停產） | G45 | class:disp:600cc | body:sport | pt:ice | discontinued | 1952–1954 | 498cc顶置气门并列双缸厂队赛车，基于G9发动机与AJS 7R车架，1952年曼岛大奖赛夺冠后小批量生产 |
| model:matchless:g5 | G5 | G5 轻量单缸摩托车（停产） | G5 輕量單缸摩托車（停產） | G5 | class:disp:400cc | body:naked | pt:ice | discontinued | 1960–1966 | 348cc轻量单缸公路车，与AJS Model 8同平台，1960年加入AMC轻量级系列的350车型 |
| model:matchless:g50 | G50 | G50 单缸赛车（停产） | G50 單缸賽車（停產） | G50 | class:disp:600cc | body:sport | pt:ice | discontinued | 1958–1965 | 496cc顶置凸轮轴单缸赛车，英国经典赛车之一，在曼岛TT等赛事中战绩辉煌 |
| model:matchless:g80 | G80 | G80 单缸摩托车（停产） | G80 單缸摩托車（停產） | G80 | class:disp:600cc | body:naked | pt:ice | discontinued | 1946–1966 | 498cc单缸摩托车，战后Matchless最具代表性的公路车型，曾为英国警察广泛使用 |
| model:matchless:g80cs | G80CS | G80CS 单缸攀爬越野（停产） | G80CS 單缸攀爬越野（停產） | G80CS | class:disp:600cc | body:scrambler | pt:ice | discontinued | 1951–1966 | 496cc单缸竞赛攀爬车，G80的Competition Scrambler版，1950-60年代英国越野赛事主力 |
| model:matchless:g80s | G80S | G80S 单缸摩托车（停产） | G80S 單缸摩托車（停產） | G80S | class:disp:600cc | body:naked | pt:ice | discontinued | 1949–1966 | G80的弹簧车架公路版，497cc单缸，与AJS Model 18S同平台，英国警方与公务用车的常选车型 |
| model:matchless:g85cs | G85CS | G85CS 单缸越野赛车（停产） | G85CS 單缸越野賽車（停產） | G85CS | class:disp:600cc | body:scrambler | pt:ice | discontinued | 1961–1968 | 496cc顶置凸轮轴单缸越野赛车，1966年调校后最大功率41马力，Norton P11曾沿用其车架 |
| model:matchless:g9 | G9 | G9 双缸摩托车（停产） | G9 雙缸摩托車（停產） | G9 | class:disp:600cc | body:naked | pt:ice | discontinued | 1949–1959 | 498cc并列双缸公路车（Super Clubman），1949年推出的AMC首款立式双缸，与AJS Model 20同平台 |
| model:matchless:model-7 | Model 7 | Model 7 V型双缸旅行车（停产） | Model 7 V型雙缸旅行車（停產） | モデル7 | class:disp:750cc | body:touring | pt:ice | discontinued | 1912 | 770cc JAP V型双缸旅行车，配双皮带与轮毂变速，一战前Matchless定位边车牵引的豪华车型 |
| model:matchless:model-x | Model X | Model X 公升级V型双缸（停产） | Model X 公升級V型雙缸（停產） | モデルX | class:disp:1000cc | body:touring | pt:ice | discontinued | 1929–1940 | 990cc侧置气门V型双缸，1937年改版为Sports Tourist运动旅行款，可配重型边车，Brough Superior亦采购其发动机 |
| model:matchless:silver-arrow | Silver Arrow | Silver Arrow 银箭 V型双缸（停产） | Silver Arrow 銀箭 V型雙缸（停產） | シルバーアロー | class:disp:400cc | body:naked | pt:ice | discontinued | 1929–1933 | 397cc小夹角18°侧置气门V型双缸，一体式缸头设计，1929年推出的前卫车型，但市场表现不佳 |
| model:matchless:silver-hawk | Silver Hawk | Silver Hawk 银鹰 V型四缸（停产） | Silver Hawk 銀鷹 V型四缸（停產） | シルバーホーク | class:disp:600cc | body:naked | pt:ice | discontinued | 1931–1935 | 592cc顶置凸轮轴V型四缸旗舰豪华车，1930年奥林匹亚车展亮相，与Ariel Square Four齐名的英国四缸名机，仅生产约500辆 |

### 4.Montesa (2款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:montesa:cota-301rr | Cota 301RR | Cota 301RR 试验摩托 | Cota 301RR 試驗摩托 | コタ301RR | class:disp:400cc | body:enduro | pt:ice | current | 2022–present | 299cc四冲程试验摩托车，本田技术加持的Honda Montesa主力trials车型 |
| model:montesa:cota-4rt | Cota 4RT | Cota 4RT 试验摩托（停产） | Cota 4RT 試驗摩托（停產） | コタ4RT | class:disp:250cc | body:enduro | pt:ice | discontinued | 2005–2017 | 249cc四冲程试验摩托车，基于本田CRF250R发动机，曾统治世界试验锦标赛多年 |

### 4.Moto Guzzi (34款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:moto-guzzi:1000-sp | 1000 SP | 1000 SP 运动旅行车 | 1000 SP 運動旅行車 | 1000SP | class:disp:750cc | body:sport-touring | pt:ice | discontinued | 1977–1985 | 949cc横置V缸运动旅行车，全导流罩GT设计，1980年代长途旅行的标杆 |
| model:moto-guzzi:850-t | 850 T | 850 T 街车 | 850 T 街車 | 850T | class:disp:750cc | body:naked | pt:ice | discontinued | 1974–1975 | V7系列的现代化改款，844cc横置V缸，北美市场称Interceptor，T系列鼻祖 |
| model:moto-guzzi:850-t3 | 850 T3 | 850 T3 街车 | 850 T3 街車 | 850T3 | class:disp:750cc | body:naked | pt:ice | discontinued | 1975–1979 | 世界首批搭载集成式制动(linked brakes)的量产车型之一，1975年推出，T系列承前启后 |
| model:moto-guzzi:airone | Airone | Airone 苍鹭 250cc 街车 | Airone 蒼鷺 250cc 街車 | アイローネ | class:disp:250cc | body:naked | pt:ice | discontinued | 1939–1957 | 二战前后最成功的250cc单缸车型，与Falcone并称单缸双雄，军民两用，出口多个国家 |
| model:moto-guzzi:albatros | Albatros | Albatros 信天翁 250cc 赛车 | Albatros 信天翁 250cc 賽車 | アルバトロス | class:disp:250cc | body:sport | pt:ice | discontinued | 1928–1933 | 250cc GP大奖赛赛车，水滴形空气动力学车身，1920-30年代意大利轻量级赛事的王者 |
| model:moto-guzzi:alce | Alce | Alce 麋鹿 军用摩托 | Alce 麋鹿 軍用摩托 | アルチェ | class:disp:600cc | body:naked | pt:ice | discontinued | 1939–1945 | 二战期间为意大利军队生产的500cc水平单缸军用车型，结构坚固可靠，战后演化为Astore民用版 |
| model:moto-guzzi:astore | Astore | Astore 鹞鹰 500cc 街车 | Astore 鷂鷹 500cc 街車 | アストーレ | class:disp:600cc | body:naked | pt:ice | discontinued | 1949–1953 | 战后500cc单缸街车，Alce的民用演化版，注重舒适与实用性 |
| model:moto-guzzi:audace | Audace | Audace 暗黑巡航车（停产） | Audace 暗黑巡航車（停產） | アウダーチェ | class:disp:1000cc | body:cruiser | pt:ice | discontinued | 2016–2020 | 1380cc横置V缸，California暗黑Bobber版，2020年停产 |
| model:moto-guzzi:california-1400 | California 1400 | California 1400 加州1400 巡航车（停产） | California 1400 加州1400 巡航車（停產） | カリフォルニア1400 | class:disp:1000cc | body:cruiser | pt:ice | discontinued | 2013–2019 | 1380cc横置V缸，加州系列最后一代，美式风格意式巡航，2019年停产 |
| model:moto-guzzi:cardellino | Cardellino | Cardellino 金丝雀 轻便摩托 | Cardellino 金絲雀 輕便摩托 | カルデリーノ | class:disp:125cc | body:scooter | pt:ice | discontinued | 1954–1965 | 65-83cc轻便摩托车，造型轻巧可爱，1950-60年代意大利城市通勤利器 |
| model:moto-guzzi:condor | Condor | Condor 神鹰 500cc 赛车 | Condor 神鷹 500cc 賽車 | コンドル | class:disp:600cc | body:sport | pt:ice | discontinued | 1938–1940 | Carcano设计的500cc单缸赛车，Nello Pagani 1939年夺得Circuito del Lario冠军，因二战中断生产 |
| model:moto-guzzi:falcone | Falcone | Falcone 猎鹰 500cc 单缸 | Falcone 獵鷹 500cc 單缸 | ファルコーネ | class:disp:600cc | body:naked | pt:ice | discontinued | 1950–1967 | 单缸时代的巅峰之作，500cc水平单缸，意大利警察与军队长期采用，被誉为最硬核的意式单缸 |
| model:moto-guzzi:galletto | Galletto | Galletto 公鸡 大轮踏板车 | Galletto 公雞 大輪踏板車 | ガレット | class:disp:250cc | body:scooter | pt:ice | discontinued | 1950–1966 | Moto Guzzi著名大轮踏板车，160-192cc单缸，1950-60年代意大利平民出行的经典之选 |
| model:moto-guzzi:gt500-norge | GT500 Norge | GT500 Norge 长途旅行摩托 | GT500 Norge 長途旅行摩托 | GT500ノルゲ | class:disp:600cc | body:naked | pt:ice | discontinued | 1928–1930 | 1928年Giuseppe Guzzi驾驶GT500从工厂远征挪威北极圈约4000英里，测试世界首创的后摇臂弹性悬挂 |
| model:moto-guzzi:le-mans-1000 | Le Mans 1000 | Le Mans 1000 运动街车 | Le Mans 1000 運動街車 | ルマン1000 | class:disp:750cc | body:sport | pt:ice | discontinued | 1985–1991 | Le Mans系列最终章，949cc横置V缸，方形散热片加全导流罩，1985-1991年生产 |
| model:moto-guzzi:le-mans-850 | Le Mans 850 | Le Mans 850 运动街车 | Le Mans 850 運動街車 | ルマン850 | class:disp:750cc | body:sport | pt:ice | discontinued | 1975–1978 | 摩托古兹最传奇的运动车型，横置V型双缸850cc，勒芒赛命名，被誉为'意大利人的摇滚' |
| model:moto-guzzi:le-mans-iii | Le Mans III | Le Mans III 运动街车 | Le Mans III 運動街車 | ルマンIII | class:disp:750cc | body:sport | pt:ice | discontinued | 1981–1984 | Le Mans系列第三代，方形散热片设计，844cc横置V缸运动车，1981-1984年生产 |
| model:moto-guzzi:lodola | Lodola | Lodola 175cc 运动街车 | Lodola 175cc 運動街車 | ロドーラ | class:disp:250cc | body:naked | pt:ice | discontinued | 1956–1966 | 175cc运动单缸，Lodola Sport赛车版活跃于意大利本土赛事，与Zigolo同平台 |
| model:moto-guzzi:normale | Normale | Normale 经典单缸摩托 | Normale 經典單缸摩托 | ノルマーレ | class:disp:600cc | body:naked | pt:ice | discontinued | 1921–1924 | Moto Guzzi首款量产车，1921年诞生，498cc水平单缸，奠定品牌近半个世纪的单缸传统 |
| model:moto-guzzi:stelvio | Stelvio | Stelvio 斯泰尔维奥 探险车 | Stelvio 斯泰爾維奧 探險車 | ステルヴィオ | class:disp:1000cc | body:adventure | pt:ice | current | 2024–present | 1042cc横置V缸，V100同平台探险车，2024年上市，越野与公路兼顾 |
| model:moto-guzzi:stornello | Stornello | Stornello 125cc 入门街车 | Stornello 125cc 入門街車 | ストルネッロ | class:disp:125cc | body:naked | pt:ice | discontinued | 1960–1975 | 125cc入门街车，含160cc与Scrambler版本，SEIMM时代的销量主力车型 |
| model:moto-guzzi:v100-mandello | V100 Mandello | V100 Mandello 运动旅行车 | V100 Mandello 運動旅行車 | V100マンデッロ | class:disp:1000cc | body:sport-touring | pt:ice | current | 2023–present | 1042cc横置V缸，首款水冷+自适应空气动力学设计，2023年全新旗舰 |
| model:moto-guzzi:v1000-convert | V1000 Convert | V1000 Convert 自动挡旅行车 | V1000 Convert 自動擋旅行車 | V1000コンバート | class:disp:750cc | body:touring | pt:ice | discontinued | 1975–1984 | 世界首款量产自动挡摩托车，液力变矩器无需离合器换挡，949cc横置V缸 |
| model:moto-guzzi:v50 | V50 | V50 中量级街车 | V50 中量級街車 | V50 | class:disp:600cc | body:naked | pt:ice | discontinued | 1977–1986 | Tonti设计的小V缸系列，490cc轻量化车架，含V50 Monza运动版，中量级代表作 |
| model:moto-guzzi:v65 | V65 | V65 中量级街车 | V65 中量級街車 | V65 | class:disp:750cc | body:naked | pt:ice | discontinued | 1982–1987 | 643cc小V缸系列，含V65 Lario与V65 Florida巡航版，1980年代欧洲市场热销 |
| model:moto-guzzi:v7 | V7 | V7 经典横置V缸摩托 | V7 經典橫置V缸摩托 | V7 | class:disp:750cc | body:naked | pt:ice | discontinued | 1967–1977 | 1967年推出的首款横置90°V型双缸，Carcano设计，轴传动，Moto Guzzi标志性设计的起点 |
| model:moto-guzzi:v7-special | V7 Special | V7 Special 复古街车 | V7 Special 復古街車 | V7スペシャル | class:disp:750cc | body:naked | pt:ice | current | 2012–present | V7系列复古版，镀铬细节与辐条轮，经典意式风格，2021年升级853cc |
| model:moto-guzzi:v7-sport | V7 Sport | V7 Sport 运动街车 | V7 Sport 運動街車 | V7スポーツ | class:disp:750cc | body:sport | pt:ice | discontinued | 1971–1974 | Lino Tonti设计的传奇运动车，首款200km/h级量产车，五速变速箱与紧凑车架，现代运动摩托鼻祖 |
| model:moto-guzzi:v7-stone | V7 Stone | V7 Stone 复古街车 | V7 Stone 復古街車 | V7ストーン | class:disp:750cc | body:naked | pt:ice | current | 2015–present | 853cc横置V型双缸，Moto Guzzi经典系列，复古简约街车，2021年升级850cc |
| model:moto-guzzi:v750-ambassador | V750 Ambassador | V750 Ambassador 美式巡航车 | V750 Ambassador 美式巡航車 | V750アンバサダー | class:disp:750cc | body:cruiser | pt:ice | discontinued | 1968–1972 | 面向美国市场的V7系列，美式巡航风格，加州警方采购，为California的诞生铺路 |
| model:moto-guzzi:v85-tt | V85 TT | V85 TT 中量级探险车 | V85 TT 中量級探險車 | V85TT | class:disp:750cc | body:adventure | pt:ice | current | 2019–present | 853cc横置V缸，中量级探险车，致敬1985年V65 TT拉力赛车，鸟嘴设计 |
| model:moto-guzzi:v850-california | V850 California | V850 California 巡航车 | V850 California 巡航車 | V850カリフォルニア | class:disp:750cc | body:cruiser | pt:ice | discontinued | 1972–1975 | 巡航车鼻祖，1972年为洛杉矶警方打造，美式风格与横置V缸的结合，California系列的开端 |
| model:moto-guzzi:v9-bobber | V9 Bobber | V9 Bobber 巡航车 | V9 Bobber 巡航車 | V9ボバー | class:disp:750cc | body:bobber | pt:ice | current | 2016–present | 853cc横置V缸，Bobber风格，单座短尾，暗黑涂装 |
| model:moto-guzzi:zigolo | Zigolo | Zigolo 轻便摩托车 | Zigolo 輕便摩托車 | ジーゴロ | class:disp:125cc | body:scooter | pt:ice | discontinued | 1953–1966 | 98cc轻便摩托车，皮实耐用，战后意大利大众通勤的代表车型 |

### 4.Moto Morini (3款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:moto-morini:milano-1200 | Milano 1200 | Milano 1200 意式街车（停产） | Milano 1200 意式街車（停產） | ミラノ1200 | class:disp:1000cc | body:naked | pt:ice | discontinued | 2010–2018 | 1187cc V型双缸街车，意大利工程师Franco Lambertini设计，体现Moto Morini V-twin传统 |
| model:moto-morini:seiemmezzo | Seiemmezzo 6½ | Seiemmezzo 6½ 街车 | Seiemmezzo 6½ 街車 | セイエメッツォ6.5 | class:disp:750cc | body:naked | pt:ice | current | 2021–present | 649cc并列双缸复古街车，提供STR街车版与SCR攀爬版，意大利设计复兴之作 |
| model:moto-morini:x-cape-650 | X-Cape 650 | X-Cape 650 探险车 | X-Cape 650 探險車 | Xケープ650 | class:disp:750cc | body:adventure | pt:ice | current | 2021–present | 649cc并列双缸探险车，复兴后的Moto Morini主力ADV，兼顾公路与越野 |

### 4.Münch (2款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:munch:mammut-1200 | Mammut 1200 | Mammut 1200 巨型旅行车（停产） | Mammut 1200 巨型旅行車（停產） | マンムート1200 | class:disp:1000cc | body:touring | pt:ice | discontinued | 1966–1971 | 搭载NSU 1177cc四缸汽车发动机，1960年代最大排量量产摩托，被誉为两轮巨兽 |
| model:munch:mammut-2000 | Mammut 2000 | Mammut 2000 巨型旅行车（停产） | Mammut 2000 巨型旅行車（停產） | マンムート2000 | class:disp:1000cc | body:touring | pt:ice | discontinued | 1976–1980 | 搭载NSU 1977cc四缸发动机，排量近2升的终极两轮巨兽，Münch品牌巅峰之作 |

### 4.NSU (2款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:nsu:250-renmax | 250 Rennmax | 250 Rennmax 赛车（停产） | 250 Rennmax 賽車（停產） | 250レンマックス | class:disp:250cc | body:sport | pt:ice | discontinued | 1953–1956 | NSU 250cc双顶置凸轮轴赛车，曾创造多项250cc世界纪录，是NSU直列四缸赛车的前奏 |
| model:nsu:251-osl | 251 OSL | 251 OSL 经典摩托车（停产） | 251 OSL 經典摩托車（停產） | 251 OSL | class:disp:250cc | body:naked | pt:ice | discontinued | 1949–1951 | 战后NSU 251cc顶置气门单缸摩托车，为NSU Max系列的先驱车型 |

### 4.Niu (12款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:niu:mqi | MQi | MQi 智能电动踏板 | MQi 智能電動踏板 | MQi | class:disp:50cc | body:scooter | pt:bev | current | 2016–present | 小牛M系列电动踏板，一体化车身设计，获德国红点设计奖，中置电池布局经典之作 |
| model:niu:mqi-plus | MQi+ | MQi+ 智能电动踏板 | MQi+ 智能電動踏板 | MQi+ | class:disp:50cc | body:scooter | pt:bev | current | 2020–present | MQi升级版，更大容量电池与更强电机，智能中控大屏，城市中高端电动通勤代表 |
| model:niu:mqi-s | MQi S | MQi S 智能电动踏板 | MQi S 智能電動踏板 | MQi S | class:disp:50cc | body:scooter | pt:bev | current | 2019–present | MQi系列S版本，主打安全配置升级，LED大灯与刹车系统优化，城市通勤热销款 |
| model:niu:nqi | NQi | NQi 智能电动踏板 | NQi 智能電動踏板 | NQi | class:disp:50cc | body:scooter | pt:bev | current | 2015–present | 小牛电动首款智能锂电踏板车，N1/NQi系列，APP互联，开创国内智能电动两轮车品类 |
| model:niu:nqi-gts | NQi GTS | NQi GTS 高性能电摩 | NQi GTS 高性能電摩 | NQi GTS | class:disp:50cc | body:scooter | pt:bev | current | 2018–present | NQi系列高性能版本，双电池设计，动力更强，配置日间行车灯与智能仪表，主打续航与性能 |
| model:niu:nqix-1000 | NQiX 1000 | NQiX 1000 旗舰电摩 | NQiX 1000 旗艦電摩 | NQiX 1000 | class:disp:125cc | body:scooter | pt:bev | current | 2026–present | 小牛2026款欧版旗舰电动踏板，2025年EICMA米兰车展发布，峰值功率15.5kW，面向欧洲市场的高规格电摩 |
| model:niu:nx | NX | NX 高性能电摩 | NX 高性能電摩 | NX | class:disp:125cc | body:scooter | pt:bev | current | 2023–present | 小牛旗舰高性能电动摩托车，动力对标125cc燃油踏板，三电系统全面升级，可上摩托车牌照 |
| model:niu:nx-2026 | NX 2026 | NX 2026 高性能电摩 | NX 2026 高性能電摩 | NX 2026 | class:disp:125cc | body:scooter | pt:bev | current | 2026–present | 小牛NX 2026系列（Citi/Sport/马拉松版），主打真满把真续航、百公里不掉速，首次落地灵犀AIOS智能系统，万元级配置下放 |
| model:niu:nx-windspeed | NX Wind Speed | NX风速 电动摩托车 | NX風速 電動摩托車 | NXウインドスピード | class:disp:125cc | body:scooter | pt:bev | current | 2025–present | 小牛2025年1月上市的NX系列电动摩托车，3000W电机极速约80km/h，4.3英寸TFT全彩屏，支持导航与魔术轮旋钮控制 |
| model:niu:nxt-sport | NXT Sport | NXT Sport 智能电动踏板 | NXT Sport 智能電動踏板 | NXTスポーツ | class:disp:50cc | body:scooter | pt:bev | current | 2025–present | 小牛2025款NXT系列新国标电动踏板，2025年3月发布售价4799元起，延续NXT智能交互与模块化电池设计 |
| model:niu:sqi | SQi | SQi 跨界电动踏板 | SQi 跨界電動踏板 | SQi | class:disp:50cc | body:scooter | pt:bev | current | 2022–present | 小牛SQi跨界电动踏板，镁合金一体成型车架，机甲风格设计，定位高端个性出行 |
| model:niu:uqi | UQi | UQi 轻量电动踏板 | UQi 輕量電動踏板 | UQi | class:disp:50cc | body:scooter | pt:bev | current | 2019–present | 小牛U系列轻量化电动踏板，车身小巧灵活，可提取电池，深受都市通勤与女性用户欢迎 |

### 4.Norton (26款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:norton:atlas | Atlas 750 | Atlas 750 并列双缸街车 | Atlas 750 並列雙缸街車 | アトラス750 | class:disp:750cc | body:naked | pt:ice | discontinued | 1962–1968 | 745cc并列双缸，Norton立缸双缸中排量最大的车型，以高速时振动剧烈著称 |
| model:norton:big-four | Big Four | Big Four 侧阀单缸街车 | Big Four 側閥單缸街車 | ビッグフォー | class:disp:750cc | body:naked | pt:ice | discontinued | 1907–1954 | 633cc侧阀单缸，得名于4马力标称，生产近半个世纪，是英国著名的边三轮重型单缸，二战中大量服役 |
| model:norton:commander | Commander | Commander 转子发动机旅行摩托 | Commander 轉子發動機旅行摩托 | コマンダー | class:disp:600cc | body:sport-touring | pt:ice | discontinued | 1988–1992 | 水冷转子发动机运动旅行车，Norton转子车型的旗舰 |
| model:norton:commando-750 | Commando 750 | Commando 750 并列双缸街车 | Commando 750 並列雙缸街車 | コマンド750 | class:disp:750cc | body:naked | pt:ice | discontinued | 1968–1973 | 745cc并列双缸，诺顿防振橡胶Isolastic悬挂系统，英国摩托黄金时代的代表作 |
| model:norton:commando-850 | Commando 850 | Commando 850 并列双缸街车 | Commando 850 並列雙缸街車 | コマンド850 | class:disp:750cc | body:naked | pt:ice | discontinued | 1973–1977 | 828cc并列双缸，Commando系列最终章，1975年起配备电启动，英国最后一批经典双缸 |
| model:norton:commando-961 | Commando 961 | Commando 961 复古并列双缸街车 | Commando 961 復古並列雙缸街車 | コマンド961 | class:disp:750cc | body:naked | pt:ice | current | 2010–present | 2010年复兴的961cc并列双缸复古街车，致敬经典Commando，现由印度TVS集团旗下生产 |
| model:norton:commando-fastback | Commando Fastback | Commando Fastback 溜背造型街车 | Commando Fastback 溜背造型街車 | コマンド ファストバック | class:disp:750cc | body:naked | pt:ice | discontinued | 1969–1973 | 早期Commando的溜背尾造型版本，双座设计，造型优雅 |
| model:norton:commando-hi-rider | Commando Hi-Rider | Commando Hi-Rider 高把巡航版 | Commando Hi-Rider 高把巡航版 | コマンド ハイライダー | class:disp:750cc | body:naked | pt:ice | discontinued | 1971–1975 | 高车把运动造型版本，面向北美市场，风格更张扬 |
| model:norton:commando-interstate | Commando Interstate | Commando Interstate 旅行版 | Commando Interstate 旅行版 | コマンド インターステート | class:disp:750cc | body:touring | pt:ice | discontinued | 1972–1975 | 大油箱长途旅行版，1975年推出带电启动的Mark 3 |
| model:norton:commando-roadster | Commando Roadster | Commando Roadster 标准街车版 | Commando Roadster 標準街車版 | コマンド ロードスター | class:disp:750cc | body:naked | pt:ice | discontinued | 1970–1975 | Commando标准公路版，主打北美市场，750cc与850cc排量均有 |
| model:norton:cs1 | CS1 | CS1 顶置凸轮轴单缸赛车 | CS1 頂置凸輪軸單缸賽車 | CS1 | class:disp:600cc | body:naked | pt:ice | discontinued | 1928–1939 | 490cc OHC顶置凸轮轴单缸，CS即Camshaft之意，Norton赛车血统的源头 |
| model:norton:dominator-650ss | Dominator 650SS | Dominator 650SS 运动并列双缸 | Dominator 650SS 運動並列雙缸 | ドミネーター650SS | class:disp:750cc | body:naked | pt:ice | discontinued | 1961–1968 | 646cc并列双缸运动版，双化油器高压缩设定，咖啡馆赛车文化的经典 |
| model:norton:dominator-88 | Dominator 88 | Dominator 88 并列双缸街车 | Dominator 88 並列雙缸街車 | ドミネーター88 | class:disp:600cc | body:naked | pt:ice | discontinued | 1952–1966 | 497cc并列双缸，Featherbed车架版本，Norton双缸时代的开创者，源自1949年的Model 7 Dominator |
| model:norton:dominator-99 | Dominator 99 | Dominator 99 并列双缸街车 | Dominator 99 並列雙缸街車 | ドミネーター99 | class:disp:600cc | body:naked | pt:ice | discontinued | 1956–1962 | 596cc并列双缸，Dominator系列的600cc版本，1955年9月推出 |
| model:norton:energette | Energette | Energette 首款摩托 小型单缸 | Energette 首款摩托 小型單缸 | エネルジェット | class:disp:250cc | body:naked | pt:ice | discontinued | 1902–1906 | Norton于1902年推出的首款摩托车，搭载小型Clement发动机，被视为诺顿品牌的开端 |
| model:norton:es2 | ES2 | ES2 顶置气门单缸街车 | ES2 頂置氣門單缸街車 | ES2 | class:disp:600cc | body:naked | pt:ice | discontinued | 1928–1964 | 490cc OHV单缸，Norton生命周期最长的单缸车型之一，战后延续生产至1960年代中期 |
| model:norton:f1-sport | F1 Sport | F1 Sport 转子发动机跑车 | F1 Sport 轉子發動機跑車 | F1スポーツ | class:disp:600cc | body:sport | pt:ice | discontinued | 1992–1994 | 转子发动机仿赛，源自RCW588厂车，赛道战功赫赫 |
| model:norton:international-model-30 | International Model 30 | International Model 30 国际赛车 500cc | International Model 30 國際賽車 500cc | インターナショナル モデル30 | class:disp:600cc | body:sport | pt:ice | discontinued | 1932–1939 | 490cc OHC单缸赛车，曼岛TT常胜车型，1931至1939年间Norton九次高级TT中七次夺冠的主力 |
| model:norton:international-model-40 | International Model 40 | International Model 40 国际赛车 350cc | International Model 40 國際賽車 350cc | インターナショナル モデル40 | class:disp:400cc | body:sport | pt:ice | discontinued | 1932–1939 | 348cc OHC单缸赛车，Model 30的350cc版本，同样征战曼岛TT |
| model:norton:interpol | Interpol | Interpol 警用摩托 | Interpol 警用摩托 | インターポール | class:disp:750cc | body:touring | pt:ice | discontinued | 1970–1976 | Commando平台的警用版，带全整流罩，英国及多国警方使用 |
| model:norton:interpol-2 | Interpol 2 | Interpol 2 转子发动机警用摩托 | Interpol 2 轉子發動機警用摩托 | インターポール2 | class:disp:600cc | body:touring | pt:ice | discontinued | 1984–1988 | 588cc汪克尔转子发动机，Norton是唯一量产转子摩托车的英国厂商，供警方与RAC使用 |
| model:norton:manx-500 | Manx 500 | Manx 500 曼岛 单缸赛车 | Manx 500 曼島 單缸賽車 | マンクス500 | class:disp:600cc | body:sport | pt:ice | discontinued | 1936–1963 | 传奇单缸赛车，498cc伞齿驱动双顶置凸轮轴，配著名的Featherbed摇篮车架，私属赛车手的首选 |
| model:norton:model-16h | Model 16H | Model 16H 侧阀单缸街车 | Model 16H 側閥單缸街車 | モデル16H | class:disp:600cc | body:naked | pt:ice | discontinued | 1921–1954 | 490cc侧阀单缸，二战英军主力军用摩托车WD16H的原型，战争期间生产逾十万辆 |
| model:norton:model-18 | Model 18 | Model 18 顶置气门单缸街车 | Model 18 頂置氣門單缸街車 | モデル18 | class:disp:600cc | body:naked | pt:ice | discontinued | 1922–1954 | 490cc OHV顶置气门单缸，Norton首款顶置气门车型，1924年赢得曼岛TT高级组冠军 |
| model:norton:model-50 | Model 50 | Model 50 顶置气门单缸 | Model 50 頂置氣門單缸 | モデル50 | class:disp:400cc | body:naked | pt:ice | discontinued | 1933–1939 | 348cc OHV单缸轻型街车，战后曾以新款继续生产 |
| model:norton:p11 | P11 | P11 沙漠赛车 攀爬越野 | P11 沙漠賽車 攀爬越野 | P11 | class:disp:750cc | body:scrambler | pt:ice | discontinued | 1967–1969 | Atlas 750发动机装入越野车架的出口型沙漠赛车，在北美大受欢迎 |

### 4.Piaggio (23款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:piaggio:ape-50 | Ape 50 | Ape 50 三轮货车 | Ape 50 三輪貨車 | アペ 50 | class:disp:50cc | body:trike | pt:ice | discontinued | 1948–2015 | Piaggio经典三轮运输车，1948年问世，意大利和印度市场的国民运输工具 |
| model:piaggio:ape-calessino | Ape Calessino | Ape Calessino 复古三轮车 | Ape Calessino 復古三輪車 | アペ・カレッシーノ | class:disp:250cc | body:trike | pt:ice | current | 2007–present | Ape复古风格观光版三轮车，2007年以限量版推出，2013年起量产Calessino 200，旅游市场标志车型 |
| model:piaggio:beverly-200 | Beverly 200 | Beverly 200 初代大踏板 | Beverly 200 初代大踏板 | ビバリー200 | class:disp:250cc | body:maxi-scooter | pt:ice | discontinued | 2001–2004 | Beverly初代200cc版本，2001年问世，198cc水冷LEADER发动机，开启Piaggio大踏板系列，2004年换代 |
| model:piaggio:beverly-300 | Beverly 300 | Beverly 300 大踏板 | Beverly 300 大踏板 | ビバリー300 | class:disp:400cc | body:maxi-scooter | pt:ice | current | 2018–present | 278cc大踏板，运动化设计，欧系中量级踏板代表 |
| model:piaggio:boxer | Boxer | Boxer 轻便摩托 | Boxer 輕便摩托 | ボクサー | class:disp:50cc | body:scooter | pt:ice | discontinued | 1970–1983 | 1970年推出的经典轻便摩托，Ciao同族兄弟，1983年停产并被Si取代 |
| model:piaggio:bravo | Bravo | Bravo 轻便摩托 | Bravo 輕便摩托 | ブラボー | class:disp:50cc | body:scooter | pt:ice | discontinued | 1973–2001 | Ciao家族运动款轻便摩托，1972年发布、1973年量产，带后悬挂与伸缩前叉，与Ciao同平台 |
| model:piaggio:ciao | Ciao | Ciao 轻便摩托 | Ciao 輕便摩托 | チャオ | class:disp:50cc | body:scooter | pt:ice | discontinued | 1967–2006 | 1967年问世的经典轻便摩托，49cc二冲程，欧洲最畅销通勤车型之一，部分市场以Vespa Ciao名义销售 |
| model:piaggio:grillo | Grillo | Grillo 轻便摩托 | Grillo 輕便摩托 | グリッロ | class:disp:50cc | body:scooter | pt:ice | discontinued | 1989–1996 | 1989年推出的Ciao/Si/Bravo家族轻便摩托，14英寸轮毂操控更灵活，取代Boss，1996年停产 |
| model:piaggio:hexagon | Hexagon | Hexagon 中量级大踏板 | Hexagon 中量級大踏板 | ヘキサゴン | class:disp:250cc | body:maxi-scooter | pt:ice | discontinued | 1994–2003 | 1994年推出的中量级踏板车，125-250cc水冷发动机，1990年代欧洲大轮踏板标杆，后继为X9 |
| model:piaggio:liberty-125 | Liberty 125 | Liberty 125 自由125 踏板车 | Liberty 125 自由125 踏板車 | リバティ125 | class:disp:125cc | body:scooter | pt:ice | current | 2012–present | 轻巧都市踏板，125cc，灵活省油，欧系通勤选择 |
| model:piaggio:liberty-50 | Liberty 50 | Liberty 50 自由50 踏板车（初代） | Liberty 50 自由50 踏板車（初代） | リバティ50 | class:disp:50cc | body:scooter | pt:ice | discontinued | 1997–2004 | Liberty初代50cc版本，1997年巴塞罗那车展首发，大轮踏板先驱，第一代2004年换代 |
| model:piaggio:medley-125 | Medley 125 | Medley 125 踏板车 | Medley 125 踏板車 | メドレー125 | class:disp:125cc | body:scooter | pt:ice | current | 2016–present | 125cc都市踏板，前置油箱，舒适坐垫，欧系通勤代表 |
| model:piaggio:mp3-300 | MP3 300 | MP3 300 倒三轮踏板车 | MP3 300 倒三輪踏板車 | MP3 300 | class:disp:400cc | body:trike | pt:ice | current | 2014–present | Piaggio标志性倒三轮踏板，前双轮倾斜技术，278cc，安全稳定 |
| model:piaggio:mp3-500 | MP3 500 | MP3 500 倒三轮踏板车（停产） | MP3 500 倒三輪踏板車（停產） | MP3 500 | class:disp:600cc | body:trike | pt:ice | discontinued | 2006–2017 | 493cc倒三轮大踏板，前双轮设计，2006年推出，2017年停产 |
| model:piaggio:nrg | NRG | NRG 运动小踏板 | NRG 運動小踏板 | NRG | class:disp:50cc | body:scooter | pt:ice | discontinued | 1994–2020 | 1994年发布的运动小踏板，50cc二冲程，欧洲青少年改装文化代表，2020年停产 |
| model:piaggio:piaggio-1 | Piaggio 1 | Piaggio 1 纯电踏板车 | Piaggio 1 純電踏板車 | ピアジオ1 | class:disp:50cc | body:scooter | pt:bev | current | 2021–present | Piaggio首款纯电踏板，可拆卸电池，都市短途通勤 |
| model:piaggio:sfera | Sfera | Sfera 都市踏板车 | Sfera 都市踏板車 | スフェーラ | class:disp:125cc | body:scooter | pt:ice | discontinued | 1990–1998 | 1990年发布的塑料车身踏板车，获Compasso d'Oro设计奖，125cc为Piaggio首款四冲程踏板发动机 |
| model:piaggio:si | Si | Si 轻便摩托 | Si 輕便摩托 | シー | class:disp:50cc | body:scooter | pt:ice | discontinued | 1978–2001 | 1978年发布的轻便摩托，Boxer换代车型，伸缩前叉加后单避震，长期畅销至2001年 |
| model:piaggio:skipper | Skipper | Skipper 紧凑型踏板车 | Skipper 緊湊型踏板車 | スキッパー | class:disp:125cc | body:scooter | pt:ice | discontinued | 1993–2002 | 1993年发布的紧凑型踏板车，125/150cc二冲程，1998年改款，2002年停产，后继为Fly |
| model:piaggio:vespa-98 | Vespa 98 | Vespa 98 原版踏板车 | Vespa 98 原版踏板車 | ベスパ98 | class:disp:125cc | body:scooter | pt:ice | discontinued | 1946–1948 | 1946年诞生的世界首款Vespa，98cc二冲程发动机，开创全球踏板车时代，当时由Piaggio生产销售 |
| model:piaggio:x7-300 | X7 300 | X7 300 运动大踏板 | X7 300 運動大踏板 | X7 300 | class:disp:400cc | body:maxi-scooter | pt:ice | discontinued | 2007–2012 | 2007年推出的运动大踏板，278cc Quasar电喷发动机，欧洲市场2012年停产，2021年在中国由宗申合作复产 |
| model:piaggio:x9-500 | X9 500 | X9 500 大踏板 | X9 500 大踏板 | X9 500 | class:disp:600cc | body:maxi-scooter | pt:ice | discontinued | 2000–2009 | 2000年发布的大踏板旗舰，459cc四冲程水冷，X9车系顶配，2009年停产 |
| model:piaggio:zip | Zip | Zip 都市小踏板 | Zip 都市小踏板 | ジップ | class:disp:50cc | body:scooter | pt:ice | discontinued | 1992–2024 | 1992年问世的都市小踏板，欧洲畅销数十年，2024年因欧5+排放法规停产 |

### 4.Polaris (2款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:polaris:slingshot | Slingshot | Slingshot 弹弓 三轮跑车 | Slingshot 彈弓 三輪跑車 | スリングショット | class:disp:1000cc | body:trike | pt:ice | current | 2014–present | 前两轮后单轮的三轮跑车，搭载2.0L/2.3L四缸发动机，开放式座舱，Polaris旗下独特产品 |
| model:polaris:victory-octane | Victory Octane | Victory Octane 运动巡航车（停产） | Victory Octane 運動巡航車（停產） | ビクトリー・オクタン | class:disp:1000cc | body:cruiser | pt:ice | discontinued | 2016–2017 | 原Victory品牌旗下1179cc V型双缸运动巡航车，与Indian Scout同平台，随Victory品牌2017年停产而终结 |

### 4.Puch (2款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:puch:250-sgs | 250 SGS | 250 SGS 双缸摩托车（停产） | 250 SGS 雙缸摩托車（停產） | 250SGS | class:disp:250cc | body:naked | pt:ice | discontinued | 1953–1970 | 247cc二冲程并列双缸摩托车，奥地利制造的经典通勤与旅行车型 |
| model:puch:maxi | Maxi | Maxi 轻便摩托（停产） | Maxi 輕便摩托（停產） | マキシ | class:disp:50cc | body:scooter | pt:ice | discontinued | 1968–1987 | 50cc轻便摩托，奥地利国民通勤神器，全球销量超百万，Puch最具代表性的车型 |

### 4.QJMOTOR (25款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:qjmotor:hong125 | Hong 125 | 鸿125 通勤踏板 | 鴻125 通勤踏板 | Hong 125 | class:disp:125cc | body:scooter | pt:ice | current | 2023–present | QJMOTOR鸿系列125cc通勤踏板，LED灯光，智能无钥匙启动，主打年轻化代步市场 |
| model:qjmotor:hong150 | Hong 150 | 鸿150 水冷踏板 | 鴻150 水冷踏板 | Hong 150 | class:disp:125cc | body:scooter | pt:ice | current | 2023–present | QJMOTOR鸿系列149cc单缸水冷踏板，ADV跨界造型，TCS+ABS，城市通勤新选择 |
| model:qjmotor:hong250adv | Hong 250 ADV | 鸿250ADV 跨界踏板（2025款） | 鴻250ADV 跨界踏板（2025款） | ホン250ADV | class:disp:250cc | body:scooter | pt:ice | current | 2025–present | QJMOTOR 2025款跨界踏板，250cc水冷单缸，机甲风格外观，全地形胎加TCS，售价15999元 |
| model:qjmotor:hong250adv-x | Hong 250 ADV-X | 鸿250ADV-X 硬核跨界踏板（2025款） | 鴻250ADV-X 硬核跨界踏板（2025款） | ホン250ADV-X | class:disp:250cc | body:scooter | pt:ice | current | 2025–present | QJMOTOR 2025款硬核跨界踏板，250cc水冷，越野配置更强，售价19999元，活动到手价18999元 |
| model:qjmotor:sai250mini-2026 | Sai 250 Mini (2026) | 赛250mini 入门仿赛（2026款） | 賽250mini 入門仿賽（2026款） | サイ250mini | class:disp:250cc | body:sport | pt:ice | current | 2026–present | QJMOTOR 2026款入门级仿赛，250cc，焕色设计针对新手与小个子摩友，售价15999元 |
| model:qjmotor:sai450 | SRK 450 (Sai 450) | 赛450 中量级仿赛 | 賽450 中量級仿賽 | SRK 450 | class:disp:400cc | body:sport | pt:ice | current | 2023–present | QJMOTOR赛系列中量级仿赛，450cc并列双缸，270度曲轴，赛事化外观，主打运动性能 |
| model:qjmotor:sai450amt | SRK 450 AMT (Sai 450 AMT) | 赛450 AMT 自动挡仿赛（2025款） | 賽450 AMT 自動擋仿賽（2025款） | サイ450AMT | class:disp:400cc | body:sport | pt:ice | current | 2025–present | QJMOTOR 2025年春季发布会推出的自动挡仿赛，450cc并列双缸，搭载AMT自动变速箱，新手友好 |
| model:qjmotor:sai550 | SRK 550 (Sai 550) | 赛550 运动仿赛 | 賽550 運動仿賽 | SRK 550 | class:disp:600cc | body:sport | pt:ice | current | 2023–present | QJMOTOR赛系列550cc并列双缸仿赛，高转动力充沛，配置倒置前叉与径向卡钳 |
| model:qjmotor:sai550es | SRK 550 (Sai 550 ES) | 赛550ES 仿赛（2026款） | 賽550ES 仿賽（2026款） | サイ550ES | class:disp:600cc | body:sport | pt:ice | current | 2026–present | QJMOTOR 2026款中量级仿赛，549cc并列双缸，升级电子油门、双向快排与定速巡航，售价24999元 |
| model:qjmotor:sai600-2026 | Sai 600 (2026) | 赛600 四缸仿赛（2026款） | 賽600 四缸仿賽（2026款） | サイ600 | class:disp:600cc | body:sport | pt:ice | current | 2026–present | QJMOTOR 2026款四缸仿赛，680cc RS级发动机约101匹，电子油门、双向快排、三种骑行模式，售价28999元起 |
| model:qjmotor:shan250amt | SRV 250 (Shan 250 AMT) | 闪250 AMT 自动挡巡航（2025款） | 閃250 AMT 自動擋巡航（2025款） | シャン250AMT | class:disp:250cc | body:cruiser | pt:ice | current | 2025–present | QJMOTOR 2025款入门巡航，250cc单缸，国内250cc级首款6速AMT自动挡巡航车，售价19999元 |
| model:qjmotor:shan250lv | SRV 250 LV (Shan 250 LV) | 闪250LV 复古巡航（2026款） | 閃250LV 復古巡航（2026款） | シャン250LV | class:disp:250cc | body:cruiser | pt:ice | current | 2026–present | QJMOTOR 2026款复古巡航，250cc，轻量化长轴距设计，复古圆灯造型，售价17999元 |
| model:qjmotor:shan300s | SRV 300 (Shan 300S) | 闪300S 巡航车 | 閃300S 巡航車 | SRV 300 | class:disp:250cc | body:cruiser | pt:ice | current | 2022–present | QJMOTOR闪系列296cc V型双缸巡航，美式Bobber风格，小排量巡航销量冠军 |
| model:qjmotor:shan350 | SRV 350 (Shan 350) | 闪350 复古巡航 | 閃350 復古巡航 | SRV 350 | class:disp:250cc | body:cruiser | pt:ice | current | 2022–present | QJMOTOR闪系列343cc V型双缸巡航，圆灯圆表复古造型，皮带传动高配版可选 |
| model:qjmotor:shan600 | SRV 600 (Shan 600) | 闪600 巡航车 | 閃600 巡航車 | SRV 600 | class:disp:600cc | body:cruiser | pt:ice | current | 2023–present | QJMOTOR闪系列561cc V型双缸巡航，肌肉感外观，轴传动，国产中大排量巡航新贵 |
| model:qjmotor:shan600v4 | SRV 600 V4 (Shan 600 V4) | 闪600V4 运动巡航（2025款） | 閃600V4 運動巡航（2025款） | シャン600V4 | class:disp:600cc | body:cruiser | pt:ice | current | 2025–present | QJMOTOR 2025年发布的V4运动巡航，561cc 90度V型四缸，AMT版售价32999元，2026款升级Marzocchi减震售价29999元 |
| model:qjmotor:shan900 | SRV 900 V (Shan 900) | 闪900 V4巡航 | 閃900 V4巡航 | シャン900 | class:disp:1000cc | body:cruiser | pt:ice | current | 2026–present | QJMOTOR 899cc V型四缸巡航，2025年米兰车展亮相，2026年正式上市，皮带传动，对标进口大贸巡航 |
| model:qjmotor:srk600 | SRK 600 (Sai 600) | 赛600 四缸仿赛 | 賽600 四缸仿賽 | SRK 600 | class:disp:600cc | body:sport | pt:ice | current | 2020–present | 钱江QJMOTOR旗舰四缸仿赛，600cc并列四缸水冷，国产四缸跑车代表，声浪浑厚 |
| model:qjmotor:xiao600 | SVT 600 (Xiao 600) | 骁600 探险车 | 驍600 探險車 | SVT 600 | class:disp:600cc | body:adventure | pt:ice | current | 2023–present | QJMOTOR骁系列554cc并列双缸ADV，原厂三箱，长行程悬挂，面向长途摩旅市场 |
| model:qjmotor:xiao750 | SVT 750 (Xiao 750) | 骁750 探险车 | 驍750 探險車 | SVT 750 | class:disp:750cc | body:adventure | pt:ice | current | 2020–present | QJMOTOR骁系列749cc并列双缸ADV，贝纳利752S同平台，国产中排量ADV主力车型 |
| model:qjmotor:yi250 | Yi 250 | 壹250 复古街车 | 壹250 復古街車 | Yi 250 | class:disp:250cc | body:scrambler | pt:ice | current | 2021–present | QJMOTOR壹系列250cc单缸复古车，复古圆形大灯与镀铬元素，入门复古街车高性价比选择 |
| model:qjmotor:yi550 | Yi 550 | 逸550 复古攀爬 | 逸550 復古攀爬 | Yi 550 | class:disp:600cc | body:scrambler | pt:ice | current | 2021–present | QJMOTOR逸系列550cc并列双缸复古车，圆灯圆表咖啡风格，高位排气攀爬元素，复古爱好者之选 |
| model:qjmotor:zhui350 | SRK 350 (Zhui 350) | 追350 运动街车 | 追350 運動街車 | SRK 350 | class:disp:250cc | body:naked | pt:ice | current | 2021–present | QJMOTOR追系列353cc并列双缸街车，高颜值外观，配置丰富，国产中量级街车热门款 |
| model:qjmotor:zhui600 | SRK 600 Street (Zhui 600) | 追600 四缸街车 | 追600 四缸街車 | SRK 600 Street | class:disp:600cc | body:naked | pt:ice | current | 2019–present | QJMOTOR追系列四缸街车，600cc并列四缸，贝纳利TNT600同平台，国产四缸街车元老 |
| model:qjmotor:zhui921 | SRK 921 (Zhui 921) | 追921 准公升级街车 | 追921 準公升級街車 | ツイ921 | class:disp:1000cc | body:naked | pt:ice | current | 2025–present | QJMOTOR 2025年9月中国摩博会上市的准公升级四缸街车，921cc并列四缸，最大功率95kW，配双向快排，追系列旗舰车型 |

### 4.Qingqi (6款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:qingqi:gixxer-155 | Gixxer 155 | 极客飒Gixxer 155 街车 | 極客颯Gixxer 155 街車 | ジクサー155 | class:disp:250cc | body:naked | pt:ice | current | 2019–present | 济南轻骑铃木极客飒Gixxer 155，155cc单缸全球同步车型，提供NK街车与SF仿赛版本 |
| model:qingqi:gs125 | GS125 | 铃木王GS125 跨骑 | 鈴木王GS125 跨騎 | GS125 | class:disp:125cc | body:naked | pt:ice | current | 1985–present | 济南轻骑铃木生产经典铃木王GS125，中国摩托车普及时代的神车，皮实耐用的一代经典 |
| model:qingqi:ue125 | UE125 | 优驿UE125 踏板车 | 優驛UE125 踏板車 | UE125 | class:disp:125cc | body:scooter | pt:ice | current | 2022–present | 济南轻骑铃木优驿UE125T，搭载铃木超级芯发动机，UU和UY之后的又一力作 |
| model:qingqi:us125 | US125 | US125 复古踏板 | US125 復古踏板 | US125 | class:disp:125cc | body:scooter | pt:ice | current | 2023–present | 济南轻骑铃木US125，125cc复古风格踏板，颜值出众配色多样，铃木超级芯动力 |
| model:qingqi:uu125 | UU125 | 优友UU125 踏板车 | 優友UU125 踏板車 | UU125 | class:disp:125cc | body:scooter | pt:ice | current | 2017–present | 济南轻骑铃木优友UU125，铃木超级芯发动机，皮实省油，外卖骑手群体的口碑神车 |
| model:qingqi:uy125 | UY125 | UY125 踏板车 | UY125 踏板車 | UY125 | class:disp:125cc | body:scooter | pt:ice | current | 2018–present | 济南轻骑铃木UY125，搭载铃木超级芯发动机，国内万元级踏板销量冠军车型之一 |

### 4.Rieju (3款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:rieju:marathon-300 | Marathon 300 | Marathon 300 试验摩托 | Marathon 300 試驗摩托 | マラソン300 | class:disp:400cc | body:enduro | pt:ice | current | 2020–present | 300cc二冲程试验摩托车(trials)，延续Rieju马拉松系列传统，竞技试验赛场常客 |
| model:rieju:mr300 | MR300 | MR300 耐力越野车 | MR300 耐力越野車 | MR300 | class:disp:400cc | body:enduro | pt:ice | current | 2021–present | 300cc二冲程耐力越野车，Rieju重返专业enduro市场的主力车型，面向竞技与林道用户 |
| model:rieju:tango-125 | Tango 125 | Tango 125 都市街车 | Tango 125 都市街車 | タンゴ125 | class:disp:125cc | body:naked | pt:ice | current | 2018–present | 125cc单缸都市街车，搭载雅马哈/Yamaha系发动机，现代简约造型，面向欧洲A1驾照骑士 |

### 4.Royal Enfield (23款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:royal-enfield:bear-650 | Bear 650 | Bear 650 熊 攀爬者 | Bear 650 熊 攀爬者 | ベア650 | class:disp:600cc | body:scrambler | pt:ice | current | 2024–present | 2024年发布的Scrambler车型，648cc并列双缸47马力，倒置前叉配19寸前轮 |
| model:royal-enfield:bullet-350 | Bullet 350 | Bullet 350 子弹 复古车 | Bullet 350 子彈 復古車 | バレット350 | class:disp:400cc | body:naked | pt:ice | current | 1932–present | 历史最悠久的连续量产摩托车，349cc单缸，2023年J平台换代，纯正英式复古血统 |
| model:royal-enfield:bullet-500 | Bullet 500 | Bullet 500 子弹 复古车 | Bullet 500 子彈 復古車 | バレット500 | class:disp:600cc | body:naked | pt:ice | discontinued | 2009–2020 | Bullet系列的500cc版本，499cc单缸，2020年与Classic 500一同因排放法规停产 |
| model:royal-enfield:classic-350 | Classic 350 | Classic 350 经典复古车 | Classic 350 經典復古車 | クラシック350 | class:disp:400cc | body:naked | pt:ice | current | 2021–present | 皇家恩菲尔德最畅销车型，349cc单缸J平台发动机，经典英伦复古外观，全球销量最高的复古车之一 |
| model:royal-enfield:classic-500 | Classic 500 | Classic 500 经典 复古车 | Classic 500 經典 復古車 | クラシック500 | class:disp:600cc | body:naked | pt:ice | discontinued | 2009–2020 | Classic系列的500cc版本，499cc单缸UCE发动机，2020年因BS6排放法规停产 |
| model:royal-enfield:classic-650 | Classic 650 | Classic 650 经典650 复古车 | Classic 650 經典650 復古車 | クラシック650 | class:disp:600cc | body:naked | pt:ice | current | 2025–present | 2025年全新Classic系列650双缸版本，648cc并列双缸47马力，向1950年代经典致敬 |
| model:royal-enfield:classic-650-125th-anniversary | Classic 650 125th Anniversary Edition | Classic 650 125周年纪念版 | Classic 650 125週年紀念版 | クラシック650 125周年記念 | class:disp:600cc | body:naked | pt:ice | current | 2026 | 2026年限量纪念版，纪念品牌创立125周年，648cc双缸，黑金复古涂装致敬1950年代 |
| model:royal-enfield:continental-gt-535 | Continental GT 535 | Continental GT 535 咖啡赛车 | Continental GT 535 咖啡賽車 | コンチネンタルGT535 | class:disp:600cc | body:cafe-racer | pt:ice | discontinued | 2013–2018 | RE现代咖啡赛车先驱，535cc单缸UCE，2018年停产，为650双缸GT让路 |
| model:royal-enfield:continental-gt-650 | Continental GT 650 | Continental GT 650 (GT650) 咖啡赛车 | Continental GT 650 (GT650) 咖啡賽車 | コンチネンタルGT650 | class:disp:600cc | body:cafe-racer | pt:ice | current | 2018–present | Interceptor 650同平台咖啡赛车，分离把，驼峰单座，油箱条纹涂装，现代Cafe Racer代表 |
| model:royal-enfield:goan-classic-350 | Goan Classic 350 | Goan Classic 350 果阿经典 Bobber巡航车 | Goan Classic 350 果阿經典 Bobber巡航車 | ゴアンクラシック350 | class:disp:400cc | body:bobber | pt:ice | current | 2024–present | 2025年全新Bobber风格车型，349cc J平台单缸，灵感源自印度果阿定制机车文化 |
| model:royal-enfield:guerrilla-450 | Guerrilla 450 | Guerrilla 450 游击者 街车 | Guerrilla 450 游擊者 街車 | ゲリラ450 | class:disp:400cc | body:naked | pt:ice | current | 2024–present | 2024年推出的现代复古街车，452cc Sherpa单缸，与Himalayan 450同平台，轻量化街车定位 |
| model:royal-enfield:himalayan-450 | Himalayan 450 / 452 | Himalayan 450 新喜马拉雅 探险车 | Himalayan 450 新喜馬拉雅 探險車 | ヒマラヤ450 | class:disp:400cc | body:adventure | pt:ice | current | 2023–present | 2023年全新换代，452cc液冷单缸40马力，21/17寸轮，以喜马拉雅山命名的探险车 |
| model:royal-enfield:himalayan-old | Himalayan | Himalayan 喜马拉雅 老款探险车 | Himalayan 喜馬拉雅 老款探險車 | ヒマラヤ(旧型) | class:disp:400cc | body:adventure | pt:ice | discontinued | 2016–2023 | 老款喜马拉雅，411cc油冷单缸LS410发动机，ADV入门性价比之选，已被450取代 |
| model:royal-enfield:hunter-350 | Hunter 350 | Hunter 350 猎人 街车 | Hunter 350 獵人 街車 | ハンター350 | class:disp:400cc | body:naked | pt:ice | current | 2022–present | RE城市街车，349cc单缸J平台，17寸合金轮，轻量化车身，东南亚和印度市场热门 |
| model:royal-enfield:interceptor-650 | Interceptor 650 | Interceptor 650 拦截者 复古双缸街车 | Interceptor 650 攔截者 復古雙缸街車 | インターセプター650 | class:disp:600cc | body:naked | pt:ice | current | 2018–present | RE双缸时代开山之作，648cc并列双缸47马力，复古街车造型，性价比极高 |
| model:royal-enfield:meteor-350 | Meteor 350 | Meteor 350 流星 巡航车 | Meteor 350 流星 巡航車 | メテオ350 | class:disp:400cc | body:cruiser | pt:ice | current | 2020–present | 入门巡航车，349cc单缸J平台，低坐高，脚前伸骑姿，Tripper导航模块首创 |
| model:royal-enfield:scram-411 | Scram 411 | Scram 411 攀爬者 | Scram 411 攀爬者 | スクラム411 | class:disp:400cc | body:scrambler | pt:ice | current | 2022–present | 基于Himalayan老款LS410发动机的Scrambler车型，19寸前轮，城市+轻度越野两用 |
| model:royal-enfield:scram-440 | Scram 440 | Scram 440 攀爬者440 | Scram 440 攀爬者440 | スクラム440 | class:disp:400cc | body:scrambler | pt:ice | current | 2025–present | 2025年全新Scrambler，443cc单缸（Himalayan 450同平台），19寸前轮，城市轻度越野两用 |
| model:royal-enfield:shotgun-650 | Shotgun 650 | Shotgun 650 霰弹650 Bobber巡航车 | Shotgun 650 霰彈650 Bobber巡航車 | ショットガン650 | class:disp:600cc | body:bobber | pt:ice | current | 2024–present | 648cc双缸Bobber风格，前后挡泥板可拆卸，原厂改装件丰富，彰显叛逆风格 |
| model:royal-enfield:standard-350 | Standard 350 | Standard 350 标准 复古车 | Standard 350 標準 復古車 | スタンダード350 | class:disp:400cc | body:naked | pt:ice | discontinued | 2009–2018 | Bullet车系中的标准版，346cc单缸UCE，配置朴素，2018年退出市场 |
| model:royal-enfield:super-meteor-650 | Super Meteor 650 | Super Meteor 650 超级流星 大巡航车 | Super Meteor 650 超級流星 大巡航車 | スーパーメテオ650 | class:disp:600cc | body:cruiser | pt:ice | current | 2022–present | RE旗舰巡航，648cc并列双缸47马力，美式复古巡航风格，USD前叉，LED灯具 |
| model:royal-enfield:thunderbird-350 | Thunderbird 350 | Thunderbird 350 雷鸟 巡航车 | Thunderbird 350 雷鳥 巡航車 | サンダーバード350 | class:disp:400cc | body:cruiser | pt:ice | discontinued | 2002–2020 | RE经典入门巡航车，349cc单缸UCE，长轴距低坐高，2020年停产被Meteor取代 |
| model:royal-enfield:thunderbird-500 | Thunderbird 500 | Thunderbird 500 雷鸟 巡航车 | Thunderbird 500 雷鳥 巡航車 | サンダーバード500 | class:disp:600cc | body:cruiser | pt:ice | discontinued | 2013–2020 | Thunderbird家族的500cc版本，499cc单缸，2020年停产 |

### 4.SWM (3款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:swm:gran-milano-440 | Gran Milano 440 | Gran Milano 440 复古攀爬车 | Gran Milano 440 復古攀爬車 | グランミラノ440 | class:disp:600cc | body:scrambler | pt:ice | current | 2016–present | 444cc单缸复古攀爬车，米兰设计风格，SWM复兴后的公路车型代表 |
| model:swm:rs-300-r | RS 300 R | RS 300 R 耐力越野车 | RS 300 R 耐力越野車 | RS300R | class:disp:400cc | body:enduro | pt:ice | current | 2015–present | 300cc四冲程单缸耐力越野车，继承Husqvarna技术血统，SWM复兴后主力越野车型 |
| model:swm:rs-450 | RS 450 | RS 450 耐力越野车 | RS 450 耐力越野車 | RS450 | class:disp:600cc | body:enduro | pt:ice | current | 2019–present | 449cc四冲程单缸耐力越野车，动力充沛，面向专业林道与耐力赛用户 |

### 4.SYM (12款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:sym:adxtg-400 | ADXTG 400 | ADXTG 400 跨界越野踏板 | ADXTG 400 跨界越野踏板 | ADXTG 400 | class:disp:400cc | body:adventure | pt:ice | current | 2025–present | 三阳2025年上市的ADV跨界踏板，399cc单缸，中置发动机与链条传动，主打轻度越野能力 |
| model:sym:drg-bt-158 | DRG BT 158 | DRG BT 158 运动踏板 | DRG BT 158 運動踏板 | DRG BT 158 | class:disp:125cc | body:scooter | pt:ice | current | 2019–present | 三阳旗舰运动踏板，158cc单缸水冷Z.R.G引擎，龙骨车架，同级运动标杆 |
| model:sym:fnx-bt-125 | FNX BT 125 | FNX BT 125 火凤凰 踏板车 | FNX BT 125 火鳳凰 踏板車 | FNX BT 125 | class:disp:125cc | body:scooter | pt:ice | current | 2018–present | 凤凰涅盘设计语言，125cc单缸水冷，ABS+TCS，三阳主力通勤踏板 |
| model:sym:formica-150 | Formica 150 (4MICA) | Formica 150 蚂蚁 跨界踏板 | Formica 150 螞蟻 跨界踏板 | フォーミカ150（4MICA） | class:disp:125cc | body:scooter | pt:ice | current | 2026–present | 三阳4MICA蚂蚁系列150cc版本，2026年1月大陆上市售价12980元，水冷发动机配TCS，多功能载货平台 |
| model:sym:husky-125-adv | Husky 125 ADV | Husky 125 ADV 哈士奇 跨界探险踏板 | Husky 125 ADV 哈士奇 跨界探險踏板 | ハスキー125 ADV | class:disp:125cc | body:scooter | pt:ice | current | 2022–present | 以哈士奇命名的跨界探险踏板，150cc单缸水冷，13寸轮，ADV外观设计 |
| model:sym:jet-sl-125 | Jet SL 125 | Jet SL 125 运动踏板 | Jet SL 125 運動踏板 | ジェットSL 125 | class:disp:125cc | body:scooter | pt:ice | current | 2020–present | 三阳Jet系列运动踏板，125cc单缸水冷，激进外观设计，台湾市场热门小踏板 |
| model:sym:jet-sl-150 | Jet SL 150 (2026) | Jet SL 150 运动踏板（2026款） | Jet SL 150 運動踏板（2026款） | ジェットSL 150（2026年型） | class:disp:125cc | body:scooter | pt:ice | current | 2026–present | 厦杏三阳2026年1月发布，150cc运动踏板售价12980元，标配德国大陆双通道ABS与TCS |
| model:sym:jet-x-150 | Jet X 150 | Jet X 150 跨界运动踏板 | Jet X 150 跨界運動踏板 | ジェットX 150 | class:disp:125cc | body:scooter | pt:ice | current | 2021–present | Jet系列跨界版，150cc单缸，SUV风格外观，高离地间隙，城市多功能踏板 |
| model:sym:krn-bt-125 | KRN BT 125 | KRN BT 125 麒麟 跨界踏板 | KRN BT 125 麒麟 跨界踏板 | KRN BT 125 | class:disp:125cc | body:scooter | pt:ice | current | 2022–present | 跨界探险风格踏板，125cc单缸，中文名麒麟，12寸轮+高避震，轻度非铺装路 |
| model:sym:maxsym-tl-508 | MaxSym TL 508 | MaxSym TL 508 大绵羊旗舰踏板 | MaxSym TL 508 大綿羊旗艦踏板 | マックスシムTL 508 | class:disp:600cc | body:maxi-scooter | pt:ice | current | 2022–present | 三阳旗舰大绵羊，508cc并列双缸45马力，铝合金双翼梁车架，长途舒适豪华 |
| model:sym:mmbcu-158 | MMBCU 158 (2025) | MMBCU 158 曼巴 运动踏板（2025款） | MMBCU 158 曼巴 運動踏板（2025款） | MMBCU 158（2025年型） | class:disp:125cc | body:scooter | pt:ice | current | 2025–present | 三阳曼巴MMBCU 158中期改款，2025年1月台湾发布，外观配置与性能细节优化，台湾踏板销量榜常青车型 |
| model:sym:ttlbt-lingui | TTLBT Lingui | 灵龟TTLBT 豪华休旅双缸踏板 | 靈龜TTLBT 豪華休旅雙缸踏板 | TTLBT リンクイ | class:disp:600cc | body:maxi-scooter | pt:ice | current | 2025–present | 三阳70周年压轴之作灵龟TTLBT，基于MaxSym TL 508平台的双缸豪华休旅踏板，2025年2月台湾上市，仿生龟甲造型配电动风挡 |

### 4.Sherco (2款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:sherco:300-se | 300 SE | 300 SE 耐力越野车 | 300 SE 耐力越野車 | 300SE | class:disp:400cc | body:enduro | pt:ice | current | 2012–present | 293cc二冲程耐力越野车，Sherco SE系列主力型号，欧洲enduro赛场上的常胜军 |
| model:sherco:450-sef | 450 SEF | 450 SEF 耐力越野车 | 450 SEF 耐力越野車 | 450SEF | class:disp:600cc | body:enduro | pt:ice | current | 2013–present | 449cc四冲程单缸耐力越野车，Sherco四冲程enduro代表作，征战世界耐力锦标赛 |

### 4.Shineray (10款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:shineray:525x | 525X | 525X 探险车 | 525X 探險車 | 525X | class:disp:600cc | body:adventure | pt:ice | current | 2025–present | 鑫源525X中量级ADV，494cc并列双缸，承袭鑫源越野基因，从环塔赛场走来，主打全能配置 |
| model:shineray:cr200 | CR200 | CR200 自动挡巡航车 | CR200 自動擋巡航車 | CR200 | class:disp:250cc | body:cruiser | pt:ice | current | 2026–present | 鑫源200cc双缸CVT自动挡巡航车，2025年米兰车展亮相并开启共创征名，2026年上市，主打入门自动挡巡航市场 |
| model:shineray:hurricane-525 | Hurricane 525 | 飓风525 边三轮 | 颶風525 邊三輪 | ハリケーン525 | class:disp:600cc | body:trike | pt:ice | current | 2025–present | 鑫源2025款轴传动边三轮，525cc双缸水冷，售价49990元，是国产首款轴传动侉子，主打硬核穿越与长途摩旅 |
| model:shineray:sc250x | SC250X Twin | SC250X 双缸ADV踏板车 | SC250X 雙缸ADV踏板車 | SC250X ツイン | class:disp:250cc | body:scooter | pt:ice | current | 2026–present | 鑫源250cc双缸跨界ADV踏板，2025米兰车展首发，湿式CVT传动配辐条轮毂，2026年国内上市，是全球罕见的250cc双缸踏板 |
| model:shineray:super-six-650 | SUPER SIX 650 | SUPER SIX 650 复古越野车 | SUPER SIX 650 復古越野車 | スーパーシックス650 | class:disp:750cc | body:enduro | pt:ice | current | 2025–present | 鑫源2025米兰车展发布的644cc风冷大单缸复古越野车，致敬SWM六日耐力赛冠军赛车，超长行程减震配前21后18辐条轮毂 |
| model:shineray:sv440-silver-bottle | SV440 Silver Bottle | SV440 银瓶 全地形复古车 | SV440 銀瓶 全地形復古車 | SV440 シルバーボトル | class:disp:600cc | body:scrambler | pt:ice | current | 2018–present | 鑫源SV440银瓶，440cc单缸电喷全地形复古车，造型硬朗，续航超过500公里 |
| model:shineray:weekend | XY400-B Weekend | 周末风XY400-B 边三轮 | 週末風XY400-B 邊三輪 | ウィークエンドXY400-B | class:disp:400cc | body:trike | pt:ice | current | 2017–present | 鑫源基于XY400棍王改款而来的复古边三轮，上市后广受复古玩家青睐 |
| model:shineray:x5 | X5 | X5 拉力探险车 | X5 拉力探險車 | X5 | class:disp:400cc | body:adventure | pt:ice | current | 2014–present | 鑫源X5，399cc单缸风油冷，2014年推出的国内首款量产长途拉力越野车，被誉为"入门ADV神车" |
| model:shineray:x6 | X6 | X6 越野车 | X6 越野車 | X6 | class:disp:250cc | body:enduro | pt:ice | current | 2016–present | 鑫源X6民用版越野车，248cc单缸水冷，轻量化车架，面向林道与场地越野爱好者 |
| model:shineray:xy400 | XY400 | XY400 复古街车 | XY400 復古街車 | XY400 | class:disp:400cc | body:naked | pt:ice | current | 2013–present | 鑫源经典400cc单缸复古街车，车友俗称"棍王"，借鉴本田CB400SS风格，是中国上市最早的一批复古车 |

### 4.Sundiro-Honda (11款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:sundiro-honda:cbf150-longtaizi | CBF150 Longtaizi | CBF150 龙太子 复古太子车 | CBF150 龍太子 復古太子車 | CBF150ロンタイズ | class:disp:125cc | body:cruiser | pt:ice | current | 2026–present | 新大洲本田25周年新品，型号SDH150-37，2026年8月6日上市，150cc复古太子巡航车，圆灯水滴油箱造型 |
| model:sundiro-honda:cbf190r | CBF190R | CBF190R 街车 | CBF190R 街車 | CBF190R | class:disp:250cc | body:naked | pt:ice | current | 2015–present | 新大洲本田CBF190R，184cc单缸运动街车，与五羊本田CB190R同平台，曾喊出"上打250、下压150" |
| model:sundiro-honda:cbf190tr | CBF190TR | CBF190TR 复古车 | CBF190TR 復古車 | CBF190TR | class:disp:250cc | body:scrambler | pt:ice | current | 2019–present | 新大洲本田CBF190TR，184cc单缸复古车型，圆灯攀爬风格，与鸷道CB190SS相呼应的复古双子星 |
| model:sundiro-honda:cbf190tr-2025 | CBF190TR (2025) | CBF190TR 复古车（2025款） | CBF190TR 復古車（2025款） | CBF190TR（2025年型） | class:disp:250cc | body:scrambler | pt:ice | current | 2025–present | 新大洲本田2025款CBF190TR，指导价降至12980元，补齐双通道ABS与滑动离合，配置全面升级 |
| model:sundiro-honda:cbf190x | CBF190X | 战鹰CBF190X 探险车 | 戰鷹CBF190X 探險車 | CBF190X | class:disp:250cc | body:adventure | pt:ice | current | 2017–present | 新大洲本田战鹰CBF190X，184cc单缸休旅探险车，鸟嘴造型，入门摩旅热门车型 |
| model:sundiro-honda:ns125la | NS125LA | NS125LA 复古踏板 | NS125LA 復古踏板 | NS125LA | class:disp:125cc | body:scooter | pt:ice | current | 2022–present | 新大洲本田NS125LA，125cc复古风格踏板车，圆润造型高颜值，国产合资复古踏板人气车型 |
| model:sundiro-honda:ns125la-2025 | NS125LA (2025) | NS125LA 复古踏板（2025款） | NS125LA 復古踏板（2025款） | NS125LA（2025年型） | class:disp:125cc | body:scooter | pt:ice | current | 2025–present | 新大洲本田2025款NS125LA复古踏板，增配降价售价10980元起，维持圆润复古造型与高颜值卖点 |
| model:sundiro-honda:ns125rx | NS125RX | NS125RX 踏板车 | NS125RX 踏板車 | NS125RX | class:disp:125cc | body:scooter | pt:ice | current | 2023–present | 新大洲本田NS125RX，承袭裂行运动基因，仿赛前脸设计，搭载本田ESP发动机 |
| model:sundiro-honda:ns150gx | NS150GX | NS150GX 跨界踏板 | NS150GX 跨界踏板 | NS150GX | class:disp:125cc | body:scooter | pt:ice | current | 2025–present | 新大洲本田首款150cc水冷踏板，2025年3月上市15980元起，ADV跨界风格，2026款降价升级至15280元起 |
| model:sundiro-honda:rx125 | RX125 | 裂行RX125 踏板车 | 裂行RX125 踏板車 | RX125 | class:disp:125cc | body:scooter | pt:ice | current | 2017–present | 新大洲本田裂行RX125，125cc运动风格踏板车，外观锐利动感，当红合资踏板之一 |
| model:sundiro-honda:wave110 | Wave 110 | Wave110 弯梁车 | Wave110 彎梁車 | ウェーブ110 | class:disp:125cc | body:underbone | pt:ice | current | 2010–present | 新大洲本田Wave110弯梁车，本田经典弯梁平台，省油耐用，城乡通勤利器 |

### 4.Suzuki (121款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:suzuki:a100 | A100 | A100 二冲程通勤车 | A100 二衝程通勤車 | A100 | class:disp:125cc | body:naked | pt:ice | discontinued | 1970–1985 | 98cc风冷二冲程单缸通勤车，结构简单，轻便省油，七十年代亚洲市场畅销经典 |
| model:suzuki:address | Address / Let's series | Address 踏板车 | Address 踏板車 | アドレス/レッツ | class:disp:125cc | body:scooter | pt:ice | current | 1992–present | 日系通勤踏板代表，50/110/125cc多排量，日本本土畅销省油 |
| model:suzuki:avenis-125 | Avenis 125 | Avenis 125 踏板车 | Avenis 125 踏板車 | アベニス125 | class:disp:125cc | body:scooter | pt:ice | current | 2022–present | 124cc单缸运动风格通勤踏板，印度市场开发，油耗低配置全 |
| model:suzuki:bandit | Bandit series | Bandit 强盗系列（停产） | Bandit 強盜系列（停產） | バンディット | class:disp:1000cc | body:naked | pt:ice | discontinued | 1989–2016 | GSX发动机街车化，250/400/600/650/1200/1250各排量，性价比街车代表 |
| model:suzuki:boulevard-intruder | Boulevard / Intruder series | Boulevard 巡航车系列 | Boulevard 巡航車系列 | ブールバード/イントルーダー | class:disp:1000cc | body:cruiser | pt:ice | current | 1985–present | 美式V缸巡航系列，M50/M90/M109R各排量，大排量肌肉巡航代表 |
| model:suzuki:burgman | Burgman 400 / 650 | Burgman 汉堡人 大踏板 | Burgman 漢堡人 大踏板 | バーグマン400/650 | class:disp:750cc | body:maxi-scooter | pt:ice | current | 1998–present | 大踏板先驱，650Executive配电动风挡+CVT手动模式，商务舒适取向 |
| model:suzuki:choinori | Choinori | Choinori 廉价通勤踏板 | Choinori 廉價通勤踏板 | チョイノリ | class:disp:50cc | body:scooter | pt:ice | discontinued | 2003–2008 | 49cc单缸廉价通勤踏板，售价仅约10万日元，极简设计极低油耗，日本本土话题车型 |
| model:suzuki:colleda-co | Colleda CO | Colleda CO 二冲程街车 | Colleda CO 二衝程街車 | コレダCO | class:disp:125cc | body:naked | pt:ice | discontinued | 1954–1955 | 1954年问世，90cc二冲程单缸，Colleda（コレダ）系列开山之作，铃木正式进军摩托车的标志 |
| model:suzuki:colleda-st | Colleda ST | Colleda ST 二冲程街车 | Colleda ST 二衝程街車 | コレダST | class:disp:125cc | body:naked | pt:ice | discontinued | 1955–1959 | 1955年首发90cc二冲程，ST1至ST6A多代演进，1950年代铃木主力车型 |
| model:suzuki:djebel-250 | DJEBEL 250 | DJEBEL 250 杰贝尔林道车 | DJEBEL 250 傑貝爾林道車 | ジェベル250 | class:disp:250cc | body:enduro | pt:ice | discontinued | 1992–1999 | 249cc水冷单缸林道两用车，沙丘越野风格设计，DR系列衍生经典 |
| model:suzuki:dr-z125 | DR-Z125 | DR-Z125 青少年越野 | DR-Z125 青少年越野 | DR-Z125 | class:disp:125cc | body:dual-sport | pt:ice | current | 2003–present | 124cc风冷单缸青少年越野车，皮实易维护，儿童越野入门热门 |
| model:suzuki:dr-z400s | DR-Z400S | DR-Z400S 林道两用车 | DR-Z400S 林道兩用車 | DR-Z400S | class:disp:400cc | body:dual-sport | pt:ice | current | 2000–present | 398cc水冷单缸林道两用车，与DR-Z400SM同平台，可上牌越野经典 |
| model:suzuki:dr-z400sm | DR-Z400SM | DR-Z400SM 超级滑胎 | DR-Z400SM 超級滑胎 | DR-Z400SM | class:disp:400cc | body:supermoto | pt:ice | current | 2005–present | 398cc单缸滑胎车，17寸公路轮，皮实耐造，滑胎改装文化经典车型 |
| model:suzuki:dr-z4s | DR-Z4S | DR-Z4S 林道两用车（2025款） | DR-Z4S 林道兩用車（2025款） | DR-Z4S | class:disp:400cc | body:dual-sport | pt:ice | current | 2025–present | 铃木2025年全新林道两用车，398cc水冷单缸，取代DR-Z400S，全新轻量化车架 |
| model:suzuki:dr-z4s-plus-2026 | DR-Z4S+ | DR-Z4S+ 林道两用车（2026款） | DR-Z4S+ 林道兩用車（2026款） | DR-Z4S+ | class:disp:400cc | body:dual-sport | pt:ice | current | 2026–present | 2026款DR-Z4S升级版，标配护杠等更多越野装备，2025年9月铃木北美发布 |
| model:suzuki:dr-z4sm | DR-Z4SM | DR-Z4SM 滑胎车（2025款） | DR-Z4SM 滑胎車（2025款） | DR-Z4SM | class:disp:400cc | body:supermoto | pt:ice | current | 2025–present | 铃木2025年全新滑胎车，398cc水冷单缸+17英寸轮毂，取代DR-Z400SM |
| model:suzuki:dr-z70 | DR-Z70 | DR-Z70 儿童迷你越野 | DR-Z70 兒童迷你越野 | DR-Z70 | class:disp:50cc | body:mini | pt:ice | current | 2006–present | 72cc儿童迷你越野车，低座高易操控，幼童越野启蒙首选 |
| model:suzuki:dr200s | DR200S | DR200S 林道两用车 | DR200S 林道兩用車 | DR200S | class:disp:250cc | body:dual-sport | pt:ice | current | 1987–present | 199cc风冷单缸林道两用车，结构简单耐造，入门越野与通勤经典 |
| model:suzuki:dr250 | DR250 | DR250 林道两用车（停产） | DR250 林道兩用車（停產） | DR250 | class:disp:250cc | body:enduro | pt:ice | discontinued | 1983–1995 | 249cc单缸林道两用车，DR系列中排量，轻便灵活的入门越野 |
| model:suzuki:dr350 | DR350 | DR350 林道两用车（停产） | DR350 林道兩用車（停產） | DR350 | class:disp:400cc | body:dual-sport | pt:ice | discontinued | 1990–1999 | 349cc风冷单缸两用车，轻量灵活，九十年代探险越野代表车型 |
| model:suzuki:dr400 | DR400 | DR400 林道两用车 | DR400 林道兩用車 | DR400 | class:disp:400cc | body:dual-sport | pt:ice | discontinued | 1980–1986 | 396cc风冷单缸林道两用车，DR系列中排量，SP400的后继车型 |
| model:suzuki:dr500 | DR500 | DR500 林道两用车 | DR500 林道兩用車 | DR500 | class:disp:600cc | body:dual-sport | pt:ice | discontinued | 1980–1981 | 499cc风冷单缸林道两用车，DR系列首款大排量，单缸大扭矩，寿命短但经典 |
| model:suzuki:dr600 | DR600 | DR600 林道两用车 | DR600 林道兩用車 | DR600 | class:disp:600cc | body:dual-sport | pt:ice | discontinued | 1984–1986 | 588cc风冷单缸林道两用车，DR500后继，DR750的前身，大单缸长途利器 |
| model:suzuki:dr650s | DR650S | DR650S 大单缸越野两用 | DR650S 大單缸越野兩用 | DR650S | class:disp:750cc | body:dual-sport | pt:ice | current | 1990–present | 644cc大单缸两用车，结构简单耐造，环球旅行经典车型，澳洲市场热门 |
| model:suzuki:dr750 | DR750 | DR750 大单缸冒险车 | DR750 大單缸冒險車 | DR750 | class:disp:1000cc | body:adventure | pt:ice | discontinued | 1987–1990 | 779cc风冷单缸冒险车型，绰号大野驴，当时全球最大排量单缸摩托车，达喀尔拉力赛车民用版 |
| model:suzuki:dr800s | DR800S Big | DR800S Big 大单缸ADV | DR800S Big 大單缸ADV | DR800S | class:disp:1000cc | body:adventure | pt:ice | discontinued | 1990–1997 | 779cc大单缸冒险车型，DR750S的进化版，当时全球最大排量单缸，长途穿越利器 |
| model:suzuki:fr80 | FR80 | FR80 二冲程通勤车 | FR80 二衝程通勤車 | FR80 | class:disp:50cc | body:naked | pt:ice | discontinued | 1970–1985 | 79cc风冷二冲程单缸通勤车，Fronte系列衍生，经济实用型入门代步车 |
| model:suzuki:gixxer-sf | GIXXER SF 150 / 250 | Gixxer 小排量街跑 | Gixxer 小排量街跑 | ギクサー SF150/250 | class:disp:250cc | body:sport | pt:ice | current | 2014–present | 印度市场开发，150/250cc单缸/双缸，街车版Gixxer+SF跑版，性价比高 |
| model:suzuki:gn125 | GN125 | GN125 单缸街车 | GN125 單缸街車 | GN125 | class:disp:125cc | body:naked | pt:ice | current | 1982–present | 124cc风冷单缸街车，GN系列入门，圆灯圆表经典造型，全球畅销超40年 |
| model:suzuki:gn250 | GN250 | GN250 单缸街车 | GN250 單缸街車 | GN250E | class:disp:250cc | body:naked | pt:ice | discontinued | 1982–1989 | 249cc风冷单缸街车，GN系列中排量，圆灯圆表经典造型，实用耐用 |
| model:suzuki:gs1000 | GS1000 | GS1000 公升街车（停产） | GS1000 公升街車（停產） | GS1000 | class:disp:1000cc | body:naked | pt:ice | discontinued | 1977–1981 | 997cc风冷四缸街车，铃木首款公升级四缸，GP冠军技术民用化之作 |
| model:suzuki:gs1000s | GS1000S | GS1000S 西部牛仔街车 | GS1000S 西部牛仔街車 | GS1000S | class:disp:1000cc | body:naked | pt:ice | discontinued | 1979–1981 | 997cc风冷四缸半导流罩街车，西部牛仔风格涂装，GS1000的S版，七十年代末经典运动街车 |
| model:suzuki:gs1100 | GS1100 | GS1100 四缸街车 | GS1100 四缸街車 | GS1100 | class:disp:1000cc | body:naked | pt:ice | discontinued | 1980–1984 | 1075cc风冷四冲程四缸，GS1000的加大排量版，GSX1100的兄弟车型，八十年代初公升级街车代表 |
| model:suzuki:gs400 | GS400 | GS400 四冲程双缸街车 | GS400 四衝程雙缸街車 | GS400 | class:disp:400cc | body:naked | pt:ice | discontinued | 1976–1982 | 396cc风冷四冲程双缸，铃木四冲程时代的起点之一，GS系列开山车型 |
| model:suzuki:gs450 | GS450 | GS450 双缸街车 | GS450 雙缸街車 | GS450 | class:disp:400cc | body:naked | pt:ice | discontinued | 1980–1987 | 449cc风冷四冲程并列双缸，GS系列中排量入门，经济实用通勤街车 |
| model:suzuki:gs550 | GS550 | GS550 四冲程四缸街车 | GS550 四衝程四缸街車 | GS550 | class:disp:600cc | body:naked | pt:ice | discontinued | 1977–1982 | 549cc风冷四冲程四缸，GS750同级平台缩缸版，七十年代末畅销街车 |
| model:suzuki:gs650 | GS650 | GS650 四缸街车 | GS650 四缸街車 | GS650 | class:disp:750cc | body:naked | pt:ice | discontinued | 1980–1984 | 673cc风冷四冲程四缸，GS系列中排量，轴传动版本(GS650G)也有生产 |
| model:suzuki:gs750 | GS750 | GS750 四缸街车（停产） | GS750 四缸街車（停產） | GS750 | class:disp:750cc | body:naked | pt:ice | discontinued | 1977–1983 | 748cc风冷四缸街车，GS系列中排量，七十年代超级街车代表 |
| model:suzuki:gs850 | GS850 | GS850 四缸旅行车 | GS850 四缸旅行車 | GS850 | class:disp:1000cc | body:sport-touring | pt:ice | discontinued | 1979–1984 | 843cc风冷四冲程四缸，GS系列旅行版，轴传动，配大风挡和边箱，八十年代运动旅行先驱 |
| model:suzuki:gsx-8r | GSX-8R | GSX-8R 跑车 | GSX-8R 跑車 | GSX-8R | class:disp:750cc | body:sport | pt:ice | current | 2024–present | GSX-8S同平台跑车版，全整流罩，电子油门+双向快排 |
| model:suzuki:gsx-8s | GSX-8S | GSX-8S 并列双缸街车 | GSX-8S 並列雙缸街車 | GSX-8S | class:disp:750cc | body:naked | pt:ice | current | 2023–present | 776cc全新并列双缸平台，270度曲轴，铃木新一代中量级街车 |
| model:suzuki:gsx-8t | GSX-8T | GSX-8T 复古街车（2026款） | GSX-8T 復古街車（2026款） | GSX-8T | class:disp:750cc | body:naked | pt:ice | current | 2026–present | 铃木2026年全新复古街车，776cc并列双缸，造型致敬1960年代T500 Titan，圆形大灯 |
| model:suzuki:gsx-8tt | GSX-8TT | GSX-8TT 复古旅行街车（2026款） | GSX-8TT 復古旅行街車（2026款） | GSX-8TT | class:disp:750cc | body:naked | pt:ice | current | 2026–present | GSX-8T旅行版，776cc并列双缸，配备加高风挡与长途旅行装备，2026年全新车型 |
| model:suzuki:gsx-r1000-r | GSX-R1000 / R | GSX-R1000/R 旗舰仿赛 | GSX-R1000/R 旗艦仿賽 | GSX-R1000/R | class:disp:1000cc | body:sport | pt:ice | current | 2017–present | 铃木旗舰公升仿赛，R版配电子悬挂+双向快排，MotoGP技术下放 |
| model:suzuki:gsx-r1100 | GSX-R1100 | GSX-R1100 公升仿赛（停产） | GSX-R1100 公升仿賽（停產） | GSX-R1100 | class:disp:1000cc | body:sport | pt:ice | discontinued | 1986–1998 | 1052cc四缸仿赛，GSX-R750的大哥，八十年代公升级赛道王者 |
| model:suzuki:gsx-r125 | GSX-R125 | GSX-R125 小排量仿赛 | GSX-R125 小排量仿賽 | GSX-R125 | class:disp:125cc | body:sport | pt:ice | current | 2017–present | 124cc单缸入门仿赛，GSX-R家族外观，欧洲A1驾照热门车型 |
| model:suzuki:gsx-r250 | GSX-R250 | GSX-R250 入门仿赛 | GSX-R250 入門仿賽 | GSX-R250 | class:disp:250cc | body:sport | pt:ice | discontinued | 1987–1989 | 249cc四冲程四缸仿赛，日本本土250限定车型，GSX-R家族小排量代表作 |
| model:suzuki:gsx-r400 | GSX-R400 | GSX-R400 中排量仿赛 | GSX-R400 中排量仿賽 | GSX-R400 | class:disp:400cc | body:sport | pt:ice | discontinued | 1984–1992 | 398cc水冷四冲程四缸仿赛，日本本土限定，当年400cc组赛道王者，后继GSX-R400R |
| model:suzuki:gsx-r600 | GSX-R600 | GSX-R600 中量级仿赛 | GSX-R600 中量級仿賽 | GSX-R600 | class:disp:600cc | body:sport | pt:ice | discontinued | 1992–2022 | GSX-R系列中量级，短轴距赛道取向，2022年停产未更新国四 |
| model:suzuki:gsx-r750 | GSX-R750 | GSX-R750 经典准公升仿赛 | GSX-R750 經典準公升仿賽 | GSX-R750 | class:disp:750cc | body:sport | pt:ice | discontinued | 1985–2022 | 750cc仿赛鼻祖，GSX-R系列开山之作，赛道传奇近40年 |
| model:suzuki:gsx-s1000 | GSX-S1000 | GSX-S1000 公升级街车 | GSX-S1000 公升級街車 | GSX-S1000 | class:disp:1000cc | body:naked | pt:ice | current | 2015–present | GSX-R1000同源四缸发动机街车化，999cc，电子快排，性价比公升街车 |
| model:suzuki:gsx-s1000gt | GSX-S1000GT | GSX-S1000GT 运动旅行 | GSX-S1000GT 運動旅行 | GSX-S1000GT | class:disp:1000cc | body:sport-touring | pt:ice | current | 2022–present | GSX-S1000旅行版，配边箱+巡航控制+抬升把手，长途运动旅行两相宜 |
| model:suzuki:gsx-s750 | GSX-S750 | GSX-S750 中量级街车 | GSX-S750 中量級街車 | GSX-S750 | class:disp:750cc | body:naked | pt:ice | current | 2017–present | 749cc四缸街车，源自GSX-R750发动机，平顺高转，运动街车代表 |
| model:suzuki:gsx1100 | GSX1100 | GSX1100 四缸街车 | GSX1100 四缸街車 | GSX1100 | class:disp:1000cc | body:naked | pt:ice | discontinued | 1979–1987 | 1075cc风冷四冲程四缸，GSX系列旗舰，后继衍生出GSX1100 Katana |
| model:suzuki:gsx1100-katana | GSX1100 Katana | GSX1100 Katana 刀（停产） | GSX1100 Katana 刀（停產） | GSX1100 カタナ | class:disp:1000cc | body:naked | pt:ice | discontinued | 1981–1985 | 1074cc风冷四缸，1980年代经典刀锋造型，日系摩托车设计里程碑 |
| model:suzuki:gsx1400 | GSX1400 | GSX1400 油冷大排街车（停产） | GSX1400 油冷大排街車（停產） | GSX1400 | class:disp:1000cc | body:naked | pt:ice | discontinued | 2001–2008 | 1401cc油冷四缸公升街车，动力浑厚扭矩充沛，日系大排街车代表作 |
| model:suzuki:gsx250r | GSX250R | GSX250R 入门仿赛 | GSX250R 入門仿賽 | GSX250R | class:disp:250cc | body:sport | pt:ice | current | 2016–present | 250cc并列双缸入门仿赛，GSX-R家族外观，豪爵铃木国产 |
| model:suzuki:gsx250s-katana | GSX250S Katana | GSX250S Katana 刀 250仿赛 | GSX250S Katana 刀 250仿賽 | GSX250S KATANA | class:disp:250cc | body:sport | pt:ice | discontinued | 1991–1994 | 249cc水冷四冲程双缸，KATANA家族小排量成员，全整流罩刀锋造型，日本本土限定 |
| model:suzuki:gsx400-impulse | GSX400 Impulse | GSX400 Impulse 脉冲仿赛 | GSX400 Impulse 脈衝仿賽 | GSX400 インパルス | class:disp:400cc | body:sport | pt:ice | discontinued | 1982–1994 | 398cc四冲程仿赛，搭载GSX-R400同源发动机，被誉为平民法赛的经典名号 |
| model:suzuki:gsx400e | GSX400E | GSX400E 四缸街车 | GSX400E 四缸街車 | GSX400E | class:disp:400cc | body:naked | pt:ice | discontinued | 1980–1985 | 398cc风冷四冲程四缸，GSX系列400cc入门四缸，铃木四缸技术普及之作 |
| model:suzuki:gsx600f-katana | GSX600F Katana | GSX600F Katana 运动旅行 | GSX600F Katana 運動旅行 | GSX600F カタナ | class:disp:600cc | body:sport-touring | pt:ice | discontinued | 1988–1996 | 599cc水冷四冲程四缸，Katana家族全整流罩运动旅行车，中量级四缸高转利器 |
| model:suzuki:gsx750 | GSX750 | GSX750 四缸街车 | GSX750 四缸街車 | GSX750 | class:disp:750cc | body:naked | pt:ice | discontinued | 1977–1988 | 748cc风冷四冲程四缸，GSX系列750cc中坚，GS750后继车型，七十年代末超级街车 |
| model:suzuki:gsx750f-katana | GSX750F Katana | GSX750F Katana 运动旅行 | GSX750F Katana 運動旅行 | GSX750F カタナ | class:disp:750cc | body:sport-touring | pt:ice | discontinued | 1989–1997 | 748cc水冷四冲程四缸，GSX600F的大排量版，Katana刀锋造型运动旅行车 |
| model:suzuki:gt125 | GT125 | GT125 二冲程双缸街车 | GT125 二衝程雙缸街車 | GT125 | class:disp:125cc | body:naked | pt:ice | discontinued | 1972–1982 | 124cc风冷二冲程并列双缸，GT系列最小排量，入门级二冲程运动街车 |
| model:suzuki:gt185 | GT185 | GT185 二冲程双缸街车 | GT185 二衝程雙缸街車 | GT185 | class:disp:250cc | body:naked | pt:ice | discontinued | 1971–1977 | 183cc风冷二冲程并列双缸，GT系列中排量，入门运动街车，七十年代畅销 |
| model:suzuki:gt250 | GT250 | GT250 二冲程双缸街车 | GT250 二衝程雙缸街車 | GT250 | class:disp:250cc | body:naked | pt:ice | discontinued | 1971–1976 | 247cc风冷二冲程双缸，GT系列入门排量，1970年代日本中型车主力 |
| model:suzuki:gt380 | GT380 | GT380 二冲程三缸（停产） | GT380 二衝程三缸（停產） | GT380 | class:disp:400cc | body:naked | pt:ice | discontinued | 1972–1977 | 371cc风冷二冲程三缸，GT系列中排量，绰号小野马 |
| model:suzuki:gt500 | GT500 | GT500 二冲程双缸街车 | GT500 二衝程雙缸街車 | GT500 | class:disp:600cc | body:naked | pt:ice | discontinued | 1971–1975 | 492cc风冷二冲程双缸，T500 Titan的后继车型，GT系列中排量性能代表 |
| model:suzuki:gt550 | GT550 | GT550 二冲程三缸街车 | GT550 二衝程三缸街車 | GT550 | class:disp:600cc | body:naked | pt:ice | discontinued | 1972–1977 | 543cc风冷二冲程三缸，GT750水牛的缩小版，三缸声浪迷人 |
| model:suzuki:gt750 | GT750 | GT750 水冷二冲程三缸（停产） | GT750 水冷二衝程三缸（停產） | GT750 | class:disp:750cc | body:naked | pt:ice | discontinued | 1971–1977 | 738cc水冷二冲程三缸，全球首款水冷量产摩托，绰号水牛，铃木传奇名车 |
| model:suzuki:hayabusa-gsx1300r | Hayabusa GSX1300R | Hayabusa 隼 超高速旗舰 | Hayabusa 隼 超高速旗艦 | ハヤブサ GSX1300R | class:disp:1000cc | body:sport | pt:ice | current | 1999–present | 陆地速度之王，1340cc四缸，时速突破300km/h，2021年第三代大改款 |
| model:suzuki:inazuma | Inazuma | Inazuma 雷 400街车 | Inazuma 雷 400街車 | イナズマ | class:disp:400cc | body:naked | pt:ice | discontinued | 1997–2001 | 398cc水冷四冲程四缸街车，GSF400继承者，圆润车身加四缸声浪，90年代日系街车经典 |
| model:suzuki:katana | Katana | Katana 刀 复古街车（复刻版） | Katana 刀 復古街車（復刻版） | カタナ | class:disp:1000cc | body:naked | pt:ice | current | 2019–present | 1980年代经典Katana复刻，GSX-S1000同平台四缸，复古外观现代内核 |
| model:suzuki:ls650-savage | LS650 Savage | LS650 Savage 单缸巡航车 | LS650 Savage 單缸巡航車 | LS650 サベージ | class:disp:750cc | body:cruiser | pt:ice | discontinued | 1986–2004 | 652cc风冷单缸巡航车，S40 Boulevard，结构简单，皮带传动，入门巡航经典，超长生命周期 |
| model:suzuki:m109r-boulevard | M109R Boulevard | M109R Boulevard 肌肉巡航车 | M109R Boulevard 肌肉巡航車 | M109R ブールバード | class:disp:1000cc | body:cruiser | pt:ice | current | 2006–present | 1783cc V型双缸肌肉巡航车，铃木最大排量巡航，粗犷美式风格，超强扭矩 |
| model:suzuki:power-free | Power Free | Power Free 50cc二冲程助力摩托 | Power Free 50cc二衝程助力摩托 | パワーフリー | class:disp:50cc | body:underbone | pt:ice | discontinued | 1952–1954 | 1952年推出的铃木首款量产摩托车，50cc二冲程发动机装在自行车上，开创铃木摩托历史 |
| model:suzuki:re5 | RE5 | RE5 转子发动机摩托（停产） | RE5 轉子發動機摩托（停產） | RE5 | class:disp:600cc | body:naked | pt:ice | discontinued | 1974–1976 | 497cc汪克尔转子发动机量产摩托，技术前卫但销量惨淡，现为收藏珍品 |
| model:suzuki:rf600r | RF600R | RF600R 运动旅行跑车 | RF600R 運動旅行跑車 | RF600R | class:disp:600cc | body:sport-touring | pt:ice | discontinued | 1993–1997 | 599cc水冷四冲程四缸，RF系列中量级，全整流罩运动旅行设计，操控平衡口碑好 |
| model:suzuki:rf900r | RF900R | RF900R 运动旅行跑车 | RF900R 運動旅行跑車 | RF900R | class:disp:1000cc | body:sport-touring | pt:ice | discontinued | 1994–1998 | 937cc水冷四冲程四缸，RF系列旗舰，运动旅行兼顾，九十年代铃木长途利器 |
| model:suzuki:rg250 | RG250 | RG250 二冲程仿赛（停产） | RG250 二衝程仿賽（停產） | RG250 | class:disp:250cc | body:sport | pt:ice | discontinued | 1983–1987 | 249cc二冲程V型双缸GP仿赛，铝合金车架，两冲250组经典战车 |
| model:suzuki:rg400-gamma | RG400 Gamma | RG400 Gamma 二冲程仿赛 | RG400 Gamma 二衝程仿賽 | RG400Γ(ガンマ) | class:disp:400cc | body:sport | pt:ice | discontinued | 1985–1988 | 398cc二冲程V型四缸仿赛，RG500的400cc本土限定版，水冷两冲巅峰之作 |
| model:suzuki:rg500 | RG500 | RG500 二冲程GP仿赛（停产） | RG500 二衝程GP仿賽（停產） | RG500 | class:disp:600cc | body:sport | pt:ice | discontinued | 1985–1991 | 499cc二冲程V型四缸GP仿赛，方箱造型方排气管，两冲时代巅峰之作 |
| model:suzuki:rgv250 | RGV250 | RGV250 二冲程仿赛（停产） | RGV250 二衝程仿賽（停產） | RGV250 | class:disp:250cc | body:sport | pt:ice | discontinued | 1983–1998 | 249cc V型双缸二冲程GP仿赛，铝合金车架轻量化典范，两冲时代名车 |
| model:suzuki:rm-z250 | RM-Z250 | RM-Z250 场地越野 | RM-Z250 場地越野 | RM-Z250 | class:disp:250cc | body:motocross | pt:ice | current | 2004–present | 铃木250cc四冲程场地越野赛车，与RM-Z450同平台，铝合金车架，MX2组别主力战车 |
| model:suzuki:rm-z450 | RM-Z450 | RM-Z450 场地越野 | RM-Z450 場地越野 | RM-Z450 | class:disp:600cc | body:motocross | pt:ice | current | 2005–present | 449cc四冲程场地越野赛车，铝合金车架，MXGP世界锦标赛赛场常客 |
| model:suzuki:rm100 | RM100 | RM100 二冲程场地越野 | RM100 二衝程場地越野 | RM100 | class:disp:125cc | body:motocross | pt:ice | discontinued | 1975–1983 | 99cc二冲程单缸场地越野赛车，RM系列中排量，七十年代越野赛场主力 |
| model:suzuki:rm125 | RM125 | RM125 二冲程场地越野（停产） | RM125 二衝程場地越野（停產） | RM125 | class:disp:125cc | body:motocross | pt:ice | discontinued | 1974–2008 | 经典125cc二冲程场地越野赛车，轻量化车架，七十年代至零零年代赛场常青树 |
| model:suzuki:rm250 | RM250 | RM250 二冲程场地越野（停产） | RM250 二衝程場地越野（停產） | RM250 | class:disp:250cc | body:motocross | pt:ice | discontinued | 1976–2008 | 经典250cc二冲程场地越野赛车，RM系列旗舰，2008年停产告别两冲时代 |
| model:suzuki:rm465 | RM465 | RM465 二冲程场地越野 | RM465 二衝程場地越野 | RM465 | class:disp:600cc | body:motocross | pt:ice | discontinued | 1981–1983 | 465cc二冲程单缸开放级场地越野赛车，RM400后继，动力强劲的开放组战车 |
| model:suzuki:rm500 | RM500 | RM500 二冲程场地越野 | RM500 二衝程場地越野 | RM500 | class:disp:600cc | body:motocross | pt:ice | discontinued | 1983–1985 | 499cc二冲程单缸开放级场地越野赛车，RM465后继，500cc两冲越野的巅峰之作 |
| model:suzuki:rm60 | RM60 | RM60 二冲程儿童越野 | RM60 二衝程兒童越野 | RM60 | class:disp:50cc | body:motocross | pt:ice | discontinued | 1976–1985 | 59cc二冲程单缸儿童场地越野赛车，RM系列入门排量，青少年越野摇篮 |
| model:suzuki:rm65 | RM65 | RM65 儿童场地越野 | RM65 兒童場地越野 | RM65 | class:disp:50cc | body:motocross | pt:ice | current | 2003–present | 64cc二冲程儿童场地越野入门车，青少年越野启蒙经典 |
| model:suzuki:rm80 | RM80 | RM80 二冲程青少年越野 | RM80 二衝程青少年越野 | RM80 | class:disp:125cc | body:motocross | pt:ice | discontinued | 1975–2008 | 79cc二冲程单缸青少年场地越野赛车，RM系列长青树，培养无数职业车手 |
| model:suzuki:rm85 | RM85 | RM85 青少年场地越野 | RM85 青少年場地越野 | RM85 | class:disp:125cc | body:motocross | pt:ice | current | 2002–present | 84cc二冲程青少年场地越野赛车，Mini组进阶首选，至今仍在产 |
| model:suzuki:rmx450z | RMX450Z | RMX450Z 耐力越野（停产） | RMX450Z 耐力越野（停產） | RMX450Z | class:disp:600cc | body:enduro | pt:ice | discontinued | 2010–2017 | 449cc四冲程耐力越野车，RM-Z450同款发动机越野化调校，电启动加持 |
| model:suzuki:sp370 | SP370 | SP370 单缸越野两用车 | SP370 單缸越野兩用車 | SP370 | class:disp:400cc | body:enduro | pt:ice | discontinued | 1978–1981 | 367cc风冷单缸越野两用车，DR系列前身，结构简单皮实耐造 |
| model:suzuki:sv650 | SV650 | SV650 V缸街车 | SV650 V缸街車 | SV650 | class:disp:600cc | body:naked | pt:ice | current | 1999–present | 645cc 90度V缸，新手友好，改装潜力大，铃木MSF教官指定用车 |
| model:suzuki:t20-super-six | T20 Super Six | T20 Super Six 二冲程跑车 | T20 Super Six 二衝程跑車 | T20 スーパーシックス | class:disp:250cc | body:sport | pt:ice | discontinued | 1965–1967 | 247cc风冷二冲程并列双缸，X6 Hustler的前身，六档变速器，六十年代铃木运动车代表作 |
| model:suzuki:t250 | T250 | T250 二冲程双缸运动车 | T250 二衝程雙缸運動車 | T250 | class:disp:250cc | body:naked | pt:ice | discontinued | 1968–1970 | 247cc风冷二冲程并列双缸，T20 Super Six的后继车型，六十年代末铃木主力运动车 |
| model:suzuki:t305 | T305 | T305 二冲程双缸运动车 | T305 二衝程雙缸運動車 | T305 | class:disp:400cc | body:naked | pt:ice | discontinued | 1969–1971 | 305cc风冷二冲程并列双缸，T250的加大排量版，T350的前身，短命但经典 |
| model:suzuki:t350 | T350 | T350 二冲程双缸运动车 | T350 二衝程雙缸運動車 | T350 | class:disp:400cc | body:naked | pt:ice | discontinued | 1969–1972 | 315cc风冷二冲程并列双缸，T500的缩小版，1960年代末铃木运动车代表 |
| model:suzuki:t500-titan | T500 Titan | T500 Titan 泰坦（停产） | T500 Titan 泰坦（停產） | T500 タイタン | class:disp:600cc | body:naked | pt:ice | discontinued | 1968–1977 | 492cc风冷二冲程双缸，铃木首款大排量二冲程，外号泰坦 |
| model:suzuki:tl1000r | TL1000R | TL1000R V型双缸跑车 | TL1000R V型雙缸跑車 | TL1000R | class:disp:1000cc | body:sport | pt:ice | discontinued | 1998–2003 | 996cc 90度V型双缸跑车，TL1000S的全整流罩版，双座设计，铃木公升V缸旗舰仿赛 |
| model:suzuki:tl1000s | TL1000S | TL1000S V缸跑车（停产） | TL1000S V缸跑車（停產） | TL1000S | class:disp:1000cc | body:sport | pt:ice | discontinued | 1997–2001 | 996cc 90度V型双缸跑车，旋转式后减震黑科技，铃木首款公升V缸跑车 |
| model:suzuki:tm400 | TM400 | TM400 二冲程场地越野赛车 | TM400 二衝程場地越野賽車 | TM400 | class:disp:400cc | body:motocross | pt:ice | discontinued | 1971–1975 | 396cc二冲程单缸场地越野赛车，铃木进军越野赛事代表作，因动力暴躁难以驾驭而闻名 |
| model:suzuki:ts100 | TS100 | TS100 二冲程林道车 | TS100 二衝程林道車 | TS100 | class:disp:125cc | body:enduro | pt:ice | discontinued | 1973–1985 | 98cc二冲程单缸林道车，轻量化车身，七十年代越野入门经典 |
| model:suzuki:ts125 | TS125 | TS125 二冲程林道车 | TS125 二衝程林道車 | TS125 | class:disp:125cc | body:enduro | pt:ice | discontinued | 1972–1985 | 123cc二冲程单缸林道车，TS系列中排量，七十年代林道越野文化代表车型 |
| model:suzuki:ts185 | TS185 Hustler | TS185 Hustler 林道两用车 | TS185 Hustler 林道兩用車 | ハスラー185（TS185） | class:disp:250cc | body:enduro | pt:ice | discontinued | 1971–1977 | 183cc二冲程单缸林道两用车，Hustler越野系列中坚，70年代越野热潮经典车型 |
| model:suzuki:ts250 | TS250 | TS250 二冲程林道车 | TS250 二衝程林道車 | TS250 | class:disp:250cc | body:enduro | pt:ice | discontinued | 1971–1985 | 246cc二冲程单缸林道车，TS系列旗舰排量，Hustler越野家族的代表作 |
| model:suzuki:ts400 | TS400 | TS400 二冲程林道车 | TS400 二衝程林道車 | TS400 | class:disp:400cc | body:enduro | pt:ice | discontinued | 1971–1978 | 396cc二冲程单缸林道车，TS系列最大排量，动力暴躁的越野猛兽 |
| model:suzuki:ts50 | TS50 | TS50 二冲程林道车 | TS50 二衝程林道車 | TS50 | class:disp:50cc | body:enduro | pt:ice | discontinued | 1971–1985 | 49cc二冲程单缸林道入门车，TS系列最小排量，七十年代青少年越野启蒙车 |
| model:suzuki:tu250x | TU250X | TU250X 复古街车 | TU250X 復古街車 | TU250X | class:disp:250cc | body:naked | pt:ice | current | 1997–present | 249cc风冷单缸复古小排量，日本驾校经典用车，造型源自1950年代 |
| model:suzuki:v-strom | V-Strom 250SX / 650 / 1050 | V-Strom 探险系列 | V-Strom 探險系列 | Vストローム250/650/1050 | class:disp:600cc | body:adventure | pt:ice | current | 2004–present | V缸ADV系列（250为并列双缸），性价比之选，长途舒适耐造 |
| model:suzuki:v-strom-800de | V-Strom 800DE | V-Strom 800DE 探险车 | V-Strom 800DE 探險車 | Vストローム800DE | class:disp:750cc | body:adventure | pt:ice | current | 2023–present | 全新776cc并列双缸ADV，21寸前轮越野取向，Gravel碎石模式电子辅助 |
| model:suzuki:vanvan-200 | VanVan 200 | VanVan 200 胖胎玩乐车 | VanVan 200 胖胎玩樂車 | バンバン200 | class:disp:250cc | body:dual-sport | pt:ice | current | 2002–present | 199cc单缸+超宽胖胎，复古休闲造型，沙滩越野通勤皆可玩 |
| model:suzuki:vs1400-intruder | VS1400 Intruder | VS1400 Intruder 大排巡航车 | VS1400 Intruder 大排巡航車 | VS1400 イントルーダー | class:disp:1000cc | body:cruiser | pt:ice | discontinued | 1987–2004 | 1360cc V型双缸大型巡航车，Intruder旗舰，粗犷美式风格，扭矩浑厚 |
| model:suzuki:vs750-intruder | VS750 Intruder | VS750 Intruder 巡航车 | VS750 Intruder 巡航車 | VS750 イントルーダー | class:disp:750cc | body:cruiser | pt:ice | discontinued | 1985–1992 | 747cc V型双缸巡航车，Intruder系列元祖车型，美式巡航风潮代表作 |
| model:suzuki:vs800-intruder | VS800 Intruder | VS800 Intruder 巡航车 | VS800 Intruder 巡航車 | VS800 イントルーダー | class:disp:1000cc | body:cruiser | pt:ice | discontinued | 1992–2004 | 805cc V型双缸巡航车，VS750的后继车型，九十年代铃木美式巡航代表 |
| model:suzuki:vx800 | VX800 | VX800 V缸街车 | VX800 V缸街車 | VX800 | class:disp:1000cc | body:naked | pt:ice | discontinued | 1990–1998 | 805cc 45度V型双缸街车，发动机源自GSX-R750平台，八十年代末全能街车 |
| model:suzuki:wolf-125-200 | WOLF 125/200 | WOLF 125/200 二冲程运动车 | WOLF 125/200 二衝程運動車 | WOLF125／WOLF200 | class:disp:250cc | body:naked | pt:ice | discontinued | 1991–1995 | 124cc/198cc二冲程单缸运动车，两冲时代的平民运动车，90年代初本土畅销 |
| model:suzuki:x6-hustler | X6 Hustler | X6 Hustler 二冲程跑车（停产） | X6 Hustler 二衝程跑車（停產） | X6 ハスラー | class:disp:250cc | body:sport | pt:ice | discontinued | 1966–1968 | 247cc风冷二冲程双缸，1960年代日本二冲程运动车热潮代表作 |

### 4.TVS (14款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:tvs:apache-rr-310 | Apache RR 310 | Apache RR 310 阿帕奇 仿赛 | Apache RR 310 阿帕奇 仿賽 | アパッチ RR310 | class:disp:400cc | body:sport | pt:ice | current | 2018–present | TVS旗舰仿赛，312cc单缸水冷（与BMW G310RR同平台），印度首款国际级入门仿赛 |
| model:tvs:apache-rtr-160 | Apache RTR 160 | Apache RTR 160 阿帕奇 街车 | Apache RTR 160 阿帕奇 街車 | アパッチ RTR160 | class:disp:250cc | body:naked | pt:ice | current | 2011–present | TVS最成功的运动街车系列，159.7cc单缸，名字取自Racing Throttle Response，印度运动通勤标杆 |
| model:tvs:apache-rtr-200 | Apache RTR 200 4V | Apache RTR 200 4V 阿帕奇 街车 | Apache RTR 200 4V 阿帕奇 街車 | アパッチ RTR200 4V | class:disp:250cc | body:naked | pt:ice | current | 2017–present | Apache系列性能街车，197.75cc单缸油冷4气门，21马力，同级运动性能标杆 |
| model:tvs:apache-rtr-310 | Apache RTR 310 | Apache RTR 310 阿帕奇 街车 | Apache RTR 310 阿帕奇 街車 | アパッチ RTR310 | class:disp:400cc | body:naked | pt:ice | current | 2023–present | RTR街车旗舰，312.2cc单缸水冷35马力，TFT仪表，电子快排与巡航控制 |
| model:tvs:iqube | iQube | iQube 电动踏板 | iQube 電動踏板 | アイキューブ | class:disp:125cc | body:scooter | pt:bev | current | 2020–present | TVS首款电动踏板车，2020年推出，锂电驱动，智能互联，印度电动两轮车代表 |
| model:tvs:jupiter-110 | Jupiter 110 | Jupiter 110 木星 家庭踏板 | Jupiter 110 木星 家庭踏板 | ジュピター110 | class:disp:125cc | body:scooter | pt:ice | current | 2013–present | TVS最畅销的家庭踏板车，110cc单缸风冷，大空间大座桶，印度家庭通勤主力 |
| model:tvs:jupiter-125 | Jupiter 125 | Jupiter 125 木星 家庭踏板 | Jupiter 125 木星 家庭踏板 | ジュピター125 | class:disp:125cc | body:scooter | pt:ice | current | 2021–present | Jupiter系列的125cc升级款，124.8cc单缸，新增LED灯具与数字化仪表 |
| model:tvs:ntorq-125 | NTorq 125 | NTorq 125 运动踏板 | NTorq 125 運動踏板 | エントルク125 | class:disp:125cc | body:scooter | pt:ice | current | 2018–present | TVS运动踏板代表作，124.8cc单缸，智能互联仪表，年轻人通勤改装首选 |
| model:tvs:radeon | Radeon | Radeon 通勤车 | Radeon 通勤車 | ラデオン | class:disp:125cc | body:naked | pt:ice | current | 2016–present | TVS入门通勤车，109.7cc单缸，经济实惠，主打乡村与城市代步市场 |
| model:tvs:raider-125 | Raider 125 | Raider 125 掠夺者 运动通勤车 | Raider 125 掠奪者 運動通勤車 | レイダー125 | class:disp:125cc | body:naked | pt:ice | current | 2021–present | 主打年轻人的运动通勤车，124.8cc单缸，轻量化车身，运动化骑行三角 |
| model:tvs:ronin-225 | Ronin 225 | Ronin 225 浪人 复古街车 | Ronin 225 浪人 復古街車 | ローニン225 | class:disp:250cc | body:naked | pt:ice | current | 2022–present | 以浪人命名的现代复古街车，225.9cc单缸油冷，圆灯设计，多种骑姿可调 |
| model:tvs:scooty-pep-plus | Scooty Pep+ | Scooty Pep+ 女性踏板 | Scooty Pep+ 女性踏板 | スクーティ ペップ+ | class:disp:125cc | body:scooter | pt:ice | current | 2018–present | 印度最经典的女性通勤踏板，90cc单缸，轻巧车身，女性和学生用户首选 |
| model:tvs:star-city-plus | Star City Plus | Star City Plus 星城 通勤车 | Star City Plus 星城 通勤車 | スターシティ プラス | class:disp:125cc | body:naked | pt:ice | current | 2015–present | TVS经典通勤车，109.7cc单缸，经济耐用，印度入门摩托车市场主力 |
| model:tvs:xl-100 | XL 100 | XL 100 轻便助力车 | XL 100 輕便助力車 | XL100 | class:disp:125cc | body:underbone | pt:ice | current | 2005–present | 全球销量最高的轻便助力车（moped），99.7cc单缸，印度农村与低收入市场之王 |

### 4.Tayo (6款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:tayo:d03-xadv | D03 XADV | D03 XADV 跨界踏板 | D03 XADV 跨界踏板 | D03 XADV | class:disp:250cc | body:scooter | pt:ice | current | 2024–present | 台荣D03 XADV，150cc ADV风格跨界踏板，长行程悬挂加越野风格造型 |
| model:tayo:kaituozhe-400 | Kaituozhe 400 | 开拓者400 大踏板 | 開拓者400 大踏板 | カイトゥージャ400 | class:disp:400cc | body:maxi-scooter | pt:ice | current | 2021–present | 台荣开拓者400，400cc大排量踏板，台荣冲击中量级踏板市场的旗舰车型 |
| model:tayo:rong-150 | Rong 150 | 荣150 踏板车 | 榮150 踏板車 | ロン150 | class:disp:250cc | body:scooter | pt:ice | current | 2023–present | 台荣荣150，150cc踏板车，ABS+TCS+投屏仪表配置丰富，聘请国外设计团队打造外观 |
| model:tayo:rong-250 | Rong 250 | 荣250 大踏板 | 榮250 大踏板 | ロン250 | class:disp:250cc | body:maxi-scooter | pt:ice | current | 2024–present | 台荣荣250（XSUV-250），250cc大踏板，2024年5月上市，以高性价比成为台荣翻身的畅销车型 |
| model:tayo:tanluzhe-300 | Tanluzhe TR300T | 探路者TR300T 大踏板 | 探路者TR300T 大踏板 | タンルーザーTR300T | class:disp:250cc | body:maxi-scooter | pt:ice | current | 2019–present | 台荣探路者TR300T，300cc大踏板，最大功率19kW，国内首款300cc大踏板，主打高性价比 |
| model:tayo:yao-150gs | Yao 150GS | 耀150GS 踏板车 | 耀150GS 踏板車 | ヤオ150GS | class:disp:250cc | body:scooter | pt:ice | current | 2025–present | 台荣耀150GS，150cc硬核风格踏板，2025年3月发布，主打跨界运动造型 |

### 4.Triumph (52款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:triumph:adventurer-900 | Adventurer 900 | Adventurer 900 冒险者900 巡航车 | Adventurer 900 冒險者900 巡航車 | アドベンチャラー900 | class:disp:750cc | body:cruiser | pt:ice | discontinued | 1996–2001 | 凯旋首次尝试巡航车，基于Thunderbird，19寸宽前轮，复古巡航造型 |
| model:triumph:bobber | Bobber | Bobber 鲍勃 巡航车 | Bobber 鮑勃 巡航車 | ボバー | class:disp:1000cc | body:bobber | pt:ice | current | 2017–present | 英伦Bobber风格，1200cc高功率双缸，单座硬尾外观，极简设计 |
| model:triumph:bonneville-speedmaster | Bonneville Speedmaster | Bonneville Speedmaster 博纳维尔 巡航车 | Bonneville Speedmaster 博納維爾 巡航車 | ボンネビルスピードマスター | class:disp:1000cc | body:cruiser | pt:ice | current | 2018–present | 1200cc并列双缸，低座巡航造型，复古镀铬细节，英伦巡航车 |
| model:triumph:bonneville-t100 | Bonneville T100 | Bonneville T100 博纳维尔 经典复古街车 | Bonneville T100 博納維爾 經典復古街車 | ボンネビルT100 | class:disp:750cc | body:naked | pt:ice | current | 2017–present | 900cc并列双缸，经典博纳维尔，双仪表圆灯，英伦复古入门代表 |
| model:triumph:bonneville-t120 | Bonneville T120 | Bonneville T120 博纳维尔 经典复古街车 | Bonneville T120 博納維爾 經典復古街車 | ボンネビルT120 | class:disp:1000cc | body:naked | pt:ice | current | 2016–present | 凯旋经典复古标杆，1200cc并列双缸，盐滩赛车命名，英伦风格 |
| model:triumph:bonneville-t120-650 | Bonneville T120 | Bonneville T120 博纳维尔 经典双缸街车 | Bonneville T120 博納維爾 經典雙缸街車 | ボンネビルT120 | class:disp:600cc | body:naked | pt:ice | discontinued | 1959–1975 | 凯旋最传奇的650cc双缸，为纪念盐湖城创纪录而命名，曾是007邦德座驾，1969年马恩岛TT大赛首破百英里均速 |
| model:triumph:bonneville-t140 | Bonneville T140 | Bonneville T140 博纳维尔750 经典街车 | Bonneville T140 博納維爾750 經典街車 | ボンネビルT140 | class:disp:750cc | body:naked | pt:ice | discontinued | 1973–1983 | 750cc博纳维尔继任者，Meriden工厂时代的最后经典，工厂关闭后停产 |
| model:triumph:daytona-660 | Daytona 660 | Daytona 660 戴通纳 中量级仿赛 | Daytona 660 戴通納 中量級仿賽 | デイトナ660 | class:disp:600cc | body:sport | pt:ice | current | 2024–present | 戴通纳系列复活，660cc三缸95马力，Trident同平台，全整流罩仿赛 |
| model:triumph:daytona-900 | Daytona 900 | Daytona 900 戴通纳900 运动跑车 | Daytona 900 戴通納900 運動跑車 | デイトナ900 | class:disp:750cc | body:sport | pt:ice | discontinued | 1992–1997 | 885cc三缸运动车，早期Hinckley跑车，高速长途巡航稳健扎实 |
| model:triumph:daytona-955i | Daytona 955i | Daytona 955i 戴通纳955 运动跑车 | Daytona 955i 戴通納955 運動跑車 | デイトナ955i | class:disp:1000cc | body:sport | pt:ice | discontinued | 1999–2006 | 由T595改名而来，955cc三缸，铝合金车架与单摇臂，Hinckley新世代首款真跑车 |
| model:triumph:daytona-t100r | Daytona T100R | Daytona T100R 戴通纳500 运动街车 | Daytona T100R 戴通納500 運動街車 | デイトナT100R | class:disp:400cc | body:naked | pt:ice | discontinued | 1966–1974 | 500cc公路版赛车，为对抗本田Black Bomber而生，实测时速可超110英里 |
| model:triumph:legend-tt | Legend TT | Legend TT 传奇TT 巡航车 | Legend TT 傳奇TT 巡航車 | レジェンドTT | class:disp:750cc | body:cruiser | pt:ice | discontinued | 1998–2000 | 885cc三缸复古巡航车，致敬凯旋辉煌赛事历史，短周期限量生产 |
| model:triumph:rocket-3-a75 | Rocket 3 | Rocket 3 火箭3 三缸街车 | Rocket 3 火箭3 三缸街車 | ロケット3 | class:disp:750cc | body:naked | pt:ice | discontinued | 1968–1975 | 1968年推出的740cc三缸，与BSA Rocket 3共享平台，开启凯旋三缸时代 |
| model:triumph:rocket-3-gt | Rocket 3 GT | Rocket 3 GT 火箭3 旅行巡航车 | Rocket 3 GT 火箭3 旅行巡航車 | ロケット3 GT | class:disp:1000cc | body:cruiser | pt:ice | current | 2019–present | 2458cc直列三缸，量产最大排量摩托车，GT版带乘客靠背与舒适脚踏 |
| model:triumph:rocket-3-r | Rocket 3 R | Rocket 3 R 火箭3 大排量巡航车 | Rocket 3 R 火箭3 大排量巡航車 | ロケット3 R | class:disp:1000cc | body:cruiser | pt:ice | current | 2019–present | 量产最大排量摩托车，2458cc直列三缸167马力221Nm扭矩，肌肉巡航 |
| model:triumph:scrambler-1200-xe | Scrambler 1200 XE | Scrambler 1200 XE 攀爬1200 | Scrambler 1200 XE 攀爬1200 | スクランブラー1200 XE | class:disp:1000cc | body:scrambler | pt:ice | current | 2019–present | 高性能攀爬车，1200cc双缸，21/17寸轮，高排气，真正具备越野能力 |
| model:triumph:scrambler-400-x | Scrambler 400 X | Scrambler 400 X 攀爬400 入门攀爬车 | Scrambler 400 X 攀爬400 入門攀爬車 | スクランブラー400 X | class:disp:400cc | body:scrambler | pt:ice | current | 2024–present | 398cc单缸，Speed 400攀爬版，加长悬挂，辐条轮，入门攀爬车 |
| model:triumph:scrambler-900 | Scrambler 900 | Scrambler 900 攀爬900 复古攀爬车 | Scrambler 900 攀爬900 復古攀爬車 | スクランブラー900 | class:disp:750cc | body:scrambler | pt:ice | current | 2017–present | 900cc并列双缸，高排气与辐条轮，复古攀爬风格，英伦街头越野 |
| model:triumph:speed-400 | Speed 400 | Speed 400 速度400 入门复古街车 | Speed 400 速度400 入門復古街車 | スピード400 | class:disp:400cc | body:naked | pt:ice | current | 2024–present | 398cc单缸，2024年全新入门复古街车，与印度Bajaj合作开发 |
| model:triumph:speed-triple-1200-rr | Speed Triple 1200 RR | Speed Triple 1200 RR 速度三倍 旗舰街车 | Speed Triple 1200 RR 速度三倍 旗艦街車 | スピードトリプル1200 RR | class:disp:1000cc | body:naked | pt:ice | current | 2021–present | 凯旋公升级街车旗舰，1160cc三缸180马力，Öhlins悬挂+Brembo卡钳，半整流罩设计 |
| model:triumph:speed-triple-1200-rs | Speed Triple 1200 RS | Speed Triple 1200 RS 速度三倍 旗舰街车 | Speed Triple 1200 RS 速度三倍 旗艦街車 | スピードトリプル1200 RS | class:disp:1000cc | body:naked | pt:ice | current | 2021–present | 1160cc三缸180马力，Speed Triple旗舰RS版，Öhlins悬挂，街车性能标杆 |
| model:triumph:speed-triple-1200-rs-2025 | Speed Triple 1200 RS (2025) | Speed Triple 1200 RS 旗舰街车（2025款） | Speed Triple 1200 RS 旗艦街車（2025款） | スピードトリプル1200 RS（2025） | class:disp:1000cc | body:naked | pt:ice | current | 2025–present | 1160cc三缸，2025款动力与电控全面升级，约180马力旗舰街车 |
| model:triumph:speed-triple-1200-rx | Speed Triple 1200 RX | Speed Triple 1200 RX 旗舰街车限量版 | Speed Triple 1200 RX 旗艦街車限量版 | スピードトリプル1200 RX | class:disp:1000cc | body:naked | pt:ice | current | 2026–present | 2026款全新，1160cc三缸约183马力，199kg轻量化，全球限量1200台 |
| model:triumph:speed-triple-900 | Speed Triple 900 | Speed Triple 900 速度三倍 初代街车 | Speed Triple 900 速度三倍 初代街車 | スピードトリプル900 | class:disp:750cc | body:naked | pt:ice | discontinued | 1994–1997 | 1994年初代'街霸'，拆掉整流罩的Daytona 900，单圆灯设计，开创streetfighter风潮 |
| model:triumph:speed-twin-1200 | Speed Twin 1200 | Speed Twin 1200 速度双缸 复古街车 | Speed Twin 1200 速度雙缸 復古街車 | スピードツイン1200 | class:disp:1000cc | body:naked | pt:ice | current | 2019–present | 复古街车，1200cc双缸100马力，Thruxton同平台，更舒适的骑姿 |
| model:triumph:speed-twin-1200-cafe-racer | Speed Twin 1200 Cafe Racer Edition | Speed Twin 1200 Cafe Racer 咖啡赛车限量版 | Speed Twin 1200 Cafe Racer 咖啡賽車限量版 | スピードツイン1200 カフェレーサーエディション | class:disp:1000cc | body:cafe-racer | pt:ice | current | 2026–present | 2026款全新，1200cc并列双缸咖啡赛车风格限量版，全球限量800台 |
| model:triumph:speed-twin-5t | Speed Twin 5T | Speed Twin 5T 速度双缸 经典街车 | Speed Twin 5T 速度雙缸 經典街車 | スピードツイン5T | class:disp:600cc | body:naked | pt:ice | discontinued | 1937–1966 | 1937年爱德华·特纳设计的498cc并列双缸，开现代摩托车双缸引擎先河，被誉为现代摩托车之父的经典之作 |
| model:triumph:sprint-st | Sprint ST | Sprint ST 冲刺ST 运动旅行车 | Sprint ST 衝刺ST 運動旅行車 | スプリントST | class:disp:1000cc | body:sport-touring | pt:ice | discontinued | 1999–2010 | 955cc三缸运动旅行车，全整流罩，长途运动旅行标杆，2005年起升级为1050cc |
| model:triumph:street-triple-765-rs | Street Triple 765 RS | Street Triple 765 RS 青蛙王子 街车 | Street Triple 765 RS 青蛙王子 街車 | ストリートトリプル765 RS | class:disp:750cc | body:naked | pt:ice | current | 2017–present | 中量级街车标杆，765cc三缸，Moto2发动机技术，绰号青蛙王子，以操控闻名 |
| model:triumph:thruxton-rs | Thruxton RS | Thruxton RS 瑟斯顿 咖啡赛车 | Thruxton RS 瑟斯頓 咖啡賽車 | スラクストンRS | class:disp:1000cc | body:cafe-racer | pt:ice | current | 2020–present | 现代咖啡赛车代表，1200cc双缸105马力，分离把，驼峰座，赛道纪念命名 |
| model:triumph:thunderbird-6t | Thunderbird 6T | Thunderbird 6T 雷鸟 经典街车 | Thunderbird 6T 雷鳥 經典街車 | サンダーバード6T | class:disp:600cc | body:naked | pt:ice | discontinued | 1949–1966 | 凯旋首款650cc并列双缸，电影《飞车党》中马龙·白兰度的座驾，在美国家喻户晓 |
| model:triumph:thunderbird-900 | Thunderbird 900 | Thunderbird 900 雷鸟900 复古巡航车 | Thunderbird 900 雷鳥900 復古巡航車 | サンダーバード900 | class:disp:750cc | body:cruiser | pt:ice | discontinued | 1995–2004 | 885cc三缸复古风格车，致敬1950年代经典Thunderbird，18寸前轮 |
| model:triumph:tiger-100 | Tiger 100 | Tiger 100 老虎100 经典运动街车 | Tiger 100 老虎100 經典運動街車 | タイガー100 | class:disp:600cc | body:naked | pt:ice | discontinued | 1938–1973 | 500cc运动版双缸，Tiger系列鼻祖，以时速100英里命名，赛场成绩辉煌 |
| model:triumph:tiger-110 | Tiger 110 | Tiger 110 老虎110 经典运动街车 | Tiger 110 老虎110 經典運動街車 | タイガー110 | class:disp:600cc | body:naked | pt:ice | discontinued | 1953–1961 | 649cc运动双缸，凯旋当时最快的量产车，1956年改装车在盐湖城创时速214英里纪录，Bonneville由此命名 |
| model:triumph:tiger-1200-alpine-desert | Tiger 1200 Alpine / Desert Edition | Tiger 1200 Alpine/Desert 特别版 大探险车 | Tiger 1200 Alpine/Desert 特別版 大探險車 | タイガー1200 アルパイン/デザートエディション | class:disp:1000cc | body:adventure | pt:ice | current | 2026–present | 2026款全新特别版，1160cc三缸约150马力，Alpine/Desert两种涂装风格 |
| model:triumph:tiger-1200-gt-explorer | Tiger 1200 GT Explorer | Tiger 1200 GT Explorer 虎1200 大探险车 | Tiger 1200 GT Explorer 虎1200 大探險車 | タイガー1200 GTエクスプローラー | class:disp:1000cc | body:adventure | pt:ice | current | 2022–present | 1160cc三缸，30L大油箱长途版，GT公路探险旗舰，150马力 |
| model:triumph:tiger-1200-rally-explorer | Tiger 1200 Rally Explorer | Tiger 1200 Rally Explorer 虎1200 大探险车 | Tiger 1200 Rally Explorer 虎1200 大探險車 | タイガー1200 ラリーエクスプローラー | class:disp:1000cc | body:adventure | pt:ice | current | 2022–present | 凯旋大探险旗舰，1160cc三缸150马力，21/18寸轮，30升油箱，TFT仪表 |
| model:triumph:tiger-885 | Tiger 885 | Tiger 885 老虎885 双运动车 | Tiger 885 老虎885 雙運動車 | タイガー885 | class:disp:750cc | body:dual-sport | pt:ice | discontinued | 1993–1998 | 1993年推出的沙漠赛车风格探险车，复兴时代Tiger系列的开端 |
| model:triumph:tiger-900-alpine-desert | Tiger 900 Alpine / Desert Edition | Tiger 900 Alpine/Desert 特别版 探险车 | Tiger 900 Alpine/Desert 特別版 探險車 | タイガー900 アルパイン/デザートエディション | class:disp:750cc | body:adventure | pt:ice | current | 2026–present | 2026款全新特别版，888cc三缸，Alpine公路取向/Desert越野取向两种规格 |
| model:triumph:tiger-900-gt-pro | Tiger 900 GT Pro | Tiger 900 GT Pro 虎900 公路探险车 | Tiger 900 GT Pro 虎900 公路探險車 | タイガー900 GTプロ | class:disp:750cc | body:adventure | pt:ice | current | 2020–present | 888cc三缸，公路取向探险车，19寸铸造前轮，电子悬挂可选 |
| model:triumph:tiger-900-rally-pro | Tiger 900 Rally Pro | Tiger 900 Rally Pro 虎900 越野探险车 | Tiger 900 Rally Pro 虎900 越野探險車 | タイガー900 ラリープロ | class:disp:750cc | body:adventure | pt:ice | current | 2020–present | Tiger 900系列越野版，888cc三缸，21/18寸辐条轮，全地形轮胎 |
| model:triumph:tiger-cub | Tiger Cub | Tiger Cub 老虎幼崽 轻量单缸车 | Tiger Cub 老虎幼崽 輕量單缸車 | タイガーカブ | class:disp:250cc | body:naked | pt:ice | discontinued | 1954–1968 | 200cc单缸轻量车，由Terrier发展而来，销量巨大，至今保有量可观，入门车经典 |
| model:triumph:tiger-sport-660 | Tiger Sport 660 | Tiger Sport 660 虎运动660 运动探险车 | Tiger Sport 660 虎運動660 運動探險車 | タイガースポーツ660 | class:disp:600cc | body:adventure | pt:ice | current | 2022–present | Trident 660同平台运动探险车，17寸轮，公路取向，大风挡 |
| model:triumph:tiger-sport-800 | Tiger Sport 800 | Tiger Sport 800 虎运动800 运动探险车 | Tiger Sport 800 虎運動800 運動探險車 | タイガースポーツ800 | class:disp:750cc | body:adventure | pt:ice | current | 2025–present | 2025年全新车型，798cc三缸，17寸公路轮，公路运动旅行取向 |
| model:triumph:tr5-trophy | TR5 Trophy | TR5 Trophy 越野竞技车 | TR5 Trophy 越野競技車 | TR5 トロフィー | class:disp:400cc | body:scrambler | pt:ice | discontinued | 1949–1958 | 500cc竞赛双缸，曾四夺国际六日耐力赛(ISDT)冠军，Trophy奖杯系列由此得名 |
| model:triumph:tr6-trophy | TR6 Trophy | TR6 Trophy 沙漠雪橇 双缸车 | TR6 Trophy 沙漠雪橇 雙缸車 | TR6 トロフィー | class:disp:600cc | body:scrambler | pt:ice | discontinued | 1956–1968 | 650cc单化油器双缸，在美国西部越野赛事中赢得'沙漠雪橇'美名 |
| model:triumph:trident-660 | Trident 660 | Trident 660 三叉戟 入门街车 | Trident 660 三叉戟 入門街車 | トライデント660 | class:disp:600cc | body:naked | pt:ice | current | 2021–present | 凯旋入门街车，660cc三缸80马力，复古运动造型，性价比高 |
| model:triumph:trident-900 | Trident 900 | Trident 900 三叉戟900 街车 | Trident 900 三叉戟900 街車 | トライデント900 | class:disp:750cc | body:naked | pt:ice | discontinued | 1991–1998 | 885cc三缸街车，Hinckley复兴模块化平台，钢管车架裸车造型 |
| model:triumph:trident-t150 | Trident T150 | Trident T150 三叉戟 三缸街车 | Trident T150 三叉戟 三缸街車 | トライデントT150 | class:disp:750cc | body:naked | pt:ice | discontinued | 1969–1975 | 750cc三缸，与BSA Rocket 3共享发动机，英国三缸鼻祖，后期T150V为5速版 |
| model:triumph:trident-t160 | Trident T160 | Trident T160 三叉戟 三缸街车 | Trident T160 三叉戟 三缸街車 | トライデントT160 | class:disp:750cc | body:naked | pt:ice | discontinued | 1975–1978 | Trident改进版，5速变速箱加电启动，Meriden时代三缸的绝唱 |
| model:triumph:trophy-1200 | Trophy 1200 | Trophy 1200 奖杯1200 运动旅行车 | Trophy 1200 獎盃1200 運動旅行車 | トロフィー1200 | class:disp:1000cc | body:sport-touring | pt:ice | discontinued | 1990–2004 | 1180cc四缸运动旅行旗舰，初期141马力，Hinckley复兴时代的旗舰车型 |
| model:triumph:trophy-900 | Trophy 900 | Trophy 900 奖杯900 运动旅行车 | Trophy 900 獎盃900 運動旅行車 | トロフィー900 | class:disp:750cc | body:sport-touring | pt:ice | discontinued | 1990–2002 | 1990年代复兴后的首款运动旅行车，885cc三缸，1995年换装大整流罩与边箱 |

### 4.Ural (3款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:ural:gear-up | Gear Up | Gear Up 边三轮军旅款 | Gear Up 邊三輪軍旅款 | ギアアップ | class:disp:750cc | body:trike | pt:ice | current | 1999–present | 749cc水平对置双缸边三轮摩托，军绿色涂装与前置备胎，Ural最具辨识度的经典款 |
| model:ural:patrol | Patrol | Patrol 巡逻 边三轮 | Patrol 巡邏 邊三輪 | パトロール | class:disp:750cc | body:trike | pt:ice | current | 2004–present | 749cc水平对置双缸边三轮，军规涂装的实用型两轮驱动越野边车 |
| model:ural:solo | Solo | Solo 两轮经典款 | Solo 兩輪經典款 | ソロ | class:disp:750cc | body:touring | pt:ice | current | 2019–present | 749cc水平对置双缸的两轮版本，延续二战宝马R71血统的复古造型 |

### 4.Vespa (31款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:vespa:125-super | Vespa 125 Super | Vespa 125 Super 运动踏板车 | Vespa 125 Super 運動踏板車 | ベスパ125スーパー | class:disp:125cc | body:scooter | pt:ice | discontinued | 1965–1969 | 1965年推出的小框架125cc运动款，Super定位操控轻巧，欧洲市场热销 |
| model:vespa:180-ss | Vespa 180 SS | Vespa 180 SS 运动踏板车 | Vespa 180 SS 運動踏板車 | ベスパ180SS | class:disp:250cc | body:scooter | pt:ice | discontinued | 1964–1968 | 1964年推出的Super Sport旗舰，180cc大排量二冲程，极速出众的运动风格车型 |
| model:vespa:cosa-200 | Vespa Cosa 200 | Vespa Cosa 200 经典踏板车 | Vespa Cosa 200 經典踏板車 | ベスパコーサ200 | class:disp:250cc | body:scooter | pt:ice | discontinued | 1988–1995 | 1988年推出的Cosa系列200cc，全新设计大框架，前液压悬挂与数字仪表，现代化尝试 |
| model:vespa:elettrica | Elettrica | Elettrica 纯电踏板车 | Elettrica 純電踏板車 | エレットリカ | class:disp:50cc | body:scooter | pt:bev | current | 2018–present | Vespa纯电踏板，续航约100km，保留经典造型，静音环保 |
| model:vespa:et2-50 | Vespa ET2 50 | Vespa ET2 50 现代化踏板车 | Vespa ET2 50 現代化踏板車 | ベスパET2 50 | class:disp:50cc | body:scooter | pt:ice | discontinued | 1997–2005 | 1997年推出的现代化自动挡50cc二冲程，圆润新潮车身，开启Vespa现代化新纪元 |
| model:vespa:et4-125 | Vespa ET4 125 | Vespa ET4 125 现代化踏板车 | Vespa ET4 125 現代化踏板車 | ベスパET4 125 | class:disp:125cc | body:scooter | pt:ice | discontinued | 1996–2005 | 1996年推出的ET系列四冲程125，全自动变速，现代Vespa复兴的开端车型 |
| model:vespa:gs-150 | Vespa GS 150 | Vespa GS 150 运动踏板车 | Vespa GS 150 運動踏板車 | ベスパGS150 | class:disp:250cc | body:scooter | pt:ice | discontinued | 1955–1961 | 1955年推出的Gran Sport运动款，150cc强化二冲程引擎，长座垫配整流罩车头，运动踏板先驱 |
| model:vespa:gs-160 | Vespa GS 160 | Vespa GS 160 运动踏板车 | Vespa GS 160 運動踏板車 | ベスパGS160 | class:disp:250cc | body:scooter | pt:ice | discontinued | 1962–1964 | 1962年推出的GS系列强化版，160cc动力提升，整流罩车头，60年代运动踏板代表 |
| model:vespa:gt-200 | Vespa GT 200 Granturismo | Vespa GT 200 Granturismo 大踏板车 | Vespa GT 200 Granturismo 大踏板車 | ベスパGT200グラントゥーリズモ | class:disp:250cc | body:scooter | pt:ice | discontinued | 2003–2008 | 2003年推出的GT大框架系列，200cc四冲程引擎，12英寸大轮径，主打长途舒适骑行 |
| model:vespa:gts-250 | Vespa GTS 250 | Vespa GTS 250 初代大踏板车 | Vespa GTS 250 初代大踏板車 | ベスパGTS250 | class:disp:400cc | body:scooter | pt:ice | discontinued | 2005–2010 | 2005年推出的GTS系列初代，250cc电喷引擎，现代Vespa大踏板旗舰的开端 |
| model:vespa:gts-300 | GTS 300 | GTS 300 踏板车 | GTS 300 踏板車 | GTS300 | class:disp:400cc | body:scooter | pt:ice | current | 2010–present | Vespa旗舰大踏板，278cc发动机，动力充沛，都市与高速兼顾 |
| model:vespa:gtv-300 | GTV 300 | GTV 300 复古踏板车 | GTV 300 復古踏板車 | GTV300 | class:disp:400cc | body:scooter | pt:ice | current | 2015–present | GTS复古版，车把下方外露大灯设计致敬经典，限量风格 |
| model:vespa:p125x | Vespa P125X | Vespa P125X 经典踏板车 | Vespa P125X 經典踏板車 | ベスパP125X | class:disp:125cc | body:scooter | pt:ice | discontinued | 1978–1982 | 1978年P系列首代125cc，全新设计语言，方形车头与尾灯，开启P系列时代 |
| model:vespa:p150x | Vespa P150X | Vespa P150X 经典踏板车 | Vespa P150X 經典踏板車 | ベスパP150X | class:disp:250cc | body:scooter | pt:ice | discontinued | 1978–1982 | 1978年P系列首代150cc，P125X兄弟车型，动力更充沛 |
| model:vespa:pk-125 | Vespa PK 125 | Vespa PK 125 经典踏板车 | Vespa PK 125 經典踏板車 | ベスパPK125 | class:disp:125cc | body:scooter | pt:ice | discontinued | 1982–1996 | 1982年推出的PK系列125cc，小框架平台继承者，S/XLS/FL2多代演进，含自动变速版本 |
| model:vespa:primavera-125 | Primavera 125 | Primavera 125 春天 踏板车 | Primavera 125 春天 踏板車 | プリマヴェーラ125 | class:disp:125cc | body:scooter | pt:ice | current | 2013–present | Vespa经典中小型踏板，圆灯圆润车身，125cc四冲程，欧洲都市通勤代表 |
| model:vespa:primavera-125-classic | Vespa Primavera 125 | Vespa Primavera 125 初代春天踏板车 | Vespa Primavera 125 初代春天踏板車 | ベスパプリマヴェーラ125 | class:disp:125cc | body:scooter | pt:ice | discontinued | 1968–1973 | 1968年推出的经典小框架125，圆润车身与圆灯造型，全球畅销名车，现代Primavera前身 |
| model:vespa:primavera-50 | Primavera 50 | Primavera 50 春天 轻便踏板车 | Primavera 50 春天 輕便踏板車 | プリマヴェーラ50 | class:disp:50cc | body:scooter | pt:ice | current | 2013–present | Primavera系列50cc轻便版，燃油经济，欧洲青少年通勤首选 |
| model:vespa:px200e | P200E | P200E 经典踏板 | P200E 經典踏板 | P200E | class:disp:250cc | body:scooter | pt:ice | discontinued | 1978–1995 | Vespa P系列旗舰，198cc二冲程单缸，经典圆润车身，全球踏板文化图腾 |
| model:vespa:rally-180 | Vespa Rally 180 | Vespa Rally 180 经典竞速踏板车 | Vespa Rally 180 經典競速踏板車 | ベスパラリー180 | class:disp:250cc | body:scooter | pt:ice | discontinued | 1968–1973 | 1968年推出的运动版，180cc强劲动力，车头下置大灯致敬初代设计，收藏热门 |
| model:vespa:sprint-150 | Sprint 150 | Sprint 150 冲刺150 踏板车 | Sprint 150 衝刺150 踏板車 | スプリント150 | class:disp:250cc | body:scooter | pt:ice | current | 2014–present | Primavera运动版，线条更凌厉带方形大灯，155cc排量 |
| model:vespa:sprint-150-classic | Vespa Sprint 150 | Vespa Sprint 150 初代冲刺踏板车 | Vespa Sprint 150 初代衝刺踏板車 | ベスパスプリント150 | class:disp:250cc | body:scooter | pt:ice | discontinued | 1965–1979 | 1965年推出的VLB系列运动款150，经典短尾造型，60-70年代Mod亚文化图腾 |
| model:vespa:super-150 | Vespa Super 150 | Vespa Super 150 经典踏板车 | Vespa Super 150 經典踏板車 | ベスパスーパー150 | class:disp:250cc | body:scooter | pt:ice | discontinued | 1965–1969 | 1965年推出的150cc大框架经典，接替VBB成为主力，现代化车头造型 |
| model:vespa:t5 | Vespa T5 | Vespa T5 运动踏板车 | Vespa T5 運動踏板車 | ベスパT5 | class:disp:125cc | body:scooter | pt:ice | discontinued | 1985–1990 | 1985年推出的P系列高性能125，5扫气口竞赛级引擎，方形运动车头，经典收藏款 |
| model:vespa:vba-125 | Vespa VBA 125 | Vespa VBA 125 经典踏板车 | Vespa VBA 125 經典踏板車 | ベスパVBA125 | class:disp:125cc | body:scooter | pt:ice | discontinued | 1953–1957 | 1953年推出的125cc宽框架车型，大灯移至车把，经典圆润造型，战后大众通勤主力 |
| model:vespa:vbb-150 | Vespa VBB 150 | Vespa VBB 150 经典踏板车 | Vespa VBB 150 經典踏板車 | ベスパVBB150 | class:disp:250cc | body:scooter | pt:ice | discontinued | 1957–1965 | 1957年推出的150cc宽框架车型，动力充沛造型优雅，长销至60年代中期的意大利经典 |
| model:vespa:vespa-125 | Vespa 125 | Vespa 125 经典踏板车 | Vespa 125 經典踏板車 | ベスパ125 | class:disp:125cc | body:scooter | pt:ice | discontinued | 1948–1957 | 1948年推出的125cc版本，首配后轮悬挂与改良前悬，因《罗马假日》电影闻名全球 |
| model:vespa:vespa-50 | Vespa 50 | Vespa 50 轻便踏板车 | Vespa 50 輕便踏板車 | ベスパ50 | class:disp:50cc | body:scooter | pt:ice | discontinued | 1963–1971 | 1963年推出的小框架50cc轻便车型，省油易驾，开启Vespa小排量时代，欧洲通勤经典 |
| model:vespa:vespa-90 | Vespa 90 | Vespa 90 轻便踏板车 | Vespa 90 輕便踏板車 | ベスパ90 | class:disp:125cc | body:scooter | pt:ice | discontinued | 1965–1971 | 1965年推出的小框架90cc轻便车型，与50同平台，经济实用，欧洲青少年热门 |
| model:vespa:vespa-946 | 946 | 946 限量踏板车 | 946 限量踏板車 | 946 | class:disp:125cc | body:scooter | pt:ice | current | 2013–present | 2013年百年纪念限量车型，全铝合金车身，手工打造，奢华收藏级 |
| model:vespa:vespa-98 | Vespa 98 | Vespa 98 首款踏板车 | Vespa 98 首款踏板車 | ベスパ98 | class:disp:125cc | body:scooter | pt:ice | discontinued | 1946–1948 | 1946年推出的全球首款Vespa，源自MP6原型，98cc二冲程三速引擎，开创世界踏板车时代 |

### 4.Voge (13款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:voge:650ds | 650DS | 650DS 探险车 | 650DS 探險車 | 650DS | class:disp:600cc | body:adventure | pt:ice | discontinued | 2019–2022 | 无极早期大排量探险车型，652cc单缸水冷，2019年上市，已逐步被DS500X/DS525X等DS系列取代 |
| model:voge:ac300 | AC300 | AC300 咖啡复古 | AC300 咖啡復古 | AC300 | class:disp:400cc | body:cafe-racer | pt:ice | current | 2023–present | 300cc单缸咖啡复古（AC300 Café），2023年上市，与玩乐复古Q250同期发布 |
| model:voge:ac525 | AC525 | AC525 咖啡复古 | AC525 咖啡復古 | AC525 | class:disp:600cc | body:cafe-racer | pt:ice | current | 2022–present | 中排量咖啡复古街车，525cc并列双缸，2022年上市，为500AC的后继车型 |
| model:voge:cu250 | CU250 | CU250 巡航车 | CU250 巡航車 | CU250 | class:disp:250cc | body:cruiser | pt:ice | current | 2024–present | 无极首款V型双缸巡航，250cc水冷，2024年上市，2026年推出第二代并新增AMT自动挡版本 |
| model:voge:cu525 | CU525 | CU525 巡航车 | CU525 巡航車 | CU525 | class:disp:600cc | body:cruiser | pt:ice | current | 2023–present | 无极首款巡航车，525cc并列双缸，2023年上市，2025款升级为都市版与旅行版 |
| model:voge:ds500x | DS500X | DS500X 探险车 | DS500X 探險車 | DS500X | class:disp:600cc | body:adventure | pt:ice | current | 2026–present | 2026年1月上市的中排量ADV，525cc双缸（KE525），延续DSX系列高性价比路线 |
| model:voge:ds525x | DS525X | DS525X 探险车 | DS525X 探險車 | DS525X | class:disp:600cc | body:adventure | pt:ice | current | 2023–present | 中量级ADV主力车型，525cc并列双缸，2023年上市，2025款升级为公路征途版与旷野穿越版 |
| model:voge:ds800x | DS800X | DS800X 探险车 | DS800X 探險車 | DS800X | class:disp:750cc | body:adventure | pt:ice | current | 2026–present | 798cc并列双缸ADV，2025重庆摩博会亮相，海外市场称DS800 Rally，2026年在国内发布 |
| model:voge:ds900x | DS900X | DS900X 探险车 | DS900X 探險車 | DS900X | class:disp:750cc | body:adventure | pt:ice | current | 2024–present | 无极旗舰ADV，895cc并列双缸，源自宝马F900同源动力平台，2024年上市，2025年推出改款 |
| model:voge:lx500 | LX500 | LX500 街车 | LX500 街車 | LX500 | class:disp:600cc | body:naked | pt:ice | current | 2026–present | 2026年推出的中排量街车（公告型号LX500-7C），471cc并列双缸KE500，标配KYB减震与ABS+TCS |
| model:voge:rr500s | RR500S | RR500S 仿赛 | RR500S 仿賽 | RR500S | class:disp:600cc | body:sport | pt:ice | current | 2025–present | 2025年上市的中排量四缸仿赛，475cc直列四缸，标配TCS牵引力控制，主打高性价比跑山性能 |
| model:voge:rr660s | RR660S | RR660S 仿赛 | RR660S 仿賽 | RR660S | class:disp:600cc | body:sport | pt:ice | current | 2024–present | 无极旗舰仿赛，660cc三缸水冷发动机，国产首批量产三缸跑车之一，2024年上市 |
| model:voge:sr150gt | SR150GT | SR150GT 踏板车 | SR150GT 踏板車 | SR150GT | class:disp:250cc | body:scooter | pt:ice | current | 2022–present | 150cc水冷踏板，2022年西安摩博会发布，标配ABS+TCS，主打高性价比城市通勤 |

### 4.Voxan (2款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:voxan:cafe-racer-996 | Cafe Racer 996 | Cafe Racer 996 咖啡赛车（停产） | Cafe Racer 996 咖啡賽車（停產） | カフェレーサー996 | class:disp:1000cc | body:cafe-racer | pt:ice | discontinued | 1999–2005 | 996cc V型双缸咖啡赛车，法国手工品牌Voxan的代表作，独特法式设计与强劲性能 |
| model:voxan:wattman | Wattman | Wattman 纯电怪兽 | Wattman 純電怪獸 | ワットマン | class:disp:1000cc | body:naked | pt:bev | current | 2019–present | 约366马力纯电摩托车，多次打破电动摩托车陆地速度纪录，由Venturi集团旗下Voxan打造 |

### 4.Vyrus (2款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:vyrus:986-m2 | 986 M2 | 986 M2 轮毂转向仿赛（停产） | 986 M2 輪轂轉向仿賽（停產） | 986 M2 | class:disp:1000cc | body:sport | pt:ice | discontinued | 2008–2014 | 搭载杜卡迪1098发动机，Vyrus早期轮毂中心转向量产车型，奠定品牌独特技术路线 |
| model:vyrus:987-c3-4v | 987 C3 4V | 987 C3 4V 轮毂转向仿赛 | 987 C3 4V 輪轂轉向仿賽 | 987 C3 4V | class:disp:1000cc | body:sport | pt:ice | current | 2010–present | 搭载杜卡迪1198/1299发动机，轮毂中心转向设计的定制级手工仿赛，限量生产 |

### 4.Wangjiang (6款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:wangjiang:cb150r | CB150R | CB150R 复古跨骑 | CB150R 復古跨騎 | CB150R | class:disp:250cc | body:naked | pt:ice | current | 2020–present | 望江CB150R，150cc复古风格跨骑车，圆灯造型致敬经典CB系列 |
| model:wangjiang:gn250 | GN250 | 望江铃木GN250 巡航车 | 望江鈴木GN250 巡航車 | GN250 | class:disp:250cc | body:cruiser | pt:ice | discontinued | 1988–2005 | 望江铃木GN250，250cc单缸太子巡航车，初代CKD进口售价高达3.5万元，一代经典太子车 |
| model:wangjiang:wj125t-36 | WJ125T-36 | WJ125T-36 踏板车 | WJ125T-36 踏板車 | WJ125T-36 | class:disp:125cc | body:scooter | pt:ice | current | 2018–present | 望江WJ125T-36，125cc主力通勤踏板车型，皮实耐用价格亲民 |
| model:wangjiang:xiaolingtong-125 | Xiaolingtong 125 | 现代小铃童125 迷你车 | 現代小鈴童125 迷你車 | シャオリントン125 | class:disp:125cc | body:mini | pt:ice | current | 2020–present | 望江现代小铃童125，125cc迷你车型，小猴子风格，是望江边三轮版本的母体车型 |
| model:wangjiang:xiaolingtong-150-sidecar | Xiaolingtong 150 Sidecar | 现代小铃童150 边三轮 | 現代小鈴童150 邊三輪 | シャオリントン150サイドカー | class:disp:250cc | body:trike | pt:ice | current | 2022–present | 望江现代小铃童150迷你边三轮，轴传动设计，售价16800元，造型呆萌圆润 |
| model:wangjiang:yuemei | Yuemei | 悦美 踏板车 | 悅美 踏板車 | ユエメイ | class:disp:125cc | body:scooter | pt:ice | current | 2019–present | 望江悦美，125cc通勤踏板车，造型时尚小巧，城市代步高性价比之选 |

### 4.Wuyang-Honda (10款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:wuyang-honda:cb190r | CB190R | 暴锋眼CB190R 街车 | 暴鋒眼CB190R 街車 | CB190R | class:disp:250cc | body:naked | pt:ice | current | 2015–present | 五羊-本田暴锋眼CB190R，184cc单缸水冷运动街车，本田190平台代表作，合资入门运动街车标杆 |
| model:wuyang-honda:cb190ss | CB190SS | 鸷道CB190SS 复古车 | 鷙道CB190SS 復古車 | CB190SS | class:disp:250cc | body:scrambler | pt:ice | current | 2019–present | 五羊-本田鸷道CB190SS，184cc单缸复古风格街车，圆灯圆表，国产合资复古入门热门车型 |
| model:wuyang-honda:cb190x | CB190X | 猛鸷CB190X 探险车 | 猛鷙CB190X 探險車 | CB190X | class:disp:250cc | body:adventure | pt:ice | current | 2017–present | 五羊-本田猛鸷CB190X，184cc单缸休旅探险车，摩旅市场热门入门拉力车型 |
| model:wuyang-honda:cg125 | CG125 | CG125 经典跨骑 | CG125 經典跨騎 | CG125 | class:disp:125cc | body:naked | pt:ice | current | 1992–present | 五羊-本田CG125，125cc单缸经典通路车，中国摩托车史上最经典的车型之一，皮实耐用 |
| model:wuyang-honda:lead125 | LEAD125 | LEAD125 踏板车 | LEAD125 踏板車 | LEAD125 | class:disp:125cc | body:scooter | pt:ice | current | 2022–present | 五羊-本田LEAD125，本田全球畅销的125cc平踏板，国产化后保留ESP水冷发动机与无钥匙启动 |
| model:wuyang-honda:ncr125 | NCR125 | NCR125 踏板车 | NCR125 踏板車 | NCR125 | class:disp:125cc | body:scooter | pt:ice | current | 2022–present | 五羊-本田NCR125，125cc通勤踏板车，搭载本田ESP发动机，城市代步主力车型 |
| model:wuyang-honda:nwt125 | NWT 125 | NWT125 平踏板 | NWT125 平踏板 | NWT125 | class:disp:125cc | body:scooter | pt:ice | current | 2026–present | 五羊-本田2026年8月发布的全新125cc平踏板，碟刹版8680元起、ABS版9880元，主打高性价比通勤 |
| model:wuyang-honda:nwt150 | NWT 150 | NWT150 平踏板 | NWT150 平踏板 | NWT150 | class:disp:125cc | body:scooter | pt:ice | current | 2025–present | 五羊-本田150cc平踏板，2025年上市售价14980元起，高配版搭载毫米波雷达，2026年8月推出改款 |
| model:wuyang-honda:pcx-2025 | PCX 160 (2025) | PCX 160 踏板车（2025款） | PCX 160 踏板車（2025款） | PCX 160（2025年型） | class:disp:125cc | body:scooter | pt:ice | current | 2025–present | 五羊-本田2025款PCX，第五代本田PCX国产版，全LED加TFT全彩仪表，KYB气囊后减震，售价19990元起 |
| model:wuyang-honda:phantom-150 | Phantom 150 | 幻影150 街车 | 幻影150 街車 | ファントム150 | class:disp:250cc | body:naked | pt:ice | current | 2011–present | 五羊-本田幻影150，150cc单缸运动街车，一代经典合资运动车型 |

### 4.Yamaha (124款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:yamaha:bws-50 | BW's 50 | BW's 50 50cc 小轮踏板 | BW's 50 50cc 小輪踏板 | BW's 50 | class:disp:50cc | body:scooter | pt:ice | discontinued | 1992–2005 | 49cc二冲程小轮踏板，粗犷越野风格，大肥胎+双圆灯，欧洲与日本街头的经典个性踏板 |
| model:yamaha:chappy | Chappy | Chappy 50cc 休闲小摩托 | Chappy 50cc 休閒小機車 | チャピィ | class:disp:50cc | body:underbone | pt:ice | discontinued | 1973–1983 | 1973年上市的50cc休闲小摩托，圆润龟壳造型，自动挡轻巧易骑，日本家庭用车文化代表 |
| model:yamaha:cygnus-x | Cygnus X | Cygnus X 劲战 踏板车 | Cygnus X 勁戰 機車 | シグナスX | class:disp:125cc | body:scooter | pt:ice | current | 2002–present | 台湾市场经典运动踏板，125cc，改装文化浓厚，现款升级为Cygnus Gryphus |
| model:yamaha:dt-1 | DT-1 | DT-1 250cc 越野开创者 | DT-1 250cc 越野開創者 | DT-1 | class:disp:250cc | body:dual-sport | pt:ice | discontinued | 1968–1971 | 1968年推出，被公认为世界首款真正的量产越野摩托车，246cc二冲程单缸，开创了trail bike新品类 |
| model:yamaha:dt125 | DT125 | DT125 125cc 林道两用车 | DT125 125cc 林道兩用車 | DT125 | class:disp:125cc | body:dual-sport | pt:ice | discontinued | 1974–1997 | 123cc二冲程单缸林道车，DT系列中小排量代表，欧洲与日本市场畅销多年的入门级两用车 |
| model:yamaha:dt250 | DT250 | DT250 250cc 林道两用车 | DT250 250cc 林道兩用車 | DT250 | class:disp:250cc | body:dual-sport | pt:ice | discontinued | 1972–1977 | DT-1后继车型，246cc二冲程单缸林道车，1970年代美国越野摩托车热潮的主力车型 |
| model:yamaha:fj1100 | FJ1100 | FJ1100 运动旅行车（停产） | FJ1100 運動旅行車（停產） | FJ1100 | class:disp:1000cc | body:sport-touring | pt:ice | discontinued | 1984–1986 | 1097cc直列四缸全整流罩运动旅行车，FJ1200前身，长途高速利器 |
| model:yamaha:fj1200 | FJ1200 | FJ1200 1200cc 运动旅行 | FJ1200 1200cc 運動旅行 | FJ1200 | class:disp:1000cc | body:sport-touring | pt:ice | discontinued | 1986–1996 | 1188cc气冷四缸运动旅行车，FJ1100升级版，欧洲长途旅行常青树，1991年起可选ABS |
| model:yamaha:fjr1300 | FJR1300 | FJR1300 运动旅行车 | FJR1300 運動旅行車 | FJR1300 | class:disp:1000cc | body:sport-touring | pt:ice | current | 2001–present | 1298cc四缸运动旅行标杆，轴传动+电动风挡，长途巡航舒适可靠 |
| model:yamaha:fz1-fazer | FZ-1 / FZ1 FAZER | FZ1 FAZER 老款街车（停产） | FZ1 FAZER 老款街車（停產） | FZ1 フェザー | class:disp:1000cc | body:naked | pt:ice | discontinued | 2001–2015 | 初代R1发动机街车化，MT-10前身，经典公升级街车 |
| model:yamaha:fzr1000 | FZR1000 | FZR1000 公升仿赛（停产） | FZR1000 公升仿賽（停產） | FZR1000 | class:disp:1000cc | body:sport | pt:ice | discontinued | 1987–1995 | 989cc直列四缸超级运动车，1989年加入EXUP可变排气，公升仿赛标杆 |
| model:yamaha:fzr250 | FZR250 | FZR250 250cc 四缸仿赛 | FZR250 250cc 四缸仿賽 | FZR250 | class:disp:250cc | body:sport | pt:ice | discontinued | 1987–1990 | 249cc水冷四缸，250cc排量搭载四缸18,000rpm高转引擎，EXUP可变排气，日本本土250cc仿赛黄金时代代表作 |
| model:yamaha:fzr400 | FZR400 | FZR400 400cc 仿赛 | FZR400 400cc 仿賽 | FZR400 | class:disp:400cc | body:sport | pt:ice | discontinued | 1987–1994 | 399cc水冷四缸仿赛，铝合金Delta车架，日本本土400cc仿赛黄金时代代表，弯道性能一流 |
| model:yamaha:fzr600 | FZR600 | FZR600 600cc 中量级仿赛 | FZR600 600cc 中量級仿賽 | FZR600 | class:disp:600cc | body:sport | pt:ice | discontinued | 1989–1999 | 599cc水冷四缸中量级仿赛，FZR系列长青树，1992年改款升级Delta车架，600cc赛事热门之选 |
| model:yamaha:fzr750r | FZR750R (OW01) | FZR750R OW01 750cc 限量仿赛 | FZR750R OW01 750cc 限量仿賽 | FZR750R (OW01) | class:disp:750cc | body:sport | pt:ice | discontinued | 1987–1990 | 749cc水冷四缸，雅马哈首款超级运动限量版，代号OW01，铝合金车架+钛合金连杆，仅生产500台，为赛事认证打造 |
| model:yamaha:fzx750 | FZX750 | FZX750 750cc V4街车 | FZX750 750cc V4街車 | FZX750 | class:disp:750cc | body:naked | pt:ice | discontinued | 1986–1991 | 749cc水冷V型四缸街车（Fazer），短轴距操控灵活，80年代末四缸热潮中的个性之选 |
| model:yamaha:gts1000 | GTS1000 | GTS1000 1000cc 运动旅行 | GTS1000 1000cc 運動旅行 | GTS1000 | class:disp:1000cc | body:sport-touring | pt:ice | discontinued | 1993–1996 | 998cc四缸运动旅行车，1993年推出，搭载独创的RADD轮毂中心转向前悬挂，技术超前的小众杰作 |
| model:yamaha:jog | Jog | Jog 巧格 踏板车 | Jog 巧格 踏板車 | ジョグ | class:disp:50cc | body:scooter | pt:ice | current | 1982–present | 49cc轻踏板，日本本土与东南亚畅销40余年，国内称巧格，改装文化浓厚 |
| model:yamaha:majesty-400 | Majesty 400 | Majesty 400 大绵羊 | Majesty 400 大綿羊 | マジェスティ400 | class:disp:400cc | body:maxi-scooter | pt:ice | current | 2004–present | 395cc水冷大踏板，大沙发座椅+电动风挡，日系大绵羊先驱之一 |
| model:yamaha:mate | Mate | Mate 50cc 弯梁商务车 | Mate 50cc 彎樑商務車 | メイト | class:disp:50cc | body:underbone | pt:ice | discontinued | 1965–2008 | 50cc弯梁商务车，搭载Autolube自动分离润滑，日本邮政、配送与家庭通勤国民车，生产长达43年 |
| model:yamaha:mt-03 | MT-03 | MT-03 入门街车 | MT-03 入門街車 | MT-03 | class:disp:400cc | body:naked | pt:ice | current | 2016–present | 与YZF-R3同平台，321cc并列双缸，入门街车代表 |
| model:yamaha:mt-07 | MT-07 | MT-07 扭力大师 | MT-07 扭力大師 | MT-07 | class:disp:750cc | body:naked | pt:ice | current | 2014–present | 689cc并列双缸Crossplane概念，低扭强劲，中量级性价比之王 |
| model:yamaha:mt-07-2025 | MT-07 (2025) | MT-07 扭力大师（2025新世代） | MT-07 扭力大師（2025新世代） | MT-07 | class:disp:750cc | body:naked | pt:ice | current | 2025–present | 雅马哈2025年全新一代MT-07，689cc CP2双缸强化中低扭，可选Y-AMT手自一体变速箱，全新车架与骑行三角 |
| model:yamaha:mt-09 | MT-09 | MT-09 三缸街车 | MT-09 三缸街車 | MT-09 | class:disp:750cc | body:naked | pt:ice | current | 2014–present | 890cc并列三缸，扭矩充沛，电子配置丰富，2024年大改款 |
| model:yamaha:mt-10 | MT-10 | MT-10 公升级街车 | MT-10 公升級街車 | MT-10 | class:disp:1000cc | body:naked | pt:ice | current | 2016–present | 搭载R1同款十字曲轴四缸发动机，公升级街车旗舰，SP版配Ohlins |
| model:yamaha:mt-15 | MT-15 | MT-15 入门街车 | MT-15 入門街車 | MT-15 | class:disp:250cc | body:naked | pt:ice | current | 2019–present | R15同平台街车版，155cc单缸，MT家族暗黑风格，新兴市场畅销 |
| model:yamaha:mx400 | MX400 | MX400 400cc 场地越野 | MX400 400cc 場地越野 | MX400 | class:disp:400cc | body:motocross | pt:ice | discontinued | 1976–1979 | 397cc二冲程单缸场地越野赛车，MX系列中坚型号，1970年代后半期越野赛事主力 |
| model:yamaha:nmax | NMAX 155 / 125 | NMAX 踏板车 | NMAX 踏板車 | NMAX155/125 | class:disp:125cc | body:scooter | pt:ice | current | 2015–present | 155cc VVA可变气门踏板，东南亚畅销，ABS+TCS |
| model:yamaha:pw50 | PW50 | PW50 儿童越野车 | PW50 兒童越野車 | PW50 | class:disp:50cc | body:mini | pt:ice | current | 1981–present | 49cc二冲程儿童越野车，全球销量最大的儿童摩托，初学者神器 |
| model:yamaha:r5 | R5 | R5 350cc 二冲程运动街车 | R5 350cc 二衝程運動街車 | R5 | class:disp:400cc | body:naked | pt:ice | discontinued | 1970–1973 | 347cc二冲程并列双缸，YR-3后继车型，强劲350cc小钢炮，RD350直接前身 |
| model:yamaha:rd125 | RD125 | RD125 125cc 二冲程双缸跑车 | RD125 125cc 二衝程雙缸跑車 | RD125 | class:disp:125cc | body:sport | pt:ice | discontinued | 1974–1987 | 123cc二冲程并列双缸，RD系列最小排量型号，入门级二冲程运动车，培养了一代车手 |
| model:yamaha:rd250 | RD250 | RD250 二冲程双缸跑车 | RD250 二衝程雙缸跑車 | RD250 | class:disp:250cc | body:sport | pt:ice | discontinued | 1973–1987 | 247cc二冲程并列双缸，RD系列代表作，日本/澳洲市场又名RZ250，后期改水冷并搭载YPVS可变排气 |
| model:yamaha:rd350 | RD350 | RD350 二冲程街跑（停产） | RD350 二衝程街跑（停產） | RD350 | class:disp:400cc | body:sport | pt:ice | discontinued | 1973–1990 | 347cc并列双缸二冲程名机，后期改水冷，速度与操控的传奇之作 |
| model:yamaha:rd350lc | RD350LC | RD350LC 350cc 水冷二冲程跑车 | RD350LC 350cc 水冷二衝程跑車 | RD350LC | class:disp:400cc | body:sport | pt:ice | discontinued | 1980–1982 | 347cc二冲程并列双缸水冷，RD系列首款水冷车型，绰号'水冷RD'，两冲程黄金时代的经典之作 |
| model:yamaha:rd400 | RD400 | RD400 二冲程双缸跑车 | RD400 二衝程雙缸跑車 | RD400 | class:disp:400cc | body:sport | pt:ice | discontinued | 1976–1979 | 399cc气冷二冲程并列双缸，RD350扩缸版，主要为北美市场打造，70年代末性能街车代表 |
| model:yamaha:rd500lc | RD500LC | RD500LC 二冲程V4仿赛（停产） | RD500LC 二衝程V4仿賽（停產） | RD500LC | class:disp:600cc | body:sport | pt:ice | discontinued | 1984–1987 | 499cc V型四缸二冲程旗舰跑车，GP赛车复刻量产，两冲程黄金时代代表作 |
| model:yamaha:rz350 | RZ350 | RZ350 二冲程跑车（停产） | RZ350 二衝程跑車（停產） | RZ350 | class:disp:400cc | body:sport | pt:ice | discontinued | 1983–1990 | 347cc二冲程并列双缸，YPVS可变排气技术，80年代传奇小钢炮 |
| model:yamaha:sdr200 | SDR200 | SDR200 200cc 二冲程单缸运动车 | SDR200 200cc 二衝程單缸運動車 | SDR200 | class:disp:250cc | body:naked | pt:ice | discontinued | 1986–1990 | 195cc二冲程水冷单缸，轻量化运动街车，绰号'二冲程单缸暴徒'，操控灵活加速迅猛 |
| model:yamaha:sr400 | SR400 | SR400 单缸复古街车（停产） | SR400 單缸復古街車（停產） | SR400 | class:disp:400cc | body:naked | pt:ice | discontinued | 1978–2021 | 经典单缸复古，长期保留脚启动，43年传奇生涯落幕 |
| model:yamaha:sr500 | SR500 | SR500 单缸复古街车（停产） | SR500 單缸復古街車（停產） | SR500 | class:disp:600cc | body:naked | pt:ice | discontinued | 1978–1999 | 499cc风冷单缸复古车，脚启动情怀之选，SR400的大哥 |
| model:yamaha:srx400 | SRX400 | SRX400 400cc 单缸运动街车 | SRX400 400cc 單缸運動街車 | SRX400 | class:disp:400cc | body:naked | pt:ice | discontinued | 1985–1997 | 399cc风冷单缸运动街车，SR系列的运动化版本，轻量化单缸乐趣，日本本土400cc经典 |
| model:yamaha:srx600 | SRX600 | SRX600 600cc 单缸运动街车 | SRX600 600cc 單缸運動街車 | SRX600 | class:disp:600cc | body:naked | pt:ice | discontinued | 1985–1990 | 595cc风冷单缸运动街车，SRX系列最大排量，轻量化车架+大单缸扭矩，操控乐趣极高 |
| model:yamaha:super-tenere-xt1200z | Super Tenere XT1200Z | 超级泰内雷 XT1200Z 大探险（停产） | 超級泰內雷 XT1200Z 大探險（停產） | スーパーテネレ XT1200Z | class:disp:1000cc | body:adventure | pt:ice | discontinued | 2010–2021 | 1200cc并列双缸大ADV，轴传动，达喀尔赛事技术下放 |
| model:yamaha:tdm850 | TDM850 | TDM850 850cc 公路ADV | TDM850 850cc 公路ADV | TDM850 | class:disp:1000cc | body:adventure | pt:ice | discontinued | 1991–2001 | 849cc水冷双缸，公路型冒险车先驱，发动机源自达喀尔冠军XTZ750，后期改270度曲轴低扭充沛 |
| model:yamaha:tdm900 | TDM900 | TDM900 900cc 公路探险车 | TDM900 900cc 公路探險車 | TDM900 | class:disp:750cc | body:adventure | pt:ice | discontinued | 2002–2012 | 897cc水冷双缸，TDM850后继车型，270度曲轴低扭充沛，公路型ADV先驱，操控灵活驾驶乐趣高 |
| model:yamaha:tenere-700 | Tenere 700 | Tenere 700 T7 硬派探险 | Tenere 700 T7 硬派探險 | テネレ700 | class:disp:750cc | body:adventure | pt:ice | current | 2019–present | 硬派ADV标杆，MT-07同款双缸，钢管车架，专注越野性能 |
| model:yamaha:tenere-700-world-raid-2026 | Ténéré 700 World Raid | Ténéré 700 World Raid 拉力探险（2026款） | Ténéré 700 World Raid 拉力探險（2026款） | テネレ700 ワールドレイド | class:disp:750cc | body:adventure | pt:ice | current | 2026–present | 2026款Ténéré 700 World Raid，689cc CP2双缸，首次搭载6轴IMU与弯道ABS，升级全可调悬挂与大容量油箱 |
| model:yamaha:tmax-560 | TMAX 560 / Tech Max | TMAX 560 大绵羊旗舰 | TMAX 560 大綿羊旗艦 | TMAX 560 テックマックス | class:disp:750cc | body:maxi-scooter | pt:ice | current | 2020–present | 大绵羊之王，562cc并列双缸，运动性能媲美街车，Tech Max顶配版 |
| model:yamaha:tracer-7-tracer-9 | Tracer 7 / Tracer 9 / GT | Tracer 7/9 GT 运动旅行 | Tracer 7/9 GT 運動旅行 | トレーサー7/9 GT | class:disp:750cc | body:sport-touring | pt:ice | current | 2016–present | MT系列同平台运动旅行车，GT版带边箱，长途舒适+运动性能 |
| model:yamaha:tt-r125 | TT-R125 | TT-R125 青少年林道车 | TT-R125 青少年林道車 | TT-R125 | class:disp:125cc | body:enduro | pt:ice | current | 2001–present | 124cc气冷单缸青少年林道车，电启动+自动离合，越野入门之选 |
| model:yamaha:tt500 | TT500 | TT500 500cc 场地越野 | TT500 500cc 場地越野 | TT500 | class:disp:600cc | body:motocross | pt:ice | discontinued | 1975–1981 | 499cc风冷四冲程单缸场地越野赛车，雅马哈首批四冲程纯越野车，大单缸低扭强劲 |
| model:yamaha:tw200 | TW200 | TW200 胖胎两用车 | TW200 胖胎兩用車 | TW200 | class:disp:250cc | body:dual-sport | pt:ice | current | 1987–present | 196cc单缸+肥厚越野胎，复古玩乐型两用车，美国市场长青经典 |
| model:yamaha:tz750 | TZ750 | TZ750 二冲程GP赛车（停产） | TZ750 二衝程GP賽車（停產） | TZ750 | class:disp:750cc | body:sport | pt:ice | discontinued | 1974–1979 | 748cc直列四缸二冲程GP赛车，雅马哈赛道霸主，绰号'街道火箭' |
| model:yamaha:tzr125 | TZR125 | TZR125 125cc 二冲程仿赛 | TZR125 125cc 二衝程仿賽 | TZR125 | class:disp:125cc | body:sport | pt:ice | discontinued | 1986–1995 | 124cc二冲程单缸（后改水冷），搭载YPVS可变排气，Delbox方形整流罩，欧洲与日本市场经典小排量仿赛 |
| model:yamaha:tzr250 | TZR250 | TZR250 二冲程仿赛 | TZR250 二衝程仿賽 | TZR250 | class:disp:250cc | body:sport | pt:ice | discontinued | 1986–1995 | 249cc二冲程跑车，由并列双缸发展到90度V型双缸，搭载YPVS可变排气，二冲程仿赛巅峰之作 |
| model:yamaha:vino | Vino | Vino 50cc 复古踏板 | Vino 50cc 復古踏板 | ビーノ | class:disp:50cc | body:scooter | pt:ice | current | 1997–present | 1997年上市的古着风格50cc踏板车，复古圆灯圆润车身，由二冲程演变为四冲程水冷，至今仍在生产 |
| model:yamaha:vmax | VMAX | VMAX 大魔鬼（停产经典） | VMAX 大魔鬼（停產經典） | V-MAX | class:disp:1000cc | body:cruiser | pt:ice | discontinued | 1985–2020 | 1700cc V4大魔鬼，肌肉巡航传奇，V-Boost加速系统名震一时 |
| model:yamaha:wr250f | WR250F | WR250F 耐力越野 | WR250F 耐力越野 | WR250F | class:disp:250cc | body:enduro | pt:ice | current | 2001–present | 250cc四冲程耐力越野车，YZ250F同平台，赛事与练习兼顾 |
| model:yamaha:wr250r | WR250R | WR250R 林道越野（停产） | WR250R 林道越野（停產） | WR250R | class:disp:250cc | body:enduro | pt:ice | discontinued | 2008–2020 | 250cc水冷单缸可上牌林道越野，整备质量仅134kg，越野性能标杆 |
| model:yamaha:wr400f | WR400F | WR400F 400cc 四冲程耐力越野 | WR400F 400cc 四衝程耐力越野 | WR400F | class:disp:400cc | body:enduro | pt:ice | discontinued | 1998–2000 | 399cc水冷四冲程单缸耐力越野车，WR系列首款四冲程车型，开创了WR四冲程越野传奇 |
| model:yamaha:wr450f | WR450F | WR450F 耐力越野 | WR450F 耐力越野 | WR450F | class:disp:600cc | body:enduro | pt:ice | current | 2003–present | 450cc四冲程耐力越野车，部分市场可上牌，越野赛事与穿越两相宜 |
| model:yamaha:xj400 | XJ400 | XJ400 400cc 四缸街车 | XJ400 400cc 四缸街車 | XJ400 | class:disp:400cc | body:naked | pt:ice | discontinued | 1980–1989 | 398cc风冷直列四缸，XJ系列入门排量，日本本土400cc驾照黄金排量时代的代表车型 |
| model:yamaha:xj550 | XJ550 | XJ550 550cc 四缸街车 | XJ550 550cc 四缸街車 | XJ550 | class:disp:600cc | body:naked | pt:ice | discontinued | 1981–1984 | 531cc风冷直列四缸，XJ系列中量级，有Maxim巡航版与Seca运动版两种形态 |
| model:yamaha:xj600-diversion | XJ600 Diversion | XJ600 Diversion 600cc 街车 | XJ600 Diversion 600cc 街車 | XJ600 ディバージョン | class:disp:600cc | body:naked | pt:ice | discontinued | 1984–1998 | 598cc风冷四缸，欧洲市场称Diversion/Seca II，可靠耐用，欧洲畅销多年的中量级街车 |
| model:yamaha:xj650 | XJ650 | XJ650 650cc 四缸街车 | XJ650 650cc 四缸街車 | XJ650 | class:disp:750cc | body:naked | pt:ice | discontinued | 1980–1985 | 653cc风冷四缸街车，Maxim与Seca两种形态，80年代初期中量级主力，轻快易操控 |
| model:yamaha:xj750 | XJ750 | XJ750 750cc 四缸街车 | XJ750 750cc 四缸街車 | XJ750 | class:disp:750cc | body:naked | pt:ice | discontinued | 1981–1985 | 745cc风冷四缸，XJ系列准公升级，Maxim巡航版低把手设计，80年代中量级主力 |
| model:yamaha:xj900 | XJ900 | XJ900 900cc 四缸运动旅行车 | XJ900 900cc 四缸運動旅行車 | XJ900 | class:disp:750cc | body:sport-touring | pt:ice | discontinued | 1983–1994 | 853cc风冷四缸，XJ系列公升级运动旅行版，半整流罩设计，长途舒适性优秀 |
| model:yamaha:xj900-diversion | XJ900 Diversion | XJ900 Diversion 900cc 运动旅行车 | XJ900 Diversion 900cc 運動旅行車 | XJ900 ディバージョン | class:disp:750cc | body:sport-touring | pt:ice | discontinued | 1994–2003 | 853cc风冷四缸，XJ900后继车型，全整流罩，欧洲市场热销的运动旅行车 |
| model:yamaha:xjr1200 | XJR1200 | XJR1200 1200cc 四缸复古街车 | XJR1200 1200cc 四缸復古街車 | XJR1200 | class:disp:1000cc | body:naked | pt:ice | discontinued | 1995–1999 | 1188cc风冷直列四缸，XJR1300的前身，气冷大排量复古街车，造型经典改装热门 |
| model:yamaha:xjr1300 | XJR1300 | XJR1300 直四复古街车（停产） | XJR1300 直四復古街車（停產） | XJR1300 | class:disp:1000cc | body:naked | pt:ice | discontinued | 1999–2018 | 1250cc气冷直列四缸，复古街车代表，最后期配Öhlins悬挂 |
| model:yamaha:xjr400 | XJR400 | XJR400 400cc 四缸复古街车 | XJR400 400cc 四缸復古街車 | XJR400 | class:disp:400cc | body:naked | pt:ice | discontinued | 1993–2007 | 399cc风冷直列四缸，XJR系列400cc版，气冷四缸复古街车，日本本土400cc大排量驾照经典之选 |
| model:yamaha:xmax | XMAX 300 / 250 | XMAX 踏板车 | XMAX 踏板車 | XMAX300/250 | class:disp:250cc | body:maxi-scooter | pt:ice | current | 2006–present | 中高端大踏板，Blue Core发动机，TCS循迹，大储物空间 |
| model:yamaha:xs-1 | XS-1 / XS-2 | XS-1/XS-2 650cc 四冲程街车 | XS-1/XS-2 650cc 四衝程街車 | XS-1/XS-2 | class:disp:750cc | body:naked | pt:ice | discontinued | 1970–1972 | 653cc风冷四冲程并列双缸，雅马哈首款量产四冲程街车，XS650前身，借鉴英国BSA技术 |
| model:yamaha:xs1100 | XS1100 | XS1100 1100cc 四缸街车 | XS1100 1100cc 四缸街車 | XS1100（XSイレブン） | class:disp:1000cc | body:naked | pt:ice | discontinued | 1977–1983 | 1101cc风冷四缸，别名XS Eleven，1978年亮相时是当时排量最大的量产摩托之一，轴传动长途巡航利器 |
| model:yamaha:xs400 | XS400 | XS400 400cc 四冲程街车 | XS400 400cc 四衝程街車 | XS400 | class:disp:400cc | body:naked | pt:ice | discontinued | 1976–1982 | 391cc风冷并列双缸，XS系列中量级入门街车，性价比较高，适合新手 |
| model:yamaha:xs500 | XS500 | XS500 500cc 四冲程街车 | XS500 500cc 四衝程街車 | XS500 | class:disp:600cc | body:naked | pt:ice | discontinued | 1973–1975 | 498cc风冷并列双缸，XS系列中量级代表，1970年代中期雅马哈四冲程街车中坚型号 |
| model:yamaha:xs650 | XS650 | XS650 双缸复古街车（停产） | XS650 雙缸復古街車（停產） | XS650 | class:disp:750cc | body:naked | pt:ice | discontinued | 1970–1983 | 653cc风冷双缸复古街车，咖啡馆改装圈经典底子，雅马哈70年代功臣 |
| model:yamaha:xs750 | XS750 | XS750 750cc 三缸街车 | XS750 750cc 三缸街車 | XS750 | class:disp:750cc | body:naked | pt:ice | discontinued | 1976–1981 | 747cc风冷三缸四冲程街车，雅马哈首款三缸机，轴传动，XS四冲程家族承上启下之作 |
| model:yamaha:xs850 | XS850 | XS850 850cc 三缸街车 | XS850 850cc 三缸街車 | XS850 | class:disp:750cc | body:naked | pt:ice | discontinued | 1979–1981 | 826cc风冷三缸四冲程，XS750后继扩缸版，轴传动，三缸声浪独特 |
| model:yamaha:xsr700-xsr900 | XSR700 / XSR900 | XSR700/900 复古街车 | XSR700/900 復古街車 | XSR700/XSR900 | class:disp:750cc | body:naked | pt:ice | current | 2016–present | Sport Heritage系列，MT同平台复古外观，Legacy Yellow经典配色 |
| model:yamaha:xsr900-gp | XSR900 GP | XSR900 GP 复古运动车（2025款） | XSR900 GP 復古運動車（2025款） | XSR900 GP | class:disp:750cc | body:cafe-racer | pt:ice | current | 2025–present | 雅马哈2025年全新Sport Heritage车型，890cc CP3三缸，致敬1980年代YZR500 GP赛车风格半导流罩 |
| model:yamaha:xt250 | XT250 | XT250 林道两用车 | XT250 林道兩用車 | XT250 | class:disp:250cc | body:dual-sport | pt:ice | current | 1980–present | 249cc单缸轻量两用车，重量轻操控好，越野通勤两相宜 |
| model:yamaha:xt350 | XT350 | XT350 350cc 林道两用车 | XT350 350cc 林道兩用車 | XT350 | class:disp:400cc | body:dual-sport | pt:ice | discontinued | 1985–2000 | 346cc风冷单缸两用车，XT系列中量级长青树，轻巧可靠，越野入门与日常通勤皆宜 |
| model:yamaha:xt500 | XT500 | XT500 500cc 单缸两用车 | XT500 500cc 單缸兩用車 | XT500 | class:disp:600cc | body:dual-sport | pt:ice | discontinued | 1976–1989 | 499cc风冷单缸两用车，1979年巴黎达喀尔冠军车型，越野拉力赛大单缸传奇，与SR500共用动力 |
| model:yamaha:xt550 | XT550 | XT550 550cc 单缸两用车 | XT550 550cc 單缸兩用車 | XT550 | class:disp:600cc | body:dual-sport | pt:ice | discontinued | 1981–1983 | 558cc风冷单缸两用车，XT500扩缸后继车型，双排气管布局，XT600的前身 |
| model:yamaha:xt600 | XT600 | XT600 林道两用车（停产） | XT600 林道兩用車（停產） | XT600 | class:disp:600cc | body:dual-sport | pt:ice | discontinued | 1983–2003 | 595cc单缸长途林道车，XT系列传奇，撒哈拉穿越经典 |
| model:yamaha:xt660 | XT660 | XT660 660cc 单缸两用车 | XT660 660cc 單缸兩用車 | XT660 | class:disp:750cc | body:dual-sport | pt:ice | discontinued | 2004–2016 | 660cc水冷单缸两用车，XT600的后续电喷版，强劲低扭，长途穿越利器 |
| model:yamaha:xtz660 | XTZ660 Ténéré | XTZ660 Ténéré 660cc 探险车 | XTZ660 Ténéré 660cc 探險車 | XTZ660 テネレ | class:disp:750cc | body:adventure | pt:ice | discontinued | 1991–1999 | 659cc水冷单缸探险车，Ténéré系列中量级版，XTZ750单缸缩小版，轻量化穿越之选 |
| model:yamaha:xtz750 | XTZ750 Super Ténéré | XTZ750 Super Ténéré 达喀尔ADV | XTZ750 Super Ténéré 達卡ADV | XTZ750 スーパーテネレ | class:disp:750cc | body:adventure | pt:ice | discontinued | 1989–1996 | 749cc水冷双缸探险车，1991年巴黎达喀尔冠军，Super Ténéré传奇的开端，TDM850发动机的源头 |
| model:yamaha:xv1100 | XV1100 Virago | XV1100 Virago 1100cc V缸巡航 | XV1100 Virago 1100cc V缸巡航 | XV1100 ビラーゴ | class:disp:1000cc | body:cruiser | pt:ice | discontinued | 1985–1999 | 1063cc风冷V型双缸，Virago系列公升级旗舰，Virago家族最大排量，美式巡航风格浓郁 |
| model:yamaha:xv250 | XV250 Virago | XV250 Virago 250cc V缸巡航 | XV250 Virago 250cc V缸巡航 | XV250 ビラーゴ | class:disp:250cc | body:cruiser | pt:ice | discontinued | 1988–2010 | 249cc风冷V型双缸，Virago系列最小排量，入门级巡航车代表，轻巧低座高，适合新手 |
| model:yamaha:xv535 | XV535 Virago | XV535 Virago 535cc V缸巡航 | XV535 Virago 535cc V缸巡航 | XV535 ビラーゴ | class:disp:600cc | body:cruiser | pt:ice | discontinued | 1988–2003 | 535cc风冷V型双缸，Virago系列中量级畅销型号，日系美式巡航经典之选 |
| model:yamaha:xv750 | XV750 Virago | XV750 Virago V缸巡航（停产） | XV750 Virago V缸巡航（停產） | XV750 ビラーゴ | class:disp:750cc | body:cruiser | pt:ice | discontinued | 1981–1999 | 748cc V型双缸Virago巡航车，日系美式巡航先驱 |
| model:yamaha:xvs650 | XVS650 DragStar | XVS650 DragStar 650cc V缸巡航 | XVS650 DragStar 650cc V缸巡航 | XVS650 ドラッグスター | class:disp:750cc | body:cruiser | pt:ice | discontinued | 1997–2010 | 649cc风冷V型双缸巡航车，日文名DragStar（ドラッグスター），DragStar系列最畅销型号，美式巡航东方代表 |
| model:yamaha:xvs950-bolt | XVS950 Bolt / XVS1300 | XVS950 Bolt V缸巡航 | XVS950 Bolt V缸巡航 | XVS950 ボルト/XVS1300 | class:disp:1000cc | body:cruiser | pt:ice | current | 2013–present | 美式Bobber风格V缸巡航，950cc/1300cc两档，极简改装风格 |
| model:yamaha:ya-1 | YA-1 | YA-1 红蜻蜓 125cc | YA-1 紅蜻蜓 125cc | YA-1（赤とんぼ） | class:disp:125cc | body:naked | pt:ice | discontinued | 1955–1958 | 雅马哈量产第一号摩托车，123cc二冲程单缸，源自德国DKW RT125技术，昵称红蜻蜓，日本自动车技术会历史遗产车型 |
| model:yamaha:yb-1 | YB-1 | YB-1 125cc 二冲程街车 | YB-1 125cc 二衝程街車 | YB-1 | class:disp:125cc | body:naked | pt:ice | discontinued | 1955–1957 | 1955年底推出的YA-1改进版，排量增大4cc以降低转速，与红蜻蜓同属雅马哈起步期的量产车 |
| model:yamaha:yc-1 | YC-1 | YC-1 175cc 二冲程街车 | YC-1 175cc 二衝程街車 | YC-1 | class:disp:250cc | body:naked | pt:ice | discontinued | 1956–1958 | 雅马哈第二款量产车，175cc（实际174cc）二冲程单缸，1956年4月投产，YA-1的正式后继车型 |
| model:yamaha:yd-1 | YD-1 | YD-1 250cc 二冲程双缸街车 | YD-1 250cc 二衝程雙缸街車 | YD-1 | class:disp:250cc | body:naked | pt:ice | discontinued | 1957–1959 | 雅马哈首款250cc二冲程并列双缸，1957年上市，开创雅马哈双缸街车传统，YD-2/YD-3一脉相承 |
| model:yamaha:yds-1 | YDS-1 | YDS-1 250cc 二冲程运动街车 | YDS-1 250cc 二衝程運動街車 | YDS-1 | class:disp:250cc | body:naked | pt:ice | discontinued | 1963–1964 | 246cc二冲程并列双缸，YDS系列首作，搭载Autolube自动分离润滑系统，1960年代雅马哈运动车先驱 |
| model:yamaha:yds-2 | YDS-2 | YDS-2 250cc 二冲程运动街车 | YDS-2 250cc 二衝程運動街車 | YDS-2 | class:disp:250cc | body:naked | pt:ice | discontinued | 1964–1967 | YDS-1改进版，246cc二冲程并列双缸，改进悬挂与制动，YDS-3的前身 |
| model:yamaha:yds-3 | YDS-3 | YDS-3 250cc 二冲程运动街车 | YDS-3 250cc 二衝程運動街車 | YDS-3 | class:disp:250cc | body:naked | pt:ice | discontinued | 1964–1969 | 246cc二冲程并列双缸，搭载世界首款二冲程自动分离润滑系统（Autolube），1960年代雅马哈运动车代表 |
| model:yamaha:yr-1 | YR-1 | YR-1 250cc 二冲程运动街车 | YR-1 250cc 二衝程運動街車 | YR-1 | class:disp:250cc | body:naked | pt:ice | discontinued | 1967–1969 | 246cc二冲程并列双缸，YS-1后继高端运动车型，造型更运动化，1960年代末性能街车代表 |
| model:yamaha:yr-2-3 | YR-2 / YR-3 | YR-2/YR-3 350cc 二冲程运动街车 | YR-2/YR-3 350cc 二衝程運動街車 | YR-2/YR-3 | class:disp:400cc | body:naked | pt:ice | discontinued | 1968–1971 | 347cc二冲程并列双缸，YR-1的350cc扩缸版，1970年升级为YR-3（5速），R5系列前身 |
| model:yamaha:ys-1 | YS-1 | YS-1 250cc 二冲程运动街车 | YS-1 250cc 二衝程運動街車 | YS-1 | class:disp:250cc | body:naked | pt:ice | discontinued | 1967–1969 | 1967年推出的246cc二冲程并列双缸运动街车，轻快操控，二冲程黄金时代的前驱车型 |
| model:yamaha:ys250-fazer-fz25 | YS250 Fazer / FZ25 | YS250 Fazer / FZ25 街车 | YS250 Fazer / FZ25 街車 | FZ25/フェザー250 | class:disp:250cc | body:naked | pt:ice | current | 2017–present | 新兴市场250cc蓝芯街车，FZ25国内名飞致250，油耗极低 |
| model:yamaha:yz125 | YZ125 | YZ125 场地越野 | YZ125 場地越野 | YZ125 | class:disp:125cc | body:motocross | pt:ice | current | 1974–present | 125cc二冲程场地越野赛车，入门MX黄金排量，轻量易控 |
| model:yamaha:yz250 | YZ250 | YZ250 二冲程场地越野 | YZ250 二衝程場地越野 | YZ250 | class:disp:250cc | body:motocross | pt:ice | current | 1974–present | 250cc二冲程场地越野常青树，二冲程最后的坚守，至今仍在产 |
| model:yamaha:yz250f | YZ250F | YZ250F 场地越野 | YZ250F 場地越野 | YZ250F | class:disp:250cc | body:motocross | pt:ice | current | 2001–present | 四冲程250cc场地越野赛车，YZ450F技术下放，MX2组别主力 |
| model:yamaha:yz250fx | YZ250FX | YZ250FX 闭场越野 | YZ250FX 閉場越野 | YZ250FX | class:disp:250cc | body:enduro | pt:ice | current | 2015–present | YZ250F闭场越野版，电启动+18英寸后轮，越野赛事利器 |
| model:yamaha:yz250x | YZ250X | YZ250X 二冲程闭场越野 | YZ250X 二衝程閉場越野 | YZ250X | class:disp:250cc | body:enduro | pt:ice | current | 2016–present | 二冲程越野版YZ250，闭场越野与耐力赛取向，二冲程情怀之选 |
| model:yamaha:yz450f | YZ450F | YZ450F 场地越野 | YZ450F 場地越野 | YZ450F | class:disp:600cc | body:motocross | pt:ice | current | 2003–present | 449cc四冲程场地越野赛车，反向汽缸设计重心更低，AMA越野赛常胜车型 |
| model:yamaha:yz450fx | YZ450FX | YZ450FX 闭场越野 | YZ450FX 閉場越野 | YZ450FX | class:disp:600cc | body:enduro | pt:ice | current | 2016–present | YZ450F闭场越野版，18英寸后轮+加大油箱，GNCC赛事常胜军 |
| model:yamaha:yz65 | YZ65 | YZ65 儿童场地越野 | YZ65 兒童場地越野 | YZ65 | class:disp:125cc | body:motocross | pt:ice | current | 2018–present | 65cc二冲程儿童场地越野赛车，配备YPVS可变排气，入门MX启蒙车 |
| model:yamaha:yz85 | YZ85 | YZ85 青少年场地越野 | YZ85 青少年場地越野 | YZ85 | class:disp:125cc | body:motocross | pt:ice | current | 2001–present | 85cc二冲程青少年场地越野赛车，小排量MX赛事主力车型 |
| model:yamaha:yzf-r1-gen1 | YZF-R1 (First Gen) | YZF-R1 初代 公升仿赛（停产） | YZF-R1 初代 公升仿賽（停產） | YZF-R1（初代） | class:disp:1000cc | body:sport | pt:ice | discontinued | 1998–1999 | 1998年初代R1横空出世，998cc紧凑短轴距，超级运动车革命之作 |
| model:yamaha:yzf-r1-r1m | YZF-R1 / R1M | YZF-R1/R1M 旗舰仿赛 | YZF-R1/R1M 旗艦仿賽 | YZF-R1/R1M | class:disp:1000cc | body:sport | pt:ice | current | 2015–present | 公升级四缸旗舰仿赛，十字曲轴发动机，R1M配Ohlins+碳纤维MotoGP技术 |
| model:yamaha:yzf-r125 | YZF-R125 | YZF-R125 小排量仿赛 | YZF-R125 小排量仿賽 | YZF-R125 | class:disp:125cc | body:sport | pt:ice | current | 2008–present | 125cc单缸入门仿赛，欧洲A1驾照热门车型，R系列家族化外观 |
| model:yamaha:yzf-r15 | YZF-R15 | YZF-R15 入门仿赛 | YZF-R15 入門仿賽 | YZF-R15 | class:disp:250cc | body:sport | pt:ice | current | 2015–present | 155cc单缸VVA可变气门，东南亚印度市场明星入门跑车，操控出色 |
| model:yamaha:yzf-r3 | YZF-R3 | YZF-R3 小排量仿赛 | YZF-R3 小排量仿賽 | YZF-R3 | class:disp:400cc | body:sport | pt:ice | current | 2015–present | 321cc并列双缸入门仿赛，M1同家族外观设计，赛道入门好选择 |
| model:yamaha:yzf-r6 | YZF-R6 | YZF-R6 中量级仿赛（赛道专供） | YZF-R6 中量級仿賽（賽道專供） | YZF-R6 | class:disp:600cc | body:sport | pt:ice | discontinued | 1999–2020 | 中量级四缸仿赛传奇，2020年停产民用版，现为Race Only赛道版 |
| model:yamaha:yzf-r9 | YZF-R9 | YZF-R9 中量级仿赛（2025款） | YZF-R9 中量級仿賽（2025款） | YZF-R9 | class:disp:750cc | body:sport | pt:ice | current | 2025–present | 雅马哈2025年全新中量级仿赛，890cc CP3三缸（MT-09同平台），2026款推出70周年纪念版 |
| model:yamaha:yzf600r | YZF600R Thundercat | YZF600R Thundercat 600cc 仿赛 | YZF600R Thundercat 600cc 仿賽 | YZF600R サンダーキャット | class:disp:600cc | body:sport | pt:ice | discontinued | 1994–2004 | 599cc水冷四缸中量级仿赛，FZR600后继车型，绰号Thundercat，兼顾公路与赛道，600cc经典常青树 |
| model:yamaha:yzf750r | YZF750R | YZF750R 750cc 仿赛 | YZF750R 750cc 仿賽 | YZF750R | class:disp:750cc | body:sport | pt:ice | discontinued | 1993–1996 | 749cc水冷四缸，FZR750R后继，World Superbike赛事参赛车型，公路版亦具有纯正赛车基因 |

### 4.Yingang (6款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:yingang:cross-150 | Cross 150 | 十字架150 边三轮 | 十字架150 邊三輪 | クロス150 | class:disp:250cc | body:trike | pt:ice | current | 2015–present | 银钢十字架边三轮，2015年推出的"MINI+挎子"组合，标志着银钢正式进入边三轮领域 |
| model:yingang:hanluzhe-300 | Hanluzhe 300 | 悍路者300 边三轮 | 悍路者300 邊三輪 | ハンルーザー300 | class:disp:250cc | body:trike | pt:ice | current | 2020–present | 银钢悍路者300（GY300），300cc水冷边三轮，带倒挡，军旅复古大边三风格 |
| model:yingang:jing-150 | Jing 150 | 鲸150 迷你边三轮 | 鯨150 迷你邊三輪 | ジン150 | class:disp:250cc | body:trike | pt:ice | current | 2023–present | 银钢鲸150，150cc迷你边三轮，轴传动设计，CVT自动挡版本让新手也能轻松驾驭 |
| model:yingang:latte-250 | Latte 250 | 拿铁250 复古车 | 拿鐵250 復古車 | ラテ250 | class:disp:250cc | body:scrambler | pt:ice | current | 2021–present | 银钢拿铁250，250cc复古车，圆形大灯内融入现代元素，标配双通道ABS，低价高配 |
| model:yingang:xunluozhe-150 | Xunluozhe 150 | 巡逻者150 边三轮 | 巡邏者150 邊三輪 | シュンロージャ150 | class:disp:250cc | body:trike | pt:ice | current | 2018–present | 银钢巡逻者150，150cc边三轮中资历较老的车型，通勤与休闲兼顾 |
| model:yingang:yingang-500 | Yingang 500 | 银钢500 边三轮 | 銀鋼500 邊三輪 | インガン500 | class:disp:600cc | body:trike | pt:ice | current | 2021–present | 银钢500，国产首款ADV风格大排量边三轮，填补国产大排量挎子市场空白 |

### 4.ZXMOTO (12款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:zxmoto:450rally | 450Rally | 450Rally 拉力车 | 450Rally 拉力車 | 450Rally | class:disp:600cc | body:adventure | pt:ice | current | 2026–present | 张雪机车2026年7月上市的450cc硬派拉力车，用于试水拉力市场，为后续ADV车型布局铺路 |
| model:zxmoto:500f | 500F | 500F 四缸复古车 | 500F 四缸復古車 | 500F | class:disp:600cc | body:naked | pt:ice | current | 2026–present | 2026中国摩博会发布2027款；470cc直列四缸复古街车升级电子油门、散热与座垫，售价30580元。 |
| model:zxmoto:500rr | 500RR 2026 | 500RR 四缸仿赛（2026款） | 500RR 四缸仿賽（2026款） | 500RR 2026 | class:disp:600cc | body:sport | pt:ice | current | 2025–present | 张雪机车470cc直列四缸仿赛，2026款双摇臂版29980元、单摇臂版33680元，标配弯道ABS等电控，是国产四缸仿赛销量冠军车型 |
| model:zxmoto:600v | 600V | 600V 运动巡航车 | 600V 運動巡航車 | 600V スポーツクルーザー | class:disp:600cc | body:cruiser | pt:ice | current | 2026–present | 2026中国摩博会发布的张雪机车首款巡航车；578cc水冷V型双缸，最大功率45kW、峰值扭矩61N·m，售价27980元。 |
| model:zxmoto:820r | 820R | 820R 运动街车 | 820R 運動街車 | 820R | class:disp:750cc | body:naked | pt:ice | current | 2026–present | 张雪机车820平台运动街车，与820RR-R同平台，整备质量仅188kg，轻量化表现突出 |
| model:zxmoto:820rr | 820RR | 820RR 仿赛 | 820RR 仿賽 | 820RR | class:disp:750cc | body:sport | pt:ice | current | 2026–present | 张雪机车首款量产仿赛，820cc三缸水冷，轻量化设计，2026年3月正式上市，被誉为国产最强三缸仿赛 |
| model:zxmoto:820rr-r | 820RR-R | 820RR-R 高性能仿赛 | 820RR-R 高性能仿賽 | 820RR-R | class:disp:750cc | body:sport | pt:ice | current | 2026–present | 820RR的高配版仿赛，赛道化配置升级，与820R街车同时发布，定价4万级别 |
| model:zxmoto:820rr-rc | 820RR-RC | 820RR-RC 赛道版 | 820RR-RC 賽道版 | 820RR-RC サーキット仕様 | class:disp:750cc | body:sport | pt:ice | current | 2026–present | 2026中国摩博会发布的赛道专用820RR版本，不具备道路行驶资质；采用电子油门、三段可调TCS及钛合金直排系统，售价128000元。 |
| model:zxmoto:820rr-rs | 820RR-RS | 820RR-RS 赛事版 | 820RR-RS 賽事版 | 820RR-RS | class:disp:750cc | body:sport | pt:ice | current | 2026–present | 2026中国摩博会发布的旗舰公路仿赛版本，818.8cc直列三缸；全国统一指导价138000元，预计2026年12月交付。 |
| model:zxmoto:820x | 820X | 820X 探险车 | 820X 探險車 | 820X | class:disp:750cc | body:adventure | pt:ice | current | 2026–present | 2026中国摩博会发布的818.8cc直列三缸ADV，提供突击版与旅行版；兼顾公路与非铺装路面骑行。 |
| model:zxmoto:mx250 | MX250 | MX250 场地越野车 | MX250 場地越野車 | MX250 | class:disp:250cc | body:motocross | pt:ice | current | 2026–present | 张雪机车首款场地越野摩托，2026年4月30日发布，干重仅102kg，最大功率30kW，KYB全可调减震，纯场地竞技车型不可上牌 |
| model:zxmoto:mx450 | MX450 | MX450 场地越野车 | MX450 場地越野車 | MX450 | class:disp:600cc | body:motocross | pt:ice | current | 2026–present | 张雪机车450cc水冷场地越野车，2026年4月与MX250同期上市，为可上牌版本 |

### 4.Zero (4款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:zero:dsr | DSR | DSR 电动越野两用车（停产） | DSR 電動越野兩用車（停產） | DSR | class:disp:400cc | body:dual-sport | pt:bev | discontinued | 2017–2022 | 双用途电动越野街车，峰值约44马力，后被DSR/X等新平台车型取代 |
| model:zero:fxe | FXE | FXE 电动街车 | FXE 電動街車 | FXE | class:disp:250cc | body:naked | pt:bev | current | 2022–present | 轻量化纯电街车，峰值约27千瓦，极简设计，主打都市通勤的入门级Zero车型 |
| model:zero:srf | SR/F | SR/F 电动街车 | SR/F 電動街車 | SR/F | class:disp:600cc | body:naked | pt:bev | current | 2019–present | Zero旗舰电动街车，110马力，续航约320公里，支持CCS快充，是高端电动摩托标杆 |
| model:zero:srs | SR/S | SR/S 电动跑车 | SR/S 電動跑車 | SR/S | class:disp:600cc | body:sport | pt:bev | current | 2020–present | SR/F的整流罩跑车版，110马力，全车空气动力学设计，续航约320公里 |

### 4.Zongshen (16款)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 级别 | 车身 | 动力 | 状态 | 生产年份 | 备注 |
|----|---------|----------|----------|--------|------|------|------|------|----------|------|
| model:zongshen:250x | 250X | 250X 林道越野车 | 250X 林道越野車 | 250X | class:disp:250cc | body:enduro | pt:ice | current | 2021–present | 赛科龙250X林道越野车，250cc单缸，长行程悬挂加高离地间隙，入门非铺装路面利器 |
| model:zongshen:ra1000 | RA1000 | RA1000 公升级巡航车 | RA1000 公升級巡航車 | RA1000 | class:disp:750cc | body:cruiser | pt:ice | current | 2025–present | 宗申赛科龙国产首台公升级运动巡航车，2025中国摩博会亮相，996cc V型双缸水冷，最大功率78.5kW约106马力 |
| model:zongshen:ra2 | RA2 | RA2 巡航太子车 | RA2 巡航太子車 | RA2 | class:disp:250cc | body:cruiser | pt:ice | current | 2025–present | 宗申赛科龙2025款RA2美式复古巡航太子车，249cc单缸风冷，售价11988元起，入门巡航高性价比之选 |
| model:zongshen:ra600 | RA600 | RA600 复古巡航车 | RA600 復古巡航車 | RA600 | class:disp:600cc | body:cruiser | pt:ice | current | 2025–present | 宗申赛科龙首款中大排复古巡航车，2025年3月上市，550cc异步双缸水冷，提供Bobber版与摩登版，售价2.4万元左右 |
| model:zongshen:rc250 | RC250 | RC250 仿赛摩托车 | RC250 仿賽摩托車 | RC250 | class:disp:250cc | body:sport | pt:ice | current | 2025–present | 宗申赛科龙2025款RC250单摇臂版入门级仿赛，250cc单缸水冷，标配TCS与电子快排，售价15988元 |
| model:zongshen:re3 | RE3 | RE3 复古车 | RE3 復古車 | RE3 | class:disp:400cc | body:scrambler | pt:ice | current | 2019–present | 赛科龙RE3复古车，401cc并列双缸，圆灯圆表，英伦复古风格，国产复古车人气车型 |
| model:zongshen:rt150s | RT150S | RT150S 平踏板 | RT150S 平踏板 | RT150S | class:disp:250cc | body:scooter | pt:ice | current | 2026–present | 宗申赛科龙2026款RT150S平踏板，150cc水冷四气门，标配ABS与TCS，兼顾运动性能与都市通勤，售价10999元起 |
| model:zongshen:rt2 | RT2 | RT2 运动大踏板 | RT2 運動大踏板 | RT2 | class:disp:250cc | body:maxi-scooter | pt:ice | current | 2025–present | 宗申赛科龙2025款RT2运动踏板，250cc水冷，都市版与智享版售价15988元和17588元，车重减轻并加入智能功能 |
| model:zongshen:rt250 | RT250 | RT250 大踏板 | RT250 大踏板 | RT250 | class:disp:250cc | body:maxi-scooter | pt:ice | current | 2026–present | 宗申赛科龙2026款RT250运动踏板，250cc水冷发动机，售价14999元起，另有智境版配备毫米波雷达，主打科技平权 |
| model:zongshen:rt250e | RT250E | RT250E 复古踏板 | RT250E 復古踏板 | RT250E | class:disp:250cc | body:scooter | pt:ice | current | 2026–present | 宗申赛科龙2026款RT250E复古踏板，定位复古旅行家，250cc水冷，平踏板设计兼顾实用性，售价14999元起 |
| model:zongshen:rt3 | RT3 | RT3 大绵羊踏板 | RT3 大綿羊踏板 | RT3 | class:disp:250cc | body:maxi-scooter | pt:ice | current | 2018–present | 赛科龙RT3大绵羊，247cc单缸水冷，大座桶大风挡，长途舒适，国产250大踏板热销款 |
| model:zongshen:rx3 | RX3 | RX3 探险车 | RX3 探險車 | RX3 | class:disp:250cc | body:adventure | pt:ice | current | 2013–present | 赛科龙RX系列开山之作，250cc单缸水冷，中国摩旅文化的重要车型，曾完成环球骑行 |
| model:zongshen:rx4 | RX4 | RX4 探险车 | RX4 探險車 | RX4 | class:disp:400cc | body:adventure | pt:ice | current | 2018–present | 赛科龙RX4探险车，450cc单缸水冷，鸟嘴设计加辐条轮，长途摩旅专业定位 |
| model:zongshen:rx401 | RX401 | RX401 探险车 | RX401 探險車 | RX401 | class:disp:400cc | body:adventure | pt:ice | current | 2021–present | 赛科龙RX401探险车，401cc并列双缸，升级款RX3S，动力平顺，摩旅市场主力车型 |
| model:zongshen:rx600 | RX600 | RX600 探险车 | RX600 探險車 | RX600 | class:disp:600cc | body:adventure | pt:ice | current | 2023–present | 赛科龙RX600探险车，550cc并列双缸，大油箱长续航，国产中排量ADV高性价比之选 |
| model:zongshen:rz3 | RZ3 | RZ3 运动街车 | RZ3 運動街車 | RZ3 | class:disp:250cc | body:naked | pt:ice | current | 2016–present | 赛科龙RZ3运动街车，250cc单缸水冷，欧系运动外观，定位年轻运动用户 |

---

## 5. 跨市场异名对照 (Cross-Market Aliases)

| ID | English | 简体中文 | 繁體中文 | 日本語 | 别名/市场对照 |
|----|---------|----------|----------|--------|---------------|
| cm:suzuki:skywave-burgman | Burgman | 汉堡人 | Burgman | スカイウェイブ (Skywave) | 日本:スカイウェイブ (Skywave); 欧洲:Burgman; 北美:Burgman; 中国大陆:汉堡人 |
| cm:suzuki:gsx1300r-hayabusa | GSX1300R Hayabusa | GSX1300R Hayabusa | GSX1300R Hayabusa | 隼 (ハヤブサ) | 日本:隼 (ハヤブサ); 北美:Hayabusa; 欧洲:Hayabusa |
| cm:yamaha:fz-mt | MT-07/MT-09 | MT-07 / MT-09 | MT-07/MT-09 | MT-07/MT-09 | 北美:FZ-07 / FZ-09 (2015-2017); 欧洲:MT-07 / MT-09; 中国大陆:MT-07 / MT-09 |
| cm:yamaha:virago-dragstar | Virago / DragStar | Virago / DragStar | Virago / DragStar | ドラッグスター (DragStar) | 日本:ドラッグスター (DragStar); 北美:Virago; 欧洲:DragStar |
| cm:yamaha:star-vstar | XV950 / Bolt | XV950 / Bolt | XV950 / Bolt | ボルト (Bolt) | 北美:Star Bolt / V-Star; 欧洲:XV950 / Bolt; 日本:ボルト (Bolt) |
| cm:honda:cmx-rebel | CMX500 Rebel | CMX500 Rebel | CMX500 Rebel | レブル (Rebel) | 日本:レブル (Rebel); 北美:Rebel 500; 欧洲:CMX500 Rebel; 中国大陆:CMX500 Rebel |
| cm:honda:gold-wing | GL1800 Gold Wing | 金翼 | GL1800 Gold Wing | ゴールドウイング (Gold Wing) | 日本:ゴールドウイング (Gold Wing); 北美:Gold Wing; 欧洲:Gold Wing; 中国大陆:金翼 |
| cm:honda:super-cub | Super Cub | 幼兽 | Super Cub | スーパーカブ | 日本:スーパーカブ; 东南亚:Super Cub / Cub; 中国大陆:幼兽 |
| cm:honda:cb400sf | CB400 Super Four | CB400 超级四缸 | CB400 Super Four | CB400スーパーフォア | 日本:CB400スーパーフォア; 中国大陆:CB400 超级四缸 |
| cm:kawasaki:gpz-ninja | GPZ900R Ninja | GPZ900R Ninja | GPZ900R Ninja | GPZ900R ニンジャ | 日本:GPZ900R ニンジャ; 北美:Ninja 900; 欧洲:GPZ900R |
| cm:kawasaki:vn-vulcan | Vulcan (VN) | Vulcan (VN) | Vulcan (VN) | バルカン (VN) | 日本:バルカン (VN); 北美:Vulcan; 欧洲:Vulcan |
| cm:kawasaki:versys | Versys | Versys | Versys | バーシス (Versys) | 日本:バーシス (Versys); 欧洲:Versys; 北美:Versys |
| cm:bmw:r1200gs-r1250gs | R 1250 GS | 水鸟 | R 1250 GS | R 1250 GS | 中国大陆:水鸟; 北美:R 1250 GS; 欧洲:R 1250 GS |
| cm:bmw:k1600 | K 1600 GTL | 大GT | K 1600 GTL | K 1600 GTL | 中国大陆:大GT; 欧洲:K 1600 GTL; 北美:K 1600 GTL |
| cm:ducati:monster | Monster | 怪兽 | Monster | モンスター | 日本:モンスター; 中国大陆:怪兽; 欧洲:Monster |
| cm:triumph:bonneville | Bonneville | 邦尼维尔 | Bonneville | ボンネビル | 中国大陆:邦尼维尔; 欧洲:Bonneville; 日本:ボンネビル |
| cm:harley:heritage-softail | Heritage Softail | 继承者 | Heritage Softail | Heritage Softail | 中国大陆:继承者; 北美:Heritage Classic; 欧洲:Heritage Classic |
| cm:harley:sportster | Sportster | 运动者 | Sportster | スポーツスター | 中国大陆:运动者; 北美:Sportster; 日本:スポーツスター |
| cm:ktm:duke | Duke | 公爵 | Duke | デューク | 中国大陆:公爵; 欧洲:Duke; 日本:デューク |
| cm:ktm:adventure | Adventure | 探险家 | Adventure | Adventure | 中国大陆:探险家; 欧洲:Adventure; 北美:Adventure |
| cm:royal-enfield:bullet | Bullet | 子弹头 | Bullet | Bullet | 印度:बुलेट (Bullet); 中国大陆:子弹头; 英国:Bullet |
| cm:honda:cbr650r-cb650r | CB650R / CBR650R | CB650R / CBR650R | CB650R / CBR650R | CB650R / CBR650R | 北美:CB650R / CBR650R; 欧洲:CB650R / CBR650R; 中国大陆:CB650R / CBR650R |
| cm:suzuki:v-strom | V-Strom (DL) | 维斯托姆 | V-Strom (DL) | Vストローム (DL) | 日本:Vストローム (DL); 欧洲:V-Strom; 北美:V-Strom; 中国大陆:维斯托姆 |
| cm:yamaha:tmax | TMAX | 踢妈克斯 | TMAX | ティーマックス | 日本:ティーマックス; 欧洲:TMAX; 中国大陆:踢妈克斯 |
| cm:honda:pcx | PCX | PCX | PCX | PCX | 日本:PCX; 东南亚:PCX; 中国大陆:PCX |
| cm:vespa:primavera | Primavera | 春天 | Primavera | プリマヴェーラ | 日本:プリマヴェーラ; 中国大陆:春天; 意大利:Primavera |
| cm:vespa:sprint | Sprint | 冲刺 | Sprint | スプリント | 日本:スプリント; 中国大陆:冲刺; 意大利:Sprint |
| cm:aprilia:rsv4 | RSV4 | RSV4 | RSV4 | RSV4 | 日本:RSV4; 欧洲:RSV4; 北美:RSV4 |
| cm:qjmotor:benelli-tnt | Benelli TNT (QJMOTOR platform counterpart) | 钱江 TNT 系列 | Benelli TNT（QJMOTOR 同平台車型） | ベネリ TNT（QJMOTOR同プラットフォーム） | 中国大陆:钱江 TNT 系列; 欧洲:Benelli TNT; 东南亚:Benelli |
| cm:cfmoto:450sr | CFMoto 450SR | 春风 450SR | CFMoto 450SR | CFMoto 450SR | 中国大陆:春风 450SR; 欧洲:CFMoto 450SR; 北美:CFMoto 450SR |
| cm:haojue:gsx250r | Suzuki GSX250R (Haojue joint venture) | 豪爵铃木 GSX250R | 鈴木 GSX250R（豪爵合資） | スズキ GSX250R（豪爵合弁） | 中国大陆:豪爵铃木 GSX250R; 海外:Suzuki GSX250R |
| cm:yamaha:r15 | YZF-R15 | R15 | YZF-R15 | YZF-R15 | 印度:YZF-R15 V4; 东南亚:YZF-R15; 中国大陆:R15 |
| cm:honda:cbr150r | CBR150R | CBR150R | CBR150R | CBR150R | 东南亚:CBR150R; 拉美:CBR150R; 日本:CBR150R |
| cm:kawasaki:klx | KLX | KLX | KLX | KLX | 东南亚:KLX; 北美:KLX; 日本:KLX |
| cm:suzuki:address | Address | 时代 | Address | アドレス | 日本:アドレス; 东南亚:Address; 中国大陆:时代 |
| cm:yamaha:jog | Jog | 巧格 | Jog | ジョグ | 日本:ジョグ; 中国大陆:巧格; 东南亚:Jog |
| cm:yamaha:cygnus | Cygnus | 劲战 | 勁戰 | シグナス (Cygnus) | 台湾:勁戰; 日本:シグナス (Cygnus); 东南亚:Cygnus |
| cm:kymco:like | Like | 丽可 | Like | Like | 台湾:Like; 欧洲:Like; 中国大陆:丽可 |
| cm:sym:jet | Jet | 捷特 | JET | Jet | 台湾:JET; 欧洲:Jet; 中国大陆:捷特 |
| cm:piaggio:mp3 | MP3 | MP3 倒三轮 | MP3 | MP3 | 欧洲:MP3; 日本:MP3; 中国大陆:MP3 倒三轮 |
| cm:indian:scout | Scout | 侦察兵 | Scout | Scout | 北美:Scout; 欧洲:Scout; 中国大陆:侦察兵 |
| cm:indian:chief | Chief | 首领 | Chief | Chief | 北美:Chief; 欧洲:Chief; 中国大陆:首领 |
| cm:moto-guzzi:v7 | V7 | V7 | V7 | V7 | 欧洲:V7; 日本:V7; 中国大陆:V7 |
| cm:honda:forza | Forza | 佛沙 | Forza | フォルツァ | 日本:フォルツァ; 欧洲:Forza; 中国大陆:佛沙 |
| cm:honda:xadv | X-ADV | X-ADV | X-ADV | X-ADV | 日本:X-ADV; 欧洲:X-ADV; 中国大陆:X-ADV |
| cm:yamaha:nmax | NMAX | NMAX | NMAX | NMAX | 东南亚:NMAX; 欧洲:NMAX; 中国大陆:NMAX |
| cm:suzuki:dr | DR (DualSport) | DR (DualSport) | DR (DualSport) | DR650 | 北美:DR650; 欧洲:DR650; 日本:DR650 |
| cm:kawasaki:z900rs | Z900RS | Z900RS | Z900RS | Z900RS ゼファー | 日本:Z900RS ゼファー; 欧洲:Z900RS; 北美:Z900RS |
| cm:bmw:s1000rr | S 1000 RR | S 1000 RR | S 1000 RR | S1000RR | 日本:S1000RR; 欧洲:S 1000 RR; 中国大陆:S 1000 RR |
| cm:kawasaki:eliminator-400-450 | Eliminator 400/450 | Eliminator 450 | Eliminator 400/450 | エリミネーター 400 (Eliminator 400) | 日本:エリミネーター 400 (Eliminator 400); 北美:Eliminator 450; 欧洲:Eliminator 450; 中国大陆:Eliminator 450 |
| cm:suzuki:gixxer | Gixxer 155 | 极客飒 GIXXER 155 | Gixxer 155 | Gixxer 155 | 印度:Gixxer 155; 东南亚:Gixxer 155; 中国大陆:极客飒 GIXXER 155 |
| cm:honda:wave-supra | Wave series | 威武 | Wave 系列 | Waveシリーズ | 泰国:Wave; 马来西亚:Wave; 中国大陆:威武 |
| cm:honda:varadero | VTR1000 Varadero | VTR1000 Varadero | VTR1000 Varadero | バラデロ (Varadero) | 欧洲:Varadero; 日本:バラデロ (Varadero); 北美:Varadero |
| cm:honda:ct125-hunter-cub | CT125 Hunter Cub | 猎人幼兽 | CT125 Hunter Cub | ハンターカブ (Hunter Cub) | 日本:ハンターカブ (Hunter Cub); 欧洲:CT125 Hunter Cub; 中国大陆:猎人幼兽 |
| cm:honda:cub-trail | C50/C90 Trail | 幼兽 | C50/C90 Trail | カブ (Cub) | 日本:カブ (Cub); 东南亚:Cub / Wave; 中国大陆:幼兽 |
| cm:yamaha:mt15 | MT-15 | MT-15 | MT-15 | MT-15 | 印度:MT-15; 东南亚:MT-15; 欧洲:MT-125 |
| cm:yamaha:aerox | Aerox 155 | Aerox 155 | Aerox 155 | Aerox 155 | 东南亚:Aerox 155; 欧洲:NMAX 155; 中国大陆:Aerox 155 |
| cm:yamaha:fino | Fino | Fino | Vinoora | Fino | 泰国:Fino; 印度尼西亚:Fino; 台湾:Vinoora |
| cm:suzuki:burgman-street | Burgman Street | 汉堡人 Street | Burgman Street | Burgman Street | 印度:Burgman Street EX; 东南亚:Burgman Street EX; 中国大陆:汉堡人 Street |
| cm:suzuki:raider | Raider 150 | Raider 150 | Raider 150 | Raider 150 | 印度尼西亚:Raider 150; 菲律宾:Raider 150; 马来西亚:Raider 150 |
| cm:suzuki:lets | Let's series | Let's 系列 | Let's 系列 | レッツシリーズ | 日本:レッツ (Let's); 东南亚:Let's / Next; 欧洲:Let's |
| cm:honda:benly | Benly series | 本利 | Benly 系列 | ベンリー (Benly) | 日本:ベンリー (Benly); 东南亚:Benly; 中国大陆:本利 |
| cm:kawasaki:ksr | KSR | KSR | KSR | KSR | 日本:KSR; 欧洲:KSR; 北美:KSR |
| cm:honda:cb350-hness | H'ness CB350 / GB350 | GB350 | H'ness CB350 / GB350 | GB350 / GB350S | 印度:H'ness CB350 / CB350RS; 日本:GB350 / GB350S; 欧洲:CB350; 中国大陆:GB350 |
| cm:suzuki:gsx-s125 | GSX-S125 | GSX-S125 | GSX-S125 | GSX-S125 | 欧洲:GSX-S125; 日本:GSX-S125; 北美:GSX-R125 |
| cm:yamaha:yzf-r125 | YZF-R125 | YZF-R125 | YZF-R125 | YZF-R125 | 欧洲:YZF-R125; 日本:YZF-R125; 北美:YZF-R15 (导入) |
| cm:honda:rebel-300 | Rebel 300 | Rebel 300 | Rebel 300 | レブル 300 | 北美:Rebel 300; 欧洲:CMX300; 日本:レブル 300 |
| cm:kawasaki:w800 | W800 | W800 | W800 | W800 | 日本:W800; 欧洲:W800 Street / W800 Cafe; 中国大陆:W800 |
| cm:yamaha:xv950 | XV950 | XV950 | XV950 | ボルト (Bolt) | 北美:Bolt; 欧洲:XV950; 日本:ボルト (Bolt) |
| cm:suzuki:gsx250 | GSX250R | 豪爵铃木 GSX250R | GSX250R | GSX250R | 日本:GSX250R; 欧洲:GSX250R; 中国大陆:豪爵铃木 GSX250R |
| cm:honda:dio | Dio | Dio | Dio | ディオ (Dio) | 日本:ディオ (Dio); 东南亚:Dio; 印度:Activa (同级) |
| cm:honda:activa | Activa | Activa | Activa | Activa | 印度:Activa; 东南亚:Activa; 日本:(无对应) |
| cm:yamaha:lexi | Lexi 125 | Lexi 125 | Lexi 125 | Lexi 125 | 泰国:Lexi 125; 马来西亚:Lexi 125; 欧洲:Lexi 125 |
| cm:honda:supra-gtr | Supra GTR 150 | Supra GTR 150 | Supra GTR 150 | Supra GTR 150 | 印度尼西亚:Supra GTR 150; 马来西亚:Supra GTR 150; 泰国:Supra GTR 150 |
| cm:royal-enfield:classic-350 | Classic 350 | Classic 350 | Classic 350 | Classic 350 | 印度:क्लासिक 350 (Classic 350); 欧洲:Classic 350; 北美:Classic 350 |
| cm:ktm:390-duke | 390 Duke | 390 Duke | 390 Duke | 390 Duke | 印度:390 Duke; 欧洲:390 Duke; 北美:390 Duke |
| cm:bmw:g310 | G 310 R | G 310 R | G 310 R | G 310 R | 印度:G 310 R; 欧洲:G 310 R; 北美:G 310 R |

---

*本文件由 scripts/build.py 生成,请勿手动编辑。修改请在 data/ 目录下进行。*
