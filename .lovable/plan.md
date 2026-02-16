

# ازالة علامة الشرطة الطويلة (—) من كل الموقع

## التغيير

ملف واحد فقط يحتاج تعديل: `src/contexts/LanguageContext.tsx`

سيتم استبدال كل علامة `—` بفاصلة أو إعادة صياغة الجملة بدونها:

### النصوص الانجليزية (4 مواضع):
1. **hero.subtitle** (سطر 28): "...Bayt Alshumukh — where..." تصبح "...Bayt Alshumukh, where..."
2. **about.desc** (سطر 34): "...property agency — we are..." تصبح "...property agency. We are..."
3. **about.valuesDesc** (سطر 40): "...Collaboration — these are..." تصبح "...Collaboration. These are..."

### النصوص العربية (3 مواضع):
4. **hero.subtitle** (سطر 173): "...بيت الشموخ — حيث..." تصبح "...بيت الشموخ، حيث..."
5. **about.desc** (سطر 179): "...وكالة عقارات — فنحن..." تصبح "...وكالة عقارات. فنحن..."
6. **about.valuesDesc** (سطر 185): "...والتعاون — هذه هي..." تصبح "...والتعاون. هذه هي..."

## التفاصيل التقنية

- ملف واحد: `src/contexts/LanguageContext.tsx`
- 6 استبدالات فقط
- لا تغييرات في أي ملف آخر
