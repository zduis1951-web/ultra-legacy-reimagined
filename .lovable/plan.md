
# اضافة المحتوى المفقود للصفحة الرئيسية

## ما ينقص حاليا (مقارنة بالموقع الاصلي)
الصفحة الحالية تحتوي على About مختصر (مهمة + رؤية + قيم فقط). المحتوى الاصلي يتضمن 3 اقسام اضافية مفقودة تماما:

1. **خبرتنا (Our Expertise)** - قائمة الخدمات التفصيلية: مبيعات سكنية، عقارات تجارية، ادارة عقارات، استشارات استثمارية
2. **فريقنا (Our Team)** - وصف الفريق وخبراته
3. **التزامنا (Our Commitment)** - العلاقات طويلة الامد والمشاركة المجتمعية

بالاضافة الى ان نصوص المهمة والرؤية والقيم الحالية مختصرة مقارنة بالمحتوى الاصلي الاكثر تفصيلا.

---

## التغييرات المطلوبة

### 1. تحديث نصوص "من نحن" في LanguageContext (`src/contexts/LanguageContext.tsx`)
- تحديث `about.desc` بالنص الكامل من الموقع الاصلي (يتضمن ذكر السمعة والتميز والنزاهة)
- تحديث `about.missionDesc` بالنص المفصل (يشمل الشراء والبيع والتأجير والاستثمار)
- تحديث `about.visionDesc` بالنص المفصل (يشمل التكنولوجيا المتطورة وخبرة السوق)
- تحديث `about.valuesDesc` بالنص التفصيلي (شرح كل قيمة على حدة: النزاهة، التميز، الابتكار، التركيز على العميل، التعاون)
- اضافة مفاتيح ترجمة جديدة:
  - `about.expertise` / `about.expertiseDesc` - قسم الخبرات مع القائمة التفصيلية
  - `about.team` / `about.teamDesc` - قسم الفريق
  - `about.commitment` / `about.commitmentDesc` - قسم الالتزام
  - `about.residential` / `about.residentialDesc` - المبيعات السكنية
  - `about.commercial` / `about.commercialDesc` - العقارات التجارية
  - `about.propertyMgmt` / `about.propertyMgmtDesc` - ادارة العقارات
  - `about.investment` / `about.investmentDesc` - الاستشارات الاستثمارية

### 2. اضافة قسم "خبرتنا" كمكون جديد (`src/components/home/ExpertiseSection.tsx`)
- تصميم فاخر بنفس نمط الموقع (خطوط ذهبية، ايقونات ماسية)
- 4 بطاقات خدمات: سكني، تجاري، ادارة عقارات، استشارات استثمارية
- كل بطاقة بايقونة ماسية + عنوان + وصف
- تاثيرات hover متقدمة (خط ذهبي متحرك + ظلال عميقة)

### 3. اضافة قسم "فريقنا والتزامنا" كمكون جديد (`src/components/home/TeamCommitmentSection.tsx`)
- تقسيم الى جزئين متجاورين (grid 2 اعمدة)
- الجزء الايسر: فريقنا مع ايقونة وعنوان ووصف
- الجزء الايمن: التزامنا مع ايقونة وعنوان ووصف
- خلفية متدرجة فاخرة مع خطوط ذهبية زخرفية

### 4. تحديث AboutSection (`src/components/home/AboutSection.tsx`)
- تحديث نص القيم ليكون اكثر تفصيلا (كل قيمة بسطر منفصل)

### 5. تحديث الصفحة الرئيسية (`src/pages/Index.tsx`)
- اضافة ExpertiseSection بعد AboutSection
- اضافة TeamCommitmentSection بعد WhyChooseUs
- الترتيب النهائي: Hero > About > Expertise > Stats > Featured > WhyChooseUs > TeamCommitment > Testimonials > CTA

---

## التفاصيل التقنية

### الملفات المتاثرة:
1. `src/contexts/LanguageContext.tsx` - اضافة وتحديث مفاتيح الترجمة (EN + AR)
2. `src/components/home/ExpertiseSection.tsx` (جديد) - قسم الخبرات بـ 4 بطاقات
3. `src/components/home/TeamCommitmentSection.tsx` (جديد) - قسم الفريق والالتزام
4. `src/pages/Index.tsx` - اضافة القسمين الجديدين

### الانماط البصرية:
- ايقونات ماسية بحدود مزدوجة (`rotate-45`)
- خطوط ذهبية متحركة عند hover (`w-0 group-hover:w-full`)
- فواصل ذهبية (`h-px bg-gold/40`)
- ظلال عميقة (`shadow-[0_25px_80px_-20px_rgba(0,0,0,0.12)]`)
- مسافات تنفس (`py-32 md:py-44`)
- حركات framer-motion متناسقة
- دعم كامل RTL/LTR
