
# تحسين التمرير لأعلى عند النقر

## المشكلة
1. عند النقر على روابط الـ Navbar وأنت بالفعل في نفس الصفحة (مثلا FOR SALE وانت في /for-sale)، لا يحدث تمرير لاعلى لان `pathname` لم يتغير
2. بطاقات العقارات ليست قابلة للنقر بالكامل - فقط رابط "VIEW DETAILS" يعمل، والبطاقة نفسها لا تنقل للتفاصيل

## التغييرات المطلوبة

### 1. تحديث Navbar (`src/components/layout/Navbar.tsx`)
- اضافة `onClick` handler لكل رابط في الـ Navbar
- عند النقر على رابط الصفحة الحالية (نفس المسار): تنفيذ `window.scrollTo({ top: 0, behavior: 'smooth' })` مباشرة
- هذا يحل مشكلة النقر على FOR SALE وانت في صفحة FOR SALE

### 2. جعل بطاقة العقار كاملة قابلة للنقر (`src/pages/PropertyListPage.tsx`)
- لف كامل بطاقة العقار (الصورة + المعلومات) برابط `Link` واحد يوجه الى `/property/:id`
- او اضافة `onClick` على البطاقة يستخدم `useNavigate` للتوجيه مع cursor pointer
- الابقاء على رابط "VIEW DETAILS" كعنصر مرئي فقط (بدون تكرار الرابط)

### 3. تحسين ScrollToTop (`src/components/ScrollToTop.tsx`)
- اضافة `useNavigationType` من react-router-dom
- التمرير فقط عند التنقل العادي (PUSH) وليس عند الضغط على زر الرجوع (POP)

## التفاصيل التقنية

### الملفات المتاثرة:
1. `src/components/layout/Navbar.tsx` - اضافة onClick للتمرير عند النقر على الصفحة الحالية
2. `src/pages/PropertyListPage.tsx` - جعل البطاقة كاملة قابلة للنقر
3. `src/components/ScrollToTop.tsx` - تحسين بـ useNavigationType
