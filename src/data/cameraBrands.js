/**
 * 相機品牌色彩特色資料庫 (Camera Brands Color Science)
 * 
 * 資料格式說明：
 * - id: 唯一識別碼
 * - brand: 品牌名稱
 * - colorScience: 色彩科學特色 (zh-TW, zh-CN, en, ja, ko)
 * - imageStyle: 影像風格 (zh-TW, zh-CN, en, ja, ko)
 * - signature: 品牌標誌性特色 (zh-TW, zh-CN, en, ja, ko)
 * - bestFor: 最適合拍攝題材 (zh-TW, zh-CN, en, ja, ko)
 * - description: 詳細說明 (zh-TW, zh-CN, en, ja, ko)
 * - iconicModels: 代表性機型 (array)
 * - colorProfile: 色彩特性描述 (zh-TW, zh-CN, en, ja, ko)
 */

const cameraBrands = [
    {
        id: 'brand1',
        brand: 'Leica',
        colorScience: {
            'zh-TW': '經典德系色彩、自然中性、層次豐富',
            'zh-CN': '经典德系色彩、自然中性、层次丰富',
            'en': 'Classic German color, natural neutral, rich gradation',
            'ja': 'クラシックなドイツカラー、自然でニュートラル、豊かな階調',
            'ko': '클래식 독일 색상, 자연스러운 중립, 풍부한 계조'
        },
        imageStyle: {
            'zh-TW': '低對比、柔和過渡、膠片質感',
            'zh-CN': '低对比、柔和过渡、胶片质感',
            'en': 'Low contrast, smooth transition, film-like texture',
            'ja': '低コントラスト、滑らかな遷移、フィルムのような質感',
            'ko': '낮은 대비, 부드러운 전환, 필름 같은 질감'
        },
        signature: {
            'zh-TW': '「Leica 紅」色彩還原、微妙的色調分離、極致的鏡頭銳利度',
            'zh-CN': '「Leica 红」色彩还原、微妙的色调分离、极致的镜头锐利度',
            'en': '"Leica Red" color reproduction, subtle tonal separation, ultimate lens sharpness',
            'ja': '「ライカレッド」の色再現、微妙な階調分離、究極のレンズシャープネス',
            'ko': '"라이카 레드" 색 재현, 미묘한 톤 분리, 궁극의 렌즈 선명도'
        },
        bestFor: {
            'zh-TW': '街頭攝影、人文紀實、黑白攝影',
            'zh-CN': '街头摄影、人文纪实、黑白摄影',
            'en': 'Street photography, documentary, black & white photography',
            'ja': 'ストリート写真、ドキュメンタリー、モノクロ写真',
            'ko': '거리 사진, 다큐멘터리, 흑백 사진'
        },
        description: {
            'zh-TW': 'Leica 的色彩科學以「真實」為核心哲學，追求最接近人眼所見的色彩還原。其獨特的「Leica 紅」以飽滿而不過度的方式呈現紅色調，成為品牌標誌。低對比度的調性讓影像保有豐富的中間調層次，特別適合後期調整。Leica 的黑白模式更是業界標竿，能呈現出媲美傳統銀鹽底片的質感與層次。',
            'zh-CN': 'Leica 的色彩科学以「真实」为核心哲学，追求最接近人眼所见的色彩还原。其独特的「Leica 红」以饱满而不过度的方式呈现红色调，成为品牌标志。低对比度的调性让影像保有丰富的中间调层次，特别适合后期调整。Leica 的黑白模式更是业界标竿，能呈现出媲美传统银盐底片的质感与层次。',
            'en': 'Leica\'s color science centers on the philosophy of "authenticity," pursuing color reproduction closest to what the human eye sees. Its unique "Leica Red" presents red tones in a full yet not excessive manner, becoming a brand signature. The low-contrast tonality preserves rich mid-tone gradations, particularly suitable for post-processing. Leica\'s black and white mode is an industry benchmark, capable of rendering texture and gradation comparable to traditional silver halide film.',
            'ja': 'ライカのカラーサイエンスは「真実性」を核心哲学とし、人間の目に最も近い色再現を追求しています。独特の「ライカレッド」は、豊かでありながら過度ではない方法で赤のトーンを提示し、ブランドの象徴となっています。低コントラストのトーンは豊かな中間調の階調を保持し、特に後処理に適しています。ライカのモノクロモードは業界の基準であり、伝統的な銀塩フィルムに匹敵する質感と階調をレンダリングできます。',
            'ko': '라이카의 색상 과학은 "진정성"의 철학을 중심으로 하며 인간의 눈에 가장 가까운 색 재현을 추구합니다. 독특한 "라이카 레드"는 풍부하면서도 과도하지 않은 방식으로 빨간색 톤을 제시하여 브랜드 시그니처가 되었습니다. 낮은 대비의 톤은 풍부한 중간 톤 계조를 보존하여 특히 후처리에 적합합니다. 라이카의 흑백 모드는 업계 벤치마크로 전통적인 은염 필름에 필적하는 질감과 계조를 렌더링할 수 있습니다.'
        },
        iconicModels: ['M11', 'Q3', 'SL3', 'M10 Monochrom'],
        colorProfile: {
            'zh-TW': '紅色：飽滿自然 | 膚色：溫潤真實 | 黑白：層次豐富',
            'zh-CN': '红色：饱满自然 | 肤色：温润真实 | 黑白：层次丰富',
            'en': 'Red: Full & Natural | Skin Tone: Warm & Authentic | B&W: Rich Gradation',
            'ja': '赤：豊かで自然 | 肌色：温かく本物 | モノクロ：豊かな階調',
            'ko': '빨강: 풍부하고 자연스러움 | 피부톤: 따뜻하고 진정성 있음 | 흑백: 풍부한 계조'
        }
    },
    {
        id: 'brand2',
        brand: 'Fujifilm',
        colorScience: {
            'zh-TW': '底片模擬、濃郁色彩、復古情懷',
            'zh-CN': '底片模拟、浓郁色彩、复古情怀',
            'en': 'Film simulation, rich colors, vintage nostalgia',
            'ja': 'フィルムシミュレーション、豊かな色、ヴィンテージノスタルジア',
            'ko': '필름 시뮬레이션, 풍부한 색상, 빈티지 향수'
        },
        imageStyle: {
            'zh-TW': '高飽和、強對比、膠片顆粒感',
            'zh-CN': '高饱和、强对比、胶片颗粒感',
            'en': 'High saturation, strong contrast, film grain texture',
            'ja': '高彩度、強いコントラスト、フィルムグレイン質感',
            'ko': '높은 채도, 강한 대비, 필름 그레인 질감'
        },
        signature: {
            'zh-TW': 'Velvia 模式的鮮豔色彩、Classic Chrome 的復古色調、ACROS 黑白',
            'zh-CN': 'Velvia 模式的鲜艳色彩、Classic Chrome 的复古色调、ACROS 黑白',
            'en': 'Velvia mode vivid colors, Classic Chrome vintage tones, ACROS black & white',
            'ja': 'Velviaモードの鮮やかな色、クラシッククロームのヴィンテージトーン、ACROSモノクロ',
            'ko': 'Velvia 모드의 생생한 색상, Classic Chrome의 빈티지 톤, ACROS 흑백'
        },
        bestFor: {
            'zh-TW': '風景攝影、人像攝影、街頭紀實',
            'zh-CN': '风景摄影、人像摄影、街头纪实',
            'en': 'Landscape photography, portrait photography, street documentary',
            'ja': '風景写真、ポートレート写真、ストリートドキュメンタリー',
            'ko': '풍경 사진, 인물 사진, 거리 다큐멘터리'
        },
        description: {
            'zh-TW': 'Fujifilm 憑藉 80 多年的底片製造經驗，將經典底片的色彩特性完美移植到數位相機中。其獨家的「底片模擬」功能提供 Provia、Velvia、Astia、Classic Chrome 等多種經典底片色調，每種都有獨特的色彩傾向。Velvia 以極致飽和的風景色彩聞名，Classic Chrome 則呈現柔和復古的色調，ACROS 黑白模式更是數位黑白攝影的標竿。Fujifilm 的膚色渲染特別出色，能呈現自然健康的膚質。',
            'zh-CN': 'Fujifilm 凭借 80 多年的底片制造经验，将经典底片的色彩特性完美移植到数位相机中。其独家的「底片模拟」功能提供 Provia、Velvia、Astia、Classic Chrome 等多种经典底片色调，每种都有独特的色彩倾向。Velvia 以极致饱和的风景色彩闻名，Classic Chrome 则呈现柔和复古的色调，ACROS 黑白模式更是数位黑白摄影的标竿。Fujifilm 的肤色渲染特别出色，能呈现自然健康的肤质。',
            'en': 'With over 80 years of film manufacturing experience, Fujifilm has perfectly transplanted the color characteristics of classic films into digital cameras. Its exclusive "Film Simulation" feature offers various classic film tones including Provia, Velvia, Astia, and Classic Chrome, each with unique color tendencies. Velvia is renowned for extremely saturated landscape colors, Classic Chrome presents soft vintage tones, and ACROS black & white mode is a benchmark for digital monochrome photography. Fujifilm\'s skin tone rendering is particularly excellent, capable of presenting natural and healthy skin texture.',
            'ja': '80年以上のフィルム製造経験を持つ富士フイルムは、クラシックフィルムの色特性をデジタルカメラに完璧に移植しました。独自の「フィルムシミュレーション」機能は、Provia、Velvia、Astia、クラシッククロームなど、さまざまなクラシックフィルムトーンを提供し、それぞれが独特の色傾向を持っています。Velviaは極めて飽和した風景色で有名で、クラシッククロームは柔らかいヴィンテージトーンを提示し、ACROSモノクロモードはデジタルモノクロ写真の基準です。富士フイルムの肌色レンダリングは特に優れており、自然で健康的な肌の質感を提示できます。',
            'ko': '80년 이상의 필름 제조 경험을 가진 후지필름은 클래식 필름의 색상 특성을 디지털 카메라에 완벽하게 이식했습니다. 독점적인 "필름 시뮬레이션" 기능은 Provia, Velvia, Astia, Classic Chrome 등 다양한 클래식 필름 톤을 제공하며 각각 고유한 색상 경향을 가지고 있습니다. Velvia는 극도로 포화된 풍경 색상으로 유명하고 Classic Chrome은 부드러운 빈티지 톤을 제시하며 ACROS 흑백 모드는 디지털 모노크롬 사진의 벤치마크입니다. 후지필름의 피부톤 렌더링은 특히 뛰어나 자연스럽고 건강한 피부 질감을 제시할 수 있습니다.'
        },
        iconicModels: ['X-T5', 'X100VI', 'GFX100 II', 'X-Pro3'],
        colorProfile: {
            'zh-TW': '綠色：濃郁飽滿 | 膚色：溫暖健康 | 藍色：深邃純淨',
            'zh-CN': '绿色：浓郁饱满 | 肤色：温暖健康 | 蓝色：深邃纯净',
            'en': 'Green: Rich & Full | Skin Tone: Warm & Healthy | Blue: Deep & Pure',
            'ja': '緑：豊かで満ち足りた | 肌色：温かく健康的 | 青：深く純粋',
            'ko': '녹색: 풍부하고 충만 | 피부톤: 따뜻하고 건강 | 파랑: 깊고 순수'
        }
    },
    {
        id: 'brand3',
        brand: 'Canon',
        colorScience: {
            'zh-TW': '溫暖色調、膚色優異、自然飽和',
            'zh-CN': '温暖色调、肤色优异、自然饱和',
            'en': 'Warm tones, excellent skin tones, natural saturation',
            'ja': '温かいトーン、優れた肌色、自然な彩度',
            'ko': '따뜻한 톤, 뛰어난 피부톤, 자연스러운 채도'
        },
        imageStyle: {
            'zh-TW': '中等對比、柔和過渡、討喜色彩',
            'zh-CN': '中等对比、柔和过渡、讨喜色彩',
            'en': 'Medium contrast, smooth transition, pleasing colors',
            'ja': '中程度のコントラスト、滑らかな遷移、心地よい色',
            'ko': '중간 대비, 부드러운 전환, 기분 좋은 색상'
        },
        signature: {
            'zh-TW': '「Canon 膚色」、紅色偏暖、綠色自然',
            'zh-CN': '「Canon 肤色」、红色偏暖、绿色自然',
            'en': '"Canon Skin Tone", warm reds, natural greens',
            'ja': '「キヤノンスキントーン」、温かい赤、自然な緑',
            'ko': '"캐논 피부톤", 따뜻한 빨강, 자연스러운 녹색'
        },
        bestFor: {
            'zh-TW': '人像攝影、婚禮攝影、商業攝影',
            'zh-CN': '人像摄影、婚礼摄影、商业摄影',
            'en': 'Portrait photography, wedding photography, commercial photography',
            'ja': 'ポートレート写真、ウェディング写真、商業写真',
            'ko': '인물 사진, 웨딩 사진, 상업 사진'
        },
        description: {
            'zh-TW': 'Canon 的色彩科學以「討喜」為設計理念，特別在膚色渲染上有著業界公認的優勢。其色彩傾向偏暖，能讓人像照片呈現健康紅潤的膚色，這也是 Canon 長期主導婚禮與人像攝影市場的關鍵因素。紅色調偏暖而不過度，綠色自然不偏黃，整體色彩平衡度極佳。Canon 的 Picture Style 提供多種預設風格，其中「人像」模式能進一步優化膚色表現。',
            'zh-CN': 'Canon 的色彩科学以「讨喜」为设计理念，特别在肤色渲染上有着业界公认的优势。其色彩倾向偏暖，能让人像照片呈现健康红润的肤色，这也是 Canon 长期主导婚礼与人像摄影市场的关键因素。红色调偏暖而不过度，绿色自然不偏黄，整体色彩平衡度极佳。Canon 的 Picture Style 提供多种预设风格，其中「人像」模式能进一步优化肤色表现。',
            'en': 'Canon\'s color science is designed with "pleasing" as its core concept, particularly having industry-recognized advantages in skin tone rendering. Its color tendency leans warm, allowing portrait photos to present healthy and rosy skin tones, which is also a key factor in Canon\'s long-term dominance of the wedding and portrait photography market. Red tones are warm but not excessive, greens are natural without yellowing, and overall color balance is excellent. Canon\'s Picture Style offers various preset styles, with the "Portrait" mode further optimizing skin tone performance.',
            'ja': 'キヤノンのカラーサイエンスは「心地よさ」を核心コンセプトとして設計されており、特に肌色レンダリングにおいて業界で認められた優位性を持っています。その色傾向は温かく傾いており、ポートレート写真が健康的でバラ色の肌色を提示できるようにし、これもキヤノンがウェディングとポートレート写真市場を長期的に支配している重要な要因です。赤のトーンは温かいが過度ではなく、緑は黄色くならず自然で、全体的な色バランスが優れています。キヤノンのピクチャースタイルはさまざまなプリセットスタイルを提供し、「ポートレート」モードは肌色のパフォーマンスをさらに最適化します。',
            'ko': '캐논의 색상 과학은 "기분 좋음"을 핵심 개념으로 설계되었으며 특히 피부톤 렌더링에서 업계에서 인정받는 우위를 가지고 있습니다. 색상 경향은 따뜻하게 기울어져 인물 사진이 건강하고 장밋빛 피부톤을 제시할 수 있도록 하며 이는 캐논이 웨딩 및 인물 사진 시장을 장기적으로 지배하는 핵심 요인이기도 합니다. 빨간색 톤은 따뜻하지만 과도하지 않고 녹색은 노랗게 변하지 않고 자연스러우며 전체적인 색상 균형이 뛰어납니다. 캐논의 픽처 스타일은 다양한 프리셋 스타일을 제공하며 "인물" 모드는 피부톤 성능을 더욱 최적화합니다.'
        },
        iconicModels: ['EOS R5', 'EOS R6 Mark II', 'EOS R3', 'EOS 5D Mark IV'],
        colorProfile: {
            'zh-TW': '紅色：溫暖柔和 | 膚色：紅潤健康 | 綠色：自然平衡',
            'zh-CN': '红色：温暖柔和 | 肤色：红润健康 | 绿色：自然平衡',
            'en': 'Red: Warm & Soft | Skin Tone: Rosy & Healthy | Green: Natural & Balanced',
            'ja': '赤：温かく柔らかい | 肌色：バラ色で健康的 | 緑：自然でバランスが取れている',
            'ko': '빨강: 따뜻하고 부드러움 | 피부톤: 장밋빛이고 건강 | 녹색: 자연스럽고 균형 잡힘'
        }
    },
    {
        id: 'brand4',
        brand: 'Nikon',
        colorScience: {
            'zh-TW': '中性準確、色彩真實、寬容度高',
            'zh-CN': '中性准确、色彩真实、宽容度高',
            'en': 'Neutral accuracy, true colors, high dynamic range',
            'ja': 'ニュートラルな正確さ、真の色、高いダイナミックレンジ',
            'ko': '중립적 정확성, 진정한 색상, 높은 다이내믹 레인지'
        },
        imageStyle: {
            'zh-TW': '高對比、銳利清晰、色彩飽滿',
            'zh-CN': '高对比、锐利清晰、色彩饱满',
            'en': 'High contrast, sharp clarity, rich colors',
            'ja': '高コントラスト、シャープな明瞭さ、豊かな色',
            'ko': '높은 대비, 선명한 명료성, 풍부한 색상'
        },
        signature: {
            'zh-TW': '「Nikon 黃」、準確的色彩還原、強烈的立體感',
            'zh-CN': '「Nikon 黄」、准确的色彩还原、强烈的立体感',
            'en': '"Nikon Yellow", accurate color reproduction, strong dimensionality',
            'ja': '「ニコンイエロー」、正確な色再現、強い立体感',
            'ko': '"니콘 옐로우", 정확한 색 재현, 강한 입체감'
        },
        bestFor: {
            'zh-TW': '風景攝影、新聞攝影、運動攝影',
            'zh-CN': '风景摄影、新闻摄影、运动摄影',
            'en': 'Landscape photography, photojournalism, sports photography',
            'ja': '風景写真、フォトジャーナリズム、スポーツ写真',
            'ko': '풍경 사진, 포토저널리즘, 스포츠 사진'
        },
        description: {
            'zh-TW': 'Nikon 的色彩哲學強調「準確性」，追求最真實的色彩還原，特別適合需要精確色彩的專業領域。其色彩傾向偏冷，黃色特別飽滿（俗稱「Nikon 黃」），綠色偏青，整體呈現較高的對比度與銳利度。Nikon 的 Picture Control 系統提供精細的色彩調整，「風景」模式能強化藍天綠地的飽和度。高寬容度讓後期調整空間極大，是專業攝影師的首選。',
            'zh-CN': 'Nikon 的色彩哲学强调「准确性」，追求最真实的色彩还原，特别适合需要精确色彩的专业领域。其色彩倾向偏冷，黄色特别饱满（俗称「Nikon 黄」），绿色偏青，整体呈现较高的对比度与锐利度。Nikon 的 Picture Control 系统提供精细的色彩调整，「风景」模式能强化蓝天绿地的饱和度。高宽容度让后期调整空间极大，是专业摄影师的首选。',
            'en': 'Nikon\'s color philosophy emphasizes "accuracy," pursuing the most authentic color reproduction, particularly suitable for professional fields requiring precise colors. Its color tendency leans cool, with particularly saturated yellows (commonly called "Nikon Yellow"), greens leaning cyan, and overall presenting higher contrast and sharpness. Nikon\'s Picture Control system provides fine color adjustments, with the "Landscape" mode enhancing the saturation of blue skies and green fields. High dynamic range allows extensive post-processing latitude, making it the top choice for professional photographers.',
            'ja': 'ニコンのカラー哲学は「正確さ」を強調し、最も本物の色再現を追求し、特に正確な色を必要とする専門分野に適しています。その色傾向は冷たく傾いており、黄色が特に飽和しており（一般的に「ニコンイエロー」と呼ばれる）、緑はシアンに傾いており、全体的に高いコントラストとシャープネスを提示します。ニコンのピクチャーコントロールシステムは細かい色調整を提供し、「風景」モードは青空と緑の野原の彩度を強化します。高いダイナミックレンジは広範な後処理の余地を可能にし、プロの写真家の最高の選択となっています。',
            'ko': '니콘의 색상 철학은 "정확성"을 강조하며 가장 진정한 색 재현을 추구하여 특히 정확한 색상이 필요한 전문 분야에 적합합니다. 색상 경향은 차갑게 기울어져 있으며 노란색이 특히 포화되어 있고(일반적으로 "니콘 옐로우"라고 함) 녹색은 청록색으로 기울어져 있으며 전체적으로 높은 대비와 선명도를 제시합니다. 니콘의 픽처 컨트롤 시스템은 세밀한 색상 조정을 제공하며 "풍경" 모드는 푸른 하늘과 녹색 들판의 채도를 강화합니다. 높은 다이내믹 레인지는 광범위한 후처리 여유를 허용하여 전문 사진가의 최고 선택이 됩니다.'
        },
        iconicModels: ['Z9', 'Z8', 'Z6 III', 'D850'],
        colorProfile: {
            'zh-TW': '黃色：飽滿鮮明 | 膚色：中性準確 | 藍色：深邃冷調',
            'zh-CN': '黄色：饱满鲜明 | 肤色：中性准确 | 蓝色：深邃冷调',
            'en': 'Yellow: Full & Vivid | Skin Tone: Neutral & Accurate | Blue: Deep & Cool',
            'ja': '黄：満ち足りて鮮やか | 肌色：ニュートラルで正確 | 青：深くクール',
            'ko': '노랑: 충만하고 생생 | 피부톤: 중립적이고 정확 | 파랑: 깊고 차가움'
        }
    },
    {
        id: 'brand5',
        brand: 'Sony',
        colorScience: {
            'zh-TW': '科技感色彩、高動態範圍、現代風格',
            'zh-CN': '科技感色彩、高动态范围、现代风格',
            'en': 'Tech-oriented colors, high dynamic range, modern style',
            'ja': 'テクノロジー志向の色、高いダイナミックレンジ、モダンなスタイル',
            'ko': '기술 지향적 색상, 높은 다이내믹 레인지, 현대적 스타일'
        },
        imageStyle: {
            'zh-TW': '中性偏冷、高寬容度、後期空間大',
            'zh-CN': '中性偏冷、高宽容度、后期空间大',
            'en': 'Neutral-cool, high latitude, extensive post-processing space',
            'ja': 'ニュートラルクール、高い余裕、広範な後処理スペース',
            'ko': '중립적-차가움, 높은 여유, 광범위한 후처리 공간'
        },
        signature: {
            'zh-TW': '綠色偏青、膚色偏洋紅、極致的動態範圍',
            'zh-CN': '绿色偏青、肤色偏洋红、极致的动态范围',
            'en': 'Greens lean cyan, skin tones lean magenta, ultimate dynamic range',
            'ja': '緑はシアンに傾き、肌色はマゼンタに傾き、究極のダイナミックレンジ',
            'ko': '녹색은 청록색으로 기울고 피부톤은 마젠타로 기울며 궁극의 다이내믹 레인지'
        },
        bestFor: {
            'zh-TW': '影片拍攝、商業攝影、需要後期調色',
            'zh-CN': '影片拍摄、商业摄影、需要后期调色',
            'en': 'Video production, commercial photography, requiring post-grading',
            'ja': 'ビデオ制作、商業写真、後処理グレーディングが必要',
            'ko': '비디오 제작, 상업 사진, 후처리 그레이딩 필요'
        },
        description: {
            'zh-TW': 'Sony 的色彩科學以「科技」與「可塑性」為核心，直出色彩相對平淡，但保留了極大的後期調整空間。其色彩傾向偏冷，綠色偏青綠，膚色容易偏洋紅，需要後期微調。但 Sony 的優勢在於極致的動態範圍與高 ISO 表現，能在極端光線條件下保留豐富細節。近年推出的 Creative Look 功能提供多種預設風格，改善了直出色彩表現。Sony 特別適合影片創作者，S-Log 模式提供專業級的調色空間。',
            'zh-CN': 'Sony 的色彩科学以「科技」与「可塑性」为核心，直出色彩相对平淡，但保留了极大的后期调整空间。其色彩倾向偏冷，绿色偏青绿，肤色容易偏洋红，需要后期微调。但 Sony 的优势在于极致的动态范围与高 ISO 表现，能在极端光线条件下保留丰富细节。近年推出的 Creative Look 功能提供多种预设风格，改善了直出色彩表现。Sony 特别适合影片创作者，S-Log 模式提供专业级的调色空间。',
            'en': 'Sony\'s color science centers on "technology" and "malleability," with straight-out-of-camera colors being relatively flat but preserving extensive post-processing latitude. Its color tendency leans cool, greens lean cyan-green, and skin tones easily lean magenta, requiring post-processing fine-tuning. However, Sony\'s advantage lies in ultimate dynamic range and high ISO performance, capable of preserving rich detail under extreme lighting conditions. The recently introduced Creative Look feature offers various preset styles, improving straight-out-of-camera color performance. Sony is particularly suitable for video creators, with S-Log mode providing professional-grade color grading space.',
            'ja': 'ソニーのカラーサイエンスは「テクノロジー」と「可塑性」を中心としており、カメラから直接出力される色は比較的平坦ですが、広範な後処理の余地を保持しています。その色傾向は冷たく傾いており、緑はシアングリーンに傾き、肌色は簡単にマゼンタに傾き、後処理の微調整が必要です。ただし、ソニーの利点は究極のダイナミックレンジと高いISO性能にあり、極端な照明条件下で豊かなディテールを保持できます。最近導入されたクリエイティブルック機能はさまざまなプリセットスタイルを提供し、カメラから直接出力される色のパフォーマンスを改善しました。ソニーは特にビデオクリエイターに適しており、S-Logモードはプロフェッショナルグレードのカラーグレーディングスペースを提供します。',
            'ko': '소니의 색상 과학은 "기술"과 "가소성"을 중심으로 하며 카메라에서 직접 나오는 색상은 비교적 평평하지만 광범위한 후처리 여유를 보존합니다. 색상 경향은 차갑게 기울어져 있으며 녹색은 청록색으로 기울고 피부톤은 쉽게 마젠타로 기울어 후처리 미세 조정이 필요합니다. 그러나 소니의 장점은 궁극의 다이내믹 레인지와 높은 ISO 성능에 있으며 극한 조명 조건에서 풍부한 디테일을 보존할 수 있습니다. 최근 도입된 크리에이티브 룩 기능은 다양한 프리셋 스타일을 제공하여 카메라에서 직접 나오는 색상 성능을 개선했습니다. 소니는 특히 비디오 크리에이터에게 적합하며 S-Log 모드는 전문가급 색상 그레이딩 공간을 제공합니다.'
        },
        iconicModels: ['A1', 'A7R V', 'A7 IV', 'A9 III'],
        colorProfile: {
            'zh-TW': '綠色：偏青冷調 | 膚色：需後期調整 | 動態範圍：業界頂尖',
            'zh-CN': '绿色：偏青冷调 | 肤色：需后期调整 | 动态范围：业界顶尖',
            'en': 'Green: Cyan-Cool | Skin Tone: Requires Post-Adjustment | Dynamic Range: Industry-Leading',
            'ja': '緑：シアンクール | 肌色：後処理調整が必要 | ダイナミックレンジ：業界トップ',
            'ko': '녹색: 청록색-차가움 | 피부톤: 후처리 조정 필요 | 다이내믹 레인지: 업계 최고'
        }
    },
    {
        id: 'brand6',
        brand: 'Panasonic Lumix',
        colorScience: {
            'zh-TW': '影片導向、自然色調、專業調色',
            'zh-CN': '影片导向、自然色调、专业调色',
            'en': 'Video-oriented, natural tones, professional grading',
            'ja': 'ビデオ志向、自然なトーン、プロフェッショナルグレーディング',
            'ko': '비디오 지향, 자연스러운 톤, 전문 그레이딩'
        },
        imageStyle: {
            'zh-TW': '中性平衡、膚色自然、適合調色',
            'zh-CN': '中性平衡、肤色自然、适合调色',
            'en': 'Neutral balance, natural skin tones, suitable for grading',
            'ja': 'ニュートラルバランス、自然な肌色、グレーディングに適している',
            'ko': '중립적 균형, 자연스러운 피부톤, 그레이딩에 적합'
        },
        signature: {
            'zh-TW': 'V-Log 專業調色空間、自然膚色、影片優先',
            'zh-CN': 'V-Log 专业调色空间、自然肤色、影片优先',
            'en': 'V-Log professional grading space, natural skin tones, video-first',
            'ja': 'V-Logプロフェッショナルグレーディングスペース、自然な肌色、ビデオファースト',
            'ko': 'V-Log 전문 그레이딩 공간, 자연스러운 피부톤, 비디오 우선'
        },
        bestFor: {
            'zh-TW': '影片製作、混合拍攝、專業調色',
            'zh-CN': '影片制作、混合拍摄、专业调色',
            'en': 'Video production, hybrid shooting, professional grading',
            'ja': 'ビデオ制作、ハイブリッド撮影、プロフェッショナルグレーディング',
            'ko': '비디오 제작, 하이브리드 촬영, 전문 그레이딩'
        },
        description: {
            'zh-TW': 'Panasonic Lumix 以影片拍攝見長，其色彩科學設計優先考慮影片創作需求。直出色彩中性平衡，膚色自然不偏色，特別適合需要後期調色的專業工作流程。V-Log 模式提供極大的動態範圍與調色空間，是專業影片創作者的首選。Photo Style 功能提供多種預設風格，包括 Cinelike D 與 Cinelike V 等電影感色調。Lumix 的色彩一致性極佳，特別適合多機位拍攝。',
            'zh-CN': 'Panasonic Lumix 以影片拍摄见长，其色彩科学设计优先考虑影片创作需求。直出色彩中性平衡，肤色自然不偏色，特别适合需要后期调色的专业工作流程。V-Log 模式提供极大的动态范围与调色空间，是专业影片创作者的首选。Photo Style 功能提供多种预设风格，包括 Cinelike D 与 Cinelike V 等电影感色调。Lumix 的色彩一致性极佳，特别适合多机位拍摄。',
            'en': 'Panasonic Lumix excels in video shooting, with its color science design prioritizing video creation needs. Straight-out-of-camera colors are neutral and balanced, skin tones are natural without color cast, particularly suitable for professional workflows requiring post-grading. V-Log mode provides extensive dynamic range and grading space, making it the top choice for professional video creators. The Photo Style feature offers various preset styles, including cinematic tones like Cinelike D and Cinelike V. Lumix\'s color consistency is excellent, particularly suitable for multi-camera shooting.',
            'ja': 'パナソニックルミックスはビデオ撮影に優れており、そのカラーサイエンス設計はビデオ制作のニーズを優先しています。カメラから直接出力される色はニュートラルでバランスが取れており、肌色は色かぶりなく自然で、特に後処理グレーディングが必要なプロフェッショナルワークフローに適しています。V-Logモードは広範なダイナミックレンジとグレーディングスペースを提供し、プロのビデオクリエイターの最高の選択となっています。フォトスタイル機能はCinelike DやCinelike Vなどの映画的なトーンを含むさまざまなプリセットスタイルを提供します。ルミックスの色の一貫性は優れており、特にマルチカメラ撮影に適しています。',
            'ko': '파나소닉 루믹스는 비디오 촬영에 뛰어나며 색상 과학 설계는 비디오 제작 요구를 우선시합니다. 카메라에서 직접 나오는 색상은 중립적이고 균형 잡혀 있으며 피부톤은 색상 편향 없이 자연스러워 특히 후처리 그레이딩이 필요한 전문 워크플로에 적합합니다. V-Log 모드는 광범위한 다이내믹 레인지와 그레이딩 공간을 제공하여 전문 비디오 크리에이터의 최고 선택이 됩니다. 포토 스타일 기능은 Cinelike D 및 Cinelike V와 같은 영화적 톤을 포함한 다양한 프리셋 스타일을 제공합니다. 루믹스의 색상 일관성은 뛰어나며 특히 다중 카메라 촬영에 적합합니다.'
        },
        iconicModels: ['S5 II', 'GH7', 'S1H', 'G9 II'],
        colorProfile: {
            'zh-TW': '中性：平衡準確 | 膚色：自然真實 | 調色：專業空間大',
            'zh-CN': '中性：平衡准确 | 肤色：自然真实 | 调色：专业空间大',
            'en': 'Neutral: Balanced & Accurate | Skin Tone: Natural & Authentic | Grading: Professional Space',
            'ja': 'ニュートラル：バランスが取れて正確 | 肌色：自然で本物 | グレーディング：プロフェッショナルスペース',
            'ko': '중립: 균형 잡히고 정확 | 피부톤: 자연스럽고 진정성 있음 | 그레이딩: 전문 공간'
        }
    }
];

export default cameraBrands;
