const { createApp } = Vue
const DateTime = luxon.DateTime;

createApp({
    data() {
      return {
        chatSelezionata: 0,
        creazioneMessaggio: "",
        ricercaUtente: "",
        user: {
          name: "Sofia",
          avatar: "./img/avatar_io.jpg"
        },
        contacts: [
            {
            name: 'Michele',
            avatar: './img/avatar_1.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            delateSection: false,
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Ricordati di stendere i panni',
            delateSection: false,
            status: 'sent'
            },
            {
            date: '10/01/2020 16:15:22',
            message: 'Tutto fatto!',
            delateSection: false,
            status: 'received'
            }
            ],
            },
            {
            name: 'Fabio',
            avatar: "./img/avatar_2.jpg",
            delateSection: false,
            visible: true,
            messages: [
            {
            date: '20/03/2020 16:30:00',
            message: 'Ciao come stai?',
            delateSection: false,
            status: 'sent'
            },
            {
            date: '20/03/2020 16:30:55',
            message: 'Bene grazie! Stasera ci vediamo?',
            delateSection: false,
            status: 'received'
            },
            {
            date: '20/03/2020 16:35:00',
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
            delateSection: false,
            status: 'sent'
            }
            ],
            },
            {
            name: 'Samuele',
            avatar: "./img/avatar_3.jpg",
            visible: true,
            messages: [
            {
            date: '28/03/2020 10:10:40',
            message: 'La Marianna va in campagna',
            delateSection: false,
            status: 'received'
            },
            {
            date: '28/03/2020 10:20:10',
            message: 'Sicuro di non aver sbagliato chat?',
            delateSection: false,
            status: 'sent'
            },
            {
            date: '28/03/2020 16:15:22',
            message: 'Ah scusa!',
            delateSection: false,
            status: 'received'
            }
            ],
            },
            {
            name: 'Alessandro B.',
            avatar: "./img/avatar_4.jpg",
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            delateSection: false,
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Si, ma preferirei andare al cinema',
            delateSection: false,
            status: 'received'
            }
            ],
            },
            {
            name: 'Alessandro L.',
            avatar: "./img/avatar_5.jpg",
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ricordati di chiamare la nonna',
            delateSection: false,
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Va bene, stasera la sento',
            delateSection: false,
            status: 'received'
            }
            ],
            },
            {
            name: 'Claudia',
            avatar: "./img/avatar_5.jpg",
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ciao Claudia, hai novità?',
            delateSection: false,
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Non ancora',
            delateSection: false,
            status: 'received'
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'Nessuna nuova, buona nuova',
            delateSection: false,
            status: 'sent'
            }
            ],
            },
            {
            name: 'Federico',
            avatar: "./img/avatar_7.jpg",
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Fai gli auguri a Martina che è il suo compleanno!',
            delateSection: false,
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Grazie per avermelo ricordato, le scrivo subito!',
            delateSection: false,
            status: 'received'
            }
            ],
            },
            {
            name: 'Davide',
            avatar: "./img/avatar_8.jpg",
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ciao, andiamo a mangiare la pizza stasera?',
            delateSection: false,
            status: 'received'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
            delateSection: false,
            status: 'sent'
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'OK!!',
            delateSection: false,
            status: 'received'
            }
            ],
            }
            ]
      }
    },
    methods: {
      cambioChat(chatCliccata) {
        
        this.chatSelezionata = chatCliccata;

        
      },
      sendText(element, index) {

          element.push(
            {
              date: DateTime.now().setLocale("it").toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS),
              message: this.creazioneMessaggio,
              status: 'sent'
            }
          )
          this.creazioneMessaggio = "";

          setTimeout( function()
          {
            element.push(
              {
                date: DateTime.now().setLocale("it").toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS),
                message: "ok",
                status: 'received'
              }
            )
          }, 1000)
      },
      differenceDetector(index, word) {
        let testoRicercato = this.ricercaUtente.toLowerCase();
        this.contacts.forEach((element) => {
          let daVerificare = element.name.toLowerCase();

          if(daVerificare.includes(testoRicercato)) {
            element.visible = true;
          } else {
            element.visible = false;
          }

          return element.visible;
        });
      },
      addRemove(contact, element,index1, index) {

        console.log(contact);
        console.log(element);
        console.log(index1);
        console.log(index);
        this.contacts.forEach((element) => {
          
        });
      },
      getOnlyTime(strDateTime) {
        const dateAndTime = strDateTime.split(" ");

        const hourMinuteSecond = dateAndTime[1].split(":");

        return ` ${hourMinuteSecond[0]}:${hourMinuteSecond[1]} `
         
      },
      deleateMsg(element, index) {
        element.delateSection = true;
        console.log(element.delateSection);
        return element.delateSection;
      },
      }
  },
  ).mount('#app')
