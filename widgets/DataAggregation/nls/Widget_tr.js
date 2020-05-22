// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define({"widgets/DataAggregation/nls/strings":{_widgetLabel:"Veri Toplama",startPage:{defaultStartPageInstructions:"Bu gere\u00e7 bir dosyadaki verilerin i\u015flenmesine ve haritadaki se\u00e7ili katmana g\u00f6nderilmesine yard\u0131mc\u0131 olacakt\u0131r.\x3cbr/\x3e \x3cbr/\x3e Dosyadaki de\u011ferler virg\u00fcl, sekme, noktal\u0131 virg\u00fcl veya dikey \u00e7ubukla s\u0131n\u0131rland\u0131r\u0131lmal\u0131d\u0131r.",dragDrop:"S\u00fcr\u00fckle ve b\u0131rak",browse:"Dosyaya Git",or:"'VEYA'",
userPrivilege:"Hesab\u0131n\u0131z\u0131n veri olu\u015fturma veya de\u011fi\u015ftirme izni yok.",userCredits:"${widgetName}, ${locator} yer bulucusunu kullanmak i\u00e7in kredi gerektirir.",contactAdmin:"Ek kredi istemek i\u00e7in kurulu\u015fun y\u00f6neticisine ba\u015fvurun.",contactAdminEdit:"D\u00fczenleme ayr\u0131cal\u0131klar\u0131 istemek i\u00e7in kurulu\u015fun y\u00f6neticisine ba\u015fvurun.",canUseLocator:"${locator} yer bulucusu detaylar\u0131 bulmak i\u00e7in kullan\u0131lacakt\u0131r.",
notEnoughCredits:"Yeterli kredi yok.",locationAndField:"Konum ve Alan Bilgileri",locationAndFieldHint:"De\u011ferleri, hedef katman\u0131 g\u00fcncellemek i\u00e7in kullan\u0131lmas\u0131 gereken dosyadan se\u00e7in.",cannotUseLocator:"${widgetName} kullan\u0131lam\u0131yor",noAnonymousEdit:"${layerName} katman\u0131 anonim d\u00fczenlemeyi desteklemiyor.",pleaseLogin:"${org} kurulu\u015funda oturum a\u00e7\u0131n veya anonim d\u00fczenlemenin etkinle\u015ftirilmesini istemek i\u00e7in kurulu\u015fun y\u00f6neticisine ba\u015fvurun.",
invalidEdit:"Ge\u00e7ersiz Ayr\u0131cal\u0131klar",unableToAccess:"${layerName} katman\u0131na eri\u015filemiyor",appropriateCredentials:"Uygun kimlik bilgileriyle oturum a\u00e7t\u0131\u011f\u0131n\u0131z\u0131 do\u011frulay\u0131n.",shared:"${layerName} katman\u0131na eri\u015fim istemek i\u00e7in kurulu\u015fun y\u00f6neticisine ba\u015fvurun.",targetLayerLabel:"Hedef Katman",homeButtonLabel:"Giri\u015f Sayfas\u0131"},mapping:{schemaMapping:"Alan Bilgileri",schemaMappingHint:"Dosyadan, katmandaki alanlarla ili\u015fkilendirilen alanlar\u0131 se\u00e7in.",
locationMapping:"Konum Bilgileri",locationMappingHint:"Dosyadan beklenen adres t\u00fcr\u00fcn\u00fc veya koordinat bilgilerini se\u00e7."},locationMapping:{locationMappingPageHint:"Konum t\u00fcr\u00fc se\u00e7",useAddress:"Bir adres kullanarak bul",useAddressHint:"Veriler adres bilgisi i\u00e7eriyor",useCoordinates:"Koordinat kullanarak bul",useCoordinatesHint:"Veriler X/Y koordinat de\u011ferleri i\u00e7erir"},address:{addressPageHint:"Adres t\u00fcr\u00fcn\u00fc se\u00e7",singleField:"Tek alan",
singleFieldHint:"Adres bilgilerini i\u00e7eren alan\u0131 se\u00e7in",multiField:"Birden \u00e7ok alan",multiFieldHint:"Adres bilgilerini i\u00e7eren alanlar\u0131 se\u00e7in"},coordinates:{coordinatesPageHint:"Koordinat verilerini i\u00e7eren alanlar\u0131 se\u00e7in"},fieldMapping:{fieldMappingPageHint:"Hedef alanla e\u015fle\u015fen kaynak alan\u0131 se\u00e7",sourceField:"E\u015fle\u015fen Kaynak Alan",targetField:"Hedef Alan"},buttons:{addToMap:"Haritaya Ekle",submit:"G\u00f6nder",download:"\u0130ndir"},
review:{matched:"Bulundu",reviewMatched:"Konumlar Bulundu",reviewMatchedHint:"Bulunan konumlar\u0131 g\u00f6zden ge\u00e7irin.",unMatched:"Bulunamad\u0131",reviewUnMatched:"Konumlar Bulunamad\u0131",reviewUnMatchedHint:"Bulunamayan konumlar\u0131 g\u00f6zden ge\u00e7irin. D\u00fczeltilmeyen \u00f6geler g\u00f6nderilmez.",duplicate:"\u00c7o\u011falt",reviewDuplicate:"Yinelenen Konumlar",reviewDuplicateHint:"Katmanda zaten bulunan konumlar\u0131 g\u00f6zden ge\u00e7irin. Adreslenmemi\u015f \u00f6geler g\u00f6nderilmez.",
reviewLabelWithCount:"${totalMatchedFeatures} ${headerString} ${headerStringHint}",use:"\u015eunu kullan:",fromLayer:"Hedef Bilgileri",target:"Hedef",source:"Kaynak",fromFile:"Kaynak Bilgileri",locationControlHint:"Adres bilgilerini g\u00f6zden ge\u00e7irin",duplicateAction:"Bir i\u015flem se\u00e7in",item:"Kay\u0131t:",locateFeature:"Detay\u0131 Bul",removeFeature:"Detay\u0131 Kald\u0131r",featureLocated:"Konum Bulundu",valuesDoNotMatch:"Mevcut de\u011ferle e\u015fle\u015fmiyor",sync:"Adres bilgilerini alan bilgileriyle senkronize edin",
noFeaturesSaved:"Ba\u015far\u0131yla kaydedilen detay yok",someFeaturesSaved:"${num} detay ba\u015far\u0131yla kaydedildi.",someFeaturesNotSaved:"${num} detay ba\u015far\u0131yla kaydedilmedi.",feature:"Detay Bilgilerini \u0130ncele",locationInfo:"Konum Bilgilerini \u0130ncele",selectValue:"De\u011fer Se\u00e7in",reviewData:"Verileri \u0130ncele",reviewDataHint:"Katmana g\u00f6ndermeden \u00f6nce verilerinizi inceleyin.",reviewFeatureHint:"Detay ve konum bilgilerinizi inceleyin veya d\u00fczenleyin.",
duplicateModify:"\u00c7o\u011falt, de\u011fi\u015fiklik gerekiyor",duplicateSave:"Yeni bir detay olarak kaydet"},warningsAndErrors:{invalidCSV:"CSV'den \u00f6geler getirilirken hata olu\u015ftu, ge\u00e7erli CSV dosyas\u0131n\u0131n se\u00e7ili olup olmad\u0131\u011f\u0131n\u0131 kontrol edin.",noLayersWarning:"Ge\u00e7erli bir hedef katman yap\u0131land\u0131r\u0131lmad\u0131, yap\u0131land\u0131rmay\u0131 kontrol edin.",loadWarning:"Bu gere\u00e7 bir Detay Servisi veri kayna\u011f\u0131 gerektiriyor. Gereci bir veri kayna\u011f\u0131 tan\u0131mlayacak \u015fekilde yap\u0131land\u0131r\u0131n.",
saveError:"Detay kaydetme hatas\u0131.",consumesCredits:"Bu ara\u00e7, ArcGIS Online World Geocoding Servisi ile kullan\u0131ld\u0131\u011f\u0131nda kredi t\u00fcketir.",noValue:"Alan se\u00e7in",mappingTitle:"",locationMappingComplete:"Konum E\u015fle\u015ftirme Tamamland\u0131",fieldMappingComplete:"Alan E\u015fle\u015ftirme Tamamland\u0131",settingsCleared:"Ayarlar silinecek.",proceed:"Devam etmek istiyor musunuz?",itemMoveMatch:"\u00d6ge bulundu ve bulunan konumlar listesine ta\u015f\u0131nd\u0131",
itemMoveUnMatched:"\u00d6ge bulunamad\u0131. Bulunamayan konumlar listesine ta\u015f\u0131nd\u0131.",itemWillBeLocated:"\u00d6ge, yinelenen konumlar listesinden kald\u0131r\u0131lacak.",cannotLocate:"\u00d6ge bulunamad\u0131. Konum bilgilerini do\u011frulay\u0131n.",invalidMessage:"Ge\u00e7ersiz De\u011fer.",rangeMessage:"De\u011fer ${num} karakterden az olmal\u0131d\u0131r.",locatorError:"Yer Bulucu Ge\u00e7ersiz veya Eri\u015filemiyor.",notConfigured:"yer bulucu ge\u00e7erli yer bulma se\u00e7enekleri i\u00e7in yap\u0131land\u0131r\u0131lmam\u0131\u015f",
noMoreLocators:"yap\u0131land\u0131r\u0131lan ilave yer bulucular yok"},featureToolbar:{locate:"Bul",save:"Kayd\u0131 kaydet",cancel:"D\u00fczenlemeleri iptal et",cancelTitle:"D\u00fczenlemeleri \u0130ptal Et",cancelMessage:"Ge\u00e7erli kay\u0131tta yap\u0131lan d\u00fczenlemeler iptal edilsin mi?"},_localized:{}}});