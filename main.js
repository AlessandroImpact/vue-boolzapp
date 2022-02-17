

const app = new Vue(
    {
        el:'#root',
        data: {

            currentContactAttivo: 0,
            newMessage: "",
            selected: "",
            lastDateAccess: "",
            activeMessage: "",

            contacts: [
                {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                text: 'Hai portato a spasso il cane?',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                text: 'Ricordati di dargli da mangiare',
                status: 'sent'
                },
                {
                date: '10/01/2020 16:15:22',
                text: 'Tutto fatto!',
                status: 'received'
                }
                ],
                },
                {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                {
                date: '20/03/2020 16:30:00',
                text: 'Ciao come stai?',
                status: 'sent'
                },
                {
                date: '20/03/2020 16:30:55',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
                },
                {
                date: '20/03/2020 16:35:00',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
                }
                ],
                },
                {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                {
                date: '28/03/2020 10:10:40',
                text: 'La Marianna va in campagna',
                status: 'received'
                },
                {
                date: '28/03/2020 10:20:10',
                text: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
                },
                {
                date: '28/03/2020 16:15:22',
                text: 'Ah scusa!',
                status: 'received'
                }
                ],
                },
                {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received'
                }
                ],
                },
            ]                

        },
        methods: {

                        // funzione invio mess
                        messageSent() {
                            if(this.newMessage != '') {
                                this.contacts[this.currentContactAttivo].messages.push(
                                    {
                                        date: dayjs().format('DD/MM/YYYY h:mm:ss'),
                                        text: this.newMessage,
                                        status: 'sent'
                                    }
                                );
                                        //aspetto 1 sec prima di rispondere
                                setTimeout(this.messageReceived, 1000);
                            }
            
                            this.newMessage = '';
                        },
                        // funzione per far apparire la chat dell'utente cliccato
                        currentActive(index) {
                            this.currentContactAttivo = index
                        },
                        // funzione per risposta
                        messageReceived() {
                            this.contacts[this.currentContactAttivo].messages.push(
                                {
                                    date: dayjs().format('DD/MM/YYYY h:mm:ss'),
                                    text: 'Va bene!',
                                    status: 'received'
                                }
                            );
                        },
                        // ricerca utenti nella barra di ricerca della chat
                        searchRicerca() {
                            const ricerca = this.selected;
            
                            this.contacts.forEach(contact => {
                                if (!contact.name.toLowerCase().includes(ricerca.toLowerCase())) {
                                    contact.visible = false;
                                } else if (this.selected == '') {
                                    contact.visible = true;
                                }
                            });
                        },
                        // mostra info correnti al contatto selezionato in 'ultimo accesso'
                        dateCurrent() {
                            let contactMessage = this.contacts[this.currentContactAttivo].messages;
            
                            if (contactMessage[parseInt(contactMessage.length - 1)].status == 'received') {
                                lastAccess = contactMessage[parseInt(contactMessage.length - 1)].date;
                            } else {
                                lastAccess = contactMessage[parseInt(contactMessage.length - 2)].date;
                            }
                            return this.lastDateAccess = lastAccess;
                        },
            
                    }
                    // fine methods
                }
            );