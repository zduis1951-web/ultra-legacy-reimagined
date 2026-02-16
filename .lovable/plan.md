

# اضافة صورة الفيلا الجديدة لعقار Villa - Alrimaila

## التغييرات

### 1. نسخ الصورة المرفوعة الى المشروع
- نسخ `user-uploads://icoDZ7U2vH-2.jpg` الى `src/assets/villa-alrimaila-new.jpg`

### 2. تحديث صورة العقار (`src/pages/PropertyDetailPage.tsx`)
- استبدال استيراد الصورة القديمة `villa-alrimaila.jpg` بالصورة الجديدة `villa-alrimaila-new.jpg`
- العقار رقم 1 (Villa - Alrimaila) سيعرض الصورة الجديدة تلقائيا

### 3. تحديث قسم العقارات المميزة (اختياري)
- اذا كانت الصورة تظهر ايضا في `FeaturedProperties.tsx` او `PropertyListPage.tsx` يتم تحديثها هناك ايضا

## التفاصيل التقنية
- ملف واحد رئيسي: `src/pages/PropertyDetailPage.tsx`
- تغيير سطر الاستيراد فقط
- جميع بيانات العقار (السعر، الغرف، الحمامات، الشرفات، الوكيل) تبقى كما هي لانها مطابقة بالفعل

