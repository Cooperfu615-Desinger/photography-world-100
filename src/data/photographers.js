/**
 * 世界百大攝影師資料庫
 * 
 * 資料格式說明：
 * - id: 唯一識別碼（數字）
 * - name: 攝影師姓名（中英文物件）
 * - category: 攝影類別（中英文物件）
 * - style: 風格描述（中英文物件，詳細說明攝影師的特色與貢獻）
 * - tech: 技術特色物件
 *   - focalLength: 常用焦段（中英文物件）
 *   - aperture: 光圈習慣（中英文物件）
 *   - composition: 構圖特色（中英文物件）
 * - website: 官方網站 URL
 * - initials: 姓名縮寫（用於 UI 顯示）
 * 
 * 新增攝影師步驟：
 * 1. 複製下方任一攝影師物件作為範本
 * 2. 修改 id（確保不重複，使用下一個數字）
 * 3. 填寫完整的中英文資料
 * 4. 確認 website 連結有效
 * 5. initials 通常使用名字的首字母縮寫
 */

const photographersData = [
    // --- 初始名單 (1-5) ---
    {
        id: 1,
        name: { zh: "安塞爾·亞當斯", en: "Ansel Adams" },
        category: { zh: "風景攝影", en: "Landscape" },
        style: {
            zh: "以黑白風景攝影聞名，注重高對比度與極致的細節清晰度。他是「分區曝光法 (Zone System)」的創始人。",
            en: "Renowned for black-and-white landscape photography, emphasizing high contrast and extreme clarity. Creator of the 'Zone System'."
        },
        tech: {
            focalLength: { zh: "大畫幅相機 (廣角至長焦)", en: "Large Format (Wide to Telephoto)" },
            aperture: { zh: "f/64 (極小光圈以獲得最大景深)", en: "f/64 (Small aperture for max depth of field)" },
            composition: { zh: "宏大敘事、精準的光影分區", en: "Grand narrative, precise light zoning" }
        },
        website: "https://www.anseladams.com",
        initials: "AA"
    },
    {
        id: 2,
        name: { zh: "亨利·卡蒂埃-布列松", en: "Henri Cartier-Bresson" },
        category: { zh: "街頭/紀實", en: "Street/Documentary" },
        style: {
            zh: "現代新聞攝影之父，「決定性瞬間 (The Decisive Moment)」理論的提出者。擅長捕捉幾何構圖與人性瞬間的完美結合。",
            en: "Father of modern photojournalism, coined 'The Decisive Moment'. Master of combining geometry with human moments."
        },
        tech: {
            focalLength: { zh: "50mm (人眼視角)", en: "50mm (Standard View)" },
            aperture: { zh: "f/8 - f/11 (確保街頭抓拍清晰)", en: "f/8 - f/11 (For street clarity)" },
            composition: { zh: "黃金螺旋、幾何引導線", en: "Golden spiral, geometric leading lines" }
        },
        website: "https://www.henricartierbresson.org",
        initials: "HB"
    },
    {
        id: 3,
        name: { zh: "安妮·萊柏維茲", en: "Annie Leibovitz" },
        category: { zh: "人像攝影", en: "Portrait" },
        style: {
            zh: "以戲劇性的佈光和鮮豔的色彩聞名，常為名人拍攝具有強烈敘事感的肖像。",
            en: "Known for dramatic lighting and bold colors, creating narrative-driven portraits of celebrities."
        },
        tech: {
            focalLength: { zh: "35mm, 50mm, 85mm", en: "35mm, 50mm, 85mm" },
            aperture: { zh: "f/2.8 - f/4 (突出主體)", en: "f/2.8 - f/4 (Subject isolation)" },
            composition: { zh: "環境人像、油畫質感", en: "Environmental portraiture, painterly texture" }
        },
        website: "https://www.instagram.com/annieleibovitz",
        initials: "AL"
    },
    {
        id: 4,
        name: { zh: "史蒂夫·麥柯里", en: "Steve McCurry" },
        category: { zh: "人文/旅遊", en: "Travel/Humanist" },
        style: {
            zh: "以鮮豔的色彩和深情的眼神捕捉聞名，代表作《阿富汗女孩》。擅長運用互補色。",
            en: "Famous for vivid colors and capturing soulful eyes, notably 'Afghan Girl'. Master of complementary colors."
        },
        tech: {
            focalLength: { zh: "24-70mm 變焦鏡", en: "24-70mm Zoom" },
            aperture: { zh: "開放光圈至 f/5.6", en: "Wide open to f/5.6" },
            composition: { zh: "中心構圖、色彩對比", en: "Center composition, color contrast" }
        },
        website: "https://stevemccurry.com",
        initials: "SM"
    },
    {
        id: 5,
        name: { zh: "杉本博司", en: "Hiroshi Sugimoto" },
        category: { zh: "觀念/藝術", en: "Conceptual/Fine Art" },
        style: {
            zh: "極簡主義大師，探索時間與記憶。代表作《海景》系列展示了極致的平靜與長曝光技巧。",
            en: "Minimalist master exploring time and memory. 'Seascapes' series showcases extreme calm and long exposure."
        },
        tech: {
            focalLength: { zh: "大畫幅相機", en: "Large Format" },
            aperture: { zh: "f/22+ (極長曝光)", en: "f/22+ (Extreme long exposure)" },
            composition: { zh: "極簡、水平線對分", en: "Minimalism, horizon bisection" }
        },
        website: "https://www.sugimotohiroshi.com",
        initials: "HS"
    },
    // --- 日本攝影師 (6-10) ---
    {
        id: 6,
        name: { zh: "森山大道", en: "Daido Moriyama" },
        category: { zh: "街頭/抓拍", en: "Street/Snapshot" },
        style: {
            zh: "以「粗顆粒、模糊、失焦 (Are-Bure-Bokeh)」風格聞名。遊蕩於新宿街頭，捕捉都市的慾望與混亂。",
            en: "Known for 'Are-Bure-Bokeh' (grainy, blurry, out-of-focus) style. Wanders Shinjuku capturing urban desire and chaos."
        },
        tech: {
            focalLength: { zh: "21mm/28mm (Ricoh GR)", en: "21mm/28mm (Ricoh GR)" },
            aperture: { zh: "自動/小光圈 (泛焦抓拍)", en: "Auto/Small Aperture (Zone Focus)" },
            composition: { zh: "傾斜構圖、高反差黑白", en: "Dutch angle, High contrast B&W" }
        },
        website: "https://www.moriyamadaido.com",
        initials: "DM"
    },
    {
        id: 7,
        name: { zh: "川內倫子", en: "Rinko Kawauchi" },
        category: { zh: "當代藝術/日常", en: "Contemporary Art/Daily Life" },
        style: {
            zh: "擅長捕捉日常生活中微小的光影與生命力，照片具有空氣感與透明感，常使用 6x6 正方形構圖。",
            en: "Captures the luminosity and fragility of daily life. Known for airy, transparent style and 6x6 square format."
        },
        tech: {
            focalLength: { zh: "Rolleiflex 雙眼相機 (標準鏡)", en: "Rolleiflex TLR (Standard)" },
            aperture: { zh: "大光圈 (柔和散景)", en: "Wide aperture (Soft bokeh)" },
            composition: { zh: "正方形構圖、留白", en: "Square format, Negative space" }
        },
        website: "http://rinkokawauchi.com",
        initials: "RK"
    },
    {
        id: 8,
        name: { zh: "植田正治", en: "Shoji Ueda" },
        category: { zh: "超現實主義", en: "Surrealism" },
        style: {
            zh: "以鳥取沙丘為舞台，將家人像棋子般擺拍，創造出獨特的「植田調 (Ueda-cho)」，充滿超現實與幽默感。",
            en: "Staged his family like chess pieces on Tottori Sand Dunes. Created the unique 'Ueda-cho' style, full of surrealism and humor."
        },
        tech: {
            focalLength: { zh: "中片幅/標準鏡頭", en: "Medium Format/Standard" },
            aperture: { zh: "f/8 - f/16 (深景深)", en: "f/8 - f/16 (Deep depth of field)" },
            composition: { zh: "舞台式構圖、剪影", en: "Stage-like composition, Silhouettes" }
        },
        website: "https://www.shojiueda.com",
        initials: "SU"
    },
    {
        id: 9,
        name: { zh: "蜷川實花", en: "Mika Ninagawa" },
        category: { zh: "時尚/藝術", en: "Fashion/Art" },
        style: {
            zh: "極度飽和、鮮豔的色彩，以金魚、花卉為標誌性主題。風格華麗迷幻，跨足電影與時尚界。",
            en: "Extremely saturated, vivid colors featuring goldfish and flowers. Glamorous and psychedelic style bridging film and fashion."
        },
        tech: {
            focalLength: { zh: "微距鏡頭/廣角", en: "Macro lens/Wide angle" },
            aperture: { zh: "多變 (依主題而定)", en: "Variable" },
            composition: { zh: "填滿畫面的色彩", en: "Frame-filling color" }
        },
        website: "https://mikaninagawa.com",
        initials: "MN"
    },
    {
        id: 10,
        name: { zh: "荒木經惟", en: "Nobuyoshi Araki" },
        category: { zh: "私攝影", en: "I-Photography" },
        style: {
            zh: "多產且具爭議，探討「生與死 (Eros & Thanatos)」。代表作《感傷之旅》紀錄了妻子的蜜月與離世。",
            en: "Prolific and controversial, exploring 'Eros & Thanatos'. 'Sentimental Journey' documents his wife's honeymoon and passing."
        },
        tech: {
            focalLength: { zh: "Pentax 6x7 / 隨身機", en: "Pentax 6x7 / Point & Shoot" },
            aperture: { zh: "善用閃光燈直打", en: "Direct Flash" },
            composition: { zh: "隨性、直覺式", en: "Casual, Intuitive" }
        },
        website: "http://www.arakinobuyoshi.com",
        initials: "NA"
    },
    // --- 韓國攝影師 (11-15) ---
    {
        id: 11,
        name: { zh: "裴炳雨", en: "Bae Bien-u" },
        category: { zh: "風景攝影", en: "Landscape" },
        style: {
            zh: "以拍攝韓國松樹聞名。作品具有水墨畫般的意境，展現出樹木的靈性與自然的神聖感。",
            en: "Famous for photographing pine trees. His works evoke ink-wash paintings, revealing the spirituality of nature."
        },
        tech: {
            focalLength: { zh: "全景相機 (6x12)", en: "Panoramic Camera (6x12)" },
            aperture: { zh: "小光圈 (長曝光)", en: "Small aperture (Long exposure)" },
            composition: { zh: "全景寬幅、線條韻律", en: "Panoramic format, Rhythmic lines" }
        },
        website: "http://www.baebienu.com",
        initials: "BB"
    },
    {
        id: 12,
        name: { zh: "具本昌", en: "Koo Bohnchang" },
        category: { zh: "純藝術", en: "Fine Art" },
        style: {
            zh: "以拍攝朝鮮白瓷聞名，作品色調極淡，捕捉物體隨時間流逝的脆弱感與本質。",
            en: "Renowned for photographing Joseon white porcelain. Pale tones capturing the fragility and essence of objects over time."
        },
        tech: {
            focalLength: { zh: "大畫幅相機", en: "Large Format" },
            aperture: { zh: "柔焦、淺景深", en: "Soft focus, Shallow DoF" },
            composition: { zh: "中心構圖、留白", en: "Center composition, Void" }
        },
        website: "http://www.bckoo.com",
        initials: "KB"
    },
    {
        id: 13,
        name: { zh: "金雅他", en: "Atta Kim" },
        category: { zh: "觀念攝影", en: "Conceptual" },
        style: {
            zh: "代表作《ON-AIR》系列，透過長時間曝光（數小時至數天）讓移動的人群消失，探討存在與虛無。",
            en: "Known for 'ON-AIR' project. Uses long exposures (hours to days) to make moving crowds disappear, exploring existence."
        },
        tech: {
            focalLength: { zh: "8x10 大畫幅", en: "8x10 Large Format" },
            aperture: { zh: "極小光圈 + 減光鏡", en: "Tiny aperture + ND Filters" },
            composition: { zh: "靜止場景與時間流動", en: "Static scene vs Time flow" }
        },
        website: "http://www.attakim.com",
        initials: "AK"
    },
    {
        id: 14,
        name: { zh: "韓榮洙", en: "Han Youngsoo" },
        category: { zh: "紀實/街頭", en: "Documentary/Street" },
        style: {
            zh: "韓戰後韓國社會的紀錄者。不同於戰後的悲情，他捕捉了首爾重建時期的時尚與生機，構圖現代。",
            en: "Chronicler of post-war Korea. Captured the fashion and vitality of Seoul's reconstruction with modern composition."
        },
        tech: {
            focalLength: { zh: "50mm (Leica)", en: "50mm (Leica)" },
            aperture: { zh: "f/5.6 - f/8", en: "f/5.6 - f/8" },
            composition: { zh: "高角度俯拍、光影幾何", en: "High angle, Light & Shadow geometry" }
        },
        website: "http://www.hanyoungsoo.kr",
        initials: "HY"
    },
    {
        id: 15,
        name: { zh: "李正鎮", en: "Jungjin Lee" },
        category: { zh: "風景/材質", en: "Landscape/Texture" },
        style: {
            zh: "將感光乳劑塗在韓紙（桑皮紙）上進行列印，結合攝影與繪畫質感，作品充滿荒涼與詩意。",
            en: "Prints on handmade mulberry paper with liquid emulsion. Blends photography with painterly texture, desolate and poetic."
        },
        tech: {
            focalLength: { zh: "全景相機", en: "Panoramic Camera" },
            aperture: { zh: "強調紋理", en: "Texture emphasis" },
            composition: { zh: "材質優先、風景肖像", en: "Texture first, Landscape portrait" }
        },
        website: "https://www.jungjinlee.com",
        initials: "JL"
    },
    // --- 人像大師 (16-20) ---
    {
        id: 16,
        name: { zh: "理查·阿維頓", en: "Richard Avedon" },
        category: { zh: "人像/時尚", en: "Portrait/Fashion" },
        style: {
            zh: "以全白背景和極簡風格聞名，剝離環境干擾，強迫觀者直視被攝者的靈魂、情緒與歲月痕跡。",
            en: "Famous for minimalist portraits against a stark white background, stripping away context to reveal the subject's soul and emotion."
        },
        tech: {
            focalLength: { zh: "8x10 大畫幅 / 360mm", en: "8x10 Large Format / 360mm" },
            aperture: { zh: "f/16 - f/64 (極致銳利)", en: "f/16 - f/64 (Extreme sharpness)" },
            composition: { zh: "充滿張力的肢體、裁切邊緣", en: "Dynamic poses, Cropped edges" }
        },
        website: "https://www.avedonfoundation.org",
        initials: "RA"
    },
    {
        id: 17,
        name: { zh: "尤瑟夫·卡希", en: "Yousuf Karsh" },
        category: { zh: "經典肖像", en: "Classic Portrait" },
        style: {
            zh: "20世紀最偉大的肖像大師之一。擅長運用戲劇性的燈光（Karsh Light）凸顯人物的偉大、力量與手部細節。",
            en: "Master of 20th-century portraiture. Used dramatic lighting ('Karsh Light') to emphasize greatness, power, and hand details."
        },
        tech: {
            focalLength: { zh: "8x10 大畫幅 (Kodak Ektar)", en: "8x10 Large Format" },
            aperture: { zh: "縮光圈 (強調質感)", en: "Stopped down (Texture emphasis)" },
            composition: { zh: "重點光、輪廓光、手部姿態", en: "Key light, Rim light, Hands" }
        },
        website: "https://karsh.org",
        initials: "YK"
    },
    {
        id: 18,
        name: { zh: "彼得·林德伯格", en: "Peter Lindbergh" },
        category: { zh: "時尚/寫實", en: "Fashion/Realism" },
        style: {
            zh: "反對過度修圖，強調女性自然真實的美感與力量。作品帶有強烈的電影敘事感與深邃的黑白影調。",
            en: "Rejected excessive retouching, championing natural beauty. Known for cinematic narrative and deep black-and-white tones."
        },
        tech: {
            focalLength: { zh: "50mm / 85mm", en: "50mm / 85mm" },
            aperture: { zh: "大光圈 (自然光/持續光)", en: "Wide aperture (Natural/Continuous light)" },
            composition: { zh: "不看鏡頭、動態捕捉", en: "Looking away, Motion capture" }
        },
        website: "http://www.peterlindbergh.com",
        initials: "PL"
    },
    {
        id: 19,
        name: { zh: "歐文·佩恩", en: "Irving Penn" },
        category: { zh: "時尚/靜物", en: "Fashion/Still Life" },
        style: {
            zh: "以優雅、冷靜且嚴謹的視角著稱。常將人物置於狹窄的角落（Corner Portraits）拍攝，創造獨特的心理張力。",
            en: "Known for elegance and cool detachment. Famous for 'Corner Portraits', trapping subjects to create psychological tension."
        },
        tech: {
            focalLength: { zh: "Rolleiflex / 大畫幅", en: "Rolleiflex / Large Format" },
            aperture: { zh: "小光圈 (清晰銳利)", en: "Small aperture (Sharpness)" },
            composition: { zh: "幾何構圖、單一北窗光", en: "Geometric, North window light" }
        },
        website: "https://irvingpenn.org",
        initials: "IP"
    },
    {
        id: 20,
        name: { zh: "辛蒂·雪曼", en: "Cindy Sherman" },
        category: { zh: "觀念自拍", en: "Conceptual Self-Portrait" },
        style: {
            zh: "當代藝術大師，透過化妝與扮裝親自演繹各種社會角色，探討身份認同、媒體刻板印象與女性凝視。",
            en: "Conceptual artist who enacts various social roles through makeup and costumes, exploring identity and the male gaze."
        },
        tech: {
            focalLength: { zh: "35mm / 中片幅", en: "35mm / Medium Format" },
            aperture: { zh: "多變 (依劇本而定)", en: "Variable (Script driven)" },
            composition: { zh: "電影劇照式 (Film Still)", en: "Untitled Film Stills" }
        },
        website: "https://www.moma.org/artists/5392",
        initials: "CS"
    }
];

export default photographersData;
