/**
 * 攝影技法辭典資料 (Multi-language Support)
 * 
 * 資料格式說明：
 * - id: 唯一識別碼
 * - term: 技法術語 (zh-TW, zh-CN, en, ja, ko)
 * - desc: 詳細說明 (zh-TW, zh-CN, en, ja, ko)
 * - category: 技術分類 (Optics, Exposure, Lighting, Composition, Time, Post-processing, Special)
 */

const techniquesData = [
    {
        id: 't1',
        term: {
            'zh-TW': "景深 (Depth of Field)",
            'zh-CN': "景深 (Depth of Field)",
            'en': "Depth of Field (DoF)",
            'ja': "被写界深度 (Depth of Field)",
            'ko': "피사체 심도 (Depth of Field)"
        },
        desc: {
            'zh-TW': "照片中清晰對焦的範圍。光圈越大（f值越小）、焦距越長、距離主體越近，景深越淺（背景模糊）。",
            'zh-CN': "照片中清晰对焦的范围。光圈越大（f值越小）、焦距越长、距离主体越近，景深越浅（背景模糊）。",
            'en': "The distance between the nearest and the furthest objects that are in acceptably sharp focus. Larger aperture, longer focal length, and closer distance decrease DoF.",
            'ja': "写真の中でピントが合っているように見える範囲のこと。絞りが大きいほど（f値が小さい）、焦点距離が長いほど、被写体に近づくほど、被写体深度は浅くなります（背景がボケる）。",
            'ko': "사진에서 초점이 맞아서 선명하게 보이는 범위. 조리개가 클수록(f값이 작을수록), 초점 거리가 길수록, 피사체와 가까울수록 심도가 얕아집니다(배경 흐림)."
        },
        category: "Optics",
        detailedExplanation: {
            'zh-TW': "**技術原理**\n\n景深是指在攝影中,照片中清晰對焦的範圍。它受到三個主要因素影響:\n\n1. **光圈大小(f值)**:光圈越大(f值越小,如f/1.4),景深越淺\n2. **焦距長度**:焦距越長(如200mm),景深越淺\n3. **拍攝距離**:距離主體越近,景深越淺\n\n**實際應用場景**\n\n• 人像攝影:使用f/1.4-f/2.8的大光圈,創造淺景深,突出主體並虛化背景\n• 風景攝影:使用f/8-f/16的小光圈,獲得深景深,確保前景到遠景都清晰\n• 產品攝影:根據產品大小調整光圈,確保整個產品都在景深範圍內\n• 街拍攝影:使用f/5.6-f/8,平衡景深與快門速度\n\n**參數設定建議**\n\n• 淺景深人像:50mm f/1.8, ISO 100, 快門 1/200s\n• 深景深風景:24mm f/11, ISO 100, 快門 1/60s(使用三腳架)\n• 街拍平衡:35mm f/5.6, ISO 400, 快門 1/250s\n\n**常見誤區**\n\n✗ 誤區:光圈越大畫質越好\n✓ 正解:每顆鏡頭都有最佳光圈值(通常在f/5.6-f/8),過大或過小都會影響畫質\n\n✗ 誤區:景深只能用光圈控制\n✓ 正解:焦距和拍攝距離同樣重要,三者需要綜合考慮\n\n✗ 誤區:淺景深一定比深景深好\n✓ 正解:根據拍攝主題選擇,風景需要深景深,人像需要淺景深",
            'zh-CN': "**技术原理**\n\n景深是指在摄影中,照片中清晰对焦的范围。它受到三个主要因素影响:\n\n1. **光圈大小(f值)**:光圈越大(f值越小,如f/1.4),景深越浅\n2. **焦距长度**:焦距越长(如200mm),景深越浅\n3. **拍摄距离**:距离主体越近,景深越浅\n\n**实际应用场景**\n\n• 人像摄影:使用f/1.4-f/2.8的大光圈,创造浅景深,突出主体并虚化背景\n• 风景摄影:使用f/8-f/16的小光圈,获得深景深,确保前景到远景都清晰\n• 产品摄影:根据产品大小调整光圈,确保整个产品都在景深范围内\n• 街拍摄影:使用f/5.6-f/8,平衡景深与快门速度\n\n**参数设定建议**\n\n• 浅景深人像:50mm f/1.8, ISO 100, 快门 1/200s\n• 深景深风景:24mm f/11, ISO 100, 快门 1/60s(使用三脚架)\n• 街拍平衡:35mm f/5.6, ISO 400, 快门 1/250s\n\n**常见误区**\n\n✗ 误区:光圈越大画质越好\n✓ 正解:每颗镜头都有最佳光圈值(通常在f/5.6-f/8),过大或过小都会影响画质\n\n✗ 误区:景深只能用光圈控制\n✓ 正解:焦距和拍摄距离同样重要,三者需要综合考虑\n\n✗ 误区:浅景深一定比深景深好\n✓ 正解:根据拍摄主题选择,风景需要深景深,人像需要浅景深",
            'en': "**Technical Principles**\n\nDepth of Field (DoF) refers to the range in a photograph where objects appear acceptably sharp. It is influenced by three main factors:\n\n1. **Aperture Size (f-number)**: Larger aperture (smaller f-number, e.g., f/1.4) creates shallower DoF\n2. **Focal Length**: Longer focal length (e.g., 200mm) creates shallower DoF\n3. **Subject Distance**: Closer distance to subject creates shallower DoF\n\n**Practical Applications**\n\n• Portrait Photography: Use large apertures f/1.4-f/2.8 to create shallow DoF, isolating subject with blurred background\n• Landscape Photography: Use small apertures f/8-f/16 for deep DoF, ensuring sharpness from foreground to background\n• Product Photography: Adjust aperture based on product size to ensure entire product is in focus\n• Street Photography: Use f/5.6-f/8 to balance DoF and shutter speed\n\n**Recommended Settings**\n\n• Shallow DoF Portrait: 50mm f/1.8, ISO 100, Shutter 1/200s\n• Deep DoF Landscape: 24mm f/11, ISO 100, Shutter 1/60s (use tripod)\n• Street Balance: 35mm f/5.6, ISO 400, Shutter 1/250s\n\n**Common Misconceptions**\n\n✗ Myth: Wider aperture always means better image quality\n✓ Truth: Every lens has an optimal aperture (usually f/5.6-f/8); too wide or too narrow affects quality\n\n✗ Myth: DoF can only be controlled by aperture\n✓ Truth: Focal length and shooting distance are equally important\n\n✗ Myth: Shallow DoF is always better than deep DoF\n✓ Truth: Choose based on subject - landscapes need deep DoF, portraits need shallow DoF",
            'ja': "**技術原理**\n\n被写界深度とは、写真の中でピントが合っているように見える範囲のことです。主に3つの要因に影響されます:\n\n1. **絞り値(f値)**:絞りが大きいほど(f値が小さい、例:f/1.4)、被写界深度は浅くなる\n2. **焦点距離**:焦点距離が長いほど(例:200mm)、被写界深度は浅くなる\n3. **撮影距離**:被写体に近づくほど、被写界深度は浅くなる\n\n**実際の応用シーン**\n\n• ポートレート撮影:f/1.4-f/2.8の大きな絞りを使用し、浅い被写界深度を作り、被写体を際立たせ背景をぼかす\n• 風景写真:f/8-f/16の小さな絞りを使用し、深い被写界深度を得て、前景から遠景まで鮮明に\n• 商品撮影:商品のサイズに応じて絞りを調整し、商品全体が被写界深度内に収まるようにする\n• ストリート撮影:f/5.6-f/8を使用し、被写界深度とシャッタースピードのバランスを取る\n\n**推奨設定**\n\n• 浅い被写界深度のポートレート:50mm f/1.8, ISO 100, シャッター 1/200s\n• 深い被写界深度の風景:24mm f/11, ISO 100, シャッター 1/60s(三脚使用)\n• ストリートバランス:35mm f/5.6, ISO 400, シャッター 1/250s\n\n**よくある誤解**\n\n✗ 誤解:絞りが大きいほど画質が良い\n✓ 真実:各レンズには最適な絞り値があり(通常f/5.6-f/8)、大きすぎても小さすぎても画質に影響する\n\n✗ 誤解:被写界深度は絞りでしか制御できない\n✓ 真実:焦点距離と撮影距離も同様に重要\n\n✗ 誤解:浅い被写界深度は常に深い被写界深度より良い\n✓ 真実:被写体に応じて選択 - 風景は深い被写界深度、ポートレートは浅い被写界深度が必要",
            'ko': "**기술 원리**\n\n피사계 심도는 사진에서 초점이 맞아 선명하게 보이는 범위를 말합니다. 주로 세 가지 요인의 영향을 받습니다:\n\n1. **조리개 크기(f값)**:조리개가 클수록(f값이 작을수록, 예:f/1.4), 피사계 심도가 얕아짐\n2. **초점 거리**:초점 거리가 길수록(예:200mm), 피사계 심도가 얕아짐\n3. **촬영 거리**:피사체에 가까울수록 피사계 심도가 얕아짐\n\n**실제 응용 장면**\n\n• 인물 사진:f/1.4-f/2.8의 큰 조리개를 사용하여 얕은 피사계 심도를 만들고 피사체를 돋보이게 하며 배경을 흐리게 함\n• 풍경 사진:f/8-f/16의 작은 조리개를 사용하여 깊은 피사계 심도를 얻고 전경에서 원경까지 선명하게 함\n• 제품 사진:제품 크기에 따라 조리개를 조정하여 전체 제품이 피사계 심도 내에 있도록 함\n• 거리 사진:f/5.6-f/8을 사용하여 피사계 심도와 셔터 속도의 균형을 맞춤\n\n**권장 설정**\n\n• 얕은 피사계 심도 인물:50mm f/1.8, ISO 100, 셔터 1/200s\n• 깊은 피사계 심도 풍경:24mm f/11, ISO 100, 셔터 1/60s(삼각대 사용)\n• 거리 균형:35mm f/5.6, ISO 400, 셔터 1/250s\n\n**일반적인 오해**\n\n✗ 오해:조리개가 클수록 화질이 좋다\n✓ 진실:각 렌즈에는 최적의 조리개 값이 있으며(보통 f/5.6-f/8), 너무 크거나 작으면 화질에 영향을 미침\n\n✗ 오해:피사계 심도는 조리개로만 제어할 수 있다\n✓ 진실:초점 거리와 촬영 거리도 똑같이 중요함\n\n✗ 오해:얕은 피사계 심도가 항상 깊은 피사계 심도보다 낫다\n✓ 진실:피사체에 따라 선택 - 풍경은 깊은 피사계 심도, 인물은 얕은 피사계 심도가 필요"
        }
    },
    {
        id: 't5',
        term: {
            'zh-TW': "散景 (Bokeh)",
            'zh-CN': "散景 (Bokeh)",
            'en': "Bokeh",
            'ja': "ボケ (Bokeh)",
            'ko': "보케 (Bokeh)"
        },
        desc: {
            'zh-TW': "源自日語，指照片中失焦部分的審美品質。優美的散景通常呈現圓形、柔和的光斑。",
            'zh-CN': "源自日语，指照片中失焦部分的审美品质。优美的散景通常呈现圆形、柔和的光斑。",
            'en': "The aesthetic quality of the blur produced in the out-of-focus parts of an image produced by a lens.",
            'ja': "日本語の「ボケ」に由来し、写真の焦点が合っていない部分の美的質感を指します。美しいボケは通常、丸く柔らかい光の粒として現れます。",
            'ko': "일본어에서 유래된 용어로, 사진에서 초점이 맞지 않은 부분의 미적 품질을 말합니다. 아름다운 보케는 보통 둥글고 부드러운 빛망울로 나타납니다."
        },
        category: "Optics",
        detailedExplanation: {
            'zh-TW': "**技術原理**\n\n散景(Bokeh)源自日語「ボケ」,指的是照片中失焦區域的美學品質。它不僅僅是模糊,更是一種藝術表現。散景的品質取決於:\n\n1. **鏡頭光圈葉片**:葉片數量越多(如9片),散景越圓潤\n2. **光圈形狀**:圓形光圈產生圓形散景,多邊形光圈產生多邊形散景\n3. **鏡頭設計**:球面像差、色散等光學特性影響散景質感\n\n**實際應用場景**\n\n• 人像攝影:利用大光圈創造柔美散景,突出人物主體\n• 夜景攝影:將遠處燈光虛化成夢幻光斑\n• 靜物攝影:用散景營造氛圍感和空間層次\n• 微距攝影:極淺景深產生奶油般柔滑的散景\n\n**如何獲得優美散景**\n\n• 使用大光圈鏡頭(f/1.4, f/1.8, f/2.8)\n• 選擇光圈葉片數量多的鏡頭\n• 拉開主體與背景的距離\n• 選擇有點光源的背景(如樹葉間的陽光、城市燈光)\n• 使用長焦鏡頭增強散景效果\n\n**常見誤區**\n\n✗ 誤區:散景就是背景模糊\n✓ 正解:散景強調的是模糊的「品質」,而非單純的模糊程度\n\n✗ 誤區:光圈越大散景越好\n✓ 正解:過大的光圈可能導致散景過於混亂,適度的光圈(f/2.8-f/4)有時更佳\n\n✗ 誤區:只有昂貴鏡頭才有好散景\n✓ 正解:許多平價定焦鏡(如50mm f/1.8)也能產生優美散景",
            'zh-CN': "**技术原理**\n\n散景(Bokeh)源自日语「ボケ」,指的是照片中失焦区域的美学品质。它不仅仅是模糊,更是一种艺术表现。散景的品质取决于:\n\n1. **镜头光圈叶片**:叶片数量越多(如9片),散景越圆润\n2. **光圈形状**:圆形光圈产生圆形散景,多边形光圈产生多边形散景\n3. **镜头设计**:球面像差、色散等光学特性影响散景质感\n\n**实际应用场景**\n\n• 人像摄影:利用大光圈创造柔美散景,突出人物主体\n• 夜景摄影:将远处灯光虚化成梦幻光斑\n• 静物摄影:用散景营造氛围感和空间层次\n• 微距摄影:极浅景深产生奶油般柔滑的散景\n\n**如何获得优美散景**\n\n• 使用大光圈镜头(f/1.4, f/1.8, f/2.8)\n• 选择光圈叶片数量多的镜头\n• 拉开主体与背景的距离\n• 选择有点光源的背景(如树叶间的阳光、城市灯光)\n• 使用长焦镜头增强散景效果\n\n**常见误区**\n\n✗ 误区:散景就是背景模糊\n✓ 正解:散景强调的是模糊的「品质」,而非单纯的模糊程度\n\n✗ 误区:光圈越大散景越好\n✓ 正解:过大的光圈可能导致散景过于混乱,适度的光圈(f/2.8-f/4)有时更佳\n\n✗ 误区:只有昂贵镜头才有好散景\n✓ 正解:许多平价定焦镜(如50mm f/1.8)也能产生优美散景",
            'en': "**Technical Principles**\n\nBokeh originates from the Japanese word「ボケ」, referring to the aesthetic quality of the out-of-focus areas in a photograph. It's not just blur, but an artistic expression. Bokeh quality depends on:\n\n1. **Aperture Blades**: More blades (e.g., 9) create rounder bokeh\n2. **Aperture Shape**: Circular apertures produce circular bokeh, polygonal apertures produce polygonal bokeh\n3. **Lens Design**: Spherical aberration, chromatic dispersion affect bokeh texture\n\n**Practical Applications**\n\n• Portrait Photography: Use wide apertures to create smooth bokeh, highlighting the subject\n• Night Photography: Transform distant lights into dreamy light orbs\n• Still Life Photography: Use bokeh to create atmosphere and spatial depth\n• Macro Photography: Ultra-shallow DoF produces creamy smooth bokeh\n\n**How to Achieve Beautiful Bokeh**\n\n• Use wide aperture lenses (f/1.4, f/1.8, f/2.8)\n• Choose lenses with more aperture blades\n• Increase distance between subject and background\n• Select backgrounds with point light sources (sunlight through leaves, city lights)\n• Use telephoto lenses to enhance bokeh effect\n\n**Common Misconceptions**\n\n✗ Myth: Bokeh is just background blur\n✓ Truth: Bokeh emphasizes the 'quality' of blur, not just the degree of blur\n\n✗ Myth: Wider aperture always means better bokeh\n✓ Truth: Extremely wide apertures may create chaotic bokeh; moderate apertures (f/2.8-f/4) sometimes work better\n\n✗ Myth: Only expensive lenses produce good bokeh\n✓ Truth: Many affordable prime lenses (like 50mm f/1.8) can produce beautiful bokeh",
            'ja': "**技術原理**\n\nボケは日本語の「ボケ」に由来し、写真の焦点が合っていない部分の美的質感を指します。単なるぼやけではなく、芸術的な表現です。ボケの品質は以下に依存します:\n\n1. **絞り羽根**:羽根の数が多いほど(例:9枚)、ボケが丸くなる\n2. **絞りの形状**:円形絞りは円形のボケを、多角形絞りは多角形のボケを生成\n3. **レンズ設計**:球面収差、色収差などの光学特性がボケの質感に影響\n\n**実際の応用シーン**\n\n• ポートレート撮影:大きな絞りを使用して柔らかいボケを作り、被写体を際立たせる\n• 夜景撮影:遠くの光を夢のような光の粒に変える\n• 静物撮影:ボケを使って雰囲気と空間の深さを作る\n• マクロ撮影:極めて浅い被写界深度でクリーミーで滑らかなボケを生成\n\n**美しいボケを得る方法**\n\n• 大口径レンズを使用(f/1.4, f/1.8, f/2.8)\n• 絞り羽根の数が多いレンズを選択\n• 被写体と背景の距離を広げる\n• 点光源のある背景を選択(木の葉の間の日光、都市の光)\n• 望遠レンズを使用してボケ効果を強化\n\n**よくある誤解**\n\n✗ 誤解:ボケは単なる背景のぼやけ\n✓ 真実:ボケはぼやけの「品質」を強調し、単なるぼやけの程度ではない\n\n✗ 誤解:絞りが大きいほどボケが良い\n✓ 真実:極端に大きな絞りは混沌としたボケを生む可能性があり、適度な絞り(f/2.8-f/4)の方が良い場合もある\n\n✗ 誤解:高価なレンズだけが良いボケを生む\n✓ 真実:多くの手頃な単焦点レンズ(50mm f/1.8など)も美しいボケを生成できる",
            'ko': "**기술 원리**\n\n보케는 일본어「ボケ」에서 유래하며, 사진에서 초점이 맞지 않은 영역의 미적 품질을 말합니다. 단순한 흐림이 아니라 예술적 표현입니다. 보케 품질은 다음에 따라 달라집니다:\n\n1. **조리개 날개**:날개 수가 많을수록(예:9개), 보케가 더 둥글어짐\n2. **조리개 모양**:원형 조리개는 원형 보케를, 다각형 조리개는 다각형 보케를 생성\n3. **렌즈 설계**:구면 수차, 색수차 등 광학 특성이 보케 질감에 영향\n\n**실제 응용 장면**\n\n• 인물 사진:큰 조리개를 사용하여 부드러운 보케를 만들고 피사체를 돋보이게 함\n• 야경 사진:먼 곳의 빛을 꿈같은 빛망울로 변환\n• 정물 사진:보케를 사용하여 분위기와 공간 깊이 조성\n• 매크로 사진:극도로 얕은 피사계 심도로 크리미하고 부드러운 보케 생성\n\n**아름다운 보케를 얻는 방법**\n\n• 대구경 렌즈 사용(f/1.4, f/1.8, f/2.8)\n• 조리개 날개 수가 많은 렌즈 선택\n• 피사체와 배경 사이의 거리 늘리기\n• 점광원이 있는 배경 선택(나뭇잎 사이의 햇빛, 도시 조명)\n• 망원 렌즈를 사용하여 보케 효과 강화\n\n**일반적인 오해**\n\n✗ 오해:보케는 단순한 배경 흐림\n✓ 진실:보케는 흐림의 '품질'을 강조하며 단순한 흐림 정도가 아님\n\n✗ 오해:조리개가 클수록 보케가 좋다\n✓ 진실:극단적으로 큰 조리개는 혼란스러운 보케를 만들 수 있으며 적당한 조리개(f/2.8-f/4)가 더 나을 수 있음\n\n✗ 오해:비싼 렌즈만 좋은 보케를 만든다\n✓ 진실:많은 저렴한 단렌즈(50mm f/1.8 등)도 아름다운 보케를 생성할 수 있음"
        }
    },
    {
        id: 't7',
        term: {
            'zh-TW': "焦距 (Focal Length)",
            'zh-CN': "焦距 (Focal Length)",
            'en': "Focal Length",
            'ja': "焦点距離 (Focal Length)",
            'ko': "초점 거리 (Focal Length)"
        },
        desc: {
            'zh-TW': "鏡頭中心到感光元件的距離。焦距決定了視角（廣角或長焦）以及主體的放大倍率。",
            'zh-CN': "镜头中心到感光元件的距离。焦距决定了视角（广角或长焦）以及主體的放大倍率。",
            'en': "The distance between the lens and the image sensor when the subject is in focus. It determines the angle of view and magnification.",
            'ja': "レンズの中心から撮像素子までの距離。焦点距離によって画角（広角か望遠か）と被写体の倍率が決まります。",
            'ko': "렌즈의 중심에서 이미지 센서까지의 거리. 초점 거리에 따라 화각(광각 또는 망원)과 피사체의 확대 배율이 결정됩니다."
        },
        category: "Optics",
        detailedExplanation: {
            'zh-TW': "**技術原理**\n\n焦距是鏡頭光學中心到感光元件(底片或感光器)的距離,以毫米(mm)為單位。它直接影響:\n\n1. **視角範圍**:焦距越短,視角越廣;焦距越長,視角越窄\n2. **放大倍率**:焦距越長,主體放大倍率越高\n3. **透視感**:不同焦距會改變空間壓縮感和透視關係\n\n**焦距分類與應用**\n\n• **超廣角(12-24mm)**:極寬視角,誇張透視,適合建築、室內、星空攝影\n• **廣角(24-35mm)**:寬廣視角,適合風景、街拍、環境人像\n• **標準(35-70mm)**:接近人眼視角,適合街拍、紀實、日常攝影\n• **中焦(70-135mm)**:壓縮透視,適合人像、產品攝影\n• **長焦(135-300mm)**:強烈壓縮感,適合運動、野生動物、遠距人像\n• **超長焦(300mm+)**:極致壓縮,適合野生動物、天文、體育攝影\n\n**焦距對創作的影響**\n\n• 廣角:誇大空間感,前景突出,適合表現宏大場景\n• 標準:自然透視,接近人眼所見,適合紀實風格\n• 長焦:壓縮空間,背景虛化,適合突出主體\n\n**常見誤區**\n\n✗ 誤區:焦距越長越好\n✓ 正解:不同焦距各有用途,應根據拍攝主題選擇\n\n✗ 誤區:廣角鏡頭會變形\n✓ 正解:透視變形是由拍攝距離造成,非焦距本身問題\n\n✗ 誤區:定焦鏡頭不如變焦鏡頭方便\n✓ 正解:定焦鏡頭通常光圈更大、畫質更好,各有優勢",
            'zh-CN': "**技术原理**\n\n焦距是镜头光学中心到感光元件(底片或感光器)的距离,以毫米(mm)为单位。它直接影响:\n\n1. **视角范围**:焦距越短,视角越广;焦距越长,视角越窄\n2. **放大倍率**:焦距越长,主体放大倍率越高\n3. **透视感**:不同焦距会改变空间压缩感和透视关系\n\n**焦距分类与应用**\n\n• **超广角(12-24mm)**:极宽视角,夸张透视,适合建筑、室内、星空摄影\n• **广角(24-35mm)**:宽广视角,适合风景、街拍、环境人像\n• **标准(35-70mm)**:接近人眼视角,适合街拍、纪实、日常摄影\n• **中焦(70-135mm)**:压缩透视,适合人像、产品摄影\n• **长焦(135-300mm)**:强烈压缩感,适合运动、野生动物、远距人像\n• **超长焦(300mm+)**:极致压缩,适合野生动物、天文、体育摄影\n\n**焦距对创作的影响**\n\n• 广角:夸大空间感,前景突出,适合表现宏大场景\n• 标准:自然透视,接近人眼所见,适合纪实风格\n• 长焦:压缩空间,背景虚化,适合突出主体\n\n**常见误区**\n\n✗ 误区:焦距越长越好\n✓ 正解:不同焦距各有用途,应根据拍摄主题选择\n\n✗ 误区:广角镜头会变形\n✓ 正解:透视变形是由拍摄距离造成,非焦距本身问题\n\n✗ 误区:定焦镜头不如变焦镜头方便\n✓ 正解:定焦镜头通常光圈更大、画质更好,各有优势",
            'en': "**Technical Principles**\n\nFocal length is the distance from the optical center of a lens to the image sensor (film or sensor), measured in millimeters (mm). It directly affects:\n\n1. **Angle of View**: Shorter focal length = wider angle; longer focal length = narrower angle\n2. **Magnification**: Longer focal length = higher subject magnification\n3. **Perspective**: Different focal lengths alter spatial compression and perspective relationships\n\n**Focal Length Categories & Applications**\n\n• **Ultra-Wide (12-24mm)**: Extremely wide angle, exaggerated perspective, ideal for architecture, interiors, astrophotography\n• **Wide Angle (24-35mm)**: Broad view, suitable for landscapes, street photography, environmental portraits\n• **Standard (35-70mm)**: Close to human eye perspective, ideal for street, documentary, everyday photography\n• **Medium Telephoto (70-135mm)**: Compressed perspective, suitable for portraits, product photography\n• **Telephoto (135-300mm)**: Strong compression, ideal for sports, wildlife, distant portraits\n• **Super Telephoto (300mm+)**: Extreme compression, suitable for wildlife, astronomy, sports photography\n\n**Impact of Focal Length on Creativity**\n\n• Wide Angle: Exaggerates spatial sense, emphasizes foreground, ideal for grand scenes\n• Standard: Natural perspective, close to human vision, suitable for documentary style\n• Telephoto: Compresses space, blurs background, ideal for isolating subjects\n\n**Common Misconceptions**\n\n✗ Myth: Longer focal length is always better\n✓ Truth: Different focal lengths serve different purposes; choose based on subject\n\n✗ Myth: Wide-angle lenses cause distortion\n✓ Truth: Perspective distortion is caused by shooting distance, not focal length itself\n\n✗ Myth: Prime lenses are less convenient than zoom lenses\n✓ Truth: Prime lenses typically offer wider apertures and better image quality; each has advantages",
            'ja': "**技術原理**\n\n焦点距離はレンズの光学中心から撮像素子(フィルムまたはセンサー)までの距離で、ミリメートル(mm)で測定されます。これは直接影響します:\n\n1. **画角範囲**:焦点距離が短いほど画角が広く、長いほど画角が狭い\n2. **倍率**:焦点距離が長いほど被写体の拡大倍率が高い\n3. **遠近感**:異なる焦点距離は空間圧縮感と遠近関係を変える\n\n**焦点距離の分類と応用**\n\n• **超広角(12-24mm)**:極めて広い画角、誇張された遠近感、建築、室内、星空撮影に適している\n• **広角(24-35mm)**:広い視野、風景、ストリート、環境ポートレートに適している\n• **標準(35-70mm)**:人間の目の視野に近い、ストリート、ドキュメンタリー、日常撮影に適している\n• **中望遠(70-135mm)**:圧縮された遠近感、ポートレート、商品撮影に適している\n• **望遠(135-300mm)**:強い圧縮感、スポーツ、野生動物、遠距離ポートレートに適している\n• **超望遠(300mm+)**:極端な圧縮、野生動物、天文、スポーツ撮影に適している\n\n**焦点距離が創作に与える影響**\n\n• 広角:空間感を誇張し、前景を強調し、壮大なシーンの表現に適している\n• 標準:自然な遠近感、人間の視覚に近い、ドキュメンタリースタイルに適している\n• 望遠:空間を圧縮し、背景をぼかし、被写体を際立たせるのに適している\n\n**よくある誤解**\n\n✗ 誤解:焦点距離が長いほど良い\n✓ 真実:異なる焦点距離にはそれぞれの用途があり、被写体に基づいて選択すべき\n\n✗ 誤解:広角レンズは歪みを引き起こす\n✓ 真実:遠近の歪みは撮影距離によって引き起こされ、焦点距離自体の問題ではない\n\n✗ 誤解:単焦点レンズはズームレンズより不便\n✓ 真実:単焦点レンズは通常より大きな絞りとより良い画質を提供し、それぞれに利点がある",
            'ko': "**기술 원리**\n\n초점 거리는 렌즈의 광학 중심에서 이미지 센서(필름 또는 센서)까지의 거리로 밀리미터(mm)로 측정됩니다. 이것은 직접 영향을 미칩니다:\n\n1. **화각 범위**:초점 거리가 짧을수록 화각이 넓고, 길수록 화각이 좁음\n2. **배율**:초점 거리가 길수록 피사체 확대 배율이 높음\n3. **원근감**:다른 초점 거리는 공간 압축감과 원근 관계를 변경\n\n**초점 거리 분류 및 응용**\n\n• **초광각(12-24mm)**:극도로 넓은 화각, 과장된 원근감, 건축, 실내, 별 사진에 적합\n• **광각(24-35mm)**:넓은 시야, 풍경, 거리 사진, 환경 인물에 적합\n• **표준(35-70mm)**:인간의 눈 시야에 가까움, 거리, 다큐멘터리, 일상 사진에 적합\n• **중망원(70-135mm)**:압축된 원근감, 인물, 제품 사진에 적합\n• **망원(135-300mm)**:강한 압축감, 스포츠, 야생 동물, 원거리 인물에 적합\n• **초망원(300mm+)**:극단적 압축, 야생 동물, 천문, 스포츠 사진에 적합\n\n**초점 거리가 창작에 미치는 영향**\n\n• 광각:공간감을 과장하고 전경을 강조하며 웅장한 장면 표현에 적합\n• 표준:자연스러운 원근감, 인간의 시각에 가까움, 다큐멘터리 스타일에 적합\n• 망원:공간을 압축하고 배경을 흐리게 하며 피사체를 돋보이게 하는 데 적합\n\n**일반적인 오해**\n\n✗ 오해:초점 거리가 길수록 좋다\n✓ 진실:다른 초점 거리는 각각의 용도가 있으며 피사체에 따라 선택해야 함\n\n✗ 오해:광각 렌즈는 왜곡을 일으킨다\n✓ 진실:원근 왜곡은 촬영 거리에 의해 발생하며 초점 거리 자체의 문제가 아님\n\n✗ 오해:단렌즈는 줌 렌즈보다 불편하다\n✓ 진실:단렌즈는 일반적으로 더 큰 조리개와 더 나은 화질을 제공하며 각각 장점이 있음"
        }
    },
    {
        id: 't4',
        term: {
            'zh-TW': "分區曝光法 (Zone System)",
            'zh-CN': "分区曝光法 (Zone System)",
            'en': "Zone System",
            'ja': "ゾーンシステム (Zone System)",
            'ko': "존 시스템 (Zone System)"
        },
        desc: {
            'zh-TW': "由安塞爾·亞當斯發明，將照片從全黑（0區）到全白（10區）分為11個區域，以科學方式控制曝光與顯影，獲得最完美的色調範圍。",
            'zh-CN': "由安塞尔·亚当斯发明，将照片从全黑（0区）到全白（10区）分为11个区域，以科学方式控制曝光与显影，获得最完美的色调范围。",
            'en': "Formulated by Ansel Adams. A technique for determining optimal film exposure and development to visualize the values from pure black (Zone 0) to pure white (Zone 10).",
            'ja': "アンセル・アダムスによって考案された、露出と現像を科学的に制御して完璧な諧調を得るための手法。完全な黒から白までを11のゾーンに分けます。",
            'ko': "안셀 아담스가 고안한 기술로, 사진을 완전한 검은색(0구역)부터 완전한 흰색(10구역)까지 11개 구역으로 나누어 노출과 현상을 과학적으로 제어하는 방법입니다."
        },
        category: "Exposure"
    },
    {
        id: 't8',
        term: {
            'zh-TW': "曝光三角 (Exposure Triangle)",
            'zh-CN': "曝光三角 (Exposure Triangle)",
            'en': "Exposure Triangle",
            'ja': "露出の三角形 (Exposure Triangle)",
            'ko': "노출 삼각형 (Exposure Triangle)"
        },
        desc: {
            'zh-TW': "光圈、快門速度與 ISO 感光度之間的平衡關係。這三者共同決定了照片的曝光總量。",
            'zh-CN': "光圈、快门速度与 ISO 感光度之间的平衡关系。这三者共同決定了照片的曝光总量。",
            'en': "The balance between Aperture, Shutter Speed, and ISO. These three elements work together to determine the overall exposure of an image.",
            'ja': "絞り、シャッタースピード、ISO感度のバランス関係。これら3つの要素が組み合わさって、写真の明るさ（露出）が決まります。",
            'ko': "조리개, 셔터 스피드, ISO 감도 사이의 균형 관계. 이 세 가지 요소가 함께 사진의 전체 노출량을 결정합니다."
        },
        category: "Exposure"
    },
    {
        id: 't9',
        term: {
            'zh-TW': "動態範圍 (Dynamic Range)",
            'zh-CN': "动态范围 (Dynamic Range)",
            'en': "Dynamic Range",
            'ja': "ダイナミックレンジ (Dynamic Range)",
            'ko': "다이내믹 레인지 (Dynamic Range)"
        },
        desc: {
            'zh-TW': "相機能捕捉到最亮（高光）與最暗（陰影）部分的細節能力。動態範圍越大，細節保留越完整。",
            'zh-CN': "相机能捕捉到最亮（高光）与最暗（阴影）部分细节的能力。动态范围越大，细节保留越完整。",
            'en': "The ability of a sensor to capture details in both the brightest (highlights) and darkest (shadows) parts of a scene.",
            'ja': "カメラが最も明るい部分（ハイライト）から最も暗い部分（シャドウ）までの詳細を捉える能力。この範囲が広いほど、白飛びや黒潰れが少なくなります。",
            'ko': "카메라가 가장 밝은 부분(하이라이트)과 가장 어두운 부분(섀도우)의 디테일을 포착할 수 있는 능력. 다이내믹 레인지가 넓을수록 디테일이 더 잘 보존됩니다."
        },
        category: "Exposure"
    },
    {
        id: 't6',
        term: {
            'zh-TW': "黃金時刻 (Golden Hour)",
            'zh-CN': "黄金时刻 (Golden Hour)",
            'en': "Golden Hour",
            'ja': "ゴールデンアワー (Golden Hour)",
            'ko': "골든 아워 (Golden Hour)"
        },
        desc: {
            'zh-TW': "日出後或日落前的一小段時間，光線柔和、溫暖、角度低，被認為是拍攝風景與人像的最佳時機。",
            'zh-CN': "日出后或日落前的一小段时间，光线柔和、温暖、角度低，被认为是拍摄风景与人像的最佳时机。",
            'en': "The period shortly after sunrise or before sunset during which daylight is redder and softer than when the Sun is higher in the sky.",
            'ja': "日の出直後や日の入り前の、光が柔らかく暖かみがあり、太陽の角度が低い時間帯。風景やポートレート撮影に最適とされています。",
            'ko': "일출 직후나 일몰 직전의 짧은 시간 동안, 빛이 부드럽고 따뜻하며 각도가 낮아 풍경과 인물 사진을 촬영하기에 가장 좋은 시기로 간주됩니다."
        },
        category: "Lighting"
    },
    {
        id: 't10',
        term: {
            'zh-TW': "藍調時刻 (Blue Hour)",
            'zh-CN': "蓝调时刻 (Blue Hour)",
            'en': "Blue Hour",
            'ja': "ブルーアワー (Blue Hour)",
            'ko': "블루 아워 (Blue Hour)"
        },
        desc: {
            'zh-TW': "日出前或日落後，太陽在地平線下的一段時間。天空呈現深藍色，非常適合拍攝城市夜景與氛圍感人像。",
            'zh-CN': "日出前或日落后，太阳在地平线下的一段时间。天空呈现深蓝色，非常适合拍摄城市夜景与氛围感人像。",
            'en': "The window of time before sunrise or after sunset when the sun is below the horizon. The sky takes on a deep blue hue, ideal for cityscapes and atmospheric portraits.",
            'ja': "日の出前や日の入り後の、太陽が地平線下にある時間帯。空が深い青色に染まり、都市の夜景や雰囲気のあるポートレート撮影に適しています。",
            'ko': "일출 전이나 일몰 후, 태양이 지평선 아래에 있는 시간대. 하늘이 짙은 푸른색을 띠어 도시 야경과 분위기 있는 인물 사진 촬영에 매우 적합합니다."
        },
        category: "Lighting"
    },
    {
        id: 't11',
        term: {
            'zh-TW': "倫勃朗光 (Rembrandt Lighting)",
            'zh-CN': "伦勃朗光 (Rembrandt Lighting)",
            'en': "Rembrandt Lighting",
            'ja': "レンブラントライティング (Rembrandt Lighting)",
            'ko': "렘브란트 라이팅 (Rembrandt Lighting)"
        },
        desc: {
            'zh-TW': "一種經典的人像採光技術，其特徵是在主體面部較暗的一側，眼睛下方形成一個三角形的光影區。",
            'zh-CN': "一种经典的人像采光技术，其特征是在主体面部较暗的一侧，眼睛下方形成一個三角形的光影区。",
            'en': "A classic lighting technique characterized by an illuminated triangle on the shadow side of the subject's face, under the eye.",
            'ja': "古典的なポートレート照明技法。顔の影になる側の目の下に、光の三角形ができるのが特徴です。画家レンブラントの表現にちなんでいます。",
            'ko': "고전적인 인물 조명 기술로, 피사체 얼굴의 어두운 쪽 눈 아래에 삼각형의 빛 영역이 형성되는 것이 특징입니다."
        },
        category: "Lighting"
    },
    {
        id: 't12',
        term: {
            'zh-TW': "三分法 (Rule of Thirds)",
            'zh-CN': "三分法 (Rule of Thirds)",
            'en': "Rule of Thirds",
            'ja': "三分割法 (Rule of Thirds)",
            'ko': "3분할 법칙 (Rule of Thirds)"
        },
        desc: {
            'zh-TW': "將畫面用四條線分成九宮格，將主體放在交叉點或線上，使構圖更具動感、更有吸引力。",
            'zh-CN': "将画面用四条线分成九宫格，将主体放在交叉点或线上，使构图更具动感、更有吸引力。",
            'en': "A composition rule that divides the frame into a 3x3 grid. Placing the subject at the intersections or along the lines creates a more dynamic and engaging image.",
            'ja': "画面をタテ・ヨコに三等分する4本の線を引き、その交点や線の上に被写体を配置する構図法。より動的で魅力的な構図になります。",
            'ko': "화면을 가로세로 세 칸씩 나누는 선을 긋고, 그 교차점이나 선 위에 피사체를 배치하여 구도에 역동성과 안정감을 주는 방법입니다."
        },
        category: "Composition"
    },
    {
        id: 't13',
        term: {
            'zh-TW': "引導線 (Leading Lines)",
            'zh-CN': "引导线 (Leading Lines)",
            'en': "Leading Lines",
            'ja': "リーディングライン (Leading Lines)",
            'ko': "인도선 (Leading Lines)"
        },
        desc: {
            'zh-TW': "利用場景中的線條（如道路、圍欄、河流）引導觀眾的視線看向主體或畫面的深處。",
            'zh-CN': "利用场景中的线条（如道路、围栏、河流）引导观众的视线看向主体或画面的深处。",
            'en': "Using natural lines in the scene (roads, fences, rivers) to direct the viewer's eye toward the subject or deeper into the frame.",
            'ja': "道、フェンス、川など、風景の中にある線を利用して、見る人の視線を被写体や画面の奥へと誘導する手法です。",
            'ko': "도로, 울타리, 강 등 장면 내의 선을 활용하여 관객의 시선을 피사체나 화면 깊숙한 곳으로 유도하는 기술입니다."
        },
        category: "Composition"
    },
    {
        id: 't14',
        term: {
            'zh-TW': "負空間 (Negative Space)",
            'zh-CN': "负空间 (Negative Space)",
            'en': "Negative Space",
            'ja': "ネガティブスペース (Negative Space)",
            'ko': "여백의 미 / 네거티브 스페이스 (Negative Space)"
        },
        desc: {
            'zh-TW': "主體周圍的空白區域。巧妙運用負空間可以突出主體，營造簡約、孤獨或宏大的氛圍。",
            'zh-CN': "主体周围的空白区域。巧妙运用负空间可以突出主体，营造简约、孤独或宏大的氛围。",
            'en': "The empty area around the main subject. Effective use of negative space emphasizes the subject and creates a minimalist or vast atmosphere.",
            'ja': "被写体の周囲にある空白部分のこと。あえて余白を広く取ることで、被写体を際立たせ、ミニマルさや孤独感、壮大さを演出できます。",
            'ko': "피사체 주변의 빈 공간. 여백을 효과적으로 활용하면 피사체를 돋보이게 하고 미니멀함, 고독함 또는 장엄한 분위기를 조성할 수 있습니다."
        },
        category: "Composition"
    },
    {
        id: 't2',
        term: {
            'zh-TW': "縮時攝影 (Time-lapse)",
            'zh-CN': "延时摄影 (Time-lapse)",
            'en': "Time-lapse",
            'ja': "タイムラプス (Time-lapse)",
            'ko': "타임랩스 (Time-lapse)"
        },
        desc: {
            'zh-TW': "以低幀率拍攝一系列照片，然後以正常速度播放，使時間看起來在快速流逝的技術。常用於拍攝雲彩移動、花開、城市車流。",
            'zh-CN': "以低帧率拍摄一系列照片，然后以正常速度播放，使时间看起来在快速流逝的技术。常用于拍摄云彩移动、花开、城市车流。",
            'en': "A technique where frequency at which film frames are captured is lower than that used to view the sequence. When played at normal speed, time appears to be moving faster.",
            'ja': "低いフレームレートで一定間隔おきに撮影した写真を繋ぎ合わせ、通常速度で再生する手法。雲の流れや花の開花などの時間を凝縮して表現します。",
            'ko': "일정한 간격으로 촬영한 사진들을 연결하여 정상 속도로 재생함으로써 시간이 매우 빠르게 흐르는 것처럼 보이게 하는 기술입니다."
        },
        category: "Time"
    },
    {
        id: 't15',
        term: {
            'zh-TW': "追焦 (Panning)",
            'zh-CN': "追焦 (Panning)",
            'en': "Panning",
            'ja': "流し撮り (Panning)",
            'ko': "패닝 (Panning)"
        },
        desc: {
            'zh-TW': "追隨移動主體並使用較慢快門速度拍攝。使主體清晰而背景呈現動態模糊，表現速度感。",
            'zh-CN': "追随移动主体并使用较慢快门速度拍摄。使主体清晰而背景呈现动态模糊，表现速度感。",
            'en': "Moving the camera in synchronization with a moving subject to create a sharp subject against a blurred background, conveying a sense of speed.",
            'ja': "動く被写体に合わせてカメラを動かしながら、遅めのシャッタースピードで撮影する手法。被写体は止まり、背景が流れることで躍動感を表現します。",
            'ko': "움직이는 피사체에 맞춰 카메라를 수평으로 휘두르며 느린 셔터 스피드로 촬영하여, 피사체는 선명하고 배경은 흐리게 처리해 속도감을 강조하는 기술입니다."
        },
        category: "Time"
    },
    {
        id: 't3',
        term: {
            'zh-TW': "慢動作 (Slow Motion)",
            'zh-CN': "慢动作 (Slow Motion)",
            'en': "Slow Motion",
            'ja': "スローモーション (Slow Motion)",
            'ko': "슬로 모션 (Slow Motion)"
        },
        desc: {
            'zh-TW': "以高幀率（如 60fps, 120fps, 240fps）拍攝，並以正常速度（24fps 或 30fps）播放，展現動作細節。",
            'zh-CN': "以高帧率（如 60fps, 120fps, 240fps）拍摄，并以正常速度（24fps 或 30fps）播放，展现动作细节。",
            'en': "Capturing video at a high frame rate and playing it back at a standard rate to reveal details of movement invisible to the naked eye.",
            'ja': "高いフレームレート（通常より多いコマ数）で撮影し、通常の速度で再生することで、動きをゆっくりと見せる手法です。",
            'ko': "높은 프레임 레이트로 촬영한 후 정상 속도로 재생하여 육안으로는 보기 힘든 움직임의 세부 사항을 보여주는 기술입니다."
        },
        category: "Time"
    },
    {
        id: 't16',
        term: {
            'zh-TW': "HDR 合成 (High Dynamic Range)",
            'zh-CN': "HDR 合成 (High Dynamic Range)",
            'en': "High Dynamic Range",
            'ja': "HDR合成 (High Dynamic Range)",
            'ko': "HDR 합성 (High Dynamic Range)"
        },
        desc: {
            'zh-TW': "結合多張不同曝光程度的照片，以展現出場景中從最暗到最亮區域的所有細節。",
            'zh-CN': "结合多张不同曝光程度的照片，以展现场景中从最暗到最亮区域的所有细节。",
            'en': "Combining multiple images taken at different exposures to represent a greater range of luminosity than what is possible with a single capture.",
            'ja': "露出を変えて撮影した複数の枚の写真を合成することで、暗い部分から明るい部分まで白飛びや黒潰れなく詳細に表現する技術です。",
            'ko': "노출이 다른 여러 장의 사진을 결합하여 장면의 가장 어두운 부분부터 가장 밝은 부분까지 모든 디테일을 표현하는 기술입니다."
        },
        category: "Post-processing"
    },
    {
        id: 't17',
        term: {
            'zh-TW': "色彩分級 (Color Grading)",
            'zh-CN': "色彩分级 (Color Grading)",
            'en': "Color Grading",
            'ja': "カラーグレーディング (Color Grading)",
            'ko': "컬러 그레이딩 (Color Grading)"
        },
        desc: {
            'zh-TW': "在後製中調整照片的色調、飽和度與對比度，以賦予影像特定的氛圍或電影感。",
            'zh-CN': "在后制中调整照片的色调、饱和度与对比度，以赋予影像特定的氛围或电影感。",
            'en': "The process of altering and enhancing the color of an image to create a specific mood or cinematic look.",
            'ja': "編集工程で色調や彩度、コントラストを調整し、映像に特定の雰囲気や映画のような質感を与える作業のことです。",
            'ko': "후보정 단계에서 사진의 색조, 채도, 대비를 조정하여 영상에 특정한 분위기나 영화 같은 느낌을 부여하는 과정입니다."
        },
        category: "Post-processing"
    },
    {
        id: 't18',
        term: {
            'zh-TW': "多重曝光 (Multiple Exposure)",
            'zh-CN': "多重曝光 (Multiple Exposure)",
            'en': "Multiple Exposure",
            'ja': "多重露光 (Multiple Exposure)",
            'ko': "다중 노출 (Multiple Exposure)"
        },
        desc: {
            'zh-TW': "將兩次或多次曝光重疊在同一張照片中，創造出超現實或意境深遠的藝術效果。",
            'zh-CN': "将两次或多次曝光重叠在同一张照片中，创造出超现实或意境深远的艺术效果。",
            'en': "Superimposing two or more single exposures to create a single image, often resulting in surreal or artistic effects.",
            'ja': "1枚の写真に複数の画像を重ね合わせる手法。現実にはありえない幻想的な表現や、深みのあるアート作品を作ることができます。",
            'ko': "두 번 이상의 노출을 하나의 사진에 겹쳐서 초현실적이거나 예술적인 효과를 만들어내는 기술입니다."
        },
        category: "Special"
    },
    {
        id: 't19',
        term: {
            'zh-TW': "微距攝影 (Macro Photography)",
            'zh-CN': "微距摄影 (Macro Photography)",
            'en': "Macro Photography",
            'ja': "接写 / マクロ撮影 (Macro Photography)",
            'ko': "접사 / 매크로 사진 (Macro Photography)"
        },
        desc: {
            'zh-TW': "拍攝極小的主體，使其在相片中呈現出與實物相等或更大的比例，展現肉眼難見的微觀細節。",
            'zh-CN': "拍摄极小的主体，使其在相片中呈现出与实物相等或更大的比例，展现肉眼难见的微观细节。",
            'en': "Close-up photography of very small subjects, where the size of the subject on the sensor is life-size or larger.",
            'ja': "小さな被写体を大きく写し出す撮影。昆虫や花などを肉眼では見えないような細部まで精密に捉えることができます。",
            'ko': "매우 작은 피사체를 촬영하여 실물과 같거나 더 큰 크기로 확대함으로써 육안으로는 보기 힘든 미세한 디테일을 보여주는 기술입니다."
        },
        category: "Special"
    }
];

export default techniquesData;

