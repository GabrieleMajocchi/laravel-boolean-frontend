<template>
    <div id="my_contacts-page">
        <!-- <div class="container p-4">
            <h1 class="p-3 text-center mb-5">Contatti</h1>
            <p>Se vuoi contattarci per effettuare una prenotazione o per qualsiasi altro motivo, puoi farlo in uno dei seguenti modi:</p>
            <ul>
                <li>Telefono: <strong>+39 000 000 0000</strong></li>
                <li>Email: <strong>cocktailbar@gmail.com</strong></li>
                <li>Pagina Facebook: <strong>Cocktail Bar</strong></li>
                <li>Profilo Instagram: <strong>cocktail_bar</strong></li>
            </ul>
            <p class="mb-5">Siamo sempre felici di ricevere i tuoi feedback, le tue richieste e le tue prenotazioni. Ti risponderemo il prima possibile.</p>
            <h2>Orari di apertura</h2>
            <p class="mb-5">Il nostro bar è aperto <strong>tutti i giorni dalle 18:00 alle 02:00</strong>. Puoi venire a trovarci in <strong>Via Roma, 12 a Milano</strong>. Abbiamo un ampio parcheggio e una terrazza con vista sulla città.</p>
            <h2>Eventi</h2>
            <p>Organizziamo spesso eventi musicali, culturali e di intrattenimento nel nostro bar. Puoi rimanere aggiornato sulle nostre iniziative seguendoci sui nostri canali social o iscrivendoti alla nostra newsletter <strong>qui</strong>. Se vuoi proporci una collaborazione o una serata speciale, non esitare a <strong>contattarci</strong>.</p>
        </div> -->
        <div class="container">
            <div class="card-bg">
                <div class="card p-5">
                    <h1 class="p-3 text-center mb-5">Contatti</h1>
                    <p>Se vuoi contattarci per effettuare una prenotazione o per qualsiasi altro motivo, puoi farlo in uno dei seguenti modi:</p>
                    <ul>
                        <li>Telefono: <strong>+39 000 000 0000</strong></li>
                        <li>Email: <strong>cocktailbar@gmail.com</strong></li>
                        <li>Pagina Facebook: <strong>Cocktail Bar</strong></li>
                        <li>Profilo Instagram: <strong>cocktail_bar</strong></li>
                    </ul>
                    <p class="mb-5">Siamo sempre felici di ricevere i tuoi feedback, le tue richieste e le tue prenotazioni. Ti risponderemo il prima possibile.</p>
                    <h2>Orari di apertura</h2>
                    <p class="mb-5">Il nostro bar è aperto <strong>tutti i giorni dalle 18:00 alle 02:00</strong>. Puoi venire a trovarci in <strong>Via Roma, 12 a Milano</strong>. Abbiamo un ampio parcheggio e una terrazza con vista sulla città.</p>
                    <h2>Eventi</h2>
                    <p>Organizziamo spesso eventi musicali, culturali e di intrattenimento nel nostro bar. Puoi rimanere aggiornato sulle nostre iniziative seguendoci sui nostri canali social o iscrivendoti alla nostra newsletter <strong>qui</strong>. Se vuoi proporci una collaborazione o una serata speciale, non esitare a <strong>contattarci</strong>.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contacts'

}
</script>

<style lang="scss" scoped>
    div#my_contacts-page {
        background-color: #161616;
        height: 100vh;
        overflow-y: hidden;

        div.container {
            padding: 3rem;
            
            div.card-bg {
                background-image: url(https://images.pexels.com/photos/5490965/pexels-photo-5490965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2);
                border-radius: 20px;
                background-size: 100%;
                background-position: center;
                transition: all .5s;

                &:hover {
                    background-size: 110%;
                }

                div.card {
                    background-color: rgba(0, 0, 0, 0.7);
                    background-repeat: no-repeat;
                    color: white;
                    border-radius: 20px;

                    h1,
                    li strong,
                    p strong {
                        color: rgb(255, 218, 124);
                    }
                }
            }
        }
    }
</style>