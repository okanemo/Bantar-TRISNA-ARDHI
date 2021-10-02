# Bantar-TRISNA-ARDHI

### Cara mengerjakan

1. Jawab pertanyaan menggunakan file ekstensi bahasa pemrograman yang digunakan
2. Buat file untuk setiap jawaban dari pertanyaan di bawah ini, untuk menjawab pertanyaan yang menggunakan bahasa pemrograman maka gunkan file ekstensi dari bahasa pemrograman tersebut, namun apabila hanya penjelasan untuk jawaban dari pertanyaan maka buat file dengan file ekstensi `.txt` sebagai contoh apabila ingin menjawab pertanyaan nomor 1 dengan menggunakan bahasa pemrograman python maka buat file `1.py` untuk menjawab dari pertanyaan nomor 1


### Pertanyaan

1. Buatlah sebuah fungsi untuk menvalidasi apakah sebuah kata dapat dibaca
dengan sama ketika dibaca dari depan maupun belakang

Eg:

```
 sama('radar') //return true 
 sama('kodok') //return true 
 sama('sapi') //return false
 ```
 2.  Buatlah sebuah fungsi untuk merubah “kalimat” menjadi multi dimensional array kalimat[kata[huruf]], tanpa menggunakan fungsi split() atau explode()
 
Eg:

```
kalimat = "saya suka coding"
stringToArray(kalimat) //return [[s,a,y,a],[s,u,k,a],[c,o,d,i,ng]]
```
3. Buatlah sebuah fungsi untuk memfilter jika nilai array lebih dari 5 dan lebih kecil dari sama dengan 8, serta diurutkan dari kecil ke besar dan hilangkan duplikasi.

Eg:

```
 numbers = [3,2,1,2,1,4,6,5,7,8,8,9,2]
 filterNumber(numbers) //return [1,2,3,4,5,9]
```

4.  Buatlah sebuah fungsi “sum” yang dapat dipanggil menggunakan “normal invocation function expression” dan “immediate invocation function expression”

Eg:

```
 sum(2,3); //normal invocation return 5 
 sum(2)(3); //immediate invocation also return 5
 ```
 
 5. “self number” adalah bilangan yang tidak bisa diciptakan melalui metode “penjumlahan dari suatu bilangan dengan invidu angka dari suatu bilangan tersebut”.
 
Contohnya, deret “self number” dibawah 200 adalah 1, 3, 5, 7, 9, 20, 31, 42, 53, 64, 75, 86, 97, 108, 110, 121, 132, 143, 154, 165, 176, 187, 198.

Sedangkan, pada kasus diatas 87 bukan lah self number. Karena dapat diciptakan melalui bilangan 75, dengan penjabaran 75 + 7 + 5 = 87

Begitu juga 101 bukan lah self number. Karena dapat diciptakan melalui bilangan 91 atau 100. Dengan penjabaran 91 + 9 + 1 = 101 atau 100 + 1 + 0 + 0 = 101

Berdasarkan penjelasan diatas, buatlah sebuah fungsi yang dapat mencetak total self number dibawah 200?
