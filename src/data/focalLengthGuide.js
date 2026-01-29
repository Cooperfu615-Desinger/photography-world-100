/**
 * 焦距指南資料 (Focal Length Guide)
 * 
 * 資料格式說明：
 * - id: 唯一識別碼
 * - range: 焦距範圍 (mm)
 * - type: 鏡頭類型 (zh-TW, zh-CN, en, ja, ko)
 * - angleOfView: 視角範圍
 * - commonUses: 常見用途 (zh-TW, zh-CN, en, ja, ko)
 * - visualEffect: 視覺效果 (zh-TW, zh-CN, en, ja, ko)
 * - description: 詳細說明 (zh-TW, zh-CN, en, ja, ko)
 * - pros: 優點 (zh-TW, zh-CN, en, ja, ko)
 * - cons: 缺點 (zh-TW, zh-CN, en, ja, ko)
 */

const focalLengthGuide = [
    {
        id: 'fl1',
        range: '8-16mm',
        type: {
            'zh-TW': '魚眼/超廣角',
            'zh-CN': '鱼眼/超广角',
            'en': 'Fisheye/Ultra-Wide',
            'ja': '魚眼/超広角',
            'ko': '어안/초광각'
        },
        angleOfView: '180°+',
        commonUses: {
            'zh-TW': '建築內部、創意變形、極限運動',
            'zh-CN': '建筑内部、创意变形、极限运动',
            'en': 'Interior architecture, creative distortion, extreme sports',
            'ja': '建築内部、クリエイティブな歪み、エクストリームスポーツ',
            'ko': '건축 내부, 창의적 왜곡, 익스트림 스포츠'
        },
        visualEffect: {
            'zh-TW': '極度誇張的透視感、邊緣明顯扭曲、球面效果',
            'zh-CN': '极度夸张的透视感、边缘明显扭曲、球面效果',
            'en': 'Extreme perspective exaggeration, significant edge distortion, spherical effect',
            'ja': '極端な遠近感の誇張、顕著なエッジ歪み、球面効果',
            'ko': '극도로 과장된 원근감, 뚜렷한 가장자리 왜곡, 구면 효과'
        },
        description: {
            'zh-TW': '魚眼與超廣角鏡頭能捕捉極寬廣的視野，創造出獨特的視覺衝擊。適合在狹小空間內拍攝全景，或是創造超現實的藝術效果。由於透視變形極為明顯，需要謹慎構圖以避免不自然的扭曲。',
            'zh-CN': '鱼眼与超广角镜头能捕捉极宽广的视野，创造出独特的视觉冲击。适合在狭小空间内拍摄全景，或是创造超现实的艺术效果。由于透视变形极为明显，需要谨慎构图以避免不自然的扭曲。',
            'en': 'Fisheye and ultra-wide lenses capture an extremely wide field of view, creating unique visual impact. Ideal for shooting panoramas in confined spaces or creating surreal artistic effects. Due to significant perspective distortion, careful composition is needed to avoid unnatural warping.',
            'ja': '魚眼レンズと超広角レンズは非常に広い視野を捉え、独特な視覚的インパクトを生み出します。狭い空間でのパノラマ撮影や、超現実的な芸術効果の創出に適しています。透視歪みが顕著なため、不自然な歪みを避けるために慎重な構図が必要です。',
            'ko': '어안 렌즈와 초광각 렌즈는 매우 넓은 시야를 포착하여 독특한 시각적 충격을 만들어냅니다. 좁은 공간에서 파노라마를 촬영하거나 초현실적인 예술 효과를 만드는 데 이상적입니다. 원근 왜곡이 매우 두드러지므로 부자연스러운 왜곡을 피하기 위해 신중한 구도가 필요합니다.'
        },
        pros: {
            'zh-TW': '極寬視野、創意表現力強、空間感極致',
            'zh-CN': '极宽视野、创意表现力强、空间感极致',
            'en': 'Extremely wide view, strong creative expression, ultimate sense of space',
            'ja': '非常に広い視野、強いクリエイティブ表現力、究極の空間感',
            'ko': '매우 넓은 시야, 강한 창의적 표현력, 궁극의 공간감'
        },
        cons: {
            'zh-TW': '邊緣變形嚴重、不適合人像、專業用途有限',
            'zh-CN': '边缘变形严重、不适合人像、专业用途有限',
            'en': 'Severe edge distortion, unsuitable for portraits, limited professional use',
            'ja': 'エッジの歪みが深刻、ポートレートに不向き、専門的用途が限定的',
            'ko': '심각한 가장자리 왜곡, 인물 사진에 부적합, 전문적 용도 제한적'
        }
    },
    {
        id: 'fl2',
        range: '16-35mm',
        type: {
            'zh-TW': '廣角',
            'zh-CN': '广角',
            'en': 'Wide-Angle',
            'ja': '広角',
            'ko': '광각'
        },
        angleOfView: '107-63°',
        commonUses: {
            'zh-TW': '風景攝影、建築外觀、街頭紀實',
            'zh-CN': '风景摄影、建筑外观、街头纪实',
            'en': 'Landscape photography, architectural exteriors, street documentary',
            'ja': '風景写真、建築外観、ストリートドキュメンタリー',
            'ko': '풍경 사진, 건축 외관, 거리 다큐멘터리'
        },
        visualEffect: {
            'zh-TW': '強烈空間感、透視明顯、前景誇張',
            'zh-CN': '强烈空间感、透视明显、前景夸张',
            'en': 'Strong sense of space, prominent perspective, exaggerated foreground',
            'ja': '強い空間感、顕著な遠近感、誇張された前景',
            'ko': '강한 공간감, 두드러진 원근감, 과장된 전경'
        },
        description: {
            'zh-TW': '廣角鏡頭是風景與建築攝影的首選。它能在有限的距離內容納更多景物，同時創造出深邃的空間感。透視變形相對可控，適合展現宏偉場景。在街頭攝影中，廣角能捕捉環境氛圍與人物互動。',
            'zh-CN': '广角镜头是风景与建筑摄影的首选。它能在有限的距离内容纳更多景物，同时创造出深邃的空间感。透视变形相对可控，适合展现宏伟场景。在街头摄影中，广角能捕捉环境氛围与人物互动。',
            'en': 'Wide-angle lenses are the top choice for landscape and architectural photography. They can accommodate more subjects within a limited distance while creating a profound sense of space. Perspective distortion is relatively controlled, suitable for showcasing grand scenes. In street photography, wide-angle captures environmental atmosphere and human interactions.',
            'ja': '広角レンズは風景写真と建築写真の第一選択です。限られた距離でより多くの被写体を収めることができ、同時に深い空間感を生み出します。透視歪みは比較的コントロール可能で、壮大なシーンを表現するのに適しています。ストリート写真では、広角は環境の雰囲気と人間の相互作用を捉えます。',
            'ko': '광각 렌즈는 풍경 및 건축 사진의 최고 선택입니다. 제한된 거리 내에서 더 많은 피사체를 수용할 수 있으며 동시에 깊은 공간감을 만들어냅니다. 원근 왜곡이 비교적 제어 가능하여 웅장한 장면을 표현하는 데 적합합니다. 거리 사진에서 광각은 환경 분위기와 인간 상호작용을 포착합니다.'
        },
        pros: {
            'zh-TW': '空間感強、景深大、適合環境人像',
            'zh-CN': '空间感强、景深大、适合环境人像',
            'en': 'Strong sense of space, large depth of field, suitable for environmental portraits',
            'ja': '強い空間感、大きな被写界深度、環境ポートレートに適している',
            'ko': '강한 공간감, 큰 피사계 심도, 환경 인물 사진에 적합'
        },
        cons: {
            'zh-TW': '邊緣仍有變形、人像臉部可能扭曲、需注意構圖',
            'zh-CN': '边缘仍有变形、人像脸部可能扭曲、需注意构图',
            'en': 'Edge distortion still present, facial distortion in portraits, composition requires attention',
            'ja': 'エッジの歪みが依然として存在、ポートレートで顔の歪みの可能性、構図に注意が必要',
            'ko': '가장자리 왜곡 여전히 존재, 인물 사진에서 얼굴 왜곡 가능성, 구도에 주의 필요'
        }
    },
    {
        id: 'fl3',
        range: '35-50mm',
        type: {
            'zh-TW': '標準',
            'zh-CN': '标准',
            'en': 'Standard',
            'ja': '標準',
            'ko': '표준'
        },
        angleOfView: '63-47°',
        commonUses: {
            'zh-TW': '人文紀實、街頭攝影、日常記錄',
            'zh-CN': '人文纪实、街头摄影、日常记录',
            'en': 'Documentary, street photography, daily recording',
            'ja': 'ドキュメンタリー、ストリート写真、日常記録',
            'ko': '다큐멘터리, 거리 사진, 일상 기록'
        },
        visualEffect: {
            'zh-TW': '接近人眼視角、自然透視、真實感強',
            'zh-CN': '接近人眼视角、自然透视、真实感强',
            'en': 'Close to human eye perspective, natural perspective, strong sense of reality',
            'ja': '人間の目の視点に近い、自然な遠近感、強いリアリティ感',
            'ko': '인간의 눈 시점에 가까움, 자연스러운 원근감, 강한 현실감'
        },
        description: {
            'zh-TW': '標準鏡頭提供最接近人眼的視角，畫面自然且真實。50mm 被譽為「街頭之眼」，是紀實攝影師的最愛。這個焦段不會誇張透視，也不會壓縮空間，能忠實呈現場景的原貌，非常適合捕捉人文故事。',
            'zh-CN': '标准镜头提供最接近人眼的视角，画面自然且真实。50mm 被誉为「街头之眼」，是纪实摄影师的最爱。这个焦段不会夸张透视，也不会压缩空间，能忠实呈现场景的原貌，非常适合捕捉人文故事。',
            'en': 'Standard lenses provide the closest perspective to the human eye, with natural and realistic images. The 50mm is hailed as the "eye of the street" and is beloved by documentary photographers. This focal length neither exaggerates perspective nor compresses space, faithfully presenting scenes as they are, making it ideal for capturing human stories.',
            'ja': '標準レンズは人間の目に最も近い視点を提供し、自然で現実的な画像を生み出します。50mmは「ストリートの目」として称賛され、ドキュメンタリー写真家に愛されています。この焦点距離は遠近感を誇張せず、空間を圧縮せず、シーンをありのままに忠実に表現し、人間の物語を捉えるのに理想的です。',
            'ko': '표준 렌즈는 인간의 눈에 가장 가까운 시점을 제공하며 자연스럽고 현실적인 이미지를 만듭니다. 50mm는 "거리의 눈"으로 칭송받으며 다큐멘터리 사진가들이 사랑합니다. 이 초점 거리는 원근감을 과장하지도 않고 공간을 압축하지도 않으며 장면을 있는 그대로 충실하게 표현하여 인간 이야기를 포착하는 데 이상적입니다.'
        },
        pros: {
            'zh-TW': '視角自然、體積小巧、光圈通常較大、價格親民',
            'zh-CN': '视角自然、体积小巧、光圈通常较大、价格亲民',
            'en': 'Natural perspective, compact size, usually large aperture, affordable price',
            'ja': '自然な視点、コンパクトなサイズ、通常大きな絞り、手頃な価格',
            'ko': '자연스러운 시점, 컴팩트한 크기, 일반적으로 큰 조리개, 저렴한 가격'
        },
        cons: {
            'zh-TW': '缺乏視覺張力、需靠近主體、不適合遠距拍攝',
            'zh-CN': '缺乏视觉张力、需靠近主体、不适合远距拍摄',
            'en': 'Lacks visual tension, requires proximity to subject, unsuitable for distant shooting',
            'ja': '視覚的な緊張感が欠如、被写体に近づく必要がある、遠距離撮影に不向き',
            'ko': '시각적 긴장감 부족, 피사체에 가까이 가야 함, 원거리 촬영에 부적합'
        }
    },
    {
        id: 'fl4',
        range: '50-85mm',
        type: {
            'zh-TW': '人像',
            'zh-CN': '人像',
            'en': 'Portrait',
            'ja': 'ポートレート',
            'ko': '인물'
        },
        angleOfView: '47-29°',
        commonUses: {
            'zh-TW': '人像攝影、肖像特寫、商業拍攝',
            'zh-CN': '人像摄影、肖像特写、商业拍摄',
            'en': 'Portrait photography, headshots, commercial shooting',
            'ja': 'ポートレート写真、ヘッドショット、商業撮影',
            'ko': '인물 사진, 헤드샷, 상업 촬영'
        },
        visualEffect: {
            'zh-TW': '壓縮感適中、散景優美、臉部比例自然',
            'zh-CN': '压缩感适中、散景优美、脸部比例自然',
            'en': 'Moderate compression, beautiful bokeh, natural facial proportions',
            'ja': '適度な圧縮感、美しいボケ、自然な顔の比率',
            'ko': '적당한 압축감, 아름다운 보케, 자연스러운 얼굴 비율'
        },
        description: {
            'zh-TW': '人像焦段是拍攝肖像的黃金選擇。85mm 尤其受到專業人像攝影師青睞，能在舒適的拍攝距離下呈現最討喜的臉部比例。適度的空間壓縮讓背景虛化更加柔美，同時保持主體清晰銳利，是商業人像與婚禮攝影的主力鏡頭。',
            'zh-CN': '人像焦段是拍摄肖像的黄金选择。85mm 尤其受到专业人像摄影师青睐，能在舒适的拍摄距离下呈现最讨喜的脸部比例。适度的空间压缩让背景虚化更加柔美，同时保持主体清晰锐利，是商业人像与婚礼摄影的主力镜头。',
            'en': 'Portrait focal lengths are the golden choice for shooting portraits. The 85mm is especially favored by professional portrait photographers, presenting the most flattering facial proportions at a comfortable shooting distance. Moderate spatial compression creates softer background blur while maintaining sharp subject clarity, making it the workhorse lens for commercial portraits and wedding photography.',
            'ja': 'ポートレート焦点距離は肖像撮影のゴールデンチョイスです。85mmは特にプロのポートレート写真家に好まれ、快適な撮影距離で最も魅力的な顔の比率を提示します。適度な空間圧縮により、被写体の鮮明さを維持しながら、より柔らかい背景ボケを作り出し、商業ポートレートとウェディング写真の主力レンズとなっています。',
            'ko': '인물 초점 거리는 초상 촬영의 황금 선택입니다. 85mm는 특히 전문 인물 사진가들이 선호하며 편안한 촬영 거리에서 가장 매력적인 얼굴 비율을 제시합니다. 적당한 공간 압축은 피사체의 선명도를 유지하면서 더 부드러운 배경 흐림을 만들어 상업 인물 사진과 웨딩 사진의 주력 렌즈가 됩니다.'
        },
        pros: {
            'zh-TW': '臉部比例完美、散景柔美、拍攝距離舒適',
            'zh-CN': '脸部比例完美、散景柔美、拍摄距离舒适',
            'en': 'Perfect facial proportions, soft bokeh, comfortable shooting distance',
            'ja': '完璧な顔の比率、柔らかいボケ、快適な撮影距離',
            'ko': '완벽한 얼굴 비율, 부드러운 보케, 편안한 촬영 거리'
        },
        cons: {
            'zh-TW': '室內空間受限、需要較遠距離、不適合全身照',
            'zh-CN': '室内空间受限、需要较远距离、不适合全身照',
            'en': 'Limited indoor space, requires greater distance, unsuitable for full-body shots',
            'ja': '室内空間が限られる、より遠い距離が必要、全身写真に不向き',
            'ko': '실내 공간 제한, 더 먼 거리 필요, 전신 사진에 부적합'
        }
    },
    {
        id: 'fl5',
        range: '85-135mm',
        type: {
            'zh-TW': '中長焦',
            'zh-CN': '中长焦',
            'en': 'Medium Telephoto',
            'ja': '中望遠',
            'ko': '중망원'
        },
        angleOfView: '29-18°',
        commonUses: {
            'zh-TW': '人像攝影、活動紀錄、舞台表演',
            'zh-CN': '人像摄影、活动记录、舞台表演',
            'en': 'Portrait photography, event coverage, stage performances',
            'ja': 'ポートレート写真、イベント撮影、舞台パフォーマンス',
            'ko': '인물 사진, 이벤트 촬영, 무대 공연'
        },
        visualEffect: {
            'zh-TW': '空間壓縮明顯、背景虛化極佳、主體突出',
            'zh-CN': '空间压缩明显、背景虚化极佳、主体突出',
            'en': 'Significant spatial compression, excellent background blur, prominent subject',
            'ja': '顕著な空間圧縮、優れた背景ボケ、際立つ被写体',
            'ko': '뚜렷한 공간 압축, 뛰어난 배경 흐림, 두드러진 피사체'
        },
        description: {
            'zh-TW': '中長焦鏡頭提供更強的空間壓縮感，能有效隔離主體與背景。135mm 常被稱為「人像之王」，能創造出夢幻般的散景效果。這個焦段也適合拍攝活動與表演，在保持距離的同時捕捉精彩瞬間，是婚禮與活動攝影師的必備工具。',
            'zh-CN': '中长焦镜头提供更强的空间压缩感，能有效隔离主体与背景。135mm 常被称为「人像之王」，能创造出梦幻般的散景效果。这个焦段也适合拍摄活动与表演，在保持距离的同时捕捉精彩瞬间，是婚礼与活动摄影师的必备工具。',
            'en': 'Medium telephoto lenses provide stronger spatial compression, effectively isolating subject from background. The 135mm is often called the "king of portraits," creating dreamlike bokeh effects. This focal length is also suitable for shooting events and performances, capturing decisive moments while maintaining distance, making it an essential tool for wedding and event photographers.',
            'ja': '中望遠レンズはより強い空間圧縮を提供し、被写体と背景を効果的に分離します。135mmはしばしば「ポートレートの王様」と呼ばれ、夢のようなボケ効果を生み出します。この焦点距離はイベントやパフォーマンスの撮影にも適しており、距離を保ちながら決定的瞬間を捉え、ウェディングやイベント写真家にとって不可欠なツールとなっています。',
            'ko': '중망원 렌즈는 더 강한 공간 압축을 제공하여 피사체와 배경을 효과적으로 분리합니다. 135mm는 종종 "인물 사진의 왕"이라고 불리며 꿈같은 보케 효과를 만들어냅니다. 이 초점 거리는 이벤트 및 공연 촬영에도 적합하며 거리를 유지하면서 결정적 순간을 포착하여 웨딩 및 이벤트 사진가에게 필수 도구가 됩니다.'
        },
        pros: {
            'zh-TW': '散景極致、壓縮感強、適合遠距拍攝',
            'zh-CN': '散景极致、压缩感强、适合远距拍摄',
            'en': 'Ultimate bokeh, strong compression, suitable for distant shooting',
            'ja': '究極のボケ、強い圧縮感、遠距離撮影に適している',
            'ko': '궁극의 보케, 강한 압축감, 원거리 촬영에 적합'
        },
        cons: {
            'zh-TW': '體積重量大、需要更多空間、手震風險高',
            'zh-CN': '体积重量大、需要更多空间、手震风险高',
            'en': 'Large size and weight, requires more space, high risk of camera shake',
            'ja': '大きなサイズと重量、より多くのスペースが必要、カメラブレのリスクが高い',
            'ko': '큰 크기와 무게, 더 많은 공간 필요, 카메라 흔들림 위험 높음'
        }
    },
    {
        id: 'fl6',
        range: '135-300mm',
        type: {
            'zh-TW': '長焦',
            'zh-CN': '长焦',
            'en': 'Telephoto',
            'ja': '望遠',
            'ko': '망원'
        },
        angleOfView: '18-8°',
        commonUses: {
            'zh-TW': '運動攝影、野生動物、新聞紀實',
            'zh-CN': '运动摄影、野生动物、新闻纪实',
            'en': 'Sports photography, wildlife, photojournalism',
            'ja': 'スポーツ写真、野生動物、フォトジャーナリズム',
            'ko': '스포츠 사진, 야생 동물, 포토저널리즘'
        },
        visualEffect: {
            'zh-TW': '強烈壓縮感、遠距捕捉、景深極淺',
            'zh-CN': '强烈压缩感、远距捕捉、景深极浅',
            'en': 'Strong compression, distant capture, extremely shallow depth of field',
            'ja': '強い圧縮感、遠距離捕捉、非常に浅い被写界深度',
            'ko': '강한 압축감, 원거리 포착, 매우 얕은 피사계 심도'
        },
        description: {
            'zh-TW': '長焦鏡頭是運動與野生動物攝影的標準配備。200mm 與 300mm 能在安全距離外捕捉遠處的主體，同時創造出極致的空間壓縮效果。這種壓縮感能讓遠處的背景看起來更近，創造出獨特的視覺層次。新聞攝影師也常使用長焦來捕捉不受干擾的真實瞬間。',
            'zh-CN': '长焦镜头是运动与野生动物摄影的标准配备。200mm 与 300mm 能在安全距离外捕捉远处的主体，同时创造出极致的空间压缩效果。这种压缩感能让远处的背景看起来更近，创造出独特的视觉层次。新闻摄影师也常使用长焦来捕捉不受干扰的真实瞬间。',
            'en': 'Telephoto lenses are standard equipment for sports and wildlife photography. 200mm and 300mm can capture distant subjects from a safe distance while creating ultimate spatial compression. This compression makes distant backgrounds appear closer, creating unique visual layers. Photojournalists also frequently use telephoto lenses to capture undisturbed authentic moments.',
            'ja': '望遠レンズはスポーツと野生動物写真の標準装備です。200mmと300mmは安全な距離から遠くの被写体を捉えることができ、同時に究極の空間圧縮効果を生み出します。この圧縮により、遠くの背景がより近く見え、独特の視覚的レイヤーを作り出します。フォトジャーナリストも、邪魔されない本物の瞬間を捉えるために望遠レンズを頻繁に使用します。',
            'ko': '망원 렌즈는 스포츠 및 야생 동물 사진의 표준 장비입니다. 200mm와 300mm는 안전한 거리에서 먼 피사체를 포착할 수 있으며 동시에 궁극의 공간 압축 효과를 만들어냅니다. 이 압축은 먼 배경이 더 가깝게 보이게 하여 독특한 시각적 레이어를 만듭니다. 포토저널리스트도 방해받지 않는 진정한 순간을 포착하기 위해 망원 렌즈를 자주 사용합니다.'
        },
        pros: {
            'zh-TW': '遠距拍攝、不干擾主體、壓縮感極強',
            'zh-CN': '远距拍摄、不干扰主体、压缩感极强',
            'en': 'Distant shooting, non-intrusive to subject, extremely strong compression',
            'ja': '遠距離撮影、被写体を邪魔しない、非常に強い圧縮感',
            'ko': '원거리 촬영, 피사체를 방해하지 않음, 매우 강한 압축감'
        },
        cons: {
            'zh-TW': '體積龐大、價格昂貴、需三腳架、手震明顯',
            'zh-CN': '体积庞大、价格昂贵、需三脚架、手震明显',
            'en': 'Bulky size, expensive, requires tripod, significant camera shake',
            'ja': '大きなサイズ、高価、三脚が必要、顕著なカメラブレ',
            'ko': '부피가 큼, 비싼 가격, 삼각대 필요, 뚜렷한 카메라 흔들림'
        }
    },
    {
        id: 'fl7',
        range: '300mm+',
        type: {
            'zh-TW': '超長焦',
            'zh-CN': '超长焦',
            'en': 'Super Telephoto',
            'ja': '超望遠',
            'ko': '초망원'
        },
        angleOfView: '<8°',
        commonUses: {
            'zh-TW': '野生動物、天文攝影、體育賽事',
            'zh-CN': '野生动物、天文摄影、体育赛事',
            'en': 'Wildlife, astrophotography, sporting events',
            'ja': '野生動物、天体写真、スポーツイベント',
            'ko': '야생 동물, 천체 사진, 스포츠 이벤트'
        },
        visualEffect: {
            'zh-TW': '極致壓縮、細節放大、背景完全虛化',
            'zh-CN': '极致压缩、细节放大、背景完全虚化',
            'en': 'Ultimate compression, detail magnification, complete background blur',
            'ja': '究極の圧縮、ディテールの拡大、完全な背景ボケ',
            'ko': '궁극의 압축, 디테일 확대, 완전한 배경 흐림'
        },
        description: {
            'zh-TW': '超長焦鏡頭是專業野生動物與體育攝影的終極武器。400mm、600mm 甚至 800mm 能將極遠處的主體拉近，捕捉肉眼難見的細節。這類鏡頭通常配備防手震與快速對焦系統，但體積龐大且價格高昂，主要用於專業領域。天文攝影師也使用超長焦來拍攝月球與行星。',
            'zh-CN': '超长焦镜头是专业野生动物与体育摄影的终极武器。400mm、600mm 甚至 800mm 能将极远处的主体拉近，捕捉肉眼难见的细节。这类镜头通常配备防手震与快速对焦系统，但体积庞大且价格高昂，主要用于专业领域。天文摄影师也使用超长焦来拍摄月球与行星。',
            'en': 'Super telephoto lenses are the ultimate weapon for professional wildlife and sports photography. 400mm, 600mm, and even 800mm can bring extremely distant subjects closer, capturing details invisible to the naked eye. These lenses typically feature image stabilization and fast autofocus systems, but are bulky and expensive, mainly used in professional fields. Astrophotographers also use super telephoto to photograph the moon and planets.',
            'ja': '超望遠レンズはプロの野生動物とスポーツ写真の究極の武器です。400mm、600mm、さらには800mmは非常に遠くの被写体を近づけ、肉眼では見えない詳細を捉えることができます。これらのレンズは通常、手ぶれ補正と高速オートフォーカスシステムを備えていますが、大きくて高価で、主にプロの分野で使用されます。天体写真家も月や惑星を撮影するために超望遠を使用します。',
            'ko': '초망원 렌즈는 전문 야생 동물 및 스포츠 사진의 궁극적인 무기입니다. 400mm, 600mm, 심지어 800mm는 매우 먼 피사체를 가까이 가져와 육안으로는 보이지 않는 디테일을 포착할 수 있습니다. 이러한 렌즈는 일반적으로 손떨림 방지 및 빠른 자동 초점 시스템을 갖추고 있지만 부피가 크고 비싸며 주로 전문 분야에서 사용됩니다. 천체 사진가들도 달과 행성을 촬영하기 위해 초망원을 사용합니다.'
        },
        pros: {
            'zh-TW': '極遠距拍攝、細節極致、專業表現',
            'zh-CN': '极远距拍摄、细节极致、专业表现',
            'en': 'Extreme distance shooting, ultimate detail, professional performance',
            'ja': '極端な遠距離撮影、究極のディテール、プロフェッショナルなパフォーマンス',
            'ko': '극한 거리 촬영, 궁극의 디테일, 전문적 성능'
        },
        cons: {
            'zh-TW': '極其昂貴、體積巨大、必需三腳架、攜帶不便',
            'zh-CN': '极其昂贵、体积巨大、必需三脚架、携带不便',
            'en': 'Extremely expensive, huge size, tripod essential, inconvenient to carry',
            'ja': '非常に高価、巨大なサイズ、三脚が不可欠、持ち運びが不便',
            'ko': '매우 비싼 가격, 거대한 크기, 삼각대 필수, 휴대 불편'
        }
    },
    {
        id: 'fl8',
        range: 'Macro',
        type: {
            'zh-TW': '微距鏡頭',
            'zh-CN': '微距镜头',
            'en': 'Macro Lens',
            'ja': 'マクロレンズ',
            'ko': '매크로 렌즈'
        },
        angleOfView: '1:1 放大',
        commonUses: {
            'zh-TW': '昆蟲攝影、花卉特寫、產品攝影',
            'zh-CN': '昆虫摄影、花卉特写、产品摄影',
            'en': 'Insect photography, flower close-ups, product photography',
            'ja': '昆虫写真、花のクローズアップ、商品写真',
            'ko': '곤충 사진, 꽃 클로즈업, 제품 사진'
        },
        visualEffect: {
            'zh-TW': '極淺景深、細節極致、微觀世界',
            'zh-CN': '极浅景深、细节极致、微观世界',
            'en': 'Extremely shallow depth of field, ultimate detail, microscopic world',
            'ja': '非常に浅い被写界深度、究極のディテール、微視的世界',
            'ko': '매우 얕은 피사계 심도, 궁극의 디테일, 미시적 세계'
        },
        description: {
            'zh-TW': '微距鏡頭能以 1:1 或更高的放大倍率拍攝極小的主體，展現肉眼難見的微觀細節。常見焦距包括 60mm、90mm、100mm 等。由於景深極淺（可能只有數毫米），需要精確對焦與穩定支撐。微距攝影不僅用於自然生態，也廣泛應用於產品攝影與科學記錄。',
            'zh-CN': '微距镜头能以 1:1 或更高的放大倍率拍摄极小的主体，展现肉眼难见的微观细节。常见焦距包括 60mm、90mm、100mm 等。由于景深极浅（可能只有数毫米），需要精确对焦与稳定支撑。微距摄影不仅用于自然生态，也广泛应用于产品摄影与科学记录。',
            'en': 'Macro lenses can photograph extremely small subjects at 1:1 or higher magnification ratios, revealing microscopic details invisible to the naked eye. Common focal lengths include 60mm, 90mm, 100mm, etc. Due to extremely shallow depth of field (possibly only a few millimeters), precise focusing and stable support are required. Macro photography is used not only for nature and ecology but also widely in product photography and scientific documentation.',
            'ja': 'マクロレンズは1:1以上の倍率で非常に小さな被写体を撮影でき、肉眼では見えない微視的なディテールを明らかにします。一般的な焦点距離には60mm、90mm、100mmなどがあります。被写界深度が非常に浅い（わずか数ミリメートルの可能性がある）ため、正確なフォーカスと安定したサポートが必要です。マクロ写真は自然や生態系だけでなく、商品写真や科学的記録にも広く使用されています。',
            'ko': '매크로 렌즈는 1:1 이상의 배율로 매우 작은 피사체를 촬영할 수 있어 육안으로는 보이지 않는 미시적 디테일을 드러냅니다. 일반적인 초점 거리에는 60mm, 90mm, 100mm 등이 있습니다. 피사계 심도가 매우 얕기 때문에(몇 밀리미터에 불과할 수 있음) 정확한 초점과 안정적인 지지가 필요합니다. 매크로 사진은 자연 및 생태계뿐만 아니라 제품 사진 및 과학적 기록에도 널리 사용됩니다.'
        },
        pros: {
            'zh-TW': '細節極致、獨特視角、多功能性',
            'zh-CN': '细节极致、独特视角、多功能性',
            'en': 'Ultimate detail, unique perspective, versatility',
            'ja': '究極のディテール、ユニークな視点、多様性',
            'ko': '궁극의 디테일, 독특한 시점, 다용도성'
        },
        cons: {
            'zh-TW': '景深極淺、需精確對焦、拍攝難度高、需穩定支撐',
            'zh-CN': '景深极浅、需精确对焦、拍摄难度高、需稳定支撑',
            'en': 'Extremely shallow depth of field, requires precise focus, high shooting difficulty, needs stable support',
            'ja': '非常に浅い被写界深度、正確なフォーカスが必要、撮影難易度が高い、安定したサポートが必要',
            'ko': '매우 얕은 피사계 심도, 정확한 초점 필요, 높은 촬영 난이도, 안정적인 지지 필요'
        }
    }
];

export default focalLengthGuide;
