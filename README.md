# dateformatter
Sürekli kilobaytları aşan sıkıcı date formatlama dosyalarından sıkıldım. Kendim daha anlaşılır bir şekilde tarihi yyyyMMddHHmm şeklinde integer'a çevirerek daha hızlı bir hesaplama yöntemi olan yolu seçtim. Yararlı olması dileğiyle :D

##Kullanım
Toplamda 

```bash
new Date().dateToFormat("y-M-d H:m");
// çıktı (o an) : 2016-07-18 15:44

"201607181544".dateToFormat("y-M-d H:m");
// çıktı (o an) : 2016-07-18 15:44

"201607181544".strToDate();
// çıktı : Date tipinde

new Date().dateToStr();
// çıktı (o an) : 201607181544
```

Sevgilerle - Avare Kodcu ;)