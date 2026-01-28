/**
 * 世界百大攝影師資料庫 (Multi-language Support)
 * 
 * 資料格式說明：
 * - id: 唯一識別碼
 * - name: 攝影師姓名 (zh-TW, zh-CN, en, ja, ko)
 * - category: 攝影類別 (zh-TW, zh-CN, en, ja, ko)
 * - style: 風格描述 (zh-TW, zh-CN, en, ja, ko)
 * - tech: 技術特色
 *   - focalLength: 常用焦段 (zh-TW, zh-CN, en, ja, ko)
 *   - aperture: 光圈習慣 (zh-TW, zh-CN, en, ja, ko)
 *   - composition: 構圖特色 (zh-TW, zh-CN, en, ja, ko)
 * - website: 官方網站 URL
 * - initials: 姓名縮寫
 */

const photographersData = [
    {
        id: 1,
        name: {
            'zh-TW': "安塞爾·亞當斯",
            'zh-CN': "安塞尔·亚当斯",
            'en': "Ansel Adams",
            'ja': "アンセル・アダムス",
            'ko': "안셀 아담스"
        },
        category: {
            'zh-TW': "大地景觀",
            'zh-CN': "风景摄影",
            'en': "Landscape",
            'ja': "風景写真",
            'ko': "풍경 사진"
        },
        style: {
            'zh-TW': "以黑白風景攝影聞名，注重高對比度與極致的細節清晰度。他是「分區曝光法 (Zone System)」的創始人。",
            'zh-CN': "以黑白风景摄影闻名，注重高对比度与极致的细节清晰度。他是“分区曝光法 (Zone System)”的创始人。",
            'en': "Renowned for black-and-white landscape photography, emphasizing high contrast and extreme clarity. Creator of the 'Zone System'.",
            'ja': "高コントラストと極限の細部再現性を特徴とする白黒風景写真で知られます。「ゾーンシステム」の考案者です。",
            'ko': "높은 대비와 극한의 세부 묘사가 돋보이는 흑백 풍경 사진으로 유명합니다. '존 시스템(Zone System)'의 창시자입니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "大畫幅相機 (廣角至長焦)",
                'zh-CN': "大画幅相机 (广角至长焦)",
                'en': "Large Format (Wide to Telephoto)",
                'ja': "大判カメラ (広角から望遠)",
                'ko': "대형 카메라 (광각에서 망원)"
            },
            aperture: {
                'zh-TW': "f/64 (極小光圈獲得最大景深)",
                'zh-CN': "f/64 (极小光圈获得最大景深)",
                'en': "f/64 (Small aperture for max DoF)",
                'ja': "f/64 (被写界深度を最大化するための最小絞り)",
                'ko': "f/64 (최대 심도를 위한 최소 조리개)"
            },
            composition: {
                'zh-TW': "宏大敘事、精準光影分區",
                'zh-CN': "宏大叙事、精准光影分区",
                'en': "Grand narrative, precise light zoning",
                'ja': "壮大なナラティブ、精密な光調のゾーニング",
                'ko': "웅장한 서사, 정밀한 명암 구역화"
            }
        },
        website: "https://www.anseladams.com",
        initials: "AA"
    },
    {
        id: 2,
        name: {
            'zh-TW': "亨利·卡蒂埃-布列松",
            'zh-CN': "亨利·卡蒂埃-布列松",
            'en': "Henri Cartier-Bresson",
            'ja': "アンリ・カルティエ＝ブレッソン",
            'ko': "앙리 카르티에 브레송"
        },
        category: {
            'zh-TW': "人文紀實",
            'zh-CN': "人文纪实",
            'en': "Documentary",
            'ja': "ドキュメンタリー",
            'ko': "다큐멘터리"
        },
        style: {
            'zh-TW': "現代新聞攝影之父，「決定性瞬間 (The Decisive Moment)」理論的提出者。擅長捕捉幾何構圖與人性瞬間。",
            'zh-CN': "现代新闻摄影之父，“决定性瞬间 (The Decisive Moment)”理论的提出者。擅长捕捉几何构图与人性瞬间。",
            'en': "Father of modern photojournalism, coined 'The Decisive Moment'. Master of combining geometry with human moments.",
            'ja': "現代報道写真の父。「決定的瞬間」という概念を提唱しました。幾何学的な構成と人間的な瞬間を捉える達人です。",
            'ko': "현대 보도 사진의 아버지로, '결정적 순간'이라는 개념을 창안했습니다. 기하학적 구도와 인간적인 순간의 결합에 능숙했습니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "50mm (人眼視角)",
                'zh-CN': "50mm (人眼视角)",
                'en': "50mm (Standard View)",
                'ja': "50mm (標準レンズ)",
                'ko': "50mm (표준 화각)"
            },
            aperture: {
                'zh-TW': "f/8 - f/11 (確保街頭抓拍清晰)",
                'zh-CN': "f/8 - f/11 (确保街头抓拍清晰)",
                'en': "f/8 - f/11 (For street clarity)",
                'ja': "f/8 - f/11 (スナップの解像度を確保)",
                'ko': "f/8 - f/11 (거리 스냅의 선명도 확보)"
            },
            composition: {
                'zh-TW': "黃金螺旋、幾何引導線",
                'zh-CN': "黄金螺旋、几何引导线",
                'en': "Golden spiral, geometric leading lines",
                'ja': "黄金螺旋、幾何学的なリーディングライン",
                'ko': "황금 나선, 기하학적 인도선"
            }
        },
        website: "https://www.henricartierbresson.org",
        initials: "HCB"
    },
    {
        id: 3,
        name: {
            'zh-TW': "安妮·萊柏維茲",
            'zh-CN': "安妮·莱柏维兹",
            'en': "Annie Leibovitz",
            'ja': "アニー・リーボヴィッツ",
            'ko': "애니 레보비츠"
        },
        category: {
            'zh-TW': "人物肖像",
            'zh-CN': "人物肖像",
            'en': "Portrait",
            'ja': "ポートレート",
            'ko': "인물 초상"
        },
        style: {
            'zh-TW': "當代最著名的人像攝影師之一。擅長營造宏大且具戲劇性的場景，將精緻的燈光與豐富色彩結合。",
            'zh-CN': "当代最著名的人像摄影师之一。擅长营造宏大且具戏剧性的场景，将精致的灯光与丰富色彩结合。",
            'en': "One of the most famous living portraitists. Known for dramatic, grand-scale staging and exquisite lighting.",
            'ja': "現代で最も有名なポートレート写真家の一人。ドラマチックで壮大な演出、精緻なライティングと豊かな色彩が特徴です。",
            'ko': "현대에서 가장 유명한 인물 사진작가 중 한 명입니다. 드라마틱하고 웅장한 연출, 정교한 조명과 풍부한 색채의 결합으로 유명합니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "35mm - 85mm",
                'zh-CN': "35mm - 85mm",
                'en': "35mm - 85mm",
                'ja': "35mm - 85mm",
                'ko': "35mm - 85mm"
            },
            aperture: {
                'zh-TW': "f/2.8 - f/8 (均衡環境與主體)",
                'zh-CN': "f/2.8 - f/8 (均衡环境与主体)",
                'en': "f/2.8 - f/8 (Balance context/subject)",
                'ja': "f/2.8 - f/8 (環境と被写体のバランス)",
                'ko': "f/2.8 - f/8 (배경과 피사체의 균형)"
            },
            composition: {
                'zh-TW': "敘事性構圖、舞台式光影",
                'zh-CN': "叙事性构图、舞台式光影",
                'en': "Storytelling, Staged lighting",
                'ja': "叙事的な構成、演劇的なライティング",
                'ko': "서사적 구도, 무대 같은 조명"
            }
        },
        website: "https://www.vanityfair.com/contributor/annie-leibovitz",
        initials: "AL"
    },
    {
        id: 4,
        name: {
            'zh-TW': "史蒂夫·麥柯里",
            'zh-CN': "史蒂夫·麦柯里",
            'en': "Steve McCurry",
            'ja': "スティーブ・マッカリー",
            'ko': "스티브 맥커리"
        },
        category: {
            'zh-TW': "人文紀實",
            'zh-CN': "人文纪实",
            'en': "Documentary",
            'ja': "ドキュメンタリー",
            'ko': "다큐멘터리"
        },
        style: {
            'zh-TW': "以鮮豔的色彩和深情的眼神捕捉聞名，代表作《阿富汗女孩》。擅長運用互補色與構圖層次。",
            'zh-CN': "以鲜艳的色彩和深情的眼神捕捉闻名，代表作《阿富汗女孩》。擅长运用互补色与构图层次。",
            'en': "Famous for vivid colors and capturing soulful eyes, notably 'Afghan Girl'. Master of complementary colors and layering.",
            'ja': "鮮やかな色彩と、魂を揺さぶるような瞳の描写で知られます。代表作は『アフガンの少女』。補色とレイヤーの達人です。",
            'ko': "선명한 색상과 영혼을 담은 듯한 시선을 포착하는 것으로 유명하며, '아프간 소녀'가 대표작입니다. 보색 대비와 구도의 층을 활용하는 데 능숙합니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "24-70mm 變焦鏡",
                'zh-CN': "24-70mm 变焦镜",
                'en': "24-70mm Zoom",
                'ja': "24-70mm ズームレンズ",
                'ko': "24-70mm 줌 렌즈"
            },
            aperture: {
                'zh-TW': "開放光圈至 f/5.6",
                'zh-CN': "开放光圈至 f/5.6",
                'en': "Wide open to f/5.6",
                'ja': "開放から f/5.6 まで",
                'ko': "최대 개방에서 f/5.6까지"
            },
            composition: {
                'zh-TW': "中心構圖、色彩對比",
                'zh-CN': "中心构图、色彩对比",
                'en': "Center composition, color contrast",
                'ja': "センター構成、色彩の対比",
                'ko': "중앙 구도, 색채 대비"
            }
        },
        website: "https://stevemccurry.com",
        initials: "SM"
    },
    {
        id: 5,
        name: {
            'zh-TW': "杉本博司",
            'zh-CN': "杉本博司",
            'en': "Hiroshi Sugimoto",
            'ja': "杉本博司",
            'ko': "스기모토 히로시"
        },
        category: {
            'zh-TW': "藝術觀念",
            'zh-CN': "艺术观念",
            'en': "Conceptual",
            'ja': "コンセプチュアル",
            'ko': "관념 예술"
        },
        style: {
            'zh-TW': "極簡主義大師，探索時間與記憶。代表作《海景》展示了極致的平靜與長曝光技巧。",
            'zh-CN': "极简主义大师，探索时间与记忆。代表作《海景》展示了极致的平静与长曝光技巧。",
            'en': "Minimalist master exploring time and memory. 'Seascapes' showcases extreme calm and long exposure.",
            'ja': "時間と記憶を探求するミニマリズムの巨匠。代表作『海景』は、極限まで削ぎ落とされた静寂と長長時間露光の技術を結集しています。",
            'ko': "시간과 기억을 탐구하는 미니멀리즘의 거장입니다. 대표작 '바다 풍경'은 극한의 평온함과 장노출 기술을 보여줍니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "大畫幅相機",
                'zh-CN': "大画幅相机",
                'en': "Large Format",
                'ja': "大判カメラ",
                'ko': "대형 카메라"
            },
            aperture: {
                'zh-TW': "f/22+ (極長曝光)",
                'zh-CN': "f/22+ (极长曝光)",
                'en': "f/22+ (Extreme long exposure)",
                'ja': "f/22以上 (超長時間露光用)",
                'ko': "f/22 이상 (장노출용)"
            },
            composition: {
                'zh-TW': "極簡、水平線對分",
                'zh-CN': "极简、水平线对分",
                'en': "Minimalism, horizon bisection",
                'ja': "ミニマリズム、水平線による二分割",
                'ko': "미니멀리즘, 수평선 이분할"
            }
        },
        website: "https://www.sugimotohiroshi.com",
        initials: "HS"
    },
    {
        id: 6,
        name: {
            'zh-TW': "森山大道",
            'zh-CN': "森山大道",
            'en': "Daido Moriyama",
            'ja': "森山大道",
            'ko': "모리야마 다이도"
        },
        category: {
            'zh-TW': "人文紀實",
            'zh-CN': "人文纪实",
            'en': "Documentary",
            'ja': "ドキュメンタリー",
            'ko': "다큐멘터리"
        },
        style: {
            'zh-TW': "以「粗顆粒、模糊、失焦 (Are-Bure-Bokeh)」風格聞名。遊蕩於都市街頭捕捉慾望與混亂。",
            'zh-CN': "以“粗颗粒、模糊、失焦 (Are-Bure-Bokeh)”风格闻名。游荡于都市街头捕捉欲望与混乱。",
            'en': "Known for 'Are-Bure-Bokeh' (grainy, blurry, out-of-focus) style. Capturing urban desire and chaos.",
            'ja': "「アレ・ブレ・ボケ」と呼ばれるスタイルで世界的に知られます。都市の断片を、欲望と混沌の視点からスナップで捉えます。",
            'ko': "'거칠고 흔들리고 어긋난(Are-Bure-Bokeh)' 스타일로 유명합니다. 도시 거리의 욕망과 혼돈을 포착합니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "21mm/28mm (Ricoh GR)",
                'zh-CN': "21mm/28mm (Ricoh GR)",
                'en': "21mm/28mm (Ricoh GR)",
                'ja': "21mm/28mm (Ricoh GR)",
                'ko': "21mm/28mm (Ricoh GR)"
            },
            aperture: {
                'zh-TW': "自動/小光圈 (泛焦抓拍)",
                'zh-CN': "自动/小光圈 (泛焦抓拍)",
                'en': "Auto/Small Aperture (Zone Focus)",
                'ja': "オート/最小絞り (パンフォーカス向け)",
                'ko': "자동/작은 조리개 (팬포커스 스냅용)"
            },
            composition: {
                'zh-TW': "傾斜構圖、高反差黑白",
                'zh-CN': "倾斜构图、高反差黑白",
                'en': "Dutch angle, High contrast B&W",
                'ja': "斜めの構図, ハイコントラストな白黒",
                'ko': "기울어진 구도, 고대비 흑백"
            }
        },
        website: "https://www.moriyamadaido.com",
        initials: "DM"
    },
    {
        id: 7,
        name: {
            'zh-TW': "川內倫子",
            'zh-CN': "川内伦子",
            'en': "Rinko Kawauchi",
            'ja': "川内倫子",
            'ko': "카와우치 린코"
        },
        category: {
            'zh-TW': "藝術觀念",
            'zh-CN': "艺术观念",
            'en': "Conceptual",
            'ja': "コンセプチュアル",
            'ko': "관념 예술"
        },
        style: {
            'zh-TW': "擅長捕捉日常生活中微小的光影與生命力，照片具有空氣感與透明感。",
            'zh-CN': "擅长捕捉日常生活中微小的光影与生命力，照片具有空气感与透明感。",
            'en': "Captures the luminosity and fragility of daily life. Known for airy, transparent style.",
            'ja': "日常生活の中に潜む微細な光と生命の輝きを捉えることに長けています。空気感と透明感のあるスタイルが特徴です。",
            'ko': "일상 속에 숨겨진 미세한 빛과 생명력을 포착하는 데 능숙합니다. 공기감과 투명함이 느껴지는 스타일로 유명합니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "Rolleiflex 雙眼相機",
                'zh-CN': "Rolleiflex 双眼相机",
                'en': "Rolleiflex TLR",
                'ja': "ローライフレックス (二眼レフ)",
                'ko': "롤라이플렉스 (이안 반사식)"
            },
            aperture: {
                'zh-TW': "大光圈 (柔和散景)",
                'zh-CN': "大光圈 (柔和散景)",
                'en': "Wide aperture (Soft bokeh)",
                'ja': "開放絞り (柔らかいボケ味)",
                'ko': "밝은 조리개 (부드러운 보케)"
            },
            composition: {
                'zh-TW': "正方形構圖、留白",
                'zh-CN': "正方形构图、留白",
                'en': "Square format, Negative space",
                'ja': "ましかく写真、余白の活用",
                'ko': "정사각형 구도, 여백 활용"
            }
        },
        website: "http://rinkokawauchi.com",
        initials: "RK"
    },
    {
        id: 8,
        name: {
            'zh-TW': "植田正治",
            'zh-CN': "植田正治",
            'en': "Shoji Ueda",
            'ja': "植田正治",
            'ko': "우에다 쇼지"
        },
        category: {
            'zh-TW': "藝術觀念",
            'zh-CN': "艺术观念",
            'en': "Conceptual",
            'ja': "コンセプチュアル",
            'ko': "관념 예술"
        },
        style: {
            'zh-TW': "以鳥取沙丘為舞台，創造出獨特的「植田調 (Ueda-cho)」，呈現極致的排列美學與幽默感。",
            'zh-CN': "以鸟取沙丘为舞台，创造出独特的“植田调 (Ueda-cho)”，呈现极致的排列美学与幽默感。",
            'en': "Created the unique 'Ueda-cho' style on Tottori Sand Dunes, featuring minimalist arrangement and humor.",
            'ja': "鳥取砂丘を舞台に、独自の「植田調」を確立。緻密な配置美とユーモアを感じさせる演出写真の先駆者です。",
            'ko': "돗토리 사구를 무대로 독특한 '우에다 조' 스타일을 확립했습니다. 치밀한 배치미와 유머가 느껴지는 연출 사진으로 유명합니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "中片幅/標準鏡頭",
                'zh-CN': "中片幅/标准镜头",
                'en': "Medium Format/Standard",
                'ja': "中判カメラ/標準レンズ",
                'ko': "중형 카메라/표준 렌즈"
            },
            aperture: {
                'zh-TW': "f/8 - f/16 (深景深)",
                'zh-CN': "f/8 - f/16 (深景深)",
                'en': "f/8 - f/16 (Deep DoF)",
                'ja': "f/8 - f/16 (深い被写界深度)",
                'ko': "f/8 - f/16 (깊은 심도)"
            },
            composition: {
                'zh-TW': "舞台式構圖、剪影",
                'zh-CN': "舞台式构图、剪影",
                'en': "Stage-like composition, Silhouettes",
                'ja': "ステージのような構成、シルエットの活用",
                'ko': "무대 같은 구성, 실루엣 활용"
            }
        },
        website: "https://www.shojiueda.com",
        initials: "SU"
    },
    {
        id: 9,
        name: {
            'zh-TW': "蜷川實花",
            'zh-CN': "蜷川实花",
            'en': "Mika Ninagawa",
            'ja': "蜷川実花",
            'ko': "니나가와 미카"
        },
        category: {
            'zh-TW': "人物肖像",
            'zh-CN': "人物肖像",
            'en': "Portrait",
            'ja': "ポートレート",
            'ko': "인물 초상"
        },
        style: {
            'zh-TW': "極度飽和、鮮豔的色彩，以金魚與花卉為標誌。風格華麗迷幻，融合藝術與流行商業。",
            'zh-CN': "极度饱和、鲜艳的色彩，以金鱼与花卉为标志。风格华丽迷幻，融合艺术与流行商业。",
            'en': "Extremely saturated, vivid colors featuring goldfish and flowers. Glamorous style bridging art and commercialism.",
            'ja': "極彩色が溢れる鮮やかな色彩、金魚や花をモチーフにした独自のスタイル。アートとエンターテインメントを横断する華やかな作風です。",
            'ko': "극도로 포화된 선명한 색채, 금붕어와 꽃을 모티프로 한 화려하고 몽환적인 스타일이 특징입니다. 예술과 대중 문화를 넘나드는 독창적인 작품 세계를 구축했습니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "微距鏡頭/廣角",
                'zh-CN': "微距镜头/广角",
                'en': "Macro lens/Wide angle",
                'ja': "マクロレンズ/広角",
                'ko': "매크로 렌즈/광각"
            },
            aperture: {
                'zh-TW': "多變 (鮮豔亮麗)",
                'zh-CN': "多变 (鲜艳亮丽)",
                'en': "Variable (Vivid)",
                'ja': "多変 (鮮やかさ重視)",
                'ko': "가변 (선명함 중시)"
            },
            composition: {
                'zh-TW': "填滿畫面的色彩",
                'zh-CN': "填满画面的色彩",
                'en': "Frame-filling color",
                'ja': "フレームいっぱいの色彩構成",
                'ko': "프레임을 가득 채우는 색채 구성"
            }
        },
        website: "https://mikaninagawa.com",
        initials: "MN"
    },
    {
        id: 10,
        name: {
            'zh-TW': "荒木經維",
            'zh-CN': "荒木经惟",
            'en': "Nobuyoshi Araki",
            'ja': "荒木経惟",
            'ko': "아라키 노부요시"
        },
        category: {
            'zh-TW': "藝術觀念",
            'zh-CN': "艺术观念",
            'en': "Conceptual",
            'ja': "コンセプチュアル",
            'ko': "관념 예술"
        },
        style: {
            'zh-TW': "多產且具爭議，探討「生與死 (Eros & Thanatos)」。作品直白且充滿情緒張力。",
            'zh-CN': "多产且具争议，探讨“生与死 (Eros & Thanatos)”。作品直白且充满情绪张力。",
            'en': "Prolific and controversial, exploring 'Eros & Thanatos' with raw emotional power.",
            'ja': "エロスとタナトス（生と死）をテーマに膨大な作品群を生む、日本を代表する写真家の一人。剥き出しの感情と親密さを描きます。",
            'ko': "다작과 논란으로 유명하며, '에로스와 타나토스(삶과 죽음)'를 테마로 생생한 감정적 긴장감이 느껴지는 작품을 선보입니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "Pentax 6x7 / 隨身機",
                'zh-CN': "Pentax 6x7 / 随身机",
                'en': "Pentax 6x7 / Point & Shoot",
                'ja': "Pentax 6x7 / コンパクトカメラ",
                'ko': "Pentax 6x7 / 소형 카메라"
            },
            aperture: {
                'zh-TW': "善用閃光燈直打",
                'zh-CN': "善用闪光灯直打",
                'en': "Direct Flash",
                'ja': "ストレートフラッシュの活用",
                'ko': "직접 플래시 활용"
            },
            composition: {
                'zh-TW': "隨性、直覺式",
                'zh-CN': "随性、直觉式",
                'en': "Casual, Intuitive",
                'ja': "偶発的、直感的コンポシジョン",
                'ko': "자유롭고 직관적인 구도"
            }
        },
        website: "http://www.arakinobuyoshi.com",
        initials: "NA"
    },
    {
        id: 11,
        name: {
            'zh-TW': "裴炳雨",
            'zh-CN': "裴炳雨",
            'en': "Bae Bien-u",
            'ja': "ベ・ビョンウ",
            'ko': "배병우"
        },
        category: {
            'zh-TW': "大地景觀",
            'zh-CN': "风景摄影",
            'en': "Landscape",
            'ja': "風景写真",
            'ko': "풍경 사진"
        },
        style: {
            'zh-TW': "以拍攝韓國松樹聞名。作品具有水墨畫般的意境，展現出樹木的靈性與自然的神聖感。",
            'zh-CN': "以拍摄韩国松树闻名。作品具有水墨画般的意境，展现出树木的灵性与自然的神圣感。",
            'en': "Famous for photographing pine trees. His works evoke ink-wash paintings, revealing the spirituality of nature.",
            'ja': "韓国の松の木を撮り続けていることで世界的に知られます。水墨画のような静謐な佇まいの中に、自然の霊性と神聖さを描き出します。",
            'ko': "한국의 소나무를 촬영하는 것으로 유명합니다. 수묵화 같은 여백과 선의 미를 통해 자연의 영성(Spirituality)과 신성함을 보여줍니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "全景相機 (6x12)",
                'zh-CN': "全景相机 (6x12)",
                'en': "Panoramic Camera (6x12)",
                'ja': "パノラマカメラ (6x12)",
                'ko': "파노라마 카메라 (6x12)"
            },
            aperture: {
                'zh-TW': "小光圈 (長曝光)",
                'zh-CN': "小光圈 (长曝光)",
                'en': "Small aperture (Long exposure)",
                'ja': "小絞り (長時間露光)",
                'ko': "작은 조리개 (장노출)"
            },
            composition: {
                'zh-TW': "全景寬幅、線條韻律",
                'zh-CN': "全景宽幅、线条韵律",
                'en': "Panoramic format, Rhythmic lines",
                'ja': "パノラマワイド、線的なリズム",
                'ko': "파노라마 와이드, 선의 리듬감"
            }
        },
        website: "http://www.baebienu.com",
        initials: "BB"
    },
    {
        id: 12,
        name: {
            'zh-TW': "具本昌",
            'zh-CN': "具本昌",
            'en': "Koo Bohnchang",
            'ja': "ク・ボンチャン",
            'ko': "구본창"
        },
        category: {
            'zh-TW': "藝術觀念",
            'zh-CN': "艺术观念",
            'en': "Conceptual",
            'ja': "コンセプチュアル",
            'ko': "관념 예술"
        },
        style: {
            'zh-TW': "以拍攝朝鮮白瓷聞名，作品色調極淡，捕捉物體隨時間流逝的脆弱感與本質。",
            'zh-CN': "以拍摄朝鲜白瓷闻名，作品色调极淡，捕捉物体随时间流逝的脆弱感与本质。",
            'en': "Renowned for photographing Joseon white porcelain. Pale tones capturing the fragility and essence of objects over time.",
            'ja': "朝鮮白磁をモチーフにした作品で知られます。極めて淡いトーンで、時の流れとともに失われゆくものの儚さと本質を捉えます。",
            'ko': "조선 백자를 촬영한 작품으로 유명합니다. 옅은 톤을 통해 시간의 흐름 속에 존재하는 사물의 덧없음과 본질적인 아름다움을 포착합니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "大畫幅相機",
                'zh-CN': "大画幅相机",
                'en': "Large Format",
                'ja': "大判カメラ",
                'ko': "대형 카메라"
            },
            aperture: {
                'zh-TW': "柔焦、淺景深",
                'zh-CN': "柔焦、浅景深",
                'en': "Soft focus, Shallow DoF",
                'ja': "ソフトフォーカス、浅い被写界深度",
                'ko': "소프트 포커스, 얕은 심도"
            },
            composition: {
                'zh-TW': "中心構圖、留白",
                'zh-CN': "中心构图、留白",
                'en': "Center composition, Void",
                'ja': "センター構成、余白（空）の表現",
                'ko': "중앙 구도, 여백의 미"
            }
        },
        website: "http://www.bckoo.com",
        initials: "KB"
    },
    {
        id: 13,
        name: {
            'zh-TW': "金雅他",
            'zh-CN': "金雅他",
            'en': "Atta Kim",
            'ja': "アッタ・キム",
            'ko': "아타 킴"
        },
        category: {
            'zh-TW': "藝術觀念",
            'zh-CN': "艺术观念",
            'en': "Conceptual",
            'ja': "コンセプチュアル",
            'ko': "관념 예술"
        },
        style: {
            'zh-TW': "代表作《ON-AIR》系列，透過長時間曝光讓移動的人群消失，探討存在與虛無的哲學。",
            'zh-CN': "代表作《ON-AIR》系列，通过长时间曝光让移动的人群消失，探讨存在与虚无的哲学。",
            'en': "Known for 'ON-AIR' project. Uses long exposures to make moving crowds disappear, exploring philosophical existence.",
            'ja': "代表作『ON-AIR』プロジェクトでは、超長時間露光によって群衆を消し去り、存在と虚無という哲学的な問いを投げかけます。",
            'ko': "대표작 'ON-AIR' 시리즈로 유명합니다. 장노출을 통해 움직이는 군중을 사라지게 함으로써 존재와 허무에 대한 철학적 탐구를 수행합니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "8x10 大畫幅",
                'zh-CN': "8x10 大画幅",
                'en': "8x10 Large Format",
                'ja': "8x10 大判カメラ",
                'ko': "8x10 대형 카메라"
            },
            aperture: {
                'zh-TW': "極小光圈 + 減光鏡",
                'zh-CN': "極小光圈 + 减光镜",
                'en': "Tiny aperture + ND Filters",
                'ja': "最小絞り + NDフィルター",
                'ko': "최소 조리개 + ND 필터"
            },
            composition: {
                'zh-TW': "靜止場景與時間流動",
                'zh-CN': "静止场景与时间流动",
                'en': "Static scene vs Time flow",
                'ja': "静止した空間と時間の流れの対比",
                'ko': "정지된 공간과 시간의 흐름"
            }
        },
        website: "http://www.attakim.com",
        initials: "AK"
    },
    {
        id: 14,
        name: {
            'zh-TW': "韓榮洙",
            'zh-CN': "韩荣洙",
            'en': "Han Youngsoo",
            'ja': "ハン・ヨンス",
            'ko': "한영수"
        },
        category: {
            'zh-TW': "人文紀實",
            'zh-CN': "人文纪实",
            'en': "Documentary",
            'ja': "ドキュメンタリー",
            'ko': "다큐멘터리"
        },
        style: {
            'zh-TW': "捕捉了首爾戰後重建時期的時尚與生機。構圖精確且具備獨特的現代美學視角。",
            'zh-CN': "捕捉了首尔战后重建时期的时尚与生机。构图精确且具备独特的现代美学视角。",
            'en': "Captured the fashion and vitality of Seoul's reconstruction with modern composition and precise aesthetics.",
            'ja': "戦後復興期のソウルのモダンな風景やファッションを捉えました。完璧な構圖と、当時としては画期的な都会的美学眼が特徴です。",
            'ko': "전후 복구 시기 서울의 현대적인 일상과 패션을 포착했습니다. 정교한 구도와 시대를 앞서간 세련된 미적 감각이 돋보이는 작품을 남겼습니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "50mm (Leica)",
                'zh-CN': "50mm (Leica)",
                'en': "50mm (Leica)",
                'ja': "50mm (ライカ)",
                'ko': "50mm (라이카)"
            },
            aperture: {
                'zh-TW': "f/5.6 - f/8",
                'zh-CN': "f/5.6 - f/8",
                'en': "f/5.6 - f/8",
                'ja': "f/5.6 - f/8",
                'ko': "f/5.6 - f/8"
            },
            composition: {
                'zh-TW': "高角度俯拍、光影幾何",
                'zh-CN': "高角度俯拍、光影几何",
                'en': "High angle, Light & Shadow geometry",
                'ja': "ハイアングル、光と影による幾何学構成",
                'ko': "하이 앵글, 빛과 그림자의 기하학적 구성"
            }
        },
        website: "http://www.hanyoungsoo.kr",
        initials: "HY"
    },
    {
        id: 15,
        name: {
            'zh-TW': "李正鎮",
            'zh-CN': "李正镇",
            'en': "Jungjin Lee",
            'ja': "ジョンジン・リー",
            'ko': "이정진"
        },
        category: {
            'zh-TW': "大地景觀",
            'zh-CN': "大地景观",
            'en': "Landscape",
            'ja': "風景写真",
            'ko': "풍경 사진"
        },
        style: {
            'zh-TW': "將感光乳劑塗在韓紙上，結合攝影與繪畫質感，作品充滿荒涼、安靜與詩意。",
            'zh-CN': "将感光乳剂涂在韩纸上，结合摄影与绘画质感，作品充满荒凉、安静与诗意。",
            'en': "Prints on handmade mulberry paper. Blends photography with painterly texture, desolate and poetic.",
            'ja': "感光乳剤を塗布した手製の韓紙（ハンジ）にプリントする独自手法を用います。写真と絵画が融合したような、荒涼として詩的な世界観が魅力です。",
            'ko': "한지에 감광 유제를 직접 발라 인화하는 독창적인 방식을 사용합니다. 사진과 회화적 질감이 결합된, 명상적이고 시적인 풍경을 보여줍니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "全景相機",
                'zh-CN': "全景相机",
                'en': "Panoramic Camera",
                'ja': "パノラマカメラ",
                'ko': "파노라마 카메라"
            },
            aperture: {
                'zh-TW': "強調紋理",
                'zh-CN': "强调纹理",
                'en': "Texture emphasis",
                'ja': "質感の強調",
                'ko': "질감 강조"
            },
            composition: {
                'zh-TW': "材質優先、風景肖像",
                'zh-CN': "材质优先、风景肖像",
                'en': "Texture first, Landscape portrait",
                'ja': "テクスチャ優先、風景のポートレート",
                'ko': "질감 우선, 풍경의 초상화"
            }
        },
        website: "https://www.jungjinlee.com",
        initials: "JL"
    },
    {
        id: 16,
        name: {
            'zh-TW': "理查·艾維頓",
            'zh-CN': "理查·艾维顿",
            'en': "Richard Avedon",
            'ja': "リチャード・アヴェドン",
            'ko': "리처드 아베돈"
        },
        category: {
            'zh-TW': "人物肖像",
            'zh-CN': "人物肖像",
            'en': "Portrait",
            'ja': "ポートレート",
            'ko': "인물 초상"
        },
        style: {
            'zh-TW': "定義了 20 世紀的人像美學。以簡約的純白背景、極高對比度及對拍攝對象情緒的精準捕捉著稱。",
            'zh-CN': "定義了 20 世纪的人像美学。以简约的纯白背景、极高对比度及对拍摄对象情绪的精准捕捉著称。",
            'en': "Defined 20th-century portraiture. Known for minimalist white backgrounds, high contrast, and raw emotion.",
            'ja': "20世紀の肖像写真の概念を覆しました。真っ白な背景と高いコントラストを用い、被写体の内面に潜む複雑な感情を暴き出します。",
            'ko': "20세기 인물 사진의 미학을 완성했습니다. 미니멀한 흰 배경과 강한 대비를 통해 인물의 심리적 본질과 생생한 감정을 포착했습니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "8x10 大畫幅",
                'zh-CN': "8x10 大画幅",
                'en': "8x10 Large Format",
                'ja': "8x10 大判カメラ",
                'ko': "8x10 대형 카메라"
            },
            aperture: {
                'zh-TW': "f/22 (極大景深與細節)",
                'zh-CN': "f/22 (极大景深与细节)",
                'en': "f/22 (Maximum detail/DoF)",
                'ja': "f/22 (被写界深度と細部の最大化)",
                'ko': "f/22 (최대 심도와 디테일 확보)"
            },
            composition: {
                'zh-TW': "純白背景、中心對稱",
                'zh-CN': "纯白背景、中心对称",
                'en': "White background, Centered",
                'ja': "白い背景、センター対称構図",
                'ko': "흰 배경, 중앙 대칭 구도"
            }
        },
        website: "https://www.avedonfoundation.org",
        initials: "RA"
    },
    {
        id: 17,
        name: {
            'zh-TW': "尤瑟夫·卡希",
            'zh-CN': "尤瑟夫·卡希",
            'en': "Yousuf Karsh",
            'ja': "ユサフ・カーシュ",
            'ko': "유서프 카쉬"
        },
        category: {
            'zh-TW': "人物肖像",
            'zh-CN': "人物肖像",
            'en': "Portrait",
            'ja': "ポートレート",
            'ko': "인물 초상"
        },
        style: {
            'zh-TW': "被譽為「光影大師」，擅長使用戲劇性的燈光（Karsh Light）凸顯人物的力量與偉大。",
            'zh-CN': "被誉为“光影大师”，擅长使用戏剧性的灯光（Karsh Light）凸显人物的力量与伟大。",
            'en': "The Master of Light/Shadow. Used dramatic lighting ('Karsh Light') to sculpt faces and emphasize greatness.",
            'ja': "ドラマチックなライティングで被写体の重厚な威厳を描き出し、「光と影の探求者」と称されます。チャーチルの肖像が有名です。",
            'ko': "'빛의 거장'으로 불리며, 드라마틱한 조명 기법을 통해 대상의 인격과 위엄, 그리고 시대의 정신을 형상화했습니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "8x10 大畫幅",
                'zh-CN': "8x10 大画幅",
                'en': "8x10 Large Format",
                'ja': "8x10 大判カメラ",
                'ko': "8x10 대형 카메라"
            },
            aperture: {
                'zh-TW': "f/11 - f/16 (精緻質感)",
                'zh-CN': "f/11 - f/16 (精緻质感)",
                'en': "f/11 - f/16 (Fine texture)",
                'ja': "f/11 - f/16 (繊細なテクスチャの再現)",
                'ko': "f/11 - f/16 (정교한 질감 묘사)"
            },
            composition: {
                'zh-TW': "雙光源側面補光、嚴肅沈穩",
                'zh-CN': "双光源侧面补光、严肃沈稳",
                'en': "Rim lighting, Solemn atmosphere",
                'ja': "リムライティング、荘厳な空気感",
                'ko': "윤곽 조명, 엄숙하고 중후한 분위기"
            }
        },
        website: "https://karsh.org",
        initials: "YK"
    },
    {
        id: 18,
        name: {
            'zh-TW': "彼得·林德伯格",
            'zh-CN': "彼得·林德伯格",
            'en': "Peter Lindbergh",
            'ja': "ピーター・リンドバーグ",
            'ko': "피터 린드버그"
        },
        category: {
            'zh-TW': "人物肖像",
            'zh-CN': "人物肖像",
            'en': "Portrait",
            'ja': "ポートレート",
            'ko': "인물 초상"
        },
        style: {
            'zh-TW': "反對過度修圖，強調自然的美感。作品帶有強烈的電影敘事感與深邃的黑白影調。",
            'zh-CN': "反对过度修图，强调自然的美感。作品带有强烈的电影叙事感与深邃的黑白影调。",
            'en': "Rejected excessive retouching, championing natural beauty with cinematic narrative and deep B&W tones.",
            'ja': "過度なレタッチを拒否し、女性のありのままの美しさを追求しました。深みのある白黒写真と映画的なナラティブが特徴です。",
            'ko': "과도한 보정을 거부하고 인물의 자연스러운 아름다움을 강조했습니다. 영화적인 서사와 깊이 있는 흑백 톤으로 시대를 풍미했습니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "50mm / 85mm",
                'zh-CN': "50mm / 85mm",
                'en': "50mm / 85mm",
                'ja': "50mm / 85mm",
                'ko': "50mm / 85mm"
            },
            aperture: {
                'zh-TW': "大光圈",
                'zh-CN': "大光圈",
                'en': "Wide aperture",
                'ja': "開放絞り",
                'ko': "밝은 조리개"
            },
            composition: {
                'zh-TW': "不看鏡頭、動態捕捉",
                'zh-CN': "不看镜头、动态捕捉",
                'en': "Looking away, Motion capture",
                'ja': "目線を外した自然な動き、スナップ的な躍動感",
                'ko': "시선을 먼 곳에 둔 자연스러운 동작 포착"
            }
        },
        website: "http://www.peterlindbergh.com",
        initials: "PL"
    },
    {
        id: 19,
        name: {
            'zh-TW': "歐文·佩恩",
            'zh-CN': "欧文·佩恩",
            'en': "Irving Penn",
            'ja': "アーヴィング・ペン",
            'ko': "어빙 펜"
        },
        category: {
            'zh-TW': "人物肖像",
            'zh-CN': "人物肖像",
            'en': "Portrait",
            'ja': "ポートレート",
            'ko': "인물 초상"
        },
        style: {
            'zh-TW': "以冷靜且嚴謹的視角著稱。常將人物置於狹窄的角落（Corner Portraits）拍攝，創造心理張力。",
            'zh-CN': "以冷静且严谨的视角著称。常将人物置于狭窄的角落（Corner Portraits）拍摄，创造心理张力。",
            'en': "Known for elegance and cool detachment. Famous for 'Corner Portraits' creating psychological tension.",
            'ja': "静謐で厳格なスタイルで、ヴォーグ誌などで活躍。被写体を狭い角に追い込む「コーナー・ポートレート」で心理的な緊張感を引き出しました。",
            'ko': "우아하고 냉철한 시선으로 유명합니다. 인물을 좁은 모서리에 배치하는 '코너 초상'을 통해 심리적 긴장감을 유도했습니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "Rolleiflex / 大畫幅",
                'zh-CN': "Rolleiflex / 大画幅",
                'en': "Rolleiflex / Large Format",
                'ja': "ローライフレックス / 大判カメラ",
                'ko': "롤라이플렉스 / 대형 카메라"
            },
            aperture: {
                'zh-TW': "小光圈 (清晰銳利)",
                'zh-CN': "小光圈 (清晰锐利)",
                'en': "Small aperture (Sharpness)",
                'ja': "小絞り (高い解像度)",
                'ko': "작은 조리개 (극상의 선명도)"
            },
            composition: {
                'zh-TW': "幾何構圖、單一北窗光",
                'zh-CN': "几何构图、单一北窗光",
                'en': "Geometric, North window light",
                'ja': "幾何学的構成、一定方向からの柔らかな北窓光",
                'ko': "기하학적 구성, 균일한 북쪽 창문광 활용"
            }
        },
        website: "https://irvingpenn.org",
        initials: "IP"
    },
    {
        id: 20,
        name: {
            'zh-TW': "辛蒂·雪曼",
            'zh-CN': "辛蒂·雪曼",
            'en': "Cindy Sherman",
            'ja': "シンディ・シャーマン",
            'ko': "신디 셔먼"
        },
        category: {
            'zh-TW': "藝術觀念",
            'zh-CN': "艺术观念",
            'en': "Conceptual",
            'ja': "コンセプチュアル",
            'ko': "관념 예술"
        },
        style: {
            'zh-TW': "當代藝術大師，透過扮裝演繹各種社會角色，探討身份認同、媒體刻板印象與女性凝視。",
            'zh-CN': "当代艺术大师，通过扮装演绎各种社会角色，探讨身份认同、媒体刻板印象与女性凝视。",
            'en': "Conceptual artist enacting various social roles to explore identity and the male gaze.",
            'ja': "自らモデルとなり、映画やメディアにおける女性像をパロディ化して演じます。ジェンダーやアイデンティティへの鋭い考察を行っています。",
            'ko': "사회적 고정관념 속의 다양한 여성상을 직접 연기하는 자화상 시리즈로 유명합니다. 정체성과 성별, 매체의 시선에 대한 날카로운 질문을 던집니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "35mm / 中片幅",
                'zh-CN': "35mm / 中片幅",
                'en': "35mm / Medium Format",
                'ja': "35mm / 中判カメラ",
                'ko': "35mm / 중형 카메라"
            },
            aperture: {
                'zh-TW': "多變 (依劇本而定)",
                'zh-CN': "多变 (依剧本而定)",
                'en': "Variable",
                'ja': "多変 (シーンの要求に応じる)",
                'ko': "가변적 (연출 의도에 따라 다름)"
            },
            composition: {
                'zh-TW': "電影劇照式 (Film Still)",
                'zh-CN': "电影剧照式 (Film Still)",
                'en': "Film Still style",
                'ja': "フィルム・スチル（映画のワンシーン）構成",
                'ko': "영화 스틸컷 스타일의 구성"
            }
        },
        website: "https://www.moma.org/artists/5392",
        initials: "CS"
    },
    {
        id: 21,
        name: {
            'zh-TW': "黛安·阿勃絲",
            'zh-CN': "黛安·阿勃丝",
            'en': "Diane Arbus",
            'ja': "ダイアン・アーバス",
            'ko': "다이안 아버스"
        },
        category: {
            'zh-TW': "人物肖像",
            'zh-CN': "人物肖像",
            'en': "Portrait",
            'ja': "ポートレート",
            'ko': "인물 초상"
        },
        style: {
            'zh-TW': "專注於拍攝社會邊緣人與奇特人物。作品帶有一種直接且令人震撼的凝視。",
            'zh-CN': "专注于拍摄社会边缘人与奇特人物。作品带有一种直接且令人震撼的凝视。",
            'en': "Focused on social outcasts and eccentric characters with a direct, unsettling gaze.",
            'ja': "社会の縁に生きる人々や奇妙な個性を持つ人々を撮影しました。その直接的で、時に残酷なまでに静かな眼差しは、観る者に強い衝撃を与えます。",
            'ko': "사회의 소외된 이들과 독특한 인물들을 주로 촬영했습니다. 대상에 대한 직접적이고 충격적인 시선을 통해 관찰자와 피사체 사이의 기묘한 긴장감을 만들어냅니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "Rolleiflex (正方形畫幅)",
                'zh-CN': "Rolleiflex (正方形画幅)",
                'en': "Rolleiflex (Square format)",
                'ja': "ローライフレックス (正方形フォーマット)",
                'ko': "롤라이플렉스 (정사각형 포맷)"
            },
            aperture: {
                'zh-TW': "f/11 (手持閃光燈)",
                'zh-CN': "f/11 (手持闪光灯)",
                'en': "f/11 (Handheld flash)",
                'ja': "f/11 (手持ちフラッシュ使用)",
                'ko': "핸드헬드 플래시 (f/11)"
            },
            composition: {
                'zh-TW': "正中心構圖、硬光直打",
                'zh-CN': "正中心构图、硬光直打",
                'en': "Centered, Harsh direct lighting",
                'ja': "中心構図、強いダイレクト・ストロボ光",
                'ko': "정중앙 구도, 거친 직사광 조명"
            }
        },
        website: "https://www.fraenkelgallery.com/artists/diane-arbus",
        initials: "DA"
    },
    {
        id: 22,
        name: {
            'zh-TW': "赫爾穆特·紐頓",
            'zh-CN': "赫尔穆特·纽顿",
            'en': "Helmut Newton",
            'ja': "ヘルムート・ニュートン",
            'ko': "헬무트 뉴튼"
        },
        category: {
            'zh-TW': "人物肖像",
            'zh-CN': "人物肖像",
            'en': "Portrait",
            'ja': "ポートレート",
            'ko': "인물 초상"
        },
        style: {
            'zh-TW': "以震撼、具爭議性的時尚人像著稱。作品常探討權力與女性力量，充滿視覺張力。",
            'zh-CN': "以震撼、具争议性的时尚人像著称。作品常探讨权力与女性力量，充满视觉张力。",
            'en': "Known for provocative fashion portraits exploring authority and sexuality with visual tension.",
            'ja': "挑発的なファッション・ヌードで知られ、権力や女性の精神的強さをテーマにした強烈な視覚的緊張感を生み出しました。",
            'ko': "도발적인 패션 사진으로 유명하며, 권력과 여성의 강인함을 주제로 시각적 긴장감이 넘치는 작품 세계를 보여줍니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "35mm / 中片幅",
                'zh-CN': "35mm / 中片幅",
                'en': "35mm / Medium Format",
                'ja': "35mm / 中判カメラ",
                'ko': "35mm / 중형 카메라"
            },
            aperture: {
                'zh-TW': "f/5.6 - f/11 (清晰影像)",
                'zh-CN': "f/5.6 - f/11 (清晰影像)",
                'en': "f/5.6 - f/11 (Clarity)",
                'ja': "f/5.6 - f/11 (鮮明な描写)",
                'ko': "f/5.6 - f/11 (선명한 화질)"
            },
            composition: {
                'zh-TW': "低仰角、戲劇性姿勢",
                'zh-CN': "低仰角、戏剧性姿势",
                'en': "Low angle, Dramatic poses",
                'ja': "ローアングル、ドラマチックなポージング",
                'ko': "로우 앵글, 드라마틱한 포즈"
            }
        },
        website: "https://helmut-newton-foundation.org",
        initials: "HN"
    },
    {
        id: 23,
        name: {
            'zh-TW': "塞巴斯蒂昂·薩爾加多",
            'zh-CN': "塞巴斯蒂昂·萨尔加多",
            'en': "Sebastião Salgado",
            'ja': "セバスチャン・サルガド",
            'ko': "세바스치앙 사우가두"
        },
        category: {
            'zh-TW': "人文紀實",
            'zh-CN': "人文紀實",
            'en': "Documentary",
            'ja': "ドキュメンタリー",
            'ko': "다큐멘터리"
        },
        style: {
            'zh-TW': "以宏大的黑白紀實攝影呈現人類苦難與自然壯麗。影像充滿詩意與神聖感。",
            'zh-CN': "以宏大的黑白纪实摄影呈现人类苦难与自然壮丽。影像充满诗意与神圣感。",
            'en': "Epic black-and-white photography depicting human struggle and natural grandeur with visual epics.",
            'ja': "過酷な環境下での労働や自然の美を壮大な黒白写真で描き、人類への深い愛と神聖さを感じさせる作風が特徴です。",
            'ko': "웅장한 흑백 사진으로 인간의 고난과 자연의 경이로움을 담아냅니다. 시적이고 거룩한 숭고미를 전달하는 다큐멘터리의 거장입니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "28mm - 35mm",
                'zh-CN': "28mm - 35mm",
                'en': "28mm - 35mm",
                'ja': "28mm - 35mm",
                'ko': "28mm - 35mm"
            },
            aperture: {
                'zh-TW': "f/8 - f/16 (追求景深)",
                'zh-CN': "f/8 - f/16 (追求景深)",
                'en': "f/8 - f/16 (Deep focus)",
                'ja': "f/8 - f/16 (深い被写界深度)",
                'ko': "f/8 - f/16 (깊은 심도)"
            },
            composition: {
                'zh-TW': "層次豐富的地景、群體人像",
                'zh-CN': "层次丰富的地景、群体人像",
                'en': "Layered landscapes, Group portraits",
                'ja': "書き込まれた多層レイヤー、群集構図",
                'ko': "층이 풍부한 지형, 군중 초상"
            }
        },
        website: "https://www.amazonasimages.com",
        initials: "SS"
    },
    {
        id: 24,
        name: {
            'zh-TW': "柏拉圖",
            'zh-CN': "柏拉圖",
            'en': "Platon",
            'ja': "プラトン",
            'ko': "플라톤"
        },
        category: {
            'zh-TW': "人物肖像",
            'zh-CN': "人物肖像",
            'en': "Portrait",
            'ja': "ポートレート",
            'ko': "인물 초상"
        },
        style: {
            'zh-TW': "使用極廣角鏡頭貼近主體拍攝，創造出具壓迫感、張力強烈且親密的英雄式人像。",
            'zh-CN': "使用极广角镜头贴近主体拍摄，创造出具压迫感、张力强烈且亲密的英雄式人像。",
            'en': "Uses wide-angle lenses close to subjects creating intense, intimate, and heroic portraits.",
            'ja': "広角レンズを極至近距離で使用し、被写体の存在感を強調した親密かつ圧倒的な「英雄的人像」を生み出します。",
            'ko': "광각 렌즈를 사용하여 대상에게 근접 촬영함으로써 압도적인 실재감과 긴장감이 넘치는 초상화 스타일을 확립했습니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "28mm / 35mm",
                'zh-CN': "28mm / 35mm",
                'en': "28mm / 35mm",
                'ja': "28mm / 35mm",
                'ko': "28mm / 35mm"
            },
            aperture: {
                'zh-TW': "f/11 - f/22",
                'zh-CN': "f/11 - f/22",
                'en': "f/11 - f/22",
                'ja': "f/11 - f/22",
                'ko': "f/11 - f/22"
            },
            composition: {
                'zh-TW': "低視角、環形閃光燈效果",
                'zh-CN': "低视角、环形闪光灯效果",
                'en': "Low POV, Ring-flash effect",
                'ja': "ローアングル、リングフラッシュ的演出",
                'ko': "낮은 앵글, 링 플래시 효과"
            }
        },
        website: "http://www.platonphoto.com",
        initials: "PL"
    },
    {
        id: 25,
        name: {
            'zh-TW': "馬丁·舍勒",
            'zh-CN': "马丁·舍勒",
            'en': "Martin Schoeller",
            'ja': "マーティン・ショーラー",
            'ko': "마틴 숄러"
        },
        category: {
            'zh-TW': "人物肖像",
            'zh-CN': "人物肖像",
            'en': "Portrait",
            'ja': "ポートレート",
            'ko': "인물 초상"
        },
        style: {
            'zh-TW': "以「大頭照」系列聞名。無論名流或平民都使用相同的光影與構圖，消除階級感。",
            'zh-CN': "以“大头照”系列闻名。无论名流或平民都使用相同的光影与构图，消除阶级感。",
            'en': "Famous for 'Close Up' series, using identical lighting and framing for all subjects to strip away class.",
            'ja': "「Close Up」シリーズで知られ、社会的地位に関わらず全ての人を同じライティングと構図で捉え、人間の本質を浮き彫りにします。",
            'ko': "'Close Up' 시리즈로 유명하며, 사회적 배경에 관계없이 모든 피사체를 동일한 조명과 구도로 촬영하여 계급을 초월한 인간성을 탐구합니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "100mm 微距 (眼平視角)",
                'zh-CN': "100mm 微距 (眼平视角)",
                'en': "100mm Macro (Eye-level)",
                'ja': "100mm マクロ (アイレベル)",
                'ko': "100mm 매크로 (눈높이)"
            },
            aperture: {
                'zh-TW': "f/11 (焦點銳利)",
                'zh-CN': "f/11 (焦点锐利)",
                'en': "f/11 (Sharp focus)",
                'ja': "f/11 (鋭い合焦)",
                'ko': "f/11 (날카로운 초점)"
            },
            composition: {
                'zh-TW': "極端臉部特寫、Kinoflo 持續光",
                'zh-CN': "极端脸부特写、Kinoflo 持续光",
                'en': "Extreme facial close-up, Kinoflo light",
                'ja': "極端なヘッドショット、キノフロによるライティング",
                'ko': "극단적인 얼굴 클로즈업, 지속광(Kinoflo) 조명"
            }
        },
        website: "https://martinschoeller.com",
        initials: "MS"
    },
    {
        id: 26,
        name: {
            'zh-TW': "提姆·沃克",
            'zh-CN': "提姆·沃克",
            'en': "Tim Walker",
            'ja': "ティム・ウォーカー",
            'ko': "팀 워커"
        },
        category: {
            'zh-TW': "藝術觀念",
            'zh-CN': "藝術觀念",
            'en': "Conceptual",
            'ja': "コンセプチュアル",
            'ko': "관념 예술"
        },
        style: {
            'zh-TW': "時尚界的夢想家。作品充滿超現實主義與童話色彩，以巨大的道具與精緻的置景聞名。",
            'zh-CN': "时尚界的梦想家。作品充满超现实主义与童话色彩，以巨大的道具与精致的置景闻名。",
            'en': "Fashion visionary. Work filled with surrealism and fairy-tale elements with grand staging.",
            'ja': "ファッション界のファンタジスタ。巨大なセットやファンタジー要素を駆使し、非現実的で夢のような物語を描き出します。",
            'ko': "초현실주의와 동화적 색채를 결합한 환상적인 패션 화보로 유명하며, 거대한 소품과 정교한 세트 연출이 특징입니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "24mm - 35mm",
                'zh-CN': "24mm - 35mm",
                'en': "24mm - 35mm",
                'ja': "24mm - 35mm",
                'ko': "24mm - 35mm"
            },
            aperture: {
                'zh-TW': "f/4 - f/5.6",
                'zh-CN': "f/4 - f/5.6",
                'en': "f/4 - f/5.6",
                'ja': "f/4 - f/5.6",
                'ko': "f/4 - f/5.6"
            },
            composition: {
                'zh-TW': "大場景調度、誇張比例",
                'zh-CN': "大场景调度、夸张比例",
                'en': "Large scale staging, Exaggerated ratios",
                'ja': "壮大な演出、誇張されたスケール感",
                'ko': "대규모 스테이징, 과장된 비례"
            }
        },
        website: "https://www.timwalkerphotography.com",
        initials: "TW"
    },
    {
        id: 27,
        name: {
            'zh-TW': "保羅·羅維西",
            'zh-CN': "保罗·罗维西",
            'en': "Paolo Roversi",
            'ja': "パオロ・ロヴェルシ",
            'ko': "파올로 로베르시"
        },
        category: {
            'zh-TW': "人物肖像",
            'zh-CN': "人物肖像",
            'en': "Portrait",
            'ja': "ポートレート",
            'ko': "인물 초상"
        },
        style: {
            'zh-TW': "作品帶有一種如繪畫般的朦朧美感與憂鬱氣息。常使用大畫幅拍立得開發獨特質地。",
            'zh-CN': "作品带有一种如绘画般的朦胧美感与忧郁气息。常使用大画幅拍立得开发独特质地。",
            'en': "Known for painterly, ethereal beauty and melancholy using 8x10 Large Format Polaroid.",
            'ja': "絵画のように繊細で幻想的な美しさが特徴で、大判ポラロイドを使用した独特の光とマテリアル感が魅力です。",
            'ko': "회화적인 몽환미와 우울한 서정성이 돋보이며, 8x10 대형 포라로이드를 활용한 독창적인 질감을 구현합니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "150mm - 300mm",
                'zh-CN': "150mm - 300mm",
                'en': "150mm - 300mm",
                'ja': "150mm - 300mm",
                'ko': "150mm - 300mm"
            },
            aperture: {
                'zh-TW': "f/8 (長曝光)",
                'zh-CN': "f/8 (长曝光)",
                'en': "f/8 (Long exposure)",
                'ja': "f/8 (長時間露光)",
                'ko': "f/8 (장노출)"
            },
            composition: {
                'zh-TW': "柔焦、古典繪畫光影",
                'zh-CN': "柔焦、古典绘画光影",
                'en': "Soft focus, Chiaroscuro light",
                'ja': "ソフトフォーカス、古典的な明暗法",
                'ko': "소프트 포커스, 고전적인 명암 대비"
            }
        },
        website: "https://www.paoloroversi.com",
        initials: "PR"
    },
    {
        id: 28,
        name: {
            'zh-TW': "威廉·艾格斯頓",
            'zh-CN': "威廉·艾格斯顿",
            'en': "William Eggleston",
            'ja': "ウィリアム・エグルストン",
            'ko': "윌리엄 이글스턴"
        },
        category: {
            'zh-TW': "藝術觀念",
            'zh-CN': "藝術觀念",
            'en': "Conceptual",
            'ja': "コンセプチュアル",
            'ko': "관념 예술"
        },
        style: {
            'zh-TW': "現代彩色攝影之父。將平凡、世俗的日常場景賦予了藝術價值，色彩飽和且具備震撼力。",
            'zh-CN': "现代彩色摄影之父。将平凡、世俗的日常场景赋予了艺术价值，色彩饱和且具备震撼力。",
            'en': "Father of modern color photography. Legitimized color as an art medium through mundane daily scenes.",
            'ja': "「ニューカラー」の開拓者であり、見過ごされがちな日常を、強烈な色彩美によって芸術へと昇華させました。",
            'ko': "현대 컬러 사진의 선구자로, 평범한 일상의 풍경을 강렬한 색채 대비를 통해 예술적 가치를 지닌 작품으로 재탄생시켰습니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "35mm / 50mm",
                'zh-CN': "35mm / 50mm",
                'en': "35mm / 50mm",
                'ja': "35mm / 50mm",
                'ko': "35mm / 50mm"
            },
            aperture: {
                'zh-TW': "f/5.6 - f/8",
                'zh-CN': "f/5.6 - f/8",
                'en': "f/5.6 - f/8",
                'ja': "f/5.6 - f/8",
                'ko': "f/5.6 - f/8"
            },
            composition: {
                'zh-TW': "對角線、飽和色塊、民主的攝影視角",
                'zh-CN': "对角线、饱和色块、民主的摄影视角",
                'en': "Diagonals, Saturated color, Democratic gaze",
                'ja': "対角線構成、高彩度な色面、フラットな視点",
                'ko': "대각선 구도, 포화된 색채, 평범한 대상을 향한 평등한 시선"
            }
        },
        website: "https://www.egglestonartfoundation.org",
        initials: "WE"
    },
    {
        id: 29,
        name: {
            'zh-TW': "史蒂芬·索爾",
            'zh-CN': "史蒂芬·索尔",
            'en': "Stephen Shore",
            'ja': "スティーブン・ショア",
            'ko': "스티븐 쇼어"
        },
        category: {
            'zh-TW': "大地景觀",
            'zh-CN': "大地景观",
            'en': "Landscape",
            'ja': "風景写真",
            'ko': "풍경 사진"
        },
        style: {
            'zh-TW': "新彩色攝影的領軍人物。以平凡的美國地景為對象，展現出冷靜、客觀且具備層次的色彩之美。",
            'zh-CN': "新彩色摄影的领军人物。以平凡的美国地景为对象，展现出冷静、客观且具备层次的色彩之美。",
            'en': "A pioneer of the New Color photography, capturing ordinary American landscapes with objective clarity.",
            'ja': "「ニューカラー」を代表する一人で、大判カメラを使用した緻密な描写と客観的な視点で、アメリカの都市風景の美を捉えました。",
            'ko': "뉴 컬러 사진의 개척자로서 미국의 평범한 풍경을 대형 카메라로 정밀하게 포착하여 냉정하고 객관적인 미학을 제시했습니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "8x10 大畫幅",
                'zh-CN': "8x10 大画幅",
                'en': "8x10 Large Format",
                'ja': "8x10 大判カメラ",
                'ko': "8x10 대형 카메라"
            },
            aperture: {
                'zh-TW': "f/16 - f/32 (全清晰)",
                'zh-CN': "f/16 - f/32 (全清晰)",
                'en': "f/16 - f/32 (Total clarity)",
                'ja': "f/16 - f/32 (被写界深度の確保)",
                'ko': "f/16 - f/32 (전체 선명도 유지)"
            },
            composition: {
                'zh-TW': "客觀視角、層次排列、結構美學",
                'zh-CN': "客观视角、层次排列、结构美学",
                'en': "Objective gaze, Layering, Structural beauty",
                'ja': "幾何学的な構成、層的な並列",
                'ko': "객관적인 시선, 층층이 쌓인 구조, 건축적 미학"
            }
        },
        website: "http://www.stephenshore.net",
        initials: "SS"
    },
    {
        id: 30,
        name: {
            'zh-TW': "亞歷克斯·韋伯",
            'zh-CN': "亚历克斯·韦伯",
            'en': "Alex Webb",
            'ja': "アレックス・ウェブ",
            'ko': "알렉스 웹"
        },
        category: {
            'zh-TW': "人文紀實",
            'zh-CN': "人文紀實",
            'en': "Documentary",
            'ja': "ドキュメンタリー",
            'ko': "다큐멘터리"
        },
        style: {
            'zh-TW': "以充滿複雜構圖與強烈陰影的彩色街頭攝影聞名。他的畫面具備高度的層次感與視覺飽和度。",
            'zh-CN': "以充满复杂构图与强烈阴影的彩色街头摄影闻名。他的画面具备高度的层次感与视觉饱和度。",
            'en': "Known for complex composition, intense shadows, and vibrant colors in street photography.",
            'ja': "複層的な構成と鮮烈な色彩、影の活用で知られ、ストリートの一瞬を複雑なレイヤーで切り取る名手です。",
            'ko': "강렬한 그림자와 복합적인 구도, 풍부한 색채감이 어우러진 거리 사진으로 유명하며, 한 공간 내의 여러 층위를 동시에 포착합니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "35mm (Leica)",
                'zh-CN': "35mm (Leica)",
                'en': "35mm (Leica)",
                'ja': "35mm (ライカ)",
                'ko': "35mm (라이카)"
            },
            aperture: {
                'zh-TW': "f/8 - f/11 (最大化焦平面細節)",
                'zh-CN': "f/8 - f/11 (最大化焦平面细节)",
                'en': "f/8 - f/11 (Max plane detail)",
                'ja': "f/8 - f/11 (焦点面の最大化)",
                'ko': "f/8 - f/11 (세밀한 초점 확보)"
            },
            composition: {
                'zh-TW': "多層次、複雜陰影、對比色彩",
                'zh-CN': "多层次、复杂阴影、对比色彩",
                'en': "Layering, Complex shadows, Contrast colors",
                'ja': "多層的なレイヤー、深いシャドウ、補色の対比",
                'ko': "다층 레이어, 정교한 그림자, 대비되는 색채"
            }
        },
        website: "https://www.alexwebb.com",
        initials: "AW"
    },
    {
        id: 31,
        name: {
            'zh-TW': "薇薇安·邁爾",
            'zh-CN': "薇薇安·迈尔",
            'en': "Vivian Maier",
            'ja': "ヴィヴィアン・マイヤー",
            'ko': "비비안 마이어"
        },
        category: {
            'zh-TW': "人文紀實",
            'zh-CN': "人文紀實",
            'en': "Documentary",
            'ja': "ドキュメンタリー",
            'ko': "다큐멘터리"
        },
        style: {
            'zh-TW': "傳奇性的業餘攝影師。身兼保姆職務，在業餘時間於芝加哥與紐約街頭捕捉了大量精彩的人文瞬間，其作品在去世後才被發現並震驚世界。",
            'zh-CN': "传奇性的业余摄影师。身兼保姆职务，在业余时间于芝加哥与纽约街头捕捉了大量精彩的人文瞬间，其作品在去世后才被发现并震惊世界。",
            'en': "Legendary amateur street photographer whose vast body of work was discovered posthumously. Captured Chicago and NYC street life with sharp wit and empathy.",
            'ja': "シカゴでナニーとして働きながら、膨大な量のストリート写真を撮り続けた伝説的なアマチュア写真家。その死後に発見された鋭い観察眼と慈愛に満ちた作品群は、世界に大きな衝撃を与えました。",
            'ko': "보모로 일하며 틈틈이 시카고와 뉴욕의 거리를 촬영했던 전설적인 아마추어 거리 사진가입니다. 사후에 발견된 그녀의 방대한 작품들은 유머와 통찰이 담긴 시선으로 세계를 놀라게 했습니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "Rolleiflex (腰平取景)",
                'zh-CN': "Rolleiflex (腰平取景)",
                'en': "Rolleiflex (Waist-level POV)",
                'ja': "ローライフレックス (ウェストレベル・ファインダー)",
                'ko': "롤라이플렉스 (허리 높이 시점)"
            },
            aperture: {
                'zh-TW': "f/8 - f/11 (確保景深)",
                'zh-CN': "f/8 - f/11 (确保景深)",
                'en': "f/8 - f/11 (Deep focus)",
                'ja': "f/8 - f/11 (十分な被写界深度)",
                'ko': "f/8 - f/11 (충분한 심도 확보)"
            },
            composition: {
                'zh-TW': "低視角取景、自拍、人性的瞬間捕捉",
                'zh-CN': "低视角取景、自拍、人性的瞬间捕捉",
                'en': "Low POV, Self-portraits, Human moments",
                'ja': "ローアングルからの構図、セルフポートレート、人間味あふれる瞬間の切り取り",
                'ko': "낮은 시점의 구도, 셀프 포트레이트, 인간미 넘치는 순간 포착"
            }
        },
        website: "http://www.vivianmaier.com",
        initials: "VM"
    },
    {
        id: 32,
        name: {
            'zh-TW': "羅伯特·法蘭克",
            'zh-CN': "罗伯特·法兰克",
            'en': "Robert Frank",
            'ja': "ロバート・フランク",
            'ko': "로버트 프랭크"
        },
        category: {
            'zh-TW': "紀實攝影",
            'zh-CN': "纪实摄影",
            'en': "Documentary",
            'ja': "ドキュメンタリー",
            'ko': "다큐멘터리"
        },
        style: {
            'zh-TW': "其作品集《美國人 (The Americans)》改變了攝影史。以旁觀者的冷峻與憂鬱，揭示了美國社會繁華背後的孤獨與真實。",
            'zh-CN': "其作品集《美国人 (The Americans)》改变了摄影史。以旁觀者的冷峻与忧郁，揭示了美国社会繁华背后的孤独与真实。",
            'en': "His landmark book 'The Americans' changed photography history, revealing the loneliness and reality of American life with a melancholic gaze.",
            'ja': "写真集『アメリカ人（The Americans）』で写真史に革命を起こしました。部外者としての冷徹かつ憂鬱な視線により、戦後アメリカの繁栄の裏側にある孤独と真実を描き出しました。",
            'ko': "전설적인 사진집 '미국인들(The Americans)'을 통해 사진사의 흐름을 바꿨습니다. 이방인의 냉철하고 우울한 시선으로 미국 사회의 화려함 뒤에 숨겨진 고독과 진실을 조명했습니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "35mm (Leica)",
                'zh-CN': "35mm (Leica)",
                'en': "35mm (Leica)",
                'ja': "35mm (ライカ)",
                'ko': "35mm (라이카)"
            },
            aperture: {
                'zh-TW': "快門優先 (捕捉情緒而非清晰度)",
                'zh-CN': "快门优先 (捕捉情绪而非清晰度)",
                'en': "Shutter speed priority (Grit over clarity)",
                'ja': "シャッター速度優先 (精細さよりも感情的な質感を重視)",
                'ko': "셔터 속도 우선 (선명함보다는 정서적 질감 강조)"
            },
            composition: {
                'zh-TW': "非傳統構圖、傾斜、充滿顆粒感的紀實",
                'zh-CN': "非传统构图、倾斜、充满颗粒感的纪实",
                'en': "Non-traditional, Tilted, Grainy realism",
                'ja': "伝統を打破する構図、傾き、粒子感のあるリアリズム",
                'ko': "비관습적인 구도, 기운 각도, 입자감이 느껴지는 사실주의"
            }
        },
        website: "https://www.icp.org/browse/archive/constituents/robert-frank",
        initials: "RF"
    },
    {
        id: 33,
        name: {
            'zh-TW': "約瑟夫·寇德卡",
            'zh-CN': "约瑟夫·寇德卡",
            'en': "Josef Koudelka",
            'ja': "ジョセフ・クーデルカ",
            'ko': "요제프 쿠델카"
        },
        category: {
            'zh-TW': "人文紀實",
            'zh-CN': "人文紀實",
            'en': "Documentary",
            'ja': "ドキュメンタリー",
            'ko': "다큐멘터리"
        },
        style: {
            'zh-TW': "瑪格南大師。紀錄了 1968 年布拉格之春及吉普賽人的生活。作品充滿強烈的孤獨感、史詩般的構圖與黑白的視覺衝擊。",
            'zh-CN': "玛格南大师。纪录了 1968 年布拉格之春及吉普赛人的生活。作品充满强烈的孤独感、史诗般的构图与黑白的视觉冲击。",
            'en': "Magnum master who documented the 1968 Prague Spring and Gypsy life. Known for epic composition and a deep sense of exile and solitude.",
            'ja': "1968年の「プラハの春」やジプシーの生活を記録したマグナム・フォト会員。亡命者の孤独感、壮大な構図、そして強烈な黒白のコントラストが特徴です。",
            'ko': "매그넘 포토스의 거장입니다. 1968년 '프라하의 봄'과 집시들의 삶을 기록했습니다. 강렬한 고독감, 서사적인 구도, 흑백 사진 특유의 시각적 충격을 선사합니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "25mm / 28mm (極廣角)",
                'zh-CN': "25mm / 28mm (极广角)",
                'en': "25mm / 28mm (Wide-angle)",
                'ja': "25mm / 28mm (超広角)",
                'ko': "25mm / 28mm (초광각)"
            },
            aperture: {
                'zh-TW': "小光圈 (深景深黑白)",
                'zh-CN': "小光圈 (深景深黑白)",
                'en': "Small aperture (Deep DoF)",
                'ja': "小絞り (深い被写界深度のモノクローム)",
                'ko': "작은 조리개 (깊은 심도의 흑백)"
            },
            composition: {
                'zh-TW': "張力極強的廣角透視、孤立的符號",
                'zh-CN': "张力极强的广角透视、孤立的符号",
                'en': "Tense wide perspective, isolated symbols",
                'ja': "広角による緊張感のあるパースペクティブ、孤独な象徴性",
                'ko': "긴장감 넘치는 광각 원근법, 고립된 상징물"
            }
        },
        website: "https://www.magnumphotos.com/photographer/josef-koudelka",
        initials: "JK"
    },
    {
        id: 34,
        name: {
            'zh-TW': "何藩",
            'zh-CN': "何藩",
            'en': "Fan Ho",
            'ja': "ファン・ホー",
            'ko': "호판 (하번)"
        },
        category: {
            'zh-TW': "人文紀實",
            'zh-CN': "人文紀實",
            'en': "Documentary",
            'ja': "ドキュメンタリー",
            'ko': "다큐멘터리"
        },
        style: {
            'zh-TW': "一代宗師，以黑白攝影捕捉 50-60 年代香港的老街風景。擅長運用極致的光影對比與煙霧營造出如電影般的戲劇氛圍。",
            'zh-CN': "一代宗师，以黑白摄影捕捉 50-60 年代香港的老街风景。擅长运用极致的光影对比与烟雾营造出如电影般的戏剧氛围。",
            'en': "Master of light and shadow, capturing 1950s-60s Hong Kong. Used extreme contrast and smoke to create cinematic, dramatic street scenes.",
            'ja': "1950〜60年代の香港を捉えたモノクロ写真の巨匠。極限までの明暗対比と煙、霧を使い、映画のようにドラマチックな景観を創り出しました。",
            'ko': "1950~60년대 홍콩의 거리를 흑백 사진으로 담아낸 거장입니다. 극적인 빛과 그림자의 대비, 안개 등을 활용해 영화 같은 분위기를 연출하는 데 탁월했습니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "Rolleiflex (中片幅)",
                'zh-CN': "Rolleiflex (中片幅)",
                'en': "Rolleiflex (Medium Format)",
                'ja': "ローライフレックス (中判カメラ)",
                'ko': "롤라이플렉스 (중형 포맷)"
            },
            aperture: {
                'zh-TW': "小光圈 (為了清晰的剪影)",
                'zh-CN': "小光圈 (为了清晰的剪影)",
                'en': "Small aperture (For sharp silhouettes)",
                'ja': "小絞り (鮮明なシルエットのため)",
                'ko': "작은 조리개 (선명한 실루엣을 위해)"
            },
            composition: {
                'zh-TW': "幾何陰影、背光、戲劇性留白",
                'zh-CN': "几何阴影、背光、戏剧性留白",
                'en': "Geometric shadows, Backlighting, Dramatic void",
                'ja': "幾何学的な影、逆光、ドラマチックな余白の活用",
                'ko': "기하학적 그림자, 역광, 드라마틱한 여백"
            }
        },
        website: "https://fanho-forgetmenot.com",
        initials: "FH"
    },
    {
        id: 35,
        name: {
            'zh-TW': "蓋里·維諾格蘭德",
            'zh-CN': "盖里·维诺格兰德",
            'en': "Garry Winogrand",
            'ja': "ギャリー・ウィノグランド",
            'ko': "개리 위노그랜드"
        },
        category: {
            'zh-TW': "人文紀實",
            'zh-CN': "人文纪实",
            'en': "Documentary",
            'ja': "ドキュメンタリー",
            'ko': "다큐멘터리"
        },
        style: {
            'zh-TW': "街頭攝影的多產大師。以隨性、傾斜且充滿能量的抓拍捕捉美國都市的動脈，認為攝影是為了看照片中的世界會是什麼樣子。",
            'zh-CN': "街头摄影的多产大师。以随性、倾斜且充满能量的抓拍捕捉美国都市的动脉，认为摄影是为了看照片中的世界会是什么样子。",
            'en': "Prolific street photographer. Captured urban energy with tilted, spontaneous snapshots, exploring how the world looks through a lens.",
            'ja': "極めて多作なストリート写真家。斜めに構えた不安定ながらエネルギッシュなスナップで、写された世界がどう見えるかを追求しました。",
            'ko': "엄청난 다작을 남긴 거리 사진의 거장입니다. 즉흥적이고 역동적인 스냅샷을 통해 렌즈 뒤의 세상이 어떻게 재구성되는지 탐구했습니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "28mm (快速抓拍)",
                'zh-CN': "28mm (快速抓拍)",
                'en': "28mm (Fast snapshots)",
                'ja': "28mm (広角による迅速なスナップ)",
                'ko': "28mm (빠른 스냅 촬영)"
            },
            aperture: {
                'zh-TW': "泛焦拍攝 (f/8 - f/11)",
                'zh-CN': "泛焦拍摄 (f/8 - f/11)",
                'en': "Zone focusing (f/8 - f/11)",
                'ja': "置きピン（パンフォーカス） (f/8 - f/11)",
                'ko': "팬 포커스 기법 (f/8 - f/11)"
            },
            composition: {
                'zh-TW': "傾斜構圖、混亂中的平衡、人物動態",
                'zh-CN': "倾斜构图、混乱中的平衡、人物动态",
                'en': "Dutch angle, Balance in chaos, Human motion",
                'ja': "ダッチアングル（傾き）、混沌の中のバランス、躍動する人波",
                'ko': "기울어진 구도, 혼란 속의 균형, 인물의 역동성"
            }
        },
        website: "https://www.fraenkelgallery.com/artists/garry-winogrand",
        initials: "GW"
    },
    {
        id: 36,
        name: {
            'zh-TW': "索爾·萊特",
            'zh-CN': "索尔·莱特",
            'en': "Saul Leiter",
            'ja': "ソール・ライター",
            'ko': "사울 레이터"
        },
        category: {
            'zh-TW': "人文紀實",
            'zh-CN': "人文纪实",
            'en': "Documentary",
            'ja': "ドキュメンタリー",
            'ko': "다큐멘터리"
        },
        style: {
            'zh-TW': "彩色攝影與抽象街頭攝影的先驅。他的作品帶有一種優雅的繪畫質感，常透過窗戶、倒影與遮擋物呈現詩意的紐約場景。",
            'zh-CN': "彩色摄影与抽象街头摄影的先锋。他的作品带有一种优雅的绘画質感，常透过窗户、倒影与遮挡物呈现诗意的纽约场景。",
            'en': "Pioneer of color street photography. Known for painterly qualities, using reflections, glass, and obscuring elements to create poetic NYC scenes.",
            'ja': "カラー写真と抽象的ストリート写真の先駆者。絵画のような質感を持ち、窓や反射、遮蔽物越しにニューヨークの詩的な断片を捉えました。",
            'ko': "컬러 거리 사진과 추상적 표현의 선구자입니다. 회화적인 질감과 창문, 반사광 등을 활용해 뉴욕의 일상을 시적인 풍경으로 재해석했습니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "150mm (長焦拍街頭)",
                'zh-CN': "150mm (长焦拍街头)",
                'en': "150mm (Telephoto on streets)",
                'ja': "150mm (ストリートでの望遠使用)",
                'ko': "150mm (거리에서의 망원 활용)"
            },
            aperture: {
                'zh-TW': "大光圈 (壓縮感與散景)",
                'zh-CN': "大光圈 (壓縮感与散景)",
                'en': "Wide aperture (Compression/Bokeh)",
                'ja': "開放絞り (圧縮効果とボケ味)",
                'ko': "큰 조리개 (압축 효과와 보케)"
            },
            composition: {
                'zh-TW': "極簡抽象、框中框、柔和色彩對比",
                'zh-CN': "极简抽象、框中框、柔和色彩对比",
                'en': "Minimalist abstraction, Frame-in-frame, Soft color contrast",
                'ja': "ミニマルな抽象表現、フレーム・イン・フレーム、柔らかな色彩美",
                'ko': "미니멀리즘 추상, 프레임 속 프레임, 부드러운 색채 대비"
            }
        },
        website: "https://www.saulleiterfoundation.org",
        initials: "SL"
    },
    {
        id: 37,
        name: {
            'zh-TW': "戈登·帕克斯",
            'zh-CN': "戈登·帕克斯",
            'en': "Gordon Parks",
            'ja': "ゴードン・パークス",
            'ko': "고든 파크스"
        },
        category: {
            'zh-TW': "人文紀實",
            'zh-CN': "人文紀實",
            'en': "Documentary",
            'ja': "ドキュメンタリー",
            'ko': "다큐멘터리"
        },
        style: {
            'zh-TW': "以攝影為武器對抗社會不公。他對美國非裔生活、民權運動與時尚界的紀錄具備深刻的尊嚴與力量。",
            'zh-CN': "以摄影为武器对抗社会不公。他对美国非裔生活、民权运动与时尚界的纪录具备深刻的尊严与力量。",
            'en': "Used photography as a weapon against injustice. Documented African American life, civil rights, and fashion with profound dignity.",
            'ja': "カメラを「武器」として社会的不正に立ち向かいました。アフリカ系アメリカ人の生活、公民権運動、そしてファッションを、深い尊厳を持って記録しました。",
            'ko': "사진을 무기로 삼아 사회적 불의에 맞섰습니다. 아프리카계 미국인들의 삶과 인권 운동, 패션 세계를 깊은 존엄성과 힘이 실린 시선으로 기록했습니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "35mm / 50mm",
                'zh-CN': "35mm / 50mm",
                'en': "35mm / 50mm",
                'ja': "35mm / 50mm",
                'ko': "35mm / 50mm"
            },
            aperture: {
                'zh-TW': "f/5.6 - f/8 (平衡細節與背景)",
                'zh-CN': "f/5.6 - f/8 (平衡细节与背景)",
                'en': "f/5.6 - f/8 (Balance detail/context)",
                'ja': "f/5.6 - f/8 (ディテールと背景の調和)",
                'ko': "f/5.6 - f/8 (디테일과 배경의 균형)"
            },
            composition: {
                'zh-TW': "人文視角、紀實人像、強烈的社會敘事",
                'zh-CN': "人文视角、纪实人像、强烈的社会叙事",
                'en': "Humanist gaze, Doc portraiture, Social narrative",
                'ja': "ヒューマニズムに満ちた眼差し、社会的なナラティブの強化",
                'ko': "인본주의적 시선, 다큐멘터리 인물화, 강렬한 사회적 서사"
            }
        },
        website: "https://www.gordonparksfoundation.org",
        initials: "GP"
    },
    {
        id: 38,
        name: {
            'zh-TW': "瑪麗·艾倫·馬克",
            'zh-CN': "玛丽·艾伦·马克",
            'en': "Mary Ellen Mark",
            'ja': "メアリー・エレン・マーク",
            'ko': "메리 엘렌 마크"
        },
        category: {
            'zh-TW': "人物肖像",
            'zh-CN': "人物肖像",
            'en': "Portrait",
            'ja': "ポートレート",
            'ko': "인물 초상"
        },
        style: {
            'zh-TW': "致力於拍攝社會弱勢與畸零人群。她的作品充滿強烈的同理心、人文深度與對人類心靈韌性的探索。",
            'zh-CN': "致力于拍摄社会弱势与畸零人群。她的作品充满强烈的同理心、人文深度与对人类心灵韧性的探索。",
            'en': "Dedicated to photographing underprivileged and marginalized groups with intense empathy and humanity.",
            'ja': "社会の底辺に生きる人々や疎外された人々にレンズを向け続けました。強い共感と思いやり、人間の精神的強さへの深い洞察が作品に刻まれています。",
            'ko': "사회의 소외된 이들과 소수자들의 삶을 주로 촬영했습니다. 강한 공감대와 인본주의적 깊이를 바탕으로 인간 정신의 회복력을 탐구했습니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "35mm (親近距離)",
                'zh-CN': "35mm (亲近距离)",
                'en': "35mm (Close range)",
                'ja': "35mm (親密な距離感での撮影)",
                'ko': "35mm (친밀한 근접 촬영)"
            },
            aperture: {
                'zh-TW': "f/4 - f/8",
                'zh-CN': "f/4 - f/8",
                'en': "f/4 - f/8",
                'ja': "f/4 - f/8",
                'ko': "f/4 - f/8"
            },
            composition: {
                'zh-TW': "親密的肖像構圖、細緻的光影運用",
                'zh-CN': "亲密的肖像构图、细致的光影运用",
                'en': "Intimate portrait framing, nuanced light",
                'ja': "被写体に迫るポートレート、繊細な光の扱い",
                'ko': "친밀한 초상 구도, 섬세한 빛의 활용"
            }
        },
        website: "https://www.maryellenmark.com",
        initials: "MEM"
    },
    {
        id: 39,
        name: {
            'zh-TW': "格雷格里·克魯德森",
            'zh-CN': "格雷格里·克鲁德森",
            'en': "Gregory Crewdson",
            'ja': "グレゴリー・クリュードソン",
            'ko': "그레고리 크루드슨"
        },
        category: {
            'zh-TW': "藝術觀念",
            'zh-CN': "藝術觀念",
            'en': "Conceptual",
            'ja': "コンセプチュアル",
            'ko': "관념 예술"
        },
        style: {
            'zh-TW': "當代大師，以如好萊塢電影般精緻佈置的靜止場景聞名。作品探討美國郊區生活的寂寞、不安與超現實氣息。",
            'zh-CN': "当代大师，以如好莱坞电影般精致布置的静止场景闻名。作品探讨美国郊区生活的寂寞、不安与超现实气息。",
            'en': "Contemporary master known for elaborate, film-set-like staged photos exploring loneliness and surrealism in suburban America.",
            'ja': "ハリウッド映画さながらの巨大なセットとライティングで知られる現代の巨匠。アメリカ郊外の家庭に潜む孤独、不安、そして超現実的な静寂を描きます。",
            'ko': "헐리우드 영화 세트장 같은 정교한 연출로 유명한 현대 사진의 거장입니다. 미국 교외 생활의 고독과 불안, 초현실적인 분위기를 탐구합니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "大畫幅相機 (極高解析度)",
                'zh-CN': "大画幅相机 (极高解析度)",
                'en': "Large Format (Extreme detail)",
                'ja': "大判カメラ (最高度の精細さ)",
                'ko': "대형 카메라 (초고해상도)"
            },
            aperture: {
                'zh-TW': "f/11 - f/16 (全場清晰)",
                'zh-CN': "f/11 - f/16 (全场清晰)",
                'en': "f/11 - f/16 (Total clarity)",
                'ja': "f/11 - f/16 (パンフォーカスによる精緻な描写)",
                'ko': "f/11 - f/16 (전체 선명도 확보)"
            },
            composition: {
                'zh-TW': "全景電影構圖、數百盞燈光精確補光",
                'zh-CN': "全景电影构图、数百盏灯光精确补光",
                'en': "Panoramic cinematic framing, hundreds of lights",
                'ja': "パノラミックな映画的構図、数百もの照明による精密なライティング",
                'ko': "파노라마 영화 구도, 수많은 조명을 활용한 정밀한 조광"
            }
        },
        website: "https://gagosian.com/artists/gregory-crewdson",
        initials: "GC"
    },
    {
        id: 40,
        name: {
            'zh-TW': "賴內克·迪克斯特拉",
            'zh-CN': "赖内克·迪克斯特拉",
            'en': "Rineke Dijkstra",
            'ja': "リネケ・ダイクストラ",
            'ko': "리네케 데이크스트라"
        },
        category: {
            'zh-TW': "人物肖像",
            'zh-CN': "人物肖像",
            'en': "Portrait",
            'ja': "ポートレート",
            'ko': "인물 초상"
        },
        style: {
            'zh-TW': "以大畫幅人像系列聞名。捕捉青少年、士兵或剛分娩的母親，展現出人在過渡期中的脆弱、真實與沈靜質感。",
            'zh-CN': "以大画幅人像系列闻名。捕捉青少年、士兵或刚分娩的母亲，展现出人在过渡期中的脆弱、真实与沈静質感。",
            'en': "Known for large-format portrait series of people in transitional states, capturing raw vulnerability and quiet intensity.",
            'ja': "大判カメラによるポートレートで知られ、思春期の若者や戦場帰りの兵士など、人生の過渡期にある人々が湛える生々しい脆さと誠実さを捉えます。",
            'ko': "대형 카메라를 사용한 인물 시리즈로 유명합니다. 청소년, 군인, 갓 해산한 어머니 등 인생의 과도기에 놓인 인물들의 취약성과 진실된 순간을 포착합니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "中倍率長焦 (大畫幅)",
                'zh-CN': "中倍率长焦 (大画幅)",
                'en': "Standard telephoto (Large Format)",
                'ja': "標準〜中望遠 (大判カメラ使用)",
                'ko': "표준 망원 (대형 카메라)"
            },
            aperture: {
                'zh-TW': "f/8 - f/11 (保留皮膚質感)",
                'zh-CN': "f/8 - f/11 (保留皮肤質感)",
                'en': "f/8 - f/11 (Skin texture focus)",
                'ja': "f/8 - f/11 (肌の質感を微細に描写)",
                'ko': "f/8 - f/11 (피부 질감 강조)"
            },
            composition: {
                'zh-TW': "正面全身/半身、自然背景、中性表情",
                'zh-CN': "正面全身/半身、自然背景、中性表情",
                'en': "Full-length/Bust, natural setting, neutral gaze",
                'ja': "正対した全身または上半身、ニュートラルな表情",
                'ko': "정면 전신/상반신 구도, 자연스러운 배경, 중립적 표정"
            }
        },
        website: "https://www.mariangoodman.com/artists/rineke-dijkstra",
        initials: "RD"
    },
    {
        id: 41,
        name: {
            'zh-TW': "南·戈丁",
            'zh-CN': "南·戈丁",
            'en': "Nan Goldin",
            'ja': "ナン・ゴールディン",
            'ko': "난 골딘"
        },
        category: {
            'zh-TW': "藝術觀念",
            'zh-CN': "藝術觀念",
            'en': "Conceptual",
            'ja': "コンセプチュアル",
            'ko': "관념 예술"
        },
        style: {
            'zh-TW': "其作品集《性依賴的敘事曲》是私攝影的輝煌傑作。以極其親密且不加修飾的視角紀錄了她的朋友、親人與次文化群體的真實生活。",
            'zh-CN': "其作品集《性依赖的叙事曲》是私摄影的辉煌杰作。以极其亲密且不加修饰的视角纪录了她的朋友、亲人与次文化群体的真实生活。",
            'en': "Her 'Ballad of Sexual Dependency' is a masterpiece of personal documentary, capturing intimate, raw life with unflinching honesty.",
            'ja': "写真集『性的依存のバラード』は私写真の金字塔です。友人や恋人、そしてサブカルチャーに生きる人々の剥き出しの生を、極めて親密かつ率直な視線で記録しました。",
            'ko': "그녀의 작품집 '성적 의존의 발라드'는 사사진(개인적 사진)의 걸작으로 꼽힙니다. 친구들, 가족, 하위문화 집단의 삶을 지극히 친밀하고 가감 없는 시선으로 기록했습니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "35mm (隨身紀錄)",
                'zh-CN': "35mm (随身纪录)",
                'en': "35mm (Snapshots)",
                'ja': "35mm (常に持ち歩くスナップショット)",
                'ko': "35mm (일상 스냅 촬영)"
            },
            aperture: {
                'zh-TW': "自然環境光/室內閃光燈",
                'zh-CN': "自然环境光/室内闪光灯",
                'en': "Available light / Indoor flash",
                'ja': "自然光および室内フラッシュ",
                'ko': "자연광 / 실내 플래시"
            },
            composition: {
                'zh-TW': "親密捕捉、充滿顆粒與真實色彩",
                'zh-CN': "亲密捕捉、充满颗粒与真实色彩",
                'en': "Intimate capture, grainy, authentic color",
                'ja': "親密な距離感、粒子感のある生々しい色彩",
                'ko': "친밀한 포착, 입자감이 느껴지는 사실적 색채"
            }
        },
        website: "https://www.matthewmarks.com/artists/nan-goldin",
        initials: "NG"
    },
    {
        id: 42,
        name: {
            'zh-TW': "比爾·坎寧安",
            'zh-CN': "比尔·坎宁安",
            'en': "Bill Cunningham",
            'ja': "ビル・カニンガム",
            'ko': "빌 커닝햄"
        },
        category: {
            'zh-TW': "人物肖像",
            'zh-CN': "人物肖像",
            'en': "Portrait",
            'ja': "ポートレート",
            'ko': "인물 초상"
        },
        style: {
            'zh-TW': "紐約街頭時尚攝影的靈魂人物。他以一種近乎學者式的熱情，在街頭捕捉普通人的穿搭美學，認為街道就是最好的伸展台。",
            'zh-CN': "纽约街头时尚摄影的灵魂人物。他以一种近乎学者式的热情，在街头捕捉普通人的穿搭美学，认为街道就是最好的伸展台。",
            'en': "An icon of NYC street fashion photography. Documented the style of everyday people with scholarly passion, seeing the street as a runway.",
            'ja': "ニューヨークのストリート・ファッションに魂を捧げた人物。学者のような情熱で街行く人々の着こなしを追い、道こそが最高のランウェイであると信じ続けました。",
            'ko': "뉴욕 거리 패션 사진의 상징적인 인물입니다. 학구적인 열정으로 거리 위 보통 사람들의 패션 미학을 포착했으며, 거리가 곧 최고의 런웨이라는 철학을 가졌습니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "35mm (快速抓拍)",
                'zh-CN': "35mm (快速抓拍)",
                'en': "35mm (Fast snapshots)",
                'ja': "35mm (迅速なスナップ撮影)",
                'ko': "35mm (빠른 스냅 촬영)"
            },
            aperture: {
                'zh-TW': "自動/泛焦",
                'zh-CN': "自动/泛焦",
                'en': "Auto/Zone focus",
                'ja': "オートまたはパンフォーカス",
                'ko': "자동 / 팬 포커스"
            },
            composition: {
                'zh-TW': "追隨主體、捕捉色彩與細節、真實感",
                'zh-CN': "追随主体、捕捉色彩与细节、真实感",
                'en': "Candid, capturing color details, real-life",
                'ja': "被写体を追う視線、鮮やかな色彩とディテールの記録",
                'ko': "피사체를 따라가는 시선, 색채와 디테일 포착, 생동감"
            }
        },
        website: "https://www.nytimes.com/video/bill-cunningham",
        initials: "BC"
    },
    {
        id: 43,
        name: {
            'zh-TW': "羅伯特·梅普爾索普",
            'zh-CN': "罗伯트·梅普尔索普",
            'en': "Robert Mapplethorpe",
            'ja': "ロバート・メイプルソープ",
            'ko': "로버트 메이플소프"
        },
        category: {
            'zh-TW': "人物肖像",
            'zh-CN': "人物肖像",
            'en': "Portrait",
            'ja': "ポートレート",
            'ko': "인물 초상"
        },
        style: {
            'zh-TW': "以雕塑般的黑白人體、花卉與名人肖像著稱。作品追求形式上的極致完美、光影的精確控制，常具備強烈的衝擊力。",
            'zh-CN': "以雕塑般的黑白人体、花卉与名人肖像著称。作品追求形式上的极致完美、光影的精确控制，常具备强烈的冲击力。",
            'en': "Famed for sculptural B&W nudes, flowers, and portraits. Pursued formal perfection and precise lighting with provocative power.",
            'ja': "彫刻のように完璧なモノクロの裸体、花々、そして著名人のポートレートで知られます。形式美の追求と精密なライティングによる、強烈な視覚的インパクトが特徴です。",
            'ko': "조각 같은 흑백 인체, 꽃, 유명인 초상화로 유명합니다. 형태적 완벽함과 정밀한 빛의 조절을 추구했으며, 종종 강렬한 시각적 충격을 선사합니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "Hasselblad (中片幅)",
                'zh-CN': "Hasselblad (中片幅)",
                'en': "Hasselblad (Medium Format)",
                'ja': "ハッセルブラッド (中判カメラ)",
                'ko': "핫셀블라드 (중형 포맷)"
            },
            aperture: {
                'zh-TW': "f/8 - f/16 (追求形體邊緣清晰)",
                'zh-CN': "f/8 - f/16 (追求形体边缘清晰)",
                'en': "f/8 - f/16 (Sharp contours)",
                'ja': "f/8 - f/16 (輪郭の鋭い描写)",
                'ko': "f/8 - f/16 (형태의 윤곽선 강조)"
            },
            composition: {
                'zh-TW': "中心構圖、古典雕塑感、極簡背景",
                'zh-CN': "中心构图、古典雕塑感、极简背景",
                'en': "Centered, sculptural, minimalist background",
                'ja': "センター構図、古典彫刻のような肉体美、ミニマルな背景",
                'ko': "중앙 구도, 고전적 조각미, 미니멀한 배경"
            }
        },
        website: "http://www.mapplethorpe.org",
        initials: "RM"
    },
    {
        id: 44,
        name: {
            'zh-TW': "莎莉·曼恩",
            'zh-CN': "莎莉·曼恩",
            'en': "Sally Mann",
            'ja': "サリー・マン",
            'ko': "샐리 맨"
        },
        category: {
            'zh-TW': "人物肖像",
            'zh-CN': "人物肖像",
            'en': "Portrait",
            'ja': "ポートレート",
            'ko': "인물 초상"
        },
        style: {
            'zh-TW': "代表作《親密家庭 (Immediate Family)》，以濕版攝影等古典工藝拍攝她的孩子。作品帶有一種原始、神秘且略顯憂鬱的南方氛圍。",
            'zh-CN': "代表作《亲密家庭 (Immediate Family)》，以湿版摄影等古典工艺拍摄她的孩子。作品带有一种原始、神秘且略显忧郁的南方氛围。",
            'en': "Known for using large-format and wet plate processes to capture children and Southern landscapes with haunting, raw beauty.",
            'ja': "写真集『Immediate Family』において、湿板写真などの古典的な技法で自身の子供たちを撮影しました。アメリカ南部の原始的で神秘的、どこか憂鬱な空気感を漂わせます。",
            'ko': "대표작 '친밀한 가족(Immediate Family)'에서 습판 사진과 같은 고전적 공법으로 자녀들을 촬영했습니다. 원시적이고 신비로우며 우울한 미국 남부의 분위기를 담아냈습니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "8x10 大畫幅 (火棉膠濕版)",
                'zh-CN': "8x10 大画幅 (火棉胶湿版)",
                'en': "8x10 Wet Plate Collodion",
                'ja': "8x10 大判カメラ (コロジオン湿板法)",
                'ko': "8x10 대형 카메라 (습판 사진술)"
            },
            aperture: {
                'zh-TW': "大光圈 (配合淺景深質感)",
                'zh-CN': "大光圈 (配合浅景深質感)",
                'en': "Wide aperture (Evocative blur)",
                'ja': "開放気味の絞り (幻想的なボケ味の追求)",
                'ko': "큰 조리개 (얕은 심도를 활용한 정서적 표현)"
            },
            composition: {
                'zh-TW': "自然主義、充滿瑕疵之美、神秘感",
                'zh-CN': "自然主义、充满瑕疵之美、神秘感",
                'en': "Naturalism, beauty in imperfection, mystery",
                'ja': "ナチュラル主義、不完全さの美、神秘性",
                'ko': "자연주의, 불완전함의 미학, 신비주의"
            }
        },
        website: "https://www.sallymann.com",
        initials: "SM"
    },
    {
        id: 45,
        name: {
            'zh-TW': "艾德華·韋斯頓",
            'zh-CN': "艾德华·韦斯顿",
            'en': "Edward Weston",
            'ja': "エドワード・ウェストン",
            'ko': "에드워드 웨스턴"
        },
        category: {
            'zh-TW': "大地景觀",
            'zh-CN': "大地景观",
            'en': "Landscape",
            'ja': "風景写真",
            'ko': "풍경 사진"
        },
        style: {
            'zh-TW': "f/64 群組的核心成員。他讓日常物體（如青椒、貝殼）呈現出抽象的形體美與質感細節，重新定義了攝影的視覺語言。",
            'zh-CN': "f/64 群组的核心成员。他让日常物体（如青椒、贝壳）呈现出抽象的形体美与質感细节，重新定义了摄影的视觉语言。",
            'en': "Core member of f/64 group. Transformed ordinary things into abstract forms of beauty, redefining photographic visual language.",
            'ja': "グループ f/64 の中心メンバー。ピーマンや貝殻といった日常的な被写体を、抽象的な形体美と微細なディテールで捉え、写真独自の視覚言語を確立しました。",
            'ko': "f/64 그룹의 핵심 멤버입니다. 피망, 조개껍데기 같은 일상의 정물들을 추상적인 형태미와 질감으로 표현하여 사진의 시각 언어를 새롭게 정의했습니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "8x10 大畫幅",
                'zh-CN': "8x10 大画幅",
                'en': "8x10 Large Format",
                'ja': "8x10 大判カメラ",
                'ko': "8x10 대형 카메라"
            },
            aperture: {
                'zh-TW': "f/64 (追求最大廣域清晰區)",
                'zh-CN': "f/64 (追求最大广域清晰区)",
                'en': "f/64 (Maximum sharpness throughout)",
                'ja': "f/64 (隅々まで極限に高められた解像度)",
                'ko': "f/64 (전체의 최대 해상도 확보)"
            },
            composition: {
                'zh-TW': "極端的細節捕捉、形體的抽象化",
                'zh-CN': "极端的细节捕捉、形体的抽象化",
                'en': "Extreme detail, abstraction of form",
                'ja': "徹底した細部の描写、フォルムの抽象化",
                'ko': "극한의 세부 묘사, 형태의 추상화"
            }
        },
        website: "https://www.edward-weston.com",
        initials: "EW"
    },
    {
        id: 46,
        name: {
            'zh-TW': "多蘿西亞·蘭格",
            'zh-CN': "多萝西娅·兰格",
            'en': "Dorothea Lange",
            'ja': "ドロシア・ラング",
            'ko': "도로시아 랭"
        },
        category: {
            'zh-TW': "人文紀實",
            'zh-CN': "人文纪实",
            'en': "Documentary",
            'ja': "ドキュメンタリー",
            'ko': "다큐멘터리"
        },
        style: {
            'zh-TW': "大蕭條時期的紀錄者。代表作《移民媽媽》，以深刻的同情心紀錄了美國農民的苦難與人類尊嚴。",
            'zh-CN': "大萧条时期的纪录者。代表作《移民妈妈》，以深刻的同情心纪录了美国农民的苦难与人类尊严。",
            'en': "Chronicler of the Great Depression. 'Migrant Mother' captures the struggle and dignity of American rural life with deep compassion.",
            'ja': "大恐慌時代のアメリカを記録した写真家。代表作『移民の母』のように、農民たちの苦境と、その中で失われない人間の尊厳を深い慈愛を持って描き出しました。",
            'ko': "미국 대공황 시대를 기록한 사진가입니다. 대표작 '이주민 어머니'를 통해 미국 농민들의 고통과 인간적 존엄성을 깊은 공감의 시선으로 담아냈습니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "Graflex 大畫幅相機",
                'zh-CN': "Graflex 大画幅相机",
                'en': "Graflex Large Format",
                'ja': "グラフレックス (大判カメラ)",
                'ko': "그래플렉스 대형 카메라"
            },
            aperture: {
                'zh-TW': "f/8 - f/11",
                'zh-CN': "f/8 - f/11",
                'en': "f/8 - f/11",
                'ja': "f/8 - f/11",
                'ko': "f/8 - f/11"
            },
            composition: {
                'zh-TW': "人文特寫、敘事性的環境紀錄",
                'zh-CN': "人文特写、叙事性的环境纪录",
                'en': "Humanist close-up, narrative documentary",
                'ja': "人間に迫る特写、物語性のある環境の記録",
                'ko': "인본주의적 클로즈업, 서사적인 환경 기록"
            }
        },
        website: "https://www.moma.org/artists/3373",
        initials: "DL"
    },
    {
        id: 47,
        name: {
            'zh-TW': "沃克·埃文斯",
            'zh-CN': "沃克·埃文斯",
            'en': "Walker Evans",
            'ja': "ウォーカー・エバンス",
            'ko': "워커 에반스"
        },
        category: {
            'zh-TW': "紀實攝影",
            'zh-CN': "纪实摄影",
            'en': "Documentary",
            'ja': "ドキュメンタリー",
            'ko': "다큐멘터리"
        },
        style: {
            'zh-TW': "以冷靜、客觀且具備層次感的影像風格紀錄了 1930 年代的美國村莊。他認為攝影應該是「紀實風格」的純粹寫真。",
            'zh-CN': "以冷静、客观且具备层次感的影像风格纪录了 1930 年代的美国村庄。他认为摄影应该是“纪实风格”的纯粹写真。",
            'en': "Recorded 1930s America with calm, objective clarity. Believed photography should be a pure 'documentary style'.",
            'ja': "1930年代のアメリカの田舎町を、冷徹かつ客観的なスタイルで記録しました。写真とは飾りのない「ドキュメンタリー・スタイル」であるべきだと主張しました。",
            'ko': "1930년대 미국의 마을 풍경을 냉정하고 객관적인 스타일로 기록했습니다. 사진은 '다큐멘터리 스타일'의 순수한 기록이어야 한다고 믿었습니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "8x10 大畫幅",
                'zh-CN': "8x10 大画幅",
                'en': "8x10 Large Format",
                'ja': "8x10 大判カメラ",
                'ko': "8x10 대형 카메라"
            },
            aperture: {
                'zh-TW': "f/32 (細節豐富)",
                'zh-CN': "f/32 (细节丰富)",
                'en': "f/32 (Full detail)",
                'ja': "f/32 (豊かなディテールの確保)",
                'ko': "f/32 (풍부한 디테일)"
            },
            composition: {
                'zh-TW': "建築對稱美、正面紀錄、平凡生活",
                'zh-CN': "建筑对称美、正面纪录、平凡生活",
                'en': "Architectural symmetry, head-on, ordinary life",
                'ja': "建築的な対称性、真正面からの記録、平凡な日常",
                'ko': "건축적 대칭미, 정면 기록, 평범한 삶의 포착"
            }
        },
        website: "https://www.metmuseum.org/toah/hd/evan/hd_evan.htm",
        initials: "WE"
    },
    {
        id: 48,
        name: {
            'zh-TW': "東松照明",
            'zh-CN': "东松照明",
            'en': "Shomei Tomatsu",
            'ja': "東松照明",
            'ko': "토마츠 쇼메이"
        },
        category: {
            'zh-TW': "人文紀實",
            'zh-CN': "人文紀實",
            'en': "Documentary",
            'ja': "ドキュメンタリー",
            'ko': "다큐멘터리"
        },
        style: {
            'zh-TW': "日本戰後最具影響力的攝影師之一。透過影像探討戰後日本的社會變革、美軍佔領與當代文明的衝突，風格強烈且多變。",
            'zh-CN': "日本战后最具影响力的摄影师之一。透过影像探讨战后日本的社会变革、美军占领与当代文明的冲突，风格强烈且多变。",
            'en': "Influential Japanese post-war photographer exploring social change, US occupation, and the clash of civilizations with intense style.",
            'ja': "戦後日本を代表する写真家。米軍占領下の日本や長崎の被爆者など、社会の劇的な変化と文明の衝突を、多化的かつ前衛的なスタイルで描き出しました。",
            'ko': "전후 일본의 가장 영향력 있는 사진가 중 한 명입니다. 전후 일본의 사회적 변혁, 미군 점령, 현대 문명의 충돌을 강렬하고 다변화된 스타일로 탐구했습니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "35mm (Leica)",
                'zh-CN': "35mm (Leica)",
                'en': "35mm (Leica)",
                'ja': "35mm (ライカ)",
                'ko': "35mm (라이카)"
            },
            aperture: {
                'zh-TW': "高對比黑白",
                'zh-CN': "高对比黑白",
                'en': "High-contrast B&W",
                'ja': "ハイコントラストなモノクローム",
                'ko': "고대비 흑백"
            },
            composition: {
                'zh-TW': "隱喻性構圖、碎片化的視覺",
                'zh-CN': "隐喻性构图、碎片化的视觉",
                'en': "Metaphorical, fragmented visual style",
                'ja': "暗喩的な構成、断片化された視覚表現",
                'ko': "은유적인 구도, 파편화된 시각적 스타일"
            }
        },
        website: "https://www.sfmoma.org/artist/Shomei_Tomatsu",
        initials: "ST"
    },
    {
        id: 49,
        name: {
            'zh-TW': "石內都",
            'zh-CN': "石内都",
            'en': "Ishiuchi Miyako",
            'ja': "石内都",
            'ko': "이시우치 미야코"
        },
        category: {
            'zh-TW': "藝術觀念",
            'zh-CN': "藝術觀念",
            'en': "Conceptual",
            'ja': "コンセプチュアル",
            'ko': "관념 예술"
        },
        style: {
            'zh-TW': "以探討身體、時間與物件中的記憶著稱。代表作《廣島》紀錄了原爆遺物，透過極其細膩精緻的影像賦予舊物新的生命力。",
            'zh-CN': "以探讨身体、时间与物件中的记忆著称。代表作《广岛》纪录了原爆遗物，透过极其细腻精致的影像赋予旧物新的生命力。",
            'en': "Explores memory in body, time, and objects. Her Hiroshima project documents atomic bomb relics with delicate, vivid detail.",
            'ja': "身体、時間、そして遺された物に宿る「記憶」をテーマに活動。代表作『ひろしま』では、被爆者の遺品を光を孕んだ緻密な映像で捉え、新たな生命を吹き込みました。",
            'ko': "신체, 시간, 사물에 깃든 기억을 탐구하는 것으로 유명합니다. 대표작 '히로시마'에서 원폭 유물들을 섬세하고 선명하게 기록하여 낡은 물건들에 새로운 생명력을 부여했습니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "35mm / 微距",
                'zh-CN': "35mm / 微距",
                'en': "35mm / Macro",
                'ja': "35mm / マクロ",
                'ko': "35mm / 매크로"
            },
            aperture: {
                'zh-TW': "大光圈 (營造氛圍)",
                'zh-CN': "大光圈 (营造氛围)",
                'en': "Wide aperture (Atmospheric)",
                'ja': "開放絞り (情緒的な空気感の醸成)",
                'ko': "큰 조리개 (분위기 조성)"
            },
            composition: {
                'zh-TW': "特寫細節、通透的光感",
                'zh-CN': "特写细节、通透的光感",
                'en': "Macro detail, luminous lighting",
                'ja': "ディテールの特写、透明感のある光の質感",
                'ko': "세밀한 클로즈업, 투명한 빛의 표현"
            }
        },
        website: "https://www.takaishiigallery.com/en/archives/4405",
        initials: "IM"
    },
    {
        id: 50,
        name: {
            'zh-TW': "尼克·奈特",
            'zh-CN': "尼克·奈特",
            'en': "Nick Knight",
            'ja': "ニック・ナイト",
            'ko': "닉 나이트"
        },
        category: {
            'zh-TW': "人物肖像",
            'zh-CN': "人物肖像",
            'en': "Portrait",
            'ja': "ポートレート",
            'ko': "인물 초상"
        },
        style: {
            'zh-TW': "時尚攝影界的實驗者。他不斷挑戰界限，結合最新科技（如 3D 掃描、數位後期處理）與卓越的佈光，創造出極具未來感的視覺體驗。",
            'zh-CN': "时尚摄影界的实验者。他不断挑战界限，结合最新科技（如 3D 扫描、数字后期处理）与卓越的佈光，创造出极具未来感的视觉体验。",
            'en': "A visionary experimentalist in fashion photography. Combines technology with exquisite lighting for futuristic visual experiences.",
            'ja': "ファッション写真界における真の実験者。3Dスキャンやデジタル処理などの最新テクノロジーと卓越した照明技術を融合させ、未来的な視覚体験を提示し続けています。",
            'ko': "패션 사진계의 실험적인 혁신가입니다. 3D 스캔, 디지털 리터칭 등 최신 기술과 탁월한 조명 연출을 결합하여 미래지향적인 시각적 경험을 창조합니다."
        },
        tech: {
            focalLength: {
                'zh-TW': "多變 (常用廣角透視)",
                'zh-CN': "多變 (常用广角透视)",
                'en': "Variable (Wide perspective focus)",
                'ja': "多様 (広角によるダイナミックな視点の活用)",
                'ko': "다양함 (광각 원근법 주로 활용)"
            },
            aperture: {
                'zh-TW': "極大對比度或豐富層次",
                'zh-CN': "极大对比度或丰富层次",
                'en': "High contrast or rich gradation",
                'ja': "極端なコントラスト、あるいは緻密なグラデーション",
                'ko': "극적인 대비 또는 풍부한 계조"
            },
            composition: {
                'zh-TW': "動態感十足、打破常規構圖、數位拼貼",
                'zh-CN': "动态感十足、打破常规构图、数字拼贴",
                'en': "Dynamic, unconventional, digital collage",
                'ja': "ダイナミックな動き、既成概念を破る構図、デジタルコラージュ",
                'ko': "역동적인 움직임, 관습을 탈피한 구도, 디지털 콜라주"
            }
        },
        website: "https://www.showstudio.com",
        initials: "NK"
    }
];

export default photographersData;
