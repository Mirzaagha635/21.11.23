
// const btn = document.getElementById('btn');

// btn.addEventListener('sumbit', function(event) {
//     // Sayfanın yeniden yüklenmesini önle
//     event.preventDefault();

//     // Giriş alanlarından değerleri al
//     const nameValue = document.getElementById('name').value;
//     const surnameValue = document.getElementById('surname').value;
//     const ageValue = document.getElementById('age').value;
//     const studentidValue = document.getElementById('studentid').value;

//     // Alınan değerleri kullanarak fetch isteği gönder
//     fetch('https://655c3089ab37729791aa034e.mockapi.io/Students', {
//         method: 'POST', // Veya 'PUT' veya 'PATCH' gibi uygun bir HTTP metodunu seçebilirsiniz
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             name: nameValue,
//             surname: surnameValue,
//             age: ageValue,
//             studentid: studentidValue
//         })
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         // JSON verisini çözme
//         return response.json();
//     })
//     .then(data => {
//         // Alınan veriyi kullanma
//         console.log(data);
//     })
//     .catch(error => {
//         // Hata durumunda işleme geçme
//         console.error('There was a problem with the fetch operation:', error);
//     });
// });
const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    // Giriş alanlarından değerleri al
    const nameValue = document.getElementById('name').value;
    const surnameValue = document.getElementById('surname').value;
    const ageValue = document.getElementById('age').value;
    const studentidValue = document.getElementById('studentid').value;

    // Alınan değerleri kullanarak fetch isteği gönder
    fetch('https://655c3089ab37729791aa034e.mockapi.io/Students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: nameValue,
            surname: surnameValue,
            age: ageValue,
            studentid: studentidValue
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // JSON verisini çözme
        return response.json();
    })
    .then(data => {
        // Alınan veriyi kullanma
        console.log(data);
    })
    .catch(error => {
        // Hata durumunda işleme geçme
        console.error('There was a problem with the fetch operation:', error);
    });
});
