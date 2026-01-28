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
        category: "Optics"
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
        category: "Optics"
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
        category: "Optics"
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

