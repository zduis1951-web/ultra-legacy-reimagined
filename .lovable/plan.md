

# تحديث شامل - مطابقة المحتوى الأصلي + تصميم مليون دولار

## ملخص ما سيتم تنفيذه

تحديث جميع المحتويات لتطابق الموقع الأصلي baytalshumukh.com بدقة 100%، مع إصلاح المشاكل البصرية (صورة الهيرو، التباين) وإضافة صورة الفيلا المرفوعة كأول عقار حقيقي، وإنشاء صفحة تفاصيل العقار.

---

## التغييرات المطلوبة

### 1. LanguageContext.tsx - تحديث المحتوى ليطابق الأصلي

**تصحيح معلومات الاتصال:**
- العنوان: "Ajman - Rashidiya 3 - Near Elia Mall - Opposite Tower 8, Ajman 1" / "عجمان - الرشيدية 3 - بالقرب من مول ايليا - مقابل برج 8، عجمان 1"
- الهاتف: +971-50-178-8428
- البريد: info@baytalshumukh.com

**تحديث محتوى About من الموقع الأصلي:**
- النص الأصلي: "At Bayt Alshumukh Real Estate LLC, we are more than just a property agency..."
- المهمة الأصلية: "Our mission is to deliver exceptional real estate solutions..."
- الرؤية الأصلية: "Our vision is to be the leading property agency..."
- القيم: Integrity, Excellence, Innovation, Customer-Centricity, Collaboration

**تحديث الخدمات لتطابق الأصلي:**
- Buying and Selling Homes
- Property Management
- Real Estate Consulting
- Relocation Services (جديدة - من الموقع الأصلي)

**إضافة فلاتر العقارات الأصلية:**
- الأنواع: All, Villa, Flat, Residential Lot, Agricultural Lot, Off Plan, Others
- المواقع: All Locations, Ajman Towers, Alrashidiya Towers, City Towers, Alkhoar Towers, Alrimaila, Alnaimiya

**إضافة مفاتيح ترجمة لصفحة تفاصيل العقار:**
- property.bedrooms, property.bathrooms, property.balconies
- property.forSale, property.forRent, property.price
- property.installment, property.agentName, property.agentPhone
- property.viewDetails, property.contactAgent

### 2. HeroSection.tsx - إصلاح الصورة والتباين

- استخدام صورة Unsplash مباشرة كـ URL (حل مضمون لعدم ظهور الصورة المحلية): صورة برج خليفة/أفق دبي الفاخر بالأبيض والأسود
- تعزيز gradient overlay: `from-black/90 via-black/65 to-black/30`
- إضافة text-shadow للعناوين لضمان الوضوح

### 3. إضافة صورة الفيلا المرفوعة

- نسخ `user-uploads://icoDZ7U2vH.jpg` إلى `src/assets/villa-alrimaila.jpg`
- استخدامها كأول عقار في قائمة العقارات للبيع

### 4. PropertyListPage.tsx - تحديث شامل

- تحديث الفلاتر: Villa, Flat, Residential Lot, Agricultural Lot, Off Plan, Others
- إضافة فلتر الموقع: Ajman Towers, Alrashidiya, City Towers, Alkhoar, Alrimaila, Alnaimiya
- إضافة العقار الحقيقي: Villa - Alrimaila (5 غرف، 4 حمامات، 3 بلكونات، 2,000,000 AED، 48 قسط)
- إضافة رابط "View Details" لكل عقار

### 5. صفحة تفاصيل العقار (جديدة) - PropertyDetailPage.tsx

- عرض صور العقار بمعرض كبير
- المواصفات: غرف نوم، حمامات، بلكونات
- السعر ونظام التقسيط
- معلومات الوكيل: Agent Ali, +971563928635
- زر "تواصل مع الوكيل"
- تصميم فاخر يطابق باقي الموقع

### 6. App.tsx - إضافة route جديد

- إضافة `/property/:id` لصفحة تفاصيل العقار

### 7. Footer.tsx - تصحيح معلومات الاتصال

- العنوان: عجمان بدل أبوظبي
- الرقم: +971-50-178-8428 بدل الرقم الخاطئ

### 8. CTASection.tsx - تصحيح رقم الهاتف

- تحديث `tel:` link للرقم الصحيح

### 9. Contact.tsx - تصحيح المعلومات

- العنوان الصحيح: عجمان
- الرقم الصحيح
- إضافة خريطة Google Maps لموقع عجمان

### 10. Services.tsx - مطابقة الخدمات الأصلية

- تحديث لتشمل 4 خدمات أصلية + قسم Why Choose Us
- إضافة Relocation Services

### 11. AboutSection.tsx - محتوى أصلي

- تحديث بالنص الأصلي الكامل من الموقع

---

## ملخص الملفات المتأثرة

| الملف | نوع التغيير |
|-------|-------------|
| `src/contexts/LanguageContext.tsx` | تحديث ~40 مفتاح + إضافة ~25 مفتاح جديد |
| `src/components/home/HeroSection.tsx` | إصلاح الصورة + gradient |
| `src/pages/PropertyListPage.tsx` | فلاتر جديدة + عقار حقيقي + روابط تفاصيل |
| `src/pages/PropertyDetailPage.tsx` | ملف جديد - صفحة تفاصيل العقار |
| `src/pages/Services.tsx` | تحديث الخدمات + Relocation |
| `src/pages/Contact.tsx` | تصحيح العنوان والرقم |
| `src/components/layout/Footer.tsx` | تصحيح العنوان والرقم |
| `src/components/home/CTASection.tsx` | تصحيح رقم الهاتف |
| `src/components/home/AboutSection.tsx` | محتوى أصلي |
| `src/App.tsx` | إضافة route تفاصيل العقار |
| `src/assets/villa-alrimaila.jpg` | نسخ صورة الفيلا المرفوعة |

