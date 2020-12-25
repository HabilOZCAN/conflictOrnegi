/**
1. sudo apt-get update -→Linux program repository güncellendi
2. sudo apt-get upgrade-→ Kurulu programlar güncellendi
3. sudo snap install –classic code → ile visual studio coder yüklendi
4. a. sudo wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
ile google chrome download edildi.
4.b. sudo apt install ./google-chrome-stable_current_amd64.deb komutu ile google-chrome yüklendi.
5. sudo snap install libreoffice → komutu ile libreoffice7 yüklendi.
6. writer ile .docx, calc ile .xlsx, impress ile .pptx uzantılı dosyalar eklendi.
7. sudo groupadd HOgroup komutu ile grup yükledim.  sudo adduser habil komutu ile yeni user oluşturdum. Bu aşamadan sonra bir takım bilgileri girdim. sudo usermod -a -G HOgroup habil ile habil user’ı Hogroup’a yükledim.
8. vim ile index.html dosyası oluşturulmuştur.
9. nano ile app.js dosyası oluşturulmuştur.
10. chgrp HOgroup app.js ve chown habil app.js komuto ile app.js dosyasının grup ve kullanıcısı değiştirildi.
11.chmod ugo=wrx index.html komuto ile index.html dosyasına read, write ve execute hakları user, group ve others için verilmiştir.
12.ls -l index.html komutu ile yetkiler kontrol edildi.
-rwxrwxrwx 1 coder coder 56 Dez 24 22:48 index.html
13.
alias: kullanılan bir veya birden fazla komuta kullanıcı tarafından isim tanımlamak için kullanılır.
df: disk kullanımı kontrol etmek için kullanılır.
history: terminalde daha önce kullandığımız komutlara ulaşmak için kullandığımız komuttur.
date: belirtilen formata göre halihazırdaki zaman bilgisini verir.
grep: dosya içerisinde aranması için belirtilen paterni yakalar.
ps: aktif processlerin listelemesini yapar.
kill: belirtilen aktif processin çalışmasını sonlandırır.
tar: arşive dosyası oluşturur.
top: çalışmakta olan processlerin bir listesini ve CPU'dan ne kadar kullanıldığını ayrıntıl bir biçimde 
listeler.
du: bir dosyanın veya dizinin ne kadar alan kapladığını kontrol etmek için kullanılır.
head: herhangi bir metin dosyasının ilk 10 (default) satırını görüntülemek içni kullanılır. 
tail: bir metin dosyasının son on satırını (default) görüntülemek için kullanılır.
wget: internetten dosya indirmek için kullanılır.
find: belirli bir dizinde bulunan dosyaları bulmak için kullanılır.
 */