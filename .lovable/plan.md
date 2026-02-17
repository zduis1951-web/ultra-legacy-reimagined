

# اضافة قسم بروفايل/بروشور فاخر في صفحة التواصل

## الفكرة
اضافة قسم "Company Profile" فاخر بين هيدر الصفحة وفورم التواصل، يعمل كبروشور رقمي يعكس هيبة وفخامة الشركة وخبرة 10 سنوات. القسم سيكون بتصميم بصري قوي يشبه بروشورات الشركات العقارية الكبرى.

---

## التصميم المقترح

القسم سيتكون من عدة اجزاء متتالية داخل صفحة Contact:

### الجزء 1: بانر الشركة الرئيسي
- خلفية صورة hero-bg.jpg مع overlay داكن وتدرج ذهبي
- شعار الشركة (logo.png) في المنتصف بحجم كبير
- اسم الشركة بخط Playfair Display ضخم
- شعار "ESTABLISHED 2015 | A DECADE OF EXCELLENCE"
- خط ذهبي فاصل انيق

### الجزء 2: الارقام والانجازات (Stats Strip)
- شريط افقي بخلفية داكنة (foreground color)
- 4 احصائيات: 10+ سنوات خبرة | 500+ عقار | 1000+ عميل | 50+ مشروع
- كل رقم بخط ذهبي كبير مع وصف ابيض تحته
- تاثير حركة عداد عند الظهور

### الجزء 3: القيم الاساسية (Core Values)
- 3 اعمدة بتصميم diamond icon (نفس نمط الموقع)
- النزاهة | التميز | الابتكار
- كل عمود بايقونة داخل اطار مائل 45 درجة مع خط ذهبي hover

### الجزء 4: رسالة من الادارة
- اقتباس فاخر بعلامات اقتباس ذهبية كبيرة
- نص الرسالة بخط مائل انيق
- توقيع "Bayt Alshumukh Management"

---

## التغييرات التقنية

### الملفات المتاثرة:

1. **`src/components/contact/CompanyProfileSection.tsx`** (جديد)
   - مكون جديد يحتوي على كل اجزاء البروشور الاربعة
   - يستخدم framer-motion للحركات (fade-up, stagger children)
   - يستخدم صور من src/assets (hero-bg.jpg, logo.png)
   - يدعم الترجمة AR/EN عبر useLanguage
   - تصميم responsive كامل (mobile/desktop)

2. **`src/pages/Contact.tsx`** (تعديل)
   - اضافة import للمكون الجديد CompanyProfileSection
   - وضعه بين هيدر الصفحة (سطر 31) وقبل فورم التواصل (سطر 33)

3. **`src/contexts/LanguageContext.tsx`** (تعديل)
   - اضافة مفاتيح ترجمة جديدة لقسم البروفايل:
     - `profile.established`: "Est. 2015"
     - `profile.tagline`: "A Decade of Excellence in Real Estate"
     - `profile.quote`: رسالة الادارة
     - `profile.values.integrity/excellence/innovation`: القيم
     - وغيرها من النصوص بالعربي والانجليزي

### التقنيات:
- framer-motion: motion.div, viewport animations, stagger
- Tailwind CSS: gradients, backdrop-blur, rotate-45 diamond icons
- صور موجودة: hero-bg.jpg للخلفية، logo.png للشعار
- نفس نمط التصميم الحالي (خطوط ذهبية، diamond icons، tracking واسع)

