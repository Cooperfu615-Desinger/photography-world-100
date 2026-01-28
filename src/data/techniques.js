/**
 * 攝影技法辭典資料
 * 
 * 資料格式說明：
 * - id: 唯一識別碼（字串，建議使用 't' + 數字）
 * - term: 技法術語（中英文物件）
 * - desc: 詳細說明（中英文物件）
 * - category: 技術分類（字串，如 Optics, Exposure, Lighting 等）
 * 
 * 新增技法步驟：
 * 1. 複製下方任一技法物件作為範本
 * 2. 修改 id（確保不重複）
 * 3. 填寫完整的中英文資料
 * 4. 選擇適當的 category
 */

const techniquesData = [
    {
        id: 't1',
        term: { zh: "景深 (Depth of Field)", en: "Depth of Field (DoF)" },
        desc: {
            zh: "照片中清晰對焦的範圍。光圈越大（f值越小）、焦距越長、距離主體越近，景深越淺（背景模糊）。",
            en: "The distance between the nearest and the furthest objects that are in acceptably sharp focus. Larger aperture, longer focal length, and closer distance decrease DoF."
        },
        category: "Optics"
    },
    {
        id: 't2',
        term: { zh: "縮時攝影 (Time-lapse)", en: "Time-lapse" },
        desc: {
            zh: "以低幀率拍攝一系列照片，然後以正常速度播放，使時間看起來在快速流逝的技術。常用於拍攝雲彩移動、花開、城市車流。",
            en: "A technique where frequency at which film frames are captured is lower than that used to view the sequence. When played at normal speed, time appears to be moving faster."
        },
        category: "Video/Time"
    },
    {
        id: 't3',
        term: { zh: "慢動作 (Slow Motion)", en: "Slow Motion" },
        desc: {
            zh: "以高幀率（如 60fps, 120fps, 240fps）拍攝，並以正常速度（24fps 或 30fps）播放，展現動作細節。",
            en: "Capturing video at a high frame rate and playing it back at a standard rate to reveal details of movement invisible to the naked eye."
        },
        category: "Video/Time"
    },
    {
        id: 't4',
        term: { zh: "分區曝光法 (Zone System)", en: "Zone System" },
        desc: {
            zh: "由安塞爾·亞當斯發明，將照片從全黑（0區）到全白（10區）分為11個區域，以科學方式控制曝光與顯影，獲得最完美的色調範圍。",
            en: "Formulated by Ansel Adams. A technique for determining optimal film exposure and development to visualize the values from pure black (Zone 0) to pure white (Zone 10)."
        },
        category: "Exposure"
    },
    {
        id: 't5',
        term: { zh: "散景 (Bokeh)", en: "Bokeh" },
        desc: {
            zh: "源自日語，指照片中失焦部分的審美品質。優美的散景通常呈現圓形、柔和的光斑。",
            en: "The aesthetic quality of the blur produced in the out-of-focus parts of an image produced by a lens."
        },
        category: "Optics"
    },
    {
        id: 't6',
        term: { zh: "黃金時刻 (Golden Hour)", en: "Golden Hour" },
        desc: {
            zh: "日出後或日落前的一小段時間，光線柔和、溫暖、角度低，被認為是拍攝風景與人像的最佳時機。",
            en: "The period shortly after sunrise or before sunset during which daylight is redder and softer than when the Sun is higher in the sky."
        },
        category: "Lighting"
    }
];

export default techniquesData;
