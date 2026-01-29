/**
 * 光圈指南資料 (Aperture Guide)
 * 
 * 資料格式說明：
 * - id: 唯一識別碼
 * - aperture: 光圈值範圍
 * - depthOfField: 景深特性 (zh-TW, zh-CN, en, ja, ko)
 * - lightIntake: 進光量 (zh-TW, zh-CN, en, ja, ko)
 * - commonUses: 常見用途 (zh-TW, zh-CN, en, ja, ko)
 * - visualEffect: 視覺效果 (zh-TW, zh-CN, en, ja, ko)
 * - description: 詳細說明 (zh-TW, zh-CN, en, ja, ko)
 * - pros: 優點 (zh-TW, zh-CN, en, ja, ko)
 * - cons: 缺點 (zh-TW, zh-CN, en, ja, ko)
 */

const apertureGuide = [
    {
        id: 'ap1',
        aperture: 'f/1.2 - f/1.4',
        depthOfField: {
            'zh-TW': '極淺',
            'zh-CN': '极浅',
            'en': 'Extremely Shallow',
            'ja': '非常に浅い',
            'ko': '매우 얕음'
        },
        lightIntake: {
            'zh-TW': '極大',
            'zh-CN': '极大',
            'en': 'Extremely Large',
            'ja': '非常に大きい',
            'ko': '매우 큼'
        },
        commonUses: {
            'zh-TW': '低光人像、電影感拍攝、主體突出',
            'zh-CN': '低光人像、电影感拍摄、主体突出',
            'en': 'Low-light portraits, cinematic shooting, subject isolation',
            'ja': '低照度ポートレート、映画的撮影、被写体の分離',
            'ko': '저조도 인물 사진, 영화적 촬영, 피사체 분리'
        },
        visualEffect: {
            'zh-TW': '奶油般柔滑散景、主體極度突出、夢幻氛圍',
            'zh-CN': '奶油般柔滑散景、主体极度突出、梦幻氛围',
            'en': 'Creamy smooth bokeh, extreme subject prominence, dreamlike atmosphere',
            'ja': 'クリーミーで滑らかなボケ、極端な被写体の際立ち、夢のような雰囲気',
            'ko': '크리미한 부드러운 보케, 극도의 피사체 돋보임, 꿈같은 분위기'
        },
        description: {
            'zh-TW': '大光圈鏡頭是人像攝影師的夢幻選擇。f/1.2 與 f/1.4 能創造出極致柔美的散景效果，讓主體完全脫離背景。在低光環境下，大光圈能捕捉更多光線，降低 ISO 需求，減少雜訊。但這類鏡頭通常價格昂貴，且景深極淺，對焦精準度要求極高。',
            'zh-CN': '大光圈镜头是人像摄影师的梦幻选择。f/1.2 与 f/1.4 能创造出极致柔美的散景效果，让主体完全脱离背景。在低光环境下，大光圈能捕捉更多光线，降低 ISO 需求，减少杂讯。但这类镜头通常价格昂贵，且景深极浅，对焦精准度要求极高。',
            'en': 'Large aperture lenses are the dream choice for portrait photographers. f/1.2 and f/1.4 can create extremely soft bokeh effects, completely separating the subject from the background. In low-light environments, large apertures capture more light, reducing ISO requirements and noise. However, these lenses are typically expensive, and the extremely shallow depth of field demands high focusing precision.',
            'ja': '大口径レンズはポートレート写真家の夢の選択です。f/1.2とf/1.4は非常に柔らかいボケ効果を生み出し、被写体を背景から完全に分離できます。低照度環境では、大口径はより多くの光を捉え、ISO要件とノイズを減らします。ただし、これらのレンズは通常高価で、非常に浅い被写界深度は高い焦点精度を要求します。',
            'ko': '대구경 렌즈는 인물 사진가의 꿈의 선택입니다. f/1.2와 f/1.4는 매우 부드러운 보케 효과를 만들어 피사체를 배경에서 완전히 분리할 수 있습니다. 저조도 환경에서 대구경은 더 많은 빛을 포착하여 ISO 요구 사항과 노이즈를 줄입니다. 그러나 이러한 렌즈는 일반적으로 비싸고 매우 얕은 피사계 심도는 높은 초점 정밀도를 요구합니다.'
        },
        pros: {
            'zh-TW': '散景極致、低光表現優異、主體分離度高',
            'zh-CN': '散景极致、低光表现优异、主体分离度高',
            'en': 'Ultimate bokeh, excellent low-light performance, high subject separation',
            'ja': '究極のボケ、優れた低照度性能、高い被写体分離',
            'ko': '궁극의 보케, 뛰어난 저조도 성능, 높은 피사체 분리'
        },
        cons: {
            'zh-TW': '價格極高、景深極淺、對焦困難、邊角畫質較弱',
            'zh-CN': '价格极高、景深极浅、对焦困难、边角画质较弱',
            'en': 'Extremely expensive, very shallow depth of field, difficult focusing, weaker corner sharpness',
            'ja': '非常に高価、非常に浅い被写界深度、困難なフォーカス、コーナーのシャープネスが弱い',
            'ko': '매우 비싼 가격, 매우 얕은 피사계 심도, 어려운 초점, 약한 모서리 선명도'
        }
    },
    {
        id: 'ap2',
        aperture: 'f/1.8 - f/2.0',
        depthOfField: {
            'zh-TW': '很淺',
            'zh-CN': '很浅',
            'en': 'Very Shallow',
            'ja': '非常に浅い',
            'ko': '매우 얕음'
        },
        lightIntake: {
            'zh-TW': '很大',
            'zh-CN': '很大',
            'en': 'Very Large',
            'ja': '非常に大きい',
            'ko': '매우 큼'
        },
        commonUses: {
            'zh-TW': '人像攝影、靜物拍攝、低光環境',
            'zh-CN': '人像摄影、静物拍摄、低光环境',
            'en': 'Portrait photography, still life, low-light environments',
            'ja': 'ポートレート写真、静物撮影、低照度環境',
            'ko': '인물 사진, 정물 촬영, 저조도 환경'
        },
        visualEffect: {
            'zh-TW': '柔美散景、背景虛化明顯、主體清晰',
            'zh-CN': '柔美散景、背景虚化明显、主体清晰',
            'en': 'Soft bokeh, significant background blur, sharp subject',
            'ja': '柔らかいボケ、顕著な背景ボケ、シャープな被写体',
            'ko': '부드러운 보케, 뚜렷한 배경 흐림, 선명한 피사체'
        },
        description: {
            'zh-TW': 'f/1.8 與 f/2.0 是性價比極高的大光圈選擇。能提供優美的散景效果，同時價格相對親民。這個光圈範圍在人像攝影中非常受歡迎，能有效分離主體與背景。50mm f/1.8 被譽為「窮人的大光圈」，是攝影新手入門大光圈的最佳選擇。',
            'zh-CN': 'f/1.8 与 f/2.0 是性价比极高的大光圈选择。能提供优美的散景效果，同时价格相对亲民。这个光圈范围在人像摄影中非常受欢迎，能有效分离主体与背景。50mm f/1.8 被誉为「穷人的大光圈」，是摄影新手入门大光圈的最佳选择。',
            'en': 'f/1.8 and f/2.0 are extremely cost-effective large aperture choices. They provide beautiful bokeh effects while being relatively affordable. This aperture range is very popular in portrait photography, effectively separating subject from background. The 50mm f/1.8 is hailed as the "poor man\'s large aperture," making it the best choice for photography beginners entering the world of large apertures.',
            'ja': 'f/1.8とf/2.0は非常にコストパフォーマンスの高い大口径の選択です。美しいボケ効果を提供しながら、比較的手頃な価格です。この絞り範囲はポートレート写真で非常に人気があり、被写体と背景を効果的に分離します。50mm f/1.8は「貧乏人の大口径」として称賛され、写真初心者が大口径の世界に入るための最良の選択となっています。',
            'ko': 'f/1.8과 f/2.0은 매우 비용 효율적인 대구경 선택입니다. 아름다운 보케 효과를 제공하면서 비교적 저렴합니다. 이 조리개 범위는 인물 사진에서 매우 인기가 있으며 피사체와 배경을 효과적으로 분리합니다. 50mm f/1.8은 "가난한 사람의 대구경"으로 칭송받으며 사진 초보자가 대구경의 세계에 입문하는 최고의 선택이 됩니다.'
        },
        pros: {
            'zh-TW': '性價比高、散景優美、低光能力強、體積適中',
            'zh-CN': '性价比高、散景优美、低光能力强、体积适中',
            'en': 'High cost-performance, beautiful bokeh, strong low-light capability, moderate size',
            'ja': '高いコストパフォーマンス、美しいボケ、強い低照度能力、適度なサイズ',
            'ko': '높은 비용 대비 성능, 아름다운 보케, 강한 저조도 능력, 적당한 크기'
        },
        cons: {
            'zh-TW': '景深仍很淺、需注意對焦、全開畫質略遜於縮光圈',
            'zh-CN': '景深仍很浅、需注意对焦、全开画质略逊于缩光圈',
            'en': 'Still very shallow depth of field, requires focus attention, wide-open sharpness slightly inferior to stopped-down',
            'ja': '依然として非常に浅い被写界深度、フォーカスに注意が必要、開放時のシャープネスは絞った時よりやや劣る',
            'ko': '여전히 매우 얕은 피사계 심도, 초점 주의 필요, 개방 선명도가 조인 것보다 약간 열등'
        }
    },
    {
        id: 'ap3',
        aperture: 'f/2.8',
        depthOfField: {
            'zh-TW': '淺',
            'zh-CN': '浅',
            'en': 'Shallow',
            'ja': '浅い',
            'ko': '얕음'
        },
        lightIntake: {
            'zh-TW': '大',
            'zh-CN': '大',
            'en': 'Large',
            'ja': '大きい',
            'ko': '큼'
        },
        commonUses: {
            'zh-TW': '人像、活動紀錄、低光拍攝、通用性高',
            'zh-CN': '人像、活动记录、低光拍摄、通用性高',
            'en': 'Portraits, event coverage, low-light shooting, high versatility',
            'ja': 'ポートレート、イベント撮影、低照度撮影、高い汎用性',
            'ko': '인물 사진, 이벤트 촬영, 저조도 촬영, 높은 다용도성'
        },
        visualEffect: {
            'zh-TW': '適度虛化、背景柔和、主體清晰銳利',
            'zh-CN': '适度虚化、背景柔和、主体清晰锐利',
            'en': 'Moderate blur, soft background, sharp and clear subject',
            'ja': '適度なボケ、柔らかい背景、シャープで明瞭な被写体',
            'ko': '적당한 흐림, 부드러운 배경, 선명하고 명확한 피사체'
        },
        description: {
            'zh-TW': 'f/2.8 是專業攝影師的標準配備。這個光圈在畫質與景深之間取得完美平衡，既能提供足夠的背景虛化，又能保持優異的畫質。專業變焦鏡頭（如 24-70mm f/2.8、70-200mm f/2.8）通常採用恆定 f/2.8 光圈，是婚禮、活動與商業攝影的首選。',
            'zh-CN': 'f/2.8 是专业摄影师的标准配备。这个光圈在画质与景深之间取得完美平衡，既能提供足够的背景虚化，又能保持优异的画质。专业变焦镜头（如 24-70mm f/2.8、70-200mm f/2.8）通常采用恒定 f/2.8 光圈，是婚礼、活动与商业摄影的首选。',
            'en': 'f/2.8 is the standard equipment for professional photographers. This aperture achieves a perfect balance between image quality and depth of field, providing sufficient background blur while maintaining excellent image quality. Professional zoom lenses (such as 24-70mm f/2.8, 70-200mm f/2.8) typically feature a constant f/2.8 aperture, making them the top choice for wedding, event, and commercial photography.',
            'ja': 'f/2.8はプロの写真家の標準装備です。この絞りは画質と被写界深度の間で完璧なバランスを達成し、優れた画質を維持しながら十分な背景ボケを提供します。プロのズームレンズ（24-70mm f/2.8、70-200mm f/2.8など）は通常、一定のf/2.8絞りを備えており、ウェディング、イベント、商業写真の最高の選択となっています。',
            'ko': 'f/2.8은 전문 사진가의 표준 장비입니다. 이 조리개는 이미지 품질과 피사계 심도 사이에서 완벽한 균형을 이루며 우수한 이미지 품질을 유지하면서 충분한 배경 흐림을 제공합니다. 전문 줌 렌즈(24-70mm f/2.8, 70-200mm f/2.8 등)는 일반적으로 일정한 f/2.8 조리개를 갖추고 있어 웨딩, 이벤트 및 상업 사진의 최고 선택이 됩니다.'
        },
        pros: {
            'zh-TW': '畫質優異、通用性極高、低光能力佳、專業標準',
            'zh-CN': '画质优异、通用性极高、低光能力佳、专业标准',
            'en': 'Excellent image quality, extremely high versatility, good low-light capability, professional standard',
            'ja': '優れた画質、非常に高い汎用性、良好な低照度能力、プロフェッショナル標準',
            'ko': '뛰어난 이미지 품질, 매우 높은 다용도성, 좋은 저조도 능력, 전문 표준'
        },
        cons: {
            'zh-TW': '價格較高、體積重量大、景深仍需注意',
            'zh-CN': '价格较高、体积重量大、景深仍需注意',
            'en': 'Higher price, large size and weight, depth of field still requires attention',
            'ja': '高価、大きなサイズと重量、被写界深度には依然として注意が必要',
            'ko': '높은 가격, 큰 크기와 무게, 피사계 심도는 여전히 주의 필요'
        }
    },
    {
        id: 'ap4',
        aperture: 'f/4.0',
        depthOfField: {
            'zh-TW': '中淺',
            'zh-CN': '中浅',
            'en': 'Medium-Shallow',
            'ja': '中程度に浅い',
            'ko': '중간 얕음'
        },
        lightIntake: {
            'zh-TW': '中',
            'zh-CN': '中',
            'en': 'Medium',
            'ja': '中程度',
            'ko': '중간'
        },
        commonUses: {
            'zh-TW': '風景攝影、街頭紀實、日常拍攝',
            'zh-CN': '风景摄影、街头纪实、日常拍摄',
            'en': 'Landscape photography, street documentary, daily shooting',
            'ja': '風景写真、ストリートドキュメンタリー、日常撮影',
            'ko': '풍경 사진, 거리 다큐멘터리, 일상 촬영'
        },
        visualEffect: {
            'zh-TW': '主體清晰、背景稍虛、平衡感佳',
            'zh-CN': '主体清晰、背景稍虚、平衡感佳',
            'en': 'Sharp subject, slightly blurred background, good balance',
            'ja': 'シャープな被写体、わずかにぼやけた背景、良好なバランス',
            'ko': '선명한 피사체, 약간 흐린 배경, 좋은 균형'
        },
        description: {
            'zh-TW': 'f/4.0 是風景與街拍的理想選擇。這個光圈能在保持主體清晰的同時，讓背景有適度的虛化，創造出層次感。許多長焦變焦鏡頭（如 70-200mm f/4）採用 f/4 恆定光圈，體積重量比 f/2.8 版本輕巧許多，適合需要長時間手持拍攝的場景。',
            'zh-CN': 'f/4.0 是风景与街拍的理想选择。这个光圈能在保持主体清晰的同时，让背景有适度的虚化，创造出层次感。许多长焦变焦镜头（如 70-200mm f/4）采用 f/4 恒定光圈，体积重量比 f/2.8 版本轻巧许多，适合需要长时间手持拍摄的场景。',
            'en': 'f/4.0 is the ideal choice for landscape and street photography. This aperture maintains subject sharpness while providing moderate background blur, creating depth. Many telephoto zoom lenses (such as 70-200mm f/4) feature a constant f/4 aperture, being much lighter and more compact than f/2.8 versions, suitable for scenarios requiring extended handheld shooting.',
            'ja': 'f/4.0は風景写真とストリート写真の理想的な選択です。この絞りは被写体のシャープネスを維持しながら、適度な背景ボケを提供し、深みを作り出します。多くの望遠ズームレンズ（70-200mm f/4など）は一定のf/4絞りを備えており、f/2.8バージョンよりもはるかに軽量でコンパクトで、長時間の手持ち撮影が必要なシナリオに適しています。',
            'ko': 'f/4.0은 풍경 및 거리 사진의 이상적인 선택입니다. 이 조리개는 피사체의 선명도를 유지하면서 적당한 배경 흐림을 제공하여 깊이를 만듭니다. 많은 망원 줌 렌즈(70-200mm f/4 등)는 일정한 f/4 조리개를 갖추고 있으며 f/2.8 버전보다 훨씬 가볍고 컴팩트하여 장시간 핸드헬드 촬영이 필요한 시나리오에 적합합니다.'
        },
        pros: {
            'zh-TW': '體積輕巧、價格合理、畫質銳利、通用性高',
            'zh-CN': '体积轻巧、价格合理、画质锐利、通用性高',
            'en': 'Compact size, reasonable price, sharp image quality, high versatility',
            'ja': 'コンパクトなサイズ、リーズナブルな価格、シャープな画質、高い汎用性',
            'ko': '컴팩트한 크기, 합리적인 가격, 선명한 이미지 품질, 높은 다용도성'
        },
        cons: {
            'zh-TW': '低光能力較弱、散景效果有限、不適合極暗環境',
            'zh-CN': '低光能力较弱、散景效果有限、不适合极暗环境',
            'en': 'Weaker low-light capability, limited bokeh effect, unsuitable for extremely dark environments',
            'ja': '低照度能力が弱い、限定的なボケ効果、非常に暗い環境には不向き',
            'ko': '약한 저조도 능력, 제한적인 보케 효과, 매우 어두운 환경에 부적합'
        }
    },
    {
        id: 'ap5',
        aperture: 'f/5.6 - f/8',
        depthOfField: {
            'zh-TW': '中',
            'zh-CN': '中',
            'en': 'Medium',
            'ja': '中程度',
            'ko': '중간'
        },
        lightIntake: {
            'zh-TW': '中小',
            'zh-CN': '中小',
            'en': 'Medium-Small',
            'ja': '中程度から小さい',
            'ko': '중간에서 작음'
        },
        commonUses: {
            'zh-TW': '風景攝影、建築攝影、團體照',
            'zh-CN': '风景摄影、建筑摄影、团体照',
            'en': 'Landscape photography, architectural photography, group photos',
            'ja': '風景写真、建築写真、集合写真',
            'ko': '풍경 사진, 건축 사진, 단체 사진'
        },
        visualEffect: {
            'zh-TW': '前後景均清晰、畫質最佳、細節豐富',
            'zh-CN': '前后景均清晰、画质最佳、细节丰富',
            'en': 'Both foreground and background sharp, optimal image quality, rich detail',
            'ja': '前景と背景の両方がシャープ、最適な画質、豊富なディテール',
            'ko': '전경과 배경 모두 선명, 최적의 이미지 품질, 풍부한 디테일'
        },
        description: {
            'zh-TW': 'f/5.6 到 f/8 是大多數鏡頭的「甜蜜點」，能提供最佳的畫質表現。這個光圈範圍在風景攝影中極為常用，能確保從前景到遠景都保持清晰銳利。f/8 常被風景攝影師視為黃金光圈，能在景深與畫質之間取得最佳平衡，同時避免繞射現象影響畫質。',
            'zh-CN': 'f/5.6 到 f/8 是大多数镜头的「甜蜜点」，能提供最佳的画质表现。这个光圈范围在风景摄影中极为常用，能确保从前景到远景都保持清晰锐利。f/8 常被风景摄影师视为黄金光圈，能在景深与画质之间取得最佳平衡，同时避免绕射现象影响画质。',
            'en': 'f/5.6 to f/8 is the "sweet spot" for most lenses, providing optimal image quality performance. This aperture range is extremely common in landscape photography, ensuring sharpness from foreground to background. f/8 is often considered the golden aperture by landscape photographers, achieving the best balance between depth of field and image quality while avoiding diffraction effects.',
            'ja': 'f/5.6からf/8はほとんどのレンズの「スイートスポット」であり、最適な画質性能を提供します。この絞り範囲は風景写真で非常に一般的で、前景から背景までシャープネスを確保します。f/8は風景写真家によって黄金の絞りと見なされることが多く、被写界深度と画質の間で最良のバランスを達成し、回折効果を回避します。',
            'ko': 'f/5.6에서 f/8은 대부분의 렌즈의 "스위트 스팟"으로 최적의 이미지 품질 성능을 제공합니다. 이 조리개 범위는 풍경 사진에서 매우 일반적이며 전경에서 배경까지 선명도를 보장합니다. f/8은 풍경 사진가들에 의해 황금 조리개로 간주되는 경우가 많으며 피사계 심도와 이미지 품질 사이에서 최상의 균형을 달성하면서 회절 효과를 피합니다.'
        },
        pros: {
            'zh-TW': '畫質最佳、景深適中、細節銳利、通用性強',
            'zh-CN': '画质最佳、景深适中、细节锐利、通用性强',
            'en': 'Optimal image quality, moderate depth of field, sharp detail, strong versatility',
            'ja': '最適な画質、適度な被写界深度、シャープなディテール、強い汎用性',
            'ko': '최적의 이미지 품질, 적당한 피사계 심도, 선명한 디테일, 강한 다용도성'
        },
        cons: {
            'zh-TW': '低光能力弱、無散景效果、需充足光線',
            'zh-CN': '低光能力弱、无散景效果、需充足光线',
            'en': 'Weak low-light capability, no bokeh effect, requires sufficient light',
            'ja': '低照度能力が弱い、ボケ効果なし、十分な光が必要',
            'ko': '약한 저조도 능력, 보케 효과 없음, 충분한 빛 필요'
        }
    },
    {
        id: 'ap6',
        aperture: 'f/11 - f/16',
        depthOfField: {
            'zh-TW': '深',
            'zh-CN': '深',
            'en': 'Deep',
            'ja': '深い',
            'ko': '깊음'
        },
        lightIntake: {
            'zh-TW': '小',
            'zh-CN': '小',
            'en': 'Small',
            'ja': '小さい',
            'ko': '작음'
        },
        commonUses: {
            'zh-TW': '風景攝影、建築攝影、產品攝影',
            'zh-CN': '风景摄影、建筑摄影、产品摄影',
            'en': 'Landscape photography, architectural photography, product photography',
            'ja': '風景写真、建築写真、商品写真',
            'ko': '풍경 사진, 건축 사진, 제품 사진'
        },
        visualEffect: {
            'zh-TW': '全域清晰、星芒效果、極大景深',
            'zh-CN': '全域清晰、星芒效果、极大景深',
            'en': 'Universal sharpness, starburst effect, extremely large depth of field',
            'ja': '全域シャープ、スターバースト効果、非常に大きな被写界深度',
            'ko': '전역 선명도, 스타버스트 효과, 매우 큰 피사계 심도'
        },
        description: {
            'zh-TW': '小光圈能創造極大的景深，確保畫面從前景到背景都保持清晰。f/11 與 f/16 在風景攝影中常用於需要全景清晰的場景。小光圈還能產生星芒效果，讓點光源（如路燈、太陽）呈現出放射狀光芒。但需注意，f/16 以上可能開始出現繞射現象，導致畫質下降。',
            'zh-CN': '小光圈能创造极大的景深，确保画面从前景到背景都保持清晰。f/11 与 f/16 在风景摄影中常用于需要全景清晰的场景。小光圈还能产生星芒效果，让点光源（如路灯、太阳）呈现出放射状光芒。但需注意，f/16 以上可能开始出现绕射现象，导致画质下降。',
            'en': 'Small apertures create extremely large depth of field, ensuring sharpness from foreground to background. f/11 and f/16 are commonly used in landscape photography for scenes requiring universal sharpness. Small apertures also produce starburst effects, making point light sources (such as street lamps, sun) display radial rays. However, note that above f/16, diffraction may begin to occur, leading to image quality degradation.',
            'ja': '小絞りは非常に大きな被写界深度を作り出し、前景から背景までシャープネスを確保します。f/11とf/16は、全域シャープネスが必要なシーンで風景写真でよく使用されます。小絞りはまた、点光源（街灯、太陽など）が放射状の光線を表示するスターバースト効果を生み出します。ただし、f/16以上では回折が発生し始め、画質が低下する可能性があることに注意してください。',
            'ko': '작은 조리개는 매우 큰 피사계 심도를 만들어 전경에서 배경까지 선명도를 보장합니다. f/11과 f/16은 전역 선명도가 필요한 장면에서 풍경 사진에서 일반적으로 사용됩니다. 작은 조리개는 또한 점광원(가로등, 태양 등)이 방사형 광선을 표시하는 스타버스트 효과를 생성합니다. 그러나 f/16 이상에서는 회절이 발생하기 시작하여 이미지 품질이 저하될 수 있음에 유의하십시오.'
        },
        pros: {
            'zh-TW': '景深極大、全景清晰、星芒效果、適合風景',
            'zh-CN': '景深极大、全景清晰、星芒效果、适合风景',
            'en': 'Extremely large depth of field, universal sharpness, starburst effect, suitable for landscapes',
            'ja': '非常に大きな被写界深度、全域シャープ、スターバースト効果、風景に適している',
            'ko': '매우 큰 피사계 심도, 전역 선명도, 스타버스트 효과, 풍경에 적합'
        },
        cons: {
            'zh-TW': '需長曝光、必需三腳架、繞射風險、低光不適用',
            'zh-CN': '需长曝光、必需三脚架、绕射风险、低光不适用',
            'en': 'Requires long exposure, tripod essential, diffraction risk, unsuitable for low light',
            'ja': '長時間露光が必要、三脚が不可欠、回折リスク、低照度には不向き',
            'ko': '긴 노출 필요, 삼각대 필수, 회절 위험, 저조도에 부적합'
        }
    },
    {
        id: 'ap7',
        aperture: 'f/22+',
        depthOfField: {
            'zh-TW': '極深',
            'zh-CN': '极深',
            'en': 'Extremely Deep',
            'ja': '非常に深い',
            'ko': '매우 깊음'
        },
        lightIntake: {
            'zh-TW': '極小',
            'zh-CN': '极小',
            'en': 'Extremely Small',
            'ja': '非常に小さい',
            'ko': '매우 작음'
        },
        commonUses: {
            'zh-TW': '建築攝影、微距攝影、特殊創意',
            'zh-CN': '建筑摄影、微距摄影、特殊创意',
            'en': 'Architectural photography, macro photography, special creative effects',
            'ja': '建築写真、マクロ写真、特殊なクリエイティブ効果',
            'ko': '건축 사진, 매크로 사진, 특수 창의적 효과'
        },
        visualEffect: {
            'zh-TW': '全域清晰、強烈星芒、繞射明顯',
            'zh-CN': '全域清晰、强烈星芒、绕射明显',
            'en': 'Universal sharpness, intense starburst, significant diffraction',
            'ja': '全域シャープ、強烈なスターバースト、顕著な回折',
            'ko': '전역 선명도, 강렬한 스타버스트, 뚜렷한 회절'
        },
        description: {
            'zh-TW': 'f/22 以上的極小光圈主要用於特殊需求。在微距攝影中，由於主體極近，景深極淺，需要縮小光圈來增加景深。建築攝影師有時也使用 f/22 來確保建築物從前到後都清晰。但這個光圈範圍會產生明顯的繞射現象，導致整體畫質下降，因此需謹慎使用。',
            'zh-CN': 'f/22 以上的极小光圈主要用于特殊需求。在微距摄影中，由于主体极近，景深极浅，需要缩小光圈来增加景深。建筑摄影师有时也使用 f/22 来确保建筑物从前到后都清晰。但这个光圈范围会产生明显的绕射现象，导致整体画质下降，因此需谨慎使用。',
            'en': 'Extremely small apertures above f/22 are mainly used for special requirements. In macro photography, due to extremely close subjects and very shallow depth of field, stopping down is needed to increase depth of field. Architectural photographers sometimes use f/22 to ensure buildings are sharp from front to back. However, this aperture range produces significant diffraction, leading to overall image quality degradation, so it should be used cautiously.',
            'ja': 'f/22以上の非常に小さい絞りは、主に特殊な要件に使用されます。マクロ写真では、被写体が非常に近く、被写界深度が非常に浅いため、被写界深度を増やすために絞り込む必要があります。建築写真家は、建物が前から後ろまでシャープであることを確保するためにf/22を使用することがあります。ただし、この絞り範囲は顕著な回折を生成し、全体的な画質の低下につながるため、慎重に使用する必要があります。',
            'ko': 'f/22 이상의 매우 작은 조리개는 주로 특수 요구 사항에 사용됩니다. 매크로 사진에서는 피사체가 매우 가깝고 피사계 심도가 매우 얕기 때문에 피사계 심도를 늘리기 위해 조이는 것이 필요합니다. 건축 사진가들은 때때로 건물이 앞에서 뒤까지 선명하도록 f/22를 사용합니다. 그러나 이 조리개 범위는 뚜렷한 회절을 생성하여 전체 이미지 품질 저하로 이어지므로 신중하게 사용해야 합니다.'
        },
        pros: {
            'zh-TW': '景深最大、微距適用、星芒極強',
            'zh-CN': '景深最大、微距适用、星芒极强',
            'en': 'Maximum depth of field, suitable for macro, extremely strong starburst',
            'ja': '最大の被写界深度、マクロに適している、非常に強いスターバースト',
            'ko': '최대 피사계 심도, 매크로에 적합, 매우 강한 스타버스트'
        },
        cons: {
            'zh-TW': '繞射嚴重、畫質下降、曝光時間極長、實用性低',
            'zh-CN': '绕射严重、画质下降、曝光时间极长、实用性低',
            'en': 'Severe diffraction, image quality degradation, extremely long exposure time, low practicality',
            'ja': '深刻な回折、画質の低下、非常に長い露光時間、低い実用性',
            'ko': '심각한 회절, 이미지 품질 저하, 매우 긴 노출 시간, 낮은 실용성'
        }
    }
];

export default apertureGuide;
